import salad from "../assets/salad.png";

const Menu = () => {
  return (
      <>
          <div className="contenedor-logo">
              <img src={salad} alt="Plato de ensalada como logo" className="logo"/>
          </div>
            <h1 className="text-center mt-2 textos">Plan Vegetariano</h1>
            <h3 className="text-center mt-4 textos">Menú</h3>
      </>
  )
}

export default Menu