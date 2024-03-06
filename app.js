const API_KEY = ""

const submitIcon = document.querySelector("#submit-icon")
const inputPromt = document.querySelector("input")
const imageSection = document.querySelector('.image-section')
const getImages= async () =>{
    const options = {
        method: "POST", 
        headers:{
            "Authorization" :`Bearer ${API_KEY}`,
            "Content-Type" :"application/json"
        },
        body : JSON.stringify({
            prompt: inputPromt.value,
            n :4,
            size :"1024x1024"
        })
    }
    try{
        const response = await  fetch('https://api.openai.com/v1/images/generations',options)
        const data = await response.json(); 

        data?.data.forEach( imageObject =>{
            const imageContainer = document.createElement('div')
            imageContainer.classList.add('image-container')
            const ImageElement = document.createElement('img')
            ImageElement.setAttribute('src', imageObject.url)
            imageContainer.append(ImageElement)
            imageSection.append(imageContainer)
        })
    }
    catch(error){
        console.error(error)
    }
}

submitIcon.addEventListener('click', getImages)