import lixo from '../../assets/t.png';
import type { CommentData } from './Types';

type Props = {
  data: CommentData;
  onDelete: (id: number) => void;
};

export default function Comment({ data, onDelete }: Props) {
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
          <img src={lixo} alt="" />
        </button>
      </div>

      <p className="CommentText">{data.text}</p>
    </div>
  );
}
