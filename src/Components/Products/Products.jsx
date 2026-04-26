
import { use, useState } from "react";
import AllCard from "../Card/AllCard";


const Products = ({prodData}) => {

    const [clickedBtn, setClickedBtn]=useState("products")
    console.log(clickedBtn)

   const data = use(prodData)
   

    return (
        <div className="container mx-auto mt-40">

            <div>
                <h2 className="font-extrabold text-[48px] text-center mb-8">Premium Digital Tools</h2>
                <p className="text-[16px] text-[#627382] text-center">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

                <div className="mx-auto text-center w-47 p-px mb-10 my-5 rounded-full border border-[#F6F6F6]">
                    <button 
                    onClick={()=>setClickedBtn("products")}
                    className={(clickedBtn==="products")?`btn btn-primary rounded-full`:`btn rounded-full`}>Products</button>
                    <button
                    onClick={()=>setClickedBtn("cart")}
                    className={(clickedBtn==="cart")?`btn btn-primary rounded-full`:`btn rounded-full`}>Cart (2)</button>
                </div>
            </div>

            <AllCard data={data}></AllCard>
        </div>
    );
};

export default Products;