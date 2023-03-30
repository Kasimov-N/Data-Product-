import Card from './card'
import Data from './Data'
import './App.css'

function App() {
  return (
      <div className='home'>
        {Data.map((item, i) => {
          return (
            <Card card={item} key={i} />
          )
        })
        }
      </div>
  )
}

export default App
