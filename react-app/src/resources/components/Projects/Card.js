const Card = ({project}) => {
    return (
        <div className="card">
            <div className="text" dangerouslySetInnerHTML={
                {__html: project.text}
            }>
            </div>
        </div>
    )
}

export default Card;