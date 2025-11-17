const foodsByTime = {
    morning: {
        label: "Sáng nay bạn nên ăn:",
        foods: [
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
        ],
    },
    afternoon: {
        label: "Chiều nay bạn nên ăn:",
        foods: [
            "cơm gà",
            "bún thịt nướng",
            "gà rán",
            "bánh canh",
            "bún riêu",
            "lẩu",
            "bánh hỏi",
            "cơm chiên",
            "mì xào",
        ],
    },
    evening: {
        label: "Tối nay bạn nên ăn:",
        foods: [
            "buffet hải sản",
            "bún đậu mắm tôm",
            "gỏi cá",
            "bánh cuốn",
            "cháo gà",
            "bò kho",
            "bánh bèo",
            "cơm niêu",
            "bún mắm",
        ],
    },
};

const dishes = document.querySelector(".dishes");
let hour = new Date().getHours();

function randomFoods(foods) {
    return foods[Math.floor(Math.random() * foods.length)];
}

function getCurrentTime() {
    if (hour >= 6 && hour < 12) {
        return foodsByTime.morning;
    } else if (hour >= 12 && hour < 18) {
        return foodsByTime.afternoon;
    } else {
        return foodsByTime.evening;
    }
}

function updateDish() {
    const { label, foods } = getCurrentTime();
    dishes.textContent = `${label} ${randomFoods(foods)}`;
}

updateDish();

function getRandomFood() {
    updateDish();
}
