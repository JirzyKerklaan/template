import Social from './Social';

const Pageheader = ({block}) => { 
    return (
        <div className="section pageheader npt mpb">
            <div className="content">
                <div className="text">
                    <h1>{block.text}</h1>
                </div>
                <div className="socials">
                    {block.Social.map(social => (
                        <Social key={social.id} social={social} />
                    ))}
                    {/* <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i> */}
                </div>
            </div>
        </div>
    )
}

export default Pageheader;