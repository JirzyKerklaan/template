import Card from './Card';

const Projects = ({block}) => {
    return (
        <div className="section projects lpt xlpb">
            <div className="title">
                <h2>{block.Title}</h2>
            </div>
            <div className="cards">
                {block.Project.map(project => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;