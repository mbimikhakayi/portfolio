(function(){
  var b=document.querySelector('.burger'),m=document.querySelector('.menu');
  if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('ouvert');b.setAttribute('aria-expanded',o)})}
  var els=document.querySelectorAll('.apparait');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vu');io.unobserve(e.target)}})},{threshold:.08});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('vu')})}
  var f=document.getElementById('form-contact');
  if(f){f.addEventListener('submit',function(ev){ev.preventDefault();
    var n=f.nom.value.trim(),e=f.email.value.trim(),t=f.message.value.trim();
    var corps=t+'\n\n— '+n+(e?' ('+e+')':'');
    window.location.href='mailto:exaucee.mbimikhakayi@gmail.com?subject='+encodeURIComponent('Contact portfolio – '+n)+'&body='+encodeURIComponent(corps);
  })}
})();
