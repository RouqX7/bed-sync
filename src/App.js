import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginChoicePage from './pages/LoginChoicePage';
import AuthPage from './pages/AuthPage';
import ComprehensiveWardManagementPage from './pages/ComprehensiveWardManagementPage';
import Home from './pages/Home';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminHome from './pages/Admin/AdminHome';
import List from './pages/Admin/list/List';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginChoicePage />} />
          <Route path="/auth/*" element={<AuthPage />} />
          <Route path="/ward-management" element={<ComprehensiveWardManagementPage />} />
          <Route path='/Home' element={<Home/>} /> 
          <Route path="/admin" element = {<AdminHome/>} />
          <Route path='/AdminUsers' element = {<List/>} />
          {/* render={() => (
          isAdmin ? <AdminDashboard /> : <Redirect to="/login" />
        )} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 