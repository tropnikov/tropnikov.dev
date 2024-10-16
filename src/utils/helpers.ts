const timeZone = "Europe/Istanbul";

export function getCurrentTime(): Date {
  return new Date();
}

export function getCurrentTimeInTimezone(): Date {
  return new Date(
    new Date(new Date().toLocaleString("en-US", { timeZone: timeZone })),
  );
}

export function formatTimeInTimezone(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    // second: "2-digit",
    hour12: false,
    timeZone: timeZone,
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  formattedTime += " EEST (UTC+3)";

  return formattedTime;
}
