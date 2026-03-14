




var availableAvatars = ['avatar1.jpg', 'avatar2.jpg', 'avatar3.jpg'];


function getRandomAvatar() {
    var randomIndex = Math.floor(Math.random() * availableAvatars.length);
    return availableAvatars[randomIndex];
}




var posts = [
    {
        username: 'mohamed',
        avatar: 'avatar1.jpg',
        image: 'assets/community_gym.png',
        caption: 'Consistency is key! Keep pushing!',
        tags: ['Fitness', 'Determination']
    },
    {
        username: 'sarah',
        avatar: 'avatar2.jpg',
        image: 'assets/meal_salad.png',
        caption: 'Meal prep Sunday! Ready for a healthy week ahead.',
        tags: ['Meal Prep', 'Healthy Eating']
    },
    {
        username: 'alex',
        avatar: 'avatar3.jpg',
        image: 'assets/meal_berry.png',
        caption: 'Morning smoothie routine is changing my life!',
        tags: ['Nutrition', 'Wellness']
    }
];




var reviews = [
    {
        stars: 5,
        text: 'Flowence has completely transformed my approach to health and fitness. The personalized meal plans and community support are incredible!',
        name: 'Emma Johnson',
        role: 'Fitness Enthusiast',
        avatar: 'avatar1.jpg'
    },
    {
        stars: 5,
        text: 'I\'ve lost 15 pounds in 3 months thanks to Flowence. The tracking features and coach guidance made all the difference.',
        name: 'Michael Chen',
        role: 'Member since 2024',
        avatar: 'avatar3.jpg'
    },
    {
        stars: 5,
        text: 'Best health platform I\'ve ever used. The recipes are delicious and the progress tracking keeps me motivated every day.',
        name: 'Sophia Martinez',
        role: 'Wellness Coach',
        avatar: 'avatar2.jpg'
    }
];




var currentPostIndex = 0;
var currentReviewIndex = 0;




function updatePostCard() {
    var postCard = document.getElementById('current-post-card');
    if (!postCard) return;

    var post = posts[currentPostIndex];
    var tagsHTML = '';
    for (var i = 0; i < post.tags.length; i++) {
        tagsHTML += '<span class="tag">' + post.tags[i] + '</span>';
    }

    postCard.innerHTML =
        '<div class="post-header">' +
        '<div class="user-info">' +
        '<div class="avatar"><img src="' + post.avatar + '" alt="Avatar"></div>' +
        '<span class="username">' + post.username + '</span>' +
        '</div>' +
        '<div class="post-options">...</div>' +
        '</div>' +
        '<div class="post-image">' +
        '<img src="' + post.image + '" alt="Community Post">' +
        '</div>' +
        '<div class="post-footer">' +
        '<p class="caption">' + post.caption + '</p>' +
        '<div class="tags">' + tagsHTML + '</div>' +
        '</div>';
}




function updateReviewCard() {
    var reviewCard = document.getElementById('current-review-card');
    if (!reviewCard) return;

    var review = reviews[currentReviewIndex];
    var stars = '';
    var starIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="currentColor" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" /><path d="M12.8638 7.72209L13.7437 9.49644C13.8637 9.74344 14.1837 9.98035 14.4536 10.0257L16.0485 10.2929C17.0684 10.4643 17.3083 11.2103 16.5734 11.9462L15.3335 13.1964C15.1236 13.4081 15.0086 13.8164 15.0736 14.1087L15.4285 15.6562C15.7085 16.8812 15.0636 17.355 13.9887 16.7148L12.4939 15.8226C12.2239 15.6613 11.7789 15.6613 11.504 15.8226L10.0091 16.7148C8.93925 17.355 8.28932 16.8761 8.56929 15.6562L8.92425 14.1087C8.98925 13.8164 8.87426 13.4081 8.66428 13.1964L7.42442 11.9462C6.6945 11.2103 6.92947 10.4643 7.94936 10.2929L9.54419 10.0257C9.80916 9.98035 10.1291 9.74344 10.2491 9.49644L11.129 7.72209C11.609 6.7593 12.3889 6.7593 12.8638 7.72209Z" /></svg>';

    for (var i = 0; i < review.stars; i++) {
        stars += starIcon;
    }

    reviewCard.innerHTML =
        '<div class="review-stars">' + stars + '</div>' +
        '<p class="review-text">"' + review.text + '"</p>' +
        '<div class="review-author">' +
        '<div class="review-avatar">' +
        '<img src="' + review.avatar + '" alt="Avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">' +
        '</div>' +
        '<div class="review-author-info">' +
        '<div class="review-name">' + review.name + '</div>' +
        '<div class="review-role">' + review.role + '</div>' +
        '</div>' +
        '</div>';
}




function initIndexPage() {
    
    var postPrevBtn = document.querySelector('.posts-carousel .carousel-prev');
    var postNextBtn = document.querySelector('.posts-carousel .carousel-next');

    if (postPrevBtn) {
        postPrevBtn.onclick = function () {
            currentPostIndex = (currentPostIndex - 1 + posts.length) % posts.length;
            updatePostCard();
        };
    }

    if (postNextBtn) {
        postNextBtn.onclick = function () {
            currentPostIndex = (currentPostIndex + 1) % posts.length;
            updatePostCard();
        };
    }

    var reviewPrevBtn = document.querySelector('.reviews-carousel .carousel-prev');
    var reviewNextBtn = document.querySelector('.reviews-carousel .carousel-next');

    if (reviewPrevBtn) {
        reviewPrevBtn.onclick = function () {
            currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
            updateReviewCard();
        };
    }

    if (reviewNextBtn) {
        reviewNextBtn.onclick = function () {
            currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
            updateReviewCard();
        };
    }

    updatePostCard();
    updateReviewCard();
}


if (document.readyState === 'loading') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            initIndexPage();
        }
    };
} else {
    initIndexPage();
}
