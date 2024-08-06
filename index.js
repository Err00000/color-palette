const getColorBtn = document.querySelector('#get-color')
const inputColor = document.querySelector('#input-color')
const colorsDiv = document.querySelector('#colors')
const selectBtn = document.querySelector('#types-of-colors')
getColorBtn.addEventListener('click', function () {
    const inputValue = inputColor.value.substring(1)
    const selectValue = selectBtn.value
    console.log(selectValue)
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputValue}&mode=${selectValue}`)
    .then(res => res.json())
    .then(data => {
        const setOfColors = data.colors.map((element) => element.hex.value)
        for(let i=1; i<=5; i++){
            document.querySelector(`#color${i}`).style.backgroundColor = setOfColors[i-1]
            document.querySelector(`#color-code${i}`).textContent = setOfColors[i-1]
        }
        }
    )
    })

