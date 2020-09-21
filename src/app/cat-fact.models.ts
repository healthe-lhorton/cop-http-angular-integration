export interface CatFactAllResponse {
  all: CatFact[];
}

export interface CatFact {
  _id: string;
  text: string;
  type: string;
  user: User;
  upvotes: number;
  // only used if logged in
  userUpvoted: boolean;
}

export interface User {
  _id: string;
  name: UserName;
}

interface UserName {
  first: string;
  last: string;
}
