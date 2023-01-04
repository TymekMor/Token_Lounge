import removeChildNodes from "./help.js";
import JsonFile from "./data.json" assert { type: "json" };

class token {
  constructor(
    id,
    coinImgUrl,
    coin,
    badges,
    gen,
    chainImgUrl,
    chain,
    phase,
    vipRanking
  ) {
    this.id = id;
    this.coinImgUrl = coinImgUrl;
    this.coin = coin;
    this.badges = badges;
    this.gen = gen;
    this.chainImgUrl = chainImgUrl;
    this.chain = chain;
    this.phase = phase;
    this.vipRanking = vipRanking;
  }
}
const renderToken = (coin, renderPlace) => {
  if (Object.keys(coin).length != 9) {
    return;
  }
  const token = document.createElement("li");
  const one = document.createElement("div");
  one.textContent = coin.id;
  const two = document.createElement("div");
  const twoImg = document.createElement("img");
  const twoText = document.createElement("div");
  twoImg.src = coin.coinImgUrl;
  twoText.textContent = coin.coin;
  two.append(twoImg, twoText);
  const three = document.createElement("div");
  coin.badges.forEach((badge) => {
    const badgeDiv = document.createElement("div");
    badgeDiv.className = "badge";
    const temp = (badgeDiv.textContent = badge.toUpperCase());
    if (temp == "KYC") {
      badgeDiv.classList.add(temp);
    } else if (temp == "AUDIT") {
      badgeDiv.classList.add(temp);
    } else if (temp == "SAFU") {
      badgeDiv.classList.add(temp);
    } else if (temp == "DOXX") {
      badgeDiv.classList.add(temp);
    }
    three.append(badgeDiv);
  });

  const four = document.createElement("div");
  four.textContent = coin.gen;

  const five = document.createElement("div");
  const fiveImg = document.createElement("img");
  const fiveText = document.createElement("div");
  fiveImg.src = coin.chainImgUrl;
  fiveText.textContent = coin.chain;
  five.append(fiveImg, fiveText);

  const six = document.createElement("div");
  const sixText = document.createElement("div");
  sixText.textContent = coin.phase.toUpperCase();
  six.append(sixText);
  if (coin.phase.toUpperCase() == "PRESALE") {
    const sixImg = document.createElement("img");
    sixImg.src = "../images/gif.gif";
    six.append(sixImg);
  }

  const seven = document.createElement("div");
  seven.textContent = coin.vipRanking;

  const eight = document.createElement("div");
  const eightButton = document.createElement("button");
  eightButton.textContent = "WEBSITE";
  eight.append(eightButton);

  token.append(one, two, three, four, five, six, seven, eight);
  renderPlace.append(token);
};

const renderTokenPage = (pageIndex, pageNumber) => {
  const tokenList = JsonFile;
  const index = pageIndex - 1;
  const main = document.querySelector("main");
  const mainPage = document.getElementById(`page0`).content.cloneNode(true);
  const renderPointPage = mainPage.querySelector(".tokens__list");
  const renderPointSlider = mainPage
    .querySelector(".tokens__slider")
    .querySelector("ul");

  let pageQuantity = tokenList.length / pageNumber;
  pageQuantity = Math.ceil(pageQuantity);
  removeChildNodes(renderPointSlider);

  for (let i = 1; i <= pageQuantity; i++) {
    const el = document.createElement("li");
    el.textContent = `${i}`;
    el.className = "slide";
    if (pageIndex == i) {
      el.className = "current";
    }
    el.addEventListener("click", (event) => {
      renderTokenPage(i, pageNumber);
      console.log(event.target);
    });

    renderPointSlider.append(el);
  }

  removeChildNodes(main);
  removeChildNodes(renderPointPage);

  tokenList.sort((a, b) => {
    return a.vipRanking - b.vipRanking;
  });
  const currentPage = tokenList.slice(index, index + pageNumber);
  currentPage.forEach((current) => {
    renderToken(current, renderPointPage);
  });

  main.appendChild(mainPage);
};
export default renderTokenPage;
