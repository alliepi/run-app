import { RACES } from '../../app/shared/RACES';
import RaceCard from "./RaceCard";
import { Row, Col, ListGroup, ListGroupItem, Container } from 'reactstrap';

const RacesList = () => {
    return (
        <Container>
            <Row className="ms-auto" >
                <ListGroup>
                    {
                        RACES.map(race => {
                            return (
                                <ListGroupItem key={race.race_id} >
                                    <RaceCard race={race} />
                                </ListGroupItem>
                            )
                        })}
                </ListGroup>
            </Row>
        </Container>
    )
}

export default RacesList;