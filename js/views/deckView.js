// this view shows 
// the individual flashR cards
// that comprise the deck that was clicked in UserView


import React from 'react';

const data= [
  {
    "_id": "563a765b8bfee5ce595d0d09",
    "question": "Nixelt?",
    "answer": "male"
  },
  {
    "_id": "563a765ba6be56d6faf1cfcc",
    "question": "Aquacine?",
    "answer": "male"
  },
  {
    "_id": "563a765b0a88811ce227eff9",
    "question": "Hydrocom?",
    "answer": "male"
  },
  {
    "_id": "563a765be19a19ff423a1494",
    "question": "Snips?",
    "answer": "male"
  },
  {
    "_id": "563a765b42e8cc2b5214dc81",
    "question": "Zizzle?",
    "answer": "male"
  }
];


cardClickHandler() {

 this.props.onCardClick();

},

addCardHandler(){
  this.props.onAddCardClick();
}
processCards(data) {
  return (
    <div className='cardContainer' key={data._id} 
      onClick={() => this.cardClickHandler(data._id)}>
      Question: {data.question}
      <br>
      Answer: {data.answer}
    </div>
   )
},

export default React.createClass({
  render() {
     <div className='deckViewContainer'>

        {this.props.cards().map(this.processCards)}

      <div className="addCard">
        <i className="fa fa-plus" onClick={() => this.addCardHandler()}></i>
      </div>          
    </div>

    

  }
}); 