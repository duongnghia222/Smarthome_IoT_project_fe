import { Grid, Stack, Typography, Slider, Paper, Switch } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useTheme } from '@emotion/react';

import AirIcon from '@mui/icons-material/Air';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ShowerIcon from '@mui/icons-material/Shower';
import { lightBlue, cyan} from '@mui/material/colors';


import { publish } from '../../../../utils/adafruit'


const ControlSwitch = (props) => {
    const theme = useTheme()
    const my_theme = theme.palette.mode;
    const { device, type } = props;
    const [checked, setChecked] = useState(device.value);
    useEffect(() => {
        setChecked(device.value)
    }, [device]);

    const types = [
        { name: "Điều Hòa:  ", icon: <AirIcon sx={{ color: checked ? 'white' : 'black' }} /> },
        // { name: "Máy Bơm:  ", icon: <ShowerIcon sx={{ color: checked ? 'white' : 'black' }} /> },
        { name: "Đèn:  ", icon: <LightbulbIcon sx={{ color: checked ? 'white' : 'black' }} /> }
    ]
    const { name, icon } = types[type];
    const handleChange = () => {
        setChecked(state => {
            if (state === true) {
                publish(device.feed_id, '0')
            } else {
                if (device.feed_id === 'bbc-fan'){
                    publish(device.feed_id,'100')
                }
                else{
                    publish(device.feed_id, '1')
                }
            }
            return !state
        })

    }
    return (
        
        <Paper elevation={4} sx={{borderRadius: "3rem", bgcolor: checked ? cyan[400] : null }}>
            <Grid container sx={{width:'140px', height:"140px", padding: 2 }}>
                <Grid item xs={12} sx={{}}>
                    <Typography align='center' sx={!checked ? {} : { color: lightBlue[50] }}>{`${name} ${checked ? 'Bật' : 'Tắt'}`}</Typography>
                </Grid>
                <Grid item xs={12} sx={{}}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        {icon}
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            color= {my_theme === "light" ? 'primary' : "secondary"}
                        />
                    </Stack>
                </Grid>

                <Grid item xs={12} sx={{ }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Slider
                            valueLabelDisplay
                            defaultValue={30}
                            color= {my_theme === "light" ? 'primary' : "secondary"}
                            sx={!checked ? {} : 'white' } />
                    </Stack>
                </Grid>

            </Grid>
        </Paper>
    )
}
export default ControlSwitch