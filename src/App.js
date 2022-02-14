import logo from './logo.svg';
import './App.css';
import React , { Component }from 'react';
//import Person from './components/Person';
//import Book from './components/Book';
import BookComponent from './components/Book';



// function App() {
//   return (
//     <div className="App">
//       <h3>Hello world</h3>
//       <Person />
//     </div>
//   );
//   //return React.createElement('div', {className :"App"}, React.createElement('h1', null, "hello world"), <Person/>);

// }
// function Person(){
//   return (
//     <div>
//       <h1>I am a person</h1>
//     </div>
//   );
//   //return React.createElement('div', null,React.createElement('h1', null, "i am a component") );
// }
// crtl+k+c=>comment
// crtl+k+u=>uncomment
class App extends Component{
  state={
    books:[
      {bookName:"1998", writer:"George Orwell"},
      {bookName:"The Da Vinchi Code", writer:"Dan Brown"},
      {bookName:"The Alchemist", writer:"George Orwell"},
    ]
  }
  changeBookState=newBookName=>{
    //console.log("Button clicked");
    this.setState({
      books:[
        {bookName:newBookName, writer:"George Orwell"},
        {bookName:"The Da Vinchi Code", writer:"Dan Brown"},
        {bookName:"metromorphism", writer:"George Orwell"},
      ]
    });
  }
  changeWithInputState=(event)=>{

    this.setState({
      books:[
        {bookName:event.target.value, writer:"George Orwell"},
        {bookName:"The Da Vinchi Code", writer:"Dan Brown"},
        {bookName:"metromorphism", writer:"George Orwell"},
      ]
    });

  }
  // constructor()
  // {
  //   super();
  //   // this.state()={

  //   // };
  // }
  render(){
    // let obj=new Component();
    // console.log(obj);
    const style={
      width:"300",
      margin:"10px",
      padding:"10px",
      border:"1px solid",
      borderRadius:"5px",
      backgroundColor:"pink"

    }
    console.log(this.state);

    return(
      
      <div className="App">
        {/* <h1>Hello world</h1>
        <Person name="Rahim" age="30"> I have something</Person>
        <Person name="karim" age="23"/>
        <Person name="jamal" age="21"/>
        <Person name="kamal" age="20"/> */}
        <h1 style={style}>book List</h1>
        {/* <Book bookName="1998" writer="George Orwell"/>
        <Book bookName="The Da Vinci Code" writer="Dan Brown"/>
        <Book bookName="The alchemist" writer="George Orwell"/> */}
        {/* <BookComponent bookName="1998" writer="George Orwell"/>
        <BookComponent bookName="1998" writer="George Orwell"/>
        <BookComponent bookName="1998" writer="George Orwell"/>
         */}
         {/* <button onClick={this.changeBookState.bind(this, "9090")}>Change State</button> */}
         <button onClick={()=>this.changeBookState("9090")}>Change State</button>
         <input type="text" onChange={this.changeWithInputState}/>
        <BookComponent 
          bookName={this.state.books[0].bookName} 
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState}

          />
        <BookComponent 
          bookName={this.state.books[1].bookName} 
          writer={this.state.books[1].writer}/>
        <BookComponent 
          bookName={this.state.books[2].bookName} 
          writer={this.state.books[2].writer}
            change={this.changeBookState.bind(this, "1234")}
          />
           {/* <Book 
           bookName={this.state.books[0].bookName}
            writer={this.state.books[0].writer}
            inputName={this.changeWithInputState}
            />
            
           <Book 
           bookName={this.state.books[1].bookName}
            writer={this.state.books[1].writer}/>
           <Book 
           bookName={this.state.books[2].bookName}
            writer={this.state.books[2].writer}
            change={this.changeBookState.bind(this, "1234")}
            /> */}
       
      </div>
    );

  }
}
export default App;
