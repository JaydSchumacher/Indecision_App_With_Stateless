import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

      
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// class OldSyntax {
//     constructor() {
//         this.name = 'John';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi. My name is ${this.name}.`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());


//--------

// class NewSyntax {
//     name = 'Tom';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}.`;
//     }
// }
// const newSynstax = new NewSyntax();
// const newGetGreeting = newSynstax.getGreeting;
// console.log(newGetGreeting());