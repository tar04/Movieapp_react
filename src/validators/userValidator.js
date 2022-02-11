import Joi from "joi";

export const userValidator=Joi.object({
    username: Joi.string().regex(new RegExp('^[[a-zA-ZА-яЁёІіЇїЫы]{1,20}$')).required().messages({
        'string.empty':'Введи своє ім\'я',
        'string.pattern.base':'Використовуйте лише букви'
    })
})