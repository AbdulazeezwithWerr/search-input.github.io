let input = document.querySelector('#elastic')

input.addEventListener("input" , (e) => {
    console.log(e);
    console.log(e.target.value.trim());

    let val = e.target.value.trim();
    let elasticItems = document.querySelectorAll('#ul li');
    if(val != ''){
        elasticItems.forEach(function (elem){
            if(elem.innerText.search(val) == -1){
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else{
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else{
        elasticItems.forEach(function (elem){
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        })
    }
})


function insertMark(string, pos, len){
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len);
}