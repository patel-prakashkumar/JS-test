// Write a function that logs to the console numbers 1 to 100.
//
function numberRander100() {
  for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 == 0) {
      console.log(`${i} Jackpot!!!!`); continue;
    } else if (i % 3 === 0) {
      console.log(`${i} This is divisible by 3`); continue;
    } else if (i % 5 === 0) {
      console.log(`${i} This is divisible by 5`); continue;
    }
    console.log(i);
  }
}
numberRander100()


// Main theme: DOM manipulation
// image Url  ://www.prosa.dk/fileadmin/_processed_/f/7/csm_HYF_ID_FB_EVENT_686httpsc1dc718.png
// the button is clicked, insert an <img> tag to the html with a random image

const btn = document.createElement('button');
btn.innerHTML = "Click Me To Create Image";
document.body.appendChild(btn);
btn.addEventListener('click', () => {
  const img = document.createElement('img');
  img.classList.add("mystyle");
  img.setAttribute("src", "https://www.prosa.dk/fileadmin/_processed_/f/7/csm_HYF_ID_FB_EVENT_686c1dc718.png")
  document.body.appendChild(img);
})

// Main theme: Async API calls
// Display thefirst_nameof the first three users inthe DOM


const url = "https://reqres.in/api/users"
async function fetchUser() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result)
  const firstName = result.data.map(element => element.first_name)
  return firstName.slice(0,3);
  };
  
fetchUser().then(name=> {
  console.log(name)

});


// create class with 1 method

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  logProduct() {
    return `${this.name} cost ${this.price} kr.`
  }
}
const table = new Product('table', 1200);
console.log(table.logProduct());

