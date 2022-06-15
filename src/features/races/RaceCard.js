import { CardBody, Card, CardTitle, CardSubtitle, CardImg, Button, CardText } from 'reactstrap';
const RaceCard = ({ race }) => {
    const { name, next_date, address, url, logo_url } = race;

    return (
        <Card>
            <CardImg
                alt={name}
                src={logo_url}
                top
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {next_date}
                </CardSubtitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {address.state}
                </CardSubtitle>
                <CardText>
                    Race Description
                </CardText>
                <Button
                    variant="default"
                    style={{ color: "white", background: "#5dbdf9", border: "none" }}
                    href={url}
                >
                    Discover this race!
                </Button>
            </CardBody>
        </Card>


    )
}

export default RaceCard;
