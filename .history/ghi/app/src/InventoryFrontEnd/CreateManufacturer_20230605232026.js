import React, { useEffect, useState } from 'react'

function CreateManufacturer () {
    
    const [manufacturer, setManufacturer] = useState('')
    const handleManufacturerChange = (event) => {
        const value = event.target.value
        setManufacturer(value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.name = manufacturer

        console.log(data)

        const techUrl = '	http://localhost:8100/api/manufacturers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(techUrl, fetchConfig)
        if (response.ok) {
            const newManufacturer = await response.json()
            console.log(newManufacturer)

            setManufacturer('')
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
              <form onSubmit={handleSubmit}  id="create-tech-form">
                <h1 className="card-title">Add a Manufacturer</h1>
                <div className="mb-3">
                  <input className="form-control" placeholder="Name of manufacturer" type="text" onChange={handleManufacturerChange} value={manufacturer} name="firstName" id="firstName" required></input>
                </div>
                <button className="btn btn-lg btn-primary">Add</button>
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

export default CreateManufacturer