import axios from "axios";


let axiosInstance = axios.create({
	baseURL: "http://localhost:5000/users",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json; charset=UTF-8",
		authorization: `Bearer ${localStorage.getItem("accessToken")}`,
	},
});

export default axiosInstance;
