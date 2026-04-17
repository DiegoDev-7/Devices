/* Generate random code from the Bios */
export function generateFakeCode(): string {
  const lines: string[] = []

  // Dinamic timestamp
  const getTimestamp = () => {
    const now = new Date()
    const h = String(now.getHours()).padStart(2, "0")
    const m = String(now.getMinutes()).padStart(2, "0")
    const s = String(now.getSeconds()).padStart(2, "0")
    const ms = String(now.getMilliseconds()).padStart(3, "0")
    return `[${h}:${m}:${s}.${ms}]`
  }

  const log = (tag: string, message: string) => {
    lines.push(`${getTimestamp()} ${tag} ${message}`)
  }

  const pushRaw = (text: string) => lines.push(text)

  // Kernel
  log("[KERNEL]", "Boot sequence initialized")
  log("[KERNEL]", "Loading ATM firmware v0x0489466")
  log("[KERNEL]", "Initializing secure kernel space")
  log("[KERNEL]", "Kernel user layer active")
  log("[KERNEL]", "Kernel card layer active")
  log("[KERNEL]", "Kernel atm layer active")
  log("[KERNEL]", "Kernel bank layer active")
  log("[KERNEL]", "Kernel phone layer active")
  log("[KERNEL]", "Kernel email layer active")
  log("[KERNEL]", "Kernel password layer active")
  log("[KERNEL]", "Kernel physical card layer active")
  log("[KERNEL]", "Cryptographic module engaged (AES-256)")
  log("[KERNEL]", "Kernel authorization layer active")

  // Card
  log("[CARD]", "Bank card detected in slot")
  log("[CARD]", "Reading EMV chip payload")
  log("[CARD]", "Decoding secure payload block")
  pushRaw("       payload.meta = { issuer: 'GLOBAL_CARD', type: 'DEBIT' }")
  log("[CARD]", "Validating card authenticity")
  log("[CARD]", "PIN verification card requested")
  log("[CARD]", "PIN verification bank requested")
  log("[CARD]", "PIN verification user requested")
  log("[CARD]", "PIN verification requested")

  // Atm
  log("[ATM]", "Atm detected in system")
  log("[ATM]", "Reading credentials")
  log("[ATM]", "Decoding secure transfer block")
  pushRaw("       payload.meta = { issuer: 'GLOBAL_BANK', type: 'DEBIT' }")
  log("[ATM]", "Validating card authenticity")
  log("[ATM]", "PIN verification bank requested")
  log("[ATM]", "PIN verification user requested")
  log("[ATM]", "PIN verification requested")

  // Auth
  log("[AUTH]", "Building authorization")
  log("[AUTH]", "Building authorization payload")
  log("[AUTH]", "Building code state 200")
  log("[AUTH]", "Building authorization card")
  log("[AUTH]", "Building code state 200")
  log("[AUTH]", "Building authorization PIN")
  log("[AUTH]", "Building code state 200")
  log("[AUTH]", "Building authorization Phone")
  log("[AUTH]", "Building code state 200")
  log("[AUTH]", "Building authorization leaderboard")
  log("[AUTH]", "Building code state 200")
  log("[AUTH]", "Building authorization configuration")
  log("[AUTH]", "Building code state 200")
  log("[AUTH]", "Building authorization user")
  log("[AUTH]", "Building code state 200")
  log("[AUTH]", "Building connection physical card")
  log("[AUTH]", "Building code state 200")
  log("[AUTH]", "Building colors interface")
  log("[AUTH]", "Building code state 200")
  log("[AUTH]", "Building transfers")
  log("[AUTH]", "Building code state 200")
  pushRaw("       auth.payload = { session: 'atm_node_x7', device: 'ATM_V3' }")
  log("[AUTH]", "Encrypting payload")
  log("[AUTH]", "Dispatching request to bank core")

  // Network
  const networkAttempts = Math.random() < 0.5 ? 2 : 1

  for (let i = 0; i < networkAttempts; i++) {
    log("[NET]", "Opening TLS channel")
    if (i === 0 && networkAttempts > 1) {
      log("[NET][ERROR]", "Connection timeout")
      log("[NET]", "Retrying connection...")
    } else {
      log("[NET]", "Handshake complete | TLS_AES_256_GCM")
    }
  }

  // Bank
  log("[BANK]", "Authorization request received")
  log("[BANK]", "Validating account state")
  log("[BANK]", "Balance verification in progress")
  log("[BANK]", "Account state: ACTIVE")
  log("[BANK]", "Authorization approved")

  // Database
  pushRaw("")
  pushRaw("> CONNECT bank_core_db;")
  pushRaw("> SELECT status FROM accounts WHERE card_ref='*********';")
  pushRaw("> VERIFY balance;")
  pushRaw("> BEGIN TRANSACTION;")
  pushRaw("> INSERT INTO logs(type, status) VALUES('AUTH', 'OK');")
  pushRaw("> COMMIT;")
  pushRaw("")

  // Intern process (C++)
  pushRaw("void setSessionFlag(int condition) {")
  pushRaw("    if (condition == ACTIVE) {")
  pushRaw("        session.flag = 0x0A11FF;")
  pushRaw("    } else {")
  pushRaw("        session.flag = 0x0B22EE;")
  pushRaw("    }")
  pushRaw("}")
  pushRaw("")

  pushRaw("void authorizeSession() {")
  pushRaw("    setSessionFlag(kernel_state);")
  pushRaw("}")
  pushRaw("")

  pushRaw("void authorizeSession() {")
  pushRaw("    setSessionFlag(kernel_user);")
  pushRaw("}")
  pushRaw("")

  pushRaw("void bankRegister() {")
  pushRaw("    setSessionFlag(kernel_bank);")
  pushRaw("}")
  pushRaw("")

  pushRaw("void atmRegister() {")
  pushRaw("    setSessionFlag(kernel_atm);")
  pushRaw("}")
  pushRaw("")

  // Hardware
  log("[HARDWARE]", "Device bus initialized")
  log("[HARDWARE]", "Secure memory write")
  log("[HARDWARE]", "I/O channels synchronized")

  // Adicional process
  const extraOps = 40
  for (let i = 0; i < extraOps; i++) {
    const rand = Math.random()

    if (rand < 0.3) {
      log("[SYS]", "Flushing cache layer")
    } else if (rand < 0.6) {
      log("[SYS]", "Syncing node with bank cluster")
    } else if (rand < 0.8) {
      log("[SEC]", "Revalidating session dasdas5das4da87s4das65as564dsa456d4a")
    } else {
      log("[IO]", "Buffer write operation completed")
    }
  }

  log("[SYSTEM]", "Finalizing operation")
  log("[SYSTEM]", "Clearing session memory")
  log("[SYSTEM]", "Process completed successfully")
  log("[SYSTEM]", "ATM ready for next session")

  return lines.join("\n")
}