import { Link } from "react-router-dom"
const ListaMenu = () => {
    return (
        <>
            <div className="alert alert-success" role="alert">
                <Link to='/desayuno' className="acceso">
                    <h5 className="text-center">Desayuno</h5>
                </Link>
            </div>
            <div className="alert alert-success" role="alert">
                <Link to='/mediamaniana' className="acceso">
                    <h5 className="text-center">Media mañana</h5>
                </Link>
            </div>
            <div className="alert alert-success" role="alert">
                <h5 className="text-center">Almuerzo</h5>
            </div>
            <div className="alert alert-success" role="alert">
                <h5 className="text-center">Media tarde</h5>
            </div>
            <div className="alert alert-success" role="alert">
                <h5 className="text-center">Merienda</h5>
            </div>
            <div className="alert alert-success" role="alert">
                <h5 className="text-center">Cena</h5>
            </div>
        </>
    )
}

export default ListaMenu