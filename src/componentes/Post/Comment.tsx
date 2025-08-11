import type { CommentData } from './Types';

type Props = {
  data: CommentData;
};

export default function Comment({ data }: Props) {
  return (
    <div className="Comment">
      <div className="CommentHead">
        <img className="CommentAvatar" src={data.avatar} alt={data.author} />
        <div className="CommentMeta">
          <strong className="CommentAuthor">{data.author}</strong>
        </div>
      </div>
      <p className="CommentText">{data.text}</p>
    </div>
  );
}
