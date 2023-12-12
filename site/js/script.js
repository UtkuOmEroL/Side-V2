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
    if ( kayit.nickname != "" && kayit.password != "" )
    {
        window.location.href = '/site/giris.html';
    }
}
