
const SkillCard = (props) => {
  return (
    <span>
        <img src={props.url} alt="check" />
        <p>{props.skill}</p>
    </span>
  )
}

export default SkillCard;