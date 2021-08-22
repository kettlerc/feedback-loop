const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let sqlQuery =`
        SELECT * FROM "feedback"
        ORDER BY "id" ASC;
    `;
    pool.query(sqlQuery)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('GET error', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    let newFeedback = req.body;
    const sqlQuery =`
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;
    const sqlParams = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments
    ];
    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('POST error', error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const sqlQuery =`
        DELETE FROM "feedback"
        WHERE "id" = $1
    `;
    const sqlParams = [
        req.params.id
    ];
    console.log('ID is', sqlParams);
    
    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            console.log('DELETEd entry');
            res.sendStatus(200);
        }).catch((error) => {
            console.log('DELETE error', error);
            res.sendStatus(500);
        });
});



module.exports = router;