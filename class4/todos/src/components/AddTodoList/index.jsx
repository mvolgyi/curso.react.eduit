import React from 'react';

class AddTodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todoName: ''
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
  }

  handlerChange(event){
    this.setState({
      todoName:  event.target.value,
    })
  }

  handlerOnSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({type:'ADD_TODOS_LIST', title: this.state.todoName});
    this.setState({
      todoName: ''
    });
  }

  render(){
    return(
      <form onSubmit={this.handlerOnSubmit}>
        <input type="text" value={this.state.todoName} onChange={this.handlerChange} />
      </form>
    )
  }
}


export default AddTodoList;