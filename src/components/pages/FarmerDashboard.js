import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar, Grid, IconButton, ListSubheader, Menu, MenuItem, OutlinedInput, TextField, Tooltip } from '@mui/material';
import Logo from '../../utils/imgs/logo.png'
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { DashboardIcon, FilterIcon, HomeIcon, MenuIcon, NotifyIcon, SchemeIcon, UserIcon, WeatherIcon } from '../../utils/icons/icons';
import Dashboard1 from '../elements/dashboard/dashboard1';
import FarmerMarket from '../dashboard/market/farmerMarket';
import FarmerSchemes from '../dashboard/schemes/farmerSchemes';
import FullWeather from '../dashboard/weather/fullWeather';
import FarmerDash from '../dashboard/farmer/farmerDash';
import Weather from '../dashboard/weather/weather';
import Profile from '../dashboard/profile/profile';
import ChatBot from '../dashboard/assistantAI/assistant';
import SplineScene from '../dashboard/assistantAI/SplineScene';


const drawerWidth = 240;

export default function FarmerDashboard() {
    const [open, setOpen] = useState(true);

    const handleDrawer = () => {
        open ? setOpen(false) : setOpen(true);
    };

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Dashboard', icon: <DashboardIcon />, level: 'Dashboard' },
        { label: 'Market', icon: <HomeIcon color="#4CAF50" />, divide: true },
        { label: 'Weather Details', icon: <WeatherIcon color="#4CAF50" />, level: 'Tools & Info', },
        { label: 'Schemes', icon: <SchemeIcon />, divide: true },
        { label: 'Assistant', icon: <UserIcon />, level: 'Assistant', divide: true },
        { label: 'Profile', icon: <UserIcon />, level: 'Profile', divide: true },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const drawer = (
        <List>
            {tabs.map((tab, index) => (
                <>
                    <ListSubheader sx={{ fontWeight: '550', ml: -1, mt: 1 }}>{tab.level}</ListSubheader>
                    <ListItem key={tab.label} disablePadding sx={{ py: 0.1 }}>
                        <ListItemButton onClick={() => handleTabClick(index)} sx={{ background: index === activeTab ? '#b9f6ca' : 'transparent', borderRadius: 3, px: 5, display: 'flex', justifyContent: 'left', py: 1.5 }}>
                            <ListItemIcon sx={{ color: index === activeTab ? '#2e7d32' : '#1b5e20', mr: -2, ml: -2 }}>{tab.icon}</ListItemIcon>
                            {/* <ListItemText primary={tab.label} sx={{ color: index === activeTab ? '#1b5e20' : '#1b5e20', fontWeight: index === activeTab ? '800' : 'normal' }} /> */}
                            <Typography sx={{ color: index === activeTab ? '#1b5e20' : '#1b5e20', fontWeight: index === activeTab ? '500' : 'normal' }}>{tab.label}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    {tab.divide ? (<Divider sx={{ color: 'rgba(0,0,0,0.3)', m: 1 }} />) : ""}
                </>
            ))}
        </List>
    );

    function components() {
        switch (activeTab) {
            case 0:
                return <FarmerDash />
            case 1:
                return <FarmerMarket />
            case 2:
                return <Weather />
            case 3:
                return <FarmerSchemes />
            case 4:
                return <ChatBot />
            case 5:
                return <Profile />
            case 6:
                return <SplineScene />
            default:
                break;
        }
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#fff', py: 1, }} elevation={0}>
                <Toolbar>
                    <Box display='flex' flexDirection='row' flex={1}>
                        <Box sx={{ ml: -1 }}>
                            <a href="/farmerDashboard">
                                <img src={Logo} height="55" alt="logo" />
                            </a>
                        </Box>
                        <Box sx={{ ml: 8, my: 1.5, bgcolor: '#b9f6ca', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton type='submit' color="success" size='small' onClick={handleDrawer} aria-label="add"><MenuIcon /></IconButton>
                        </Box>
                    </Box>
                    <Box flex={3}>
                        <Box sx={{}} width={450}>
                            <OutlinedInput type='search' size='small' placeholder='Search...' color='success' fullWidth
                                endAdornment={
                                    <Box sx={{
                                        bgcolor: '#b9f6ca', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0.3, '&:hover': {
                                            bgcolor: '#5de296'
                                        }
                                    }}>
                                        <IconButton type='submit' color="success" size='small' onClick={handleDrawer} aria-label="add">
                                            <FilterIcon sx={{
                                                color: 'success',
                                                '&:hover': {
                                                    bgcolor: '#b9f6ca'
                                                }
                                            }} />
                                        </IconButton>
                                    </Box>
                                }
                                startAdornment={<Search sx={{ mr: 1 }} color='disabled' />}
                                sx={{ py: 0.8, borderRadius: 4, bgcolor: '#f8fafc' }}
                            >
                            </OutlinedInput>
                        </Box>
                    </Box>

                    <Box flex={1} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                        <Box sx={{ ml: 8, bgcolor: '#b9f6ca', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton type='submit' color="success" size='small' aria-label="add"><NotifyIcon /></IconButton>
                        </Box>


                        <Box sx={{ flexGrow: 0, mx: 2 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="persistent"
                sx={{
                    width: open ? drawerWidth : 0,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { boxSizing: 'border-box', border: 0 },

                    '&::-webkit-scrollbar': {
                        width: '0.4em',
                        backgroundColor: '#F5F5F5',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888',
                        borderRadius: '1rem',
                    }
                }}
                open={open}
            >
                <Toolbar />
                <Box sx={{ p: 2, }}>
                    {drawer}
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, my: 2, mr: 3, ml: 3, }}>
                <Toolbar />
                <Grid container sx={{ bgcolor: '#eef2f6', borderRadius: 5, p: 2 }}>
                    {components()}
                </Grid>
            </Box>
        </Box >
    );
}
