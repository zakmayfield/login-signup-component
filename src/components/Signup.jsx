import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState(() => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }));

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log('input', formData);
  }, [formData]);

  return (
    <Box p='5'>
      <form>
        <FormControl isRequired mt='3'>
          <FormLabel>Username</FormLabel>
          <Input
            name='username'
            value={formData.username}
            placeholder='Username'
            onChange={onChange}
          />
        </FormControl>

        <FormControl isRequired mt='3'>
          <FormLabel>Email</FormLabel>
          <Input
            name='email'
            value={formData.email}
            placeholder='Email'
            onChange={onChange}
          />
        </FormControl>

        <FormControl isRequired mt='3'>
          <FormLabel>Password</FormLabel>
          <Input
            name='password'
            value={formData.password}
            placeholder='Password'
            onChange={onChange}
          />
        </FormControl>

        <FormControl isRequired mt='3'>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            name='confirmPassword'
            value={formData.confirmPassword}
            placeholder='Confirm Password'
            onChange={onChange}
          />
        </FormControl>

        <Button w='100%' type='submit' my='5' colorScheme='whatsapp'>
          Sign Up!
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
