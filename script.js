document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(${index * 100}%)`;
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    };

    document.querySelector('.next-slide').addEventListener('click', nextSlide);
    document.querySelector('.prev-slide').addEventListener('click', prevSlide);

    // Automatically go to the next slide every 3 seconds
    setInterval(nextSlide, 6000);
})

    // Form validation
//     const form = document.querySelector('form');
//     const nameInput = form.querySelector('input[placeholder="الاسم الكامل"]');
//     const cityInput = form.querySelector('input[placeholder="المدينة"]');
//     const phoneInput = form.querySelector('input[placeholder="رقم الهاتف"]');
//     const emailInput = form.querySelector('input[placeholder="البريد الإلكتروني"]');
//     const errorMessage = document.createElement('div');
//     errorMessage.classList.add('error-message');
//     form.appendChild(errorMessage);

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         errorMessage.textContent = '';
//         let valid = true;

//         if (nameInput.value.trim() === '') {
//             valid = false;
//             errorMessage.textContent += 'الرجاء إدخال الاسم الكامل.\n';
//         }

//         if (cityInput.value.trim() === '') {
//             valid = false;
//             errorMessage.textContent += 'الرجاء إدخال المدينة.\n';
//         }

//         // if (phoneInput.value.trim() === '' || !/^\d{10}$/.test(phoneInput.value)) {
//         //     valid = false;
//         //     errorMessage.textContent += 'الرجاء إدخال رقم هاتف صحيح.\n';
//         // }

//         if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value)) {
//             valid = false;
//             errorMessage.textContent += 'الرجاء إدخال بريد إلكتروني صحيح.\n';
//         }

//         if (valid) {
//             alert('تم إرسال بياناتك بنجاح!');
//         }
//     });
// });


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Form submission received!');
        } else {
            alert('There was an error submitting the form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
