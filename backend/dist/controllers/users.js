"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersController {
    constructor() {
        this.updateUser = (req, res) => {
            const { id } = req.params;
            const { body } = req;
            res.json({
                message: 'User was created',
            });
            try {
            }
            catch (error) {
            }
        };
        this.deleteUser = (req, res) => {
            const { id } = req.params;
            res.json({
                message: 'user was deleted',
                id
            });
            try {
            }
            catch (error) {
            }
        };
    }
    getUsers(req, res) {
        res.json({
            message: 'getUsers'
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    getUserById(req, res) {
        const { id } = req.params;
        res.json({
            message: 'getUserById',
            id
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    createUser(req, res) {
        const { body } = req;
        res.json({
            message: 'User was created',
        });
        try {
        }
        catch (error) {
        }
    }
    ;
}
exports.default = UsersController;
//# sourceMappingURL=users.js.map