import axiosInstance from "../axiosConfig";

export const validateAuth = async () => {
	let response = await axiosInstance
		.get("/")
		.then((res) => {
			return { user: res.data };
		})
		.catch((error) => {
			return { error: error.response.data.error };
		});

	return response;
};
