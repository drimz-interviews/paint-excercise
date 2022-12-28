import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from './components/Canvas';
import { Grid } from '@mui/material';
import { CanvasControllers } from './components/CanvasControllers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <Grid item>
              <CanvasControllers />
              <Canvas />
          </Grid>
      </header>
    </div>
  );
}

export default App;
