document.addEventListener("DOMContentLoaded", () => {
  const bookingModal = document.getElementById("bookingModal");
  const videoModal = document.getElementById("videoModal");
  const bookBtn = document.getElementById("bookBtn");
  const demoBtn = document.getElementById("demoBtn");
  const demoBtn2 = document.getElementById("demoBtn2");
  const closes = document.querySelectorAll(".close");
  const demoVideo = document.getElementById("demoVideo");
  const bookingForm = document.getElementById("bookingForm");

  // Open booking modal
  bookBtn.addEventListener("click", e => {
    e.preventDefault();
    bookingModal.style.display = "block";
  });

  // Open video modal
  [demoBtn, demoBtn2].forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      videoModal.style.display = "block";
    });
  });

  // Close modals when clicking X
  closes.forEach(c => c.addEventListener("click", () => {
    bookingModal.style.display = "none";
    videoModal.style.display = "none";
    demoVideo.src = demoVideo.src; // stop video
  }));

  // Close modal when clicking outside
  window.addEventListener("click", e => {
    if (e.target === bookingModal) bookingModal.style.display = "none";
    if (e.target === videoModal) {
      videoModal.style.display = "none";
      demoVideo.src = demoVideo.src;
    }
  });

  // Handle booking form submission
  bookingForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = e.target.name.value;
    const age = e.target.age.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    alert(`Booking Submitted!\nName: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}`);

    bookingModal.style.display = "none";
    e.target.reset();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const bookingModal = document.getElementById("bookingModal");
  const videoModal = document.getElementById("videoModal");
  const bookBtn = document.getElementById("bookBtn");
  const demoBtn = document.getElementById("demoBtn");
  const demoBtn2 = document.getElementById("demoBtn2");
  const closes = document.querySelectorAll(".close");
  const demoVideo = document.getElementById("demoVideo");
  const bookingForm = document.getElementById("bookingForm");

  // Open booking modal
  bookBtn.addEventListener("click", e => {
    e.preventDefault();
    bookingModal.style.display = "block";
  });

  // Open video modal
  [demoBtn, demoBtn2].forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      videoModal.style.display = "block";
    });
  });

  // Close modals
  closes.forEach(c => c.addEventListener("click", () => {
    bookingModal.style.display = "none";
    videoModal.style.display = "none";
    demoVideo.src = demoVideo.src; // stop video
  }));

  window.addEventListener("click", e => {
    if (e.target === bookingModal) bookingModal.style.display = "none";
    if (e.target === videoModal) {
      videoModal.style.display = "none";
      demoVideo.src = demoVideo.src;
    }
  });

  // Handle booking form submission
  bookingForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = e.target.name.value;
    const age = e.target.age.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    alert(`Booking Submitted!\nName: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}`);

    bookingModal.style.display = "none";
    e.target.reset();
  });
});

