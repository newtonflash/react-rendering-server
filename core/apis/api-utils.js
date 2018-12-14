import isEmpty from 'lodash/isEmpty';

const validateRequestBody = (req, res, context, message = 'request body is blank') => {
    if(isEmpty(req.body)) {
        res.status(400).send({error: message });
        return false;
    }

    return true;
};

const validateRequestParams = (reqObj, validationRules) => {
    let responsObj = {
        isValid: true
    };

    for (let currentValidationRule in validationRules){
        var validationObj = validationRules[currentValidationRule];
        var validation = validateWithRules(
            reqObj[currentValidationRule],
            validationObj.rules,
            validationObj.regex
        );

        if(!validation){
            responsObj.isValid = false;
            responsObj.message = validationObj.message;
            return responsObj;
        }
    }
    return responsObj;
};

const validateWithRules = (obj, rules, regex) => {
    if(!obj) return false;

    let isValid = true;

    for(let i = 0; i < rules.length; i++){
        switch (rules[i]){
            case 'not-defined':
                isValid =  typeof obj !== 'undefined';
                break;
            case 'not-blank-string':
                isValid = obj !== '';
                break;
            default:
                break;
        }
    }

    if(regex){
        isValid = regex.test(obj);
    }
    return isValid;
};

module.exports = {
    validateRequestBody,
    validateRequestParams
};