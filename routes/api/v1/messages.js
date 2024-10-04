// Add routes
const express = require("express");
const router = express.Router();

// GET /api/v1/messages
router.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "GET messages",
    data: {
      messages: [
        {
          id: 1,
          message: "Hello World",
          user: "John Doe",
        },
        {
          id: 2,
          message: "Hello Universe",
          user: "Jane Doe",
        },
      ],
    },
  });
});

// GET /api/v1/messages/:id
router.get("/:id", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "GET message",
    data: {
      message: {
        id: req.params.id,
        message: "Hello World",
        user: "John Doe",
      },
    },
  });
});

// POST /api/v1/messages
router.post("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "POST message",
    data: {
      message: req.body.message,
      user: req.body.user,
    },
  });
});

// PUT /api/v1/messages/:id
router.put("/:id", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "PUT message",
    data: {
      message: req.body.message,
      user: req.body.user,
    },
  });
});

// DELETE /api/v1/messages/:id
router.delete("/:id", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "DELETE message",
    data: {
      message: {
        _id: req.params.id,
      },
    },
  });
});



module.exports = router;