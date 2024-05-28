import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function App() {
// 8cf083632416591cc81ebe5272f384c7
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  return (
   <div className="grid place-items-center h-screen">
   <Header/>
   <main>
    <section>
      <WeatherBoard/>
    </section>
   </main>
   </div>

  );
}

export default App;
