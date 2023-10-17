// script.js

// Function to add more job seekers
function addMoreJobSeekers(category, jobSeekers) {
    const jobSeekersList = document.getElementById(`${category}-list`);

    if (jobSeekersList) {
        jobSeekers.forEach(seeker => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h4>${seeker.name}</h4>
                <p>Skills: ${seeker.skills}</p>
                <p>Experience: ${seeker.experience} years</p>
                <p>Contact: Email - ${seeker.email}, Phone - ${seeker.phone}</p>
            `;
            jobSeekersList.appendChild(li);
        });
    }
}

// Add event listeners for each "See More" button
document.getElementById("seeMoreAccountants").addEventListener("click", () => {
    const accountants = [
        {
            name: "Olivia Green",
            skills: "Financial Analysis, Taxation, Audit",
            experience: 4,
            email: "olivia@example.com",
            phone: "(555) 555-5566"
        },
        {
            name: "Henry Davis",
            skills: "Bookkeeping, Payroll, QuickBooks",
            experience: 6,
            email: "henry@example.com",
            phone: "(555) 555-5567"
        }
        // Add more accountants as needed
    ];
    addMoreJobSeekers("accountants", accountants);
});

document.getElementById("seeMoreDesigners").addEventListener("click", () => {
    const designers = [
        {
            name: "Sarah Turner",
            skills: "UI/UX Design, Adobe XD, User Testing",
            experience: 5,
            email: "sarah@example.com",
            phone: "(555) 555-5568"
        },
        {
            name: "Michael Smith",
            skills: "Logo Design, Illustration, Photoshop",
            experience: 4,
            email: "michael@example.com",
            phone: "(555) 555-5569"
        }
        // Add more designers as needed
    ];
    addMoreJobSeekers("designers", designers);
});

document.getElementById("seeMoreBankers").addEventListener("click", () => {
    const bankers = [
        {
            name: "Nancy Brown",
            skills: "Investment Banking, Risk Management, Financial Analysis",
            experience: 8,
            email: "nancy@example.com",
            phone: "(555) 555-5570"
        },
        {
            name: "Daniel Wilson",
            skills: "Commercial Banking, Loan Underwriting, Relationship Management",
            experience: 7,
            email: "daniel@example.com",
            phone: "(555) 555-5571"
        }
        // Add more bankers as needed
    ];
    addMoreJobSeekers("bankers", bankers);
});
