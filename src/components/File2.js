import './File2.css';

function File2(props){
    
    return(
        <>
            <ul class="navbar">
        <li class="navitem"><a href="#home">{props.home}</a></li>
        <li class="navitem"><a href="#about">{props.about}</a></li>
        <li class="navitem"><a href="#services">{props.services}</a></li>
        <li class="navitem"><a href="#contact">{props.contact}</a></li>
    </ul>
        </>
    )
}
export default File2;