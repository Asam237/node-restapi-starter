export type CreateUserInput = {
  fullname: string;
  email: string;
  password: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type CreateTaskInput = {
  title: string;
  description: string;
  checked: boolean;
  user: any;
  comments?: any[]
};

export type CreateCommentInput = {
  comment: string
  task: any
}

