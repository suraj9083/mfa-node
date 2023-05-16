const Joi = require("joi");

const schema = Joi.object({
    openapi: Joi.string().required(),
    info: Joi.object().optional(),
    externalDocs: Joi.object().optional(),
    servers: Joi.array().items(Joi.object({
        url: Joi.string().required(),
    })),
    tags: Joi.array().optional(),
    paths: Joi.object().required(),
    components: Joi.object().required(),
    details: Joi.array().optional(),
});

module.exports = schema