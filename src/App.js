import './App.css';
import world from './world.png'
import data from './data'

function App(data) {
  // const locations = data.map(item => {

  // })

  return (
    <div className="App">
      <header>
        <div className='header--container'>
          <img src={world} alt='World Icon' />
          my travel journal
        </div>
      </header>
      <div className='card'>
        <img className='hero--img' src='https://source.unsplash.com/WLxQvbMyfas' alt='Mount Fuji'></img>
        <div className='card--info'>
          <div className='maps--link'>
            <img src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png' alt="marker-icon"></img>
            <p>JAPAN </p>
            <a href='https://www.google.com/maps?q=mount+fuji&rlz=1C1GCEB_enUS931US931&um=1&ie=UTF-8&sa=X&ved=2ahUKEwix-Yyz-vX4AhVOEEQIHVVbA7IQ_AUoA3oECAIQBQ'>View in Google Maps</a>
          </div>
          <h1>Mount Fuji</h1>
          <p>12 Jan, 2021 - 24 Jan, 2021</p>
          <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
