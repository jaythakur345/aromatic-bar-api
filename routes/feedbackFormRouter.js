const router = require('express').Router();
const Feedback = require('../models/feedbackFormModel');

// Get Feedback by Id
router.get("/:id", async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).json(error);
    }
})

//  CREATE Feedback
router.post("/", async (req, res) => {
    const newFeedback = await new Feedback(req.body);
    try {
        const saveFeedback = await newFeedback.save();
        res.status(200).json(saveFeedback);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete Feedback
router.delete('/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        try {
            await feedback.delete();
            res.status(200).json("Feedback has been deleted!");
        } catch (error) {
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete Many
router.post('/delete', async (req, res) => {
        const {ids} = req.body;
        try {
            await Feedback.deleteMany({
                _id: {$in: ids},
              });
            res.status(200).json("Feedback has been deleted!");
        } catch (error) {
            res.status(500).json(error.message);
        }
});

// GET ALL Feedbacks
router.get("/", async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).json(error);
    }

});

module.exports = router;