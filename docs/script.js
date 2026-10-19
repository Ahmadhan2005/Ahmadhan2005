(() => {
  const canvas = document.getElementById('bg');
  const ctx = canvas.getContext('2d');
  let w=0,h=0,particles=[];
  function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight}
  window.addEventListener('resize',resize);resize();

  function rand(min,max){return Math.random()*(max-min)+min}
  function create(){for(let i=0;i<80;i++){particles.push({x:rand(0,w),y:rand(0,h),r:rand(0.6,2.6),vx:rand(-0.2,0.2),vy:rand(-0.2,0.2),a:rand(0.05,0.3)})}}
  create();
  function loop(){ctx.clearRect(0,0,w,h);for(let p of particles){p.x+=p.vx;p.y+=p.vy; if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0; ctx.beginPath(); ctx.fillStyle='rgba(110,250,255,'+p.a+')'; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill()} requestAnimationFrame(loop)}
  loop();
})();
