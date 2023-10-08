import { useEffect, useState } from "react";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: 12.96;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
interface Props {
  obj: Product;
}
export function Details() {
  const {id} = useParams()
  const [img, setImg] = useState<string>("");
  const [productsData, setProductsData] = useState<Product | null>(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/product/${id}`)
      .then((data) => data.json())
      .then((product) => {setProductsData(product),
      setImg(product.images[0])
    });
  }, []);
  if (!productsData) {
    return <></>;
  }
  return (
    <div className="page" id="Details">
      <div id="cardDetails">
        <h1>{productsData.title}</h1>
        <img src={img} alt="img" />
        <ul id="ulImg">
            {productsData.images.map(img => <li onClick={c => setImg(img)} key={img}><img id="listImg" src={img} alt="img" /></li>)}
        </ul>
        <h3>description:</h3>
        <p>{productsData.description}</p>
      </div>
    </div>
  );
}
