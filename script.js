const text = document.getElementById("text");
const btn = document.getElementById("btn");
const colorBtn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {
    text.textContent = "Congratulations! JavaScript is working.";
});

colorBtn.addEventListener("click", () => {

    const colors = [
        "#f5f5f5",
        "#dff9fb",
        "#ffeaa7",
        "#fab1a0",
        "#55efc4",
        "#74b9ff"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.background = randomColor;

});