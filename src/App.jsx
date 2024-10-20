import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Summary } from './components/Summary/Summary'
function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Summary />
    </div>
  )
}

export default App
