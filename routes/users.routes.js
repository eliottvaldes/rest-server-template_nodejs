const { Router } = require('express');
const { getUsers, 
    putUsers, 
    postUsers, 
    deleteUsers, 
    patchUsers, 
    errorReq 
} = require('../controllers/users.controller');

const router = Router();

// Define all users-routes
router.get('/all', getUsers );

router.put('/', putUsers);

router.post('/', postUsers);

router.delete('/:id', deleteUsers );

router.patch('/', patchUsers);

// 404 error route
router.get('*', errorReq);

module.exports = router;