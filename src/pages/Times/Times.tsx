import { useEffect, useState } from 'react';
import { fetchData } from '../../Api/Api';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { IObjetoTimes } from '../../models/Times';
import './Times.css'

const Times = () => {
    const { id } = useParams();
    const season = new Date().getFullYear().toString();
    const [dados, setDados] = useState<IObjetoTimes[]>([]);

    useEffect(() => {
        const fetchtimes = async () => {
            const endpoint = `teams?league=${id}&season=${season}`;
            const params = endpoint;
            console.log(endpoint)
            const data = await fetchData(params);
            console.log(data)
            setDados(data);
        };

        fetchtimes();
    }, [id, season]);

    if (dados.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cardtimes" style={{ backgroundColor: 'lightgray' }}>
            {dados.map((time) => (
                <Link to={`/${time.team.id}`} style={{ textDecoration: 'none' }} key={time.team.id}>
                    <div>
                        <Card className="cards" style={{ width: '20rem', backgroundColor: "#ebebeb" }}>
                            <Card.Img variant="top" src={time.team.logo} alt={`Logo of ${time.team.name}`} />
                            <Card.Body>
                                <Card.Title style={{ color: '#000000' }}>{time.team.name + " - " + time.team.code} </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Times;