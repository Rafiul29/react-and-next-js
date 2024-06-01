
import { useContext, useEffect, useState } from 'react';
import Header from './components/header/Header'
import WeatherBoard from './components/weather/WeatherBoard'
import { WeatherContext } from './Context';

import ClearSkyImage from './assets/backgrounds/clear-sky.jpg'
import FewCloudsImage from './assets/backgrounds/few-clouds.jpg'
import MistImage from './assets/backgrounds/mist.jpeg'
import RainyDayImage from './assets/backgrounds/rainy-day.jpg'
import ScatteredCloudImage from './assets/backgrounds/scattered-clouds.jpg'
import SnowImage from './assets/backgrounds/shower-rain.jpg'
import ThunderStromImage from './assets/backgrounds/thunderstorm.jpg'
import WinterImage from "./assets/backgrounds/winter.jpg"



const Page = () => {

  const { loading,weatherData} = useContext(WeatherContext);

  const [climateImage,setClimateImage]=useState("")

  function getBackgorunImage(climate){
    switch(climate){
      case "Rain":
        return RainyDayImage
      case "Clouds":
        return ScatteredCloudImage;
      case "Clear":
        return ClearSkyImage
      case "Snow":
        return SnowImage
      case "Thunder":
        return ThunderStromImage;
      case "Fog":
        return WinterImage
      case "Haze":
        return FewCloudsImage
      case "Mist":
        return MistImage
      default:
        return ClearSkyImage
      }
  }
  useEffect(()=>{
    const bgImage=getBackgorunImage(weatherData.climate)
    setClimateImage(bgImage)
  },[weatherData.climate])

  return (
    <>
    {loading.state? (
        <div className='flex bg-gray-200 w-96 mt-14 rounded mx-auto p-8'>
          <p className='text-center text-3xl text-black'>{loading.message}</p>
        </div>
    ):(
      <div 
      style={{backgroundImage:`url('${climateImage}')`}}
      className="grid place-items-center h-screen bg-no-repeat bg-cover">
              <Header />
              <main>
                <section>
                  <WeatherBoard />
                </section>
              </main>
      </div>
          )}
    </>
  )
}

export default Page