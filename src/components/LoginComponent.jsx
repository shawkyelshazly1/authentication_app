export default function LoginComponent() {
	return (
		<>
			<p className="text-lg font-semibold ">Login</p>
			<form action="" className="mt-6 flex flex-col gap-4">
				<input
					type="email"
					name="email"
					id="email"
					className="bg-transparent border-2 px-3 py-2 rounded-xl text-base"
					placeholder="Email"
					required
				/>
				<input
					type="password"
					name="password"
					id="password"
					className="bg-transparent border-2 px-3 py-2 rounded-xl text-base"
					placeholder="Password"
					required
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
