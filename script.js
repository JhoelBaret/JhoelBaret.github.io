const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu-btn');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));

const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  })
},{threshold:.08});
reveals.forEach(el=>observer.observe(el));

const cursor=document.querySelector('.cursor');
if(cursor && matchMedia('(pointer:fine)').matches){
  window.addEventListener('mousemove',e=>{
    cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';
  });
  document.querySelectorAll('a,button,.project,.service').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cursor.style.width='32px';cursor.style.height='32px'});
    el.addEventListener('mouseleave',()=>{cursor.style.width='18px';cursor.style.height='18px'});
  });
}

document.querySelectorAll('.filters button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('.project').forEach(project=>{
      const show=filter==='all'||project.dataset.category===filter;
      project.style.display=show?'block':'none';
    });
  });
});

document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Optional local video support: if you add assets/video/showreel.mp4, it will replace the placeholder.
const videoBox=document.querySelector('.video-placeholder');
const videoPath='assets/video/showreel.mp4';
fetch(videoPath,{method:'HEAD'}).then(r=>{
  if(r.ok && videoBox){
    videoBox.innerHTML=`<video src="${videoPath}" autoplay muted loop playsinline controls></video>`;
    const v=videoBox.querySelector('video');
    v.style.cssText='width:100%;height:100%;object-fit:cover';
  }
}).catch(()=>{});

// Netlify form fallback message
document.querySelector('.contact-form')?.addEventListener('submit',()=>{
  setTimeout(()=>alert('Thanks. Your project inquiry has been sent.'),100);
});
