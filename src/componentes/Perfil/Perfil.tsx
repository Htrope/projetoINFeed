import './style.css';

type PerfilProps = {
  name: string;
  role: string;
  avatarUrl: string;
  coverUrl: string;
};

export default function Perfil({ name, role, avatarUrl, coverUrl }: PerfilProps) {
  return (
    <article className="card" aria-label={`Perfil de ${name}`}>
      <div className="cover">
        <img src={coverUrl} alt={`Capa do perfil de ${name}`} />
      </div>

      <div className="avatarWrap" aria-hidden="true">
        <img className="avatar" src={avatarUrl} alt={`Avatar de ${name}`} />
      </div>

      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="role">{role}</p>
      </div>
    </article>
  );
}
