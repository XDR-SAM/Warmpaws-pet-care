import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyProfile from '../pages/MyProfile'
import Service from '../pages/Service'
import ServiceDetails from '../pages/ServiceDetails'
import ForgotPassword from '../pages/ForgotPassword'
import NotFound from '../pages/NotFound'
// import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/register" element={<Signup />} /> */}
      <Route path="/my-profile" element={<MyProfile />} />
      {/* <Route path="/profile" element={<MyProfile />} /> */}
      <Route path="/service" element={<Service />} />
      {/* <Route path="/services" element={<Service />} /> */}
      <Route path="/service/:id" element={<ServiceDetails />} />
      {/* <Route path="/services/:id" element={<ServiceDetails />} /> */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {/* <Route path="/reset-password" element={<ForgotPassword />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes