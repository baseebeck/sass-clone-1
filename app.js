// Tab Section
function tab1() {
    document.querySelector("#tab-1").className = "tab";
    document.querySelector("#tab-2").className = "hidden";
    document.querySelector("#tab-3").className = "hidden";
    document.querySelector("#tab-4").className = "hidden";
    
    document.querySelector(".tab-1").className = "tab-1";
    document.querySelector(".tab-2").className = "tab-2 inactive";
    document.querySelector(".tab-3").className = "tab-3 inactive";
    document.querySelector(".tab-4").className = "tab-4 inactive";
}

function tab2() {
    document.querySelector("#tab-1").className = "hidden";
    document.querySelector("#tab-2").className = "tab";
    document.querySelector("#tab-3").className = "hidden";
    document.querySelector("#tab-4").className = "hidden";
    
    document.querySelector(".tab-1").className = "tab-1 inactive";
    document.querySelector(".tab-2").className = "tab-2";
    document.querySelector(".tab-3").className = "tab-3 inactive";
    document.querySelector(".tab-4").className = "tab-4 inactive";
}

function tab3() {
    document.querySelector("#tab-1").className = "hidden";
    document.querySelector("#tab-2").className = "hidden";
    document.querySelector("#tab-3").className = "tab";
    document.querySelector("#tab-4").className = "hidden";
    
    document.querySelector(".tab-1").className = "tab-1 inactive";
    document.querySelector(".tab-2").className = "tab-2 inactive";
    document.querySelector(".tab-3").className = "tab-3";
    document.querySelector(".tab-4").className = "tab-4 inactive";
}

function tab4() {
    document.querySelector("#tab-1").className = "hidden";
    document.querySelector("#tab-2").className = "hidden";
    document.querySelector("#tab-3").className = "hidden";
    document.querySelector("#tab-4").className = "tab";
    
    document.querySelector(".tab-1").className = "tab-1 inactive";
    document.querySelector(".tab-2").className = "tab-2 inactive";
    document.querySelector(".tab-3").className = "tab-3 inactive";
    document.querySelector(".tab-4").className = "tab-4";
}


