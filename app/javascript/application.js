import "@hotwired/turbo-rails";
import "controllers";
import "jquery";
import "semantic-ui";

function scroll_bottom() {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
}

function submit_message() {
  $("#message_body").on("keydown", function (e) {
    if (e.keyCode == 13) {
      $("button").click();
      e.target.value = "";
    }
  });
}

function onLoad() {
  if (window.$) {
    $(".ui.dropdown").dropdown();
    $(".message .close").on("click", function () {
      $(this).closest(".message").transition("fade");
    });
    submit_message();
    scroll_bottom();
  }
}

document.addEventListener("turbo:load", onLoad);
document.addEventListener("DOMContentLoaded", onLoad);
