import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const RaceCard = (props) => {
    return (
        <Card>
            <CardImg
                width="25%"
                src={props.race.logo_url}
                alt={props.race.name}
            />
            <CardTitle>{props.race.name}</CardTitle>
        </Card>
    )
}

export default RaceCard;