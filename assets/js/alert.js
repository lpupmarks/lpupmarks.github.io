function displayPopup() {
            setTimeout(function() {
                Swal.fire({
                    title: '',
                    html: '<strong>I have taken on the challenge of reading 100 books.</strong><br/><a href="https://rahulgogoi.vercel.app/100books.html"  target="_blank" rel="noopener norefferer">Click here</a> to track my progress.',
                    icon: 'info',
                    showCloseButton: true,
                    showConfirmButton: false
                });
            }, 2500); 
        }

        // Call the function on page load
        window.onload = displayPopup;
