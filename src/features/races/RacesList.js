import { RACES } from '../../app/shared/RACES';
import RaceCard from "./RaceCard";
import { Row, Col } from 'reactstrap';

const RacesList = () => {
    return (
        <Row className="ms-auto" >
            {
                RACES.map(race => {
                    return (
                        <Col md='5' className='m-4' key={race.race_id} >
                            <RaceCard race={race} />
                        </Col>
                    )
                })}
        </Row>
    )
}

export default RacesList;