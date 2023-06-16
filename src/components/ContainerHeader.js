import { Card } from "react-bootstrap"

const ContainerHeader = ({title}) => {
  return (
    <div style={containerHeaderStyling}>
      <h1 style={titleStyling}>{title}</h1>
    </div>
  )
}

const containerHeaderStyling = {
  textAlign: "center",
  marginTop: '-2.25em',
}

const titleStyling = {
  backgroundColor: '#555555',
  color: 'white',
  borderRadius: '25px'
}

export default ContainerHeader
