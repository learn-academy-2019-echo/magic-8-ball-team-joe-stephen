import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answer: null
    }
  }

  getAnswer = () => {
    //Thisis where you will write your Magic 8 Ball code
    const randomAnswersLog = [
            "Indefintely you can!", 
            "No! How could you ask such a thing.", 
            "maybe, let me thing about it...", 
            "of course good sir!", 
            "ask again later",
            "?"
          ]
          const answers = Math.floor(Math.random() * randomAnswersLog.length)
          return randomAnswersLog[answers]
          
    // return "The Magic 8 ball answer"
  }

  handleSubmit = () =>{
    const answer = this.getAnswer()
    this.setState({answer: answer})
  }
  
  render(){
    return (
      <div>
        <h1> Magic 8 Ball Game!</h1>
        <input id="bottom"
          type='text'
        />
        <br />
        <button
          onClick={this.handleSubmit}
        >
          Ask the Magic 8 Ball
        </button>

        {this.state.answer &&
          <h2> The Magic 8 Ball says: {this.state.answer} </h2>
        }
             
      </div>
    )
  }
}

export default App;
