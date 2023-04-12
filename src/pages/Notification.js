import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Grid } from '@mui/material'

import ControlDiary from '../components/Control/ControlDiary'


const Notification = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}><Box sx={{ px: 3, paddingTop:5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ControlDiary />
                </Grid>
                {/* <Grid item xs={12} md={5}>
                    <ManualControl />
                </Grid> */}
                {/* <Grid item xs={12} md={7}>
                    <ControlDiary />
                </Grid> */}
            </Grid ></Box> </LocalizationProvider>)
}

export default Notification