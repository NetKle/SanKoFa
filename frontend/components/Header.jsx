import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AiOutlineQuestion } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { css } from "@emotion/react";
import { withTheme } from '@emotion/react'

const Header = ({ theme }) => {
  const styles = {
    header: css({
      paddingTop: 10,
      fontSize: theme.fontSize
    }),
    backBtn: css({
      fontWeight: 400,
      color: theme.almostBlack
    }),
    helpBtn: {
      height: 30,
      width: 30,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.3rem',
      backgroundColor: theme.lightGrey,
      color: theme.purple
    }
  }

  return (
    <div>
      <Box
        sx={{
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
        css={styles.header}>
        <Box>
          <Button css={styles.backBtn}>
            <FaAngleRight /> חזרה
          </Button>
        </Box>

        <Box css={styles.helpBtn}>
          <AiOutlineQuestion color={theme.almostBlack}/>
        </Box>
      </Box>
    </div>
  );
};

export default withTheme(Header);
