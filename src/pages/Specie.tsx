import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../components/Table';
import { VEHICLES } from '../helpers/constants/swapiEndpoints';
import { ISpecie } from '../helpers/interfaces/ISpecie';
import { getUser, getVehicles } from '../services/species';

const Specie = ({ species }: any) => {
    const [specie, setSpecie] = useState({});
    const [userName, setUserName] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [vehicles, setVehicles] = useState([]);

    const params = useParams();
    // POPRAVITI
    useEffect(() => {
        setIsLoad(false);
        if (species.length >= 1 && species[0].name) {
            const specieObj: ISpecie = species.find(
                ({ name }: ISpecie) => name.toLocaleLowerCase() === params.specieName,
            );
            const userUrl: string = specieObj.people[0] ?? ''; // nullish operator (ako je lijevo undefined uzmi desno)
            const vehichlesUrl: string = getVehiclesUrl(specieObj);

            if (userUrl && vehichlesUrl) {
                // Dohvati podatke o korisniku i vozilima
                getUserAndVehiclesData(userUrl, vehichlesUrl);
            } else if (userUrl) {
                // Dohvati podatke o korisniku
                getUserData(userUrl);
            }
            setSpecie(specieObj);
        }
    }, [params, species]);

    const getUserData = (userUrl: string) => {
        const user = getUser(userUrl);
        user.then((result) => {
            setUserName(result?.data.name);
        })
            .catch((error) => {
                console.error('Nešto nije u redu!');
            })
            .finally(() => setIsLoad(true));
    };

    const getUserAndVehiclesData = (userUrl: string, vehichlesUrl: string) => {
        const data = Promise.all([getUser(userUrl), getVehicles(vehichlesUrl)]);
        data.then((result) => {
            setUserName(result[0]?.data.name);
            setVehicles(result[1]?.data.results);
        })
            .catch((error) => {
                console.error('Nešto nije u redu!');
            })
            .finally(() => setIsLoad(true));
    };

    const getVehiclesUrl = (specie: ISpecie): string => {
        switch (specie.name) {
            case 'Human':
                return VEHICLES;
            case 'Droid':
                return VEHICLES + '?search=droid';
            default:
                return '';
        }
    };

    return (
        <>
            <Table
                isLoad={isLoad}
                species={species}
                specieName={params.specieName}
                username={userName}
                vehicles={vehicles}
            />
        </>
    );
};

export default Specie;
