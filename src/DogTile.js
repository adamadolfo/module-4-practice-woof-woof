import React from "react"

class DogTile extends React.Component {
    

    render(){
        
        return (
        <h3 onClick={() => this.props.clickedDog(this.props.dog.id) } >{this.props.dog.name}</h3>
        )
            
        
            

        
    }
}

export default DogTile