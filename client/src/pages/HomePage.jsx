import { NavLink } from "react-router-dom";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center gap-10">
			<h1 className="font-medium text-2xl">Welcome To Auth App</h1>
			<NavLink
				className="bg-[#2F80ED] px-4 py-2 rounded-xl font-medium text-lg"
				to="auth"
			>
				Go To Auth
			</NavLink>
		</div>
	);
}
