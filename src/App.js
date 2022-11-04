import fetchApi from './utils/api';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { createContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Contact from './components/Contact/Contact';
import { Box,styled } from '@mui/material';
import Modal from './components/Recipes/Modal';

export const darkMode = createContext();

const StyledBox = styled(Box)(({theme})=>({
  padding:theme.spacing(4),
  paddingLeft: theme.spacing(12),
  paddingRight: theme.spacing(12)
}))

function App() {
  const [dark, setDark] = useState(window.localStorage.getItem("dark"));

  const toggleTheme = () => {
    setDark(prev=>!prev);
    window.localStorage.setItem("dark", dark)
    console.log(dark)
  }
  




  return (
    <darkMode.Provider value={[dark, toggleTheme]}>
      <StyledBox>

        <Navbar />
        <Routes>
          <Route path="/recipes/:id" exact element={<Modal />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"  element={<Home />} />
        </Routes>
      </StyledBox>
    </darkMode.Provider>
  );
}

export default App;
