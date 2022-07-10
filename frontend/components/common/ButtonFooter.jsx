import React from 'react';
import { css, withTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const ButtonFooter = ({ theme, text, href, toNextPage, numberPage }) => {
  const styles = {
    Box: css({
      backgroundColor: theme.purple,
      borderRadius: 10,
      padding: '15px',
      textAlign: 'center',
      width: '90%',
      margin: '0 auto',
      cursor: 'pointer',
      marginBottom: '10px',
    }),
  };
  href && (
    <Link href={href}>
      <Box css={styles.Box}>
        <Typography color="white">{text}</Typography>
      </Box>
    </Link>
  );
  return (
    <Box css={styles.Box} onClick={() => toNextPage(null, numberPage)}>
      <Typography color="white">{text}</Typography>
    </Box>
  );
};

export default withTheme(ButtonFooter);
