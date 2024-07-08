const Social = ({social}) => {
    function getClassList(social) {
        if(social === 'linkedin') {
            return `fa-brands fa-${social}-in`;
        } else if (social === 'facebook') {
            return `fa-brands fa-${social}-f`;
        } else {
            return `fa-brands fa-${social}`;
        }
    }
    
    return (
        <a href={social.Link}>
            <i className={getClassList(social.Platform)}></i>
        </a>
    )
}

export default Social;