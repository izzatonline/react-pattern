import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { checkHealth, registerApi } from "../api";
import { useState } from "react";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterFormData>();

  // const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData);
  //   console.log(data);

  //   // @ts-ignore
  //   if (data.username.length < 5) {
  //     alert("asasa");
  //     return;
  //   }

  //   // reset
  //   e.currentTarget.reset();
  // };

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  // const handleRegister = async (data: RegisterFormData) => {
  //   setIsLoading(true);
  //   checkHealth()
  //     .then((res) => {
  //       console.log("resolved");
  //       console.log(res.data.message);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log("rejected");
  //       console.log(error);
  //       alert("Something went wrong");
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //       console.log("finally");
  //     });
  //   try {
  //     setIsLoading(true);
  //     const res = await checkHealth();
  //     console.log(res.data.message);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleRegister = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      //when promise is resolved
      const res = await registerApi(data);
      console.log(res);
    } catch (error) {
      //when promise is rejected
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto mt-[200px] border p-4 rounded">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleRegister)}
      >
        <h1 className="text-xl font-bold">Register</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            // name="email"
            placeholder="Email"
            className="border p-2 rounded"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            // name="username"
            placeholder="Username"
            className="border p-2 rounded"
            {...register("username")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            // name="password"
            placeholder="Password"
            className="border p-2 rounded"
            {...register("password")}
          />
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-600 text-white p-2 rounded mt-4"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
        <button
          type="button"
          className="text-blue-600 border-blue-600 border p-2 rounded"
          onClick={handleNavigateLogin}
        >
          Login as existing user
        </button>
      </form>
    </div>
  );
};

export default Register;
