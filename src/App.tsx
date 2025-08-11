import './App.css';
import Header from './componentes/Header';
import Perfil from './componentes/Perfil/Perfil';
import Post from './componentes/Post/Post';

export default function App() {
  const currentUser = {
    name: 'Henrique Trope',
    role: 'Dev Front-end',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    coverUrl:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
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
