const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {

    res.status(200).json({
        status: "success",
        "message": "GET messages",
        "data": {
            "message": [{
                "user": "John",
                "message": "Hello"
            },
        {
            "user": "Jane",
            "message": "Hi"
        }]
        }

    })
});

module.exports = router;