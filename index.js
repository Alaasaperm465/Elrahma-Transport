function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// إضافة تأثيرات للروابط في شريط التنقل
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // إضافة مستمع حدث لكل رابط
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة النشاط من جميع الروابط
            navLinks.forEach(item => item.classList.remove('active'));
            
            // إضافة النشاط للرابط المحدد
            this.classList.add('active');
            
            // التمرير إلى القسم المطلوب
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // إضافة تأثير التمرير لتحديد القسم النشط
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // معالجة نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع بيانات النموذج
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            
            alert(`شكراً ${name}!
            تم استلام طلبك بنجاح سنتواصل بك على الرقم ${phone} في أقرب وقت.`);
            
            // إعادة تعيين النموذج
            this.reset();
        });
    }
    
    // إضافة تأثيرات للبطاقات عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // تطبيق تأثير الظهور على البطاقات
    const cards = document.querySelectorAll('.feature-card, .service-card, .gallery-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
        // إضافة تأثيرات إضافية عند التمرير
        document.addEventListener('DOMContentLoaded', function() {
            const floatingButtons = document.querySelector('.floating-buttons');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    floatingButtons.style.opacity = '1';
                    floatingButtons.style.transform = 'translateY(0)';
                }
            });

            // تأثير الظهور الأولي
            setTimeout(() => {
                floatingButtons.style.opacity = '1';
                floatingButtons.style.transform = 'translateY(0)';
            }, 1000);
        });
