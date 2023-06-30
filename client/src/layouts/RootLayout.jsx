import { Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<div className="w-full min-h-screen bg-[#252329] text-white px-8 py-4 flex flex-col justify-center items-center">
			<Outlet />
		</div>
	);
}
