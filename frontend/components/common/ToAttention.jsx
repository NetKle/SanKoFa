import { withTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ToAttention = ({ theme, text }) => {
  const styles = {
    box: {
      backgroundColor: theme.lightGrey,
      borderRadius: '10px',
      display: 'flex',
      gap: '1rem',
      padding: '10px',
    },
    typography: {
      color: theme.purple,
      fontWeight: '400',
    },
  };
  return (
    <Box css={styles.box}>
      <Image src="/heartIcon.svg" width={40} height={40} />
      <Box width={'60%'}>
        <Typography css={styles.typography}>{text}</Typography>
      </Box>
    </Box>
  );
};

export default withTheme(ToAttention);
