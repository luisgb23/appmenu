import { Link } from "react-router-dom"
const MediaManiana = () => {
    return(
        <div className="container">
            <h2 className='textos mb-4'>Media mañana</h2>
            <p className="textos">(Solo si entre el desayuno y el almuerzo hay más de 4 horas)</p>
            <ul>
                <li className='textos'>1 fruta</li>
            </ul>
            <Link to='/' className="acceso">
                <h6 className="text-center textos mt-4">Volver</h6>
            </Link>
        </div>
    )
}

export default MediaManiana