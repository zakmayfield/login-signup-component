import { Box, Flex, List, ListItem, Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
const Header = ({setUser}) => {
  const location = useLocation();

  return (
    <Box w='100%'>
      <List>
        <Flex justifyContent={location.pathname === '/' ? 'space-between' : 'flex-end'}>
          {location.pathname === '/' && (
            <ListItem>
              <Link to='/'>Home</Link>
            </ListItem>
          )}
          {location.pathname === '/signup' && (
            <ListItem>
              <Link to='/login'>Login</Link>
            </ListItem>
          )}
          {location.pathname === '/login' && (
            <ListItem>
              <Link to='/signup'>Signup</Link>
            </ListItem>
          )}
          {(location.pathname === '/' || location.pathname === '/') && (
            <ListItem>
              <Button variant='unstyled' onClick={() => setUser('')}>
                Signout
              </Button>
            </ListItem>
          )}
        </Flex>
      </List>
    </Box>
  );
};

export default Header;
