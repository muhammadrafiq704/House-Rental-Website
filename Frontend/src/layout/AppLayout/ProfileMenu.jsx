import { useAuth } from "@/context/AuthContext";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ anchorEl, handleClose, open, user }) => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			slotProps={{
				paper: {
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&::before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				},
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<MenuItem onClick={handleClose} sx={{ textTransform: "capitalize" }}>
				<Avatar>
					<img
						src={ImageGettingURL(user.file)}
						alt="icon"
						style={{
							width: "32px",
							height: "32px",
							objectFit: "cover",
						}}
					/>
				</Avatar>{" "}
				{user.username}
			</MenuItem>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<Settings fontSize="small" sx={{ color: "#006A71" }} />
				</ListItemIcon>
				Settings
			</MenuItem>
			<Divider />
			<MenuItem
				onClick={() => {
					logout();
					return navigate("/sign-in");
				}}
			>
				<ListItemIcon>
					<Logout fontSize="small" sx={{ color: "#006A71" }} />
				</ListItemIcon>
				Logout
			</MenuItem>
		</Menu>
	);
};

export default ProfileMenu;
