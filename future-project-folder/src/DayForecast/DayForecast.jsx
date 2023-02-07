export const DayForecast = (props) => {
return (
    <div className = "day-forecast">
        <div className = "day-forecast__header">{props.Day}</div>
        <div className = "day-forecast__body">
          <div className = {`day-forecast__image ${weather-cloudy}`}></div>
          <div className = "day-forecast__temps">
            <span className = "temp-day">{props.TempDay}</span>
            <span className = "temp-night">{props.TempsNight}</span>
          </div>
        </div>
      </div>
)
}