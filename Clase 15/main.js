let input = document.querySelector("input")
let agregar = document.querySelector("#agregar")
let ul = document.querySelector("ul")

agregar.addEventListener ("click", function(){
    
    const itemName = input.value;

    if (itemName !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = itemName
        
        const eliminar = document.createElement("button")
        eliminar.className = "eliminar";
        eliminar.textContent = "Eliminar";
            
        ul.appendChild(li);
        li.appendChild(p);
        li.appendChild(eliminar)
        
        eliminar.addEventListener("click", function(){
            ul.removeChild(li)
        })

        input.value = ""
    }
})
