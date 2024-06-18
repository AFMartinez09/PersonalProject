"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUsers_1 = require("../../controllers/users/getUsers");
const createUser_1 = require("../../controllers/users/createUser");
const getById_1 = require("../../controllers/users/getById");
const deleteUser_1 = require("../../controllers/users/deleteUser");
const updateUser_1 = require("../../controllers/users/updateUser");
const router = (0, express_1.Router)();
router.get('/', getUsers_1.getUsers);
router.post('/', createUser_1.postUser);
router.route('/:id')
    .get(getById_1.getUserById)
    .put(updateUser_1.updateUser)
    .delete(deleteUser_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map