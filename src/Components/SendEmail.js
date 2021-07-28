import React from 'react'

class SendEmail extends React.Component {

  constructor(){
    super();
    this.state = {


    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let data = {"sender": event.target.from.value,
              "recipient": event.target.to.value,
              "subject": event.target.subject.value,
              "message": event.target.message.value}

    fetch('http://localhost:3001/send', {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
  }

  render () {
    return (
      <form className="row" noValidate="noValidate" onSubmit={this.handleSubmit}>
        <div className="col">
          <div className="row">
            <div className="col">
            <label className="form-label">From</label>
              <input type="email" className="form-control" id="from" placeholder="name@example.com" aria-label="From"/>
            </div>
            <div className="col">
            <label className="form-label">To</label>
              <input type="email" className="form-control" id="to" placeholder="name@example.com" aria-label="To"/>
          </div>
        </div>
        <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Subject"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5"></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" type="submit" >Send Email</button>
              </div>
          </div>
        </div>
      </div>
    </form>
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