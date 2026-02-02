/* Render */
type Props = {
  onBack: () => void
}
const RewardsApp = ({ onBack }: Props) => {
  
  return (
    <>
      <div className="Container-app-screen-rewards">

        <div className="box-app-screen-rewards-a">
          <h2>Dinero total</h2>
          <span>$ 45845</span>
          <p>La recompensa la podra volver a reclamar despues de 5 minutos</p>
        </div>
        
        <div className="box-app-screen-rewards-b">
          <button className="button-app-screen-rewards">Obtener</button>
        </div>

        <div className="box-app-screen-rewards-c">
          <p>Este dinero solo podrá ser utilizado en el banco y podrá generar más dinero en la otra aplicación llamada dinero.</p>
          <br />
          <p>
            Especificaciones adicionales: El dinero acumulado aquí se transfiere automáticamente a tu cuenta bancaria. 
            Podras consultar todo tu saldo en la aplicación del banco.
          </p>
        </div>

      </div>
    </>
  )
}

export default RewardsApp