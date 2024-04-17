function displayPopup() {
            setTimeout(function() {
                Swal.fire({
                    title: '',
                    html: 'I have taken a challange to read 100 books.<br/><a href="./100books.html"  target="_blank" rel="noopener norefferer">Click here</a> to see the timeline of the progress made so far.',
                    icon: 'info',
                    showCloseButton: true,
                    showConfirmButton: false
                });
            }, 2500); 
        }

        // Call the function on page load
        window.onload = displayPopup;