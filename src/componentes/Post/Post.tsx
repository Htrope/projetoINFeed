import "./Styles.css"; 
import { useState } from "react";
import Comment from "./Comment";
import type { CommentData, CurrentUser, PostData } from "./Types";

type Props = {
  currentUser: {
    name: string;
    role: string;
    avatarUrl: string;
    coverUrl: string;
  };
  post: PostData;
};

export default function Post({ currentUser, post }: Props) {
  const me: CurrentUser = {
    name: currentUser.name,
    avatar: currentUser.avatarUrl,
  };

  const [input, setInput] = useState<string>("");
  const [comments, setComments] = useState<CommentData[]>(post.comments);

  const addComment = () => {
    const text = input.trim();
    if (!text) return;
    const newComment: CommentData = {
      id: Date.now(),
      author: me.name,
      avatar: me.avatar,
      text,
    };
    setComments((prev) => [newComment, ...prev]);
    setInput("");
  };

  return (
    <article className="Post">
      <header className="PostHeader">
        <div className="PostUser">
          <img
            className="PostAvatar"
            src={post.avatar}
            alt={`Foto de perfil de ${post.author}`}
          />
          <div className="PostUserInfo">
            <h2 className="PostName">{post.author}</h2>
            <span className="PostRole">{post.role}</span>
          </div>
        </div>
        <time className="PostTime">{post.time}</time>
      </header>

      <section className="PostContent">
        {post.content.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </section>

      <section className="PostFeedback">
        <label htmlFor={`feedback-${post.id}`} className="PostLabel">
          Deixe seu feedback
        </label>
        <textarea
          id={`feedback-${post.id}`}
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
          <Comment key={c.id} data={c} />
        ))}
      </div>
    </article>
  );
}
