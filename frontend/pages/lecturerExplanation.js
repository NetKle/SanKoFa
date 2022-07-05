import React from 'react';
import LecturerExplanationHeader from '../components/lecturerExplanation/LecturerExplanationHeader';
import LecturerExplanationMain from '../components/lecturerExplanation/LecturerExplanationMain';
import ButtonFooter from '../components/common/ButtonFooter';
import { Container } from '@mui/material';

const LecturerExplanation = () => {
  return (
    <Container>
      <LecturerExplanationHeader />
      <LecturerExplanationMain />
      <ButtonFooter text={'אני רוצה להצטרף!'} />
    </Container>
  );
};

export default LecturerExplanation;
