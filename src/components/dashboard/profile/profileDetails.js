import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import avatar from '../../../utils/svg/avatar.svg'
import { LocationOn } from '@mui/icons-material'
import { PenIcon } from '../../../utils/icons/icons'
import GeneralDetails from './generalDetails'

const ProfileDetails = () => {
    return (
        <>
            <Grid width="100%" display="flex" justifyContent="center" flexDirection="column">
                <Grid height={350} sx={{ bgcolor: '#eef2f6', p: 1, borderRadius: 4 }}>
                    <Box
                        sx={{
                            backgroundImage: `url(https://i.ibb.co/ZcGpc60/photo-1615209853186-e4bd66602508-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPositionY: -120,
                            backgroundRepeat: 'no-repeat',
                            border: '3px solid #eef2f6',
                            borderRadius: 3
                        }}
                        position="relative"
                        bgcolor="#F5F5F5"
                        minHeight="200px"
                        mb={3}
                    >
                        <image
                            src={avatar}
                            alt="Circular Image"
                            style={{
                                position: 'absolute',
                                bottom: '-120px',
                                left: '20px',
                                width: '200px',
                                height: '200px',
                                backgroundColor: '#eef2f6',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                border: '5px solid #fff',
                            }}
                        />
                    </Box>
                    <Box sx={{ position: 'relative', left: 230, top: -20 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mb: 1 }}>
                            <Typography variant='h3' fontWeight='bold'>Shreyas Patil</Typography>
                            <Tooltip title='Edit profile'>
                                <IconButton size='large'>
                                    <PenIcon color='#2c3e50' />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Typography variant='body1' sx={{ mb: 1, }}><LocationOn />Kolhapur, MH, India</Typography>
                    </Box>
                </Grid>

                <Grid >
                    <GeneralDetails />
                </Grid>
            </Grid>
        </>
    )
}

export default ProfileDetails
