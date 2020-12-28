function scrollToContent() {
    $(".nav-scroll").parent().removeClass("active");
    $(this).parent().addClass("active");
}

function addTitleColor() {
    $(this)
    .find($("h5"))
        .addClass("change").css("transition", "0.2s")
    .end();
}

function removeTitleColor() {
    $(this)
    .find($("h5"))
        .removeClass("change")
    .end();
}
