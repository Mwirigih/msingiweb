const m=document.getElementById('menu'),l=document.getElementById('links');
m&&m.addEventListener('click',()=>{const o=l.classList.toggle('open');m.setAttribute('aria-expanded',o)});
