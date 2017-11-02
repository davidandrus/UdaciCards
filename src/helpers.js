import { View, StyleSheet, AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const NOTIFICATION_KEY = "UdaciCards:notifications";

export function clearLocalNotification() {
  AsyncStorage.removeItem(NOTIFICATION_KEY);
  Notifications.cancelAllScheduledNotificationsAsync;
}

export async function setLocalNotification() {
  const isSet = await AsyncStorage.getItem(NOTIFICATION_KEY);

  // notification is already set
  if (isSet) {
    return;
  }

  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status === "granted") {
    Notifications.cancelAllScheduledNotificationsAsync();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate());
    tomorrow.setHours(18);
    tomorrow.setMinutes(0);

    Notifications.scheduleLocalNotificationAsync(
      {
        title: "UdaciCards Reminder",
        body: "Make sure to practice your flashcards today",
        ios: {
          sound: true
        }
      },
      {
        time: tomorrow,
        repeat: "day"
      }
    );
  }

  AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
}
