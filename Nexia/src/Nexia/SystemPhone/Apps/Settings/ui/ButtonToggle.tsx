/* Hooks */
import React from "react"



/* Render */
type ButtonToggleProps = {
  value: boolean
  onChange: () => void
}
export const ButtonToggle = React.memo(
  ({ value, onChange }: ButtonToggleProps) => {
    return (
      <>
        <button
          className={`toggle-container ${value ? "" : "active"}`}
          onClick={onChange}
        >
          <div className={`toggle-knob ${value ? "" : "move"}`} />
        </button>
      </>
    )
  }
)