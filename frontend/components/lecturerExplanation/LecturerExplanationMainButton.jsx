import { css, withTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
const styles = {
  signupLinkBox: css({
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
    padding: 20,
    margin: '0 auto',
  }),
};
const LecturerExplanationMainButton = ({ theme, text }) => {
  return (
    <Box
      css={[styles.signupLinkBox, { border: `2px solid ${theme.lightPurple}` }]}
    >
      <Typography>{text}</Typography>
    </Box>
  );
};

export default withTheme(LecturerExplanationMainButton);
