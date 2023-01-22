import './App.css';
import Serching from './MultiFilter/Serching';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './ProtectedROutes/Home';
import Main from './ProtectedROutes/Main';
import Protected from './ProtectedROutes/Protected';
import FormEx2 from './Form/FormEx2'
import FetchData from './CustomHook/FetchTitle';
import FetchId from './CustomHook/FetchId';
import CrudEx from './Pagination/CrudEx';

function App() {
  return (
    <>
      <BrowserRouter >
        <Main />
        <Routes>
          <Route path='/' element={<Protected><Home /></Protected> } />
          <Route path='/login' element={<FormEx2 /> } />
          <Route path='/filter' element={<Serching />} />
          <Route path='/fetchtitle' element={<Protected><FetchData /></Protected>} />
          <Route path='/fetchid' element={<Protected><FetchId /></Protected>} />
          <Route path='/crud' element={<CrudEx />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
