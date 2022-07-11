import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import App from './App';
import MoveTimeProject from './components/MoveTimeProject/MoveTimeProject';
import PlanResult from './components/pages/PlanResult';
import Signature from './components/Signature/Signature';
import UnloadTime from './components/UnloadTime/UnloadTime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/plan-result" element={<PlanResult />} />
      <Route path="/signature" element={<Signature />} />
      <Route path="/unload-time" element={<UnloadTime />} />
      <Route path="/move-time-project" element={<MoveTimeProject />} />
    </Routes>
  </Router>
);