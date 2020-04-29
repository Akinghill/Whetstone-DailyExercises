/*
Here is an example of a function in vanilla javascript that makes an image, sets its source and adds the image to the page:

````
function makeImg(){
    const myImg = document.createElement("img");
    const imageDiv = document.getElementById("#myImageDiv");

    myImg.setAttribute("src", "./myNonExistantImage.png");
    imageDiv.append(myImg)
}

````

Using vanilla javascript write a similar function that creates a square, red div that measures 300px by 300px. You can use inline styling or create classnames and provide css for the classnames.

Write the same function in JQuery.

Extra Credit: What would be the method used in React to do the same thing?  How might that look?
*/