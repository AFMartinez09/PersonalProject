interface Workers {
  id?: string;
  name: string;
  identification: number;
  username: string;
  password: string;
  areas_id: number;
  roles_id: number;
  is_admin: boolean;
  block_worker: boolean;
}