import React from "react"
import DogTile from "./DogTile"

class DogBar extends React.Component {
    

    render(){
        return (
            <>
                {this.props.dogs.map(dog => <DogTile dog={dog} key={dog.id} clickedDog={this.props.clickedDog} /> )}

            </>
        )
            
        
            

        
    }
}

export default DogBar