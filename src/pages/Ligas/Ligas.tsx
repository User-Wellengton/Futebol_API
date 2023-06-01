import { useEffect, useState } from 'react';
import { fetchData } from '../../Api/Api';
import { IObjetoLigas } from '../../models/Ligas';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Ligas.css'
import { useParams } from 'react-router-dom';

const Ligas = () => {
  const { pais } = useParams();
  const [dados, setDados] = useState<IObjetoLigas[]>([]);

  useEffect(() => {
    const fetchLigas = async () => {
      const endpoint = 'leagues';
      const data = await fetchData(endpoint);

      const ligasFiltradas = data.filter((liga: IObjetoLigas) => liga.country.name === pais);

      setDados(ligasFiltradas);
    };

    fetchLigas();
  }, [pais]);

  if (dados.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cardligases" style={{ backgroundColor: 'lightgray' }}>
      {dados.map((liga) => (
        <Link to={`/times/${liga.league.id}`} style={{ textDecoration: 'none' }} key={liga.league.id}>
          <div>
            <Card className="cards" style={{ width: '20rem', backgroundColor: "#ebebeb" }}>
              <Card.Img variant="top" src={liga.league.logo} alt={`Logo of ${liga.league.name}`} />
              <Card.Body>
                <Card.Title style={{ color: '#000000' }}>{liga.league.name} - {liga.league.type}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Ligas;