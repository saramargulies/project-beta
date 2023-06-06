import React, { useEffect, useState } from 'react'

function CreateTech () {
    
    const [name, setName] = useState('')
    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const [email, setEmail] = useState('')
    const handleEmailChange = (event) => {
        const value = event.target.value
        setEmail(value)
    }
    
    const [company, setCompany] = useState('')
    const handleCompanyChange = (event) => {
        const value = event.target.value
        setCompany(value)
    }
    
    const [conference, setConference] = useState('')
    const handleConferenceChange = (event) => {
        const value = event.target.value
        setConference(value)
    }
    
    const fetchData = async () => {
        const url = 'http://localhost:8000/api/conferences/'
        
        const response = await fetch(url)
        
        if (response.ok) {
            const data = await response.json()
            console.log(data.conferences)
            setConferences(data.conferences)
        }
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.name = name
        data.email = email
        data.company_name = company
        data.conference = conference

        console.log(data)

        const attendeesUrl = 'http://localhost:8001/api/attendees/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(attendeesUrl, fetchConfig)
        if (response.ok) {
            const newAttendee = await response.json()
            console.log(newAttendee)

            setName('')
            setEmail('')
            setCompany('')
            setConference('')
        }
    }
    useEffect(() => {
        fetchData()
      }, [])

    let spinnerClasses = "spinner-grow text-secondary"
    let dropdownClasses = "form-select d-none"
    if (conferences.length > 0) {
        spinnerClasses = "d-none"
        dropdownClasses = "form-select"
    }
    return (  
    <div className="container">
    <div className="my-5">
      <div className="row">
        <div className="col col-sm-auto">
          <img width="300" className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg"></img>
        </div>
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} value={conference} id="create-attendee-form">
                <h1 className="card-title">It's Conference Time!</h1>
                <p className="mb-3">
                  Please choose which conference
                  you'd like to attend.
                </p>
                <div className="d-flex justify-content-center mb-3" id="loading-conference-spinner">
                  <div className={spinnerClasses} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div className="mb-3">
                  <select onChange={handleConferenceChange} value={conference} name="conference" id="conference" className={dropdownClasses} required>
                    <option value="">Choose a conference</option>
                    {conferences.map(conference => {
                    return (
                    <option key={conference.href} value={conference.href}>
                        {conference.name}
                    </option>
                    );
                })}
                  </select>
                </div>
                <p className="mb-3">
                  Now, tell us about yourself.
                </p>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input onChange={handleNameChange} value={name} required placeholder="Your full name" type="text" id="name" name="name" className="form-control"></input>
                      <label htmlFor="name">Your full name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input onChange={handleEmailChange} value={email} required placeholder="Your email address" type="email" id="email" name="email" className="form-control"></input>
                      <label htmlFor="email">Your email address</label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-lg btn-primary">I'm going!</button>
              </form>
              <div className="alert alert-success d-none mb-0" id="success-message">
                Congratulations! You're all signed up!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default CreateTech