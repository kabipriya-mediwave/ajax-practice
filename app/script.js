$(document).ready(function () {
  total();
});

function total() {
  const loading = $("#loading");

  function showLoading() {
    loading.show();
  }

  function hideLoading() {
    loading.hide();
  }

  function Dropdown(dogBreeds) {
    const dropdown = $("#Dropdown");

    dropdown.append('<option value="">Select a breed</option>');

    for (let i = 0; i < dogBreeds.length; i++) {
      const breed = dogBreeds[i];
      dropdown.append(`<option value="${breed}">${breed}</option>`);
    }
  }

  $("#button").click(function () {
    const selectedBreed = $("#Dropdown").val();
    if (selectedBreed) {
      getRandomImage(selectedBreed);
    }
  });

  function getAllDogsFromApi() {
    const url = "https://dog.ceo/api/breeds/list/all";
    $.ajax(url, {
      method: "GET",
      success: function (resp) {
        console.log("API request success");
        const dogsList = Object.keys(resp.message);
        console.log(dogsList);
        Dropdown(dogsList);
      },
      error: function () {
        console.log("API request error");
      },
      complete: function () {
        console.log("API request completed");
      },
    });
  }

  function getRandomImage(dogBreed) {
    const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
    showLoading();
    $.ajax(url, {
      method: "GET",
      success: function (resp) {
        console.log("API request success");
        console.log(resp);
        hideLoading();
        displayImage(resp.message);
      },
      error: function () {
        console.log("API request error");
      },
    });
  }

  function displayImage(imageUrl) {
    const imageContainer = $("#imageContainer");

    imageContainer.empty();

    const imgElement = $("<img>");
    imgElement.attr("src", imageUrl);

    imageContainer.append(imgElement);
  }

  getAllDogsFromApi();
}
