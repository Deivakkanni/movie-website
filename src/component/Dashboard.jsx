import { useEffect } from "react";

export default function Dashboard() {

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/login";
        }
    }, []);

    return <h1>Welcome to Dashboard 🎉</h1>;
          <p>You are logged in ✅</p>

}
