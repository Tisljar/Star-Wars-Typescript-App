import { ISpecie } from '../../helpers/interfaces/ISpecie';
import { Link } from 'react-router-dom';
import Card from './Card';

const Species = ({ species }: any) => {
    return (
        <div className="container mt-5">
            <div className="row">
                {species.map((specie: ISpecie, index: string) => (
                    <div className="col-4" key={index}>
                        <Link to={`specie/${specie.name.toLocaleLowerCase()}`}>
                            <Card specie={specie} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Species;
