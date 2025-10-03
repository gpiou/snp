const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 512x512 canvas
const canvas = createCanvas(512, 512);
const ctx = canvas.getContext('2d');

// Background gradient
const gradient = ctx.createLinearGradient(0, 0, 512, 512);
gradient.addColorStop(0, '#1e40af'); // blue-800
gradient.addColorStop(1, '#3b82f6'); // blue-500
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 512, 512);

// Add rounded corners
ctx.globalCompositeOperation = 'destination-in';
ctx.beginPath();
ctx.roundRect(0, 0, 512, 512, 64);
ctx.fill();

// Reset composite operation
ctx.globalCompositeOperation = 'source-over';

// Draw the "S" logo
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 320px Arial, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('S', 256, 256);

// Add a subtle shadow
ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
ctx.shadowBlur = 20;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 10;

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/snaplogo.png', buffer);

console.log('✅ Snaptube logo created successfully!');
