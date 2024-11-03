"use client";

import useNotificationStore, {
  NotificationType,
} from "@/lib/stores/notification.store";
import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";

const Notifications = () => {
  const { notifications, removeNotification } = useNotificationStore();
  return (
    <>
      {notifications.map((notification) => (
        <Notification
          removeNotification={removeNotification}
          notification={notification}
        />
      ))}
    </>
  );
};

export default Notifications;

function Notification({
  removeNotification,
  notification,
}: {
  removeNotification: (notification: NotificationType) => void;
  notification: NotificationType;
}) {
  setTimeout(() => {
    removeNotification(notification);
  }, 4000);

  return (
    <div
      key={notification.title}
      className="absolute top-2 right-2 min-w-96 bg-white/50 backdrop-blur rounded-2xl px-2 py-3"
    >
      <div className="relative h-full w-full flex gap-2 items-center">
        <div
          onClick={() => removeNotification(notification)}
          className="absolute -left-4 -top-4 w-6 h-6 flex justify-center items-center shadow-md bg-white/50 rounded-full"
        >
          <IoMdClose />
        </div>
        <Image
          src={notification.icon}
          alt="Profile Image"
          width={50}
          height={50}
        />
        <div className="flex flex-col gap-0">
          <p className="font-semibold text-lg -mb-1">{notification.title}</p>
          <p>{notification.message}</p>
        </div>
      </div>
    </div>
  );
}
