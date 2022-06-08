import React from 'react';
import { Drawer, Divider, IconButton } 
    from '@material-ui/core';
import { List, ListItem, ListItemText } 
    from '@material-ui/core';
import ReorderIcon from '@material-ui/icons/Reorder';
import { Link } from 'react-router-dom';
  
const styles = {
  sideNav: {
    marginTop: '-60px',
    zIndex: 3,
    marginLeft: '0px',
    position: 'fixed',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  }
};
  
export default class MarerialUIDrawer 
    extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpened: false,
    };
  }
  toggleDrawerStatus = () => {
    this.setState({
      isDrawerOpened: true,
    })
  }
  closeDrawer = () => {
    this.setState({
      isDrawerOpened: false,
    })
  }
  render() {
    const { isDrawerOpened } = this.state;
    return (
      <div>
         <div style={styles.sideNav}>
            <IconButton onClick={this.toggleDrawerStatus}>
              {!isDrawerOpened ? <ReorderIcon /> : null }
            </IconButton>
          </div>
          <Divider/>
        <Drawer
          variant="temporary"
          open={isDrawerOpened}
          onClose={this.closeDrawer}
        >
          <Link to='/CommunicationHub' onClick={()=>this.closeDrawer()} style={styles.link}>
            <List>
              <ListItem button key='CommunicationHub'>               
                <ListItemText primary='CommunicationHub' />
              </ListItem>
            </List>
          </Link>
          <Link to='/Deviation' onClick={()=>this.closeDrawer()} style={styles.link}>
          <List>
            <ListItem button key='Deviation'>
              <ListItemText primary='Deviation' />
            </ListItem>
            </List>
          </Link>
          <Link to='/CallsData' onClick={()=>this.closeDrawer()} style={styles.link}>
          <List>
            <ListItem button key='CallsData'>
              <ListItemText primary='CallsData' />
            </ListItem>
            </List>
          </Link>
          <Link to='/messages' onClick={()=>this.closeDrawer()}style={styles.link}>
          <List>
            <ListItem button key='Messages'>
              <ListItemText primary='Messages' />
            </ListItem>
            </List>
          </Link>
        </Drawer>
      </div>
    );
  }
}