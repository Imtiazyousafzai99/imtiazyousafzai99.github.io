function addComment() {
    const commentsSection = document.getElementById('comments');
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<h4>New Comment:</h4><p>${commentText}</p>`;
        commentsSection.appendChild(newComment);
        commentInput.value = '';
    } else {
        alert('Please enter a comment before submitting.');
    }
}

function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
}
