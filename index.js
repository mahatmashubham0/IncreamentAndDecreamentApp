const conterValue = document.querySelector("#counter");

const increament = () => {
    // get value from UI
    let value  = parseInt(conterValue.innerText);
    // increament the value
    value = value + 1;
    // set the increament value to UI
    conterValue.innerText = value;
}

const decreament = () =>{
      // get value from UI
      let value  = parseInt(conterValue.innerText);
      // increament the value
      value = value - 1;
      // set the increament value to UI
      conterValue.innerText = value;
}

const reset = () => {
    conterValue.innerText = 0;
}