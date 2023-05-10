import { ISpecie } from '../../helpers/interfaces/ISpecie';
import { Link } from 'react-router-dom';

const Navbar = (props: any) => {
    const { species, specieName, username } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand">
                    {specieName && (
                        <img
                            src={require('../../assets/img/' + specieName.toLowerCase() + '.jpeg')}
                            alt=""
                            width={30}
                            height={30}
                            className="d-inline-block align-top me-2"
                        />
                    )}
                    {username}
                </a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        {species.map((specie: ISpecie, index: string) => {
                            const currentSpecieName = specie.name.toLocaleLowerCase();
                            const className = currentSpecieName === specieName ? 'nav-link active' : 'nav-link';
                            return (
                                <li className="nav-item" key={index}>
                                    <Link to={`/specie/${currentSpecieName}`} className={className}>
                                        {specie.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="navbar-nav">
                        <Link to={'/'} className="nav-link">
                            Logout
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
