/* Auth error */
export const AuthError = ({ error, exitError, errorMsg }: any) => (
  <>
    {error && (
      <div className={`error-update ${exitError ? "exit" : ""}`}>
        {errorMsg}
      </div>
    )}
  </>
)