import { Flex, Heading } from '@chakra-ui/react';

const Info = ({ type }) => {
  return (
    <Flex
      flexDirection={{ base: 'column' }}
      w={{ base: '100%', md: '50%' }}
      textAlign='left'
      mb={{ base: '1', md: '0' }}
      p='10'
      borderLeft={{ md: '2px solid #00000050', lg: '4px solid #00000050' }}
      className='info-container'
    >
      <Heading as='h1' lineHeight='1' mb='3' color='white'>
        {type === 'signup'
          ? 'Learn to code by watching others'
          : `We're happy to see you back`}
      </Heading>
      <Heading as='h2' fontSize='sm' className='info-subtext'>
        {type === 'signup'
          ? `See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great but understanding how developers think is
        invaluable.`
          : `We can't wait to see what you make today`}
      </Heading>
    </Flex>
  );
};

export default Info;
