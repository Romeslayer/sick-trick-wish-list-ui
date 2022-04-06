import { Component } from 'react';
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
        console.log(data)
        this.setState({tricks: data})
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;
