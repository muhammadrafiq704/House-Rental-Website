import { Divider } from "@mui/material";
import Blogs from "./Components/Blogs/Blogs";
import Categories from "./Components/Categories/Categories";
import Hero from "./Components/Hero";
import Owners from "./Components/Owners/Owners";
import Testimonials from "./Components/Testimonials/Testimonials";
import { StyledHomeWrapper } from "./styled";

const Home = () => {
	return (
		<StyledHomeWrapper>
			<Hero />
			<Blogs />
			<Categories />
			<Owners />
			<Testimonials />
		</StyledHomeWrapper>
	);
};

export default Home;
