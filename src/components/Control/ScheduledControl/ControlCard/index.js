import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack, Card, CardHeader, CardContent, Box, Typography } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { red, cyan, yellow } from '@mui/material/colors';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { StyledTimeField, StyledSlider, StyledStroke } from './styles';

const types = [
    { name: "Điều hòa", icon: <DeviceThermostatIcon color="primary" sx={{ fontSize: "3rem" }} />, color: red[500] },
    { name: "Máy bơm", icon: <OpacityIcon color="primary" sx={{ fontSize: "3rem" }} />, color: cyan[300] },
    { name: "Đèn", icon: <LightModeIcon color="primary" sx={{ fontSize: "3rem" }} />, color: yellow[500] }
]


const ControlCard = ({ type }) => {
    const { name, icon, color } = types[type];

    const outerTheme = createTheme({
        palette: {
            primary: {
                main: color,
            },
        },
    });

    return (
        <ThemeProvider theme={outerTheme}>
            <Card elevation={3} sx={{mb:0}}>
                <CardHeader title={name} sx={{pb:0}}></CardHeader>
                <CardContent>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <StyledTimeField label={<Typography sx={{ display: "flex", alignItems: "center" }}>
                            <LightModeIcon />Bắt đầu</Typography>} />
                        <Typography sx={{ px: 1 }}>to</Typography>
                        <StyledTimeField label={<Typography sx={{ display: "flex", alignItems: "center" }}>
                            <DarkModeIcon />Kết thúc</Typography>} />
                    </Stack>
                    <Stack alignItems="center" padding={3} pb={0} >
                        <Box sx={{ maxWidth: "9rem" }}>
                            <CircularProgressbarWithChildren
                                value={50}
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: color,
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',
                                    }
                                }}>
                                {icon}
                            </CircularProgressbarWithChildren>
                        </Box>
                        <Stack spacing={2} width='100%' direction="row" alignItems="center">
                            <Typography sx={{ width: '4rem' }}>Tắt</Typography>
                            <StyledSlider defaultValue={50} valueLabelDisplay="auto" />
                            <Typography sx={{ width: '4rem' }}>100%</Typography>
                        </Stack>
                            
                    </Stack>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default ControlCard