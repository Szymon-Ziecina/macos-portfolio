"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useTranslations } from "next-intl";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import useNotificationStore from "@/lib/stores/notification.store";

const createSchema = (t: (key: string) => string) =>
  z.object({
    from_name: z.string().min(1, t("nameRequired")),
    from_email: z.string().email(t("invalidEmail")),
    message: z.string().min(1, t("messageRequired")).max(500, t("messageMax")),
  });

type FormData = z.infer<ReturnType<typeof createSchema>>;

const Mail: React.FC = () => {
  const t = useTranslations("Mail");
  const schema = createSchema(t);
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);
    console.log(data);
    emailjs
      .send("service_w7zr7zl", "template_g8qq7gi", data, "cr76-ZZazZMlRrT3u")
      .then(() => {
        addNotification({
          title: "Mail",
          message: "Mail sent successfully!",
          icon: "/images/Mail.png",
        });
      })
      .catch((error) => {
        addNotification({
          title: "Mail",
          message: "Error sending email" + error.text,
          icon: "/images/Mail.png",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[592px] xl:w-[816px] p-6"
    >
      <h1 className="text-3xl font-semibold mb-4">{t("title")}</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {t("name")}:
        </label>
        <input
          {...register("from_name")}
          type="text"
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 ${
            errors.from_name ? "border-red-500" : ""
          }`}
        />
        {errors.from_name && (
          <p className="mt-1 text-red-500 text-sm">
            {errors.from_name.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {t("email")}:
        </label>
        <input
          {...register("from_email")}
          type="email"
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 ${
            errors.from_email ? "border-red-500" : ""
          }`}
        />
        {errors.from_email && (
          <p className="mt-1 text-red-500 text-sm">
            {errors.from_email.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {t("message")}:
        </label>
        <textarea
          {...register("message")}
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 ${
            errors.message ? "border-red-500" : ""
          }`}
          rows={4}
        />
        {errors.message && (
          <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      <button
        disabled={loading}
        type="submit"
        className="mt-4 w-full flex gap-4 justify-center items-center py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
      >
        {loading ? t("loading") : t("send")}
        {loading ? (
          <AiOutlineLoading3Quarters size={20} className="animate-spin" />
        ) : (
          <IoSend size={20} />
        )}
      </button>
    </form>
  );
};

export default Mail;
