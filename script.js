function reset() {
    location.reload(true);
}

function submit() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    



    output.textContent = input;
}