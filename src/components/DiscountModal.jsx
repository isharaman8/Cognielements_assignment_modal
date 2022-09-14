import { IconButton, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const DiscountModal = ({ open, onClose }) => {
	return (
		<Modal open={open} onClose={onClose}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					backgroundColor: "white",
					color: "black",
					padding: 5,
					borderRadius: 2,
					minWidth: 600,
				}}
			>
				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Typography variant="h5" fontWeight={600}>
						Add Discount for Garrick's query
					</Typography>
					<IconButton onClick={onClose}>
						<CloseIcon sx={{ fontSize: 30 }} />
					</IconButton>
				</Stack>
			</Box>
		</Modal>
	);
};

export default DiscountModal;
