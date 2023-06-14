window.onload=()=>{
    // Select the section with an id of container without using querySelector.
    const docGetCon = document.getElementById("container");
    console.log(docGetCon);
    // Select the section with an id of container using querySelector.
    const queSeleCon = document.querySelector("#container");
    console.log(queSeleCon);
    // Select all of the list items with a class of "second".
    const docGetSec = document.getElementsByClassName("second");
    console.log(docGetSec);
    // Select a list item with a class of third, but only the list item inside of the ol tag.
    const queGetOlThird = document.querySelector("ol .third");
    console.log(queGetOlThird);
    // Give the section with an id of container the text "Hello!".
    document.getElementById("container").innerText = "Hello!";
    // Add the class main to the div with a class of footer.
    document.getElementsByClassName("footer")[0].classList.add("main");
    // Remove the class main on the div with a class of footer.
    document.getElementsByClassName("footer")[0].classList.remove("main");
    // Create a new li element.
    document.createElement("li");
}
