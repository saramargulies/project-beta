import React, { useEffect, useState } from 'react';

function ListAppts() {

    const [appointments, setAppointments] = useState([]);
    const [autos, setAutos] = useState([]);

    const fetchData = async () => {
      const appointmentsUrl = 'http://localhost:8080/api/appointments/'
      const automobilesUrl = 'http://localhost:8100/api/automobiles/'
      const apptResponse = await fetch(appointmentsUrl);
      const automobilesResponse = await fetch(automobilesUrl);
      if (apptResponse.ok) {
        const apptData = await apptResponse.json();
        setAppointments(apptData.appointments)
        }
      if (automobilesResponse.ok) {
        const carData = await automobilesResponse.json();
        setAutos(carData.autos)
        }
      }
      useEffect(() => {
        fetchData();
      }, []);

      // function FormatDateTime(datetime){
      //   console.log(datetime["datetime"])
      //   const date = datetime["datetime"]
      //   return date.toLocaleDateString()
      // }

      let vips = autos.map(auto => {
        return auto.vin
      })
      function IsVip(vin){
        let vip = false
        for (let v of vips){
          if (vin["vin"] === v){
            vip = true
          } 
        }
        if (vip === true){
          return "Yes"
        } else {
          return "No"
        }
      }
    
      function cancelAppointment(id) {
        fetch(`http://localhost:8080/api/appointments/${id}/cancel`, {
            method: "PUT"
        }).then((result) => {
            fetchData()
            result.json().then((resp) => {
            console.warn(resp)
            })
        })
      }
    
      function cancelAppointment(id) {
        fetch(`http://localhost:8080/api/appointments/${id}/cancel`, {
            method: "PUT"
        }).then((result) => {
            fetchData()
            result.json().then((resp) => {
            console.warn(resp)
            })
        })
      }

      return (
        <>
        <div className="table-responsive">
        <table className="table table-hover table-striped border border-dark-subtle shadow container-fluid mt-5">
          <thead className="table-group-divider">
            <tr>
              <th>VIN</th>
              <th>VIP?</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {appointments.map(appointment => {
              return (
              <tr className="object-fit" key={appointment.id }>
                <td>{ appointment.vin }</td>
                <td><IsVip vin={ appointment.vin } /></td>
                <td>{ appointment.customer }</td>
                <td>{ appointment.date_time.slice(0, 13) }</td>
                <td>{ appointment.date_time.slice(-7) }</td>
                <td>{ appointment.technician.first_name } { appointment.technician.last_name }</td>
                <td>{ appointment.reason }</td>
                <td>{ appointment.status }</td>
                <td>
                  <button onClick={() => cancelAppointment(appointment.id)} className="btn btn-danger">
                    Cancel
                  </button>
                  <button className="btn btn-success">
                    Finished
                  </button>
                </td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </div>
        </>);
      }

export default ListAppts;
