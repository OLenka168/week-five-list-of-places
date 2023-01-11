import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [places, setPlaces] = useState(data);
  const [showText, setShowText] = useState(false);
  console.log(showText)

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

  const removePlace = (id) => {
    let newPlaces = places.filter(place =>
      place.id !==id);
      setPlaces(newPlaces);
  }

  return (
    <div>
      <div className='container'>
        <h1>Места в Турции, которые стоит посетить</h1>
      </div>
      {places.map((item => {
        const {id, name, image, description, showMore} = item;
        return (
          <div key={id}>
            <div className='container'>
              <h2>{id}. {name}</h2>
            </div>
            <div className='container'>
              <img src={image} width='600px' alt='pic'/>
            </div>
            <div className='text'>
              <p>{showMore ? description.substring(0,180) + '...' : description}
              <button onClick={() => showTextClick(item)}>{showMore ? 'Show more' : 'Show less'}</button>
              </p>
              <div>
                <button className='btn' onClick={() => removePlace(id)}>Посетил</button>
              </div>
            </div>
          </div>
        )
      }))}
        <div className='container'>
          <button onClick={() => setPlaces([])} className='btn_all'>Всё видел! Счастлив безмерно! </button>
        </div>
    </div>
  )
}

export default App;
