import { Link } from "react-router-dom";
import logo from "../../assets/logo512.png";
import { ROUTES } from "../../enums/routes.enum";
import "./header.style.css";
const Header = () => {

    return (
        <div className={"headerContainer flex jcs aic"}>
            <Link to={ROUTES.HOME} className={"item flex jcc aic"}><img className={"logo"} src={logo} alt={"logo"}/></Link>        
            <Link to={ROUTES.USERS} className={"item flex jcc aic"}>Users</Link>
            <Link to={ROUTES.COUNTER} className={"item flex jcc aic"}>counter</Link>
        </div>
    )
}

export default Header;