import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from "./components/Layout/Header/Header";
import Courses from "C:/Users/gopal/OneDrive/Desktop/coursebuundler/coursebundler/src/components/Courses/Courses.jsx";
import Footer from 'C:/Users/gopal/OneDrive/Desktop/coursebuundler/coursebundler/src/components/Layout/Header/Footer/Footer.jsx';
import Login from 'C:/Users/gopal/OneDrive/Desktop/coursebuundler/coursebundler/src/components/Auth/Login.jsx'
import Register from 'C:/Users/gopal/OneDrive/Desktop/coursebuundler/coursebundler/src/components/Auth/Register.jsx'
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import NotFound from './components/Layout/NotFound/NotFound';
import CoursePage from './components/CoursePage/CoursePage';
import Loader from './components/Layout/Loader/Loader';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/course/:id" element={<CoursePage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/about" element={<About />} />

        <Route path="/profile" element={<Profile/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/updateprofile" element={<UpdateProfile/>}/>


        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/resetpassword/:token" element={<ResetPassword/>} />
        <Route path="*" element={<NotFound />} />

            <Route path="/paymentsuccess" element={<PaymentSuccess />} />

            <Route path="/paymentfail" element={<PaymentFail />} />
            <Route path="/Subscribe" element={<Subscribe />} />
            <Route path="/loader" element={<Loader />} />

         {/*admin routes*/ }
         <Route path="/admin/dashboard" element={<Dashboard/>}/>
         <Route path="/admin/createcourse" element={<CreateCourse/>}/>
         <Route path="/admin/courses" element={<AdminCourses/>}/>
         <Route path="/admin/users" element={<Users/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
