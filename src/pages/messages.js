import React from 'react';
import { useSelector } from 'react-redux';
import CommunicationPage from '../components/Communication/CommunicationPage';
const styles = {
  home: {
    padding: '50px',
    textAlign: 'center',
    color: 'black',
  }
};
const messages = () => {
    const user  = useSelector((state) => state.user);
    return (        
   <div style={styles.home}>
   <CommunicationPage/>    
  
 </div>
         )
 
  }
  export default (messages)