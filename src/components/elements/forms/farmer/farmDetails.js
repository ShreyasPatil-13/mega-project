import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';


const farmType = ['Crop farming',
    'Livestock farming',
    'Aquaculture']

const cropTypes = [
    'Grains',
    'Vegetables',
    'Fruits',
    'Nuts',
    'Legumes',
    'Herbs',
    'Spices',
    'Specialty crops',
    'Industrial crops',
    'Forage crops',
];

const irrigationType = [
    "Drip irrigation",
    "Sprinkler irrigation",
    "Flood irrigation",
    "Center pivot irrigation",
    "Other"
];

const soilTypes = [
    "Clay",
    "Loam",
    "Sandy",
    "Peaty",
    "Chalky",
    "Other"
];

export default function FarmDetails() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Farm Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="farmName"
                        name="farmName"
                        label="Farm name"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="farmLocation"
                        name="farmLocation"
                        label="Farm Location"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="farmSize"
                        name="farmSize"
                        label="Farm Size (acres)"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="farmType"
                        name="farmType"
                        label="Farming Type"
                        fullWidth
                        select
                        variant="outlined"
                    >
                        {farmType.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cropType"
                        name="cropType"
                        label="Type of Crop grown"
                        fullWidth
                        select
                        variant="outlined"
                    >
                        {cropTypes.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="soilType"
                        name="soilType"
                        label="Soil Type"
                        fullWidth
                        select
                        variant="outlined"
                    >
                        {soilTypes.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="irrigationType"
                        name="irrigationType"
                        label="Irrigation Type"
                        fullWidth
                        select
                        variant="outlined"
                    >
                        {irrigationType.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="pesticide"
                        name="pesticide"
                        label="Pesticide Used"
                        fullWidth
                        select
                        variant="outlined"
                    >
                        <MenuItem  value='yes'>Yes</MenuItem>
                        <MenuItem value='no'>No</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="quantity"
                        name="quantity"
                        label="Harvest Quantity"
                        fullWidth
                        variant="outlined"
                    >
                    </TextField>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}