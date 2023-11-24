// add container
const container = document.querySelector(".container");

// add start button
const startButton = document.querySelector(".start");

// when click start button
startButton.addEventListener ("click", function() {

    // add hidden class to start button
    startButton.classList.add("hidden");

    // create inner container
    const innerContainer = document.createElement("div");

    // add class to inner container
    innerContainer.classList.add("inner_container");

    // append inner containewr to container
    container.append(innerContainer);

})