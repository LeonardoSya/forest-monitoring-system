import { Outlet } from "react-router-dom";
import Header from "./header";

const Homepage = () => {
    return (
        <>
            <Header />
            homepage
            <Outlet />
        </>
    )
}

export default Homepage;