import React, { useEffect, useState } from 'react'


function CreateSalesPerson() {
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
    const [employeeID, setID] = useState('')
    const handleIDChange = (event) => {
        const value = event.target.value
        setID(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.first_name = firstName
        data.last_name = lastName
        data.employee_id = employeeID

        const employeeURL = "http://localhost:8090/api/salespeople/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(employeeURL, fetchConfig)
        if (response.ok) {
            const newSalesPerson = await response.json()
            setFirstName('')
            setLastName('')
            setID('')
        }
    }

    return (
        <>
        <div className="container">
        <div className="my-5">
        <div className="row">
        <div className="col">
        <div className="card shadow">
        <div className="card-body">
            <h2 className='card-title'>Add a Sales Person</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input className='form-control' placeholder="First Name" name="firstName" onChange={handleFirstNameChange} value={firstName} id="first_name" required type='text'></input>
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder="Last Name" name="lastName" onChange={handleLastNameChange} value={lastName} id="last_name" required type='text'></input>
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder="Employee ID" name="employeeID" onChange={handleIDChange} value={employeeID} id="employee_id" required type='text'></input>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default CreateSalesPerson
