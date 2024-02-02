import { useState } from 'react'
import st from './App.module.scss';
import Form from '../Form/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={st.container}>
      <Form/>
    </div>
  )
}

export default App
