// React is a class from react package
import React from  'react'
// S, user are alias names for Sample as they are components
import Resume from './Resume';
import data,{profiles} from './data.json'
import {BrowserRouter, Route, Link} from 'react-router-dom'
// function App() {
//     return (
//       <div className="App">
//         {/* <Card></Card> */}
//         <BrowserRouter>
//             <Route exact path="/" component={Card}/>
//             <Route path="/resume" component={Resume}/>
//         </BrowserRouter>
//       </div>
//     );
//   }
  
  
  
//   let Card= () =>{
//     let profile=data.profiles;
//     console.log(profile)
//     return(
//       <div className="row ">
//         {profile.map((carddetails,index)=>(
//           <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={ index }>
//             <div className="card text-center">
//               <div className="card-body">
//                 <h1>{carddetails.details.name}</h1>
//                 <Link to={{pathname:'/resume', sameCardData:{id:index}}} className="btn btn-primary">View Details</Link>
//               </div>
//             </div>
//           </div>
//         ))} 
//       </div>
//     );
//   }
  
var Home=()=>{
    
    return(
        <div class="row" style={{justifyContent:"center"}}>
        {profiles.map((value,index)=>(
            <div className="col-lg-4 col-md-4 col-sm-10 mt-4" key={index}>
                <div className="card text-center">
                    <div className="card-img"><img class="img-fluid" style={{height:"300px", width:"100%",display:"block", marginLeft: "auto", marginRight: "auto"}} src={value.image} /></div>
                   <div className="card-body">
                     <h1>{value.name}</h1>
                     <Link to={{pathname:'/resume', cardData:{id:index}}} className="btn btn-primary">View Resume</Link>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
   
}
  

class App extends React.Component{
  render(){
    return(
        <div>
            <BrowserRouter>
                <Route exact path='/' component={Home}/>
                <Route exact path='/resume' component={Resume}/>
            </BrowserRouter>
         
        </div> 
    )
 }
}

// To access the functional component App also then we 
// can give <App/> it will invoke that app also

// This makes the app accessible globally by imorting this
export default App;
