import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    const persons = this.state.persons;
    persons.splice (personIndex,1);
    this.setState({persons:persons});
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person 
              click = {()=>this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}/>
          })}
        </div>
      );
      style.backgroundColor='red';
    }

    const AssignedClasses = [];

    if(this.state.persons.length <=2){
      AssignedClasses.push(classes.red); //classes = ['red]
    }
    if (this.state.persons.length <=1){
      AssignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={AssignedClasses.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
