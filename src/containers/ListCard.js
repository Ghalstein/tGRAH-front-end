import React, { Component } from "react";
import Card from '../components/Card'

class ListCard extends Component {

  state = {
    cards: []
  }


  handleClick = () => {
    console.log('hello')
  }
  

  render() {
    const renderListCards = this.props.listCards.map(card => {
      return (
        <div className='list-card-container'>
          <h2>{card.name}</h2>
          {card.tasks.map(task => <Card task={task.content} />)}
          <div className="add-card-button">
            <button onClick={this.handleClick}>Add a card</button>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        {renderListCards}
      </React.Fragment>
    );
  }
}

export default ListCard;
