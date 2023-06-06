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
    
    let formStyle = ""
    let alertStyle = "alert alert-success mb-0 d-none" 

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


    return (  
      <>
      <div className="container mt-5"><h1>Add a Technician</h1></div>
      <div className="container">
    <div className="my-5">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form className={formStyle} onSubmit={handleSubmit}  id="create-tech-form">
                <div className="mb-3">
                  <input className="form-control" placeholder="First name" type="text" onChange={handleFirstNameChange} value={firstName} name="firstName" id="firstName" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" placeholder="Last name" type="text" onChange={handleLastNameChange} value={lastName} name="lastName" id="lastName" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" placeholder="Employee ID" type="number" onChange={handleEmployeeIdChange} value={employeeId} name="employeeId" id="employeeId" required></input>
                </div>
                <button className="btn btn-lg btn-primary">Create</button>
              </form>
              <div className={alertStyle}id="success-message">
                Thanks for creating a new tech!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
    )
}

export default CreateTech