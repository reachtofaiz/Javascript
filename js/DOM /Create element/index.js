
const div = document.createElement('div')
console.log(div);
div.className = "heading"
div.id = Math.round(Math.random() * 10)
div.setAttribute("title", "javascript")
div.style.backgroundColor = "green"
div.style.padding = "15px"
// div.innerText = "Javascript Learning"
const Text = document.createTextNode("Javascript Learning")
div.appendChild(Text)
document.body.appendChild(div)

console.log('break')
const para = document.createElement('para')
console.log(para)
para.className = "paragraph"
para.id = "one"
para.setAttribute("sen", "sentence")
para.style.padding = "10px"
const string = document.createTextNode("JavaScript is a high - level, often just -in -time compiled language that conforms to the ECMAScript standard.It has dynamic typing, prototype - based object - orientation, and first - class functions.It is multi - paradigm, supporting event - driven, functional, and imperative programming styles.It has application programming interfaces(APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model(DOM).JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications.The most popular runtime system for this usage is Node.js.")
para.appendChild(string)
document.body.appendChild(para)
