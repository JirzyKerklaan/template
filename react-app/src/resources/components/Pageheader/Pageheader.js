const Pageheader = (props) => {
    console.log(props.block);

    return (
        <div className="section pageheader npt mpb">
            <div className="content">
                <div className="text">
                    <h1>{props.block.text}</h1>
                </div>
                <div className="socials">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    )
}

export default Pageheader;