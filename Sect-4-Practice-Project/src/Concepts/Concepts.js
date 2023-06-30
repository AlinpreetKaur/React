import { Card } from "../UI/Card/Card"
import { ConceptItem } from "./ConceptItem"
export const Concepts = (props) => {
  console.log(props)
    return(  <Card>
   <ConceptItem item={props.concepts[0]}/>
   <ConceptItem item={props.concepts[1]}/>
   <ConceptItem item={props.concepts[2]}/>
  </Card>)
}