import { useState } from 'react';
import type { CommentData, CurrentUser } from './Types';

type Props = {
  data: CommentData;
  currentUser: CurrentUser;
  onReply: (parentId: number, text: string) => void;
};

export default function Comment({ data, currentUser, onReply }: Props) {
  const [replyText, setReplyText] = useState<string>('');

  const sendReply = () => {
    const text = replyText.trim();
    if (!text) return;
    onReply(data.id, text);
    setReplyText('');
  };

  return (
    <div className="Comment">
      <div className="CommentHead">
        <img className="CommentAvatar" src={data.avatar} alt={data.author} />
        <div className="CommentMeta">
          <strong className="CommentAuthor">{data.author}</strong>
        </div>
      </div>

      <p className="CommentText">{data.text}</p>

   
      {data.replies.length > 0 && (
        <div className="ReplyList">
          {data.replies.map((rep) => (
            <div key={rep.id} className="ReplyItem">
              <div className="ReplyHead">
                <img className="CommentAvatar" src={rep.avatar} alt={rep.author} />
                <div className="CommentMeta">
                  <strong className="CommentAuthor">{rep.author}</strong>
                </div>
              </div>
              <p className="CommentText">{rep.text}</p>
            </div>
          ))}
        </div>
      )}

    
    </div>
  );
}
