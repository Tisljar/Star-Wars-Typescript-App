import { useEffect, useState } from 'react';
import { ISpecie } from './helpers/interfaces/ISpecie';
import { getSpecies } from './services/species';

const App = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        const species: Array<ISpecie> = getSpecies('Human', 'Droid', 'Wookie');
    }, []);

    return <></>;
};

export default App;

