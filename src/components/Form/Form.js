import React, {Component} from 'react';
import './Form.css';

class Form extends Component {

  constructor() {
    super();
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      link: '',
    }
  }

  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.id;

    this.setState({[name]:[value]})
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <select id="stance" value={this.state.stance} onChange={this.handleChange}>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input id="name" value={this.state.name} onChange={this.handleChange}/>
      <select id="obstacle" value={this.state.obstacle} onChange={this.handleChange}>
        <option value="Flatground" >Flatground</option>
        <option value="Ledge" >Ledge</option>
        <option value="Rail" >Rail</option>
        <option value="Stairs" >Stairs</option>
        <option value="Pool" >Pool</option>
      </select>
      <input id="link" type="text"  value={this.state.link} onChange={this.handleChange}/>
      <input type="button" value="Send It!" />
      </form>
    )
  }
}

export default Form;
