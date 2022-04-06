import { Component } from 'react';
import Tricks from '../Tricks/Tricks.js';
import getData from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: null,
      error: null
    }
  }

  componentWillMount() {
    getData()
    .then(response => {
      if(!response.ok) {
        throw new Error(response)
      }
      return response.json()
    })
      .then(data => {
        this.setState({tricks: data})
      })
      .catch(error => console.log(error))
  }
  render() {
    let tricks = '';

    if(this.state.tricks) {

      tricks = <Tricks tricks={this.state.tricks} />
    }

    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        {tricks}
      </div>
    );
  }
}

export default App;
