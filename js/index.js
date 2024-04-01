let questions = [
    {
        question: "what is the capital of india?", 
        answers: [
            {option: "mumbai", bool:false },
            {option: "karnataka", bool: false},
            {option: "new dehli", bool: true},
            {option: "uttar pradesh", bool: false}
        ]
    }
    {
        question: "the most abundant element on earth",
        answers: [
            {option: "oxygen", bool: true},
            {option: "silicon", bool: false},
            {option:"nitrogen", bool: false},
            {option: "aluminium", bool: false}
        ]
    }
    {
        question: "what's the oldest religion on earth?",
        answers: [
            {option:"christianity", bool: false},
            {option: "hinduism", bool: true},
            {option:"buddhism", bool: false},
            {option: "islam", bool: false}
        ]
    }
    {
        question: "who is the father of computer?",
        answers: [
            {option:"charles babbage", bool: true},
            {option: "sir isaac newton", bool: false},
            {option: "dennis ritchie", bool: false},
            {option: "brendan Eich", bool: false}
        ]
    }
    {
        question: "pick the odd one",
        answers: [
            {option: "rat", bool: false},
            {option: "bear", bool: false},
            {option: "elephant", bool: false},
            {option: "crocodile", bool: true}
        ]
    }
    {
        question: "which is the smallest country in the world?",
        answers: [
            {option: "vatican city", bool: true},
            {option: "vietnam", bool: false},
            {option: "singapore", bool: false},
            {option: "england", bool: false}
        ]
    }
    {
        question: "which country belongs to the europe continent among these?",
        answers: [
            {option: "isreal", bool: false},
            {option: "canada", bool: false},
            {option: "france", bool: true},
            {option: "thailand", bool: false}
        ]
    }
    {
        question: "which country belongs to the africa continent among these?",
        answers: [
            {option: "zimbabwe", bool: true },
            {option: "china", bool: false},
            {option: "italy", bool: false},
            {option: "new zealand", bool: false}
        ]
    }
];

const questionElement = document.getElementById("questions");
const optionButton = document.getElementById("options");
const nextButton = document.getElementById("next-btn");














