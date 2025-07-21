/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const AboutTop = () : JSX.Element => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {defaultMatches: true});

    return (
        <Box>
            <Grid container spacing={4}>
                <Grid
                    item
                    container
                    xs={12}
                    md={6}
                    data-aos={isMd
                    ? 'fade-right'
                    : 'fade-up'}
                    alignItems={'center'}>
                    <Box>
                        <Typography
                            variant={'h4'}
                            gutterBottom
                            sx={{
                            fontWeight: 700
                        }}>
                            The Solution
                        </Typography>
                        <Typography
                            variant={'h6'}
                            component={'p'}
                            color={'text.secondary'}
                            gutterBottom>
                            A cost-effective 24/7 Cloud hosted solution that targets key issues our partners
                            face. A secure, fully integrated mobile & desktop friendly environment enabling
                            guided help for employees, less burden on experts and data for leadership to
                            more easily manage problem areas.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center" xs={12} md={6}>
                    <Box maxWidth={500} width={1}>
                        <Box
                            component={'img'}
                            src={require('../../../../assets/illustrations/solution.png')}
                            width={1}
                            height={1}
                            sx={{
                            filter: theme.palette.mode === 'dark'
                                ? 'brightness(0.8)'
                                : 'none'
                        }}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutTop;
