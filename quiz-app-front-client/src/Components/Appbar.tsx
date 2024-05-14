import Person from '../assets/Person.png'
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Toolbar, Typography, Divider, IconButton, ListItemIcon, MenuItem, MenuList, Popover, Button } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
// import AppBarWithMenu from '../Components/'

const sideList = [
  { id: 'homepage', text: 'Home', path: '/Home' },
];

export default function AppBarWithMenu() {

    const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(null); // Anchor element for the profile popover
    const navigate = useNavigate();

    const Username = sessionStorage.getItem("Username");

    //  On Profile Click
    const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
        setProfileAnchorEl(event.currentTarget); // Open the profile popover
    };
    
    //  On Profile Close
    const handleProfileClose = () => {
        setProfileAnchorEl(null); // Close the profile popover
    };

    const openProfile = Boolean(profileAnchorEl);

    const profileId = openProfile ? 'profile-popover' : undefined; 

    const handlehome = () =>{
        navigate("/Home");
    }

    return (
        <AppBar position="fixed" style={{backgroundColor:'#DAA520'}}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{display:'flex' , alignItems:'center'}}>
                <Typography variant="h6" component="div" onClick={handlehome} sx={{ flexGrow: 0 , fontWeight:'Bold' , marginRight:'10px' }}>
                    Quiz App
                </Typography>

                {sideList.map(({ id, text, path }) => (
                    <Button
                        key={id}
                        color="inherit"
                        component={Link}
                        to={path}
                        sx={{ textTransform: 'none', marginLeft: 1 }}
                    >
                        {text}
                    </Button>
                ))}
              </div>
                
          {/* Profile Pic and Name Section With Pop Over */}
          <div style={{display:'flex' , alignItems:'center'}}>
          <Divider orientation='vertical' flexItem  style={{color:'black' , width:'2px'}}/>
            <IconButton
              color="inherit"
              aria-label="profile"
              edge="end"
              size='large'
              onClick={handleProfileClick}
            >
              <img src={Person} alt="Logo" style={{ maxWidth: '50px', maxHeight: '50px'}} />
            </IconButton>
              <Popover
                id={profileId}
                open={openProfile}
                anchorEl={profileAnchorEl}
                onClose={handleProfileClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {/* Profile Popover content */}
                  <MenuList autoFocusItem={openProfile} id="profile-menu">
                    <MenuItem component={Link} to="/Profile" onClick={handleProfileClose}>
                      <ListItemIcon>
                          <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/Logout" onClick={handleProfileClose}>
                      <ListItemIcon>
                          <LogoutIcon fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </MenuList>
                </Popover>
              <Typography onClick={handleProfileClick} style={{marginLeft:'5px' , userSelect:'none'}}>{Username}</Typography>
            </div>
          </Toolbar>
        </AppBar>
    );
}
