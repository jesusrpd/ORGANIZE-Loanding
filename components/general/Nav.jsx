export default function Nav(){
    return(
        <nav className="nav">
            <input type="checkbox" id="check-menu" className="nav-hamburguer-check"/>
            <div className="nav-hamburguer" forhtml="check-menu">
                <div className="nav-hamburguer-line"></div>
                <div className="nav-hamburguer-line"></div>
                <div className="nav-hamburguer-line"></div>
            </div>
            <div className="bg-opa"></div>
            <ul className="nav-hamburguer-links">
                <li className="nav-hamburguer-link">Inicio</li>
                <li className="nav-hamburguer-link">Sobre Nosotros</li>
                <li className="nav-hamburguer-link">¿Qué es?</li>
                <li className="nav-hamburguer-link">Funcionalidades</li>
                <li className="nav-hamburguer-link">Colabora</li>
            </ul>
        </nav>
    )
}