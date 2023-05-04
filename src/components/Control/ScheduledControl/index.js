import React, { useState } from 'react'
import { useGlobalContext } from '../../../context'
import { Stack, FormGroup, FormLabel, FormControlLabel, ButtonGroup, Button, Grid, Typography } from '@mui/material'
import ControlCard from './ControlCard'
import {StyledSwitch} from './styles'

const ScheduledControl = () => {
    const { setHasControl, setControlNumF, setControlNumT} = useGlobalContext();
    const [active, setActive] = useState(true);
    function handleChange(){
        if(active){
            setHasControl(false);
            setControlNumF("From");
            setControlNumT("To");
            setActive(false);
            return;
        }
        setActive(true);
    }
    return (
        <FormGroup >
            <Stack direction="row" alignItems="center" sx={{py:2}}>
                <FormLabel component="legend">
                    <Typography  color={"white"} variant="h5" sx={{ textTransform: "uppercase", px: 2 }}>Bật Tắt Tự Động</Typography>
                </FormLabel>
                <StyledSwitch onChange={handleChange} defaultChecked={active}/>
            </Stack>
            {active && (
                <Grid container spacing={2} justifyContent="space-around">
                    {[0].map(x => <Grid item key={x} sx={12} md={4}>
                        <ControlCard type={x}/>
                    </Grid>)}
                </Grid>
            )}
        </FormGroup>
    )
}

export default ScheduledControl
