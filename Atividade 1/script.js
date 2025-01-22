const xSlider = document.getElementById('xSlider');
const dataPoint = document.getElementById('dataPoint');

const xMinPixel = 40;
const xMaxPixel = 540;
const yMinPixel = 40;
const yMaxPixel = 540;

function updatePointPosition() {
    const xValue = xSlider.value;
    const yValue = Math.pow(xValue, 2);
    const maxY = 10000;
    const rangeSlider = 100;
    const pixelRangeX = xMaxPixel - xMinPixel;
    const pixelRangeY = yMaxPixel - yMinPixel;

    const newX = xMinPixel + (xValue / rangeSlider) * pixelRangeX;
    const scaledYValue = Math.min(yValue / maxY, 1);
    const newY = yMaxPixel - scaledYValue * pixelRangeY;

    dataPoint.setAttribute('cx', newX);
    dataPoint.setAttribute('cy', newY);
}

updatePointPosition();
xSlider.addEventListener('input', updatePointPosition);
