/* Auth input component */
export const AuthPinInputs = ({
  values,
  inputsRef,
  handleChange,
  handleKeyDown,
  handlePaste
}: any) => (
  <div className="box-auth-atm">

    <div className="pin-container">
      {values.map((val: string, i: number) => (
        <div key={i} className="pin-box">

          <input
            ref={(el: any) => (inputsRef.current[i] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={val ? "•" : ""}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={handlePaste}
          />

        </div>
      ))}
    </div>

  </div>
)