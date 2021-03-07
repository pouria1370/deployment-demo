import React,{Component} from 'react'
import {CardList} from './Components/Card-lists/CardList-component'
import './App.css';
import {Search} from './Components/SearchBar/SearchBar-component.jsx'
import {Suspense,lazy} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'




export default class App extends Component {
constructor(props){
  super(props);
 this.state={Chapa:[],filterText:""}

  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").
    then(response=>response.json()).
    then(users=>this.setState({Chapa:users}))}

render(){
  const {Chapa,filterText}=this.state;
  const filterComponent=Chapa.filter(component=>component.name.
    toLowerCase().includes(filterText.toLowerCase()));
  return (  
    <div className="App">
    <h1 className="title">Pouria React Fitst Project</h1>
    <Search Placeholder="add a Text" 
    Changehandler={e=>this.setState({filterText:e.target.value})}/>
    <CardList users={filterComponent}/>

   
    </div> ) }

}

 