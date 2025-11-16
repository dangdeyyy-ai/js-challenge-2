const foods = [
    "phở",
    "cơm tấm",
    "hủ tiếu",
    "bánh mì",
    "bún bò Huế",
    "gỏi cuốn",
    "bánh xèo",
    "cháo lòng",
    "bún chả",
    "mì Quảng",
];
const dishes = document.querySelector(".dishes");
const oneTimePick = document.getElementById("oneTimePick");

function getRandomFood() {
    const randomFood = Math.floor(Math.random() * foods.length);
    dishes.textContent = foods[randomFood];
    oneTimePick.textContent = "Gợi ý món ăn khác";
}
