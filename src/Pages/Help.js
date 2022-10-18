import { AccountCircle } from '@mui/icons-material';
import { Box, Card, Container, FormControl, IconButton, Input, InputAdornment, InputBase, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Help = () => {
    return (
        <Container maxWidth='100vw' sx={{
            pb: '6rem',
            width: '100%',
            bgcolor: 'white'
        }}>
            <Box sx={{
                textAlign: 'center',
                my: '2rem'
            }}>
                <Typography component={'h2'} sx={{
                    fontSize: '2rem'
                }} >Help Center</Typography>
                <Stack sx={{
                    alignItems: 'center'
                }}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Type your queries here.."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Stack>
            </Box>
            <Stack container direction={'row'}
                sx={{
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                {/* sofa card  */}
                <Card sx={{
                    maxWidth: '8.87rem',
                    minWidth: '8.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    mb: '1rem',
                    p: '1.5rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    {/* <Chair sx={{ fontSize: '3rem' }} /> */}
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>
            </Stack>
        </Container>
    );
};

export default Help;