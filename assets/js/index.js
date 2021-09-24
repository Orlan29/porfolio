const message = (e) => {
    e.preventDefault();
    alert('Sorry! This functionality comming soon in feature update');
};

const downloadBtn = document.querySelector('a[download]');
downloadBtn.addEventListener('click', message);

const skills = document.querySelectorAll('.skills-item-head');
skills.forEach((item) => {
    item.addEventListener('click', message);
});

const submitBtn = document.querySelector('button[type=submit]');
submitBtn.addEventListener('click', message);
