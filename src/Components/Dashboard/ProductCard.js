import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ProductCard = ({ card }) => {
    const { title, user, background } = card;
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Paper
                sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: background,
                    color: 'white'
                }}
            >
                <Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 1,
                        fontsize: 2,
                        fontweight: "500",
                        texttransform: "capitalize"
                    }}>
                        <Typography>{title}</Typography>
                        <Typography sx={{
                            fontSize: '2rem',
                            fontWeight: "700"
                        }}>{user}</Typography>
                    </Box>
                    {/* <Icon dangerouslySetInnerHTML={iconfung()}></Icon> */}
                </Box>
            </Paper>
        </Grid>
    );
};

export default ProductCard;