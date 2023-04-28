import CartWidget from "../CartWidget/CartWidget" /* Importar icon svg para usarlo */

const NavBar = () => {
    
    return (
        <nav>
            <h3>TIENDA LOGO</h3>
            <div>
                <button>Inicio</button>
                <button>Categorias</button>
                <button>Mi carrito</button>
                <button>Ubicacion</button>
            </div>
            <CartWidget/>
            <hr/>
        </nav>
    )
}

export default NavBar