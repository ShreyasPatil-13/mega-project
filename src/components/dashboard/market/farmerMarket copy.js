import { Abc, CurrencyRupee, LocationCity, LocationOn, MessageRounded, Phone, Search, Store, Warehouse } from '@mui/icons-material'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, InputAdornment, InputBase, Paper, TextField, Typography } from '@mui/material'
import React from 'react'


const contractors = [
    {
        companyName: "ABC Farms",
        location: "Mumbai, MH, India",
        contactNumber: "+9111111111",
        requirementType: "Fruit",
        requirementQuantity: "500",
        requirementDescription: "We are looking for high quality fruits for our production line.",
        price: "00",
        image: "https://i.ibb.co/5KMPsGT/wind-speed.png"
    },
    {
        companyName: "XYZ Enterprises",
        location: "Pune, MH, India",
        contactNumber: "+9111111112",
        requirementType: "Vegetables",
        requirementQuantity: "1000",
        requirementDescription: "We require fresh and pesticide-free vegetables for our restaurant.",
        price: "00",
        image: "https://i.ibb.co/wKMbys4/food2.png"
    },
    {
        companyName: "Green Agro Products",
        location: "Bangalore, KA, India",
        contactNumber: "+9111111113",
        requirementType: "Herbs",
        requirementQuantity: "250",
        requirementDescription: "We need high quality herbs for our Ayurvedic medicines.",
        price: "00",
        image: "https://i.ibb.co/VNV2tPN/food1.png"
    },
    {
        companyName: "Nature's Bounty",
        location: "Delhi, DL, India",
        contactNumber: "+9111111114",
        requirementType: "Grains",
        requirementQuantity: "750",
        requirementDescription: "We are looking for a steady supply of organic grains for our cereal production.",
        price: "00",
        image: "https://i.ibb.co/frs48z2/food3.png"
    },
    {
        companyName: "Fresh Harvests",
        location: "Hyderabad, TS, India",
        contactNumber: "+9111111115",
        requirementType: "Dairy",
        requirementQuantity: "200",
        requirementDescription: "We need fresh and pure milk for our dairy products.",
        price: "00",
        image: "https://i.ibb.co/vHvyHBF/food4.png"
    },
    {
        companyName: "Company Name 01",
        location: "Mumbai, MH, India",
        contactNumber: "+9111111111",
        requirementType: "Fruit",
        requirementQuantity: "500",
        requirementDescription: "We require 500 kg of fresh apples for our upcoming production run.",
        price: "00",
        image: "https://i.ibb.co/5KMPsGT/wind-speed.png"
    },
    {
        companyName: "Company Name 02",
        location: "Delhi, DL, India",
        contactNumber: "+9111111111",
        requirementType: "Vegetables",
        requirementQuantity: "1000",
        requirementDescription: "We require 1000 kg of fresh broccoli for our upcoming production run.",
        price: "00",
        image: "https://i.ibb.co/frs48z2/food3.png"
    },
    {
        companyName: "Company Name 03",
        location: "Chennai, TN, India",
        contactNumber: "+9111111111",
        requirementType: "Grains",
        requirementQuantity: "2000",
        requirementDescription: "We require 2000 kg of rice for our upcoming production run.",
        price: "00",
        image: "https://i.ibb.co/wKMbys4/food2.png"
    },
    {
        companyName: "Company Name 04",
        location: "Bangalore, KA, India",
        contactNumber: "+9111111111",
        requirementType: "Dairy",
        requirementQuantity: "500",
        requirementDescription: "We require 500 litres of fresh milk for our upcoming production run.",
        price: "00",
        image: "https://i.ibb.co/VNV2tPN/food1.png"
    },
    {
        companyName: "Company Name 05",
        location: "Hyderabad, TS, India",
        contactNumber: "+9111111111",
        requirementType: "Meat",
        requirementQuantity: "100",
        requirementDescription: "We require 100 kg of fresh chicken for our upcoming production run.",
        price: "00",
        image: "https://i.ibb.co/frs48z2/food3.png"
    },
    {
        companyName: "Company Name 06",
        location: "Pune, MH, India",
        contactNumber: "+9111111111",
        requirementType: "Fruit",
        requirementQuantity: "1000",
        requirementDescription: "We require 1000 kg of fresh bananas for our upcoming production run.",
        price: "00",
        image: "https://i.ibb.co/wKMbys4/food2.png"
    },
    {
        companyName: "Company Name 07",
        location: "Kolkata, WB, India",
        contactNumber: "+9111111111",
        requirementType: "Vegetables",
        requirementQuantity: "500",
        requirementDescription: "We require 500 kg of fresh carrots for our upcoming production run.",
        price: "00",
        image: "https://i.ibb.co/vHvyHBF/food4.png"
    },
];


const FarmerMarket = () => {
    return (
        <Grid sx={{}}>
            <Grid item sx={{ m: 4, }}>
                <Paper
                    component="form"
                    variant='outlined'
                    sx={{
                        p: '2px 4px',
                        background: 'url(https://i.ibb.co/LSztbDV/Green-and-Yellow-Simple-One-Million-Trees-Day-Banner-1.png)',
                        backgroundSize: 'cover', borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: 200
                    }}
                >

                    <form style={{ p: '2px 4px', width: '40%', display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                        <TextField
                            size='small'
                            type="text"
                            color='success'
                            autoFocus
                            placeholder="Search here"
                            sx={{
                                ml: 1, flex: 1,
                                backgroundColor: 'rgba(255,255,255,1)',
                                borderRadius: 1,
                                "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                                    color: 'rgba(0,0,0,1)',
                                    opacity: 1
                                }
                            }}
                        />
                    </form>
                    <Button variant='contained' color='success' m={5} size='large'>Search <Search sx={{ ml: 1 }} /></Button>
                </Paper>
            </Grid>

            <Box sx={{
                m: 4, p: 2, borderRadius: 5, bgcolor: '#f6f6f8',
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none',
                }
            }}>
                <Grid container direction='row' spacing={1} sx={{ width: '100%', flexWrap: 'wrap', borderRadius: 5 }}>
                    {contractors.map((index) => (<>
                        <Card sx={{ width: 270, mx: 1, my: 2, flexGrow: '1', borderRadius: 4, display: 'flex', flexDirection: 'column' }}>
                            <Box height={150} sx={{
                                backgroundImage: `linear-gradient( to right, rgba(0, 0, 0, 1), rgba(0, 0,0, 0)), url(${index.image})`,
                                backgroundSize: 'cover',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'end',
                                alignItems: 'start',
                                px: 2
                            }}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div" color='common.white'>
                                    {index.companyName}
                                </Typography>
                                <Typography variant="body2" color="rgba(255,255,255,0.8)" gutterBottom mb={1}>
                                    <LocationOn sx={{ mb: 1 }} fontSize="small" /> {index.location}
                                </Typography>
                            </Box>
                            <Box maxHeight={180} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'start',
                                px: 2,
                            }}>
                                <Box>
                                    <Divider sx={{ my: 1 }}>
                                        <Typography variant='button' color='success.dark' textAlign='center' mt={2} gutterBottom>
                                            Requirements
                                        </Typography>
                                    </Divider>
                                </Box>
                                <Typography variant="subtitle1" color="rgba(0,0,0,0.8)" gutterBottom>
                                    <b>Type:</b> {index.requirementType}
                                </Typography>
                                <Typography variant="subtitle1" color="rgba(0,0,0,0.8)" >
                                    <b>Quantity:</b> {index.requirementQuantity} Kg.
                                </Typography>
                                <Typography variant="h6" fontWeight='bold' color="success.main" mt={1} gutterBottom >
                                    <CurrencyRupee fontSize='medium' sx={{ mr: 1, }} />{index.price}  /kg
                                </Typography>
                                <Typography variant="caption" color="rgba(0,0,0,0.8)" gutterBottom sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >
                                    <b>Discription:</b> {index.requirementDescription}
                                </Typography>
                            </Box>
                            <CardActions sx={{ m: 1, }}>
                                <Button size="small" color="success" variant='contained' sx={{ p: 1, mr: 1 }}>
                                    <MessageRounded sx={{ mr: 1 }} />Message
                                </Button>
                                <Button size="small" color="success" variant='outlined' sx={{ p: 1 }}>
                                    More Details
                                </Button>
                            </CardActions>
                        </Card>
                    </>))}
                </Grid>
            </Box>
        </Grid>
    )
}

export default FarmerMarket
