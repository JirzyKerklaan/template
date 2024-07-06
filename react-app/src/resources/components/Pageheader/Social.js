const Social = (props) => {
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
        <a href={'https://' + props.social.Link}>
            <i className={getClassList(props.social.Platform)}></i>
        </a>
    )
}

export default Social;