import { StyledContactWrappper } from "@/pages/ContactUs/styled";
import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import Form from "./Form";
import { contactData } from "./utils";

const ContactUs = () => {
	return (
		<StyledContactWrappper>
			<Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<StyledTypography fs={1} styletype="default" light>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam non
					sit consequuntur libero excepturi cumque molestiae ab. Alias enim esse
					quaerat placeat earum. Nemo velit quae quam neque quod commodi?, Lorem
					ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
					assumenda magni dolor velit amet, illum facilis quasi laborum
					explicabo excepturi id, libero illo, nobis iure nesciunt sapiente
					enim? Expedita, soluta magnam. Ducimus iste ea officiis odio aperiam
					delectus alias voluptatem.
				</StyledTypography>
				{contactData.map((contact) => (
					<Box
						key={contact.id}
						sx={{ display: "flex", alignItems: "center", gap: "10px", pl: 2 }}
					>
						<img src={contact.icon} alt="icon" />
						<StyledTypography fs={1} styletype="default" light>
							{contact.title}
						</StyledTypography>
					</Box>
				))}
			</Box>
			<Box
				sx={{
					width: "100%",
					borderRadius: "20px",
					height: "500px",
					backgroundColor: "rgba(255, 255, 255, 0.2)",
					backdropFilter: "blur(8px)",
					border: "1px solid rgba(0, 106, 113, 0.2)",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<Form />
			</Box>
		</StyledContactWrappper>
	);
};

export default ContactUs;
