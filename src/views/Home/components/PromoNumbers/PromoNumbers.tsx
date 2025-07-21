import React, {useState} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const mock = [
    {
        title: 300,
        subtitle: '300 + address requests made.',
        suffix: '+'
    }, {
        title: 45,
        subtitle: '5K + subscribers.',
        suffix: '+'
    }, {
        title: 99,
        subtitle: '99% of our customers rated 5-star our themes over 5 years.',
        suffix: '%'
    }
];

const PromoNumbers = () : JSX.Element => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {defaultMatches: true});

    const [viewPortEntered,
        setViewPortEntered] = useState(false);
    const setViewPortVisibility = (isVisible) => {
        if (viewPortEntered) {
            return;
        }

        setViewPortEntered(isVisible);
    };

    return (
        <Box>
            <Card sx={{
                padding: 3
            }}>
                <CardContent>
                    <Box marginY={4}>
                        <Grid container spacing={2}>
                            {mock.map((item, i) => (
                                <Grid key={i} item xs={12} md={4}>
                                    <Typography variant="h3" align={'center'} gutterBottom>
                                        <Box fontWeight={600}>
                                            <VisibilitySensor
                                                onChange={(isVisible) => setViewPortVisibility(isVisible)}
                                                delayedCall>
                                                <CountUp
                                                    duration={2}
                                                    end={viewPortEntered
                                                    ? item.title
                                                    : 0}
                                                    start={0}
                                                    suffix={item.suffix}/>
                                            </VisibilitySensor>
                                        </Box>
                                    </Typography>
                                    <Typography color="text.secondary" align={'center'} component="p">
                                        {item.subtitle}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                </CardContent>
            </Card>
        </Box>
    );
};

export default PromoNumbers;
