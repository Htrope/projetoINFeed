import './App.css';
import Header from './componentes/Header';
import Perfil from './componentes/Perfil/Perfil';
import Post from './componentes/Post/Post';



  

function App() {
  return (
    <>
    <div className="app">
      <Header />
    <main className="main">
        <aside className="sidebar">
          <Perfil />
        </aside>
        <section className="feed">
          <Post />
        </section>
      </main>
    </div>
    </>
  )
  
}

export default App;
