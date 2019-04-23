let redir = function () {
    let year = document.getElementById("yearOption").value;
    let month = document.getElementById("monthOption").value;
    document.location.href = `/main/events/${year}/${month}`
}

document.getElementById("buttonSubmit").addEventListener("click",redir);