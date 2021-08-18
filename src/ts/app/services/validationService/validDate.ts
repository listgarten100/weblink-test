export const validDate = (date: string): string => {
  if (!date) return null;

  const birthday = new Date(date);
  const day = birthday.getDate() < 10 ? `0${birthday.getDate()}` : birthday.getDate();
  const month = (birthday.getMonth() + 1) < 10 ? `0${birthday.getMonth() + 1}` : birthday.getMonth() + 1;

  return `${month}/${day}/${birthday.getFullYear()}`;
};
