"use strict";function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n,r,a,i,o=[{question:"Для чего Вы ищете онлайн курс по альтернативной истории?",answers:[{"Скучно, ищу что-то интересное и необычное":!1},{"Хочу узнать историческую правду":!1},{"Нам врали в школе, надо разобраться":!1},{"Американцы не летали на Луну":!1},{"Хочу потренироваться в определении идиотов":!1}]},{question:"Кем Вы являетесь в контексте текущего образования?",answers:[{"Школьник разных классов":!1},{"Студент определённого уровня":!1},{"Образование в прошлом":!1},{"Энное высшее":!1},{"Грызу и дальше":!1}]},{question:"Кем Вы себя ощущаете на просторах интернета?",answers:[{"Школота":!1},{"Стьюдент":!1},{"Диванный эксперт":!1},{"Полевой эксперт":!1},{"Точно всё не знаю":!1},{"Знаю всё, но не точно":!1}]},{question:"Какие вопросы альтернативной истории для Вас наиболее интересны?",answers:[{'"Полёты" на Луну снимал Стенли Кубрик в кинопавильоне на Земле?':!1},{"Почему скрывают катаклизм 19 века который засыпал здания по всему миру?":!1},{"Почему рухнул небоскрёб в который не попадал самолёт 11 сентября 2001 года?":!1},{"Монферран не мог сделать Александровскую колонну, она стояла до него?":!1},{"Антарктида, НЛО и немцы: кто напал на американцев в 1946-47 гг?":!1},{"Санкт-Петербург Пётр I не основал, а откопал?":!1}]},{question:'Знаете ли Вы канал "Песчаный Воин V" на Дзене?',answers:[{"Да, читал, но не согласен":!1},{"Да, подписан, поддерживаю":!1},{"Песчаный Воин - идиот":!1},{"Песчаный Воин - кто это?":!1}]}],s=[{name:'"Лунная афёра"',image:"./images/moon.png",link:"https://dzen.ru/suite/08067b75-a7ac-46e7-8a4c-72882f69a1b8?share_to=link"},{name:'"Засыпанные" здания по всему миру',image:"./images/building.png",link:"https://dzen.ru/suite/08067b75-a7ac-46e7-8a4c-72882f69a1b8?share_to=link"},{name:"11 сентября 2001 года",image:"./images/911.png",link:"https://dzen.ru/suite/92002a01-70b2-4671-9582-9e2d4877b41e?share_to=link"},{name:'"Украденная" история человечества',image:"./images/history.png",link:"https://dzen.ru/suite/bad5d39b-bf6f-4f91-9c8a-813724dc73b9?share_to=link"}],c=document.querySelector("#quiz"),u=document.createElement("button"),l=document.createElement("button"),d=document.createElement("p"),b=0;function m(e){return document.querySelector(".quiz-box__desc-steps").textContent="".concat(o.length),d.textContent="Шаг ".concat(e+1,"/").concat(o.length),d.classList.add("quiz-box__steps"),d}function f(t){var n=document.createElement("h2"),r=document.createElement("ul"),a=m(b);if(r.classList.add("quiz-box__list"),n.setAttribute("id","question"),n.classList.add("quiz-box__question"),n.textContent=t.question,b===t.length-1){var i=document.createElement("a"),o=document.createElement("img");i.setAttribute("href","https://dzen.ru/voinv"),i.setAttribute("target","_blank"),i.setAttribute("title","Перейти на канал Дзена"),i.classList.add("quiz-box__question-author"),o.setAttribute("src","../images/author.png"),i.append(o),n.append(i)}var s,d=0,f=e(t.answers);try{for(f.s();!(s=f.n()).done;){var _=s.value;r.append(p(Object.keys(_),d,Object.values(_))),d++}}catch(e){f.e(e)}finally{f.f()}return c.append(n),c.append(a),c.append(r),u.classList.add("quiz-box__button","next"),u.setAttribute("id","forward"),u.setAttribute("disabled",""),l.classList.add("quiz-box__button","prev"),l.setAttribute("id","back"),u.textContent="Далее",l.textContent="Назад",c.append(u),c.append(l),c}function p(e,t,n){var r=document.createElement("li"),a=document.createElement("input"),i=document.createElement("label");return r.classList.add("quiz-box__item"),a.classList.add("quiz-box__input"),console.log(b),3===b?a.setAttribute("type","checkbox"):a.setAttribute("type","radio"),a.setAttribute("name","answer"),a.setAttribute("id","".concat(t)),i.classList.add("quiz-box__label"),i.setAttribute("for","".concat(t)),i.setAttribute("id","answer_".concat(t)),i.textContent=e,"true"!=(n=String(n))||a.setAttribute("checked",""),r.append(a),r.append(i),r}function _(){0===b&&(document.getElementById("back").style.display="none")}function g(){c.innerHTML="",f(o[b]),h()}g(),_();var y=document.querySelector(".next");function h(){return document.querySelectorAll(".quiz-box__input").forEach((function(e){e.addEventListener("click",(function(e){y.removeAttribute("disabled"),r=e.currentTarget.id,void 0===n&&(n=r),(a=o[b].answers[r])[Object.keys(a)]=!0,console.log(n),console.log(r),r!=n?(i=o[b].answers[n])[Object.keys(i)]=3===b:(i=o[b].answers[n],3===b&&(i[Object.keys(i)]=!1)),n=r,console.log(o[b].answers)}))})),n}function q(e){var t=document.createElement("li"),n=document.createElement("a"),r=document.createElement("figure"),a=document.createElement("img"),i=document.createElement("figcature"),o=document.querySelector(".quiz-box__list");return t.classList.add("quiz-box__item"),n.classList.add("quiz-box__link"),n.setAttribute("href","".concat(e.link)),n.setAttribute("title","".concat(e.name)),n.setAttribute("target","_blank"),r.classList.add("quiz-box__figure"),i.classList.add("quiz-box__figcapture"),i.textContent="".concat(e.name),a.classList.add("quiz-box__image"),a.setAttribute("src","".concat(e.image)),r.append(a),r.append(i),n.append(r),t.append(n),o.append(t),o}u.addEventListener("click",(function(){if(h())if(b++,document.getElementById("back").removeAttribute("style"),b<o.length){g();var t=o[b].answers;console.log(t);var n,r=e(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;console.log(a),a[Object.keys(a)]&&y.removeAttribute("disabled")}}catch(e){r.e(e)}finally{r.f()}}else c.innerHTML='<h2 class="quiz-box__question">Рекомендуем Вам записаться на следующие курсы:</h2>\n            <button class="quiz-box__button button-result" onclick="location.reload()">По-новой</button>\n            <ul class="quiz-box__list"></ul>',function(e){var t=e[3].answers,n=0;t.forEach((function(e){if(e=e[Object.keys(e)])switch(n){case 0:q(s[0]);break;case 1:q(s[1]);break;case 2:q(s[2]);break;case 3:q(s[3])}n++}))}(o)})),l.addEventListener("click",(function(){b--,_(),g(),y.removeAttribute("disabled")}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbImFuc3dlciIsImFuc3dlckN1cnJlbnQiLCJjaGVja0N1cnJlbnQiLCJjaGVjayIsInF1aXpEYXRhIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiZGF0YUltYWdlIiwibmFtZSIsImltYWdlIiwibGluayIsIiRxdWVzdGlvbkl0ZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkZm9yd2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjdXJyZW50UXVpeiIsImNyZWF0ZVN0ZXBzIiwidGV4dENvbnRlbnQiLCJjb25jYXQiLCJsZW5ndGgiLCIkc3RlcHNEZXNjIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlQW5zd2VyTGlzdCIsIiR0aXRsZVF1ZXN0aW9uIiwiJGFuc3dlckxpc3QiLCJzZXRBdHRyaWJ1dGUiLCIkbGFzdEltYWdlTGluayIsIiRsYXN0SW1hZ2UiLCJhcHBlbmQiLCJfc3RlcCIsIm51bWJlcklkIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJpdGVtIiwidmFsdWUiLCJjcmVhdGVBbnN3ZXJET00iLCJPYmplY3QiLCJrZXlzIiwidmFsdWVzIiwiJGJhY2siLCIkYW5zd2VyTGFiZWwiLCIkZGVzY1N0ZXBzIiwiU3RyaW5nIiwiJGFuc3dlcklucHV0IiwiJGFuc3dlckl0ZW0iLCJpbm5lckhUTUwiLCJnZXRTZWxlY3RlZCIsImxvYWRRdWl6IiwicmVtb3ZlQmFjayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVCdXR0b25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsIiwiJGJ1dHRvbk5leHQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpZCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCIkcmVzdWx0TGluayIsIiRyZXN1bHRRdWl6IiwiJHJlc3VsdEl0ZW0iLCIkcmVzdWx0RmlndXJlIiwiJGFuc3dlckVsZW1lbnRzIiwiZm9yRWFjaCIsImFuc3dlckVsIiwiJHJlc3VsdEltYWdlIiwiY3VycmVudFRhcmdldCIsIiRyZXN1bHRDYXB0dXJlIiwiX3N0ZXAyIiwiX2l0ZXJhdG9yMiIsImNoZWNrRGlzYWJsZWRzIiwiY2hlY2tEaXNhYmxlZCIsInJlc3VsdCIsInJlc3VsdHMiLCJyZXp1bHRRdWl6SW1hZ2UiLCJyZXN1bHRRdWl6Il0sIm1hcHBpbmdzIjoiQUFzRkEsYSxvaENBakZBLElDSWtFQSxFQUNwREMsRUFBMENDLEVBQzFDQyxFRE5kQyxFQUFBLENBQ0EsQ0FDQUMsU0FBQSwyREFDQUMsUUFBQSxDQUNBLENBQUEsNkNBQUEsR0FDQSxDQUFBLG1DQUFBLEdDQ1ksQ0FBRSx1Q0FBdUMsR0RDckQsQ0FBQSxnQ0FBQSxHQUNBLENBQUEsOENBQUEsS0FJQSxDQUNBRCxTQUFBLHFEQUNBQyxRQUFBLENBQ0EsQ0FBQSwyQkFBQSxHQUNBLENBQUEsZ0NBQUEsR0NDWSxDQUFFLHlCQUF5QixHREN2QyxDQUFBLGdCQUFBLEdBQ0EsQ0FBQSxrQkFBQSxLQUlBLENBQ0FELFNBQUEsK0NBQ0FDLFFBQUEsQ0FDQSxDQUFBLFdBQUEsR0FDQSxDQUFBLFlBQUEsR0FDQSxDQUFBLG9CQUFBLEdDQ1ksQ0FBRSxtQkFBbUIsR0RDakMsQ0FBQSxxQkFBQSxHQUNBLENBQUEseUJBQUEsS0FJQSxDQUNBRCxTQUFBLG1FQUNBQyxRQUFBLENBQ0EsQ0FBQSxtRUFBQSxHQUNBLENBQUEsMkVBQUEsR0FDQSxDQUFBLCtFQUFBLEdDQ1ksQ0FBRSx5RUFBeUUsR0RDdkYsQ0FBQSxtRUFBQSxHQUNBLENBQUEsaURBQUEsS0FJQSxDQUNBRCxTQUFBLGlEQUNBQyxRQUFBLENBQ0EsQ0FBQSw2QkFBQSxHQ0NZLENBQUUsNkJBQTZCLEdERTNDLENBQUEseUJBQUEsR0NBWSxDQUFFLDRCQUE0QixNRFUxQ0MsRUFBQSxDQUNBLENBQ0FDLEtBQUEsaUJBQ0FDLE1BQUEsb0JBQ0FDLEtBQUEsNEVBR0EsQ0FDQUYsS0FBQSxvQ0FDQUMsTUFBQSx3QkFDQUMsS0FBQSw0RUFHQSxDQUNBRixLQUFBLHdCQUNBQyxN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QW9DLFVBQUEsNk9BVHBCLFNBaEQwQlQsR0FpRHRCLElBaERhc0MsRUFBTXhFLEVBQUEsR0FBQUUsUUFpRGZtRCxFQWhEWXRELEVBaURoQnlFLEVBaERZVixTQUFBLFNBQUFTLEdBRUF4RSxHQURId0UsRUFBTUEsRUFBQXJDLE9BQUFDLEtBQUFvQyxJQUVDM0QsT0FBQUEsR0FDTXNCLEtBQUFBLEVBQ1Z1QyxFQUFBdEUsRUFBQSxJQUNKLE1BQ1NOLEtBQUFBLEVBQ0dHLEVBQVNZLEVBQWFWLElBQ3BDLE1BQ0osS0FBQSxFQUNXdUUsRUFBQXRFLEVBQUEsSUFDakIsTUFFU3NFLEtBQUFBLEVBQ2VqRSxFQUFTRyxFQUFjLElBSXZDdUQsR0FDQVIsR0FnRFIsQ0FYb0JnQixDQUFBMUUsRUEyQ3BCLElBRUFxQyxFQUFNWSxpQkF4Q2N3QixTQUFnQnRFLFdBeUNoQ1MsSUFDQWtDLElBdkNJRCxJQUNBUSxFQUFJRCxnQkFBQSxXQXlDWiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGxldCBxdWl6RGF0YSA9IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBxdWVzdGlvbjogJ9CU0LvRjyDRh9C10LPQviDQktGLINC40YnQtdGC0LUg0L7QvdC70LDQudC9INC60YPRgNGBINC/0L4g0LDQu9GM0YLQtdGA0L3QsNGC0LjQstC90L7QuSDQuNGB0YLQvtGA0LjQuD8nLFxyXG4vLyAgICAgICAgIGFuc3dlcnM6IFtcclxuLy8gICAgICAgICAgICAgeyAn0KHQutGD0YfQvdC+LCDQuNGJ0YMg0YfRgtC+LdGC0L4g0LjQvdGC0LXRgNC10YHQvdC+0LUg0Lgg0L3QtdC+0LHRi9GH0L3QvtC1JzogZmFsc2UgfSxcclxuLy8gICAgICAgICAgICAgeyAn0KXQvtGH0YMg0YPQt9C90LDRgtGMINC40YHRgtC+0YDQuNGH0LXRgdC60YPRjiDQv9GA0LDQstC00YMnOiBmYWxzZSB9LFxyXG4vLyAgICAgICAgICAgICB7ICfQndCw0Lwg0LLRgNCw0LvQuCDQsiDRiNC60L7Qu9C1LCDQvdCw0LTQviDRgNCw0LfQvtCx0YDQsNGC0YzRgdGPJzogZmFsc2UgfSxcclxuLy8gICAgICAgICAgICAgeyAn0JDQvNC10YDQuNC60LDQvdGG0Ysg0L3QtSDQu9C10YLQsNC70Lgg0L3QsCDQm9GD0L3Rgyc6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgICAgIHsgJ9Cl0L7Rh9GDINC/0L7RgtGA0LXQvdC40YDQvtCy0LDRgtGM0YHRjyDQsiDQvtC/0YDQtdC00LXQu9C10L3QuNC4INC40LTQuNC+0YLQvtCyJzogZmFsc2UgfSxcclxuLy8gICAgICAgICBdXHJcbi8vICAgICB9LFxyXG5cclxuLy8gICAgIHtcclxuLy8gICAgICAgICBxdWVzdGlvbjogJ9Ca0LXQvCDQktGLINGP0LLQu9GP0LXRgtC10YHRjCDQsiDQutC+0L3RgtC10LrRgdGC0LUg0YLQtdC60YPRidC10LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPPycsXHJcbi8vICAgICAgICAgYW5zd2VyczogW1xyXG4vLyAgICAgICAgICAgICB7ICfQqNC60L7Qu9GM0L3QuNC6INGA0LDQt9C90YvRhSDQutC70LDRgdGB0L7Qsic6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgICAgIHsgJ9Ch0YLRg9C00LXQvdGCINC+0L/RgNC10LTQtdC70ZHQvdC90L7Qs9C+INGD0YDQvtCy0L3Rjyc6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgICAgIHsgJ9Ce0LHRgNCw0LfQvtCy0LDQvdC40LUg0LIg0L/RgNC+0YjQu9C+0LwnOiBmYWxzZSB9LFxyXG4vLyAgICAgICAgICAgICB7ICfQrdC90L3QvtC1INCy0YvRgdGI0LXQtSc6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgICAgIHsgJ9CT0YDRi9C30YMg0Lgg0LTQsNC70YzRiNC1JzogZmFsc2UgfSxcclxuLy8gICAgICAgICBdXHJcbi8vICAgICB9LFxyXG5cclxuLy8gICAgIHtcclxuLy8gICAgICAgICBxdWVzdGlvbjogJ9Ca0LXQvCDQktGLINGB0LXQsdGPINC+0YnRg9GJ0LDQtdGC0LUg0L3QsCDQv9GA0L7RgdGC0L7RgNCw0YUg0LjQvdGC0LXRgNC90LXRgtCwPycsXHJcbi8vICAgICAgICAgYW5zd2VyczogW1xyXG4vLyAgICAgICAgICAgICB7ICfQqNC60L7Qu9C+0YLQsCc6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgICAgIHsgJ9Ch0YLRjNGO0LTQtdC90YInOiBmYWxzZSB9LFxyXG4vLyAgICAgICAgICAgICB7ICfQlNC40LLQsNC90L3Ri9C5INGN0LrRgdC/0LXRgNGCJzogZmFsc2UgfSxcclxuLy8gICAgICAgICAgICAgeyAn0J/QvtC70LXQstC+0Lkg0Y3QutGB0L/QtdGA0YInOiBmYWxzZSB9LFxyXG4vLyAgICAgICAgICAgICB7ICfQotC+0YfQvdC+INCy0YHRkSDQvdC1INC30L3QsNGOJzogZmFsc2UgfSxcclxuLy8gICAgICAgICAgICAgeyAn0JfQvdCw0Y4g0LLRgdGRLCDQvdC+INC90LUg0YLQvtGH0L3Qvic6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgXVxyXG4vLyAgICAgfSxcclxuXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcXVlc3Rpb246ICfQmtCw0LrQuNC1INCy0L7Qv9GA0L7RgdGLINCw0LvRjNGC0LXRgNC90LDRgtC40LLQvdC+0Lkg0LjRgdGC0L7RgNC40Lgg0LTQu9GPINCS0LDRgSDQvdCw0LjQsdC+0LvQtdC1INC40L3RgtC10YDQtdGB0L3Riz8nLFxyXG4vLyAgICAgICAgIGFuc3dlcnM6IFtcclxuLy8gICAgICAgICAgICAgeyAnXFxcItCf0L7Qu9GR0YLRi1xcXCIg0L3QsCDQm9GD0L3RgyDRgdC90LjQvNCw0Lsg0KHRgtC10L3Qu9C4INCa0YPQsdGA0LjQuiDQsiDQutC40L3QvtC/0LDQstC40LvRjNC+0L3QtSDQvdCwINCX0LXQvNC70LU/JzogZmFsc2UgfSxcclxuLy8gICAgICAgICAgICAgeyAn0J/QvtGH0LXQvNGDINGB0LrRgNGL0LLQsNGO0YIg0LrQsNGC0LDQutC70LjQt9C8IDE5INCy0LXQutCwINC60L7RgtC+0YDRi9C5INC30LDRgdGL0L/QsNC7INC30LTQsNC90LjRjyDQv9C+INCy0YHQtdC80YMg0LzQuNGA0YM/JzogZmFsc2UgfSxcclxuLy8gICAgICAgICAgICAgeyAn0J/QvtGH0LXQvNGDINGA0YPRhdC90YPQuyDQvdC10LHQvtGB0LrRgNGR0LEg0LIg0LrQvtGC0L7RgNGL0Lkg0L3QtSDQv9C+0L/QsNC00LDQuyDRgdCw0LzQvtC70ZHRgiAxMSDRgdC10L3RgtGP0LHRgNGPIDIwMDEg0LPQvtC00LA/JzogZmFsc2UgfSxcclxuLy8gICAgICAgICAgICAgeyAn0JzQvtC90YTQtdGA0YDQsNC9INC90LUg0LzQvtCzINGB0LTQtdC70LDRgtGMINCQ0LvQtdC60YHQsNC90LTRgNC+0LLRgdC60YPRjiDQutC+0LvQvtC90L3Rgywg0L7QvdCwINGB0YLQvtGP0LvQsCDQtNC+INC90LXQs9C+Pyc6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgICAgIHsgJ9CQ0L3RgtCw0YDQutGC0LjQtNCwLCDQndCb0J4g0Lgg0L3QtdC80YbRizog0LrRgtC+INC90LDQv9Cw0Lsg0L3QsCDQsNC80LXRgNC40LrQsNC90YbQtdCyINCyIDE5NDYtNDcg0LPQsz8nOiBmYWxzZSB9LFxyXG4vLyAgICAgICAgICAgICB7ICfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsyDQn9GR0YLRgCBJINC90LUg0L7RgdC90L7QstCw0LssINCwINC+0YLQutC+0L/QsNC7Pyc6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgXVxyXG4vLyAgICAgfSxcclxuXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcXVlc3Rpb246ICfQl9C90LDQtdGC0LUg0LvQuCDQktGLINC60LDQvdCw0LsgXFxcItCf0LXRgdGH0LDQvdGL0Lkg0JLQvtC40L0gVlxcXCIg0L3QsCDQlNC30LXQvdC1PycsXHJcbi8vICAgICAgICAgYW5zd2VyczogW1xyXG4vLyAgICAgICAgICAgICB7ICfQlNCwLCDRh9C40YLQsNC7LCDQvdC+INC90LUg0YHQvtCz0LvQsNGB0LXQvSc6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgICAgIHsgJ9CU0LAsINC/0L7QtNC/0LjRgdCw0L0sINC/0L7QtNC00LXRgNC20LjQstCw0Y4nOiBmYWxzZSB9LFxyXG4vLyAgICAgICAgICAgICB7ICfQn9C10YHRh9Cw0L3Ri9C5INCS0L7QuNC9IC0g0LjQtNC40L7Rgic6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgICAgIHsgJ9Cf0LXRgdGH0LDQvdGL0Lkg0JLQvtC40L0gLSDQutGC0L4g0Y3RgtC+Pyc6IGZhbHNlIH0sXHJcbi8vICAgICAgICAgXVxyXG4vLyAgICAgfSxcclxuXHJcblxyXG4vLyBdO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBkYXRhSW1hZ2UgPSBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgbmFtZTogJ1xcXCLQm9GD0L3QvdCw0Y8g0LDRhNGR0YDQsFxcXCInLFxyXG4vLyAgICAgICAgIGltYWdlOiAnLi9pbWFnZXMvbW9vbi5wbmcnLFxyXG4vLyAgICAgICAgIGxpbms6ICdodHRwczovL2R6ZW4ucnUvc3VpdGUvMDgwNjdiNzUtYTdhYy00NmU3LThhNGMtNzI4ODJmNjlhMWI4P3NoYXJlX3RvPWxpbmsnXHJcbi8vICAgICB9LFxyXG5cclxuLy8gICAgIHtcclxuLy8gICAgICAgICBuYW1lOiAnXFxcItCX0LDRgdGL0L/QsNC90L3Ri9C1XFxcIiDQt9C00LDQvdC40Y8g0L/QviDQstGB0LXQvNGDINC80LjRgNGDJyxcclxuLy8gICAgICAgICBpbWFnZTogJy4vaW1hZ2VzL2J1aWxkaW5nLnBuZycsXHJcbi8vICAgICAgICAgbGluazogJ2h0dHBzOi8vZHplbi5ydS9zdWl0ZS8wODA2N2I3NS1hN2FjLTQ2ZTctOGE0Yy03Mjg4MmY2OWExYjg/c2hhcmVfdG89bGluaydcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIG5hbWU6ICcxMSDRgdC10L3RgtGP0LHRgNGPIDIwMDEg0LPQvtC00LAnLFxyXG4vLyAgICAgICAgIGltYWdlOiAnLi9pbWFnZXMvOTExLnBuZycsXHJcbi8vICAgICAgICAgbGluazogJ2h0dHBzOi8vZHplbi5ydS9zdWl0ZS85MjAwMmEwMS03MGIyLTQ2NzEtOTU4Mi05ZTJkNDg3N2I0MWU/c2hhcmVfdG89bGluaydcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIG5hbWU6ICdcXFwi0KPQutGA0LDQtNC10L3QvdCw0Y9cXFwiINC40YHRgtC+0YDQuNGPINGH0LXQu9C+0LLQtdGH0LXRgdGC0LLQsCcsXHJcbi8vICAgICAgICAgaW1hZ2U6ICcuL2ltYWdlcy9oaXN0b3J5LnBuZycsXHJcbi8vICAgICAgICAgbGluazogJ2h0dHBzOi8vZHplbi5ydS9zdWl0ZS9iYWQ1ZDM5Yi1iZjZmLTRmOTEtOWM4YS04MTM3MjRkYzczYjk/c2hhcmVfdG89bGluaydcclxuLy8gICAgIH0sXHJcblxyXG4vLyBdIiwiXHJcbi8vIGltcG9ydCB7IHF1aXpEYXRhIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuLy8gaW1wb3J0IHsgZGF0YUltYWdlIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuLy8gbGV0IHF1aXpEYXRhRHluID0gYXdhaXQgaW1wb3J0KCcuL2RhdGEuanMnKTtcclxuXHJcbmxldCBxdWl6RGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogJ9CU0LvRjyDRh9C10LPQviDQktGLINC40YnQtdGC0LUg0L7QvdC70LDQudC9INC60YPRgNGBINC/0L4g0LDQu9GM0YLQtdGA0L3QsNGC0LjQstC90L7QuSDQuNGB0YLQvtGA0LjQuD8nLFxyXG4gICAgICAgIGFuc3dlcnM6IFtcclxuICAgICAgICAgICAgeyAn0KHQutGD0YfQvdC+LCDQuNGJ0YMg0YfRgtC+LdGC0L4g0LjQvdGC0LXRgNC10YHQvdC+0LUg0Lgg0L3QtdC+0LHRi9GH0L3QvtC1JzogZmFsc2UgfSxcclxuICAgICAgICAgICAgeyAn0KXQvtGH0YMg0YPQt9C90LDRgtGMINC40YHRgtC+0YDQuNGH0LXRgdC60YPRjiDQv9GA0LDQstC00YMnOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICB7ICfQndCw0Lwg0LLRgNCw0LvQuCDQsiDRiNC60L7Qu9C1LCDQvdCw0LTQviDRgNCw0LfQvtCx0YDQsNGC0YzRgdGPJzogZmFsc2UgfSxcclxuICAgICAgICAgICAgeyAn0JDQvNC10YDQuNC60LDQvdGG0Ysg0L3QtSDQu9C10YLQsNC70Lgg0L3QsCDQm9GD0L3Rgyc6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHsgJ9Cl0L7Rh9GDINC/0L7RgtGA0LXQvdC40YDQvtCy0LDRgtGM0YHRjyDQsiDQvtC/0YDQtdC00LXQu9C10L3QuNC4INC40LTQuNC+0YLQvtCyJzogZmFsc2UgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogJ9Ca0LXQvCDQktGLINGP0LLQu9GP0LXRgtC10YHRjCDQsiDQutC+0L3RgtC10LrRgdGC0LUg0YLQtdC60YPRidC10LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPPycsXHJcbiAgICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgICAgICB7ICfQqNC60L7Qu9GM0L3QuNC6INGA0LDQt9C90YvRhSDQutC70LDRgdGB0L7Qsic6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHsgJ9Ch0YLRg9C00LXQvdGCINC+0L/RgNC10LTQtdC70ZHQvdC90L7Qs9C+INGD0YDQvtCy0L3Rjyc6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHsgJ9Ce0LHRgNCw0LfQvtCy0LDQvdC40LUg0LIg0L/RgNC+0YjQu9C+0LwnOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICB7ICfQrdC90L3QvtC1INCy0YvRgdGI0LXQtSc6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHsgJ9CT0YDRi9C30YMg0Lgg0LTQsNC70YzRiNC1JzogZmFsc2UgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogJ9Ca0LXQvCDQktGLINGB0LXQsdGPINC+0YnRg9GJ0LDQtdGC0LUg0L3QsCDQv9GA0L7RgdGC0L7RgNCw0YUg0LjQvdGC0LXRgNC90LXRgtCwPycsXHJcbiAgICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgICAgICB7ICfQqNC60L7Qu9C+0YLQsCc6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHsgJ9Ch0YLRjNGO0LTQtdC90YInOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICB7ICfQlNC40LLQsNC90L3Ri9C5INGN0LrRgdC/0LXRgNGCJzogZmFsc2UgfSxcclxuICAgICAgICAgICAgeyAn0J/QvtC70LXQstC+0Lkg0Y3QutGB0L/QtdGA0YInOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICB7ICfQotC+0YfQvdC+INCy0YHRkSDQvdC1INC30L3QsNGOJzogZmFsc2UgfSxcclxuICAgICAgICAgICAgeyAn0JfQvdCw0Y4g0LLRgdGRLCDQvdC+INC90LUg0YLQvtGH0L3Qvic6IGZhbHNlIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246ICfQmtCw0LrQuNC1INCy0L7Qv9GA0L7RgdGLINCw0LvRjNGC0LXRgNC90LDRgtC40LLQvdC+0Lkg0LjRgdGC0L7RgNC40Lgg0LTQu9GPINCS0LDRgSDQvdCw0LjQsdC+0LvQtdC1INC40L3RgtC10YDQtdGB0L3Riz8nLFxyXG4gICAgICAgIGFuc3dlcnM6IFtcclxuICAgICAgICAgICAgeyAnXFxcItCf0L7Qu9GR0YLRi1xcXCIg0L3QsCDQm9GD0L3RgyDRgdC90LjQvNCw0Lsg0KHRgtC10L3Qu9C4INCa0YPQsdGA0LjQuiDQsiDQutC40L3QvtC/0LDQstC40LvRjNC+0L3QtSDQvdCwINCX0LXQvNC70LU/JzogZmFsc2UgfSxcclxuICAgICAgICAgICAgeyAn0J/QvtGH0LXQvNGDINGB0LrRgNGL0LLQsNGO0YIg0LrQsNGC0LDQutC70LjQt9C8IDE5INCy0LXQutCwINC60L7RgtC+0YDRi9C5INC30LDRgdGL0L/QsNC7INC30LTQsNC90LjRjyDQv9C+INCy0YHQtdC80YMg0LzQuNGA0YM/JzogZmFsc2UgfSxcclxuICAgICAgICAgICAgeyAn0J/QvtGH0LXQvNGDINGA0YPRhdC90YPQuyDQvdC10LHQvtGB0LrRgNGR0LEg0LIg0LrQvtGC0L7RgNGL0Lkg0L3QtSDQv9C+0L/QsNC00LDQuyDRgdCw0LzQvtC70ZHRgiAxMSDRgdC10L3RgtGP0LHRgNGPIDIwMDEg0LPQvtC00LA/JzogZmFsc2UgfSxcclxuICAgICAgICAgICAgeyAn0JzQvtC90YTQtdGA0YDQsNC9INC90LUg0LzQvtCzINGB0LTQtdC70LDRgtGMINCQ0LvQtdC60YHQsNC90LTRgNC+0LLRgdC60YPRjiDQutC+0LvQvtC90L3Rgywg0L7QvdCwINGB0YLQvtGP0LvQsCDQtNC+INC90LXQs9C+Pyc6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHsgJ9CQ0L3RgtCw0YDQutGC0LjQtNCwLCDQndCb0J4g0Lgg0L3QtdC80YbRizog0LrRgtC+INC90LDQv9Cw0Lsg0L3QsCDQsNC80LXRgNC40LrQsNC90YbQtdCyINCyIDE5NDYtNDcg0LPQsz8nOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICB7ICfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsyDQn9GR0YLRgCBJINC90LUg0L7RgdC90L7QstCw0LssINCwINC+0YLQutC+0L/QsNC7Pyc6IGZhbHNlIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246ICfQl9C90LDQtdGC0LUg0LvQuCDQktGLINC60LDQvdCw0LsgXFxcItCf0LXRgdGH0LDQvdGL0Lkg0JLQvtC40L0gVlxcXCIg0L3QsCDQlNC30LXQvdC1PycsXHJcbiAgICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgICAgICB7ICfQlNCwLCDRh9C40YLQsNC7LCDQvdC+INC90LUg0YHQvtCz0LvQsNGB0LXQvSc6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHsgJ9CU0LAsINC/0L7QtNC/0LjRgdCw0L0sINC/0L7QtNC00LXRgNC20LjQstCw0Y4nOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICB7ICfQn9C10YHRh9Cw0L3Ri9C5INCS0L7QuNC9IC0g0LjQtNC40L7Rgic6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHsgJ9Cf0LXRgdGH0LDQvdGL0Lkg0JLQvtC40L0gLSDQutGC0L4g0Y3RgtC+Pyc6IGZhbHNlIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcblxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IGRhdGFJbWFnZSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnXFxcItCb0YPQvdC90LDRjyDQsNGE0ZHRgNCwXFxcIicsXHJcbiAgICAgICAgaW1hZ2U6ICcuL2ltYWdlcy9tb29uLnBuZycsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZHplbi5ydS9zdWl0ZS8wODA2N2I3NS1hN2FjLTQ2ZTctOGE0Yy03Mjg4MmY2OWExYjg/c2hhcmVfdG89bGluaydcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdcXFwi0JfQsNGB0YvQv9Cw0L3QvdGL0LVcXFwiINC30LTQsNC90LjRjyDQv9C+INCy0YHQtdC80YMg0LzQuNGA0YMnLFxyXG4gICAgICAgIGltYWdlOiAnLi9pbWFnZXMvYnVpbGRpbmcucG5nJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kemVuLnJ1L3N1aXRlLzA4MDY3Yjc1LWE3YWMtNDZlNy04YTRjLTcyODgyZjY5YTFiOD9zaGFyZV90bz1saW5rJ1xyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJzExINGB0LXQvdGC0Y/QsdGA0Y8gMjAwMSDQs9C+0LTQsCcsXHJcbiAgICAgICAgaW1hZ2U6ICcuL2ltYWdlcy85MTEucG5nJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kemVuLnJ1L3N1aXRlLzkyMDAyYTAxLTcwYjItNDY3MS05NTgyLTllMmQ0ODc3YjQxZT9zaGFyZV90bz1saW5rJ1xyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1xcXCLQo9C60YDQsNC00LXQvdC90LDRj1xcXCIg0LjRgdGC0L7RgNC40Y8g0YfQtdC70L7QstC10YfQtdGB0YLQstCwJyxcclxuICAgICAgICBpbWFnZTogJy4vaW1hZ2VzL2hpc3RvcnkucG5nJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kemVuLnJ1L3N1aXRlL2JhZDVkMzliLWJmNmYtNGY5MS05YzhhLTgxMzcyNGRjNzNiOT9zaGFyZV90bz1saW5rJ1xyXG4gICAgfSxcclxuXHJcbl1cclxuXHJcbmNvbnN0ICRxdWVzdGlvbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpeicpLFxyXG4gICAgJGZvcndhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgICRiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgICAkc3RlcHNEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxubGV0IGN1cnJlbnRRdWl6ID0gMCxcclxuICAgIGFuc3dlcixcclxuICAgIGFuc3dlckN1cnJlbnQsXHJcbiAgICBjaGVja0N1cnJlbnQsXHJcbiAgICBjaGVjaztcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25zKCkge1xyXG5cclxuICAgICRmb3J3YXJkLmNsYXNzTGlzdC5hZGQoJ3F1aXotYm94X19idXR0b24nLCAnbmV4dCcpO1xyXG4gICAgJGZvcndhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdmb3J3YXJkJyk7XHJcbiAgICAkZm9yd2FyZC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xyXG5cclxuICAgICRiYWNrLmNsYXNzTGlzdC5hZGQoJ3F1aXotYm94X19idXR0b24nLCAncHJldicpO1xyXG4gICAgJGJhY2suc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrJyk7XHJcblxyXG4gICAgJGZvcndhcmQudGV4dENvbnRlbnQgPSAn0JTQsNC70LXQtSc7XHJcbiAgICAkYmFjay50ZXh0Q29udGVudCA9ICfQndCw0LfQsNC0JztcclxuXHJcbiAgICAkcXVlc3Rpb25JdGVtLmFwcGVuZCgkZm9yd2FyZCk7XHJcbiAgICAkcXVlc3Rpb25JdGVtLmFwcGVuZCgkYmFjayk7XHJcblxyXG4gICAgcmV0dXJuICRmb3J3YXJkLFxyXG4gICAgICAgICRiYWNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGVwcyhjdXJyZW50UXVpeikge1xyXG4gICAgY29uc3QgJGRlc2NTdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6LWJveF9fZGVzYy1zdGVwcycpO1xyXG5cclxuICAgICRkZXNjU3RlcHMudGV4dENvbnRlbnQgPSBgJHtxdWl6RGF0YS5sZW5ndGh9YDtcclxuXHJcbiAgICAkc3RlcHNEZXNjLnRleHRDb250ZW50ID0gYNCo0LDQsyAke2N1cnJlbnRRdWl6ICsgMX0vJHtxdWl6RGF0YS5sZW5ndGh9YDtcclxuICAgICRzdGVwc0Rlc2MuY2xhc3NMaXN0LmFkZCgncXVpei1ib3hfX3N0ZXBzJyk7XHJcblxyXG4gICAgcmV0dXJuICRzdGVwc0Rlc2M7XHJcbn1cclxuXHJcblxyXG5sb2FkUXVpeigpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5zd2VyTGlzdChxdWl6RGF0YSkge1xyXG4gICAgY29uc3QgJHRpdGxlUXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpLFxyXG4gICAgICAgICRhbnN3ZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSxcclxuICAgICAgICAkc3RlcHNEZXNjID0gY3JlYXRlU3RlcHMoY3VycmVudFF1aXopO1xyXG5cclxuICAgICRhbnN3ZXJMaXN0LmNsYXNzTGlzdC5hZGQoJ3F1aXotYm94X19saXN0Jyk7XHJcblxyXG4gICAgJHRpdGxlUXVlc3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdxdWVzdGlvbicpO1xyXG4gICAgJHRpdGxlUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgncXVpei1ib3hfX3F1ZXN0aW9uJyk7XHJcbiAgICAkdGl0bGVRdWVzdGlvbi50ZXh0Q29udGVudCA9IHF1aXpEYXRhLnF1ZXN0aW9uO1xyXG5cclxuICAgIGlmIChjdXJyZW50UXVpeiA9PT0gKHF1aXpEYXRhLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAvLyBpZiAoY3VycmVudFF1aXogPT09IChxdWl6RGF0YUR5bi5xdWl6RGF0YS5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgIGNvbnN0ICRsYXN0SW1hZ2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLFxyXG4gICAgICAgICAgICAkbGFzdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgICAgICRsYXN0SW1hZ2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2R6ZW4ucnUvdm9pbnYnKTtcclxuICAgICAgICAkbGFzdEltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuICAgICAgICAkbGFzdEltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9Cf0LXRgNC10LnRgtC4INC90LAg0LrQsNC90LDQuyDQlNC30LXQvdCwJyk7XHJcblxyXG4gICAgICAgICRsYXN0SW1hZ2VMaW5rLmNsYXNzTGlzdC5hZGQoJ3F1aXotYm94X19xdWVzdGlvbi1hdXRob3InKTtcclxuICAgICAgICAkbGFzdEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2ltYWdlcy9hdXRob3IucG5nJyk7XHJcbiAgICAgICAgJGxhc3RJbWFnZUxpbmsuYXBwZW5kKCRsYXN0SW1hZ2UpO1xyXG4gICAgICAgICR0aXRsZVF1ZXN0aW9uLmFwcGVuZCgkbGFzdEltYWdlTGluayk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG51bWJlcklkID0gMDtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBxdWl6RGF0YS5hbnN3ZXJzKSB7XHJcbiAgICAgICAgJGFuc3dlckxpc3QuYXBwZW5kKGNyZWF0ZUFuc3dlckRPTShPYmplY3Qua2V5cyhpdGVtKSwgbnVtYmVySWQsIE9iamVjdC52YWx1ZXMoaXRlbSkpKTtcclxuICAgICAgICBudW1iZXJJZCsrO1xyXG4gICAgfVxyXG5cclxuICAgICRxdWVzdGlvbkl0ZW0uYXBwZW5kKCR0aXRsZVF1ZXN0aW9uKTtcclxuICAgICRxdWVzdGlvbkl0ZW0uYXBwZW5kKCRzdGVwc0Rlc2MpO1xyXG4gICAgJHF1ZXN0aW9uSXRlbS5hcHBlbmQoJGFuc3dlckxpc3QpO1xyXG5cclxuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcclxuICAgIHJldHVybiAkcXVlc3Rpb25JdGVtO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5zd2VyRE9NKGFuc3dlciwgbnVtYmVySWQsIGNoZWNrKSB7XHJcbiAgICBjb25zdCAkYW5zd2VySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyksXHJcbiAgICAgICAgJGFuc3dlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSxcclxuICAgICAgICAkYW5zd2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cclxuICAgICRhbnN3ZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3F1aXotYm94X19pdGVtJyk7XHJcblxyXG4gICAgJGFuc3dlcklucHV0LmNsYXNzTGlzdC5hZGQoJ3F1aXotYm94X19pbnB1dCcpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFF1aXopO1xyXG5cclxuICAgIGlmIChjdXJyZW50UXVpeiA9PT0gMykge1xyXG4gICAgICAgICRhbnN3ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGFuc3dlcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG4gICAgfVxyXG5cclxuICAgICRhbnN3ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYW5zd2VyJyk7XHJcbiAgICAkYW5zd2VySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bWJlcklkfWApO1xyXG5cclxuICAgICRhbnN3ZXJMYWJlbC5jbGFzc0xpc3QuYWRkKCdxdWl6LWJveF9fbGFiZWwnKTtcclxuICAgICRhbnN3ZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke251bWJlcklkfWApO1xyXG4gICAgJGFuc3dlckxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCBgYW5zd2VyXyR7bnVtYmVySWR9YCk7XHJcbiAgICAkYW5zd2VyTGFiZWwudGV4dENvbnRlbnQgPSBhbnN3ZXI7XHJcblxyXG4gICAgY2hlY2sgPSBTdHJpbmcoY2hlY2spO1xyXG5cclxuICAgIGlmIChjaGVjayAhPSAndHJ1ZScpIHtcclxuICAgICAgICAkYW5zd2VySXRlbS5hcHBlbmQoJGFuc3dlcklucHV0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGFuc3dlcklucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcclxuICAgICAgICAkYW5zd2VySXRlbS5hcHBlbmQoJGFuc3dlcklucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICAkYW5zd2VySXRlbS5hcHBlbmQoJGFuc3dlckxhYmVsKTtcclxuXHJcbiAgICByZXR1cm4gJGFuc3dlckl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJhY2soKSB7XHJcbiAgICBpZiAoY3VycmVudFF1aXogPT09IDApIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbnJlbW92ZUJhY2soKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRRdWl6KCkge1xyXG4gICAgLy8gZGVzZWxlY3RBbnN3ZXJzKCk7XHJcbiAgICAkcXVlc3Rpb25JdGVtLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY3JlYXRlQW5zd2VyTGlzdChxdWl6RGF0YVtjdXJyZW50UXVpel0pO1xyXG4gICAgZ2V0U2VsZWN0ZWQoKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gZGVzZWxlY3RBbnN3ZXJzKCkge1xyXG4vLyAgICAgLy8gYW5zd2VyRWxlbWVudHMuZm9yRWFjaChhbnN3ZXJFbCA9PiBhbnN3ZXJFbC5jaGVja2VkID0gZmFsc2UpXHJcbi8vIH1cclxuXHJcbmNvbnN0ICRidXR0b25OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQnKTtcclxuLy8gJGJ1dHRvbk5leHQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWQoKSB7XHJcbiAgICBjb25zdCAkYW5zd2VyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXVpei1ib3hfX2lucHV0Jyk7XHJcblxyXG4gICAgJGFuc3dlckVsZW1lbnRzLmZvckVhY2goYW5zd2VyRWwgPT4ge1xyXG5cclxuICAgICAgICBhbnN3ZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgJGJ1dHRvbk5leHQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgICAgICAgYW5zd2VyQ3VycmVudCA9IGVsLmN1cnJlbnRUYXJnZXQuaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoYW5zd2VyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlciA9IGFuc3dlckN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNoZWNrQ3VycmVudCA9IHF1aXpEYXRhW2N1cnJlbnRRdWl6XS5hbnN3ZXJzW2Fuc3dlckN1cnJlbnRdO1xyXG4gICAgICAgICAgICBjaGVja0N1cnJlbnRbT2JqZWN0LmtleXMoY2hlY2tDdXJyZW50KV0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYW5zd2VyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYW5zd2VyQ3VycmVudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYW5zd2VyQ3VycmVudCAhPSBhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gcXVpekRhdGFbY3VycmVudFF1aXpdLmFuc3dlcnNbYW5zd2VyXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UXVpeiA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrW09iamVjdC5rZXlzKGNoZWNrKV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1tPYmplY3Qua2V5cyhjaGVjayldID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IHF1aXpEYXRhW2N1cnJlbnRRdWl6XS5hbnN3ZXJzW2Fuc3dlcl07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFF1aXogPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1tPYmplY3Qua2V5cyhjaGVjayldID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYW5zd2VyID0gYW5zd2VyQ3VycmVudDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocXVpekRhdGFbY3VycmVudFF1aXpdLmFuc3dlcnMpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYW5zd2VyO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXp1bHRRdWl6SW1hZ2UoZGF0YUltYWdlKSB7XHJcbiAgICBjb25zdCAkcmVzdWx0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyksXHJcbiAgICAgICAgJHJlc3VsdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyksXHJcbiAgICAgICAgJHJlc3VsdEZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpLFxyXG4gICAgICAgICRyZXN1bHRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLFxyXG4gICAgICAgICRyZXN1bHRDYXB0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlnY2F0dXJlJyksXHJcbiAgICAgICAgJHJlc3VsdFF1aXogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpei1ib3hfX2xpc3QnKTtcclxuXHJcblxyXG5cclxuICAgICRyZXN1bHRJdGVtLmNsYXNzTGlzdC5hZGQoJ3F1aXotYm94X19pdGVtJyk7XHJcbiAgICAkcmVzdWx0TGluay5jbGFzc0xpc3QuYWRkKCdxdWl6LWJveF9fbGluaycpO1xyXG4gICAgJHJlc3VsdExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7ZGF0YUltYWdlLmxpbmt9YCk7XHJcbiAgICAkcmVzdWx0TGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYCR7ZGF0YUltYWdlLm5hbWV9YCk7XHJcbiAgICAkcmVzdWx0TGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuXHJcbiAgICAkcmVzdWx0RmlndXJlLmNsYXNzTGlzdC5hZGQoJ3F1aXotYm94X19maWd1cmUnKTtcclxuICAgICRyZXN1bHRDYXB0dXJlLmNsYXNzTGlzdC5hZGQoJ3F1aXotYm94X19maWdjYXB0dXJlJyk7XHJcbiAgICAkcmVzdWx0Q2FwdHVyZS50ZXh0Q29udGVudCA9IGAke2RhdGFJbWFnZS5uYW1lfWA7XHJcbiAgICAkcmVzdWx0SW1hZ2UuY2xhc3NMaXN0LmFkZCgncXVpei1ib3hfX2ltYWdlJyk7XHJcbiAgICAkcmVzdWx0SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtkYXRhSW1hZ2UuaW1hZ2V9YCk7XHJcblxyXG4gICAgJHJlc3VsdEZpZ3VyZS5hcHBlbmQoJHJlc3VsdEltYWdlKTtcclxuICAgICRyZXN1bHRGaWd1cmUuYXBwZW5kKCRyZXN1bHRDYXB0dXJlKTtcclxuICAgICRyZXN1bHRMaW5rLmFwcGVuZCgkcmVzdWx0RmlndXJlKTtcclxuICAgICRyZXN1bHRJdGVtLmFwcGVuZCgkcmVzdWx0TGluayk7XHJcbiAgICAkcmVzdWx0UXVpei5hcHBlbmQoJHJlc3VsdEl0ZW0pO1xyXG5cclxuICAgIHJldHVybiAkcmVzdWx0UXVpejtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzdWx0UXVpeihxdWl6RGF0YSkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IHF1aXpEYXRhWzNdLmFuc3dlcnM7XHJcbiAgICBsZXQgaWQgPSAwO1xyXG4gICAgcmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0W09iamVjdC5rZXlzKHJlc3VsdCldO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChpZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlenVsdFF1aXpJbWFnZShkYXRhSW1hZ2VbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlenVsdFF1aXpJbWFnZShkYXRhSW1hZ2VbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlenVsdFF1aXpJbWFnZShkYXRhSW1hZ2VbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAoMyB8fCA0IHx8IDUpOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlenVsdFF1aXpJbWFnZShkYXRhSW1hZ2VbM10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkKys7XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuJGZvcndhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBhbnN3ZXIgPSBnZXRTZWxlY3RlZCgpO1xyXG5cclxuICAgIGlmIChhbnN3ZXIpIHtcclxuICAgICAgICBjdXJyZW50UXVpeisrO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgIGlmIChjdXJyZW50UXVpeiA8IHF1aXpEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsb2FkUXVpeigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tEaXNhYmxlZHMgPSBxdWl6RGF0YVtjdXJyZW50UXVpel0uYW5zd2VycztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tEaXNhYmxlZHMpXHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoZWNrRGlzYWJsZWQgb2YgY2hlY2tEaXNhYmxlZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrRGlzYWJsZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrRGlzYWJsZWRbT2JqZWN0LmtleXMoY2hlY2tEaXNhYmxlZCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJ1dHRvbk5leHQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zdCAkcmVzdWx0UXVpekJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6LWJveF9fcXVpeicpO1xyXG4gICAgICAgICAgICAvLyAkcmVzdWx0UXVpekJveC5jbGFzc0xpc3QuYWRkKCdxdWl6LWJveF9fcmVzdWx0Jyk7XHJcblxyXG4gICAgICAgICAgICAkcXVlc3Rpb25JdGVtLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJxdWl6LWJveF9fcXVlc3Rpb25cIj7QoNC10LrQvtC80LXQvdC00YPQtdC8INCS0LDQvCDQt9Cw0L/QuNGB0LDRgtGM0YHRjyDQvdCwINGB0LvQtdC00YPRjtGJ0LjQtSDQutGD0YDRgdGLOjwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJxdWl6LWJveF9fYnV0dG9uIGJ1dHRvbi1yZXN1bHRcIiBvbmNsaWNrPVwibG9jYXRpb24ucmVsb2FkKClcIj7Qn9C+LdC90L7QstC+0Lk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwicXVpei1ib3hfX2xpc3RcIj48L3VsPmA7XHJcbiAgICAgICAgICAgIHJlc3VsdFF1aXoocXVpekRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbiRiYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3VycmVudFF1aXotLTtcclxuICAgIHJlbW92ZUJhY2soKTtcclxuICAgIGxvYWRRdWl6KCk7XHJcbiAgICAkYnV0dG9uTmV4dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4iXX0=
