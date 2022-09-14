import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import DiscountModal from "../components/DiscountModal";

const Home = () => {
	const [modal, setModal] = useState(false);

	const closeModal = () => setModal(false);
	const openModal = () => setModal(true);
	return (
		<>
			<DiscountModal open={modal} onClose={closeModal} />
			<Box
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<Button onClick={openModal} variant="contained">
					Open Modal
				</Button>
			</Box>
		</>
	);
};

export default Home;
