const Client = ({client}) => {
    return (
        <div className="client">
            <div className="image-wrapper">
                <img src={'http://localhost:1337' + client.attributes.url} alt="client"/>
            </div>
        </div>
    )
}

export default Client;