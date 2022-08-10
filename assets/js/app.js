// formulario
const input = document.querySelector('.dateSearch');

// input
const dateInput = document.querySelector('.dateInput');
// mostrar a data
const date = document.querySelector('.inputDate');

// imagem/video
const image = document.querySelector('.renderImage');
// texto
const explanation = document.querySelector('.explanation');

async function sendRequest() {
    const apiKey = "8P2j0QGaoHInbAjR8xGSJSLcqpC6AXwC6O2xS7ro";
    const apiResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16
  console.log(apiResponse);

    if (apiResponse.status === 200) {
      const data = await apiResponse.json();
      renderApodImage(data);
    }
}

function renderApodImage(data) {

  if (data) {
    if(data.media_type === 'video') {
      image.src = data.url;
    } else if (data.media_type === 'image') {
      image.src = data.url;
    }

    date.innerHTML = data.date;
    // date.innerHTML = dateInput.value;
    explanation.innerHTML = data.explanation;
  }
}

sendRequest();

input.addEventListener('submit', (event) => {
  event.preventDefault();
  sendRequest();
});





function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}
