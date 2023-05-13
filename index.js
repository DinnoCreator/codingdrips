$(document).ready(() => {
  // gets the username from the input
  const username = $("#username");

  //   fade out animation on click of the download button
  $("#fadeOut").click(() => {
    $("#box").fadeOut(3000, () => {
      $("#fadeOut").text("Tadah!");
      $("#fadeIn").text("Learn More");
    });
  });
  // fade in animation on click of the learn more button
  $("#fadeIn").click(() => {
    $("#box").fadeIn(3000, () => {
      $("#fadeIn").text("Tadah!");
      $("#fadeOut").text("Download");
    });
  });

  //   fade in animation for the body
  $("#shower").fadeIn(2000).removeClass("hide");
  // logs user out
  $(".stuff").click(async () => {
    await Cookies.remove("first-cookie");
    return (location.href = "signup.html");
  });
  //   signs user up/login
  $(".myform").submit(async () => {
    await Cookies.set("first-cookie", username.val());
  });
});
