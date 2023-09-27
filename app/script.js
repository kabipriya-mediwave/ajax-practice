getAllDogsFromApi();
function getAllDogsFromApi() {
  // https://dog.ceo/api/breeds/list/all
  const url = "https://dog.ceo/api/breeds/list/all";
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      const dogsList = Object.keys(resp.message);
      console.log(dogsList);
      appendToSelect(dogsList);
    },
    error: function () {
      console.log("Api request error");
    },
    complete: function () {
      console.log("API request completed");
    },
  });
}
function getRandomImageOfDog(dogBreed) {
  // https://dog.ceo/api/breed/affenpinscher/images/random
  const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
    },
    error: function () {
      console.log("Api request error");
    },
  });
}
function appendToSelect(list) {
  for (let item of list) {
    let i = 1;
    const option = document.createElement("option");
    option.innerHTML = item;
    option.id = item + i;
  }
}
