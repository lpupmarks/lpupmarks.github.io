function displayPopup() {
let timerInterval;
Swal.fire({
  title: "",
  html: '<strong>I have taken on the challenge of reading 100 books.</strong><br/><a href="https://rahulgogoi.vercel.app/100books.html"  target="_blank" rel="noopener norefferer">Click here</a> to track my progress. I will close in <b></b> milliseconds.",
  timer: 6000,
  timerProgressBar: true,
  icon: 'info',
  showCloseButton: true,
  showConfirmButton: false
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
