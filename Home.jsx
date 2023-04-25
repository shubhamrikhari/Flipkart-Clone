import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import {Box, styled} from '@mui/material'

const StyledBox = styled(Box)`
    padding : 10px;
    background : #F2F2F2;
`;
const Home = () => {
  return (
    <Box>
        <Navbar />
        <StyledBox>
            <Banner />
        </StyledBox>
    </Box>
  )
}

export default Home;
