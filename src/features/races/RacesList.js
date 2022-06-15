import { RACES } from '../../app/shared/RACES';
import RaceCard from "./RaceCard";
import { Row, CardGroup, Container, Card, Col } from 'reactstrap';

const RacesList = () => {
    return (
        <Container>
            <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                {
                    RACES.map(race => {
                        return (
                            <Col>
                                <RaceCard key={race.race_id} race={race} />
                            </Col>
                        )
                    })}
            </Row>
        </Container>
    )
}

export default RacesList;