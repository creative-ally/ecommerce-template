import { Box, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';

const AddProductForm = () => {
    return (
        <Grid container spacing={3} gap={3}>
            <Grid item xs={7} md={7} sm={12} >
                <Paper>
                    <Box sx={{
                        p: 3
                    }}>
                        <Typography component={'p'} style={{
                            lineHeight: "27px",
                            fontSize: "17px",
                            fontWeight: 600,
                            textTransform: "capitalize"
                        }}>
                            Basic Information
                        </Typography>
                        <Box component={'form'}>
                            <Box
                                sx={{
                                    width: '100%',
                                    my: 2
                                }}>
                                <TextField
                                    id="outlined"
                                    label="TITLE"
                                    placeholder='Type Here...'
                                    variant="outlined"
                                    style={{
                                        width: '100%'
                                    }}
                                />
                            </Box>
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