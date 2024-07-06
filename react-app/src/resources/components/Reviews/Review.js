const Client = (props) => {
    console.log(props.review)

    return (
        <div className="review">
            <div className="inner">
                <div className="author">
                    <div className="image-wrapper">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="author"></img>    
                    </div>
                    <div className="information">
                        <h3>{props.review.name}</h3>
                        <h3>{props.review.function}</h3>
                    </div>
                </div>

                <div className="content">
                    <p>{props.review.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Client;