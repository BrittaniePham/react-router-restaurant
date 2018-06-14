import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Menus extends React.Component {
  state = { menus: [] }

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ menus: res.data }) )
  }

  render() {
    const { menus } = this.state;
    return(
      <ul>
        <h2>MENUS</h2>
        { menus.map( m =>
            <li key={m.id}>
              <Link to={`/menus/${m.id}`}>{m.name}</Link>
            </li>
          )
        }
      </ul>
    )
  }
}

export default Menus;
