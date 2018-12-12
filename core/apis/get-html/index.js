const router = require('express').Router();
const controller = require('./get-html.controller');
import ERROR from '../error-codes';
import { validateRequestBody, validateRequestParams} from '../api-utils';


router.post('/', function(req, res){
    try {
        validateRequestBody(req, res, 'getHTML');

        let reqParams = req.body;

        let validation = validateRequestParams(reqParams, {
            componentID : {
                rules: ['not-undefined', 'not-blank-string'],
                message: ERROR._0003_COMPONENT_ID_MISSING
            },
            componentData : {
                rules: ['not-undefined', 'not-blank-string'],
                message : ERROR._0004_COMPONENT_DATA_MISSING
            },
            componentType : {
                rules: ['not-undefined', 'not-blank-string'],
                regex : /static|dynamic/,
                message : ERROR._0006_COMPONENT_TYPE_MISSING
            }
        });

        if(!validation.isValid){
            res.status(200).send({error: validation.message});
            return;
        }

        controller.compileComponent({
                id : reqParams.componentID,
                data : reqParams.componentData,
                type : reqParams.componentType
            },
            function (err, result) {
                if (err) {
                    res.status(400).send(err);
                    return;
                }
                res.send(result);
            });
    } catch (err) {
        console.log(err);
        res.status(500).send({error: ERROR._0001_500_INTERNAL_ERROR});
    }
});

module.exports = router;
