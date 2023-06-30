import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { validateAuth } from "../utils/user";

const authStore = create()(
	devtools((set) => ({
		accessToken: "",
		user: {},
		isAuthenticated: false,

		checkAuth: async () => {
			let response = await validateAuth();
			if (response.user)
				set({
					accessToken: localStorage.getItem("accessToken"),
					user: response.user,
					isAuthenticated: true,
				});
			else
				set({
					accessToken: "",
					user: {},
					isAuthenticated: false,
				});
		},
		loginUser: ({ accessToken, user }) =>
			set((state) => {
				localStorage.setItem("accessToken", accessToken);
				return {
					...state,
					accessToken,
					user,
					isAuthenticated: true,
				};
			}),

		logoutUser: () =>
			set((state) => {
				localStorage.removeItem("accessToken");
				return {
					...state,
					accessToken: "",
					user: {},
					isAuthenticated: false,
				};
			}),
	}))
);

export default authStore;
