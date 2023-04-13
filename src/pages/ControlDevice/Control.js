import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Grid } from '@mui/material'

import ScheduledControl from '../../components/Control/ScheduledControl'
import ManualControl from '../../components/Control/ManualControl'
import ControlDiary from '../../components/Control/ControlDiary'


const Control = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}><Box sx={{ px: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ScheduledControl />
                </Grid>
                <Grid item xs={12} md={5}>
                    <ManualControl />
                </Grid>
                {/* <Grid item xs={12} md={7}>
                    <ControlDiary />
                </Grid> */}
            </Grid ></Box> </LocalizationProvider>)
}

export default Control