import React, { useEffect, useState } from 'react'


function CreateAppt(props) {
  const [techs, setTechs] = useState([])

  const [vin, setVin] = useState("")
  const handleVinChange = (event) => {
    const value = event.target.value
    setVin(value)
  }

  const [customer, setCustomer] = useState('')
  const handleCustomerChange = (event) => {
    const value = event.target.value
    setCustomer(value)
  }

  const [dateTime, setDateTime] = useState('')
  const handleDateTimeChange = (event) => {
    const value = event.target.value
    setDateTime(value)
  }

  const [tech, setTech] = useState('')
  const handleTechChange = (event) => {
    setTech(event)
  }
 
  const [reason, setReason] = useState('')
  const handleReasonChange = (event) => {
    setReason(event)
  }

  const fetchData = async () => {
    const url = 'http://localhost:8080/api/technicians/'
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechs(data.technicians)
      }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {}

    data.date_time = dateTime
    data.reason = reason
    data.vin = vin
    data.technician = tech
    data.customer = customer

    console.log(data)

    const submitUrl = 'http://localhost:8080/api/appointments/'
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(submitUrl, fetchConfig)
    if (response.ok) {
        const newAppt = await response.json()
        console.log(newAppt)

        setVin('')
        setCustomer('')
        setDateTime('')
        setTech('')
        setReason('')
    }
}
  
  useEffect(() => {
    fetchData()
  }, [])

  return(
      <>
              <div className="container">
    <div className="my-5">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} id="appointment-form" className="form-floating">
                <h1 className="card-title">Create a service appointment:</h1>
                <div className="form-floating mb-3">
                      <input onChange={handleVinChange} value={vin} required type="text" id="customer" name="customer" className="form-control"></input>
                      <label htmlFor="customer">Customer:</label>
                    </div>
                <div >
                  <div >
                    <div className="form-floating mb-3">
                      <input onChange={handleCustomerChange} value={customer} required type="text" id="customer" name="customer" className="form-control"></input>
                      <label htmlFor="customer">Customer:</label>
                    </div>
                  </div>
                  <div >
                    <div className="form-floating mb-3">
                      <input onChange={handleDateTimeChange} value={dateTime} required type="datetime-local" id="datetime" name="datetime" className="form-control"></input>
                      <label htmlFor="ends">Date & Time:</label>
                    </div>
                  </div>
                  <div className="mb-3">
                  <select onChange={handleTechChange} value={tech} name="technician" id="technician" className="form-select" required>
                    <option value="">Choose a technician</option>
                    {techs.map(tech => {
                    return (
                    <option key={tech.id} value={tech.id}>
                        {tech.first_name} { tech.last_name }
                    </option>
                    );
                })}
                  </select>
                </div>
                <div className="form-floating mb-3">
                      <input onChange={handleReasonChange} value={reason} required type="text" id="reason" name="reason" className="form-control"></input>
                      <label htmlFor="starts">Reason:</label>
                    </div>
                </div>
                <button className="btn btn-lg btn-primary">Submit</button>
              </form>
              <div className="alert alert-success d-none mb-0" id="success-message">
                You've successfully created this outing!
              </div>
            </div>
          </div>
    </div>
  </div>
  
</>
    )
}

export default CreateAppt