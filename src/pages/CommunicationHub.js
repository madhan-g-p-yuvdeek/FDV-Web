
import React from 'react';
import { useSelector } from 'react-redux';
const styles = {
  home: {
    padding: '50px',
    textAlign: 'center',
    color: 'black',
  }
};

const CommunicationHub = () => {
    const user  = useSelector((state) => state.user);
    return (        
    <div style={styles.home}>
    <h4>CommunicationHub View - User with role - {user.role}</h4>      
   
  </div>)
  }

export default  CommunicationHub
