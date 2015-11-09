import React from 'react';

export default React.createClass({

  //data is placeholder for the value being passed in
  getInitialState() {
    // console.log(this.props.data)
    return {
      answer: this.props.data.answer,
      question: this.props.data.question
    };
  },

  // e stands for event
  // setting changed state to new state (question and answer)
  updateQuestion(e) { 
    let newValue = e.currentTarget.value;

    this.setState({
      question: newValue
    })
  },

  updateAnswer(e) { 
    let newValue = e.currentTarget.value;

    this.setState({
      answer: newValue
    })
  },

  submitHandler(e) {
    e.preventDefault();
    this.props.onSubmitClick(this.state.question, this.state.answer);
  },

  deleteHandler(e) {
    e.preventDefault();
    this.props.onDeleteClick()
  },

  render() {
    return (
      <div>
        <form>
          <h2>Question</h2>
          <input type="textarea" 
            value={this.state.question}
            onChange={this.updateQuestion}/>
          <h2>Answer</h2>
          <input type="text"
            value={this.state.answer} 
            onChange={this.updateAnswer}/>
          <button onClick={this.deleteHandler}>Delete Card</button>
          <input type="submit" onClick={this.submitHandler} value='Save Card'></input>
        </form>
      </div>
    );
  }
}); 
