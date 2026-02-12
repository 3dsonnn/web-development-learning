import { create, all } from 'https://cdn.jsdelivr.net/npm/mathjs@11/+esm'

const math = create(all)
const buttons = Array.from(document.getElementsByTagName('button'))
const display = document.getElementById('display')

buttons.forEach(cur => {
  cur.addEventListener('click', () => {
    console.log(`You clicked on the button %c${cur.textContent}`, 'color: blue')

    if (cur.textContent == 'Clear')
      display.textContent = ''
    else if (cur.textContent == '=')
    {
      try {
        display.textContent = math.evaluate(display.textContent)
      } catch(err) {
        alert(`Error: ${err.message}`)
      }
    }
    else
      display.textContent += cur.textContent
  })
});
