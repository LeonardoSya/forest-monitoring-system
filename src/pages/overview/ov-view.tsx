import { Flex, Space } from "antd";
import styles from "./overview.module.css";
import OvCard from "@/pages/overview/card";

export default function OvView() {
    return (
        <Flex vertical className={styles.viewContainer}>

            <OvCard
                className={styles.card1}
                title1={"林地资源"}
                title2={"森林覆盖率"}
                description={"林地面积(公顷) 9000 草原面积(公顷) 6328 湿地面积(公顷) 74406"}
            />
            <Space direction="horizontal" className={styles.cardContainer}>
                <OvCard
                    className={styles.card2}
                    title1={"资源监管"}
                    title2={"变化图斑"}
                    description={"核实率 69%"}
                />
                <OvCard
                    className={styles.card3}
                    title1={"国土绿化"}
                    description={"村庄绿化 168 通道绿化279 沟渠绿化 143"}
                />
            </Space>
            <OvCard 
                className={styles.card4}
                title1={"生态巡护"}
                description={"火情事件 1521 病虫害 521 破坏林地 78 人畜破坏 245"}
            />  
        </Flex>
    );
}
