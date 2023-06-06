import React, { useEffect, useState } from 'react'

function CreateTech () {
    
    const [firstName, setFirstName] = useState('')
    const handleFirstNameChange = (event) => {
        const value = event.target.value
        setFirstName(value)
    }

    const [lastName, setLastName] = useState('')
    const handleLastNameChange = (event) => {
        const value = event.target.value
        setLastName(value)
    }
    
    const [employeeId, setEmployeeId] = useState('')
    const handleEmployeeIdChange = (event) => {
        const value = event.target.value
        setEmployeeId(value)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.first_name = firstName
        data.last_name = lastName
        data.employee_id = employeeId

        console.log(data)

        const techUrl = 'http://localhost:8080/api/technicians/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(techUrl, fetchConfig)
        if (response.ok) {
            const newTech = await response.json()
            console.log(newTech)

            setFirstName('')
            setLastName('')
            setEmployeeId('')
        }
    }
    useEffect(() => {
        fetchData()
      }, [])

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
                  Please enter the new techs information
                </p>
                <div className="mb-3">
                  <input onChange={handleFirstNameChange} value={firstName} name="firstName" id="firstName" required></input>
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="mb-3">
                  <input onChange={handleFirstNameChange} value={firstName} name="firstName" id="firstName" required></input>
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="mb-3">
                  <input onChange={handleFirstNameChange} value={firstName} name="firstName" id="firstName" required></input>
                  <label htmlFor="firstName">First Name</label>
                </div>
                <button className="btn btn-lg btn-primary">Create</button>
              </form>
              <div className="alert alert-success d-none mb-0" id="success-message">
                Thanks for creating a new tech
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