import { useEffect, useState } from "react";

function Card(props){
function addcart(){

}

    // const imgStyle = {"width" : "100px" "height" : "100px"}
    const [stock,setStock] = useState("");

    useEffect(()=>{
        if (props.obj.quantity>=100){
            setStock("In stock")
        }
    
        if(props.obj.quantity<100){
            setStock("Out of stock")
        }
    }, [])
    
    return (
        <>
        <div className="card">
            <h1>{props.obj.name}</h1>
            <h1 id="mod">{props.obj.model}</h1>
            <img id="imgg" src={props.obj.image}></img>
            <h1>{props.obj.color}</h1>  
            {/* <h1>{props.obj.quantity}</h1> */}
            <h1 className="stock">{stock}</h1>
            <button onClick={addcart} className="cart">Add To Cart</button>
            
        
        </div>
        </>
    );
}

export default Card;