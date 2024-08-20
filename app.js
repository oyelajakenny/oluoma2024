const weddingDay = new Date("2024-10-26T10:10:00");
const x = setInterval(function () {
  const currentDate = new Date();
  const distance = weddingDay - currentDate;

  if (distance >= 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(
      "countDown"
    ).innerText = `Event in ${days}d : ${hours}h : ${minutes}m : ${seconds}s `;
  } else {
    document.getElementById("countDown").innerText = "The event has passed.";
    clearInterval(x);
  }
}, 1000);
