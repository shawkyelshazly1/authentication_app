import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomePage />} />
			<Route path="/auth" element={<AuthPage />}>
				<Route path="register" element={<RegisterComponent />} />
				<Route path="login" element={<LoginComponent />} />
				<Route index element={<LoginComponent />} />
			</Route>
			<Route path="profile" element={<ProfilePage />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
