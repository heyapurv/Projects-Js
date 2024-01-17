const form = document.querySelector('form')
form.addEventListener('submit', (ev)=>{
    ev.preventDefault()
     
    const height = parseInt(document.querySelector('#height').value)
     
    const weight = parseInt(document.querySelector('#weight').value)

    const results = (document.querySelector('#results'))
     
    if(height === '' && weight ==='' || height < 0 && weight < 0 || isNaN(height) && isNaN(weight)){
        results.innerHTML = "Please give a valid height and weight"
    }
    else {
      const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //   show the result
    results.innerHTML =  `<span> ${bmi}</span>`
    }
})





