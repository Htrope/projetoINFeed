import "./Styles.css";
import { useState } from "react";
import Comment from "./Comment";
import type { CommentData, CurrentUser } from "./Types";

type Props = {
  currentUser: {
    name: string;
    role: string;
    avatarUrl: string;
    coverUrl: string;
  };
};

export default function Post({ currentUser }: Props) {
  const me: CurrentUser = {
    name: currentUser.name,
    avatar: currentUser.avatarUrl,
  };

  const [input, setInput] = useState<string>("");

  const [comments, setComments] = useState<CommentData[]>([
    {
      id: 1,
      author: "Felypepe Nunes",
      avatar: "https://i.pravatar.cc/64?img=1",
      text: "Est aspernatur quis eos natus dicta et internos",
      replies: [],
    },
    {
      id: 2,
      author: "Mellany Carter",
      avatar: "https://i.pravatar.cc/64?img=5",
      text: "Outro comentário de exemplo",
      replies: [],
    },
  ]);

  const addComment = () => {
    const text = input.trim();
    if (!text) return;
    const newComment: CommentData = {
      id: Date.now(),
      author: me.name,
      avatar: me.avatar,
      text,
      replies: [],
    };
    setComments((prev) => [newComment, ...prev]);
    setInput("");
  };

  const addReply = (parentId: number, text: string) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === parentId
          ? {
              ...c,
              replies: [
                ...c.replies,
                { id: Date.now(), author: me.name, avatar: me.avatar, text },
              ],
            }
          : c
      )
    );
  };

  return (
    <article className="Post">
      <header className="PostHeader">
        <div className="PostUser">
          <img
            className="PostAvatar"
            src="https://i.pravatar.cc/64?img=32"
            alt="Foto de perfil de Ricardo Siqueira"
          />
          <div className="PostUserInfo">
            <h2 className="PostName">Ricardo Siqueira</h2>
            <span className="PostRole">Dev Back-end</span>
          </div>
        </div>
        <time className="PostTime" dateTime="2025-08-10T19:00:00">
          Publicado há 1h
        </time>
      </header>

      <section className="PostContent">
        <p>Lorem ipsum</p>
        <p>
          dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem
          suscipit ut cupiditate nisi est odit voluptates…
        </p>
        <p>Non quos omnis ut autem labore nam vero…</p>
      </section>

      <section className="PostFeedback">
        <label htmlFor="feedback" className="PostLabel">
          Deixe seu feedback
        </label>
        <textarea
          id="feedback"
          className="PostTextarea"
          placeholder={`Comentar como ${me.name}…`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="PostButton" type="button" onClick={addComment}>
          Comentar
        </button>
      </section>

    <div className="Comments">
        {comments.map((c) => (
          <Comment key={c.id} data={c} currentUser={me} onReply={addReply} />
        ))}
      </div>
    </article>
  );
}
