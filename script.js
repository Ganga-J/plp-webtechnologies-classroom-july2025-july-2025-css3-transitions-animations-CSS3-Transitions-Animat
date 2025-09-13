const calcAreaBtn = document.getElementById('calcAreaBtn');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const radiusInput = document.getElementById('radius');
const resultArea = document.getElementById('resultArea');
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const contentDiv = document.querySelector('.content'); // Select the content div

// Function to update the result area, separating calculation from display
function updateResult(message) {
    resultArea.textContent = message;
}

// Rectangle 
function calculateRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        return "Please enter valid width and height.";
    }
    return width * height;
}

// Circle 
function calculateCircleArea(radius) {
    if (isNaN(radius)) {
        return "Please enter a valid radius.";
    }
    const area = Math.PI * radius * radius;
    return area.toFixed(2);
}

// Square 
function calculateSquareArea(width) {
    if (isNaN(width)) {
        return "Please enter a valid width.";
    }
    return width * width;
}

// Triangle 
function calculateTriangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        return "Please enter valid base and height.";
    }
    return 0.5 * width * height;
}

// Greet function remains the same
function greetUser() {
    const name = nameInput.value;
    updateResult(`Hello, ${name}! Welcome to the Area Calculator.`);
}

// Function to trigger the pop animation
function triggerPopAnimation() {
    contentDiv.classList.add('pop-effect');
    // Remove the class after the animation is finished to allow it to be re-triggered
    setTimeout(() => {
        contentDiv.classList.remove('pop-effect');
    }, 500); // 500ms matches the animation duration
}

// Event listeners
calcAreaBtn.addEventListener('click', () => {
    // Trigger the animation
    triggerPopAnimation();

    const shape = document.getElementById('shape').value;
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
    const radius = parseFloat(radiusInput.value);
    let areaResult;

    if (shape === 'rectangle') {
        areaResult = calculateRectangleArea(width, height);
        if (typeof areaResult === 'number') {
            updateResult(`Area of Rectangle: ${areaResult} sq units`);
        } else {
            updateResult(areaResult);
        }
    } else if (shape === 'circle') {
        areaResult = calculateCircleArea(radius);
        if (!isNaN(areaResult)) {
            updateResult(`Area of Circle: ${areaResult} sq units`);
        } else {
            updateResult(areaResult);
        }
    } else if (shape === 'square') {
        areaResult = calculateSquareArea(width);
        if (typeof areaResult === 'number') {
            updateResult(`Area of Square: ${areaResult} sq units`);
        } else {
            updateResult(areaResult);
        }
    } else if (shape === 'triangle') {
        areaResult = calculateTriangleArea(width, height);
        if (typeof areaResult === 'number') {
            updateResult(`Area of Triangle: ${areaResult} sq units`);
        } else {
            updateResult(areaResult);
        }
    }
});

greetBtn.addEventListener('click', greetUser);