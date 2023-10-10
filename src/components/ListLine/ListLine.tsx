import { useState } from "react";
import "./ListLine.css";
import {  useNavigate } from "react-router-dom";
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
export function ListLine({ obj }: Props) {
  const navigate = useNavigate()
  return (
    <ul>
        <li onClick={()=>navigate(`/details/${obj.id}`)}>
            <h3>{obj.title}</h3>
            <img id="imgTable" src={obj.images[0]} alt="img" />
            <p>{obj.description}</p>
            <p>{obj.price} $</p>
        </li>
    </ul>
  );
}
