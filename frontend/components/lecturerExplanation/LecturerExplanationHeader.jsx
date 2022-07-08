import React from 'react';
import { css } from '@emotion/react';
import { withTheme } from '@emotion/react';
import { Box, Typography, Container } from '@mui/material';
import Divider from '../common/Divider';

const LecturerExplanationHeader = ({ theme }) => {
  const styles = {
    lectureHeader: css({
      textAlign: 'center',
    }),
    typographyHeader: css({
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: '12px',
      marginBottom: '12px',
      fontWeight: 500,
      color: theme.almostBlack
    }),
    typographyMain: css({
      fontSize: '1rem',
      marginTop: '12px',
      marginBottom: '12px',
      fontSize: 16,
      fontWeight: 300,
      color: theme.almostBlack
    }),
  };

  return (
    <>
      <Box css={styles.lectureHeader}>
        <Typography css={styles.typographyHeader} color="initial">
          קהילת סאן-קו-פה היא המקום שלך ליצירת שינוי והגברת תחושת המשמעות.
        </Typography>
      </Box>
      <Box css={styles.lectureHeader}>
        <Typography
          css={styles.typographyMain}>
          הקהילה שלנו מורכבת מאנשי ונשות תוכן ששואפים לייצר שינוי משמעותי בחייהם
          של אוכלוסיות בסיכון.
        </Typography>
      </Box>
      <Divider />
      <Box css={styles.lectureHeader}>
        <Typography
          css={styles.typographyMain}>
          בנוסף, הקהילה מייצרת לחבריה: <br />
          במות להישמע, חוויית התנסות, שיווק, הכנסה.
        </Typography>
      </Box>
      <Divider />
      <Box css={styles.lectureHeader}>
        <Typography
          css={[styles.typographyHeader, { marginTop: 30 }]}>
          איך זה עובד?
        </Typography>
      </Box>
    </>
  );
};

export default withTheme(LecturerExplanationHeader);
