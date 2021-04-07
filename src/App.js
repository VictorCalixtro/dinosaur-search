import React, { Component } from 'react';
import './App.css';
import { DinoList} from "./components/dinolist/dino-list.component";
import mosasaurus from './img/mosasaurus.jpg'
import ankylosaurus from './img/ankylosaurus.jpg'
import spino from './img/spino.jpg'
import allo from './img/allo.jpeg'
import raptor from './img/raptor.jpg'
import carno from './img/carno.jpg'
import rex from './img/rex.jpg'
import { SearchBox } from './components/searchbox/search-box.component';

class App extends Component{ //Since we imported it we dont have to type React.Component
  constructor(){

    super();
    this.state = {
      dinos: [
        {
          name: 'Mosasaurus',
          id: 'a1',
          image: mosasaurus
        },
        {
          name: 'Ankylosaurus',
          id: 'a2',
          image: ankylosaurus
        },
        {
          name: 'Spinosaurus',
          id: 'a3',
          image: spino
        },
        {
          name: 'Allosaurus',
          id: 'a4',
          image: allo
        },
        {
          name: 'Raptor',
          id: 'a5',
          image: raptor
        },
        {
          name: 'Carnotaurus',
          id: 'a6',
          image: carno
        },
        {
          name: 'Tyrannosaurus',
          id: 'a7',
          image: rex
        }
      ], searchField: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render(){

    const { dinos, searchField } = this.state;
    const filtereddinos = dinos.filter(dinos =>
        dinos.name.toLowerCase().includes(searchField.toLowerCase())
    );


    return (
        <div className='App'>
          <SearchBox onSearchChange={this.onSearchChange} />
          <DinoList dinos={filtereddinos}/>


        </div>
  );
  }
}

export default App;
