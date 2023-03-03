const Card = ({ specie }: any) => {
    return (
        <div className="card">
            <div className="card-header">
                <img
                    src={require('../../../assets/img/' + specie.name.toLocaleLowerCase() + '.jpeg')}
                    className="card-img-top"
                />
                <div className="card-img-overlay">
                    <div className="card-title">
                        <h2>{specie.name}</h2>
                    </div>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Classification:</b>
                    {specie.classification}
                </li>
                <li className="list-group-item">
                    <b>Designation: </b>
                    {specie.designation}
                </li>
                <li className="list-group-item">
                    <b>Language: </b>
                    {specie.language}
                </li>
            </ul>
        </div>
    );
};

export default Card;
