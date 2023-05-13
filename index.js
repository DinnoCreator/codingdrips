
$(document).ready(
    () => {
        const username = $("#username");
        $("#fadeOut").click(() => {
            $("#box").fadeOut(3000, () => {
                $("#fadeOut").text("Tadah!");
                $("#fadeIn").text("Learn More");

            });
        });

        $("#fadeIn").click(() => {
            $("#box").fadeIn(3000, () => {
                $("#fadeIn").text("Tadah!");
                $("#fadeOut").text("Download");
            });
        });

        $('#shower').fadeIn(2000).removeClass('hide');

        $(".stuff").click(async() => {
            await Cookies.remove("first-cookie");
            sessionStorage.clear();
            return (location.href = "signup.html");
        })
        $(".myform").submit(async() => {
        await Cookies.set("first-cookie", username.val());
         sessionStorage.setItem("first-cookie", username.val());
        })
    }
);