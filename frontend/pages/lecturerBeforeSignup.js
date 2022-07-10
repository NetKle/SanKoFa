import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Container, Typography } from '@mui/material';
import ButtonFooter from '../components/common/ButtonFooter';

const LecturerBeforeSignup = () => {
  const styles = {
    hero: css({
      marginTop: 100,
    }),
    mainTitle: css({
      maxWidth: 300,
      margin: 'auto',
      fontWeight: 500,
      textAlign: 'center',
      fontSize: 18,
    }),
    subText: css({
      paddingTop: 5,
      fontSize: 16,
      fontWeight: 300,
      textAlign: 'center',
      maxWidth: 400,
      margin: 'auto',
      color: '#777C86',
    }),
    startText: css({
      fontWeight: 600,
      fontSize: 22,
      paddingTop: 15,
      textAlign: 'center',
    }),
  };

  return (
    <Container>
      <Image
        src="/lecturer-before-signup-hero.svg"
        alt="Logo"
        width="100px"
        height="100%"
        layout="responsive"
        objectFit="contain"
        css={styles.hero}
      />

      <Typography css={styles.mainTitle}>
        לפני שיוצאים לדרך, יש לנו כמה שאלות שיעזרו לנו להכיר אותך טוב יותר.
      </Typography>

      <Typography css={styles.subText}>
        לתשומת לבך, בחלק הבא נבקש ממך להעלות סרטון שלך באורך של עד דקה וחצי שבו
        תספר על עצמך ועל ההרצאה שלך.
      </Typography>

      <Typography css={styles.startText}>שנתחיל?</Typography>

      <ButtonFooter text="קדימה" href="/lecturerSignup" />
    </Container>
  );
};

export default LecturerBeforeSignup;
