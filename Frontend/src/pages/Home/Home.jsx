import { Divider } from "@mui/material";
import Blogs from "./Components/Blogs/Blogs";
import Categories from "./Components/Categories/Categories";
import Hero from "./Components/Hero";
import Owners from "./Components/Owners/Owners";
import Solutions from "./Components/Solutions/Solutions";
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
			<Solutions />
		</StyledHomeWrapper>
	);
};

export default Home;
