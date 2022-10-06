const DeleteOrUpdateOp = document.getElementById('UpdateOrDelete')
const OptionsBox = document.querySelector('.options')

const UpdateBox = document.querySelector('.update');
const updateOp = document.getElementById('update');

const DeleteBox = document.querySelector('.delete');
const deleteOp = document.getElementById('delete');
const backButton = document.getElementById('back')


DeleteOrUpdateOp.onclick = () => {
    OptionsBox.classList.toggle('active')
    DeleteBox.classList.remove('active')
    UpdateBox.classList.remove('active')
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