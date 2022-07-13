import './App.css';
import world from './world.png'
import data from './data'
import Card from './Card';

function App() {
  const cards = data.map(item => {
    return (<Card item={item} />)

  })

  return (
    <div className="App">
      <header>
        <div className='header--container'>
          <img src={world} alt='World Icon' />
          my travel journal
        </div>
      </header>
      {cards}
    </div>
  );
}

export default App;
