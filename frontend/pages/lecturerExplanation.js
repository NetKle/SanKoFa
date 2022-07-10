import React from 'react';
import LecturerExplanationHeader from '../components/lecturerExplanation/LecturerExplanationHeader';
import LecturerExplanationMain from '../components/lecturerExplanation/LecturerExplanationMain';
import ButtonFooter from '../components/common/ButtonFooter';
import { Box, Container } from '@mui/material';

const LecturerExplanation = () => {
  return (
    <Container>
      <LecturerExplanationHeader />
      <LecturerExplanationMain />
      <Box sx={{ marginTop: '10px' }}>
        <ButtonFooter
          text={'אני רוצה להצטרף!'}
          href={'/lecturerBeforeSignup'}
        />
      </Box>
    </Container>
  );
};

export default LecturerExplanation;
