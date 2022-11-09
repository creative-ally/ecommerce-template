import { Grid, Paper } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { DashboardCard, SalesCard } from '../../Components/Dashboard/DashboardCard';

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
                        {
                            dashboardCardItem.map(card => <DashboardCard key={card} card={card} />)
                        }
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ pt: "0 !important" }}>
                        <SalesCard item={salesCardItem} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Dashboard;

const dashboardCardItem = [
    {
        title: 'Total Users',
        user: 222,
        time: "Last Month",
        percentage: '+95%',
        icon: "<FaUserCircle />",
        background: 'linear-gradient(to left, #4eda89, #1a9f53)',
        iconButtonColor: "#187d44"
    },
    {
        title: 'Total Orders',
        user: 338,
        time: "Last Month",
        percentage: '+95%',
        icon: "<FaUserCircle />",
        background: 'linear-gradient(to left, #ed68ff, #be0ee1)',
        iconButtonColor: "##a808c3"
    },
    {
        title: 'Total Products',
        user: 222,
        time: "Last Month",
        percentage: '+95%',
        icon: "<FaUserCircle />",
        background: 'linear-gradient(to left, #64b3f6, #2b77e5)',
        iconButtonColor: "##2262d3"
    },
    {
        title: 'Total Reviews',
        user: 222,
        time: "Last Month",
        percentage: '+95%',
        icon: "<FaUserCircle />",
        background: 'linear-gradient(to left, #f4d02b, #e1940e)',
        iconButtonColor: "##ae640f"
    },
]

const salesCardItem = {
    title: 'Total Sales',
    amount: "3, 787, 681.00",
    percentage: '40.65',
    timeAmount: '3,578.90',
    time: 'in last month'
}