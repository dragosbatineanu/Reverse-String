// Variables declarations

const reverseArray = []

// Getting the input text and reversing it

const reverseString = () => {
    const form = document.querySelector('#string-input').value
    const errorMsg = document.getElementById('error-message')
    errorMsg.innerHTML = ""

    if (form) {

        const reversedForm = form.split("").reverse().join("")
        reverseArray.push(reversedForm)
        render(reverseArray)
        document.querySelector('#string-input').value = ""
    }
    else {
        errorMsg.innerHTML = "Please fill the input form!"
    }
}

// Rendering a new element on the html page with the result

const render = (array, classId) => {
    const element = document.getElementById('results')

    for (i = 0; i < array.length; i++) {
        const paragraph = document.createElement("p")
        const node = document.createTextNode(`${array[i]}`)
        const bottomLine = document.createElement("br")
        paragraph.appendChild(node)
        paragraph.appendChild(bottomLine)

        const button = document.createElement("button")
        button.textContent = 'x'
        button.className = `delete`
        button.appendChild(paragraph)
        button.addEventListener('click', () => {
            button.parentNode.removeChild(paragraph)
            button.remove()
        })

        // button.addEventListener = deleteText()

        element.append(paragraph, button)
        array.pop()
    }
}
