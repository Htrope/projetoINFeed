import './App.css';
import Header from './componentes/Header';
import Perfil from './componentes/Perfil/Perfil';
import Post from './componentes/Post/Post';
import me from './assets/me.jpg'

export default function App() {
  const currentUser = {
    name: 'Henrique Trope',
    role: 'Dev Front-end',
    avatarUrl:me,
    coverUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200 ',
};

  return (
    <div className="app">
      <Header />
      <main className="main container">
        <aside className="sidebar">
          <Perfil
            name={currentUser.name}
            role={currentUser.role}
            avatarUrl={currentUser.avatarUrl}
            coverUrl={currentUser.coverUrl}
          />
        </aside>
        <section className="feed">
          <Post currentUser={currentUser} />
        </section>
      </main>
    </div>
  );
}
