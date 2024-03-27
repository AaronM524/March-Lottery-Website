// Create an Array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') //starting name input
    const name = nameInput.value.trim() //get the TRIMMED value of the input box 
namesArray.push(name)//add the name to the end of the array
displayNames() // Call the displayNames function to update the list

nameInput.value = '' // Clear the input after adding the name 

}

function displayNames () {
    const nameList = document.getElementById('nameList') // Get the list element
    nameList.innerHTML = '' // Clear the previous list
  
    for (let i = 0; i < namesArray.length; i++) {
      // Loop through the names array
      const name = namesArray[i] // Get the current name
  
      const li = document.createElement('li') // Create a new list item element
      li.className = 'list-group-item' // Set the class for the list item
  
      const span = document.createElement('span') // Create a new span element
      span.textContent = name // Set the text content of the span to the name
  
      li.appendChild(span) // Append the span to the list item
      nameList.appendChild(li) // Append the list item to the list
    }
  }
  
  document.getElementById("addNameBtn").addEventListener('click', addName)


