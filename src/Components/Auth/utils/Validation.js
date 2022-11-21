import * as yup from "yup"


export const loginSchema = yup.object().shape({
    email: yup.string().email().required("Please enter email address"),
    password: yup.string().required("Please enter password")
})

export const signupSchema = yup.object().shape({
    name: yup.string().required("Enter your name"),
    email: yup.string().email().required("Please enter email address"),
    password: yup.string().required("Please enter password")
})