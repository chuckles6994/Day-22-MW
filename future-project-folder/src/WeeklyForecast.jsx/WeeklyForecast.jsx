import { DayForecast } from "./src/DayForecast/DayForecast.jsx"

export const WeeklyForecast = (props) => {
return (
    <div class="week-forecast">
    <DayForecast
        Day = "Monday"
        Image = 'weather-cloudy'
        TempDay = {18}
        TempNight = {19}
    />
        <DayForecast
        Day = "Tuesday"
        Image = 'weather-partly-cloudy'
        TempDay = {21}
        TempNight = {15}
    />
        <DayForecast
        Day = "Wednesday"
        Image = 'weather-rainy'
        TempDay = {8}
        TempNight = {1}
    />
        <DayForecast
        Day = "Thursday"
        Image = 'weather-snowy'
        TempDay = {-2}
        TempNight = {-7}
    />    
         <DayForecast
         Day = "Friday"
        Image = 'weather-stormy-rain'
        TempDay = {28}
        TempNight = {21}
    />
        <DayForecast
        Day = "Saturday"
        Image = 'weather-stormy'
        TempDay = {35}
        TempNight = {27}
    />
        <DayForecast
        Day = "Sunday"
        Image = 'weather-sunny'
        TempDay = {28}
        TempNight = {22}
    />
    </div>
)
}