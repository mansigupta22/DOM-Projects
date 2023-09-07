const form = document.querySelector('form')

// this usecase will give us empty value
// const weight = parseInt(document.querySelector('#weight').value)


form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    } 
    else {
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        // show the results
        results.innerHTML = `<span>${BMI}</span>`

        // if (parseInt(BMI) < 18) {
        //     results.innerHTML = `<span>${BMI} you are under weight</span>`
        // } else if (parseInt(BMI) > 24) {
        //     results.innerHTML = `<span>${BMIi} you are over weight</span>`
        // } else if (parseInt(BMI) > 18 || parseInt(BMI) < 24) {
        //     results.innerHTML = `<span>${BMI} you are in normal range</span>`
        // }
    }
})

