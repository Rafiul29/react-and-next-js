import FieldSet from "../FieldSet";
import Field from "../Field";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import NumberInput from "../NumberInput";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex justify-center mt-4">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Your Details">
          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", { required: "full name is required" })}
              className={`p-2 border box-border w-[300px]  rounded-md ${
                errors.fname ? "border-red-500" : "border-gray-200"
              }`}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter your full name"
            />
          </Field>

          <Field label="Age" error={errors.age}>
            {/* <input
              {...register("age", {
                required: "age is required",
                max: {
                  value: 100,
                  message: "Age must be between 0 and 100",
                },
                min: {
                  value: 15,
                  message: "Age must be between 0 and 100",
                },
              })}
              className={`p-2 border box-border w-[300px]  rounded-md ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="number"
              name="age"
              id="age"
              placeholder="Enter your age"
            /> */}
            <Controller
              name="age"
              control={control}
              // defaultValue={1}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`p-2 border box-border w-full rounded-md ${
                    errors.age ? "border-red-500" : "border-gray-200"
                  }`}
                  {...field}
                />
              )}
              rules={{
                required: { value: true, message: "Age is required" },
                min: { value: 15, message: "Age must be between 15 and 100" },
                max: { value: 100, message: "Age must be between 15 and 100" },
              }}
            />
          </Field>

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
                required: "password is required",
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

          <Field label="Picture" error={errors.picture}>
            <input
              {...register("picture", {
                required: "picture is required",
                minLength: {
                  value: 8,
                  message: "Your picture  seleted",
                },
              })}
              className={`p-2 border box-border w-[300px]  rounded-md ${
                errors.picture ? "border-red-500" : "border-gray-200"
              }`}
              type="file"
              name="picture"
              id="picture"
              multiple
            />
          </Field>
          
        </FieldSet>

        <FieldSet label="Enter Social Handles">
          {fields.map((field, index) => (
            <div key={field.id} className="flex justify-between items-center  ">
              <Field label="Social Name">
                <input
                  className={`p-2 border box-border w-[300px]  rounded-md ${
                    errors.fname ? "border-red-500" : "border-gray-200"
                  }`}
                  type="text"
                  placeholder="Enter your Social name"
                  {...register(`socials[${index}].name`, {
                    required: "Social name is required",
                  })}
                  name={`socials[${index}].name`}
                  id={`socials[${index}].name`}
                />
              </Field>
              <Field label="Social URL">
                <input
                  className={`p-2 border box-border w-[300px]  rounded-md ${
                    errors.fname ? "border-red-500" : "border-gray-200"
                  }`}
                  type="text"
                  placeholder="Enter your Social url"
                  {...register(`socials[${index}].url`, {
                    required: "Social  url is required",
                  })}
                  name={`socials[${index}].url`}
                  id={`socials[${index}].url`}
                />
              </Field>

              <button
                type="button"
                className="mt-8 mr-2 text-2xl"
                onClick={() => remove(index)}
              >
                &#8722;
              </button>
            </div>
          ))}

          <button
            type="button"
            className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto"
            onClick={() => append({ name: "", url: "" })}
          >
            Add A social Handle
          </button>
        </FieldSet>

        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="text-md text-white text-md cursor-pointer p-2 border rounded-lg  bg-purple-500">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
