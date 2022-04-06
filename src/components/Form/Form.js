import React, {Component} from 'react';
import './Form.css';

class Form extends Component {

  constructor(props) {
    super(props);
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

    this.setState({[name]:value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const trick = {
      id: this.props.tricks.length + 1,
      name: this.state.name ,
      stance: this.state.stance ,
      tutorial: this.state.link
    }
    this.props.addTrick(trick);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <select id="stance" value={this.state.stance} onChange={this.handleChange}>
        <option hidden>Choose your Stance</option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input id="name" value={this.state.name} onChange={this.handleChange}/>
      <select id="obstacle" value={this.state.obstacle} onChange={this.handleChange}>
        <option hidden>Choose your Obstacle</option>
        <option value="Flatground" >Flatground</option>
        <option value="Ledge" >Ledge</option>
        <option value="Rail" >Rail</option>
        <option value="Stairs" >Stairs</option>
        <option value="Pool" >Pool</option>
      </select>
      <input id="link" type="text"  value={this.state.link} onChange={this.handleChange}/>
      <input type="submit" value="Send It!" />
      </form>
    )
  }
}

export default Form;
