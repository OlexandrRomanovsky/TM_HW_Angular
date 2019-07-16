import { User } from "./user";

interface IUsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
