import React from 'react';

export default React.createClass({

  //data is placeholder for the value being passed in
  getInitialState() {
    return {
      Answer: this.props.data.Answer,
      Question: this.props.data.Answer
    };
  },

  // e stands for event
  // setting changed state to new state (question and answer)
  updateQuestion(e) { 
    let newValue = e.currentTarget.value;

    this.setState({
      Question: newValue;
    })
  },

  updateAnswer(e) { 
    let newValue = e.currentTarget.value;

    this.setState({
      Answer: newValue;
    })
  },

  submitHandler(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.Question, this.state.Answer);
  },

  render() {
    return (
      <div>
        <form>
          <h2>Question</h2>
          <input type="textarea" onChange={this.updateQuestion} value={this.state.Question}/>
          <h2>Answer</h2>
          <input type="text" onChange={this.updateAnswer} value={this.state.Answer}/>
          <button>Delete Card</button>
          <input type="submit" onClick={this.submitHandler}>Save Card</input>
        </form>
      </div>
    );
  }
}); 
