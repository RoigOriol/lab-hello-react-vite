
import logoImg from "../assets/ironhack-logo-xs.png"
import menuImg from "../assets/menu-top-xs.pngs"


function Navbar() {

    return (
        <div>
        <img src={logoImg} alt="ironhack" />
        <img  src={menuImg} alt="ironhack" />
        </div>
    )
}
export default Navbar;