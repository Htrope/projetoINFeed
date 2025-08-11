
export type CurrentUser = {
  name: string;
  avatar: string;
};

export type Reply = {
  id: number;
  author: string;
  avatar: string;
  text: string;
};

export type CommentData = {
  id: number;
  author: string;
  avatar: string;
  text: string;
  replies: Reply[];
};
