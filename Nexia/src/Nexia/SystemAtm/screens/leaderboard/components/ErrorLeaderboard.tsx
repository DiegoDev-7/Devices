/* Control errors */
export const ErrorLeaderboard = ({ error, exitError, errorMsg }: any) => (
  <>
    {error && (
      <div className={`error-update ${exitError ? "exit" : ""}`}>
        {errorMsg}
      </div>
    )}
  </>
)