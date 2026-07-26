const text = document.getElementById("text");

document.getElementById("btn").onclick = function () {
    text.innerHTML = "🎉 Git makes version control easy!";
};

document.getElementById("colorBtn").onclick = function () {

    const colors = [
        "#f4f4f4",
        "#dff9fb",
        "#f6e58d",
        "#ffbe76",
        "#c7ecee",
        "#dff9fb"
    ];

    const random = Math.floor(Math.random() * colors.length);

    document.body.style.background = colors[random];
};

document.getElementById("timeBtn").onclick = function () {

    const now = new Date();

    document.getElementById("time").innerHTML =
        "🕒 " + now.toLocaleTimeString();
};

document.getElementById("welcomeBtn").onclick = function () {

    alert("Welcome to Git & GitHub Project 🚀");
};