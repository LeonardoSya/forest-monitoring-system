import {
    createBrowserRouter,
} from 'react-router-dom';

import Homepage from '@/pages/home/homepage';
import Overview from '@/pages/overview/overview';
import Map from '@/pages/map/map';
import Monitor from '@/pages/monitor/monitor';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        // errorElement:
        // loader: 
        children: [
            {
                index:true,
                element: <Overview />,
                // loader:
            },
            {
                path: "map",
                element: <Map />
                // loader:
            },
            {
                path: "monitor",
                element: <Monitor />
                // loader:
            },
        ],
    },
]);

export default router;
