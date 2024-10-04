const express = require("express");
const router = express.Router();

const messages = [
    { "user": "John", "message": "Hello" },
    { "user": "Jane", "message": "Hi" }
];

// Route voor het ophalen van alle berichten
router.get("/", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "GET all messages",
        data: { message: messages }
    });
});

// Route voor het ophalen van een specifiek bericht op basis van de index
router.get("/:index", (req, res, next) => {
    const index = parseInt(req.params.index, 10);

    // Check of de index binnen de array-limieten valt
    if (index >= 0 && index < messages.length) {
        res.status(200).json({
            status: "success",
            message: `GET message at index ${index}`,
            data: { message: messages[index] }
        });
    } else {
        res.status(404).json({
            status: "fail",
            message: "Message not found"
        });
    }
});

module.exports = router;
