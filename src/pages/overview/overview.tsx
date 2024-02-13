import { Flex } from "antd";
import OvMap from "@/pages/overview/ov-map";
import OvView from "@/pages/overview/ov-view";

const Overview = () => {
    return (
        <Flex align="flex-start" justify="center">
            <OvMap />
            <OvView />
        </Flex>
    );
}

export default Overview;