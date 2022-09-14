import {
	Button,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import SingleDetails from "./SingleDetails";

const DiscountModal = ({ open, onClose }) => {
	const [discount, setDiscount] = useState("");
	const [discountAmount, setDiscountAmount] = useState(0);
	const [applicableAmount, setApplicableAmount] = useState(0);
	const [netApplicableDiscount, setNetApplicableDiscount] = useState(0);

	const [basePricePerSqFt] = useState(5747);
	// const [discountedBasePrice, setDiscountedBas]
	const [totalArea] = useState(1058);

	const handleChangeDiscount = (event) => {
		setDiscount(event.target.value);
	};

	const handleDiscountAmountChange = (event) => {
		setDiscountAmount(event.target.value);
	};

	const handleNetApplicableDiscount = () => {};

	const applyDiscount = () => {
		onClose();
	};

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

				<Stack
					direction={"row"}
					justifyContent={"center"}
					alignItems={"start"}
					spacing={2}
				>
					<Stack sx={{ flex: 1 }} spacing={2}>
						<Typography variant="h6">Enter Discount</Typography>
						<Typography variant="body2" color="gray">
							Select from one of the available Discounting Models
						</Typography>

						<FormControl fullWidth sx={{ marginTop: 2 }}>
							<InputLabel id="demo-simple-select-label">
								Discount Mode
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={discount}
								label="Discount Mode"
								onChange={handleChangeDiscount}
							>
								<MenuItem value={"rupees_from_base_price"}>
									Rupees From Base Price
								</MenuItem>
								<MenuItem value={"percent_of_base_price"}>
									Percent of Base Price
								</MenuItem>
								<MenuItem value={"set_new_base_price"}>
									Set New Base Price
								</MenuItem>
							</Select>
						</FormControl>

						<FormControl fullWidth>
							<TextField
								type="number"
								value={discountAmount}
								onChange={handleDiscountAmountChange}
								label={"Discount Amount"}
								error={discountAmount >= 1000}
								color={discountAmount >= 150 ? "warning" : "primary"}
							/>
							{discountAmount >= 150 && (
								<Typography
									variant="body2"
									color={discountAmount < 1000 ? "orange" : "red"}
									fontSize={10}
								>
									{discountAmount < 1000
										? "Discount amount seems a bit high"
										: "You can't give that high discount, contact Admin"}
								</Typography>
							)}
						</FormControl>

						<FormControl fullWidth>
							<TextField
								value={netApplicableDiscount}
								onChange={handleNetApplicableDiscount}
								label={"Net Applicable Discount"}
								disabled
							/>
						</FormControl>
						<Typography variant="body2" sx={{ fontSize: 8, color: "gray" }}>
							By clicking Apply Discount you're making updates to the cost sheet
							that the user can view. Confirm discount on the Summary on the
							right before clicking on Apply Discount.
						</Typography>
						<Button
							variant="contained"
							onClick={applyDiscount}
							disabled={discountAmount >= 1000 || discountAmount <= 0}
						>
							Apply Discount
						</Button>
					</Stack>
					<Stack sx={{ flex: 1 }}>
						<Typography variant="h6" marginBottom={1}>
							Summary
						</Typography>
						<SingleDetails
							title={"Base price per sq ft."}
							content={`Rs ${basePricePerSqFt}`}
						/>
						<SingleDetails
							title={"Total Area"}
							content={`${totalArea} sqft.`}
						/>

						<Box sx={{ padding: 2 }}></Box>
						<Box
							sx={{
								backgroundColor: "#e8e8e8",
								padding: 2,
								borderRadius: 1,
							}}
						>
							<SingleDetails
								title="Discount Per Sqft"
								content={`Rs ${discountAmount || 0}`}
							/>
							<SingleDetails
								title="Net Discount"
								content={`Rs ${applicableAmount || 0}`}
							/>
						</Box>
						<Box
							sx={{
								padding: 2,
								backgroundColor: "#e8e8e8",
								marginTop: 2,
								borderRadius: 2,
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Typography variant="body1">All Inclusive Total</Typography>
							<Typography variant="body2">
								Rs {totalArea * basePricePerSqFt}
							</Typography>
						</Box>
					</Stack>
				</Stack>
			</Box>
		</Modal>
	);
};

export default DiscountModal;
