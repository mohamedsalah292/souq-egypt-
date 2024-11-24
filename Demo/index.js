// --------------------------------------------- زر الشراء------------------------------------------------------- 
// التعامل مع زر "شراء"
document.querySelectorAll('.buy-button').forEach(button => {
  button.addEventListener('click', function() {
      const productName = this.getAttribute('data-product-name');
      const productPrice = this.getAttribute('data-product-price');

      // تخزين المعلومات في localStorage
      localStorage.setItem('productName', productName);
      localStorage.setItem('productPrice', productPrice);

      // إعادة التوجيه إلى صفحة الدفع
      window.location.href = 'payment.html';
  });
});




// spiner
 // Get the spinner element
 const spinner = document.querySelector('.spinner');

 // Function to start the spinner
 function startSpinner() {
   spinner.style.animation = 'spin 2s linear infinite';
 }

 // Function to stop the spinner
 function stopSpinner() {
   spinner.style.animation = 'none';
 }

 // Auto start the spinner
 startSpinner();

 // Example: Stop and restart in intervals (infinite autoplay)
 setInterval(() => {
   stopSpinner();
   setTimeout(startSpinner, 1000); // Restart after 1 second
 }, 5000);  // Stop every 5 seconds and restart



  






    


   



// إظهار الزر عند التمرير لأسفل
window.onscroll = function() {
let scrollBtn = document.getElementById("scrollToTopBtn");
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  scrollBtn.style.display = "block";
} else {
  scrollBtn.style.display = "none";
}
};

// وظيفة الصعود لأعلى
function scrollToTop() {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
}

















