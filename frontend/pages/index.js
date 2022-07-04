import React, { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { withTheme } from "@emotion/react";
import { Divider } from '@mui/material';
import { FaAngleLeft } from "react-icons/fa";
import Link from 'next/link'

const styles = {
  mainTitle: css({
    fontSize: 30,
    textAlign: "center",
    fontWeight: 900,
    marginTop: 10,
  }),
  mainText: css({
    textAlign: "center",
    marginTop: 16,
    fontWeight: 300,
  }),
  questionTitle: css({
    color: "#000",
    marginTop: 24,
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 20,
    textAlign: "center",
  }),
  boxLinksWrap: css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  }),
  signupLinkBox: css({
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 8,
    padding: 20,
  }),
  signUpLinkBoxIcon: css({
    width: 100,
    height: 100,
  }),
  signUpLinkBoxTitle: css({
    fontSize: 18,
    fontWeight: 500,
    marginTop: 20,
    lineHeight: 0,
  }),
  divider: css({
    marginTop: 40,
    marginBottom: 40
  }),
  loginLink: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  loginLinkIcon: css({
    marginLeft: 10
  })
};

const Home = ({ theme }) => {
  return (
    <>
      <Box css={{ width: 120, margin: "auto", marginTop: 30 }}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width="100px"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </Box>

      <Box>
        <Typography css={[styles.mainTitle, { color: theme.purple }]}>
          סאן-קו-פה
        </Typography>

        <Typography css={[styles.mainText, { color: theme.almostBlack }]}>
          קהילת סאן-קו-פה נוצרה מתוך ההיכרות עם האתגרים היחודיים של אוכלוסיות
          בסיכון. המפגשים, הסדנאות, ההרצאות והשיעורים נבחרו והותאמו לקהל היעד,
          מתוך שאיפה להעצים ולאפשר את התנאים שייצרו שינוי חיובי משמעותי בחייהם.
        </Typography>

        <Typography css={styles.questionTitle}>רוצה לקחת חלק?</Typography>

        <Box css={styles.boxLinksWrap}>
          <Box
            css={[
              styles.signupLinkBox,
              { border: `2px solid ${theme.lightPurple}` },
            ]}
          >
            <Image
              src="/signup-icon-1.png"
              alt="Logo"
              width={65}
              height={65}
              objectFit="contain"
            />

            <Typography css={styles.signUpLinkBoxTitle}>עמותה</Typography>
          </Box>

          <Box
            css={[
              styles.signupLinkBox,
              { border: `2px solid ${theme.lightPurple}` },
            ]}
          >
            <Image
              src="/signup-icon-2.png"
              alt="Logo"
              width={65}
              height={65}
              objectFit="contain"
            />

            <Typography css={styles.signUpLinkBoxTitle}>מרצה</Typography>
          </Box>
        </Box>

        <Divider css={[styles.divider, {backgroundColor: theme.lightGrey}]}></Divider>

        <Link href="/login">
          <Typography css={styles.loginLink}>
            כניסת משתמשים רשומים <FaAngleLeft css={styles.loginLinkIcon}/>
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default withTheme(Home);
