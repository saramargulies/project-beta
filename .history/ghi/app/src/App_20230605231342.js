import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import ListTechs from './ServiceFrontEnd/ListTechs'
import CreateTech from './ServiceFrontEnd/CreateTech'
import ListAppts from './ServiceFrontEnd/ListAppts';
import CreateAppt from './ServiceFrontEnd/CreateAppt';
import ServiceHistory from './ServiceFrontEnd/ServiceHistory';
import ListManufacturers from './InventoryFrontEnd/ListManufacturers';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople">
            <Route path="create" element={ <SalesPersonForm /> } />
          </Route>
          <Route path="technicians" >
            <Route index element={ <ListTechs /> } />
            <Route path="create" element={ <CreateTech /> } />
          </Route>
          <Route path="appointments" >
            <Route index element={ <ListAppts /> } />
            <Route path="create" element={ <CreateAppt /> } />
            <Route path="history" element={ <ServiceHistory /> } />
          </Route>
          <Route path="manufacturers" >
            <Route index element={ <ListManufacturers /> } />
            <Route path="create" element={ < /> } />
            <Route path="history" element={ <ServiceHistory /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
