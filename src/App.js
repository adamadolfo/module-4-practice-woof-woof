import React from 'react';
import './App.css';
import DogBar from "./DogBar"
import Container from "./Container"

class App extends React.Component {

state = {
  dogData: [],
  dogClicked: false,
  filter: false 
}

componentDidMount() {
  fetch("http://localhost:4000/pups")
  .then(r => r.json())
  .then(data => this.setState({
    dogData: data
  }))
}

clickedDog = (id) => {
  let newDogsArray = [...this.state.dogData]
  let premier = newDogsArray.find(dog => dog.id === id)
  this.setState({ dogClicked: premier})
}

toggleGoodBad = (id) => {
  let newGoodBad = {
    isGoodDog: !this.state.dogClicked.isGoodDog
  }
  fetch(`http://localhost:4000/pups/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newGoodBad)
  }).then(res => res.json())
  .then(newDog => this.setState({ dogClicked: newDog }))
}


changeFilter = () => {
  this.setState({ filter: !this.state.filter})

}

  render() {

    return(
  <div className="App">
    <div id="filter-div">
    <button onClick={this.changeFilter} id="good-dog-filter">Filter good dogs: {this.state.filter ? "on" : "off"}</button>
    </div>
    <div id="dog-bar">
        <DogBar dogs={this.state.filter ? this.state.dogData.filter(dog => dog.isGoodDog) : this.state.dogData} clickedDog={this.clickedDog} />
    </div>
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        {this.state.dogClicked ?  <Container featured={this.state.dogClicked} toggle={this.toggleGoodBad}/> : null }
      </div>
    </div>
  </div>
      
    )

  }

   
  
}

export default App;
