import React from "react"

const Container = (props) =>  {
         
        return (
            <div>
               <h1> {props.featured.name} </h1>
               <img src={props.featured.image} />
               <br />
               <button onClick={() => props.toggle(props.featured.id)} > {props.featured.isGoodDog ? "Good Dog!" : "Bad Dog!"} </button>   
            </div>
        )
            
        
            

        
    
}

export default Container