import './Styles.css';

export default function Post() {
  return (
    <main className="page">
      <article className="post">
        <header className="post__header">
          <div className="post__user">
            <img
              className="post__avatar"
              src="https://i.pravatar.cc/64?img=32"
              alt="Foto de perfil de Thaís Gomes"
            />
            <div className="post__userInfo">
              <h2 className="post__name">Thaís Gomes</h2>
              <span className="post__role">Designer</span>
            </div>
          </div>

          <time className="post__time" dateTime="2025-08-10T19:00:00">
            Publicado há 1h
          </time>
        </header>

        <section className="post__content">
          <p>Lorem ipsum</p>
          <p>
            dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut
            cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus
            et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt
            officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat
            est temporibus similique rem illum natus sit unde eveniet.
          </p>
          <p>
            Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci
            quisquam!
          </p>
        </section>

        <section className="post__feedback">
          <label htmlFor="feedback" className="post__label">
            Deixe seu feedback
          </label>
          <textarea
            id="feedback"
            className="post__textarea"
            placeholder="Parabéns, lobinho! Continue assim!"
          />
          <button className="post__button" type="button">Comentar</button>
        </section>
      </article>
    </main>
  );
}
