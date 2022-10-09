import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import FormIntro from './FormIntro';
import Signup from './Signup';

const FormContainer = () => {
  const [loginType, setLoginType] = useState('signup');

  return (
    <Box w='100%' bg='white'>
      <FormIntro loginType={loginType} />

      {loginType === 'signup' ? (
        <Signup loginType={loginType} />
      ) : (
        <Signup loginType={loginType} />
      )}


      {/* IMPLEMENT A BUTTON HERE THAT SWITCHES THE FORM FROM SIGNUP -> LOGIN OR VISE VERSA */}

      <Box>{loginType === 'signup' ? 'Already have an account' : 'Create a new account'}</Box>
    </Box>
  );
};

export default FormContainer;
