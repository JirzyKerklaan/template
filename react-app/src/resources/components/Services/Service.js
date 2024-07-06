const Service = (props) => {
    return (
        <div className="service" dangerouslySetInnerHTML={
            {__html: props.service.content}
        }></div>
    )
}

export default Service;