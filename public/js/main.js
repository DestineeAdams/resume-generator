console.log("test");

const buttonElement = document.querySelector("#btn");
    
buttonElement.addEventListener("click", sendValues);


// get the values and turn them into and object
function sendValues() {
    const inputs = document.querySelectorAll("input");
    const textareas = document.querySelectorAll("textarea");

    let obj = {};
    
    inputs.forEach(i => {
        obj[i.name] = i.value;
    });
    
    textareas.forEach(i => {
        obj[i.name] = i.value;
    });
    
    console.log(obj);
    // userBasicInfo.push(obj)
    // console.log(userBasicInfo);
    
    
    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    })
}
  

