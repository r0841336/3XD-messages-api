var express = require('express');

var router = express.Router();




// Define the GET endpoint for "/"

router.get("/", (req, res, next) => {

    res.status(200).json({ 

        status: "success",

        message:  "GET messages",

        data: {

            "messages": [

                {

                    id: 1,

                    user: "user1",

                    message: "message1"

                },

                {

                    id: 2,

                    user: "user2",

                    message: "message2"

                }

            ]

        }

    });

});

router.get("/:id", (req, res, next) => {

    res.status(200).json({ 

        status: "success",

        message:  "GET message",

        data: {

            "message": {

                id: 1,

            }

        }

    });

}

);

router.post("/", (req, res, next) => {

    res.status(200).json({ 

        status: "success",

        message:  "POST message",

        data: {

            "message": {

                id: 1,

                

            }

        }

    });

}

);




router.put("/:id", (req, res, next) => {

    res.status(200).json({

        status: "success",

        message: "PUT message",

        data: {

            "message": {

                id: 1,

            }

        }

    });

}

);




router.get("/:user", (req, res, next) => {

    res.status(200).json({

        status: "success",

        message: "GET message",

        data: {

            "messages": [

                {

                    id: 1,




                }

            ]

        }

    });

}

);

module.exports = router;
