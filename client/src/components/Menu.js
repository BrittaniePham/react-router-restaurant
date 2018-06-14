import React from 'react';
import axios from 'axios';
import Dishes from './Dishes';

class Menu extends React.Component {
  state = { menu: {} }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ menu: res.data }) )
  }

  render() {
    return (
      <div>
        <h1>Dishes</h1>
        <Dishes id={this.props.match.params.id} />
      </div>
    )
  }
}

export default Menu;