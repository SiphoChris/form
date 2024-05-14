let firstname = document.getElementById("name")
let lastName = document.getElementById("lastname")
let submit = document.getElementById("sub-btn")
let clear = document.getElementById("cls-btn")

let friends = []

submit.addEventListener("click", () => {

  let friend = {
    name: firstname.value,
    surname: lastName.value
  }

  friends.push(friend)

  console.table(friends)
});

clear.addEventListener('click', () => {
    firstname.value = ''
    lastName.value = ''
})