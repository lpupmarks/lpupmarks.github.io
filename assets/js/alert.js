function displayPopup() {
            setTimeout(function() {
                Swal.fire({
                    title: '',
                    html: 'I have taken on the challenge of reading 100 books<br/><a href="https://hookedwithbooks.vercel.app/100books.html"  target="_blank" rel="noopener norefferer">Click here</a> to track my progress.',
                    icon: 'info',
                    showCloseButton: true,
                    showConfirmButton: false
                });
            }, 2500); 
        }

        window.onload = displayPopup;
