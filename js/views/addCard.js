import React from 'react';

export default React.createClass({

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

  submitHandler() {
    
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