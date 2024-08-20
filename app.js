const weddingDay = new Date("October 26, 2024 10:10am");
const x = setInterval(function () {
  const currentDate = new Date();
  const distance = weddingDay - currentDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countDown").innerText = 
    `Event in ${days}d : ${hours}h : ${minutes}m : ${seconds}s `;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerText = `It's Your Day Hussein!!!`; // /
    
   
   
  }
}, 1000); // This function will run every second
