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
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} id="class-attendance-form">
                <h1 className="card-title">Create an Outing</h1>
                <p className="mb-3">
                  Enter the location name:
                </p>
                <div className="mb-3">
                  <input onChange={handleVinChange} value={vin} name="location" id="location" className="form-control" required></input>
                  {/* <label htmlFor="location">Location</label> */}
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input onChange={handleCustomerChange} value={customer} required placeholder="Starts" type="datetime-local" id="starts" name="starts" className="form-control"></input>
                      <label htmlFor="starts">Starts:</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input onChange={handleDateTimeChange} value={dateTime} required placeholder="Ends" type="datetime-local" id="ends" name="ends" className="form-control"></input>
                      <label htmlFor="ends">Ends:</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <AsyncSelect 
                      simpleValue={true}
                      onChange={handleTechChange}
                      value={tech}
                      defaultOptions={loadGroups}
                      loadOptions={loadOptions}
                      placeholder="Select Groups"
                      isMulti
                      required
                      />
                    </div>
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
    </div>
  </div>
  
</>
    )
}

export default CreateAppt