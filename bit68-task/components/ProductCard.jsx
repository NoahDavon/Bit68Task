import Image from 'next/image';
import React, {useState} from 'react';
import Pagination from './Pagination';
function ProductCard({products}) {
    const [page, setPage] = useState(0);
    return ( 
        <div>
            <div className="mobile-products md:hidden border my-4 mx-auto h-fit w-fit rounded-[10px] divide-y flex flex-col">
            {[...Array(Math.floor(products.length/2)).keys()].map((index)=>
                <ProductRow key={index} start={index} len={2} products={products}/>
            )}  
            </div>
            <div className="md:flex flex-col hidden mx-auto w-fit">
                <div className="desktop-products border my-4 h-fit w-fit rounded-[10px]">
                    <ProductRow start={page} len={4} products={products}/>
                </div>
                <div className="flex w-fit mx-auto">
                    <button className='mx-4 w-fit rounded-full bg-white drop-shadow-lg' onClick={() => setPage(prev => (prev - 1 + (products.length/4)) % (products.length/4))}>
                        Prev
                    </button>
                    <div className="flex w-fit rounded-full bg-white drop-shadow-lg">
                        <Pagination count={products.length/4} name="products" page={page} onChange={setPage}/>
                    </div>
                    <button className='mx-4 w-fit rounded-full bg-white drop-shadow-lg' onClick={() => setPage(prev => (prev + 1) % (products.length/4))}>
                        Next
                    </button>
                </div>
            </div>
        </div>
     );
}
function ProductRow({start, len, products}) {
    return (
        <div className="flex h-56 w-full divide-x">
            {products.slice(start*len, start*len+len).map((product) =>
            <Product key={product.id} product={product}/>
            )}
        </div>
);
}

function Product({product}) {
    const discounted = product.priceAfterdiscount !== product.price;
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return ( 
        <a href={"/product/" + product.id}className="h-full w-44">
            <div className="relative h-1/2 mx-6 my-3">
                <Image src=	{product.img[0]} layout="fill" objectFit="contain"/>
            </div>
            <div className="mx-4 my-3 font-sans text-[10px] capitalize">{product.name}</div>
            <div className='mx-4 mt-3 font-sans text-[12px] flex'>
                <div className={discounted && "text-red-700"}>{currencyFormatter.format(product.priceAfterdiscount)}</div>
                <div className='flex-grow'></div>
                <div className="text-gray-300 line-through">{discounted && currencyFormatter.format(product.price)}</div>
            </div>
            <div className={'mx-4 my-1 font-sans text-[7px] ' + (product.inStock? 'text-green-700' : 'text-red-700')}>{product.inStock? "In" : "Out of"} stock</div>
        </a>
     );
}


export default ProductCard;