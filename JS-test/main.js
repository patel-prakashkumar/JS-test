
function numberRander100() {
    for (let i = 1; i <= 100; i++) {
      
      if (i%3===0 && i%5==0) {
        console.log(`${i} Jackpot!!!!`); continue;
      }else if (i%3===0) {
        console.log(`${i} This is divisible by 3`);continue;
      }else if (i%5===0) {
        console.log(`${i} This is divisible by 5`);continue;
      }
      console.log(i);
    }
  }

  numberRander100()


// Main theme: DOM manipulation
// image Url  https://www.prosa.dk/fileadmin/_processed_/f/7/csm_HYF_ID_FB_EVENT_686c1dc718.png

const btn = document.createElement('button');
btn.innerHTML="Click Me To Create Image" ;
document.body.appendChild(btn);
btn.addEventListener('click',()=>{
const randNumber = Math.floor((Math.random() * 10) + 1);
  const img = document.createElement('img');
  img.classList.add("mystyle");
  img.setAttribute("src","https://www.prosa.dk/fileadmin/_processed_/f/7/csm_HYF_ID_FB_EVENT_686c1dc718.png")
   document.body.appendChild(img);
})

// Main theme: Async API calls


const url = "https://reqres.in/api/users"
async function fetchMoviesJSON() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  fetchMoviesJSON().then(data => {
   console.log(data)

  });


// create class

  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  const table = new Product('table', 1200);
  