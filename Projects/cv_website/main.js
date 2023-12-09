function showMore() {
    var shortText = document.getElementById("shortText");
    var fullText = document.getElementById("fullText");
    var toggleButton = document.getElementById("toggleButton");

    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        toggleButton.innerText = "Less";
    } else {
        fullText.style.display = "none";
        shortText.style.display = "block";
        toggleButton.innerText = "More";
    }
}

function showDescription(skill, event) {
    var descriptionBubble = document.getElementById('descriptionBubble');
    var skillBubbleRect = event.target.getBoundingClientRect();

    descriptionBubble.innerHTML = getDescription(skill);
    descriptionBubble.classList.add('hovered');
    descriptionBubble.style.left = skillBubbleRect.left + 'px'; // Align with the left of the skill bubble
    descriptionBubble.style.top = (skillBubbleRect.top + skillBubbleRect.height + window.scrollY) + 'px'; // Position below the skill bubble
}

function hideDescription(event) {
        var descriptionBubble = document.getElementById('descriptionBubble');
        setTimeout(function() {
            if (!descriptionBubble.matches(':hover')) {
                descriptionBubble.classList.remove('hovered');
            }
        }, 10); // Small timeout to allow for checking hover state
    }

function getDescription(skill) {
    // Return a description based on the skill
    switch(skill) {
        case 'Creativity':
            return 'Ability to think outside the box.';
        // Add cases for other skills
        default:
            return '';
    }
}

