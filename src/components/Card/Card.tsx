import { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
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
export function Card({ obj }: Props) {
  return (
    <Link className="card" to={"/details/" + obj.id}>
      <img src={obj.images[0]} alt="img" />
      <div className="details">
        <h3>{obj.title}</h3>
        <p>{obj.description}</p>
        <p id="price">{obj.price} $</p>
      </div>
    </Link>
  );
}
