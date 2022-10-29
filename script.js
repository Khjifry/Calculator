const numberItemsAll = document.querySelectorAll(".number-item");
const operatorItemsAll = document.querySelectorAll(".operator-item");
const itemsContainer = document.querySelector("#items-container");
const equalItem = document.querySelector("#equal-item");
const delItem = document.querySelector("#del-item");
const dotItem = document.querySelector("#dot-item");
const minItem = document.querySelector("#min-item");
const percentItem = document.querySelector("#percent-item");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
for (let i = 0; i < numberItemsAll.length; i++) {
    numberItemsAll[i].addEventListener('click', function(){
        if(two.innerHTML == "" && one.innerHTML == "0"){
            one.innerHTML = numberItemsAll[i].textContent
        }
        else if(two.innerHTML == "" && one.innerHTML !== "0" && numberItemsAll[i] !== "0"){
            one.innerHTML += numberItemsAll[i].textContent
        }
        else if(two.innerHTML == "" && three.innerHTML == "0"){
            three.innerHTML = numberItemsAll[i].textContent
        }
        else if(two.innerHTML !== "" && three.innerHTML !== "0" && numberItemsAll[i] !== "0"){
            three.innerHTML += numberItemsAll[i].textContent
        }

    })
}
for (let j = 0; j < operatorItemsAll.length; j++) {
    operatorItemsAll[j].addEventListener('click', function(){
            if(one.innerHTML == "" || one.innerHTML.endsWith(".") || one.innerHTML == "-"){
                two.innerHTML = ""
            }
            else if(three.innerHTML !== "" && three.innerHTML.endsWith(".") == false && three.innerHTML !== "-"){
                    one.innerHTML = WorkerWork()
                    two.innerHTML = operatorItemsAll[j].textContent
                    three.innerHTML = ""
            }
            else{
                two.innerHTML = operatorItemsAll[j].textContent
            }
    })
}
equalItem.addEventListener('click', function(){
    if(one.innerHTML !== "" && two.innerHTML !== "" && three.innerHTML !== ""){
        one.innerHTML = WorkerWork()
        two.innerHTML = ""
        three.innerHTML = ""
    }
})
dotItem.addEventListener('click', function(){
    if(one.innerHTML !== "" && two.innerHTML == "" && one.innerHTML.includes(".") == false && one.textContent !== "-"){
        one.innerHTML += dotItem.textContent
    } else if(two.innerHTML !== "" && three.innerHTML == ""){
        two.innerHTML = two.innerHTML
    } else if(two.innerHTML !== "" && three.innerHTML !== "" && three.innerHTML.includes(".") == false && three.textContent !== "-"){
        three.innerHTML += dotItem.textContent
    }
})
function WorkerWork(){
    let k = Number(one.innerHTML);
    let l = Number(three.innerHTML);
    if(two.innerHTML == '/'){
        return k / l
    }
    else if(two.innerHTML == '+'){
        return k + l
    }
    else if(two.innerHTML == '-'){
        return k - l
    }
    else if(two.innerHTML == '*'){
        return k * l
    }
    else{
        return ""
    }
}
delItem.addEventListener('click', function(){
    if(two.innerHTML == "" && one.innerHTML !== ""){
        let q = one.innerHTML.split("");
        let y = q.reverse()
        delete y[0]
        y = q.reverse()
        let x = y.join("")
        one.innerHTML = x
    } else if(two.innerHTML !== "" && three.innerHTML == ""){
        two.innerHTML = ""
    } else if(three.innerHTML !== ""){
        let o = three.innerHTML.split("");
        let p = o.reverse()
        delete p[0]
        p = o.reverse()
        let w = p.join("")
        three.innerHTML = w
    } else{
        one.innerHTML = ""
        two.innerHTML = ""
        three.innerHTML = ""
    }
})
minItem.addEventListener('click', function(){
    if(one.innerHTML == ""){
        one.innerHTML += minItem.textContent
    } else if(two.innerHTML == ""){
        two.innerHTML = two.innerHTML
    } else if(three.innerHTML == ""){
        three.innerHTML += minItem.textContent
    }
})
