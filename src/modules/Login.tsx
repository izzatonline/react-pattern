import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginFormData>();
  const handleNavigateRegister = () => {
    navigate("/register");
  };

  const handleLogin = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      //when promise is resolved
      const res = await loginApi(data);
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
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1 className="text-xl font-bold">Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            // name="username"
            placeholder="Email"
            className="border p-2 rounded"
            {...register("email")}
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
          type="submit"
          className="bg-blue-600 text-white p-2 rounded mt-4"
        >
          Login
        </button>
        <button
          type="button"
          className="text-blue-600 border-blue-600 border p-2 rounded "
          onClick={handleNavigateRegister}
        >
          Register as new user
        </button>
      </form>
    </div>
  );
};

export default Login;
