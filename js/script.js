//arr of ob - "quotes"
// ≥ 5 quotes
// keys: quote/source, ≥1 citation, ≥1 year, ≥1 other
//getRandomQuote()
//printQuote(getRandomQuote()) - match layout and style of ex
//auto refresh
//random color each ref

const quotes = [
  {
    quote:
      "Try not to become a man of success, but rather try to become a man of value.",
    source: "Albert Einstein",
    citation: "",
    year: "",
    age: "",
  },
  {
    quote:
      "My concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.",
    source: "Abraham Lincoln",
    citation: "",
    year: "",
    age: "",
  },
  {
    quote:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    source: "Martin Luther King, Jr.",
    citation: "Strength to Love",
    year: "1963",
    age: "34",
  },
  {
    quote:
      "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their creator with certain unalienable rights, that among these are life, liberty and the pursuit of happiness.",
    source: "Second Continental Congress",
    citation: "Declaration of Independence",
    year: "1776",
    age: "",
  },
  {
    quote: "The time is always right to do what is right.",
    source: "Martin Luther King, Jr.",
    citation: "Oberlin College commencement speech",
    year: "1965",
    age: "36",
  },
];

function getRandomQuote() {
  let n = Math.floor(Math.random() * quotes.length);
  return quotes[n];
}

function getRandomColor() {
  let color = "rgb(";
  for (let i = 1; i < 4; i++) {
    let n = Math.floor(Math.random() * 255);
    if (i < 3) {
      color += n + ",";
    } else {
      color += n;
    }
  }
  color += ")";
  return color;
}

function printQuote() {
  let q = getRandomQuote();
  let color = getRandomColor();
  let quotebox = document.getElementById("quote-box");
  let quoteline = quotebox.children[0];
  let sourceline = document.getElementsByClassName("source")[0];

  quoteline.innerText = q.quote;
  sourceline.innerHTML = `
  ${q.source}
  `;

  if (q.citation !== "") {
    sourceline.insertAdjacentHTML(
      "beforeend",
      `<span class="citation">${q.citation}</span>`
    );
  }
  if (q.year !== "") {
    sourceline.insertAdjacentHTML(
      "beforeend",
      `<span class="year">${q.year}</span>`
    );
  }
  if (q.age !== "") {
    sourceline.insertAdjacentHTML("beforeend", `, at age ${q.age}`);
  }

  document.body.style.backgroundColor = color;
}

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

setInterval(printQuote, 5000);
