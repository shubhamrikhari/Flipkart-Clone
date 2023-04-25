
import { useState } from 'react';
import {Box, Button, styled, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
const StyledButton = styled(Button)`
    background : #fff;
    text-transform : none;
    color : blue;
    padding : 5px 40px;
    border-radius : 2px;
    box-shadow : none;
    font-weight : 600;
`;

const StyledBox = styled(Box)`
    display : flex;
    margin : 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right : 40px;
        font-size : 16px;
        align-items : center;
    }
`;

const UpdateBox = styled(Box)`
    display : flex;
`;

const StyledText = styled(Typography)`
    margin-top : 5px;
    width : 40%;
`
const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <StyledBox>
            <StyledButton variant="contained" onClick={()=> openDialog()}>Login</StyledButton>
            <StyledText>Become a Seller</StyledText>
            <Typography style = {{marginTop : 5}}>More</Typography>
            <UpdateBox>
                <ShoppingCartIcon/>  
                <Typography>Cart</Typography>
            </UpdateBox>
            <LoginDialog open = {open} setOpen = {setOpen}/>
        </StyledBox>
    )
};

export default CustomButtons;