// React is a class from react package
import React from  'react'
// S, user are alias names for Sample as they are components
import S from './Sample';
import User from './User';
import Union from './Union';
import State from './States';
import Hook from './Hooks';
import Resume from './Resume';

import {profiles} from './data.json'

import {BrowserRouter, Route, Link} from 'react-router-dom'
// This is Functional components
// Here name should be equal to file name
var App=()=>{
  return <div><h2> Heading</h2></div>

}

var Home=()=>{
  return(
  profiles.map((value,index)=>(
    <div>
      <h2>{value.basics.name}</h2>
      <h2>{value.basics.role}</h2>
    </div>
    
  )
  )
  );
}



// This is class Component 
// Which extends the parrent class React component

class App1 extends React.Component{
  render(){
    return(
       <div>
         <BrowserRouter>
          <Route exact path='/' component={Home}/>
          <Route exact path='/resume' component={Resume}/>
          <Route exact path='/state' component={State}/>
          <Route exact path='/user' component={User}/>
          <Route exact path='/union' component={Union}/>
          <Route exact path='/app' component={App}/>
          <Route exact path='/sample' component={S}/>
          
         </BrowserRouter>
         {/* <Hook/>
         <State/>
         <User/>
          <Union/>
         <S/>
         <App/>
         <h3>Class Component</h3>*/}
         </div> 
    )
 }
}

// To access the functional component App also then we 
// can give <App/> it will invoke that app also

// This makes the app accessible globally by imorting this
export default App1;
