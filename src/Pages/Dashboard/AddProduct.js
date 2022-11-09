import { Copyright } from '@mui/icons-material'
import { Grid, Paper, Toolbar } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

function AddProduct() {
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
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        >
                            {/* <Chart /> */}
                            Add Products
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    {/* <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Deposits />Deposite
                    </Paper>
                </Grid> */}
                    {/* Recent Orders */}
                    {/* <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />Orders
                    </Paper>
                </Grid> */}
                </Grid>
                <Copyright sx={{ pt: 4 }} />
            </Container>
        </Box>
    )
}

export default AddProduct