let list = document.querySelector("#list")
let addTaskButton = document.querySelector("#buttonVisit")



addTaskButton.addEventListener("click",(e)=>{
    
    console.log(e)

    let div = document.createElement("li")
    div.style.display = "inline-block"
    div.setAttribute("align", "center")
    let divContent = document.createElement("div")
    div.setAttribute('align', 'center');
    divContent.setAttribute('align', 'center');
    div.appendChild(divContent)


    let makeVisible = document.getElementById("interactiveButtonSaveTask").style.display = "block"
    let makeVisibleTwo = document.getElementById("interactiveInput").style.display = "block"
    makeVisibleTwo = document.getElementById("interactiveInput").setAttribute('align', 'center');
    makeVisible = document.getElementById("interactiveButtonSaveTask").setAttribute('align', 'center')

    
    let makeVisibleButton = document.querySelector("#interactiveButtonSaveTask")

    makeVisibleButton.addEventListener("click", () => {
        z = document.getElementById("interactiveInput").value
        input = z
        console.log(input)

        let interactiveInput = document.createElement("input")
        interactiveInput.type = "string"
        interactiveInput.setAttribute('readonly', 'readonly');
        interactiveInput.value = input

        divContent.appendChild(interactiveInput)
        list.appendChild(div)

        // delete and edit button 

        let editDeleteDiv = document.createElement("div")

        let interactiveDeleteButton = document.createElement("button")
        interactiveDeleteButton.innerText = "delete"
        interactiveDeleteButton.setAttribute('align', 'center');

        let interactiveEditButton = document.createElement("button")
        interactiveEditButton.innerText = "edit"
        interactiveEditButton.setAttribute('align', 'center');

        
        editDeleteDiv.appendChild(interactiveDeleteButton)
        editDeleteDiv.appendChild(interactiveEditButton)

        divContent.appendChild(editDeleteDiv)

        input.value = ""

        // double click action

        divContent.addEventListener("dblclick", function(){
            alert("good lcick")
            divContent.style.textDecoration = "underline"
        })


        interactiveEditButton.addEventListener("click", function(){
            if(
                interactiveEditButton.innerText.toLowerCase() == "edit"){
                interactiveEditButton.innerText = "save"
                interactiveInput.focus()
                interactiveInput.removeAttribute("readonly")
            }else{
                console.log("else is triggered")
                interactiveEditButton.innerText = "edit"
                interactiveInput.setAttribute('readonly', 'readonly');
            }

            interactiveDeleteButton.addEventListener("click",function(){
                alert("good click")
                list.removeChild(div)
            })
           
        })

    })



})





