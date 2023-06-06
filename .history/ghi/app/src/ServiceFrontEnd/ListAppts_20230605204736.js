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
              <th></th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {appointments.map(appointment => {
              return (
              <tr className="object-fit" key={appointment.id }>
                <td>{ appointment.vin }</td>
                <td>{ appointment.vin }</td>
                <td>{ appointment.date_time }</td>
                <td>{ appointment.date_time }</td>
                <td>{ appointment.technician.first_name } { appointment.technician.last_name }</td>
                <td>{ appointment.reason }</td>
                <td>
                  <button className="btn btn-danger">
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
