import Client from './Client';

const Clients = ({block}) => {
    return (
        <div className="section clients xlpt xlpb">
            <div className="title">
                <h2>{block.Title}</h2>
            </div>

            <div className="outer">
                {block.Clients.data.map(client => (
                    <Client key={client.id} client={client} />
                ))}
            </div>
        </div>
    )
}

export default Clients