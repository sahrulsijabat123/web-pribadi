const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelectorAll('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon'); // Gunakan querySelector, bukan querySelectorAll
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark'); // Ubah ikon menjadi xmark
    navbar.classList.toggle('active');    // Tambahkan atau hapus class 'active' pada nav
});

const activePage = ()=> {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);


    navLinks.forEach(link =>  {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section =>  {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('fa-xmark'); 
    navbar.classList.remove('active');   
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});


logoLinks.forEach(logo => {
    logo.addEventListener('click', () => {
        if (!navLinks[0].classList.contains('active')) {
            activePage();

            navLinks[0].classList.add('active');

            setTimeout(() => {
                sections[0].classList.add('active');
            }, 1100);
        }
    });
});




const pengalamanBtns = document.querySelectorAll('.pengalaman-btn');

pengalamanBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const pengalamanDetails = document.querySelectorAll('.pengalaman-detail')

        pengalamanBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        pengalamanDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        pengalamanDetails[idx].classList.add('active');
    });
});


const arrowRight = document.querySelector('.dokumentasi-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.dokumentasi-box .navigation .arrow-left');

let index = 0;

const activedokumentasi = () => {
    const imgSlide = document.querySelector('.dokumentasi-carousel .img-slide');
    const dokumentasiDetails = document.querySelectorAll('.dokumentasi-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    dokumentasiDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    dokumentasiDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < 9) { // Batas untuk 5 slide (0-4)
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 8;
        arrowRight.classList.add('disabled'); // Jangan ubah ke 5 jika maksimal adalah 4
    }

    activedokumentasi();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) { // Batas untuk 5 slide (0-4)
        index--;
        arrowRight.classList.remove('disabled')
    } else {
        index = 0;
        arrowLeft.classList.add('disabled'); // Jangan ubah ke -1 jika minimal adalah 0
    }

    activedokumentasi();
});
