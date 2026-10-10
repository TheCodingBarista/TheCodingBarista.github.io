(function(){var sc=document.querySelector('.scene'),st=document.querySelector('.stage');function f(){st.style.transform='scale('+sc.clientWidth/1536+')'}f();addEventListener('resize',f);if(window.ResizeObserver)new ResizeObserver(f).observe(sc)})();

(function(){
var btn=document.getElementById('chatBtn'),form=document.getElementById('chatForm'),msg=document.getElementById('chatMsg');
if(!btn||!form)return;
/* Set this to Mel's email address and the form opens a ready-to-send email for the visitor. */
var CONTACT_EMAIL='melissa.holt21@gmail.com';
var CARD='https://hihello.com/p/01c08fe4-c7a0-442a-ad95-c86bd676763f';
btn.addEventListener('click',function(){form.hidden=!form.hidden;btn.setAttribute('aria-expanded',String(!form.hidden));if(!form.hidden){var f=form.querySelector('input');if(f)f.focus();}});
function fallback(){msg.textContent="Sending isn't set up on this page yet. ";var a=document.createElement('a');a.href=CARD;a.target='_blank';a.rel='noopener';a.textContent='Reach Mel through her digital card.';msg.appendChild(a);}
form.addEventListener('submit',function(ev){
ev.preventDefault();msg.textContent='';
var n=form.elements['name'].value.trim(),e=form.elements['email'].value.trim(),m=form.elements['message'].value.trim();
if(!n||!m||e.indexOf('@')<1){msg.textContent='Please add your name, a valid email and a message.';return;}
if(!CONTACT_EMAIL){fallback();return;}
var body=m+'\n\n- '+n+' ('+e+')';
window.location.href='mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent("Let's chat - message from "+n)+'&body='+encodeURIComponent(body);
msg.textContent='Thanks, '+n+'! Your email app should open with your message ready to send.';
});
})();
(function(){
var book=document.querySelector('#journal .jr-book');if(!book)return;
var leaves=[].slice.call(book.querySelectorAll('[data-leaf]')),N=leaves.length,idx=0;
var prev=document.getElementById('jrPrev'),next=document.getElementById('jrNext'),lbl=document.getElementById('jrLbl');
function labelFor(i){if(N===2)return i===0?'Entry 1':(i===1?'Entries 2 & 3':'Entry 4 \u00b7 to be continued');return i===0?'Entry 1':(i===N?'The end \u2026 for now':'Entries '+i+' & '+(i+1));}
function render(){leaves.forEach(function(l,i){var f=idx>i;l.style.transform='rotateY('+(f?-180:0)+'deg)';l.style.zIndex=f?i+1:N-i+1;});prev.disabled=idx===0;next.disabled=idx===N;lbl.textContent=labelFor(idx);}
prev.addEventListener('click',function(){idx=Math.max(0,idx-1);render();});
next.addEventListener('click',function(){idx=Math.min(N,idx+1);render();});
render();
})();
