import { useState, useEffect } from "react";
import "./GetProducts.css";
import { Product } from "../Card/Card";
import { ProductsCard } from "../ProductsCard/ProductsCard";
import { ProductsTable } from "../ProductTable/ProductTable";
import { TbCards } from "react-icons/tb";
import { AiOutlineTable } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { ProductsList } from "../ProductsList/ProductsList";
import { Link } from "react-router-dom";
export function AllProductCard() {
  const [displayMode, setDisplayMode] = useState(1);
  const [productsData, setProductsData] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((products) => setProductsData(products.products));
  }, []);
  return (
    <div className="page" id="AllProductCard">
      <h1>products</h1>
      <h3>products in stack</h3>
      <div id="setDisplayMode">
        <ul>
          <a onClick={() => setDisplayMode(1)}>
            <TbCards />
          </a>
          <a onClick={() => setDisplayMode(2)}>
            <AiOutlineTable />
          </a>
          <a onClick={() => setDisplayMode(3)}>
            <AiOutlineUnorderedList />
          </a>
        </ul>
      </div>
      {displayMode === 1 ? ProductsCard(productsData) : null}
      {displayMode === 2 ? ProductsTable(productsData) : null}
      {displayMode === 3 ? ProductsList(productsData) : null}
    </div>
  );
}
