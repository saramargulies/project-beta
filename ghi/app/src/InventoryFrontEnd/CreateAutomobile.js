import React, { useEffect, useState } from 'react'

function CreateAutomobile () {

    const [models, setModels] = useState([])

    const [model, setModel] = useState('')
    const handleModelChange = (event) => {
        const value = event.target.value
        setModel(value)
    }
    const [color, setColor] = useState('')
    const handleColorChange = (event) => {
        const value = event.target.value
        setColor(value)
    }
    const [year, setYear] = useState("")
    const handleYearChange = (event) => {
        const value = event.target.value
        setYear(value)
    }
    const [vin, setVin] = useState('')
    const handleVinChange = (event) => {
        const value = event.target.value
        setVin(value)
    }
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/'
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setModels(data.models)
          console.log(data)
          }
      }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}

        data.color = color
        data.year = year
        data.vin = vin
        data.model_id = model

        console.log(data)

        const autoURL = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(autoURL, fetchConfig)
        if (response.ok) {
            const newAutomobile = await response.json()
            console.log(newAutomobile)

            setModel('')
            setYear('')
            setColor('')
            setVin('')
        }
    }
    useEffect(() => {
        fetchData();
      }, []);
    return (
      <>
      <div className="container">
      <div className="my-5">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit}  id="create-automobile-form">
                <h1 className="card-title">Add an Automobile</h1>
                <div className="mb-3">
                  <input className="form-control" placeholder="Color" type="text" onChange={handleColorChange} value={color} name="color" id="color" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" placeholder="Year" type="number" onChange={handleYearChange} value={year} name="year" id="year" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" placeholder="VIN" type="text" onChange={handleVinChange} value={vin} name="vin" id="vin" required></input>
                </div>
                <div className="mb-3">
                  <select onChange={handleModelChange} value={model} name="model" id="model" className="form-select" required>
                    <option value="">Choose a model</option>
                    { models.map(model => {
                    return (
                    <option value={model.id} key={model.id} >
                        { model.name }
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

export default CreateAutomobile
