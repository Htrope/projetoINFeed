import lixo from '../../assets/t.png';
import type { CommentData } from './Types';
import { useState } from 'react';
import like from '../../assets/Like.png'

type Props = {
  data: CommentData;
  onDelete: (id: number) => void;
};

export default function Comment({ data, onDelete }: Props) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="Comment">
      <div className="CommentHead">
        <img className="CommentAvatar" src={data.avatar} alt={data.author} />
        <div className="CommentMeta">
          <strong className="CommentAuthor">{data.author}</strong>
        </div>

        <button
          className="DeleteBtn"
          onClick={() => onDelete(data.id)}
          aria-label={`Excluir comentário de ${data.author}`}
        >
          <img src={lixo} alt="Excluir" />
        </button>
      </div>

      <p className="CommentText">{data.text}</p>

      <div className="CommentActions">
        <button
          className="LikeBtn"
          onClick={() => setLikes((prev) => prev + 1)}
        >
           <img src={like} alt="Simbolo de like" className='imgLike'/> Like •      {likes}
        </button>
      </div>
    </div>
  );
}
