import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function ProfilePage() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (!isAuthenticated) return <Navigate to="/auth" replace={true} />;

	return <div>ProfilePage</div>;
}
