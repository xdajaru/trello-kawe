"use strict";

const header = document.querySelector("header");

//menambahkan background putih dan shadow pada navbar
document.addEventListener("scroll", function (e) {
	if (window.scrollY == 0) {
		header.classList.remove("bg-navbar-white");
		header.classList.add("bg-navbar");
	} else {
		header.classList.remove("bg-navbar");
		header.classList.add("bg-navbar-white");
	}
});
