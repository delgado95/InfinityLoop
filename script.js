document.getElementById('btnCopy').addEventListener('click', btnCopy);

function btnCopy() {
  document.querySelector("#textarea").select();
  document.execCommand("copy");
}

function save() {
    const { text, number, caracter } = getDataByElementId(['text', 'number', 'caracter'])
    let value = formatMuiltText({text, number, caracter});
    setTexteareaValue(value)
}

function getDataByElementId(keys) {
    return keys.map((itemArr, index) => {
        console.log(keys[index])
        return { itemArr: document.getElementById(itemArr).value }
    })
}       

function setTexteareaValue(value) {
    document.getElementById(textarea).innerText = value;
}

function formatMuiltText({text, number, caracter}) {
    let texteareaValue;
    for (let i = 0; i < number; i++) {
        texteareaValue += `${text} \n`;
    }
    texteareaValue += caracter
    return texteareaValue;
}
