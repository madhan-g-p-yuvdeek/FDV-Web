import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'; 
import {Home, CallsData, Edits, CommunicationHub,Deviation,messages} from "./pages/index";
// import LegacyPage from './features/legacy/LegacyPage';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MarerialUIDrawer from './components/Drawer';
import { getUserAccess } from './features/users/userService';


export default function App() {
  const dispatch = useDispatch();
  const userAccess = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserAccess());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <div className="App">
       <h1 style={{color: '#323576', textAlign:'Center'}}>Financial Data Collection</h1>  
       <h6 style={{color: '#323576', textAlign:'Center'}}> {userAccess  && userAccess.id } </h6>     
       
       <BrowserRouter>
       <MarerialUIDrawer/>      
       <Switch>
         <Route path="/" exact render={() => <Redirect to={Home}/>} />
        <Route path='/CommunicationHub' component={CommunicationHub} />
        <Route path='/Deviation' component={Deviation} />
        <Route path='/CallsData' component={CallsData} />
        <Route path='/Edits' component={Edits} /> 
        {<Route exact path='/messages' component={messages} /> }
      </Switch>
      </BrowserRouter>
      </div>
    );
}