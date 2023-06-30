import AppLogo from "../assets/logo.svg";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import SocialMediaAuth from "../components/SocialMediaAuth";

export default function AuthPage() {
	const { pathname } = useLocation();

	return (
		<div className="w-full h-full justify-center items-center flex">
			<div className="w-[25%] border-[1px] flex flex-col px-16 py-8 rounded-3xl gap-4  ">
				<div className="flex flex-row gap-2 items-center">
					<img src={AppLogo} className="w-14" />
					<h1 className="font-medium text-2xl">Auth App</h1>
				</div>
				<Outlet />
				<SocialMediaAuth />
				<div className="text-center text-[#828282] text-sm mt-4">
					{pathname.split("/")[2] === "register" ? (
						<p>
							Adready a member?{" "}
							<NavLink className="text-[#2D9CDB] font-medium" to="login">
								Login
							</NavLink>
						</p>
					) : (
						<p>
							Don’t have an account yet?{" "}
							<NavLink className="text-[#2D9CDB] font-medium" to="register">
								Register
							</NavLink>
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
