// Get the canvas element and set up the context for drawing
const canvas = document.getElementById('lineChart');
const ctx = canvas.getContext('2d');

// Line chart data (You can modify this dataset as needed)
const dataPoints = [65, 59, 80, 81, 56, 55, 40];
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

// Chart configuration
const chartWidth = canvas.width;
const chartHeight = canvas.height;
const margin = 50;
const step = chartWidth / (labels.length - 1); // Distance between each point

// Calculate scaling factor based on maximum data value
const maxDataValue = Math.max(...dataPoints);
const scaleY = (chartHeight - 2 * margin) / maxDataValue;

// Draw the axes
function drawAxes() {
    // X-axis
    ctx.beginPath();
    ctx.moveTo(margin, chartHeight - margin);
    ctx.lineTo(chartWidth - margin, chartHeight - margin);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, chartHeight - margin);
    ctx.stroke();
}

// Draw the labels (x-axis labels)
function drawLabels() {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#333';

    labels.forEach((label, index) => {
        const x = margin + index * step;
        const y = chartHeight - margin + 20;
        ctx.textAlign = 'center';
        ctx.fillText(label, x, y);
    });

    // Add Y-axis label (optional)
    ctx.fillText('Values', 30, chartHeight / 2);
}

// Draw the line chart
function drawLineChart() {
    ctx.beginPath();
    ctx.moveTo(margin, chartHeight - margin - dataPoints[0] * scaleY);

    dataPoints.forEach((dataPoint, index) => {
        const x = margin + index * step;
        const y = chartHeight - margin - dataPoint * scaleY;
        ctx.lineTo(x, y);
    });

    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Draw data points on the line chart
function drawDataPoints() {
    ctx.fillStyle = '#e67e22';
    dataPoints.forEach((dataPoint, index) => {
        const x = margin + index * step;
        const y = chartHeight - margin - dataPoint * scaleY;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Render the chart
drawAxes();
drawLabels();
drawLineChart();
drawDataPoints();
