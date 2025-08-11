import './Styles.css';

export default function Post() {
  return (
    <article className="Post">
     
      <header className="PostHeader">
        <div className="PostUser">
          <img
            className="PostAvatar"
            src="https://i.pravatar.cc/64?img=32"
            alt="Foto de perfil de Thaís Gomes"
          />
          <div className="PostUserInfo">
            <h2 className="PostName">Thaís Gomes</h2>
            <span className="PostRole">Designer</span>
          </div>
        </div>

        <time className="PostTime" dateTime="2025-08-10T19:00:00">
          Publicado há 1h
        </time>
      </header>
      <section className="PostContent">
        <p>Lorem ipsum</p>
        <p>
          dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut
          cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus
          et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt
          officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est
          temporibus similique rem illum natus sit unde eveniet.
        </p>
        <p>
          Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci
          quisquam!
        </p>
      </section>

      <section className="PostFeedback">
        <label htmlFor="feedback" className="PostLabel">
          Deixe seu feedback
        </label>
        <textarea
          id="feedback"
          className="PostTextarea"
          placeholder="Parabéns, lobinho! Continue assim!"
        />
        <button className="PostButton" type="button">Comentar</button>
      </section>
    </article>
  );
}
