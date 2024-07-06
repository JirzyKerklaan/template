const Card = (props) => {
    return (
        <div className="card">
            <div className="text" dangerouslySetInnerHTML={
                {__html: props.project.text}
            }>
            </div>
        </div>
    )
}

export default Card;