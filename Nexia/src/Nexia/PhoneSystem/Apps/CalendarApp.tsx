/* Hooks */
import { useState } from "react"

const monthNames = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
]

const CalendarApp = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDay = new Date(year, month, 1).getDay() || 7
  const totalDays = new Date(year, month + 1, 0).getDate()

  const today = new Date()

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(month + offset)
    setCurrentDate(newDate)
  }

  return (
    <>
      <div className="container-app-calendar">
        <div className="calendar">
          <section>
            <button className="button-calendar-a" onClick={() => changeMonth(-1)}>‹</button>
            <h2>{monthNames[month]} {year}</h2>
            <button className="button-calendar-b" onClick={() => changeMonth(1)}>›</button>
          </section>

          <div className="box-calendar-app">
            <div className="weekdays">
              {["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map(d => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="days">
              {Array.from({ length: firstDay - 1 }).map((_, i) => (
                <div key={`e-${i}`} className="empty" />
              ))}

              {Array.from({ length: totalDays }).map((_, i) => {
                const day = i + 1
                const isToday =
                  day === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear()

                return (
                  <div key={day} className={isToday ? "today" : ""}>
                    {day}
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CalendarApp