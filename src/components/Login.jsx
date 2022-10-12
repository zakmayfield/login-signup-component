import {
  Input,
  InputGroup,
  FormControl,
  Stack,
  FormLabel,
  InputRightElement,
  Button,
  Icon,
  Box,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Info from './Info';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => ({
    username: '',
    password: '',
  }));

  const [show, setShow] = useState(false);
  const handleShowHide = () => setShow(!show);
  const handleFormUpdate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (formData.username && formData.password) {
      setUser(formData.username);
      navigate('/');
      setFormData({ username: '', email: '' });
    } else {
      validate();
    }
  };

  const validate = () => {
    if (!formData.username) {
      toast.error('Username is required!');
    } else if (!formData.password) {
      toast.error('Password is required!');
    } else if (!formData.username || !formData.password) {
      toast.error('Fill out all fields!');
    } else {
      return true;
    }
  };

  return (
    <Flex
      w={{ base: '100%', sm: '75%', md: '100%' }}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ md: 'center' }}
      justifyContent={{ md: 'center' }}
      mt='5'
      mb='5'
      className='form-container'
    >
      <Info type='login' />
      <Box w={{ md: '50%' }} p='10'>
        <form className='form'>
          <Stack spacing={5}>
            <FormControl isRequired>
              <FormLabel fontSize='sm'>Username</FormLabel>
              <Input
                size='lg'
                type='text'
                placeholder='Username'
                _placeholder={{ opacity: 0.5, color: 'black' }}
                name='username'
                value={formData.username}
                onChange={handleFormUpdate}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize='sm'>Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder='Password'
                  _placeholder={{ opacity: 0.5, color: 'black' }}
                  pr='4.5'
                  size='lg'
                  name='password'
                  value={formData.password}
                  onChange={handleFormUpdate}
                />
                <InputRightElement w='4.5rem'>
                  <Button
                    size='sm'
                    mt='2'
                    color='black'
                    bg='none'
                    onClick={handleShowHide}
                    className='show-hide-icon'
                  >
                    {show ? <Icon as={FaEyeSlash} /> : <Icon as={FaEye} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>

          <Button
            w='full'
            size='lg'
            mt='5'
            colorScheme='twitter'
            onClick={handleSubmit}
          >
            Log In
          </Button>

          <Box mt='3' fontSize='sm' className='login-switch'>
            <Link to='/signup'>Create an account</Link>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
