
// header - menu
const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
});

// main - about me - tab-links
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// contact me
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // спира презареждането
        const data = new FormData(form);
        
        const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
        });

        if (response.ok) {
        status.innerHTML = "✅ Successfully sent!";
        form.reset();
        } else {
        status.innerHTML = "❌ Something went wrong. Please try again.";
        }
    });
});