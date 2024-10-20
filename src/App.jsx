import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Summary } from './components/Summary/Summary'
import { Experience } from './components/Experience/Experience'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Summary />
      <Experience />
    </div>
  )
}

export default App
