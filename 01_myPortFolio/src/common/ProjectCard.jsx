const ProjectCard = (props) => {

 

  return (
    <a  href={props.link} target="_blank" >
        <img src={props.src} alt={`${props.title} logo `} width="150" height="150" />
        <h4>{props.title}</h4>
        <p>{props.info}</p>
    </a>
  )
}

export default ProjectCard;