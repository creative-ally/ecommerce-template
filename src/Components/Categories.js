import { Box, Card, CardActionArea, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ChairIcon from '@mui/icons-material/Chair';
import MuiIcon from './MuiIcon';
import CategoriCard from './CategoriCard';
import { Chair, TableBar } from '@mui/icons-material';


const Categories = () => {
    return (
        <Container maxWidth='lg' sx={{
            my: '6rem',
            width: '100%'
        }}>
            <Box sx={{
                textAlign: 'center',
                my: '2rem'
            }}>
                <Typography component={'h2'} sx={{
                    fontWeight: 'bold',
                    fontSize: '2rem'
                }} >Popular Furniture By Choice</Typography>
                <Typography>Categories our customers love to check out.</Typography>
            </Box>
            <Stack container direction={'row'}
                sx={{
                    flexWrap: 'wrap'
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
                    <Chair sx={{ fontSize: '3rem' }} />
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>

                {/* table card  */}
                <Card sx={{
                    maxWidth: '8.87rem',
                    minWidth: '8.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    mb: '1rem',
                    p: '1rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    <TableBar sx={{ fontSize: '3rem' }} />
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Central Table
                    </Typography>
                </Card>

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
                    p: '1rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    <Chair sx={{ fontSize: '3rem' }} />
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>

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
                    p: '1rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    <Chair sx={{ fontSize: '3rem' }} />
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>

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
                    p: '1rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    <Chair sx={{ fontSize: '3rem' }} />
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>

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
                    p: '1rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    <Chair sx={{ fontSize: '3rem' }} />
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>

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
                    p: '1rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    <Chair sx={{ fontSize: '3rem' }} />
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>

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
                    p: '1rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    <Chair sx={{ fontSize: '3rem' }} />
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>

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
                    p: '1rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    <Chair sx={{ fontSize: '3rem' }} />
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>

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
                    p: '1rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    <Chair sx={{ fontSize: '3rem' }} />
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

export default Categories;
