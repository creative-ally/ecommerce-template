import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './utils/Validation';

const ForgetPass = () => {
    const [isSend, setIsSend] = React.useState(false);
    const defaultValues = {
        email: '',
    };


    const { control, formState, handleSubmit, reset } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(loginSchema),

    });

    const { isValid, dirtyFields, errors } = formState;
    const onSubmit = (values) => {
        console.log(values)
    }


    return (
        <div className="flex lg:justify-center py-20 px-20 text-white authentication">
            <div className="w-2/4 px-10 py-10 text-center shadow-2xl shadow-black">
                <h1 className="text-[40px] font-bold">Forgot password?</h1>
                <p>No worries! Just enter your email and we’ll send you a reset password
                    link.</p>
                {!isSend && (
                    <form
                        name="forgotPasswordForm"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col px-5 py-5 justify-start sm:justify-center items-center h-screen"
                    >

                        <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto">
                            <span className="mr-2 text-gray-500 my-auto">
                                {" "}
                                <MailOutlineIcon />
                            </span>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Email"
                                        type="email"
                                        className=" formEmailField bg-transparent"
                                        autoFocus={true}
                                        placeholder="Email"
                                        error={!!errors.email}
                                        helpertext={errors?.email?.message}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />
                                )}
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white hover:bg-primaryHover cursor-pointer my-5 capitalize p-4 w-full md:w-96 rounded-md font-bold shadow-none hover:shadow-none bg-primary"
                        >
                            Send Recovery Email
                        </button>

                        <p className="mx-auto my-7">
                            Just remember?
                            <Link to="/signin">
                            <span className="">
                                Sign in
                            </span>
                        </Link>
                        </p>
                    </form>
                )}
                {
                    isSend && (
                        <div className='flex justify-center items-center flex-col gap-5 h-screen'>
                            <div>An Email has been sent to your account with the reset password link</div>
                            <Link className='underline text-blue-500 ' to='/signin'>SignIn</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ForgetPass;