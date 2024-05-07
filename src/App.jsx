import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sample from './components/Sample/Sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="containerRoot">

    </div>
      {/* <div className={styles.test}>
        <h1>Hello React</h1>
      </div> */}
      <Sample/>
    </>
  )
}

export default App
