function addCodeExample() {

const CODE_EXAMPLE = `function toWeirdCase(string){
    let k = 0
    let res = ""
    for (i in string) {
        if (string[i] === " ") {
            k = 0
            res += " "
            ontinue
    }
    if (k % 2 == 0) res+=string[i].toUpperCase()
    if (k % 2 == 1) res+=string[i].toLowerCase()
    k++
    }   
    return res
}`

    const tagPre = document.getElementById("codeExample")
    const tagPreMobile = document.getElementById("codeExampleMobile")
    const code = document.createElement('code')
    const codeMobile = document.createElement('code')
    code.innerHTML = CODE_EXAMPLE
    codeMobile.innerHTML = CODE_EXAMPLE
    tagPre.append(code)
    tagPreMobile.append(codeMobile)
    hljs.highlightAll();
}

addCodeExample()
