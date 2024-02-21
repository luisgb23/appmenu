import { Link } from "react-router-dom"
const Desayuno = () => {
  return(
      <div className="container">
          <h2 className='textos mb-4'>Desayuno</h2>
          <h5 className='textos'>Opción 1: 3 veces</h5>
          <ul>
              <li className='textos'>2 tostadas de pan integral o salvado +</li>
              <li className='textos'>2 rebanadas de queso firme descremado o light 40 g +</li>
              <li className='textos'>1/2 fruta +</li>
              <li className='textos'>café con leche / te / mate cocido / cualquier infusión sin miel ni azúcar
                  (elegir).
              </li>
          </ul>
          <h5 className='mt-4 textos'>Opción 2: 2 veces</h5>
          <ul>
              <li className='textos'>2 galletas de arroz +</li>
              <li className='textos'>Queso untable light o descremado +</li>
              <li className='textos'>8 mariposas de nueces / o 15 almendras (elegir) +</li>
              <li className='textos'>café con leche / te / mate cocido / cualquier infusión sin miel ni azúcar
                  (elegir).
              </li>
          </ul>
          <h5 className='mt-4 textos'>Opción 3: 2 veces</h5>
          <ul>
              <li className='textos'>Tortilla con 2 huevos + chorrito de leche 20 cc + </li>
              <li className='textos'>4 cucharadas grandes de avena instantanea +</li>
              <li className='textos'>1/2 fruta + esencia de vainilla y endulzante no calorico opcional (se mezcla todo y se cocina a fuego bajo)</li>
              <li className='textos'>café con leche / te / mate cocido / cualquier infusión sin miel ni azúcar
                  (elegir).
              </li>
          </ul>
          <Link to='/' className="acceso">
              <h6 className="text-center textos mt-4">Volver</h6>
          </Link>
      </div>
  )
}

export default Desayuno