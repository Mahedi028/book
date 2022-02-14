import React, {Component} from "react";
// function Person()
// {
//     return(
//         <div>
//             <h1>I am person component</h1>
//         </div>
//     );
// }

// let Person = (props) =>{
//     console.log(props);
//     return (
//         <div>
//             {/* <h1>I am person component</h1> */}
//             {/* <h1>Number:{Math.random()}</h1> */}
//             <h3>Name: {props.name} and age {props.age} years old</h3>
//             <h2>Extra Info{props.children}</h2>
//         </div>
//     );

// }

class Person extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        console.log(this.props);
        return (
            <div>
                <h2>Name:{this.props.name} and Age:{this.props.age} years old.</h2>
                <h4>extra info:{this.props.children}</h4>
            </div>
        );
    }
}

export default Person;