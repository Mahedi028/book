import React, { Component } from "react";
//import React from 'react';
import '../stylesheets/Book.css';


// const book=porps=>{
//     return(
//         <div>
//             <h3>BookName:{porps.bookName}</h3>
//             <h3>WritterName:{porps.writer}</h3>
//         </div>
//     );
// }
// const book=(porps)=>{
//     return(
//         <div className="Book">
//             <h2 onClick={porps.change}>Book Name:{porps.bookName}</h2>
//             <h2>Writer:{porps.writer}</h2>
//             <input type="text" onChange={porps.inputName} value={porps.bookName}/>
//          </div>
//     );
// }

class BookComponent extends Component{
    render(){
        return(
            <div className="Book">
                <h2 onClick={this.props.change}>Book Name:{this.props.bookName}</h2>
                <h2>Writer:{this.props.writer}</h2>
                <input type="text" onChange={this.props.inputName} value={this.props.bookName}/>
            </div>
        );
    }
}

//export default book;
export default BookComponent;