import Loader from '../components/Loader';
import Species from '../components/Species';
import { ISpecie } from '../helpers/interfaces/ISpecie';

type props = {
    isLoad: boolean;
    species: Array<ISpecie>;
};

const Home = ({ isLoad, species }: props) => {
    if (!isLoad) {
        return <Loader />;
    }
    return <Species species={species} />;
};

export default Home;
