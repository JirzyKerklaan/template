import Card from './Card';

const Projects = (props) => {
    return (
        <div className="section projects lpt xlpb">
            <div className="title">
                <h2>{props.block.Title}</h2>
            </div>
            <div className="cards">
                {[1,2,3,4].map(item => 
                    <Card key={item} />
                )}
            </div>
        </div>
    )
}

export default Projects;