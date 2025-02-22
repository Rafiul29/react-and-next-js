import FieldSet from "../FieldSet";
import Field from "../Field";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { email: "r@gmail.com", password: "12345678" };

    const found =
      formData.email === user.email && formData.password == user.password;
    if (!found) {
      setError("root.random", {
        message: `User with email ${formData.email} is not found`,
        type: "random",
      });
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "email is required" })}
              className={`p-2 border box-border w-[300px]  rounded-md ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </Field>


          

          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters",
                },
              })}
              className={`p-2 border box-border w-[300px]  rounded-md ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="text-md text-white text-md cursor-pointer p-2 border rounded-lg  bg-purple-500">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
