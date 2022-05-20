import {environment} from '../../../environments/environment.prod'

export const url = {
  users: `${environment.baseUrl}/users`,
  posts: `${environment.baseUrl}/posts`,
  comments: `${environment.baseUrl}/comments`,
};
