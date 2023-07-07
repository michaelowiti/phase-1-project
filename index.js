//this function fetches all the barbers

function fetchBarbers(){
 fetch("https://barbers.onrender.com/barbers")
.then(res=>res.json())
.then(data=>renderBarber(data))
.catch(error => console.error(error));
}

//this function fetches only the selected barber
 async function fetchSelectedBarber(barberId){
    return fetch(` https://barbers.onrender.com/barbers/${barberId}`)
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

         li.addEventListener('click',displayBarberInfo)// when the list of barbers/stylist is clicked it displays their works

    
        });  
    }

async function displayBarberInfo(e){
 
    
    const barberId=e.target.id
    const barber= await fetchSelectedBarber(barberId)
    

    const image=document.createElement("img")
    const name=document.createElement("h1")
    const cost=document.createElement("h2")
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
    //mydiv.append(name)
    //mydiv.append(cost)
    mydiv.append(image)
    mydiv.append(style1)
    mydiv.append(style2)
    mydiv.append(style3)
            
             
    //  const template = `<img src='${barber.photo}'><h1>${barber.name}</h1><h1>${barber.price}</h1><img src='${barber.style1}'><img src='${barber.style2}'><img src='${barber.style3}'><button>Book Appointment</button>`;
    //  mydiv.innerHTML = template;

     
}


const delfeedback=document.getElementById("deletebtn")// deletes the feedback with the matching id
delfeedback.addEventListener('click',deleteFeedback)
const config={
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
   
}
function deleteFeedback(e){
    fetch("https://barbers.onrender.com/feedback/10",config)
    
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error => console.error(error));

}


const bookfom=document.getElementById("Apfom")
bookfom.addEventListener('submit',addBooking)
function addBooking(e){
    
    e.preventDefault()
    
    const nameVal=e.target.querySelector("#name")
    const numberVal=e.target.querySelector("#number")
    const timeVal=e.target.querySelector("#time")
    
    const bookingData={
        name:nameVal.value,
        phone:numberVal.value,
        time:timeVal.value,
        }

        const obj={
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                     Accept: "application/json",
                         },
                  body:JSON.stringify(bookingData),
            }

        

        fetch("https://barbers.onrender.com/bookings",obj)
        

       

    
}





const del=document.getElementById("delbtn")//this function deletes the booking with the matching id
del.addEventListener('click',deleteBooking)
const configurationObj={
    method: "DELETE",
   headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
   }}
function deleteBooking(e){
    
    fetch("https://barbers.onrender.com/bookings/3",configurationObj)
    
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error => console.error(error));
}





const submitFeed=document.getElementById("fom")
submitFeed.addEventListener('submit',addFeedback)

function addFeedback(e){
    e.preventDefault()
   

     const nameVal=e.target.querySelector("#name")
    const emailVal=e.target.querySelector("#email")
     const messageVal=e.target.querySelector("#message")

     const feedbackData={
        name:nameVal.value,
        phone:emailVal.value,
        time:messageVal.value,
        }

        const object={
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                    },
             body:JSON.stringify(feedbackData),
       }


       fetch("https://barbers.onrender.com/feedback",object)


}

//all functions are perfectly working in this project


 document.addEventListener('DOMContentLoaded',fetchBarbers)









 





