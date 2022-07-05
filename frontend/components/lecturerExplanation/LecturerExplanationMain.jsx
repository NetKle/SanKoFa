import { css, withTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import LecturerExplanationMainButton from './LecturerExplanationMainButton';
import React from 'react';
import DownArrow from './DownArrow';
const styles = {
  box: css({
    textAlign: 'center',
  }),
};
const LecturerExplanationMain = ({ theme }) => {
  return (
    <Box css={styles.box}>
      <LecturerExplanationMainButton text={'נרשמים'} />
      <DownArrow />
      <LecturerExplanationMainButton text={'מתאמים'} />
      <DownArrow />
      <LecturerExplanationMainButton text={'מרצים'} />
      <DownArrow />
      <LecturerExplanationMainButton text={'מתוגמלים'} />
    </Box>
  );
};

export default withTheme(LecturerExplanationMain);
