
import { use, useState } from "react";
import AllCard from "../Card/AllCard";
import NoData from "../NoData/NoData";
import Cart from "../Cart/Cart";


const Products = ({prodData, setAddedcart, addedCart}) => {

    

    const [clickedBtn, setClickedBtn]=useState("products")
    
    console.log(clickedBtn)

   const data = use(prodData)
   

    return (
        <div className="container mx-auto mt-30">

            <div>
                <h2 className="font-extrabold text-[48px] text-center mb-8">Premium Digital Tools</h2>
                <p className="text-[16px] text-[#627382] text-center">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
     
                <div className="mx-auto text-center w-47 p-px mb-10 my-5 rounded-full border border-[#F6F6F6]">
                    <button 
                    onClick={()=>setClickedBtn("products")}
                    className={(clickedBtn==="products")?`btn btn-primary rounded-full`:`btn bg-white border-none rounded-full`}>Products</button>
                    <button
                    onClick={()=>setClickedBtn("cart")}
                    className={(clickedBtn==="cart")?`btn btn-primary rounded-full`:`btn bg-white border-none rounded-full`}>Cart {addedCart.length>0?`(${addedCart.length})`:"(0)"}</button>
                </div>
            </div>
            <div className={clickedBtn==="cart"?"hidden":""}>
            <AllCard data={data}></AllCard>
            </div>
            <div className={clickedBtn==="products"?"hidden":""}>
            <Cart setAddedcart={setAddedcart} addedCart={addedCart}></Cart>
            </div>
        </div>
    );
};

export default Products;