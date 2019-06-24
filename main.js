const imagesContainer = document.querySelector("#imageContainer");
const firstImages = imagesContainer.querySelectorAll("img");

function changeFirstImage() {
	const source = this.src;
	const newSource = source.substr(0, source.length - 4);
	this.src = newSource + "a.jpg";
}

function returnFirstImage() {
	const source = this.src;
	const newSource = source.substr(0, source.length-5);	
	this.src = newSource + ".jpg";
}

firstImages.forEach(function(firstImage) {
	firstImage.addEventListener("mouseenter", changeFirstImage);
	firstImage.addEventListener("mouseout", returnFirstImage);
});


function changeImage(image) {
	
	const mainImage = document.getElementById("mainImage");
	
	const allImages = document.querySelectorAll(".otherProductImages img");
	
	mainImage.src = image.src;
	
	allImages.forEach(allImage => {
		if (allImage.src === mainImage.src) {
			allImage.style.border = "1px solid #ddd";
		} else {
			allImage.style.border = "1px solid transparent";
		}
	});
	
}
	
	
/********** Proba  ************/

function changeMenu() {
   var box = document.getElementById("open");
   var icon = document.querySelector(".icon");
   var dropMenu = document.querySelector(".open ul");
   
   if (box.style.display === "block" ) {
	   box.style.display = "none";
	   icon.innerHTML = "&#9776;";
	   
   }  else {
	   box.style.display = "block";
	   icon.innerHTML = "&#215;";
	    
	  
   }
   
   
   }
   
  
	
	
		


