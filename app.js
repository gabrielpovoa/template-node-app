const DeleteOrUpdateOp = document.getElementById('UpdateOrDelete')
const OptionsBox = document.querySelector('.options')

const UpdateBox = document.querySelector('.update');
const updateOp = document.getElementById('update');

const DeleteBox = document.querySelector('.delete');
const deleteOp = document.getElementById('delete');
const deleteButton = document.getElementById('deleteButton');
const garbageSound = document.getElementById('garbage-sound')
const backButton = document.getElementById('back')

const menuOp = document.querySelector('.fa-solid')
console.log(menuOp)


DeleteOrUpdateOp.onclick = () => {
    OptionsBox.classList.toggle('active')
    DeleteBox.classList.remove('active')
    UpdateBox.classList.remove('active')
    menuOp.classList.toggle('fa-xmark')

}

deleteOp.onclick = () => {
    DeleteBox.classList.toggle('active')
    OptionsBox.classList.remove('active')
    UpdateBox.classList.remove('active')

}

updateOp.onclick = () => {
    UpdateBox.classList.toggle('active')
    DeleteBox.classList.remove('active')
    OptionsBox.classList.remove('active')
}

backButton.onclick = () => {
    UpdateBox.classList.remove('active')
    DeleteBox.classList.remove('active')
    OptionsBox.classList.remove('active')
}

deleteButton.onclick = () => {
    UpdateBox.classList.remove('active')
    OptionsBox.classList.remove('active')
    garbageSound.play()
    setInterval(() => {
        DeleteBox.classList.remove('active')
        let users = document.querySelector('.user')
        users.style.display = "none";
    }, 500);
}