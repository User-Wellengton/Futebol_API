import { useEffect, useState } from "react";
import { fetchData } from '../../Api/Api';
import './Paises.css'
import { IPaises } from "../../models/Paises";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Paises = () => {

    const [dados, setDados] = useState<IPaises[]>([]);

    useEffect(() => {
        const fetchPaises = async () => {
            const endpoint = 'countries';
            const data = await fetchData(endpoint);
            setDados(data);
        };

        fetchPaises();
    }, []);

    if (dados.length === 0) {
        return <div>Loading...</div>;
    }



    return (

        <div className="cardPaises" style={{ backgroundColor: 'lightgray' }}>
            {dados.map((pais) => (
                <Link to={`/ligas/${pais.name}`} style={{ textDecoration: 'none' }}>
                    <div key={pais.code + "-" + pais.name}>
                        <Card className="cards" style={{ width: '20rem', backgroundColor: "#ebebeb" }}>
                            <Card.Img variant="top" src={pais.flag} alt={`Flag of ${pais.name}`} />
                            <Card.Body>
                                <Card.Title style={{ color: '#000000' }}>{pais.name} - {pais.code}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Link>
            ))}
        </div>

    );
}

export default Paises
