# Magic 8 Ball Activity

In this activity we're going to create a Magic 8 Ball application.  We'll use a React application as a template to run the code that we are going to write for Magic 8 Ball.


### Magic 8 Ball Stories
* As a user, I can type in a question to the magic 8 ball application.
* As a user, when I click submit, I see a random answer displayed.
* As a user, the page is styled, and pleasing to use.

### Getting started

All the code you'll need to write for this app is going to be inside one function in the ```/src/App.js``` file.

After you accept the assignment (or clone this repo), you'll want to install all the npm packages using Yarn:

```bash
$ cd ./Magic-8-ball-activity
$ yarn install
```

If you get an error about Yarn not being found:
```bash
Command 'yarn' not found, but can be installed with:
sudo apt install cmdtest
```

You can install it with:

```bash
$ npm install -g yarn
```

Then you are ready to start a server to run the application:

```bash
$ yarn start
```

Now you're ready to code!

Open up ```/src/App.js```

Here's what that file looks like to start:

```javascript
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
    //This is where you will write your Magic 8 Ball code
    return "The Magic 8 ball answer"
  }

  handleSubmit = () =>{
    const answer = this.getAnswer()
    this.setState({answer: answer})
  }
  render(){
    return (
      <div>
      <br>
<br><br>
<br><br>
<br>
        <h1>Magic 8 Ball</h1>
        <input
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
```

To get started, find the ```getAnswer``` function, and write your code.  Everytime you save your updated file, the browser window displaying your app will reload.

### A note for Cloud 9 users
Once you run the ```yarn start``` command above,  You'll want to click the 'Preview' button to see your running application.
