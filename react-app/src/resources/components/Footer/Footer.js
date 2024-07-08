const Footer = ({block, contactInfo}) => {
    return (
        <footer className="section footer xlpt nbp">
            <div className="title" dangerouslySetInnerHTML={{ __html: block?.Title }}></div>

            <div className="columns">
                <div className="column location">
                    <h3 className="alt">{contactInfo?.country}</h3>

                    <div className="address">
                        <p>{contactInfo?.companyName}, {contactInfo?.streetname}, {contactInfo?.postalCode}, {contactInfo?.city}</p>
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
                    {contactInfo?.Social.map(social => (
                        <a key={social.id} className="alt" href={social?.Link}>{social?.Platform}</a>
                    ))}
                </div>
            </div>

            <div className="terms-services">
                <div className="copyright">
                    <p>&copy;{contactInfo?.companyName}</p>
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