$("#show").on("click", function () {
    console.log("ζΌγγ");
    chrome.storage.local.get(["article"], function (result) {
      console.log(result);
      $("#article__title").html(result["article"][0]);
      $("#article__url").html(result["article"][1]);
    });
  });