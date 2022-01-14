;(function(){
    let box = document.querySelector('.sortbox');
    box.addEventListener('click',expand)
    function expand(){
        let list = document.querySelector('.sortlist');
        if(!(list.hasAttribute('expand'))){
            list.style.display="block";
            list.setAttribute('expand','true');
       }else{
            list.style.display="none";
            list.removeAttribute('expand');
        }
    }
})()