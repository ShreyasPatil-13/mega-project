import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { WeatherIcon } from '../../../utils/icons/icons'
import ProfileDetails from './profileDetails'

const Profile = () => {
    return (
        <>
            <Grid width='100%' display='flex' justifyContent='center' flexDirection='row'>
                {/* ============================Profile============================ */}
                <Grid sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4, mr: 1 }} xs={12} sm={9}>
                    <Box display='flex' flexDirection='row'>
                        <Box sx={{
                            bgcolor: '#ec407a', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                        }}>
                            <WeatherIcon color="#fce4ec" />
                        </Box>
                        <Typography variant='h6' sx={{ my: 1.5 }}>Profile Details</Typography>
                    </Box>
                    <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    <ProfileDetails />
                </Grid>

                {/* ============================Profile Options============================ */}
                <Grid sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4 }} xs={12} sm={3}>
                    <Box display='flex' flexDirection='row'>
                        <Box sx={{
                            bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                        }}>
                            <WeatherIcon color="#2c3e50" />
                        </Box>
                        <Typography variant='h6' sx={{ my: 1.5 }}>Settings</Typography>
                    </Box>
                    <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    <Box sx={{ border: 0, borderColor: '#FFC107' }}>
                        <Button variant='text' color='primary' size='large' fullWidth sx={{ py: 2, display:'flex', justifyContent:'left', px:2 }}>Add new stock</Button><Divider/>
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display:'flex', justifyContent:'left', px:2 }}>Edit profile</Button><Divider />
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display:'flex', justifyContent:'left', px:2 }}>Change Profile Picture</Button><Divider />
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display:'flex', justifyContent:'left', px:2 }}>Change Cover Background</Button><Divider />
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display:'flex', justifyContent:'left', px:2 }}>Reset Password</Button><Divider />
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display:'flex', justifyContent:'left', px:2 }}>Add new Info</Button>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Profile
