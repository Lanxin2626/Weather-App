import WeatherCard from './components/WeatherCard/index'
import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import bg from './assets/bg.png'

function App() {

  return (
    <BackgroundImage imageUrl={bg} alt='cloud' className='w-screen h-screen bg-cover flex items-center'>
    <WeatherCard/>
    </BackgroundImage>
  )
}

export default App
