import './styles.css';

export default function Perfil() {
  return (
    <article className="card">
      {/* Capa */}
      <div className="cover">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
          alt="Capa do perfil"
        />
      </div>

      {/* Avatar */}
      <div className="avatarWrap">
        <img
          className="avatar"
          src="https://i.pravatar.cc/150?img=3"
          alt="Henrique avatar"
        />
      </div>

      {/* Informações */}
      <div className="info">
        <h3 className="name">Henrique Trope</h3>
        <p className="role">Dev Front-end</p>
      </div>
    </article>
  );
}
