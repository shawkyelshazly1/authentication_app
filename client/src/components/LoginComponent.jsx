import { useState } from "react";
import axios from "../axiosConfig";
import { toast } from "react-hot-toast";
import useAuthStore from "../store/authStore";

export default function LoginComponent() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const loginUser = useAuthStore((state) => state.loginUser);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/login", formData)
			.then((res) => {
				toast.success(`Logged In.`);
				loginUser({ accessToken: res.data.token, user: res.data.user });
			})
			.catch((error) => {
				toast.error(error.response.data.error, { position: "bottom-center" });
			});
	};

	return (
		<>
			<p className="text-lg font-semibold ">Login</p>
			<form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
				<input
					type="email"
					name="email"
					id="email"
					className="bg-transparent border-2 px-3 py-2 rounded-xl text-base"
					placeholder="Email"
					required
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					id="password"
					className="bg-transparent border-2 px-3 py-2 rounded-xl text-base"
					placeholder="Password"
					required
					onChange={handleChange}
				/>

				<input
					type="submit"
					value="Login"
					className="bg-[#2F80ED] text-white py-2 rounded-xl mt-4 font-medium cursor-pointer"
				/>
			</form>
		</>
	);
}
