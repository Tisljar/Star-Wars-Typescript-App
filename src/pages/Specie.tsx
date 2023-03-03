import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

const Specie = ({ species }: any) => {
    const params = useParams();
    return (
        <>
            <Navbar species={species} specieName={params.specieName} />
        </>
    );
};

export default Specie;
