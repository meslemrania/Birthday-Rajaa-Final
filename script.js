const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "RAJAA1010";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FF007F";
    ctx.font = fontSize + "px arial";
    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

// --- الجزء المهم ديال الصوت والعد التنازلي ---
let count = 3;
const song = document.getElementById('birthday-song');

// حيلة باش المتصفح يسمح بالصوت: غير تبركي في الصفحة كيعرفك باغة تسمعي
document.body.addEventListener('click', () => {
    console.log("Audio permission granted");
}, { once: true });

const timer = setInterval(() => {
    count--;
    if (count > 0) {
        document.getElementById('countdown').innerText = count;
    } else {
        clearInterval(timer);
        document.getElementById('countdown').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        
        // تشغيل الموسيقى
        song.play().catch(error => {
            console.log("بركي في الصفحة باش يخدم الصوت");
        });
    }
}, 1000);

// تبديل الصور
let images = ["photo1.jpg", "photo2.jpg"];
let idx = 0;
setInterval(() => {
    idx = (idx + 1) % images.length;
    const img = document.getElementById('slideshow');
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = images[idx];
        img.style.opacity = 1;
    }, 500);
}, 3000);