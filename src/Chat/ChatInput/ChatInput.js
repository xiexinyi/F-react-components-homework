import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';
import answersData from '../../data/answers.json';

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleClick = () => {
    this.setState({ value: '' });
    const message = {
      text: this.state.value,
      role: ROLE.CUSTOMER,
    };
    const answerMessage = answersData.filter((answer) =>
      answer.tags.find((tag) => message.text.includes(tag))
    );

    this.props.handleInput(answerMessage.length !== 0 ? [message].concat(answerMessage) : message);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="button" onClick={this.handleClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
