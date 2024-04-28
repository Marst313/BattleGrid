export const convertDate = (date) => {
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

  return formatedDate;
};
