 document.addEventListener('DOMContentLoaded', () =>{
    // вкладки открываются
    const items = document.querySelectorAll('.faq__item')

    items.forEach(item => {
        item.addEventListener('click', ()=>{
            const isActive = item.classList.contains('faq__item--active')
            items.forEach(c =>{
                c.classList.remove('faq__item--active');
                c.querySelector('.faq__heading-text').classList.remove('faq__heading-text--active');
                c.querySelector('.faq__icon').classList.remove('faq__icon--active');
            })
            if (!isActive){
                item.classList.add('faq__item--active');
                item.querySelector('.faq__heading-text').classList.add('faq__heading-text--active');
                item.querySelector('.faq__icon').classList.add('faq__icon--active');
            }
            console.log(isActive)
        })
    })   


    // Сотрудники
const members = document.querySelectorAll('.personal__team-member');
 const memberPhoto = document.getElementById('personal-photo')
 const memberName = document.getElementById('personal-name')
 const memberSurname = document.getElementById('personal-surname')
 const memberBio = document.getElementById('personal-bio')
 const memberLink = document.getElementById('personal-link')

 const personalData = {
     1:{
         name: 'Liam',
         surname:'Bennett',
         bio:'The specialist in traditional and neo-traditional styles. With a deep respect for tattoo history, Liam combines classic techniques with modern twists, producing timeless pieces that honor the craft\'s rich heritage.',
         link:'https://www.instagram.com/',
         photo:'img/photo/employee-1.png'
     },
     2:{
         name: 'Irene',
         surname:'Jenkins',
         bio:'An expert in realistic and portrait tattoos, Irene creates stunningly lifelike designs. Her keen eye for detail and passion for capturing emotion in her work makes her highly sought after in the tattoo community.',
         link:'https://www.instagram.com/',
         photo:'img/photo/employee-2.png'
     },
     3:{
         name: 'Sophia',
         surname:'Carter',
         bio:'Sophia specializes in watercolor and abstract tattoos. Her unique approach to blending colors and creating fluid designs results in tattoos that are both beautiful and expressive.',
         link:'https://www.instagram.com/',
         photo:'img/photo/employee-3.png'
     },
     4:{
         name: 'Ethan',
         surname:'Martinez',
         bio:'Known for his intricate geometric and dotwork tattoos, Ethan combines precision and creativity to craft mesmerizing patterns. His dedication to the art form is evident in every piece he creates.',
         link:'https://www.instagram.com/',
         photo:'img/photo/employee-4.png'
     }
 }  

 // отображение изначального сотрудника
 const firstMember  = personalData[1]
 memberName.textContent = firstMember.name
 memberSurname.textContent = firstMember.surname
 memberBio.textContent = firstMember.bio
 memberLink.href = firstMember.link
 memberPhoto.src = firstMember.photo

 members.forEach(member =>{
     member.addEventListener('click', () => {
        members.forEach(c =>{
            c.classList.remove('personal__team-member--active')
         })
        member.classList.add('personal__team-member--active')
        
        toggleClass(memberBio, 'text-show');
        toggleClass(memberName, 'text-show');
        toggleClass(memberSurname, 'text-show');
        toggleClass(document.getElementById('personal-photo-block'), 'personal-img--show');
        
        const memberId = member.dataset.member;
         const data = personalData[memberId]
         
         memberName.textContent = data.name
         memberSurname.textContent = data.surname
         memberBio.textContent = data.bio
         memberLink.href = data.link
         memberPhoto.src = data.photo

     })
 })

//  слайдер отзывов

const reviewNext = document.getElementById('reviews-btn-next');
const reviewPrev = document.getElementById('reviews-btn-prev');
const reviewPhoto1 = document.getElementById('reviews-photo1');
const reviewPhoto2 = document.getElementById('reviews-photo2');
const reviewPhoto3 = document.getElementById('reviews-photo3');
const reviewName = document.getElementById('reviews-name');
const reviewReview = document.getElementById('reviews-review');

let reviewIndex = 0;

const reviewSlides = [
    {
    photo1:'img/photo/rivews/emily-review-1.png',
    photo2:'img/photo/rivews/emily-review-2.png',
    photo3:'img/photo/rivews/emily-review-3.png', 
    rotatePhoto3: false,
    name:'Emily R.', 
    review:'Fantastic experience! Talented artists, friendly staff, and a clean studio. My custom tattoo turned out perfect. Highly recommend!'
    },
    {
    photo1:'img/photo/rivews/john-review-1.png',
    photo2:'img/photo/rivews/john-review-2.png',
    photo3:'img/photo/rivews/john-review-3.png', 
    rotatePhoto3: true,
    name:'John D.', 
    review:'Incredible experience! Professional artists and a welcoming environment. Thrilled with my new tattoo!'
    },
    {
    photo1:'img/photo/rivews/sarah-review-1.png',
    photo2:'img/photo/rivews/sarah-review-2.png',
    photo3:'img/photo/rivews/sarah-review-3.png', 
    name:'Sarah A.', 
    rotatePhoto3: true,
    review:'Amazing service and artistry! The staff made me feel comfortable, and my tattoo looks fantastic!'
    },
]
function updateReview(){
    const review = reviewSlides[reviewIndex]
    setTimeout(()=>{
        reviewPhoto1.src = review.photo1
        reviewPhoto2.src = review.photo2
        reviewPhoto3.src = review.photo3
        if (review.rotatePhoto3 === true){
            reviewPhoto3.classList.add('reviews-img-show--rotate')
        }else{
            reviewPhoto3.classList.remove('reviews-img-show--rotate')
        }
    },200)
    reviewName.textContent = review.name
    reviewReview.textContent= review.review
    toggleClass(reviewName,'text-show')
    toggleClass(reviewReview,'text-show')
    toggleClass(reviewPhoto1,'reviews-img-show--left')
    toggleClass(reviewPhoto2,'reviews-img-show--right')
    toggleClass(reviewPhoto3,'reviews-img-show--right')
    
}
updateReview()

reviewNext.addEventListener('click',()=>{
    reviewIndex = (reviewIndex+1)% reviewSlides.length;
    updateReview()
})
reviewPrev.addEventListener('click',()=>{
    reviewIndex = (reviewIndex-1 +reviewSlides.length)% reviewSlides.length;
    updateReview()
})

// смена стиля другого элемента
reviewNext.addEventListener('mouseenter',()=>{
    reviewPrev.classList.add('reviews__border-black');
});
reviewNext.addEventListener('mouseleave',()=>{
    reviewPrev.classList.remove('reviews__border-black')
})
reviewPrev.addEventListener('mouseenter',()=>{
    reviewNext.classList.add('reviews__border-black');
});
reviewPrev.addEventListener('mouseleave',()=>{
    reviewNext.classList.remove('reviews__border-black')
})


// Добавление класса при видимости объекта
const advantagesLine = document.getElementById('advantages-line')
const advantagesLineBg = document.getElementById('advantages-line-bg')
const introContent = document.querySelector('.intro__content')
const introLine = document.getElementById('01')


const observerOptions = {
    root: null, // null означает, что в качестве корня используется viewport
    rootMargin: '0px',
    threshold: 0.6 // процент видимости элемента
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } 
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
 
observer.observe(advantagesLine);
observer.observe(advantagesLineBg);
observer.observe(introContent);
observer.observe(introLine);

//  анимацция появления 
function toggleClass(element, className) {
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
}

// Карта
const geoBtn = document.getElementById('geo-btn')
const geoBlock = document.getElementById('geo-block')

introContent.addEventListener('click',()=>{
    geoBlock.classList.remove('visible')
})
geoBtn.addEventListener('click',()=>{
    geoBlock.classList.add('visible')
})

})

// Menu
const menu = document.getElementById('menu')
const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const menulinkAnchor = document.querySelectorAll('.menu__sitemap-link')

menulinkAnchor.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.toggle('visible')
    })
})
menuClose.addEventListener('click',()=>{
    menu.classList.toggle('visible')
})
menuOpen.addEventListener('click',()=>{
    menu.classList.toggle('visible')
})

console.log( window. innerWidth)