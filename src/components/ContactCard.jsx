export default function ContactCard(props) {

    return (
        <li>
            <a href={props.href}
                arialabel={props.ariaLabel}>
                <i className={props.icon}></i>
                {props.text}
            </a> 
        </li>
    );

}