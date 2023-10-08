import "./ProductTable.css"
import {  Product } from "../Card/Card";
import { TableLine } from "../TableLine/TableLine";

export function ProductsTable(productsData:Product[]) {
  return (
    <div >
      <table id="productTable"> 
  <tr>
    <th><strong>title</strong></th>
    <th><strong>img</strong></th>
    <th><strong>description</strong></th>
    <th><strong>price</strong></th>
  </tr>
  {productsData.map((productObj) => <TableLine key={productObj.id} obj={productObj}></TableLine>)}
</table>
    </div>
  )};