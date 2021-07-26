This project will evaluate your ability to create a web application with React (using create-react-app).

Using Create-React-App and a server that we have provided to you with fake email data, please implement the following functionality to mock the "GMail" service.

Mandatory Content

[] View all of my email messages (subject line + sender)
[] View one of my email messages with all of its details
[] Send an email
[] Search for a specific email by subject

[] Frame out App.js React Class component with major areas
  [] SearchEmails React Class Component
  [] ListEmails React Class Component
  [] ReadEmail React Class Component
  [] SendEmail React Class Component

[] App.js
  [] Add State for emailList
  [] Add State for emailId (email currently being read)
  [] Add state for searchquery term
  [] On component did mount fetch list of emails and assign to state

[] ListEmail.js Component (proptype: emailList - the list of emails to display)
  [] Displays a list fo ListEmailItems
  [] ListEmailItem Functional Component (display subject line + sender)
    [] Event listener on email subject line
    [] Creates call back chain if an email subject line is clicked on to app state

[] ReadEmail.js Component (proptypes: emails, emailId, selected?)
  [] Display email data from props

[] SendEmail.js Component
  [] Build form to accept input
  [] Event handler to send button with post action to server
  [] Display Results

[] SearchEmails.js Component
  [] Build input text area
  [] Use event handler to search and update app state


# USAF-sdi-react-checkpoint

# API Routes
http://localhost:3001/emails
GET `/emails`:
```
    {
      "sender": "katie@galvanize.com",
      "recipient": "jane@galvanize.com" ,
      "subject": "Standup meeting",
      "message": "Mr. and Mrs. Dursley, of number four, Privet Drive, were
        proud to say that they were perfectly normal, thank you very much.",
      "date": "2020-08-23T18:25:43.511Z",
      "id": 1
    }
```
http://localhost:3001/emails/1
GET `/emails/:id`:

e.g. `/emails/1`:

```
    {
      "sender": "katie@galvanize.com",
      "recipient": "jane@galvanize.com" ,
      "subject": "Standup meeting",
      "message": "Mr. and Mrs. Dursley, of number four, Privet Drive, were
        proud to say that they were perfectly normal, thank you very much.",
      "date": "2020-08-23T18:25:43.511Z",
      "id": 1
    }
```
http://localhost:3001/search?query=meeting
GET `/search` with URI query:

e.g. `/search?query=meeting`:

```
    {
      "sender": "jean-marc@galvanize.com", "recipient": "jane@galvanize.com" ,
      "subject": "Retro meeting",
      "message": "They were the last people you’d expect to be involved
        in anything strange or mysterious, because they just didn’t hold with such nonsense.",
      "date": "2020-04-23T18:25:43.511Z",
      "id": 2},
```
http://localhost:3001/send
POST `/send`:
{"sender": "string","recipient": "string","subject":"string","message": "string","date": "04/11/1982","id": 4001}
