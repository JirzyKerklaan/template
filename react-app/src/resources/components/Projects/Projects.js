import Card from './Card';

const Projects = () => {
    return (
        <div className="section projects mpt mpb">
            <div className="title">
                <h2>Our projects</h2>
            </div>
            <div className="cards">
                {[1,2,3,4].map(item => 
                    <Card />
                )}
            </div>
        </div>
    )
}

export default Projects;