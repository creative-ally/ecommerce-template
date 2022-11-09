import { Button, Grid, Icon, Paper, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const DashboardCard = ({ card }) => {
    const { title, user, percentage, time, icon, background, iconButtonColor } = card;
    // const iconfung = () => {
    //     return { __html: icon };
    // }
    return (
        <Grid item xs={12} md={8} lg={6}>
            <Paper
                sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: 180,
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
                <Box>
                    <Stack sx={{
                        flexDirection: 'row',
                        gap: 2
                    }}>
                        <Button sx={{
                            px: 0.6,
                            py: 0.3,
                            bgcolor: iconButtonColor,
                            color: 'white'
                        }}>{percentage}</Button>
                        <Typography>{time}</Typography>
                    </Stack>
                </Box>

            </Paper>
        </Grid>
    );
};

export default DashboardCard;