import { Outlet } from "react-router-dom";
import Header from "./header";

const Homepage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Homepage;