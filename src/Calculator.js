import React, { Component } from 'react';
import './calculator.css'

export default class Calculator extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             expression:"",
             result:"",
             operator:false

        }
        this.handleEqual = this.handleEqual.bind(this);
        this.handleSign = this.handleSign.bind(this);
        
        this.handleButton = this.handleButton.bind(this);
    }
    handleEqual(e){
        e.preventDefault()
       
       this.setState({result:eval(this.state.expression)},(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("no error");
                }
       })
    }
    handleSign(e){
        e.preventDefault();
        this.setState({expression:this.state.expression+e.target.textContent},()=>{
            this.setState({operator:true})
        
        })
    
    }
    handleButton(e){
        e.preventDefault();
        // console.log(e.target.textContent);
        this.setState({expression:this.state.expression+e.target.textContent},()=>{
            this.setState({operator:false})
        
        })
    }
       // eslint-disable-next-line no-eval
    //    console.log(eval(this.state.expression));
    
    
    render() {
        return (
            <div>
                    <form>
                        <div className="Box">
                    <div className="row">
                    <input type = "text" readOnly  value={this.state.expression}></input>    
                    </div>
                    <div className="row">

                        <button onClick={this.handleButton}>1</button>
                        <button onClick={this.handleButton}>2</button>
                        <button onClick={this.handleButton}>3</button>
                    </div>
                    <div className="row">

                        <button onClick={this.handleButton}>4</button>
                        <button onClick={this.handleButton}>5</button>
                        <button onClick={this.handleButton}>6</button>
                 </div>
                    <div className="row">

                        <button onClick={this.handleButton}>7</button>
                        <button onClick={this.handleButton}>8</button>
                        <button onClick={this.handleButton}>9</button>
                    </div>
                    <div className="row">

                        <button onClick={this.handleButton}>0</button>
                        <button onClick={this.handleSign} className={`sign ${this.state.operator?"show":"noshow"}`}  disabled={this.state.operator}>+</button>
                        <button onClick={this.handleSign} className={`sign ${this.state.operator?"show":"noshow"}`} disabled={this.state.operator}>-</button>
                         </div>
                    <div className="row">

                        <button onClick={this.handleSign} className={`sign ${this.state.operator?"show":"noshow"}`} disabled={this.state.operator}>/</button>
                        <button onClick={this.handleSign} className={`sign ${this.state.operator?"show":"noshow"}`} disabled={this.state.operator}>*</button>
                        <button onClick={this.handleEqual}>=</button>
            
                    </div>
                    <div className="row">
                       <h1>Result: <span>{this.state.result}</span></h1>
                    </div>
                    </div>
                    </form>
                
            </div>
        )
    }
}
