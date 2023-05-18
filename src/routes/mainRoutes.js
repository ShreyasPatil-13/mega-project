import React from 'react'
import Services from "../components/elements/features/services";
import MainNavbar from '../components/elements/navbars/mainNavbar';
import LandingPage from '../components/pages/LandingPage';
import SignIn from '../components/pages/SignIn';
import SignUp from '../components/pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/elements/footers/footer';
import ErrorPage from '../components/pages/ErrorPage';
import FarmerDashboard from '../components/pages/FarmerDashboard';
import FarmerRegistrationForm from '../components/elements/forms/farmer/farmerRegistrationForm';
import CompanyDashboard from '../components/pages/CompanyDashboard';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <>
            <MainNavbar />
            <LandingPage />
            <Footer />
          </>
        } />
        <Route exact path='/services' element={
          <>
            <MainNavbar />
            <Services />
            <Footer />
          </>} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/farmerDashboard' element={<FarmerDashboard />} />
        <Route exact path='/companyDashboard' element={<CompanyDashboard />} />
        <Route exact path='/farmerRegistration' element={<FarmerRegistrationForm />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
