import React, { Component } from 'react'
import ListCards from './ListCards'

class ListContainer extends Component {


  state = {
    listCards: this.props.currentProject.lists,
    inputValue: '',
    clicked: false
  }

  // this.props.currentProject.lists.map

  // handleClick = () => {
  //   this.setState({
  //     listCards: [ {name: 'New Taskslakjshdflkajshdflkjahsdflkjhasdflkjhasdflkjhasdflkjhasdflkhjasd'}, ...this.state.listCards ]
  //   })
  // }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    fetch(`http://localhost:3000/lists`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.token
      },
      body: JSON.stringify({
        project_id: 2,
        name: this.state.inputValue,
      })
    })
    .then(resp => resp.json())
    .then(respData => {
      this.setState({
        listCards: [respData.data.attributes, ...this.state.listCards],
        clicked: false,
        inputValue: ''
      })
    })

    // this.setState({
    //   listCards: [{name: this.state.inputValue}, ...this.state.listCards]
    // })
  }


  render() {
    // debugger;
    return (
      <div className="list-container">
        <ListCards listCards={this.state.listCards} loadCurrentProject={this.props.loadCurrentProject}/>
        { !this.state.clicked ?
        <div onClick={this.handleClick} className='list-card-container list-container-add-list-btn'>
          <h3>Add a List</h3>
        </div>
        :
        <form onSubmit={this.handleSubmit} className='list-container-form'>
          <input type="text" onChange={this.handleChange} value={this.state.inputValue} placeholder="Enter a List title..."/>
          <div className='list-container-form-submit-wrapper'>
            <input type="submit"/>
            <h2 onClick={this.handleClick}>x</h2>
          </div>
        </form>
        }
      </div>
    )
  }
}

export default ListContainer
