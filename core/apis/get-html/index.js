const router = require('express').Router();
const controller = require('./get-html.controller');
const ERROR = require('../error-codes');
const validateRequestBody = require('../api-utils').validateRequestBody;

router.post('/', function(req, res){
    try {
        validateRequestBody(req, res, 'getHTML');

        let reqParams = req.body;


        if(typeof reqParams.componentID === 'undefined' || reqParams.componentID === "" ){
            res.status(200).send({error: ERROR._0003_COMPONENT_ID_MISSING});
            return;
        }

        if(typeof reqParams.componentData === 'undefined' || reqParams.componentData === "" ){
            res.status(200).send({error: ERROR._0004_COMPONENT_DATA_MISSING});
            return;
        }
        controller.compileComponent({
                componentID : reqParams.componentID,
                componentData : reqParams.componentData
            },
            function (err, result) {
                if (err) {
                    res.status(400).send({error: ERROR._0002_400_GENERIC_ERROR});
                    return;
                }
                res.send(result);
            });
    } catch (err) {
        res.status(500).send({error: ERROR._0001_500_INTERNAL_ERROR});
    }
});

module.exports = router;
