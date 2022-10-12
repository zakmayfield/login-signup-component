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
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Info from './Info';
import Confetti from 'react-confetti';
import useWindowDimensions from '../hooks/useWindowDim';

const Signup = ({ setUser }) => {
  const navigate = useNavigate();

  // this height and width can be achieved by using window.innerHeight/Width but i haven't used a custom hook in a while so i figued i'd implement one
  const { height, width } = useWindowDimensions();

  const [formData, setFormData] = useState(() => ({
    username: '',
    email: '',
    password: '',
    password2: '',
  }));

  const [isLoading, setIsLoading] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(false);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleShowHide1 = () => setShow1(!show1);
  const handleShowHide2 = () => setShow2(!show2);
  const handleFormUpdate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    if (
      formData.username &&
      formData.password &&
      formData.password2 &&
      formData.email &&
      formData.password === formData.password2
    ) {
      setUser(formData.username);
      navigate('/');
      setFormData({ username: '', email: '', password: '', password2: '' });
    } else {
      validate();
    }
  };

  // NOTE in a perfect world i would turn this into a custom hook that you could pass formData to which would auto check which fields are filled and spit back an error toast based on that info - it would then be reuseable on any form
  const validate = () => {
    if (
      !formData.username ||
      !formData.password ||
      !formData.password2 ||
      !formData.email
    ) {
      toast.error('Fill out all fields!');
    } else if (formData.password !== formData.password2) {
      toast.error('Passwords do not match');
    } else {
      return true;
    }
  };

  const redeemDiscount = () => {
    if (!isRedeemed) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsRedeemed(true);
      }, 2000);
    } else {
      alert(`You've already redeemed your discount!`);
    }
  };

  useEffect(() => {
    console.log('loading ->', isLoading);
  }, [isLoading]);

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
      {isRedeemed && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          initialVelocityY={3}
          numberOfPieces={75}
        />
      )}
      <Info type='signup' />
      <Box w={{ md: '50%', lg: '40%' }}>
        <Button
          disabled={isRedeemed ? true : false}
          w='full'
          colorScheme='twitter'
          size='lg'
          fontSize='lg'
          pr='3'
          mb='5'
          onClick={redeemDiscount}
        >
          {!isRedeemed && !isLoading
            ? `Redeem 20% off of your subscription`
            : isRedeemed && !isLoading
            ? `20% off ✅`
            : !isRedeemed &&
              isLoading && <Icon as={FaSpinner} className='spinner-icon' />}
        </Button>

        <form className='form'>
          <Stack spacing={5}>
            <FormControl isRequired>
              <FormLabel fontSize='sm'>Username</FormLabel>
              <Input
                size={{ base: 'lg', md: 'md' }}
                type='text'
                placeholder='Username'
                _placeholder={{ opacity: 0.5, color: 'black' }}
                name='username'
                value={formData.username}
                onChange={handleFormUpdate}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize='sm'>Email</FormLabel>
              <Input
                size={{ base: 'lg', md: 'md' }}
                type='text'
                placeholder='email@email.com'
                _placeholder={{ opacity: 0.5, color: 'black' }}
                name='email'
                value={formData.email}
                onChange={handleFormUpdate}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize='sm'>Password</FormLabel>
              <InputGroup>
                <Input
                  type={show1 ? 'text' : 'password'}
                  placeholder='Password'
                  _placeholder={{ opacity: 0.5, color: 'black' }}
                  pr='4.5'
                  size={{ base: 'lg', md: 'md' }}
                  name='password'
                  value={formData.password}
                  onChange={handleFormUpdate}
                />
                <InputRightElement w='4.5rem'>
                  <Button
                    size='sm'
                    mt={{ base: '2', md: '0' }}
                    color='black'
                    bg='none'
                    onClick={handleShowHide1}
                    className='show-hide-icon'
                  >
                    {show1 ? <Icon as={FaEyeSlash} /> : <Icon as={FaEye} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize='sm'>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={show2 ? 'text' : 'password'}
                  placeholder='Confirm Password'
                  _placeholder={{ opacity: 0.5, color: 'black' }}
                  pr='4.5'
                  size={{ base: 'lg', md: 'md' }}
                  name='password2'
                  value={formData.password2}
                  onChange={handleFormUpdate}
                />
                <InputRightElement w='4.5rem'>
                  <Button
                    size='sm'
                    mt={{ base: '2', md: '0' }}
                    color='black'
                    bg='none'
                    onClick={handleShowHide2}
                    className='show-hide-icon'
                  >
                    {show2 ? <Icon as={FaEyeSlash} /> : <Icon as={FaEye} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>

          <Button
            w='full'
            size='lg'
            mt='5'
            colorScheme='whatsapp'
            onClick={handleSubmit}
          >
            Register
          </Button>

          <Box mt='3' fontSize='sm' className='login-switch'>
            <Link to='/login'>Already have an account?</Link>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default Signup;
