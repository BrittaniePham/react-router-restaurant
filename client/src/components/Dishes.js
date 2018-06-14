import React from 'react';
import axios from 'axios';
import Dish from './Dish'

class Dishes extends React.Component {
  state = { dishes: [] }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.id}`)
      .then( res => {
        console.log(res)
        this.setState({ dishes: res.data })
      })
  }

  render() {
    const { dishes } = this.state;
    return(
      <ul>
        { dishes.map( dish =>
            <li key={dish.id}>
              <Dish dish={dish} />
            </li>
          )
        }
      </ul>
    )
  }
}

export default Dishes;