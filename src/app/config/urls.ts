import {environment} from "../../environments/environment";

const {api} = environment

export const urls = {
  auth: api + '/auth',
  users: api + '/users',
  cars: api + '/cars',
};
