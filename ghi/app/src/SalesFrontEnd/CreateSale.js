import React, { useEffect, useState } from 'react'

function CreateSale() {
    const [automobileVINs, setAutomobileVINS] = useState([])
    const [salesPeople, setSalesPeople] = useState([])
    const [customers, setCustomers] = useState([])

    const [automobileVIN, setAutomobileVIN] = useState('')
    const handleAutomobileVINChange = (event) => {
        const value = event.target.value
        setAutomobileVIN(value)
    }
    const [salesPerson, setSalesPerson] = useState('')
    const handleSalesPersonChange = (event) => {
        const value = event.target.value
        setSalesPerson(value)
    }
    const [customer, setCustomer] = useState('')
    const handleCustomerChange = (event) => {
        const value = event.target.value
        setCustomer(value)
    }
    const [price, setPrice] = useState('')
    const handlePriceChange = (event) => {
        const value = event.target.value
        setPrice(value)
    }
    const fetchData = async () => {
        const salespersonURL = 'http://localhost:8090/api/salespeople/'
        const customerURL = 'http://localhost:8090/api/customers/'
        const autoURL = 'http://localhost:8100/api/automobiles/'

        const salesResponse = await fetch(salespersonURL);
        if (salesResponse.ok) {
          const data = await salesResponse.json();
          setSalesPeople(data.salespeople)
          }
        const customerResponse = await fetch(customerURL);
        if (customerResponse.ok) {
          const data = await customerResponse.json();
          setCustomers(data.customers)
          }
        const autosResponse = await fetch(autoURL);
        if (autosResponse.ok) {
          const data = await autosResponse.json();
          setAutomobileVINS(data.autos)
          }
      }

    const filterSoldVehicles = (autoList) => {
        let result = [];
        for (const auto of autoList) {
            if (!auto.sold) {
                result.push(auto)
            }
        }
        return result;
    }

    const reload = () => {
        window.location.reload()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.salesperson = salesPerson
        data.customer = customer
        data.automobile = automobileVIN
        data.price = price
        console.log(automobileVIN)

        const salesURL = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(salesURL, fetchConfig)
        if (response.ok) {
            const newSale = await response.json()
            setSalesPerson('')
            setCustomer('')
            setAutomobileVIN('')
            setPrice('')

            let autoData = {
                "vin":data.auto,
                "sold": true,
            }

            const autoURL = `http://localhost:8100/api/automobiles/${ automobileVIN }/`
            const autoFetchConfig = {
            method: "put",
            body: JSON.stringify(autoData),
            headers : {
                'Content-Type': 'application/json'
            }
            }
            const autoResponse = await fetch(autoURL, autoFetchConfig)
            if (response.ok) {
                reload()
            }
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
            <h2 className='card-title'>Add a new sale</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                  <select onChange={handleCustomerChange} value={customer} name="customer" id="customer" className="form-select" required>
                    <option value="">Choose a customer</option>
                    { customers.map(customer => {
                    return (
                    <option value={customer.id} key={customer.id} >
                        { customer.first_name } { customer.last_name }
                    </option>
                    );
                })}
                  </select>
                </div>
                <div className="mb-3">
                  <select onChange={handleSalesPersonChange} value={salesPerson} name="salesperson" id="salesperson" className="form-select" required>
                    <option value="">Choose a salesperson</option>
                    { salesPeople.map(salesperson => {
                    return (
                    <option value={salesperson.id} key={salesperson.id} >
                        { salesperson.first_name } { salesperson.last_name }
                    </option>
                    );
                })}
                  </select>
                </div>
                <div className="mb-3">
                  <select onChange={handleAutomobileVINChange} value={automobileVIN} id="automobileVIN" className="form-select" required>
                    <option value="">Choose an automobile VIN</option>
                    { filterSoldVehicles(automobileVINs).map(auto => {
                    return (
                    <option value={auto.vin} key={auto.vin}>
                        { auto.vin }
                    </option>
                    );
                })}
                  </select>
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder="Price" name="price" onChange={handlePriceChange} value={price} id="price" required type='number'></input>
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
export default CreateSale
