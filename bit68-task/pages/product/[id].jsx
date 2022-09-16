import Image from 'next/image';
import React, {useState} from 'react';
import Heart from '../../components/Heart';
import ProductCard from '../../components/ProductCard';
import Star from '../../components/Star';

export async function getServerSideProps(context)
{
    const products = await fetch('https://63189f2cf6b281877c71eab0.mockapi.io/products').then(res => res.json());
    if (!products.filter(product => product.id === context.params.id)[0]) {
        return {
          notFound: true,
        }
      }
    return {
        props: {product: products.filter(product => product.id === context.params.id)[0], products}
    }
}
function ProductPage({product, products}) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }); 
    const [selectedImage, setSelectedImage] = useState(product.img[0])
    const [count, setCount] = useState(1);
    function increment() {
        setCount(count + 1);
    }
    function decrement(){
        setCount(Math.max(count - 1, 1))
    }

    return ( 
        <div className="flex flex-wrap justify-center max-w-[1280px] w-2/3 min-w-fit mx-auto px-3 my-8">
            <div className="w-1/2 min-w-[340px] h-fit flex justify-around">
                <div className="flex flex-col w-1/6 px-3 justify-around">
                    {product.img.slice(0,6).map((img) =>
                    <button onClick={()=>setSelectedImage(img)} className='w-full aspect-square relative'>
                        <Image src={img} layout="fill" objectFit='contain'/>
                    </button>
                    )}
                </div>
                <div className='w-8/12 aspect-square px-4 relative'>
                    <Image src={selectedImage} layout="fill" objectFit='contain'/>
                </div>
            </div>
            <div className="w-1/2 min-w-[340px] h-fit flex flex-col mt-9">
                <div className="flex text-[10px] md:text-sm text-gray-500 uppercase">
                        <div>Apple</div>
                        <div className="flex-grow"></div>
                        <input type="checkbox" id="heart" className="hidden peer"/>
                        <Heart empty id="heart" className="peer-checked:hidden"/>
                        <Heart id="heart" className="hidden peer-checked:block"/>
                </div>
                <div className="text-black text-xs md:text-lg font-medium capitalize">{product.name}</div>
                <div className="flex items-end text-[8px] md:text-sm text-gray-500 my-4">
                    {[...Array(5).keys()].map(key =>
                    <Star empty={key>=product.numberOfStars}/>)
                    }
                    <div className='mx-1'></div>
                    <div>({product.numberOfReviews} Reviews)</div>
                </div>
                <div className={"text-xl md:text-3xl font-medium " + (product.inStock?"text-blue-700" : "text-black")}>{currencyFormatter.format(product.priceAfterdiscount)}</div>
                <div className={"text-[7px] md:text-xs " + (product.inStock? "text-green-700" : "text-red-700")}>{product.inStock? "In" : "Out of"} stock</div>
                <div className="flex text-lg md:text-2xl mt-6 mb-2">
                    <button onClick={increment} className="h-fill aspect-square border border-black rounded-full leading-none">+</button>
                    <div className="mx-4">{count}</div>
                    <button onClick={decrement} className="h-fill aspect-square border border-black rounded-full leading-none">-</button>
                </div>
                <div className="text-black text-xs my-1">Payment Plans</div>
                <div className="flex flex-wrap h-fit mb-1">
                    <OptionBox name="payment-plan" id="full">Full Price</OptionBox>
                    <OptionBox name="payment-plan" id="installment">Installments</OptionBox>
                </div>
                <div className="flex flex-wrap h-fit mb-1">
                    <OptionBox name="bank" id="CIB"><Image src="/CIB.png" layout='fill' objectFit='contain'/></OptionBox>
                    <OptionBox name="bank" id="CIB2"><Image src="/CIB.png" layout='fill' objectFit='contain'/></OptionBox>
                    <OptionBox name="bank" id="CIB3"><Image src="/CIB.png" layout='fill' objectFit='contain'/></OptionBox>
                    <OptionBox name="bank" id="CIB4"><Image src="/CIB.png" layout='fill' objectFit='contain'/></OptionBox>
                    <OptionBox name="bank" id="CIB5"><Image src="/CIB.png" layout='fill' objectFit='contain'/></OptionBox>
                </div>
                <div className="text-black text-xs my-1">Insurance</div>
                <div className="flex flex-wrap h-fit mb-1">
                    <OptionBox name="insurance" id="none">None</OptionBox>
                    <OptionBox name="insurance" id="1-year">
                        <div> 1-year </div>
                        <div>{currencyFormatter.format(product.price/20)}</div>
                    </OptionBox>
                    <OptionBox name="insurance" id="2-year">
                        <div> 2-year </div>
                        <div>{currencyFormatter.format(product.price/12)}</div>
                    </OptionBox>
                </div>
                <button className={"w-full h-8 rounded-xl justify-center items-center flex text-white text-xs mt-9 mb-4 " + (product.inStock? "bg-blue-700 hover:bg-blue-500" : "bg-black")}>Add To Cart</button>
                <div className='flex text-gray-500 items-center pt-2 mt-2 border-t'>
                    <span className="material-symbols-outlined text-sm md:text-xl">
                        local_shipping
                    </span>
                <div className="mx-1 text-[8px] md:text-sm">Free shipping, arrives by {(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + 2)).toLocaleString('en-US', {weekday: 'short', month:'short', day:'numeric'})}</div>
                </div>
                <div className='flex text-gray-500 items-center'>
                    <span className="material-symbols-outlined text-sm md:text-xl">
                        swap_horizontal_circle
                    </span>
                <div className="mx-1 text-[8px] md:text-sm">Free 10-day return window starts {(new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, (new Date()).getDate())).toLocaleString('en-US', {month:'short', day:'2-digit'})}</div>
                </div>
            </div>
            <ProductCard products={products}/>
        </div>
     );
}

function OptionBox({name, id, children}) {
    return ( 
        <div className="h-fit">
            <input type="radio" name={name} id={id} className="peer hidden"/>
            <label for={id} className="peer-checked:ring-1 border rounded-xl w-20 h-14 md:w-28 md:h-20 flex mr-1 mt-1 cursor-pointer ">
                <div className="h-full w-full place-self-center text-[11px] md:text-base relative flex flex-col justify-center items-center ">{children}</div>
            </label>
        </div>
     );
}

export default ProductPage;