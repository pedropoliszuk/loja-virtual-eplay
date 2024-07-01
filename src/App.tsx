import Header from './components/Header'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container className="App">
        <Header />
      </Container>
    </>
  )
}

export default App
