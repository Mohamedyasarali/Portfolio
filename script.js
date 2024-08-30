// Home Area

const text = document.querySelector(".section-anime");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Full Stack Web Developer";
  }, 0);

  setTimeout(() => {
    text.textContent = "Web Designer";
  }, 3000);

  setTimeout(() => {
    text.textContent = "Content Creater";
  }, 6000);

  setTimeout(() => {
    text.textContent = "Tech Trainer";
  }, 9000);
};

textLoad();
setInterval(textLoad, 12000);

//Popup Service Area

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#viewMore").forEach((more) => {
    more.addEventListener("click", () => {
      document.getElementById("dialog").showModal();
    });
  });

  document.querySelectorAll("#viewLess").forEach((close) => {
    close.addEventListener("click", () => {
      document.getElementById("dialog").close();
    });
  });
});

//Demo Popup

document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("dialog-work1");
  document.querySelectorAll("#openDemo").forEach((open) => {
    open.addEventListener("click", () => {
      dialog.style.display = dialog.style.display === "none" ? "flex" : "none";
    });
  });

  document.querySelectorAll("#closeDemo").forEach((close) => {
    close.addEventListener("click", () => {
      dialog.style.display = dialog.style.display === "flex" ? "none" : "flex";
    });
  });
});

//Service Popup

document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.querySelector(".work-img");
  document.querySelectorAll("#openDemo").forEach((open) => {
    open.addEventListener("click", () => {
      dialog.style.filter =
        dialog.style.filter === "blur(0px)" ? "blur(5px)" : "blur(0px)";
    });
  });

  document.querySelectorAll("#closeDemo").forEach((close) => {
    close.addEventListener("click", () => {
      dialog.style.filter =
        dialog.style.filter === "blur(5px)" ? "blur(0px)" : "blur(5px)";
    });
  });
});

//Skills Arrow

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggleIcon").forEach((icon) => {
    icon.addEventListener("click", () => {
      const parent = icon.closest(".skill-arrow");
      // console.log(parent);

      if (!parent) {
        return;
      }

      const downIcon = parent.querySelector(".down");
      const rightIcon = parent.querySelector(".right");
      if (downIcon && rightIcon) {
        downIcon.style.display =
          downIcon.style.display === "none" ? "flex" : "none";
        rightIcon.style.display =
          rightIcon.style.display === "flex" ? "none" : "flex";
      }
    });
  });
});

//ProgressBar Animation

document.addEventListener("DOMContentLoaded", animateProgressBars);

function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-anim");

  progressBars.forEach((progressBar) => {
    const targetValue = parseInt(progressBar.getAttribute("value"), 10); //10-->Decimal Value
    // console.log(targetValue);

    //Reset to 0
    progressBar.value = 0;
    // progressBar.style.width = '0%';

    if (progressBar.intervalId) {
      clearInterval(progressBar.intervalId);
    }

    function animateProgress() {
      let currentValue = 0;

      progressBar.intervalId = setInterval(() => {
        currentValue += 1;
        //   progressBar.style.width = `${currentValue}%`;
        progressBar.value = currentValue;

        if (currentValue >= targetValue) {
          clearInterval(progressBar.intervalId);
          //   progressBar.style.width = `${currentValue}%`;
          progressBar.value = targetValue; //Reaches TargetValue
        }
      }, 15);
    }

    setTimeout(animateProgress, 500);
  });
}

//toggleIcon

document.querySelectorAll(".toggleIcon").forEach((icon) => {
  icon.addEventListener("click", () => {
    animateProgressBars();
  });
});

//Skills Arrow display container Jquery

$(document).ready(() => {
  $(".skill-link-open1").on("click", () => {
    // console.log("hello");
    $(".skill-pro-header1").show();
    $(".skill-pro-header2").hide();
    $(".skill-pro-header3").hide();
    $(".skill-pro-header4").hide();
  });
  $(".skill-link-close1").on("click", () => {
    $(".skill-pro-header1").hide();
  });
});

$(document).ready(() => {
  $(".skill-link-open2").on("click", () => {
    // console.log("hello");
    $(".skill-pro-header2").show();
    $(".skill-pro-header1").hide();
    $(".skill-pro-header3").hide();
    $(".skill-pro-header4").hide();
  });
  $(".skill-link-close2").on("click", () => {
    $(".skill-pro-header2").hide();
  });
});

$(document).ready(() => {
  $(".skill-link-open3").on("click", () => {
    // console.log("hello");
    $(".skill-pro-header3").show();
    $(".skill-pro-header1").hide();
    $(".skill-pro-header2").hide();
    $(".skill-pro-header4").hide();
  });
  $(".skill-link-close3").on("click", () => {
    $(".skill-pro-header3").hide();
  });
});

$(document).ready(() => {
  $(".skill-link-open4").on("click", () => {
    // console.log("hello");
    $(".skill-pro-header4").show();
    $(".skill-pro-header1").hide();
    $(".skill-pro-header3").hide();
    $(".skill-pro-header2").hide();
  });
  $(".skill-link-close4").on("click", () => {
    $(".skill-pro-header4").hide();
  });
});

//ScrollBar Text Area

document.querySelector(".user-msg").addEventListener("input", autoSize);

function autoSize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

//clearText Btn

// document.querySelector('.form-btn').addEventListener("click",()=>{
//     document.querySelectorAll(".user-inp").forEach((field)=>{
//         field.value="";
//     })
// })

//Toggle Button

document.querySelector(".toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

//Changing Section

$(document).ready(() => {
  $(".about-link").on("click", (event) => {
    // console.log("about");
    event.preventDefault();
    $(".about").show();
    $(".services").hide();
    $(".works").hide();
    $(".skills").hide();
    $(".contact").hide();

    $(".about-link").addClass("active");
    $(".service-link").removeClass("active");
    $(".work-link").removeClass("active");
    $(".skill-link").removeClass("active");
    $(".contact-link").removeClass("active");
  });

  $(".service-link").on("click", (event) => {
    // console.log("service");
    event.preventDefault();
    $(".about").hide();
    $(".services").show();
    $(".works").hide();
    $(".skills").hide();
    $(".contact").hide();

    $(".about-link").removeClass("active");
    $(".service-link").addClass("active");
    $(".work-link").removeClass("active");
    $(".skill-link").removeClass("active");
    $(".contact--link").removeClass("active");
  });

  $(".work-link").on("click", (event) => {
    // console.log("work");
    event.preventDefault();
    $(".about").hide();
    $(".services").hide();
    $(".works").show();
    $(".skills").hide();
    $(".contact").hide();

    $(".about-link").removeClass("active");
    $(".service-link").removeClass("active");
    $(".work-link").addClass("active");
    $(".skill-link").removeClass("active");
    $(".contact-link").removeClass("active");
  });

  $(".skill-link").on("click", (event) => {
    console.log($(".skills"));
    event.preventDefault();
    $(".about").hide();
    $(".services").hide();
    $(".works").hide();
    $(".skills").show();
    $(".contact").hide();

    $(".about-link").removeClass("active");
    $(".service-link").removeClass("active");
    $(".work-link").removeClass("active");
    $(".skill-link").addClass("active");
    $(".contact-link").removeClass("active");
  });

  $(".contact-link").on("click", (event) => {
    console.log($(".contact"));
    event.preventDefault();
    $(".about").hide();
    $(".services").hide();
    $(".works").hide();
    $(".skills").hide();
    $(".contact").show();

    $(".about-link").removeClass("active");
    $(".service-link").removeClass("active");
    $(".work-link").removeClass("active");
    $(".skill-link").removeClass("active");
    $(".contact-link").addClass("active");
  });
});

//Downloading CV

document.getElementById("btn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./ResumeYasarCV.docx";

  // const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
  link.download = "ResumeYasarCV.docx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

//Scroll Window

document.body.style.overflowX = "hidden";

document.addEventListener("DOMContentLoaded", () => {
  const upButton = document.querySelector(".up");

  window.addEventListener("scroll", () => {
    console.log(window.scrollX);
    console.log(window.scrollY);
    if (window.scrollY >= 500) {
      upButton.style.display = "flex";
    } else {
      upButton.style.display = "none";
    }
  });

  upButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

//forms

document.getElementById("forms-io").addEventListener("submit", (event) => {
  event.preventDefault();

  let data = new FormData(event.target);

  fetch("https://formspree.io/f/xeojnlqd", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        alert("Your message has been submitted successfully!");
      } else {
        return res.json().then((data) => {
          let errorMessage =
            "We encountered an issue while processing your message.";
          if (data.error) {
            errorMessage += " " + data.error;
          }
          alert(errorMessage);
        });
      }
    })
    .catch((error) => {
      alert("An unexpected error occurred. Please try again later.");
      console.error("Error:", error);
    });

  document.getElementById("forms-io").reset();
});
