/* Loading icon from ldrs */
import { trefoil, helix } from 'ldrs'
trefoil.register()
helix.register()



/* Nexia virus loading logo */
type Props = {
  color: string
}
export function LoadingIcon({ color }: Props) {
  return (
    <>
      <l-trefoil
        size="15"
        stroke="2"
        stroke-length=".05"
        bg-opacity=".3"
        speed="1.5" 
        color={color}
      />
    </>
  )
}



/* 3D Loading logo  */
type Props3D = {
  color: string,
  size: string
}
export function LoadingIcon3D({ color, size }: Props3D) {
  return (
    <>
      <l-helix
        size={size}
        speed="2.5"
        color={color}
      />
    </>
  )
}



/* Sound loading logo with points */
export function LoadingIconPoints() {
  return (
    <>
      <div className="loader-pointer">
        <div className="circle__pointer" />
        <div className="circle__pointer" />
        <div className="circle__pointer" />
        <div className="circle__pointer" />
        <div className="circle__pointer" />
      </div>
    </>
  )
}