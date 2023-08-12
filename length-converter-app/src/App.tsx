import { Box } from '@chakra-ui/react';
import React from 'react';
import LengthConverterApp from './components/LengthConverterApp';

const App = () => (
    <Box margin="1.2rem">
      <Box>APP-1</Box>
      <Box>
        <LengthConverterApp />
      </Box>
    </Box>
);

export default App;