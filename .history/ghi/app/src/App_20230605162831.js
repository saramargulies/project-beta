import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListTechs from './ServiceFrontEnd/ListTechs'
import CreateTech from './ServiceFrontEnd/CreateTech'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technicians" >
            <Route index element={ <ListTechs /> } />
            <Route path="create" element={ <CreateTech /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
