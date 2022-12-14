import Head from 'next/head'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider'
import SubCard from '../components/SubCard';

export async function getStaticProps(){
  var promises = []
  promises.push(fetch("https://63189f2cf6b281877c71eab0.mockapi.io/slider").then(res => res.json()));
  promises.push(fetch("https://63189f2cf6b281877c71eab0.mockapi.io/products").then(res => res.json()));
  var bgImages;
  var products;
  await Promise.all(promises).then(values =>{
    bgImages = values[0];
    products = values[1];
  })
  return{
    props: {
      bgImages,
      products
    }
  }
}
export default function Home({bgImages, products}) {

  return (
    <div className="flex flex-col flex-grow">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider bgImages={bgImages}/>
      <ProductCard products={products} explore/>
      <div className="flex-grow"></div>
      <SubCard/>
    </div>
  )
}
