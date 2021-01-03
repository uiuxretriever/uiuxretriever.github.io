console.log('in external')

const createElementFromHTML = (articleAfterTranslateText) => {
  const translatedDom = document.createElement('div')
  translatedDom.innerHTML = articleAfterTranslateText
  console.log('after translate to DOM', translatedDom)
  // div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes; Add div.childNodes, .getElementsByTagName('p')[0] can't work
  return translatedDom; 
}

let articleAfterTranslateDom

if (window.uiuxRetriever_configProd) {
  console.log('will translate config')
  articleAfterTranslateDom = createElementFromHTML(window.uiuxRetriever_configProd)
} else {
  console.log('will translate normal')
  articleAfterTranslateDom = createElementFromHTML(window[window.location.pathname.replace(/\/|-/g, '')])
  console.log(articleAfterTranslateDom.getElementsByTagName('p'))
}



// TODO: p 要改加其他 tag
// 要選到裡面的元素
Array.prototype.forEach.call(document.getElementsByTagName('p'), (e, i) => {
  e.innerText = e.innerText + articleAfterTranslateDom.getElementsByTagName('p')[i].innerText
  // e.innerText = e.innerText + '\n' + articleAfterTranslateDom.getElementsByTagName('p')[i].innerText
})
// e.innerText is:  He backs up his advice with research showing that market-driven companies are 31% more profitable than those that are not.

// 其他 tag 要另外寫
Array.prototype.forEach.call(document.getElementsByTagName('h1'), (e, i) => {
  e.innerText = e.innerText + '\n' + articleAfterTranslateDom.getElementsByTagName('h1')[i].innerText
})

Array.prototype.forEach.call(document.getElementsByTagName('h2'), (e, i) => {
  e.innerText = e.innerText + '\n' + articleAfterTranslateDom.getElementsByTagName('h1')[i].innerText
})

// -----？？？？？？？？？？？？？？？？？？

// var

// 	// Map over jQuery in case of overwrite
// 	_jQuery = window.jQuery,

// 	// Map over the $ in case of overwrite
// 	_$ = window.$;

// jQuery.noConflict = function( deep ) {
// 	if ( window.$ === jQuery ) {
// 		window.$ = _$;
// 	}

// 	if ( deep && window.jQuery === jQuery ) {
// 		window.jQuery = _jQuery;
// 	}

// 	return jQuery;
// };

// // Expose jQuery and $ identifiers, even in AMD
// // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// // and CommonJS for browser emulators (#13566)
// if ( typeof noGlobal === "undefined" ) {
// 	window.jQuery = window.$ = jQuery;
// }

// (function(){})