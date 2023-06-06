import React, { useEffect, useState } from 'react'


function SalesPersonForm() {
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
            method: "POST",
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
        <div className='row'>
        <div className=' col-6'>
        <div className='shadow p-4 mt-4'>
            <h2>Add a Sales Person</h2>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <input onChange={handleFirstNameChange} value={firstName} id="first_name" required type='text'></input>
                    <label htmlFor='firstName'>First Name</label>
                </div>
                <div className="">
                    <input onChange={handleLastNameChange} value={lastName} id="last_name" required type='text'></input>
                    <label htmlFor='lastName'>Last Name</label>
                </div>
                <div className="">
                    <input onChange={handleIDChange} value={employeeID} id="employee_id" required type='text'></input>
                    <label htmlFor='employee_id'>Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
        </div>
        </>
    )
}
export default SalesPersonForm
