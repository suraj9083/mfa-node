const Joi = require('joi');

const schema = Joi.object({
    keyPath: Joi.string().required(),
    tag: Joi.string().required(),
    method: Joi.string().valid('get', 'post', 'put', 'delete').required(),
    discription: Joi.string().required(),
    reqDes: Joi.string().required(),
    reqSchemasName: Joi.string().required(),
    reqSchemasType: Joi.string().valid('object', 'array').required(),
    reqSchemasProperties: Joi.string().required(),
    resSchemasName: Joi.string().required(),
    resSchemasType: Joi.string().valid('object', 'array').required(),
    resSchemasProperties: Joi.string().required(),
});

module.exports = schema;