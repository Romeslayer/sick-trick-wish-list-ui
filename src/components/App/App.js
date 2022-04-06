import { Component } from 'react';
import Tricks from '../Tricks/Tricks.js';
import Form from '../Form/Form.js';
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

  addTrick = (trick) => {
    this.setState({tricks: [...this.state.tricks, trick]})
  }
  render() {
    let tricks = '';

    if (this.state.tricks) {
      tricks = <Tricks tricks={this.state.tricks} />
    }

    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick} tricks={this.state.tricks} />
        {tricks}
      </div>
    );
  }
}

export default App;
