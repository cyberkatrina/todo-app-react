import React, { Component } from 'react';
import logo from './logo.svg';
import TodoCard from './TodoCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editIdx: null,
      inputValue: "",
      listOfTodos: []
    }
  }

  handleEdit = (index) => {
    this.setState({
      editIdx: index,
      inputValue: this.state.listOfTodos[index]
    })
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
      event.preventDefault();
      const { editIdx, inputValue, listOfTodos } = this.state;

      if (editIdx !== null) {
        // Update the existing item
        const updatedTodos = listOfTodos.map((todo, index) => 
          index === editIdx ? inputValue : todo
        );
        this.setState({
          listOfTodos: updatedTodos,
          editIdx: null,
          inputValue: ""
        });
      } else {
        // Add a new item
        this.setState({
          listOfTodos: [...listOfTodos, inputValue],
          inputValue: ""
        });
      }
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
              // &nbsp;
              // <button onClick={() => this.handleClick(index)}>Delete</button>
              // &nbsp;
              // <button onClick={() => this.handleEdit(index)}>Edit</button>
            
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
