import React,{Component} from 'react';
// import React from 'react';
import ReactDOM from 'react-dom/client'; 

class ReactState extends Component{
  constructor(){
    super();
    this.state={initialvalue:"welcome"}
  }
  render(){
    return <h1>{this.state.initialvalue}</h1>
  }
}
ReactDOM.render(<ReactState/>, document.getElementById('root'));


























// import './index.css'; 
// import App from './App';          
    

// class APP extends Component{
//   render(){
//     return (
//       <div className="App">
//         <h1> Hello World!</h1> 
//         </div>
//     )
//   }
// } 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

  