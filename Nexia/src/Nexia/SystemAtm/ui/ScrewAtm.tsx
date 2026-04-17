/* Image */
import screw from "../../../assets/Icons/screw.svg"



/* Screws in the corners */
export const ScrewAtm = () => {
  type TypeScrews = {
    id: number,
    src: string
  }
  const screws: TypeScrews[] = [
    { id: 1, src: screw },
    { id: 2, src: screw },
    { id: 3, src: screw },
    { id: 4, src: screw }
  ]



  return (
    <>
      {screws.map(v => (
        <div key={v.id} className="box-screw-atm">
          <img src={v.src} alt="Tornillo" />
        </div>
      ))}
    </>
  )
}