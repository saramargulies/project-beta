import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import ListTechs from './ServiceFrontEnd/ListTechs'
import CreateTech from './ServiceFrontEnd/CreateTech'
import ListAppts from './ServiceFrontEnd/ListAppts';
import ListAppts from './ServiceFrontEnd/ListAppts';

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
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
