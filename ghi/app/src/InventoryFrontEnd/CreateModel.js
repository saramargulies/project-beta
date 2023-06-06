import React, { useEffect, useState } from 'react'

function CreateModel () {

    const [manufacturers, setManufacturers] = useState([])

    const [manufacturer, setManufacturer] = useState('')
    const handleManufacturerChange = (event) => {
        const value = event.target.value
        setManufacturer(value)
    }
    const [name, setName] = useState('')
    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }
    const [pictureURL, setPictureURL] = useState('')
    const handlePictureURLChange = (event) => {
        const value = event.target.value
        setPictureURL(value)
    }
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setManufacturers(data.manufacturers)
          console.log(data)
          }
      }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.manufacturer_id = manufacturer
        data.name = name
        data.picture_url = pictureURL
        console.log(data)

        const modelsURL = '	http://localhost:8100/api/models/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(modelsURL, fetchConfig)
        if (response.ok) {
            const newModel = await response.json()
            console.log(newModel)
            setManufacturer('')
            setName('')
            setPictureURL('')
        }
    }
    useEffect(() => {
        fetchData()
      }, [])

    return (
      <>
      <div className="container">
    <div className="my-5">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit}  id="create-model-form">
                <h1 className="card-title">Add a Model</h1>
                <div className="mb-3">
                  <input className="form-control" placeholder="Model Name" type="text" onChange={handleNameChange} value={name} name="name" id="name" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" placeholder="Picture URL" type="text" onChange={handlePictureURLChange} value={pictureURL} name="picture_url" id="picture_url" required></input>
                </div>
                <div className="mb-3">
                  <select onChange={handleManufacturerChange} value={manufacturer} name="manufacturer" id="manufacturer" className="form-select" required>
                    <option value="">Choose a manufacturer</option>
                    { manufacturers.map(manufacturer => {
                    return (
                    <option value={manufacturer.id} key={manufacturer.id} >
                        { manufacturer.name }
                    </option>
                    );
                })}
                  </select>
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

export default CreateModel
