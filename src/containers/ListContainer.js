import React, { Component } from 'react'
import ListCard from './ListCard'

class ListContainer extends Component {


  state = {
    listCards: [...this.props.currentProject.lists]
  }

  // this.props.currentProject.lists.map

  handleClick = () => {
    this.setState({
      listCards: [ {name: 'New Taskslakjshdflkajshdflkjahsdflkjhasdflkjhasdflkjhasdflkjhasdflkhjasd'}, ...this.state.listCards ]
    })
  }


  render() {
    // debugger;
    return (
      <div className="list-container">
        <ListCard listCards={this.state.listCards}/>
        <div onClick={this.handleClick} className='list-card-container'>
          <h3>Add a List</h3>
        </div>
      </div>
    )
  }
}

export default ListContainer
