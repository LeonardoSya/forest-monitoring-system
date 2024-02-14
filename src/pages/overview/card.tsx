import { Card } from 'antd';

const OvCard = ({
    title1,
    title2,
    description,
    className,
}: {
    className?: string;
    title1: string;
    title2?: string;
    description?: string;
}) => {

    return (
        <Card
            title={title1}
            hoverable
            className={className}
        >
            <Card.Meta
                title={title2}
                description={description}
            />
        </Card>
    );
};



export default OvCard;