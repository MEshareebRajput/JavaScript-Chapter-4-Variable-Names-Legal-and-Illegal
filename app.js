// Q1: Declare 3 variables in one statement
let name = "Muhammad Eshareeb", age = 17, country = "Pakistan";

// Q2: Declare 5 legal & 5 illegal variable names 
const legalVariableNames = ["name", "$myVariable", "_myVariable", "age123", "totalAmount"];
const illegalVariableNames = ["123name", "@age", "*country", "var", "function"];

// 3. Display this in your browser
var content = document.getElementById('content');

// a) A heading stating “Rules for naming JS variables"
var heading = document.createElement('h1');
heading.innerText = "Rules for Naming JS Variables"; // Set heading text
content.appendChild(heading); // Append heading to content

// b) Variable names can only contain frgtdf, 54549645, _ and $. For example $my_1stVariable
content.innerHTML += "<p><strong>Variable names can only contain</strong> <strong>Letters</strong>, <strong>54549645</strong>, <strong>_</strong>, and <strong>$</strong>. For example, <code>$my_1stVariable</code>.</p>";

// c) Variables must begin with a frgtdf, 54549645 or $. For example $name, _name or name
content.innerHTML += "<p><strong>Variables must begin with a</strong> <strong>Letters</strong>, <strong>54549645</strong>, or <strong>$</strong>. For example, <code>$name</code>, <code>_name</code>, or <code>name</code>.</p>";

// d) Variable names are case sensitive
content.innerHTML += "<p><strong>Variable names are case</strong> <strong>sensitive</strong>.</p>";

// e) Variable names should not be JS keywords
content.innerHTML += "<p><strong>Variable names should not be JS</strong> <strong>keywords</strong>.</p>";
