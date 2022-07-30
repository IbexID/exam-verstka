import React from "react";
import Checkbox from "./ui/Checkbox";
import RegisterInput from "./ui/RegisterInput";
import SolidButton from "./ui/SolidButton";

const RegisterForm: React.FC = () => {
  const inputs = [
    {
      id: 1,
      placeholder: "ФИО ребёнка",
      type: "text",
      autoComplete: "name",
    },
    {
      id: 2,
      placeholder: "Дата рождения",
      type: "text",
      autoComplete: "bday",
    },
    {
      id: 3,
      placeholder: "Город",
      type: "text",
      autoComplete: "address-level2",
    },
    {
      id: 4,
      placeholder: "Email",
      type: "email",
      autoComplete: "email",
    },
    {
      id: 5,
      placeholder: "Пароль",
      type: "password",
      autoComplete: "new-password",
    },
  ];

  return (
    <form className="register__form">
      <div className="register__inputs-wrapper">
        {inputs.map((input) => {
          return (
            <RegisterInput
              type={input.type}
              key={input.id}
              placeholder={input.placeholder}
              autoComplete={input.autoComplete}
            />
          );
        })}
      </div>
      <div className="register__checkbox-wrapper">
        <Checkbox color="green" />
      </div>
      <div className="register__form-bottom">
        <SolidButton text="Участвовать" red />
        <div className="register__form-planes">
          <img
            className="register__form-plane register__form-plane-1"
            src={require("../images/register-plane-1.png")}
            alt="plane"
          />
          <img
            className="register__form-plane register__form-plane-2"
            src={require("../images/register-plane-2.png")}
            alt="plane"
          />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
