export { };
// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
let i: number;
for (i = 0; i < myNodelist.length; i++) {
  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close: HTMLCollectionOf<Element> = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function (e) {
    const div = close[i].parentElement;
    !!div ? div.style.display = "none" : console.log();
  })
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');

if (list != null) {
  list.addEventListener('click', function (ev) {
    let t: HTMLElement = <HTMLElement>ev.target
    if (t) {
      if (t.tagName === 'LI') {
        t.classList.toggle('checked');
      }
    }
  }, false);


}

// Create a new list item when clicking on the "Add" button
function newElement():void {
  const li: HTMLLIElement = document.createElement("li");
  const input: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
  let inputValue: string = input.value
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let myUrl: HTMLElement | null = document.getElementById("myUL")
    if (!!myUrl) {
      myUrl.appendChild(li);
    }  
  }
  input.value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
      const div = close[i].parentElement;
      !!div ? div.style.display = "none" : console.log();
    })
  }
}