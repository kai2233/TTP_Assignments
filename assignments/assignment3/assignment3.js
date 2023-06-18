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
    document.getElementById("container").appendChild(document.createTextNode("Hello!"));
    // Add the class main to the div with a class of footer.
    document.getElementsByClassName("footer")[0].classList.add("main");
    // Remove the class main on the div with a class of footer.
    document.getElementsByClassName("footer")[0].classList.remove("main");
    // Create a new li element.
    const createLi = document.createElement("li");
    // Give the li the text "four".
    createLi.textContent = "four";
    console.log(createLi);
    //Append the li to the ul element.
    document.querySelector("ul").appendChild(createLi);
    // Loop over all of the lis inside the ol tag and give them a background color of "green".
    const lis = document.querySelectorAll("ol li");
    lis.forEach((ele)=>{
        ele.style.backgroundColor = "green";
    });
    // Remove the div with a class of footer.
    const getDiv = document.querySelector(".footer");
    getDiv.remove();

};
