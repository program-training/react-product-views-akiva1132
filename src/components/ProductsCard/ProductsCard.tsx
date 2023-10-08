import "./ProductsCard.css"
import { Card, Product } from "../Card/Card";


export function ProductsCard(productsData:Product[]) {
  return (
    <div id="productCard">
        {productsData.map((productObj) => <Card key={productObj.id} obj={productObj}></Card>)}
    </div>
  )};