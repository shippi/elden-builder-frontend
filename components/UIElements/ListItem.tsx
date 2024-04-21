interface Props {
    image?: string,
    text?: string
}

function ListItem({image, text} : Props) {
  return (
    <div className="list-item">
        {
          image ?
          <img src={image}/>
          :
          <div className="blank" />
        }
        {text ? text : "None"}
    </div>
  )
}

export default ListItem