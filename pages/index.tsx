import { useRouter } from "next/router";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLoginStore } from "../src/store/loginStore";

export default function Home() {
  const router = useRouter();

  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateLogin = useLoginStore(state => state.updateLogin);
  const updateName = useLoginStore(state => state.updateName);

  const onSubmit: SubmitHandler<FieldValues> = (data): void => {
    const { password, name } = data;
    if (password == 1234) {
      updateLogin(true);
      updateName(name);
      router.push("/loged");
    } else {
      setError("Credenciales incorrectos");
    }
  };

  return (
    <main>
      <div className="container-login">
        <div className="login">
          <div className="login__img"></div>
          <div className="login__side">
            <div className="login__container">
              <div className="login__title">Bienvenido</div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="User" />
                {errors.password && <span>This field is required</span>}

                <input {...register("password", { required: true })} placeholder="Password" type="password" />
                {errors.password && <span>This field is required</span>}

                <input type="submit" />
                <div className="red">{error}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
