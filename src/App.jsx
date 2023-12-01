import { useState } from 'react'
import './App.css'

const images = [
  {
    id: 1,
    url: 'https://picsum.photos/id/237/900/600',
    testo: 'Immagine 1'
  },
  {
    id: 2,
    url: 'https://picsum.photos/seed/picsum/900/600',
    testo: 'Immagine 2'
  },
  {
    id: 3,
    url: 'https://picsum.photos/900/600?grayscale',
    testo: 'Immagine 3'
  },
]



function App() {
  const [count, setCount] = useState(1)

  function increment(){
    setCount((valore) =>{
      const nuovoValore = valore + 1
      if(nuovoValore == 4){
        const nuovoValore = 1
        return nuovoValore
      }
      return nuovoValore
    })
  }

  function decrement(){
    setCount((valore)=>{
      const nuovoValore = valore - 1
      if(nuovoValore == 0){
        const nuovoValore = 3
        return nuovoValore
      }
      return nuovoValore
    })
  }

  return (
    <>
    <h1>{count}</h1>
     <div className='h-screen flex justify-center items-center'>
        <div className='w-3/4 flex justify-around items-center'>

          <button onClick={decrement} onKeyDown={decrement}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path fillRule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </button>

          <div>
            {images.map((elem)=>{
              return (
                <div key={elem.id} id={elem.id}  className={count == elem.id ? '':'hidden'}>
                  <img src={elem.url}  alt=""/>
                  <h2>{elem.testo}</h2>
                </div>
              )
            })}
          </div>
            
          <button onClick={increment}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>


        </div>
     </div>
    </>
  )
}

export default App
