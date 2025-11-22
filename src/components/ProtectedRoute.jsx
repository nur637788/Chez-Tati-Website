import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const { isLoggedIn } = useSelector(state => state.auth);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
