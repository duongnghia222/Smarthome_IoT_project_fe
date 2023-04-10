import { styled } from "@mui/material/styles";
import Switch from '@mui/material/Switch';

export const StyledSwitch = styled(Switch)(({ theme }) => ({
    width: 60,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        '&.Mui-checked': {
            transform: 'translateX(34px)',
            '& + .MuiSwitch-track': {
                backgroundImage: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)',
                transitionDuration: '200ms',
                opacity: 1,
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
        color: '#fff',
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor:'#E9E9EA',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 200,
        }),
    },
}));