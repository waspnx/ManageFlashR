import React from 'react';

export default React.createClass({

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
            onChange={this.updateQuestion} 
            value={this.state.Question}/>
          <h2>Answer</h2>
          <input type="text" 
            onChange={this.updateAnswer} 
            value={this.state.Answer}/>
          <button onClick={this.props.cancelClick}>Cancel</button>
          <input type="submit" onClick={this.submitHandler}>Save Card</input>
        </form>
      </div>
    );
  }
}); 