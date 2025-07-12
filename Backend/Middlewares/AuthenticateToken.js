import jwt from "jsonwebtoken";

export const AuthenticateToken = (req, res, next) => {
	// const authHeader = req.headers["authorization"];
	const authHeader = req.headers.authorization;
	const token = authHeader?.split(" ")[1];

	// console.log('authHeader', authHeader);
	// console.log('token', token);

	if (!token) {
		return res.status(401).json({ message: "User login first" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;

		next();
	} catch (error) {
		return res.status(403).json({ message: "Invalid or expired token" });
	}
};
