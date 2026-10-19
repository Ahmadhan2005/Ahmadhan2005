(() => {
  const canvas = document.getElementById('bg');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w=0,h=0,particles=[];
  function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight}
  window.addEventListener('resize',resize);resize();

  function rand(min,max){return Math.random()*(max-min)+min}
  function create(){particles=[];for(let i=0;i<60;i++){particles.push({x:rand(0,w),y:rand(0,h),r:rand(0.6,2.2),vx:rand(-0.25,0.25),vy:rand(-0.25,0.25),a:rand(0.06,0.28)})}}
  create();
  function loop(){ctx.clearRect(0,0,w,h);for(let p of particles){p.x+=p.vx;p.y+=p.vy; if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0; ctx.beginPath(); ctx.fillStyle='rgba(0,230,255,'+p.a+')'; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill()} requestAnimationFrame(loop)}
  loop();
})();
