import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'


function Sidebar(props) {
  return (
    <div style = {styles.sidebar}>  
    <List disablePadding dense>
      <ListItem button>
        <ListItemText>
        <Link to = {`${props.url}/Profile`} >Profile</Link>
        </ListItemText>
      </ListItem>
      
     
      <ListItem button>
        <ListItemText>
        <Link to = {`${props.url}/Myappointments`} >MyAppointments</Link>
        </ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>
        <Link to = {`${props.url}/Edit-Profile`} >Edit Profile</Link>
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Logout</ListItemText>
      </ListItem>
    </List>
    </div>
  )
}

export default Sidebar;

const styles = {
    sidebar:{
        'minWidth':'240px',
        'maxWidth':'240px',
        'border':'1px solid rgba(218, 59, 59, 0.1)',
        'fontSize':'20px'
    },
}