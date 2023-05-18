import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { InputBase, MenuItem } from '@mui/material';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const certificationS = [
    "USDA Organic",
    "Certified Naturally Grown",
    "Certified Humane",
    "Animal Welfare Approved",
    "Fair Trade Certified",
    "Rainforest Alliance Certified",
    "Demeter Biodynamic",
    "GlobalG.A.P.",
    'Other',
]

export default function DiscriptionDetails() {

    const [certification, setCertification] = useState([]);

    const handleCertificationChange = (event) => {
        const {
            target: { value },
        } = event;
        setCertification(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Discription
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="discription"
                        name="discription"
                        label="Add your farming discription here...."
                        fullWidth
                        multiline
                        maxRows={10}
                        rows={4}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="certification">Certifications</InputLabel>
                        <Select
                            labelId="certification-select"
                            id="certificationSelect"
                            multiple
                            value={certification}
                            onChange={handleCertificationChange}
                            input={<OutlinedInput label="Certifications" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {certificationS.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={certification.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}