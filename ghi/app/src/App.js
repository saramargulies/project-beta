import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
<<<<<<< HEAD
import SalesPersonForm from './SalesPersonForm';
=======
import ListTechs from './ServiceFrontEnd/ListTechs'
import CreateTech from './ServiceFrontEnd/CreateTech'
>>>>>>> 6c171446c3b982c4fd837ce4802b0a8a9fc2b687

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
<<<<<<< HEAD
          <Route path="salespeople">
            <Route path="create" element={ <SalesPersonForm /> } />
=======
          <Route path="technicians" >
            <Route index element={ <ListTechs /> } />
            <Route path="create" element={ <CreateTech /> } />
>>>>>>> 6c171446c3b982c4fd837ce4802b0a8a9fc2b687
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
