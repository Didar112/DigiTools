import { react, use } from "react";
import AllCard from "../Card/AllCard";


const Products = ({prodData}) => {

   const data = use(prodData)
   

    return (
        <div className="container mx-auto border mt-40">
            <AllCard data={data}></AllCard>
        </div>
    );
};

export default Products;