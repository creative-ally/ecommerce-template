import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';

export default function SelectLabels({ item }) {
    const [age, setAge] = React.useState('');

    const { lable, items } = item;
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ minWidth: 300 }}>
                <FormHelperText sx={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    ml: 0
                }}>{lable}</FormHelperText>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        px: 1,
                    }}
                >

                    <MenuItem value=''>
                        <em>{items?.slice(0, 1)}</em>
                    </MenuItem>
                    {
                        items?.slice(1, items.length).map(item => (
                            <MenuItem value={item}>{item}
                                <em>{ }</em>
                            </MenuItem>
                        ))
                    }
                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
        </div>
    );
}
