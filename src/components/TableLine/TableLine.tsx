import { useState } from "react";
import "./TableLine.css";
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
export function TableLine({ obj }: Props) {
  const navigate = useNavigate()
  return (
    <tr onClick={()=>navigate(`/details/${obj.id}`)} >
      <td>
        <h3>{obj.title}</h3>
      </td>
      <td>
        <img id="imgTable" src={obj.images[0]} alt="img" />
      </td>
      <td>
        <p>{obj.description}</p>
      </td>
      <td>
        <p>{obj.price + " $"} </p>
      </td>
    </tr>
  );
}
