import { Title } from '@mui/icons-material'
import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { PenIcon, UserIcon, WeatherIcon } from '../../../utils/icons/icons';

const details = [
    { section: true, sectionTitle: 'Basic Details', color: '#ec407a', secondaryColor: '#fce4ec', icon: <PenIcon color='#fce4ec' /> },
    { title: 'First name', value: 'Shreyas', },
    { title: 'Last name', value: 'Patil' },
    { title: 'Address line 1', value: '123 Main St.' },
    { title: 'Address line 2', value: 'Apt 4B' },
    { title: 'Contact Number', value: '555-555-1234' },
    { title: 'City', value: 'Anytown' },
    { title: 'State/Province/Region', value: 'CA' },
    { title: 'Zip / Postal code', value: '12345' },
    { title: 'Country', value: 'USA' },

    { section: true, sectionTitle: 'Farm Details', color: '#ab47bc', secondaryColor: '#f3e5f5', icon: <WeatherIcon  color='#f3e5f5'/> },
    { title: 'Farm name', value: 'Acme Farms', },
    { title: 'Farm Location', value: '123 Farm Rd.' },
    { title: 'Farm Size (acres)', value: '20' },
    { title: 'Farming Type', value: 'Organic' },
    { title: 'Type of Crop grown', value: 'Tomatoes' },
    { title: 'Soil Type', value: 'Loam' },
    { title: 'Irrigation Type', value: 'Drip' },
    { title: 'Pesticide Used', value: 'None' },
    { title: 'Harvest Quantity', value: '1000 lbs' },
];


const GeneralDetails = () => {
    return (
        <>
            <Grid container spacing={2} p={3}>
                {details.map((index) => (<>
                    {index.section &&
                        <Grid item xs={12} sm={12} m={-1} mt={1}>
                            <Box display='flex' flexDirection='row'>
                                <Box sx={{
                                    bgcolor:`${index.color}`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                                }}>
                                    {index.icon}
                                </Box>
                                <Typography variant='h6' sx={{ my: 1.5 }}>{index.sectionTitle}</Typography>
                            </Box>
                            <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                        </Grid>
                    }

                    {!index.section &&
                        <Grid item xs={12} sm={6} key={index} display='flex'>
                            <Typography variant="subtitle1" fontWeight='bold' sx={{}}>{index.title} : </Typography>
                            <Typography variant="body1" sx={{ px:2 }}>{index.value}</Typography>
                        </Grid>
                    }
                </>


                ))}
            </Grid>
        </>
    )
}

export default GeneralDetails
