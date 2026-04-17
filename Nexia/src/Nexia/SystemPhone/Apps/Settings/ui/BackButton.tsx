/* Images */
import React from "react"
import forward from "../../../../../assets/Icons/forward_dark.svg"



/* Render */
type ButtonBackProps = {
  text: string
  back: any
}
export const BackButton = React.memo(
  ({ text, back }: ButtonBackProps) => {
    return (
      <>
        <button className="button-top-back-aboutPhone" onClick={back}>
          <img src={forward} alt="back" />
        </button>

        <p className="title-button-top-back-aboutPhone">{text}</p>
      </>
    )
  }
)