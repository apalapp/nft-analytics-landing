const getInTouch = document.querySelector('#contacts');
const aboutUs = document.querySelector("header")
const joinWaitlistBtn = document.querySelector('#join-waitlist');
const freeConsultationBtn = document.querySelector('#free-consultation');
const joinListBtn = document.querySelector('#join-list');
const anchorContacts = document.querySelector('.contacts-ref');
const anchorAboutUs = document.querySelector('.about-us-ref');
const joinForm = document.querySelector('#join-form');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('#btn-submit');

function scrollToTarget(target) {
    target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const buttons = [
    joinListBtn,
    joinWaitlistBtn,
    freeConsultationBtn,
];

joinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(joinForm);
    const action = e.target.action;
    fetch(action, {
        method: 'POST',
        body: data,
    })
        .then(() => {
            alert("Success!");
        })
    email.value = '';
});

anchorContacts.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToTarget(getInTouch);
})

anchorAboutUs.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToTarget(aboutUs);
})

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        scrollToTarget(getInTouch);
    })
})
