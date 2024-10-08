var images = [
    {name: "Farzana Alam", url:"r1.jpeg"},
    {name: "Farzana Alam", url:"r2.jpeg"},
];
const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");
/*
btnEl.addEventListener("click", async function(){
        try{
            const response = await fetch(images);
            const data = await response.json();
            animeContainerEl.style.display = "block";
            animeImgEl.src = 
        } catch(error){

        }
})
*/

function gen(){
    try{
    
    
        btnEl.disabled = true;
         btnEl.innerText = "Loading"
        var randomIndex = Math.floor(Math.random() * images.length);
        var selectedImage = images[randomIndex];
    
        document.body.style.animeImgEl = "url('" + selectedImage.url + "')";
        animeNameEl.textContent = selectedImage.name;
        btnEl.innerText = "Marry Her";
        btnEl.disabled = true;

        animeContainerEl.style.display = "block";
  
    
    }catch(error){
        console.log(error);
    }
}


btnEl.addEventListener(
    "click",
     gen 
);
//init call
//generate();
