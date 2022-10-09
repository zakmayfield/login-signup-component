import { Box, Heading, Text } from '@chakra-ui/react';

const FormIntro = ({ loginType }) => {
  return (
    <Box p='5'>
      <>
        <Heading as='h1'>
          {loginType === 'signup'
            ? 'Learn to code by watching others'
            : `We're glad to have you back!`}
        </Heading>
        <Text>
          {loginType === 'signup'
            ? `See how expereinced developers solve problems in real-time. Watching
          scripted tutorials is great but understanding how developers think is
          invaluable.`
            : `Put your skills to the test with the best instructors in the
            business.`}
        </Text>
      </>
    </Box>
  );
};

export default FormIntro;
