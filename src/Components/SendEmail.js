import React from 'react'

class SendEmail extends React.Component {

  constructor(){
    super();
    this.state = {


    }
  }

  clickHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value)
  }

  render () {
    return (
      <div className="row">
        <div className="col">
          Send Email Component Rendering
          <form>
              <input id="Sender" placeholder="insert Sender Email Here" />
              <br/>
              <input id="Reciepient" placeholder="insert Reciepient Email here"/>
              <br/>
              <input id="Subject" placeholder="insert Subject Here" />
              <br/>
              <input id="Body" placeholder="insert body here"/>
              <br/>
              <button onClick={this.clickHandler}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

//http://localhost:3001/send
// POST `/send`:
// {"sender": "string","recipient": "string","subject":"string","message": "string","date": "04/11/1982","id": 4001}
// fetch(url, {
//   method: 'POST', // *GET, POST, PUT, DELETE, etc.
//   mode: 'cors', // no-cors, *cors, same-origin
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: 'same-origin', // include, *same-origin, omit
//   headers: {
//     'Content-Type': 'application/json'
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   redirect: 'follow', // manual, *follow, error
//   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   body: JSON.stringify(data) // body data type must match "Content-Type" header
// });
// return response.json(); // parses JSON response into native JavaScript objects
// }

export default SendEmail;