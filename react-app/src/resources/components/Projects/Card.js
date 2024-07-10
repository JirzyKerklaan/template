const Card = ({project}) => {
    return (
        <div className="card">
            <div className="text" dangerouslySetInnerHTML={
                {__html: project.text}
            }>
            </div>
            <div class="overlay"></div>
            <img src={'http://localhost:1337' + project.image.data.attributes.url} alt="client"/>
        </div>
    )
}

export default Card;