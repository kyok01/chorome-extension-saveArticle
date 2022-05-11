$("#show").on("click", function () {
    console.log("押した");
    chrome.storage.local.get(["article"], function (result) {
      console.log(result);
      $("#article__title").html(result["article"][0]);
      $("#article__url").html(result["article"][1]);
    });
  });