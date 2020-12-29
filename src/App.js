import React from 'react';
import { BrowserRouter,
  Route,
  //Link,
  //Route,
  Switch,
} from 'react-router-dom';
import '../src/index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import DoctorDetail from './pages/DoctorDetail';
import Register from './pages/Register';
import DoctorList from './pages/DoctorList';
import DoctorDashboard from './pages/DoctorDashboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
       <div className = 'App'>
       <Switch>
         
         <Route exact path = '/' component = {Home}/>
         <Route exact path = '/Login' component = {Login}/>
         <Route exact path = '/Register' component = {Register}/>
         <Route exact path = '/doctor/details' component = {DoctorDetail}/>
         <Route path = '/doctors/' component = {DoctorList}/>

         <ProtectedRoute path ='/Doctor/dashboard'>
           <DoctorDashboard/>
         </ProtectedRoute>

       </Switch>
       </div>
    </BrowserRouter>
  );
}

// primary #03c9a9
// secondry #29f1c3

export default App;
