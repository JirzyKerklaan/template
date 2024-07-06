const Footer = ({block}) => {
    return (
        <footer className="section footer xlpt nbp">
            <div className="title" dangerouslySetInnerHTML={{ __html: block?.Title }}></div>

            <div className="columns">
                <div className="column location">
                    <h3 className="alt">Netherlands</h3>

                    <div className="address">
                        <p>Agency X, Straatnaam 123, 1234 AB, Amsterdam</p>
                    </div>
                </div>

                <div className="column contact">
                    <h3 className="alt">Have any projects in your mind? Let us know!</h3>

                    <div className="contact-field">
                        <input className="text" type="email" placeholder="Your email"/>
                        <input className="button" type="button" value="Get Quotes"/>
                    </div>
                </div>

                <div className="column socials">
                    <a className="alt" href="#1">Instagram</a>
                    <a className="alt" href="#2">Facebook</a>
                    <a className="alt" href="#3">Twitter</a>
                    <a className="alt" href="#4">LinkedIn</a>
                </div>
            </div>

            <div className="terms-services">
                <div className="copyright">
                    <p>&copy;Agency X B.V.</p>
                    <p>|</p>
                    <p>Made by <a className="alt-3" href="#5">Jirzy Kerklaan</a></p>
                </div>
                <div className="links">
                    <a className="alt-2" href="#5">Terms of Services</a>
                    <a className="alt-2" href="#5">Privacy policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;