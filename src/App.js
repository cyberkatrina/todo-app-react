import React, { Component } from 'react';
import logo from './logo.svg';
import TodoCard from './TodoCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: "",
      listOfTodos: []
    }
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
      // Add a new item
      this.setState({
        listOfTodos: [...this.state.listOfTodos, this.state.inputValue],
        inputValue: ""
      });
  }

  deleteItem = (index) => {
    let objectCopy = [...this.state.listOfTodos]
    objectCopy.splice(index, 1)
    this.setState({listOfTodos: [...objectCopy]})
  }

  render() {
      return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type='submit'>
              {this.state.editIdx !== null ? 'Update' : 'Submit'}
            </button>
          </form>
          <ol>{this.state.listOfTodos.map((todo, index) => {
            return <TodoCard key={index} index={index} title={todo} clickToRemove={this.deleteItem}/>
          })}</ol>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            {this.props.name}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
