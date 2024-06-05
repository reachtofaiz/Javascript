 // we can obtained the text by two ways by using js
    // one way is by using inerHTML but this is not customised way
    // another way by direct create a text node

    function addlanguage(langname) {
        const li = document.createElement('li');
        li.innerHTML = `${langname}`
        document.querySelector('.Language').appendChild(li)
    }
    addlanguage("C")
    addlanguage("C++")
    addlanguage("Python")

    function optimised_way(langname) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langname))
        document.querySelector('.Language').appendChild(li)
    }
    optimised_way("JQuery")
    optimised_way("MongoDB")
    optimised_way("Django")

// Edit

const edit = document.querySelector("li:nth-child(2)")
// edit.innerHTML = "Mojo"
// But this is not optimised way
const newli = document.createElement('li')
newli.textContent = "Mojo"
edit.replaceWith(newli)

// Edit at Javascript

// const text = document.querySelector('li')
// console.log(text);
// const li = document.createElement('li')
// console.log(li);
// li.textContent = ("Typescript")
// text.replaceWith(li)

// another way of edit
const text = document.querySelector("li:first-child")
text.outerHTML = '<li>Typescript</li>'

// Remove

const del = document.querySelector('li:last-child')
console.log(del);
del.remove()
