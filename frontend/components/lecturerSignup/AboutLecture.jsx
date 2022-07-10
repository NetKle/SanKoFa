import { Box, Typography } from '@mui/material';
import React from 'react';
import ToAttention from '../common/ToAttention';
import Divider from '../common/Divider';
import InputField from './InputField';
import Image from 'next/image';
import SelectWithTypography from './SelectWithTypography';
import ButtonFooter from '../common/ButtonFooter';

const AboutLecture = ({ toNextPage }) => {
  const styles = {
    boxTextField: {
      marginTop: '20px',
      height: '12vh',
    },
    toAttention: {
      marginTop: '20px',
      marginBottom: '20px',
    },
    typography: {
      fontWeight: '500',
    },
    typographyBox: {
      // marginBottom: '5px',
    },
    buttonFooter: {
      width: '100%',
      marginTop: '30px',
      marginBottom: '10px',
    },
  };
  return (
    <Box>
      <Box css={styles.toAttention}>
        <ToAttention
          text={'לתשומת ליבך️, המידע על ההרצאה שלך יוצג לעמותות. '}
        />
      </Box>
      <Box css={styles.typographyBox}>
        <Typography css={styles.typography} variant="body1">
          * במידה ויש לך עוד הרצאה, תוכל להוסיף אותה בהמשך.
        </Typography>
      </Box>
      <Divider />
      <Box css={styles.boxTextField}>
        <InputField
          fieldName={'lactureName'}
          text={'שם ההרצאה'}
          placeholder={'שם ההרצאה'}
          image={
            <Image
              src="/cardIcon.svg"
              width={'24'}
              height={'24'}
              alt="Location icon"
            />
          }
        />
      </Box>
      <Box css={styles.boxTextField}>
        <SelectWithTypography
          name={'lectureType'}
          placeholder={'רשימת תחומים'}
          nameOfField={'lectureType'}
          title="תחום (ניתן לבחור יותר מאחד)"
          url="https://62cae2111eaf3786ebb29598.mockapi.io/api/lecturesTypes"
        />
      </Box>
      <Box css={styles.boxTextField}>
        <InputField
          fieldName={'duration'}
          text={'משך ההרצאה בדקות'}
          placeholder={'למשל: 90 דקות'}
          image={
            <Image
              src={'/clockIcon.svg'}
              width={'24'}
              height={'24'}
              alt="Clock icon"
            />
          }
        />
      </Box>
      <Box css={styles.boxTextField}>
        <SelectWithTypography
          title={'אופי המפגש'}
          placeholder={'רשימת תחומים'}
          nameOfField={'field'}
          name={'natureOfTheMeeting'}
          url="https://62cae2111eaf3786ebb29598.mockapi.io/api/natureOfTheMeeting"
        />
      </Box>
      <Box css={styles.buttonFooter}>
        <ButtonFooter text={'המשך'} toNextPage={toNextPage} numberPage={2} />
      </Box>
    </Box>
  );
};

export default AboutLecture;
