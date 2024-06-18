import { Router } from "express";
import { getUsers } from "../../controllers/users/getUsers";
import { postUser } from "../../controllers/users/createUser";
import { getUserById } from "../../controllers/users/getById";
import { deleteUser } from "../../controllers/users/deleteUser";
import { updateUser } from "../../controllers/users/updateUser";

const router = Router();

router.get('/', getUsers);
router.post('/', postUser);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


export default router;