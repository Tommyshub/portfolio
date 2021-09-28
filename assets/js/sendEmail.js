function sendMail(contactForm) {
  emailjs
    .send("gmail", "portfolio", {
      subject: contactForm.subject.value,
      from_name: contactForm.user_name.value,
      from_email: contactForm.email.value,
      message: contactForm.message.value,
    })
    .then(
      function (response) {
        // Clear form values
        subject.value = "";
        user_name.value = "";
        email.value = "";
        message.value = "";
        console.log("SUCCESS", response);
        // Create new div for content to be displayed in
        $(document).ready(function () {
          $(
            '<p id="messageParagraph" class="toast light-green black-text">Email successfully sent!</p>'
          ).appendTo("#messageContainer");
        });
        // Set a timeout of 4 seconds and the remove the newDiv
        setTimeout(function () {
          if ($(messageParagraph).length > 0) {
            $(messageParagraph).remove();
          }
        }, 4000);
      },
      function (error) {
        console.log("FAILED", error);
        // Create new div for content to be displayed in
        $(document).ready(function () {
          $(
            '<p id="messageParagraph" class="toast red darken-1 black-text">Email could not be sent!</p>'
          ).appendTo("#messageContainer");
        });
        // Set a timeout of 4 seconds and the remove the newDiv
        setTimeout(function () {
          if ($(newDiv).length > 0) {
            $(newDiv).remove();
          }
        }, 4000);
      }
    );
  return false;
}
