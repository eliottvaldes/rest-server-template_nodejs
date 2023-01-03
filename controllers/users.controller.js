const { request, response } = require('express');

const getUsers = (req = request, res = response) => {
    // using req_ query params
    const { page = 1, limit = 10 } = req.query;
    res.status(200).json({
        msg: 'API - get controller',
        page,
        limit
    });
}


const putUsers = (req = request, res = response) => {
    res.status(400).json({
        msg: 'API - put controller'
    });
}

const postUsers = (req = request, res = response) => {

    // using req_ body params
    const { name = 'No found', age = 'No found' } = req.body;
    res.status(201).json({
        msg: 'API - post controller',
        name: name,
        age: age
    });
}

const deleteUsers = (req = request, res = response) => {
    // using req_ segmentation params
    const idUser = req.params.id;
    res.status(500).json({
        msg: 'API - delete controller',
        idUser
    });
}

const patchUsers = (req = request, res = response) => {
    res.status(301).json({
        msg: 'API - patch controller'
    });
}

const errorReq = (req = request, res = response) => {
    res.status(404).json({
        msg: '404 | resource not found'
    })
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    patchUsers,
    deleteUsers,
    errorReq
};