import { Box, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

const AddProductForm = () => {
    return (
        <Grid container spacing={3} gap={3}>
            <Grid item xs={7} md={7} sm={12} >
                <Paper>
                    <Box sx={{
                        p: 2
                    }}>
                        <Typography component={'p'} sx={{
                            fontSize: '24px'
                        }}>
                            Basic Information
                        </Typography>
                        <Box component={'form'}>
                            hello
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={5} md={5} sm={12}>
                <Paper>
                    <Box sx={{
                        p: 2
                    }}>hello</Box>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddProductForm;