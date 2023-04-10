import React from 'react'
import { TableRow, TableCell } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DiaryRow = ({ diary }) => {
    const { date, name, state, activity } = diary
    return (
        <TableRow>
            <TableCell>{date}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{state}</TableCell>
            <TableCell>{activity}</TableCell>
            <TableCell><MoreVertIcon color="disabled" /></TableCell>
        </TableRow>
    )
}

export default DiaryRow