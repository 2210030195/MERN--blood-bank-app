const testController = (req, res) => {
    res.status(200).send({
        message: "Hi",
        success: true,
    });
};

module.exports = { testController };
