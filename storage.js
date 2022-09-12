document.getElementById('btn-add-name').addEventListener('click', function(){
    const nameField = document.getElementById('add-name')
    const nameValue = nameField.value
    console.log(nameValue)
    localStorage.setItem('name', nameValue)
})

document.getElementById('btn-add-age').addEventListener('click', function(){
    const ageField = document.getElementById('add-age')
    const ageValue = ageField.value
    console.log(ageValue)
    localStorage.setItem('age', ageValue)
})

document.getElementById('btn-remove-name').addEventListener('click', function(){
    localStorage.removeItem('name')
})

document.getElementById('btn-remove-age').addEventListener('click', function(){
    localStorage.removeItem('age')
})

document.getElementById('btn-remove-all').addEventListener('click', function(){
    localStorage.clear()
})