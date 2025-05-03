import { images } from "@/assets";
import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { StyledContactWrappper } from "./styled";
import { AboutData } from "./utils";

const Home = () => {
	return (
		<StyledContactWrappper>
			<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
				<StyledTypography fs={1.5} fw={500} styletype="default">
					Our Services
				</StyledTypography>
				{AboutData.map((contact) => (
					<Box
						key={contact.id}
						sx={{ display: "flex", alignItems: "center", gap: "10px" }}
					>
						<img src={contact.icon} alt="icon" />
						<StyledTypography fs={1} styletype="default" light>
							{contact.title}
						</StyledTypography>
					</Box>
				))}
			</Box>
			<Box>
				<img
					src={images.hero}
					alt="img"
					width={500}
					height={400}
					style={{ borderRadius: "20px" }}
				/>
			</Box>
		</StyledContactWrappper>
	);
};

export default Home;
