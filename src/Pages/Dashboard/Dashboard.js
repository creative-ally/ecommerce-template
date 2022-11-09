import { Grid, Paper } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

const Dashboard = () => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                width: '100%'
            }}
        >
            <Container maxWidth="xl" sx={{ m: 0, mt: 3, mb: 4 }}>
                <Grid container spacing={3} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            Dashboard
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ m: 0 }}>
                    <Grid container spacing={2} xs={12} md={6} lg={8} >
                        <Grid item xs={12} md={8} lg={6}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                Add Products
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={6}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                Deposite
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ pt: "0 !important" }}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            Orders
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Dashboard;