import Joi from "joi";

export const userValidator=Joi.object({
    username: Joi.string().regex(new RegExp("^[[a-zA-ZА-яЁёІіЇїЫы]{1,20}$")).required().messages({
        "string.empty":"Введи ім'я",
        "string.pattern.base":"Використовуй лише букви"
    })
})