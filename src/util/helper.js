export const formatDate = (timestamp) => {
  let date = new Date(timestamp);
  console.log(date);

  let hours = date.getHours();

  let minutes = "0" + date.getMinutes();

  let seconds = "0" + date.getSeconds();

  let formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  let formattedDate = date.toDateString() + " " + formattedTime;
  return formattedDate;
};
