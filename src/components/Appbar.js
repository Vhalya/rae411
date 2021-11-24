import * as React from 'react';
import AppBar from '@mui/material/AppBar';
//import AppBar from "@material-ui/icons";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu as MenuIcon } from "@material-ui/icons";
import { Container, Menu, MenuList, Paper } from '@mui/material';
import paperStyle from './Student'
import Student from './Student'

export default function Appbar() {

    const [anchor,setAnchor] = React.useState(null);
    const [anchorList,setAnchorList] = React.useState(null);

    const handleOpenMenu = e=>{
        setAnchor(e.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchor(null)
    }
    
    const handleShowStudents = e=>{
        setAnchorList(e.currentTarget)
    }
    //const StudentList = Student.students

  return (
      <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-controls='menu'
            onClick={handleOpenMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spring Boot React Full Stack Application
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Menu style={{marginTop:'10px'}} id='menu' onClose={handleCloseMenu} anchorEl={anchor} open={Boolean(anchor)}>
          <MenuList onClick={handleCloseMenu}><Button variant="outlined" 
          onClick={handleShowStudents}
          aria-controls='showStudents'
          aria-label='showStudents'
          >  Student list
    </Button></MenuList>
          <MenuList onClick={handleCloseMenu}><Button variant="outlined">  My account
    </Button></MenuList>
      </Menu>
    </Box>

    <Container id='showStudents' anchorEl={anchorList} open={Boolean(anchorList)}>

    </Container>
    </>    
  );
}
