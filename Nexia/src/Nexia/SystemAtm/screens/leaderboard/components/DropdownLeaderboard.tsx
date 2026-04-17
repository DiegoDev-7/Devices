/* Select leaderboard */
export const DropdownLeaderboard = ({ open, setOpen, setMetric, dropdownRef, metric }: any) => (
  <div className="config-leaderboard">
    <div className="container-dropdown">
      <button className="dropdown__btn" onClick={() => setOpen((p: any) => !p)}>
        {metric}
      </button>

      {open && (
        <div className="dropdown__menu" ref={dropdownRef}>
          <div className="item" onClick={() => { setMetric("total_balance"); setOpen(false) }}>Total Balance</div>
          <div className="item" onClick={() => { setMetric("bank_balance"); setOpen(false) }}>Bank Balance</div>
          <div className="item" onClick={() => { setMetric("atm_balance"); setOpen(false) }}>ATM Balance</div>
          <div className="item" onClick={() => { setMetric("total_transactions"); setOpen(false) }}>Transactions</div>
          <div className="item" onClick={() => { setMetric("total_contacts"); setOpen(false) }}>Contacts</div>
        </div>
      )}
    </div>
  </div>
)