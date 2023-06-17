import { Card } from "react-bootstrap"

const ContainerHeader = ({title}) => {

  const containerHeaderStyling = {
    textAlign: "center",
    marginTop: '-2em',
    zIndex: '999999'
  }
  
  const titleStyling = {
    backgroundColor: '#525',
    margin: '0',
    color: 'white',
    borderRadius: '25px',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
  
  return (
    <div style={containerHeaderStyling}>
      <h1 style={titleStyling}>{title}</h1>
    </div>
  )
}

export default ContainerHeader
