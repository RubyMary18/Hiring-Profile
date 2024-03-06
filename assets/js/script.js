let star = document.querySelector('.nav-bar .star');
let tabBtn = document.querySelectorAll('.tab-buttons li');
let content = document.querySelectorAll('.tab-content li');
tabBtn[1].classList.add('active');
content[1].classList.add('show');

console.log(content);

//changing color of star
star.addEventListener('click', ()=> {
    star.classList.toggle('col-btn');
    let colBtn = document.querySelector('.nav-bar .col-btn');
    colBtn.style.color = "yellow";
})

//Tab functionality
tabBtn.forEach((list,ind)=> {
    list.addEventListener('click', ()=>{

        //remove if active class is present
        tabBtn.forEach((list)=> {
        if(list.classList.contains('active')){
            list.classList.remove('active');
        }
    })

        console.log(list);
        list.classList.add('active');

        //remove if show class is present
        content.forEach(li => {
            if(li.classList.contains('show')){
                li.classList.remove('show');
            }
        })

        content[ind].classList.add('show');
    })
})
