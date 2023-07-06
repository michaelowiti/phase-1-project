//this function fetches all the barbers

function fetchBarbers(){
 fetch("https://barbers.onrender.com/barbers")
.then(res=>res.json())
.then(data=>renderBarber(data))
.catch(error => console.error(error));
}

//this function fetches only the selected barber
 async function fetchSelectedBarber(barberId){
    return fetch(`https://barbers.onrender.com/barbers/${barberId}`)
    .then(resp => {
        if (!resp.ok) {
            throw new Error('Network response was not ok');
        }
        return resp.json();
    })
    .then(jsonifiedata=>jsonifiedata)
    
}


function renderBarber(barbers){
    const barblist=document.getElementById("maindiv")
    barbers.forEach(barb => {
        const li=document.createElement("li")
         li.textContent=barb.name
         li.id=barb.id
         barblist.append(li)

         li.addEventListener('click',displayBarberInfo)

    
        });  
    }

async function displayBarberInfo(e){
 
    
    const barberId=e.target.id
    const barber= await fetchSelectedBarber(barberId)
    

    const image=document.createElement("img")
    const name=document.createElement("h1")
    const cost=document.createElement("h1")
    const style1= document.createElement("img")
    const style2= document.createElement("img")
    const style3= document.createElement("img")
   // const btn=document.createElement("button")
    //btn.textContent="Book Appointment"

    image.src=barber.photo
    name.textContent=barber.name
    cost.textContent=barber.price
    style1.src=barber.style1
    style2.src=barber.style2
    style3.src=barber.style3

    mydiv=document.getElementById("portfolio")
    mydiv.innerHTML="" //The function clears the `mydiv` element before appending the HTML elements
                        // to ensure that only the details of the selected barber are displayed.
     
    // mydiv.append(btn)
    mydiv.append(name)
    mydiv.append(cost)
    mydiv.append(image)
    mydiv.append(style1)
    mydiv.append(style2)
    mydiv.append(style3)
            
             
    //  const template = `<img src='${barber.photo}'><h1>${barber.name}</h1><h1>${barber.price}</h1><img src='${barber.style1}'><img src='${barber.style2}'><img src='${barber.style3}'><button>Book Appointment</button>`;
    //  mydiv.innerHTML = template;

    
    
}
const del=document.getElementById("delbtn")
del.addEventListener('click',deleteFeedback)
const configurationObj={
    method: "DELETE",
   headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
   }}
function deleteFeedback(e){
    
    fetch("https://barbers.onrender.com/feedback/1",configurationObj)
    
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error => console.error(error));
}



 document.addEventListener('DOMContentLoaded',fetchBarbers)











