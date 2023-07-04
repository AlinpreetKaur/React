import './Cards.css'
export default function Cards(props) {
    const classes='card '+props.className
    return (<div className={classes} >{props.children}</div>)
}