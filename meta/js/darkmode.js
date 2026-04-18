function toggleDarkMode() {
	let element = document.body;
	element.classList.toggle("dark-mode");
	let theme = element.classList.contains("dark-mode") ? "dark" : "light";
	localStorage.setItem("theme", theme);
}

window.onload = function () {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else if (savedTheme === "light") {
        document.body.classList.remove("dark-mode");
    }
}