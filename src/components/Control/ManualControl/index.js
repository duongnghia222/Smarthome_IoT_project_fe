import React from 'react'
import { FormLabel, Typography, Stack, FormGroup } from '@mui/material'
import ControlSwitch from './ControlSwitch'
import { useGlobalContext } from '../../../context/index'
const ManualControl = () => {
    const {lightBtn,airBtn,pumperBtn} = useGlobalContext()
    
    const devices= [
        { 
            feed_id: 'bbc-fan',
            value: airBtn === '0'? false:true
        },
        { 
            feed_id: 'bbc-pump',
            value: pumperBtn === '1'? true:false
        },        { 
            feed_id: 'bbc-led',
            value: lightBtn === '1'? true:false
        },
    ]
    return (
        <FormGroup>
            <FormLabel component="legend" sx={{py:0}}>
                <Typography color='grey' variant="h5" sx={{ textTransform: "uppercase", pb: 2 }}>Điều khiển thủ công</Typography>
            </FormLabel>
            <Stack direction="row" spacing={2}>
                {devices.map((device,idx) => <ControlSwitch key={idx} type={idx} device={device}/>)}
            </Stack>
        </FormGroup>
    )
}

export default ManualControl