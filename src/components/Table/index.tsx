import Layout from '../../hoc/Layout';

const Table = (props: any) => {
    const { specieName, vehicles } = props;
    const displayName = specieName.toUpperCase();

    return (
        <>
            <div className="container mg-top-80">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h2>{displayName} VEHICLES</h2>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Model</th>
                                            <th>Manufacturer</th>
                                            <th>Cost in credits</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vehicles.map((vehicle: any, index: any) => (
                                            <tr key={index}>
                                                <td>{vehicle.name}</td>
                                                <td>{vehicle.model}</td>
                                                <td>{vehicle.manufacturer}</td>
                                                <td>{vehicle.cost_in_credits}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};
export default Layout(Table);
