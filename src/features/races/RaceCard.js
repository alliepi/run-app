import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Row, Col } from 'reactstrap';
const RaceCard = ({ race }) => {
    const { name, next_date, address, url } = race;

    return (
        <Row className="race-card">
            <Col md={7}>
                <ListGroupItemHeading>{name}</ListGroupItemHeading>
                <ListGroupItemText>{next_date}</ListGroupItemText>
                <ListGroupItemText>{address.city}</ListGroupItemText>
                <ListGroupItemText>{address.state}</ListGroupItemText>
            </Col>
            <Col md={5}>
                <div>
                    <Button
                        variant="default"
                        style={{ color: "white", background: "#5dbdf9", border: "none" }}
                        href={url}
                    >
                        Discover this race!
                    </Button>
                </div>
            </Col>
        </Row >
    )
}

export default RaceCard;


