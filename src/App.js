import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		person : [
		{name: "Abhishek", age: 26},
		{name: "Deepak", age: 24},
		{name: "Tarun", age: 25},
		{name: "Atishay", age: 26}
		]
	};
  	render(){
		return(
			<div className="App">
				<h1>This is My Heading</h1>
				<h3>This is My Paragraph</h3>
				{
					this.state.person.map((elementItem)=>{
						return <Person name = {elementItem.name} age={elementItem.age}></Person>
					})
				}
			</div>
		);
  	}
}

export default App;
