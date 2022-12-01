import './App.css';
import React from "react";
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar';
import { Home } from './components/paginas/home/Home';

function App() {
  const nome = 'Arthur';
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
