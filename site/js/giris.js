let userInformation = {
    nickname: "",
    password: ""
}

const checkUser = (value, name) => {
    userInformation = {...userInformation, [name] : value}
    console.log(userInformation)
}

const giris = () => {
    const auth = JSON.parse(localStorage.getItem("user"))
    if(userInformation.nickname == auth.nickname && userInformation.password == auth.password){
        window.location.href = '/site/index.html';
    }
}

let kayit = {
    name: "",
    surname: "",
    nickname: "",
    password: "",
}

const view = (value, name) => {
    kayit = {...kayit, [name] : value}
}

const kayitOl = () => {
    localStorage.setItem("user", JSON.stringify(kayit))
    console.log(JSON.parse(localStorage.getItem("user")))
    window.location.href = '/site/giris.html';
}

