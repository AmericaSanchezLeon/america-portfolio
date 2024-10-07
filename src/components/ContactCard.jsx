export default function ContactCard(props) {

    return (
        <div>
            <span href={props.href}
                arialabel={props.ariaLabel}
                className="contacts__link"> 
                <i className={props.icon}></i>
                {props.text}
            </span>
        </div>


    );

}