$(".phone_number input").on("input keyup", function () {
    if ($(this).val().length != 0) {
        $(".phone_number button").addClass("active");
    } else {
        $(".phone_number button").removeClass("active");
    }
})

$(".phone_number .continue button").click(function () {
    if($(".phone_number input").val().length == 0) {
        return;
    } 
    $(".login_block").removeClass("selected");
    $(".password").addClass("selected");
    let text = $(".phone_number input").val();
    $(".password .enter_subcaption span").text(" " + text);
})

$(".back_to").click(function () {
    $(".login_block").removeClass("selected");
    $(".phone_number").addClass("selected");
})

$(".password input").on("input keyup", function () {
    if ($(this).val().length != 0) {
        $(".password button").addClass("active");
    } else {
        $(".password button").removeClass("active");
    }
})

$(".input_block button").click(function () {
    if ($(".input_block input").attr("type") == "password") {
        $(".input_block input").attr("type", "text");
        $(".input_block button").text("").append(eyeOff);
    } else {
        $(".input_block input").attr("type", "password");
        $(".input_block button").text("").append(eye);
    }
})

$(".password .continue button").click( function () {
    $("form").submit();
})

const eye = '<svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.6c5.2 0 10.4 4.237 10.4 7.4 0 3.163-5.2 7.4-10.4 7.4S1.6 15.163 1.6 12c0-3.163 5.2-7.4 10.4-7.4zm0 1.8c-4.278 0-8.6 3.522-8.6 5.6s4.322 5.6 8.6 5.6 8.6-3.522 8.6-5.6-4.322-5.6-8.6-5.6zm0 2.2a3.4 3.4 0 110 6.8 3.4 3.4 0 010-6.8zm0 1.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z" fill="currentColor"></path></svg>';
const eyeOff = '<svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.593 6.41a.9.9 0 01-.092-1.797c2.759-.141 5.574.953 7.649 2.5.975.728 1.787 1.554 2.356 2.396.57.843.894 1.7.894 2.491 0 .94-.464 1.98-1.242 2.966a.9.9 0 11-1.413-1.116c.41-.519.855-1.167.855-1.85 0-.312-.139-.821-.585-1.483-.436-.645-1.097-1.33-1.941-1.96-1.835-1.37-4.169-2.265-6.48-2.147zM4.85 16.886C6.8 18.341 9.4 19.4 12 19.4c1.967 0 3.93-.607 5.604-1.523l1.26 1.26a.9.9 0 101.272-1.273l-13.5-13.5a.9.9 0 00-1.272 1.272l.683.684c-.418.246-.819.512-1.197.794-.975.727-1.787 1.553-2.356 2.395-.57.843-.894 1.7-.894 2.491 0 .79.325 1.648.894 2.49.569.842 1.381 1.669 2.356 2.396zM10.4 12a1.6 1.6 0 002.587 1.26l-2.247-2.247c-.213.272-.34.615-.34.987zm1.6 3.4a3.4 3.4 0 01-2.537-5.664L7.37 7.643c-.513.273-.998.581-1.444.914-.844.63-1.505 1.315-1.94 1.96-.448.662-.586 1.17-.586 1.483 0 .312.138.821.585 1.483.436.645 1.097 1.33 1.941 1.96C7.631 16.715 9.862 17.6 12 17.6c1.44 0 2.925-.401 4.269-1.058l-2.005-2.005A3.39 3.39 0 0112 15.4z" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd"></path></svg>';