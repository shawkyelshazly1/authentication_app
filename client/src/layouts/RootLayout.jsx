import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";

export default function RootLayout() {
	const checkAuth = useAuthStore((state) => state.checkAuth);

	useEffect(() => {
		checkAuth();
	}, []);

	return (
		<div className="w-full min-h-screen bg-[#252329] text-white px-8 py-4 flex flex-col justify-center items-center">
			<Outlet />
			<Toaster />
		</div>
	);
}
