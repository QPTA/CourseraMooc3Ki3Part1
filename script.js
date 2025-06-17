function upDate(previewPic) {
    console.log("Event triggered");
    console.log("ALT:", previewPic.alt);
    console.log("SRC:", previewPic.src);

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
