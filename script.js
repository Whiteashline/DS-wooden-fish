document.addEventListener('DOMContentLoaded', () => {
    const muyu = document.getElementById('muyu');
    const countDisplay = document.getElementById('count');
    const particlesContainer = document.getElementById('particles-container');
    
    // 从本地存储加载计数
    let count = localStorage.getItem('muyuCount') || 0;
    countDisplay.textContent = count;
    
    // 木鱼点击事件
    muyu.addEventListener('click', () => {
        // 增加计数
        count++;
        countDisplay.textContent = count;
        
        // 保存到本地存储
        localStorage.setItem('muyuCount', count);
        
        // 播放敲击动画
        muyu.style.transform = 'scale(0.95)';
        setTimeout(() => {
            muyu.style.transform = 'scale(1)';
        }, 100);
        
        // 创建粒子效果
        createParticle();
        
        // 播放木鱼声音
        playMuyuSound();
    });
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = '功德+1';
        
        // 随机位置
        const x = Math.random() * 200 - 100;
        particle.style.left = `calc(50% + ${x}px)`;
        particle.style.top = '50%';
        
        particlesContainer.appendChild(particle);
        
        // 动画结束后移除粒子
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
    
    function playMuyuSound() {
        const audio = new Audio();
        audio.src = 'muyu.mp3';
        audio.play().catch(e => console.log('自动播放被阻止:', e));
    }
    
    // 点击文档任何地方也能触发（可选）
    document.addEventListener('click', (e) => {
        if (e.target !== muyu) {
            muyu.click();
        }
    });
});
