import "./ProductsList.css"
import {  Product } from "../Card/Card";
import { TableLine } from "../TableLine/TableLine";
import { ListLine } from "../ListLine/ListLine";

export function ProductsList(productsData:Product[]) {
  return (
    <div >
    {/* <li><strong>title</strong></li>
    <li><strong>img</strong></li>
    <li><strong>description</strong></li>
    <li><strong>price</strong></li> */}
      {productsData.map((productObj) => <ListLine key={productObj.id} obj={productObj}></ListLine>)}

    </div>
  )};