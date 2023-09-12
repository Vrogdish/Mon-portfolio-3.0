"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./style.scss";
import Typography, { standardFont } from "../typography/Typography";
// import emailjs from "@emailjs/browser";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

interface Props {
  className?: string;
}

export default function Form({ className }: Props) {
  const [messageIsSend, setMessageIsSend] = useState(false);
  const [Isloading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ criteriaMode: "all" });

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    const templateParams = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      message: data.message,
    };
    // emailjs.send(
    //   "service_sayuynv",
    //   "contact_form",
    //   templateParams,
    //   process.env.NEXT_PUBLIC_PUBLIC_KEY
    // );
    reset();
    setTimeout(() => {
      setIsLoading(false);
      setMessageIsSend(true);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={` ${className}`}>
      <Typography variant="caption" color="light" component="div">
        <div className="name">
          <div className="form-input">
            <label htmlFor="firstname">Prénom :</label>
            <input
              className=""
              id="firstname"
              type="text"
              placeholder="John"
              {...register("firstName", {
                required: "Champs obligatoire",
                maxLength: 80,
              })}
            />
            <div className="error">
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="lastname">Nom :</label>
            <input
              className=""
              id="lastname"
              type="text"
              placeholder="Doe"
              {...register("lastName", {
                required: "Champs obligatoire",

                maxLength: 100,
              })}
            />
            <div className="error">
              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="text-red-400">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>
        </div>
        <div className="form-input">
          <label htmlFor="email">Adresse email :</label>
          <input
            className=""
            id="email"
            type="text"
            placeholder="JohnDoe@exemple.com"
            {...register("email", {
              required: "Champs obligatoire",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Adresse invalide",
              },
            })}
          />
          <div className="error">
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-400">
                    {message}
                  </p>
                ))
              }
            />
          </div>
        </div>
        <div className="form-input">
          <label htmlFor="message">Message :</label>
          <textarea
            className=""
            id="message"
            cols={30}
            rows={10}
            placeholder="Votre message ici"
            {...register("message", {
              required: "Champs obligatoire",
              maxLength: 2000,
            })}
          ></textarea>
          <div className="error">
            <ErrorMessage
              errors={errors}
              name="message"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-400">
                    {message}
                  </p>
                ))
              }
            />
          </div>
        </div>
        {!messageIsSend && !Isloading ? (
          <button type="submit" className={`${standardFont.className}`}>
            Envoyer
          </button>
        ) : !messageIsSend && Isloading ? (
          <button type="submit" disabled className={`${standardFont.className}`}>
            Envoie en cours ...
          </button>
        ) : (
          <button type="submit" disabled className={`${standardFont.className}`}>
            Message envoyé !
          </button>
        )}
      </Typography>
    </form>
  );
}
