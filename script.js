// // start navbar
// const body = document.querySelector(".responsive");
// const navbar = document.querySelector(".navbar");
// const menuBtn = document.querySelector(".menu-btn");
// const cancelBtn = document.querySelector(".cancel-btn");
// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll(".menu-list li a");

// menuBtn.onclick = () => {
//   navbar.classList.add("show");
//   menuBtn.classList.add("hide");
//   body.classList.add("disabled");
// };

// cancelBtn.onclick = () => {
//   body.classList.remove("disabled");
//   navbar.classList.remove("show");
//   menuBtn.classList.remove("hide");
// };

// window.onscroll = () => {
//   // Toggle sticky class for the navbar
//   this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

//   // Highlight active link based on scroll position
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (pageYOffset >= sectionTop - sectionHeight / 6) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.getAttribute("href").slice(1) === current) {
//       li.classList.add("active");
//     }
//   });
// };
const body = document.querySelector(".responsive");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".menu-list li a");
const footerLinks = document.querySelectorAll(".list a");

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};

cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

window.onscroll = () => {
  // Toggle sticky class for the navbar
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");

  // Highlight active link based on scroll position for navbar
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 6) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.getAttribute("href").slice(1) === current) {
      li.classList.add("active");
    }
  });

  // Highlight active link based on scroll position for footer
  let currentFooter = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 6) {
      currentFooter = section.getAttribute("id");
    }
  });

  footerLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === currentFooter) {
      link.classList.add("active");
    }
  });
};

// end active link
// end navbar
// start animatin Huzaifa
var words = ["Huzaifa Shahid", "Web Developer"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});
// end animation muzammil text
////////// start click to top btn
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#scroll-top").fadeIn();
    } else {
      $("#scroll-top").fadeOut();
    }
  });

  $("#scroll-top-btn").click(function () {
    window.scrollTo(0, 0);

    return false;
  });
});
////////// end click to top btn

// contact us form Working with email // 

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Form submitted successfully";
        createToast("success"); // Show success alert here
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});

// Contact us form End //

// Alert //

const notifications = document.querySelector(".notifications");

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Success: Your message is send",
  },
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
  setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
};

const createToast = (id) => {
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li");
  toast.className = `toast ${id}`;
  toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};


// const form = document.getElementById("form");
// const result = document.getElementById("result");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const object = Object.fromEntries(formData);
//   const json = JSON.stringify(object);
//   result.innerHTML = "Please wait...";

//   fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: json,
//   })
//     .then(async (response) => {
//       let json = await response.json();
//       if (response.status == 200) {
//         result.innerHTML = "Form submitted successfully";
//       } else {
//         console.log(response);
//         result.innerHTML = json.message;
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       result.innerHTML = "Something went wrong!";
//     })
//     .then(function () {
//       form.reset();
//       setTimeout(() => {
//         result.style.display = "none";
//       }, 3000);
//     });
// });

// Contact us form End // 


// Alert //

//  const notifications = document.querySelector(".notifications"),
//    buttons = document.querySelectorAll(".buttons .btn");

//  // Object containing details for different types of toasts
//  const toastDetails = {
//    timer: 5000,
//    success: {
//      icon: "fa-circle-check",
//      text: "Success: This is a success toast.",
//    },
//  };

//  const removeToast = (toast) => {
//    toast.classList.add("hide");
//    if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
//    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
//  };

//  const createToast = (id) => {
//    // Getting the icon and text for the toast based on the id passed
//    const { icon, text } = toastDetails[id];
//    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
//    toast.className = `toast ${id}`; // Setting the classes for the toast
//    // Setting the inner HTML for the toast
//    toast.innerHTML = `<div class="column">
//                          <i class="fa-solid ${icon}"></i>
//                          <span>${text}</span>
//                       </div>
//                       <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
//    notifications.appendChild(toast); // Append the toast to the notification ul
//    // Setting a timeout to remove the toast after the specified duration
//    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
//  };

//  // Adding a click event listener to each button to create a toast when clicked
//  buttons.forEach((btn) => {
//    btn.addEventListener("click", () => createToast(btn.id));
//  });