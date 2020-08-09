console.log("connected")

const sentenceTag = document.querySelector('input[type="text"]')
const typefaceMenu = document.querySelector('select[name="typeface"]')
const typeSizeSlider = document.querySelector('input[name="typesize"]')
const lineHeightSlider = document.querySelector('input[name="lineheight"]')
const letterSpacingSlider = document.querySelector('input[name="letter-spacing"]')
const italicCheckbox = document.querySelector('input[name="italic"]')
const fontWeightSlider = document.querySelector('input[name="font-weight"]')
const colorButtons = document.querySelectorAll('.colors div')

const outputTag = document.querySelector('.output')
const originalText = outputTag.value
const typeSizeDisplay = document.querySelector('.panel__control--font-size')
const lineHeightDisplay = document.querySelector('.panel__control--line-height')
const letterSpacingDisplay = document.querySelector('.panel__control--letter-spacing')
const fontWeightDisplay = document.querySelector('.panel__control--font-weight')

sentenceTag.addEventListener('keyup', function () {
  outputTag.value = this.value ? this.value : originalText
})

outputTag.addEventListener('keyup', function () {
  sentenceTag.value = this.value
})

typeSizeSlider.addEventListener('input', function () {
  outputTag.style.fontSize = this.value + 'px'
  typeSizeDisplay.innerHTML = this.value + 'px'

})

lineHeightSlider.addEventListener('input', function () {
  outputTag.style.lineHeight = this.value
  lineHeightDisplay.innerHTML = this.value
})

letterSpacingSlider.addEventListener('input', function () {
  outputTag.style.letterSpacing = this.value + 'px'
  letterSpacingDisplay.innerHTML = this.value + 'px'
})

italicCheckbox.addEventListener('change', function () {
  outputTag.style.fontStyle = this.checked ? 'italic' : 'normal'
})

typefaceMenu.addEventListener('input', function () {
  outputTag.style.fontFamily = this.value
})

fontWeightSlider.addEventListener('input', function () {
  outputTag.style.fontWeight = this.value
  fontWeightDisplay.innerHTML = this.value
})

colorButtons.forEach(button => {
  button.addEventListener('click', function () {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color
    colorButtons.forEach(button => {
      button.classList.remove('selected')
    })
    this.classList.add('selected')
  })

})


