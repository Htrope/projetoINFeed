export type CommentData = {
  id: number;
  author: string;
  avatar: string;
  text: string;
};

export type CurrentUser = {
  name: string;
  avatar: string;
};

export type PostData = {
  id: number;
  author: string;
  avatar: string;
  role: string;
  time: string;
  content: string[];
  comments: CommentData[];
};
