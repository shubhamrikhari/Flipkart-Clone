import './App.css';
import {Box, styled} from '@mui/material';
import Header from './components/header/Header';
import Home from './components/home/Home';

const StyledBox = styled(Box)`
  margin-top : 55px;
`;


function App() {
  return (
    <>
    <Header/>
    <StyledBox>
        <Home/>
    </StyledBox>
    </>
  )
}

export default App;
