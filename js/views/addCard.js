import React from 'react';

export default React.createClass({

  submitHandler(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.Answer, this.state.Question);
  },
  // e stands for event
  // setting changed state to new state (question and answer)
  updateQuestion(e) { 
    let newQuestion = e.currentTarget.value;

    this.setState({
      Question: newQuestion
    });
  },

  updateAnswer(e) { 
    let newAnswer = e.currentTarget.value;

    this.setState({
      Answer: newAnswer
    });
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
          <input type="textarea" 
            onChange={this.updateQuestion} />
          <h2>Answer</h2>
          <input type="text" 
            onChange={this.updateAnswer} />
          <button onClick={this.props.cancelClick}>Cancel</button>
          <input type="submit" onClick={this.submitHandler}>Save Card</input>
        </form>
      </div>
    );
  }
}); 