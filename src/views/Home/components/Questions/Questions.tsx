import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mock = [
    {
        title: 'Why this product?',
        subtitle: 'These are areas where costly mistakes and continual rework happen. Usually we ju' +
                'st can’t find the right answer when we need it.'
    }, {
        title: 'What is it about?',
        subtitle: 'It’s not always feasible to guide our employees using tenured employees who are ' +
                'already overburdened as it is.'
    }
];

const Questions = () : JSX.Element => {
    return (
        <Box>
            <Grid container spacing={4}>
                {mock.map((item, i) => (
                    <Grid key={i} item xs={12} md={6}>
                        <Typography
                            variant={'h6'}
                            gutterBottom
                            sx={{
                            fontWeight: 700
                        }}>
                            {item.title}
                        </Typography>
                        <Typography color={'text.secondary'}>{item.subtitle}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Questions;
