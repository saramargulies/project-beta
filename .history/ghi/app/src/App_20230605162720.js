import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListTechs, CreateTech from './ServiceFrontEnd/ListTechs'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technician" >
            <Route index element={ <ListTechs /> } />
            <Route path="create" element={ <Create }
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
