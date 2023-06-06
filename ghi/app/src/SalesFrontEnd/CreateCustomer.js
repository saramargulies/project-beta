import React, { useEffect, useState } from 'react'


function CreateCustomer() {
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
    const [address, setAddress] = useState('')
    const handleAddressChange = (event) => {
        const value = event.target.value
        setAddress(value)
    }
    const [phoneNumber, setPhoneNumber] = useState('')
    const handlePhoneNumberChange = (event) => {
        const value = event.target.value
        setPhoneNumber(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.first_name = firstName
        data.last_name = lastName
        data.address = address
        data.phone_number = phoneNumber

        const customerURL = "http://localhost:8090/api/customers/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(customerURL, fetchConfig)
        if (response.ok) {
            const newCustomer = await response.json()
            setFirstName('')
            setLastName('')
            setPhoneNumber('')
            setAddress('')
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
            <h2 className='card-title'>Add a Customer</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input className='form-control' placeholder="First Name" name="firstName" onChange={handleFirstNameChange} value={firstName} id="first_name" required type='text'></input>
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder="Last Name" name="lastName" onChange={handleLastNameChange} value={lastName} id="last_name" required type='text'></input>
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder="Address" name="address" onChange={handleAddressChange} value={address} id="address" required type='text'></input>
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder="Phone Number" name="phoneNumber" onChange={handlePhoneNumberChange} value={phoneNumber} id="phone_number" required type='text'></input>
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
export default CreateCustomer
