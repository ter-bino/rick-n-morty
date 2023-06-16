import { Card } from "react-bootstrap"

const ContainerHeader = ({title}) => {

  const containerHeaderStyling = {
    textAlign: "center",
    marginTop: '-2.25em',
  }
  
  const titleStyling = {
    backgroundColor: '#525',
    color: 'white',
    borderRadius: '25px'
  }
  
  return (
    <div style={containerHeaderStyling}>
      <h1 style={titleStyling}>{title}</h1>
    </div>
  )
}

export default ContainerHeader
