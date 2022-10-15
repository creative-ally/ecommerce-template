import React from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';
import MuiIcon from './MuiIcon';


const CategoriCard = ({ icon }) => {
    // const Icon = MuiIcon(icon)
    return (
        <Card sx={{ maxWidth: '8.87rem', minWidth: '8.5rem' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                {/* <Icon /> */}
            </CardActionArea>
        </Card>
    );
};

export default CategoriCard;