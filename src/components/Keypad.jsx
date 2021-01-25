import React, { useState } from 'react';

class Keypad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            DisplayValue: ""
        }
    }

    ButtonClick =(buttonValue,type)=> {

        let Value = this.state.DisplayValue;

        if (type == 'number' || type == 'operator') {
            let Equation = Value + buttonValue;
            this.setState({DisplayValue: Equation});   
        }
        else if (type == 'equal') {
            if (Value.endsWith("+")) {
                alert("Invalid Enter");
            }
            else if (Value.endsWith("-")) {
                alert("Invalid Enter");
            }
            else if (Value.endsWith("*")) {
                alert("Invalid Enter");
            }
            else if (Value.endsWith("/")) {
                alert("Invalid Enter");
            }
            else if (Value.endsWith(".")) {
                Value.concat("0");
                alert("Invalid Enter");
            }
            else if ((Value.split('.').length - 1) > 1) {
                alert("Invalid Enter");
            }
            else if (Value.indexOf("+") == 0) {
                alert("Invalid Enter");
            }
            else if (Value.indexOf("-") == 0) {
                alert("Invalid Enter");
            }
            else if (Value.indexOf("*") == 0) {
                alert("Invalid Enter");
            }
            else if (Value.indexOf("/") == 0) {
                alert("Invalid Enter");
            }
            else {
                let result = eval(Value);
                this.setState({DisplayValue: result});
            } 
        }
        else {
            console.log('Done');
        }
    }

    DeleteLastDigit =()=> {
        let Value = this.state.DisplayValue.toString();
        this.setState({DisplayValue: Value.slice(0,-1)});
    }
    AllClear =()=> {
        this.setState({DisplayValue: ''});
    }


    render() {
        return (
            <React.Fragment>
                <div className="card w-auto bg-dark m-1 border-dark rounded-0">
                    <div className="card-body text-right">
                        <h1 className="text-white"> {this.state.DisplayValue} </h1>
                    </div>
                </div>
                <div className="container-fluid text-center">
                    <div className="row w-auto">
                    <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-info" onClick={() => this.ButtonClick("(","number")}>(</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-info" onClick={() => this.ButtonClick(")","number")}>)</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-danger" onClick={this.AllClear}>AC</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-danger" onClick={this.DeleteLastDigit}>C</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("1","number")}>1</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("2","number")}>2</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("3","number")}>3</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-warning" onClick={() => this.ButtonClick("+","operator")}>+</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("4","number")}>4</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("5","number")}>5</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("6","number")}>6</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-warning" onClick={() => this.ButtonClick("-","operator")}>-</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("7","number")}>7</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("8","number")}>8</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("9","number")}>9</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-warning" onClick={() => this.ButtonClick("*","operator")}>*</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-warning" onClick={() => this.ButtonClick(".","number")}>.</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-primary" onClick={() => this.ButtonClick("0","number")}>0</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-success" onClick={() => this.ButtonClick("=","equal")}>=</button>
                        </div>
                        <div className="col-3 p-1">
                            <button className="btn rounded-0 btn-lg w-100 btn-warning" onClick={() => this.ButtonClick("/","operator")}>/</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Keypad;