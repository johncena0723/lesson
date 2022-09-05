import React from "react";

export default class Nice extends React.Component
{
    constructor(){
        super();
        this.clicked=this.clicked.bind(this);
        this.state={
            name:"Chinta",
            subs: 400
        };

    }
    clicked() {
        let subs = this.state.subs +1;
       this.setState({
        name:"Chinta",
        subs: subs
       });
    }
    render() {
        return (
            <>
      <p>Channel Name: {this.state.name}</p>
      <p>Subscriber: {this.state.subs}</p>
        <button onClick={this.clicked}>click me</button>
        </>
        );
    }
}