import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import App from './App';
import EditNameUser from './components/EditNameUser/EditNameUser';
import ImportInCollab from './components/ImportInCollab/ImportInCollab';
import MoveTimeFromProject from './components/MoveTimeFromProject/MoveTimeFromProject';
import MoveTimeProject from './components/MoveTimeProject/MoveTimeProject';
import NominateProduct from './components/NominateProduct/NominateProduct';
import PlanResult from './components/pages/PlanResult';
import Signature from './components/Signature/Signature';
import UnloadingData from './components/UnloadingData/UnloadingData';
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
      <Route path="/move-time-from-project" element={<MoveTimeFromProject />} />
      <Route path="/edit-name-user" element={<EditNameUser />} />
      <Route path="/import-in-collab" element={<ImportInCollab />} />
      <Route path="/unloading-data" element={<UnloadingData />} />
      <Route path="/nominate-product" element={<NominateProduct />} />
    </Routes>
  </Router>
);