// (function() {
//   var text = 'обычно это именно функция', // Текст, который надо найти
//     regexp = new RegExp(text, 'i');
//
//   if (regexp.exec(document.getElementById('text').innerHTML)) {
//     // Если нашло, то выполнить это
//     var reg = new RegExp(text, 'g');
//     document.getElementById('text').innerHTML = document.getElementById('text').innerHTML.replace(reg, '<span style="color: red">' + text + '</span>');
//   } else {
//     // Если не нашло, то выполнить это
//     console.log('Текст не найдет');
//   };
// }());

// new old

const searchBtn = document.querySelector('.search-button');


function findWord() {
  let searchInput = document.querySelector('.search-input');
  let searchWord = searchInput.value;

  // const text = document.querySelector('.container');

  const textArray = [];

  const textNode = document.querySelectorAll('.item');
  const text = Array.prototype.slice.call(textNode);
  textArray.push(text);

  let regExp = new RegExp(searchWord, 'i');

  for (let i = 0; i < textArray[0].length; i++) {
    // console.log(textArray[0][i].textContent);
    if (regExp.exec(textArray[0][i].textContent) && searchWord !== '') {
      let reg = new RegExp(searchWord, 'gi');
      textArray[0][i].innerHTML = textArray[0][i].innerHTML.replace(reg, `<span class="hl">${searchWord}</span>`);
      console.log('нашел');
    } else {
      console.log('ошибка');
    }
  }


  // let wordMatch = document.querySelector('.word-match');
  //
  // let regExp = new RegExp(searchWord, 'i');
  //
  // if (regExp.exec(text.textContent) && searchWord !== '') {
  //   let reg = new RegExp(searchWord, 'gi');
  //
  //   console.log(searchWord);
  //   let match = text.textContent.match(reg).length;
  //   if (match !== 0) {
  //     wordMatch.innerHTML = `Количество совпадений: ${match}`;
  //   }
  //   text.innerHTML = text.textContent.replace(reg, `<span class="hl">${searchWord}</span>`);
  //   console.log('нашел');
  // } else {
  //   wordMatch.innerHTML = 'Ничего не найдено!';
  //   console.log('ошибка');
  // }
}

searchBtn.addEventListener('click', findWord);

// test js

// const container = document.querySelector('.container');
// const item = document.querySelectorAll('.item');
// const itemArray = Array.prototype.slice.call(item);



// console.log(itemArray);
//

// const endpoint = itemArray[0];

// const cities = []; // мой массив с айтемами
// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data));

// cities.push(itemArray);



// console.log(cities[0]);
//
// for (let i = 0; i < cities[0].length; i++) {
//   const list = cities[0][i].textContent;
//   console.log(list);
//   const matchArray = list
//   console.log( cities[0][i].textContent);
// }

// alert(cities[0]);

// function findMatches(wordToMatch, cities) {
//   return cities.filter(place => {
//     // here we need to figure out if the city or state matches what was searched
//     const regex = new RegExp(wordToMatch, 'gi');
//     return place.city.match(regex) || place.state.match(regex)
//   });
// }
//
// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }
//
// function displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray.map(place => {
//     const regex = new RegExp(this.value, 'gi');
//     const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//     const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `;
//   }).join('');
//   suggestions.innerHTML = html;
// }
//
// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');
//
// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);

