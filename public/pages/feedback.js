// Feedback questions
const questions = [
    {
        question: "How would you rate your overall shopping experience with us?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        answer: ""
    },
    {
        question: "Was our website easy to navigate?",
        options: ["Very Easy", "Easy", "Neutral", "Difficult", "Very Difficult"],
        answer: ""
    },
    {
        question: "How satisfied are you with the variety of products available?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        answer: ""
    },
    {
        question: "Was the product information detailed and helpful?",
        options: ["Very Helpful", "Helpful", "Neutral", "Not Helpful", "Not Helpful at All"],
        answer: ""
    },
    {
        question: "How smooth was the checkout process?",
        options: ["Very Smooth", "Smooth", "Neutral", "Bumpy", "Very Bumpy"],
        answer: ""
    },
    {
        question: "Were you satisfied with the delivery time?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        answer: ""
    },
    {
        question: "How would you rate the quality of the product(s) received?",
        options: ["Excellent", "Good", "Average", "Poor", "Very Poor"],
        answer: ""
    },
    {
        question: "Did you find our customer service helpful?",
        options: ["Very Helpful", "Helpful", "Neutral", "Unhelpful", "Very Unhelpful"],
        answer: ""
    },
    {
        question: "Would you recommend our website to others?",
        options: ["Definitely", "Probably", "Not Sure", "Probably Not", "Definitely Not"],
        answer: ""
    }
];

// Add questions to the DOM
const questionsContainer = document.getElementById("questions-container");
questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    
    const questionLabel = document.createElement("label");
    questionLabel.innerText = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionLabel);

    const select = document.createElement("select");
    q.options.forEach((option) => {
        const optionElem = document.createElement("option");
        optionElem.value = option;
        optionElem.innerText = option;
        select.appendChild(optionElem);
    });
    select.addEventListener("change", (e) => {
        q.answer = e.target.value;
    });
    questionDiv.appendChild(select);

    questionsContainer.appendChild(questionDiv);
});

// Submit button functionality
document.getElementById("submit-btn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const contactInfo = document.getElementById("contact-info").value;
    const basicInfo = document.getElementById("basic-info").value;
    const additionalComments = document.getElementById("additional-comments").value;

    // Validate inputs
    if (!name || !contactInfo || !basicInfo) {
        alert("Please fill in all fields.");
        return;
    }

    // Collect answers
    const answers = questions.map((q) => ({
        question: q.question,
        answer: q.answer
    }));

    // Here you can send the feedback data to your server or perform other actions
    console.log("Name:", name);
    console.log("Contact Info:", contactInfo);
    console.log("Basic Info:", basicInfo);
    console.log("Additional Comments:", additionalComments);
    console.log("Answers:", answers);

    alert("Thank you for your feedback!");
});
