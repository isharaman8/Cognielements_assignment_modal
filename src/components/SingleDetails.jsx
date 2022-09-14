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
			<Typography
				variant="body2"
				sx={{ fontWeight: 600, color: "gray", fontSize: 12 }}
			>
				{title}
			</Typography>
			<Typography variant="body2" sx={{ fontSize: 12 }}>
				{content}
			</Typography>
		</Stack>
	);
};

export default SingleDetails;
