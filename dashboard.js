console.log('Dashboard loaded!');

// Example: Animate progress bars
const progressBars = document.querySelectorAll('progress');
progressBars.forEach(bar => {
    const value = bar.getAttribute('value');
    bar.value = 0;
    const interval = setInterval(() => {
        if (bar.value < value) {
            bar.value++;
        } else {
            clearInterval(interval);
        }
    }, 20);
});
