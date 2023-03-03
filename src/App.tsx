import { useEffect, useState } from 'react';
import { ISpecie } from './helpers/interfaces/ISpecie';
import { getSpecies } from './services/species';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Specie from './pages/Specie';

const App = (): JSX.Element => {
    const initSpeciesState: Array<ISpecie> = [
        {
            name: '',
            designation: '',
            classification: '',
            language: '',
            people: [],
        },
    ];
    const [species, setSpecies] = useState(initSpeciesState);
    const [isLoad, setIsLoad] = useState(false);
    setIsLoad;

    useEffect(() => {
        const species = getSpecies('Human', 'Droid', 'Wookie');
        species.then((data) => {
            setSpecies(data);
            setIsLoad(true);
        });
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home isLoad={isLoad} species={species} />}></Route>
            <Route path="/specie/:specieName" element={<Specie species={species} />}></Route>
        </Routes>
    );
};

export default App;

