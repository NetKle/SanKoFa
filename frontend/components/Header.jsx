import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AiOutlineQuestion } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { css } from "@emotion/react";
import { withTheme } from '@emotion/react'

const styles = {
	header: css({
		paddingTop: 10
	}),
	backBtn: css({
		fontWeight: 400
	}),
	helpBtn: {
		height: 30,
		width: 30,
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '1.3rem'
	}
}

const Header = ({ theme }) => {
  return (
    <div>
      <Box
        sx={{
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
		css={[styles.header, {fontSize: theme.fontSize}]}
      >
        <Box>
          <Button css={[styles.backBtn, { color: theme.almostBlack }]}>
            <FaAngleRight /> חזרה
          </Button>
        </Box>

        <Box css={[styles.helpBtn, { backgroundColor: theme.lightGrey, color: theme.purple }]}>
          <AiOutlineQuestion color={theme.almostBlack}/>
        </Box>
      </Box>
    </div>
  );
};

export default withTheme(Header);
