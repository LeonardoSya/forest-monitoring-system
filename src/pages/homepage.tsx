import { Outlet } from "react-router-dom";
import {Separator} from '@/components/ui/separator';

const Homepage = () => {
    return (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                <p></p>
            </div>
            <Outlet />
        </div>
    )
}

export default Homepage;