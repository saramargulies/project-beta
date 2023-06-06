import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

import CreateSalesPerson from './SalesFrontEnd/CreateSalesPerson';
import ListSalesPeople from './SalesFrontEnd/ListSalesPeople';
import CreateCustomer from './SalesFrontEnd/CreateCustomer';
import ListCustomers from './SalesFrontEnd/ListCustomers';
import CreateSale from './SalesFrontEnd/CreateSale';
import ListSales from './SalesFrontEnd/ListSales';
import SalesHistory from './SalesFrontEnd/SaleHistory';

import ListTechs from './ServiceFrontEnd/ListTechs'
import CreateTech from './ServiceFrontEnd/CreateTech'
import ListAppts from './ServiceFrontEnd/ListAppts';
import CreateAppt from './ServiceFrontEnd/CreateAppt';
import ServiceHistory from './ServiceFrontEnd/ServiceHistory';

import ListManufacturers from './InventoryFrontEnd/ListManufacturers';
import CreateManufacturer from './InventoryFrontEnd/CreateManufacturer';
import ListModels from './InventoryFrontEnd/ListModels';
import CreateModel from './InventoryFrontEnd/CreateModel';
import ListAutomobiles from './InventoryFrontEnd/ListAutomobiles';
import CreateAutomobile from './InventoryFrontEnd/CreateAutomobile';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales">
            <Route index element={ <ListSales /> } />
            <Route path="create" element={ <CreateSale /> } />
            <Route path="history" element={ <SalesHistory /> } />
          </Route>
          <Route path="salespeople">
            <Route index element={ < ListSalesPeople /> } />
            <Route path="create" element={ <CreateSalesPerson /> } />
          </Route>
          <Route path="customers">
            <Route index element={ <ListCustomers /> } />
            <Route path="create" element={ <CreateCustomer /> } />
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
            <Route path="create" element={ <CreateManufacturer /> } />
          </Route>
          <Route path="models" >
            <Route index element={ <ListModels /> } />
            <Route path="create" element={ <CreateModel /> } />
          </Route>
          <Route path="automobiles" >
            <Route index element={ <ListAutomobiles /> } />
            <Route path="create" element={ <CreateAutomobile /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
