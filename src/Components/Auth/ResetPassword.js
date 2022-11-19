import React from "react";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Hidden, IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { resetpassschema } from "./utils/helper";
import Logo from '../../public/assets/logo.png'

const ResetPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const defaultValues = {
    currentPassword: "",
    newPassword: "",
  };

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(resetpassschema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (values) => {
    console.log(values);
   
    }
  

  return (
      <form
        name="resetPasswordForm"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-5 py-5 justify-start sm:justify-center items-center h-screen"
      >
        <Hidden smUp>
          <div className="flex justify-center items-center my-10">
            <Image src={Logo} alt="logo" className="h-20 w-full"/>
          </div>
        </Hidden>
        <div className="headline4 mb-7 text-left">Create new password</div>
        <div className="headline8 text-center mb-14 w-full md:w-96">
          Please create a new password that you don’t use on any other site.
        </div>
        <div className=" flex flex-col gap-5 items-center justify-between w-full md:w-96">
          <Controller
            name="currentPassword"
            control={control}
            rules={{
              required: true,
              validate: (value) => {
                if (value === "") {
                  return "Please provide input name";
                }
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Current Password"
                type={showPassword ? "text" : "password"}
                className="bg-white"
                autoFocus={true}
                placeholder="Current Password"
                error={!!errors.currentPassword}
                helpertext={errors?.currentPassword?.message}
                variant="outlined"
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: true,
              validate: (value) => {
                if (value === "") {
                  return "Please provide input name";
                }
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="New Password"
                type={showPassword ? "text" : "password"}
                className="bg-white"
                autoFocus={true}
                placeholder="New Password"
                error={!!errors.newPassword}
                helpertext={errors?.newPassword?.message}
                variant="outlined"
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <button
            type="submit"
            className="text-white hover:bg-primaryHover cursor-pointer my-5 capitalize p-4 w-full md:w-96 rounded-md font-bold shadow-none hover:shadow-none bg-primary"
          >
            Change Password
          </button>
        </div>
      </form>
  );
};

export default ResetPassword;
