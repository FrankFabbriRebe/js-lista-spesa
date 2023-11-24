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

    // input user
    const input = document.createElement("input");

    // add type
    input.type = "text";

    // add placeholder
    input.placeholder = "Scrivi cosa comprare";

    // add class
    input.classList.add("user_input");

    // append input to inner container
    innerContainer.append(input);

    // create bottone aggiungi
    const addButton = document.createElement("button");

    // add text to the button
    addButton.textContent = "Aggiungi elemento";

    // add class
    addButton.classList.add("add_button");

    // append addButton
    innerContainer.append(addButton);

    // when click add button
    addButton.addEventListener ("click", function() {

        // create ul container
        const containerUl = document.createElement ("div");

        // add class
        containerUl.classList.add("container_ul");

        // append containerUl
        innerContainer.append(containerUl);

        // create ul
        const listaSpesa = document.createElement("ul");

        // append ul
        containerUl.append(listaSpesa);

        // create li
        const elementi = document.createElement("li");

        // append li
        listaSpesa.append(elementi)

    })

})