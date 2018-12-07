const validateRequestBody = (req, res, context, message = 'request body is blank') => {
    if(req.body === {}) {
        console.error(context , ' ' , message  , err);
        res.status(400).send({error: message });
    }
};

module.exports = {
    validateRequestBody
};