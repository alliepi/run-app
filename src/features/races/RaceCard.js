import { Card, CardImg, Row, Col, CardTitle, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const RaceCard = (props) => {
    return (
        <ListGroupItemHeading>{props.race.name}</ListGroupItemHeading>
    )
}

export default RaceCard;


