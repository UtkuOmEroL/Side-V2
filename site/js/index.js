const auth = JSON.parse(localStorage.getItem("user"))
const userInformation = document.querySelector(".user-information")

userInformation.innerHTML = `${auth.nickname}`