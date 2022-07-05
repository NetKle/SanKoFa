import React from 'react';
import { css, withTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';

const ButtonFooter = ({ theme, text }) => {
  const styles = {
    Box: css({
      backgroundColor: theme.purple,
      borderRadius: 10,
      padding: '15px',
      textAlign: 'center',
      width: '90%',
      margin: '0 auto',
      marginTop: '41px',
    }),
  };

  return (
    <Box css={styles.Box}>
      <Typography color="white">{ text }</Typography>
    </Box>
  );
};

export default withTheme(ButtonFooter);
