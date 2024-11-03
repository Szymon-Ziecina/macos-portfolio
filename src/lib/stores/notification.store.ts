import { create } from "zustand";

export interface NotificationType {
  title: string;
  message: string;
  icon: string;
}

interface NotificationStore {
  notifications: NotificationType[];
  addNotification: (notification: NotificationType) => void;
  removeNotification: (notification: NotificationType) => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({ notifications: [...state.notifications, notification] })),
  removeNotification: (notification) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n !== notification),
    })),
}));

export default useNotificationStore;
