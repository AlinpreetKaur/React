import componentsImage from '../assets/images/components.png';
import stateImage from '../assets/images/state.png';
import eventsImage from '../assets/images/events.png';

export const ConceptItem = (props) => {

    return ( <li className="concept">
    <img src={props.item.image} alt={props.item.title} />
    <h2>{props.item.title}</h2>
    <p>{props.item.description}</p>
  </li>)
}