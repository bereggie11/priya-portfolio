import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
    AboutTop,
    Advantages,
    Customers,
    Pricing,
    Features,
    Hero,
    Jobs,
    Newsletter,
    Process,
    PromoNumbers,
    Questions,
    TrustedCompanies
} from './components';

const Home = () : JSX.Element => {
    return (
        <Main>
            <Container>
                <Hero/>
            </Container>
            <Box bgcolor={'alternate.main'}>
                <Container>
                    <Questions/>
                </Container>
            </Box>
            <Container>
                <Process/>
            </Container>
            <Box bgcolor={'alternate.main'}>
                <Container>
                    <AboutTop/>
                </Container>
            </Box>
            <Container>
                <Features/>
            </Container>
            <Box bgcolor={'alternate.main'}>
                <Container>
                    <PromoNumbers/>
                </Container>
            </Box>
            <Container>
                <Pricing/>
            </Container>
            <Container>
                <Customers/>
            </Container>
            <Container paddingTop={'0 !important'}>
                <Newsletter/>
            </Container>
        </Main>
    );
};

export default Home;
