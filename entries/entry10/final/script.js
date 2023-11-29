$(document).ready(function () {
    // Idea 1: Interactive Zodiac Puzzle
    submitReflectiveJournal();
});



// Add this function to handle the reflective journal submission
function submitReflectiveJournal() {
    const userThoughts = $('#userThoughts').val();

    if (userThoughts.trim() !== '') {
        // Display a loading message
        $('#journalContent').html('<p>On the way to the moon...</p>');

        // Simulate a delay (you can replace this with an actual AJAX request)
        setTimeout(function () {
            // Display a popup message
            alert('Your thoughts are on the way to the moon!');

            // Reset the content to the black section
            $('#reflectiveJournal').html('<h2>Reflective Journaling</h2><div id="journalContent"><textarea id="userThoughts" placeholder="Type your thoughts here..."></textarea><button id="submitThoughts">Submit</button></div>');

            // Attach the submit event handler again
            $('#submitThoughts').on('click', submitReflectiveJournal);
        }, 1000); // 2000 milliseconds (2 seconds) delay for simulation
    } else {
        // If the user didn't type anything, show an alert or handle it as needed
        alert('Journal how you feel about this phase');
    }


// Initialize the Reflective Journaling Journey
function startReflectiveJournal() {
    $('#reflectiveJournal').html('<h2>Reflective Journaling</h2><div id="journalContent"><textarea id="userThoughts" placeholder="Type your thoughts here..."></textarea><button id="submitThoughts">Submit</button></div>');

    // Attach the submit event handler
    $('#submitThoughts').on('click', submitReflectiveJournal);
}

// Call the function to initialize the journal on page load
startReflectiveJournal();

}


// Add this JavaScript to handle the Zen Meditation button click
let inTheZone = false;

function toggleZenMeditation() {
    const body = $('body');

    if (!inTheZone) {
        // Start the animated background transition
        body.addClass('in-the-zone');
    } else {
        // Stop the animated background transition
        body.removeClass('in-the-zone');
    }

    // Toggle the state
    inTheZone = !inTheZone;
}

// Initialize the Zen Meditation Journey
function startZenMeditation() {
    $('#getIntoTheZone').on('click', toggleZenMeditation);
}

// Call the function to initialize the Zen Meditation on page load
startZenMeditation();
