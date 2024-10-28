document.getElementById('notifyButton').addEventListener('click', function() {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    
    // Show the notification for 5 seconds
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 1000);
});
