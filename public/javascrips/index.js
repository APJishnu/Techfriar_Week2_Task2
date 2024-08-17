// JavaScript to handle dynamic greeting based on time
function getGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Good morning";
    } else if (hours < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

// Function to update the greeting text and user name
function updateGreeting(userName) {
    const greetingText = getGreeting();
    document.getElementById('greeting-text').textContent = greetingText;
    document.getElementById('user-name').textContent = userName;
}

// Example usage with dynamic user name
const userName = "Emily"; // This can be fetched dynamically, e.g., from a server or user input
updateGreeting(userName);


// *****************************************************************************************************************

// chart section in section 2

function updateChart(incomplete, pending, approved) {
    const total = incomplete + pending + approved;

    // Calculate the percentage for each section
    const incompleteRatio = (incomplete / total) * 100;
    const pendingRatio = (pending / total) * 100;
    const approvedRatio = (approved / total) * 100;

    // Update the chart with dynamic conic-gradient
    const chartContainer = document.getElementById('chart');
    chartContainer.style.background = `
        conic-gradient(
            transparent 0% 1%, /* Gap at the beginning */
            #F7AB75 1% ${incompleteRatio}%, /* Incomplete color segment */
            transparent ${incompleteRatio}% ${incompleteRatio + 1}%, /* Gap */
            #E9697D ${incompleteRatio + 1}% ${incompleteRatio + pendingRatio}%, /* Pending color segment */
            transparent ${incompleteRatio + pendingRatio}% ${incompleteRatio + pendingRatio + 1}%, /* Gap */
            #62C378 ${incompleteRatio + pendingRatio + 1}% 100% /* Approved color segment */
        )
    `;

    // Display the total number of applications and text
    const totalNumber = document.getElementById('total-number');
    const totalText = document.getElementById('total-text');
    totalNumber.textContent = total;
    totalText.textContent = 'Applications';
}




// *****************************************************************************************************************

// mailbox dynamic data in section 2

// Example data 
const incomplete = 25;
const pending = 25;
const approved = 50;

// Update chart with the example data
updateChart(incomplete, pending, approved);


// mailbox dynamic
// Sample dynamic data source (you can replace this with a real API call)
const mailData = {
    newMails: 23,
    requestedMails: 1,
    actionsTakenMails: 45
};



// Function to dynamically update the counts
function updateMailboxCounts() {
    // Update the 'New' mails count
    document.getElementById('new-mails-count').textContent = mailData.newMails;

    // Update the 'Requested' mails count
    document.getElementById('requested-mails-count').textContent = mailData.requestedMails;

    // Update the 'Actions Taken' mails count
    document.getElementById('actions-taken-mails-count').textContent = mailData.actionsTakenMails;
}

updateMailboxCounts();


// compliance dynamic data in section 2

// Sample dynamic data source (replace with real API calls if necessary)
const complianceData = {
    reminder: 15,
    inProgress: 8,
    toApprove: 27
};

// Function to dynamically update the compliance counts
function updateComplianceCounts() {
    document.getElementById('reminder-count').textContent = complianceData.reminder;
    document.getElementById('in-progress-count').textContent = complianceData.inProgress;
    document.getElementById('to-approve-count').textContent = complianceData.toApprove;
}

updateComplianceCounts();


// *****************************************************************************************************************



// section 3 first table and second table dynamic


// Array of task objects
const tasks = [
    { task: "Update Tax Document for Alphalinx...", category: "Compliance", dueDate: "23/11/23", status: "Request sent" },
    { task: "Update KYC document", category: "Compliance", dueDate: "23/11/23", status: "Request sent" },
    { task: "Add clearer photo for visa application", category: "Visa center", dueDate: "23/11/23", status: "Pending action" },
    { task: "Document not clear: please add new file", category: "Visa center", dueDate: "23/11/23", status: "Pending action" }
];

// Array of payment objects
const payments = [
    { transactionId: "#764657758", date: "23/01/19", amount: "$5.99", description: "Mailbox" },
    { transactionId: "#764657758", date: "22/01/19", amount: "$99", description: "Registration (upgrade)" },
    { transactionId: "#764657758", date: "21/01/19", amount: "$5.99", description: "Mailbox" },
    { transactionId: "#764657758", date: "19/01/19", amount: "$5.99", description: "Mailbox" },
    { transactionId: "#764657758", date: "09/01/19", amount: "$5.99", description: "Mailbox" },
    { transactionId: "#764657758", date: "23/12/18", amount: "$5.99", description: "Mailbox" }
];

// Function to populate tasks dynamically for desktop and mobile
function populateTasks() {
    const desktopTbody = document.getElementById('tasks-body');
    const mobileContainer = document.querySelector('.mobile-task-section');

    tasks.forEach(task => {
        // Desktop
        const desktopRow = document.createElement('tr');
        desktopRow.innerHTML = `
            <td>${task.task}</td>
            <td>${task.category}</td>
            <td>${task.dueDate}</td>
            <td><button class="status-btn">${task.status}</button></td>
        `;
        desktopTbody.appendChild(desktopRow);

        // Mobile
        const mobileTaskItem = document.createElement('div');
        mobileTaskItem.classList.add('mobile-task-item');
        mobileTaskItem.innerHTML = `
            <h3>${task.task}</h3>
            <div class="mobile-task-info">
                <div class="mobile-category">${task.category}</div>
                <div class="mobile-due-date">${task.dueDate}</div>
            </div>
            <div class="mobile-status ${task.status === 'Pending action' ? 'pending' : 'sent'}">${task.status}</div>
        `;
        mobileContainer.appendChild(mobileTaskItem);
    });
}

// Function to populate payments dynamically for desktop and mobile
function populatePayments() {
    const desktopTbody = document.getElementById('payment-history-body');
    const mobileContainer = document.querySelector('.mobile-payment-section');

    payments.forEach(payment => {
        // Desktop
        const desktopRow = document.createElement('tr');
        desktopRow.innerHTML = `
            <td>${payment.transactionId}</td>
            <td>${payment.date}</td>
            <td>${payment.amount}</td>
            <td>${payment.description}</td>
        `;
        desktopTbody.appendChild(desktopRow);

        // Mobile
        const mobilePaymentItem = document.createElement('div');
        mobilePaymentItem.classList.add('mobile-payment-item');
        mobilePaymentItem.innerHTML = `
            <div class="mobile-payment-item-header">
                <span>${payment.transactionId}</span>
                <span class="mobile-amount">${payment.amount}</span>
                <span class="mobile-toggle">⌄</span>
            </div>
            <div class="mobile-payment-item-details">
                <div class="mobile-date">${payment.date}</div>
                ${payment.description ? `<div class="mobile-description">${payment.description}</div>` : ""}
            </div>
        `;
        mobileContainer.appendChild(mobilePaymentItem);
    });
}

// Call the functions to populate both desktop and mobile tables
populateTasks();
populatePayments();


// *****************************************************************************************************************
// *******************************************mobile display scripts***************************************************
// *****************************************************************************************************************

// responsive toggle side bar -nav bar
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}


// *****************************************************************************************************************
// Toggle payment item details and rotate the icon
document.querySelectorAll('.mobile-payment-item-header').forEach(header => {
    header.addEventListener('click', function () {
        const parentItem = this.parentElement;
        // Toggle the 'active' class on the parent item
        parentItem.classList.toggle('active');
    });
});



// *****************************************************************************************************************

