import React, { Suspense } from 'react'
import { useRouteMatch,Switch, Route } from 'react-router-dom';
import Navbar from '../components/reusable/Navbar'
import Sidebar from '../components/reusable/Sidebar'
import EditProfile from '../components/specific/EditProfile';
import Profile from '../components/specific/Profile';
import './styles.css';

export default function DoctorDashboard() {

    const {url,path} = useRouteMatch();
    return (
        <div>
            <Navbar/>
            <div className = 'dashboard__ui'>
                <Sidebar url = {url} path = {path}/>

                <div className = 'dashboard__content'>
                    <Switch>
                       <Route exact path={`${path}/Profile`}>  
                        <Profile/>
                       </Route>

                       <Route exact path={`${path}/Edit-Profile`}>
                        <EditProfile/>
                       </Route>

                    </Switch>
                </div>
            </div>
        </div>
    )
}
