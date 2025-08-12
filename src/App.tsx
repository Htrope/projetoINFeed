import Post from './componentes/Post/Post';
import type { PostData } from './componentes/Post/Types';
import './App.css';
import Header from './componentes/Header';
import Perfil from './componentes/Perfil/Perfil';

import avatarMe from './assets/me.jpg';

export default function App() {
  const currentUser = {
    name: 'Henrique Trope',
    role: 'Dev Front-end',
    avatarUrl: avatarMe,
    coverUrl:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200',
  };

  const posts: PostData[] = [
    {
      id: 1,
      author: 'Cirilo Riveira',
      avatar:
        'https://i.pinimg.com/736x/8f/09/ed/8f09edc50a7070a9d3a04ab67e5bc15d.jpg',
      role: 'Dev Back-end',
      time: 'Publicado há 1h',
      content: [
        'Finalizamos hoje a migração completa para a nova infraestrutura em nuvem ☁️',
        'O desempenho melhorou bastante e o custo mensal caiu quase 20%.',
        'Agora é monitorar e ajustar conforme a demanda dos usuários.',
      ],
      comments: [
        {
          id: 1,
          author: 'Felypepe Nunes',
          avatar: 'https://i.pravatar.cc/64?img=1',
          text: 'Excelente trabalho, Cirilo! Essa economia vai fazer diferença no orçamento. 👏',
        },
      ],
    },
    {
      id: 2,
      author: 'Giorgian de Arrascaeta',
      avatar:
        'https://i.pinimg.com/474x/f8/9b/3c/f89b3c401435af3c5469cca79169d173.jpg',
      role: 'Designer',
      time: 'Publicado há 3h',
      content: [
        'Hoje finalizei o design do novo dashboard do cliente! 🎨',
        'Foram semanas de trabalho intenso e muita colaboração com a equipe de dev.',
        'Ansiosa para ver tudo funcionando no ambiente de produção!',
      ],
      comments: [
        {
          id: 1,
          author: 'Carlos Mendes',
          avatar: 'https://i.pravatar.cc/64?img=8',
          text: 'Parabéns, Arrasca! Ficou incrível o layout!',
        },
        {
          id: 2,
          author: 'Ana Paula',
          avatar: 'https://i.pravatar.cc/64?img=9',
          text: 'Mandou bem demais, craque! 😍',
        },
      ],
    },
    {
      id: 3,
      author: 'Taylor Swift',
      avatar:'https://m.media-amazon.com/images/I/61l233n38BL._SY425_.jpg',
      role: 'Full Stack Developer',
      time: 'Publicado há 6h',
      content: [
        'Passei o dia refatorando um módulo inteiro do back-end para usar arquitetura limpa. 🧹',
        'Troquei várias funções antigas por hooks customizados e melhorei a performance das queries no banco de dados.',
        'Nada como ver os testes passando com 100% de cobertura no final do dia!',
      ],
      comments: [
        
      ],
    },
  ];
''
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
          {posts.map((p) => (
            <Post key={p.id} currentUser={currentUser} post={p} />
          ))}
        </section>
      </main>
    </div>
  );
}
