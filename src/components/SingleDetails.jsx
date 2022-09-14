import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const SingleDetails = ({ title, content }) => {
	return (
		<Stack
			direction="row"
			justifyContent={"space-between"}
			alignItems="center"
			sx={{ width: "100%" }}
		>
			<Typography variant="body1">{title}</Typography>
			<Typography variant="body1">{content}</Typography>
		</Stack>
	);
};

export default SingleDetails;
