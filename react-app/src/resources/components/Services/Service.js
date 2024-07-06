const Service = ({service}) => {
    return (
        <div className="service" dangerouslySetInnerHTML={
            {__html: service.content}
        }></div>
    )
}

export default Service;