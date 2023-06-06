import React, { useEffect, useState } from 'react'


function CreateAppt(props) {
  const [techs, setTechs] = useState([])

  const [location, setLocation] = useState("")
  const handleLocationChange = (event) => {
    const value = event.target.value
    setLocation(value)
  }

  const [starts, setStarts] = useState('')
  const handleStartsChange = (event) => {
    const value = event.target.value
    setStarts(value)
  }

  const [ends, setEnds] = useState('')
  const handleEndsChange = (event) => {
    const value = event.target.value
    setEnds(value)
  }

  const [group, setGroup] = useState('')
  const handleGroupChange = (event) => {
    setGroup(event)
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

    data.location = location
    data.starts = starts
    data.ends = ends
    data.groups_invited = group.map(g => {
      return (g.label)
  })

    console.log(data)

    const submitUrl = 'http://localhost:8000/attendance/outings/'
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(submitUrl, fetchConfig)
    if (response.ok) {
        const newOuting = await response.json()
        console.log(newOuting)

        setLocation('')
        setStarts('')
        setEnds('')
        setGroup('')
    }
}
  
  useEffect(() => {
    fetchData()
  }, [])
  const loadGroups = groups.map(group => {
      return ({value: group.id, label: group.name})
  })
  
  const loadOptions = (searchValue, callback) => {
          
          const filteredOptions = groups.filter((group) => 
          group.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          
          console.log('loadOptions', searchValue, filteredOptions)

          const filteredGroups = filteredOptions.map(group => {
            return ({value: group.id, label: group.name})
          })

          callback(filteredGroups)
        //   console.log(filteredGroups)
      }
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
                  <input onChange={handleLocationChange} value={location} name="location" id="location" className="form-control" required></input>
                  {/* <label htmlFor="location">Location</label> */}
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input onChange={handleStartsChange} value={starts} required placeholder="Starts" type="datetime-local" id="starts" name="starts" className="form-control"></input>
                      <label htmlFor="starts">Starts:</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input onChange={handleEndsChange} value={ends} required placeholder="Ends" type="datetime-local" id="ends" name="ends" className="form-control"></input>
                      <label htmlFor="ends">Ends:</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <AsyncSelect 
                      simpleValue={true}
                      onChange={handleGroupChange}
                      value={group}
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