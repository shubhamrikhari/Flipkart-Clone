import React, {useState} from 'react';
import {Box, Dialog, TextField, Typography, styled, Button} from '@mui/material';
import { authenticatesignup } from '../../Service/api.js';
const OuterBox = styled(Box)`
    height : 70vh;
    width : 75vh;
`;

const UpperBox = styled(Box)`
    height : 100%;
    display : flex;
`;
const FirstBox = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
    height : 100%;
    width : 45%;
    & > p, & > h5 {
        margin : 35px 45px;
        color : #fff;
        font-weight : 600;
    }
`;
const SecondBox = styled(Box)`
    display : flex;
    flex-direction : column;
    padding : 25px 35px;
    flex : 1;
    & > p, & > button, & > div{
        margin-top : 20px;
    }
`;


const StyledLogin = styled(Button)`
    color : #fff;
    background : #FB641B;
    text-transform : none;
    height : 50px;
    border-radius : 2px;
`;

const StyledRequest = styled(Button)`
    color : #2874f0;
    background : #fff;
    text-transform : none;
    height : 50px;
    box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
    font-size : 12px;
    color : #878787;
`

const TextNew = styled(Typography)`
    font-size : 14px;
    text-align : center;
    color : #2874F0;
    cursor : pointer;
    font-weight : 600;
`

const accountInitialValues = {
    login : {
        view : 'login',
        heading : 'Login',
        subHeading : 'Get Access to your Orders, Wishlists and Recommendations'
    },
    signup : {
        view : 'signup',
        heading : "Looks like you're new here!",
        subHeading : "Signup with your mobile to get Started"
    }
}

const signupInitialValues = {
    firstName : '',
    lastName : '',
    userName : '',
    email : '',
    password : '',
    phone : ''
}
const LoginDialog = ({open, setOpen}) => {

    const [account, toggleAccount] = useState(accountInitialValues.login);

    const [signup, setSignup] = useState(signupInitialValues);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login)
    }


    const toggleSignUp = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name] : e.target.value});
        console.log(signup)
    }

    const signupUser = async () => {
        let response = await authenticatesignup(signup)
    }

  return (
    <Dialog open={open} onClose={handleClose}>
      <OuterBox>
        <UpperBox>
            <FirstBox>
                <Typography variant='h5'>{account.heading}</Typography>
                <Typography>{account.subHeading} </Typography>
            </FirstBox>
            { account.view === 'login' ? <SecondBox>
                <TextField variant='standard' label="Enter Email/Mobile"></TextField>
                <TextField variant='standard' label="Enter Password"></TextField>
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                <StyledLogin>Login</StyledLogin>
                <Typography style={{textAlign : 'center'}}>OR</Typography>
                <StyledRequest>Request OTP</StyledRequest>
                <TextNew onClick={() => toggleSignUp()}>New to Flipkart? Create an account</TextNew>
            </SecondBox> :
            <SecondBox>
                <TextField variant='standard' label="Enter First Name" name="firstName" onChange={(e)=>onInputChange(e)}></TextField>
                <TextField variant='standard' label="Enter Last Name" name="lastName" onChange={(e) => onInputChange(e)}></TextField>
                <TextField variant='standard' label="Enter Username" name="userName"  onChange={(e) => onInputChange(e)}></TextField>
                <TextField variant='standard' label="Enter Email" name="email" onChange={(e) => onInputChange(e)}></TextField>
                <TextField variant='standard' label="Enter Password" name="password" onChange={(e) => onInputChange(e)}></TextField>
                <TextField variant='standard' label="Enter Phone" name="phone" onChange={(e) => onInputChange(e)}></TextField>
                <StyledLogin onClick = {() => signupUser()}>Continue</StyledLogin>
            </SecondBox>}
        </UpperBox >
      </OuterBox>
    </Dialog>
  )
}

export default LoginDialog;
