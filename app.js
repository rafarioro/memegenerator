let form = document.getElementById('inputForm');


    //i am adding a counter here to include at the end of each ID name. I will interpolate it 
    //to distinguish ids. Before i added this, the top and bottom text was not showing
    //on successive images
    let count = 1;

    //listener for clicking submit button
    form.addEventListener('submit', function(event){


    //get input values
    event.preventDefault();
    const imageUrl = document.getElementById('imgUrl').value;
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;


    //generate image div container
    let memeDivImg = document.createElement('div');
    memeDivImg.id = "memeImageContainer" + `${count}`;
    memeDivImg.className = "memeImageContainer";
    document.body.appendChild(memeDivImg);

    //generate image url
    let imageSource = document.createElement('img');
    imageSource.src = `${imageUrl}`;
    imageSource.id = "imageSource" + `${count}`;
    document.getElementById("memeImageContainer" + `${count}`).appendChild(imageSource)

    //generate top text div within image container
    let topTextDiv = document.createElement('div');
    topTextDiv.id = "topTextDiv" + `${count}`;
    topTextDiv.className = 'topTextDiv';
    document.getElementById('memeImageContainer'  + `${count}`).appendChild(topTextDiv);

    // //generate bottom text div within image conatiner
    let bottomTextDiv = document.createElement('div');
    bottomTextDiv.id = 'bottomTextDiv' + `${count}`;
    bottomTextDiv.className = 'bottomTextDiv';
    document.getElementById('memeImageContainer'  + `${count}`).appendChild(bottomTextDiv)

    //add text to top and bottom divs
    document.getElementById("topTextDiv" + `${count}`).innerHTML = topText;
    document.getElementById("bottomTextDiv" + `${count}`).innerHTML = bottomText;
    

    //create a remove button
    let removeBtn = document.createElement('button');
    removeBtn.id = "removeBtn" + `${count}`;
    removeBtn.className = "removeBtn";
    removeBtn.textContent = "X"
    document.getElementById("memeImageContainer" + `${count}`).appendChild(removeBtn)

    //counter now increments to distinguish meme entries
    count++;

    //reset the form inputs
    document.getElementById("inputForm").reset();
   
    //listen for remove button click and see where it comes from
    removeBtn.addEventListener('click', function(event){
       
        //console.log(event.target.parentElement)
        //console.log(event.target.parentElement.className)
        event.target.parentElement.classList.toggle('removedMeme')

    });
});
