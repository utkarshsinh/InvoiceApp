# Invoicing Application for Desert Media Group
### Objective

The challenge is to build out an invoicing application for Desert Media Group's accounting department, focusing on functionality over pixel-perfect implementation of design. The application is built using TypeScript and React, catering to desktop users with no responsiveness required.

### Brief

To get started with the project, ensure you have Node.js installed. Then, clone the repository and run the following commands:

```
# Install dependencies
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Install firebase (Version 8 or lower)
npm install firebase

```

### Tasks and Expected Behaviour

- **CRUD Operations:** Users can create, read, update, and delete invoices. Invoices can be saved as drafts or as pending.
- **Invoice ID Generation:** Each new invoice gets a unique ID consisting of 2 random uppercase letters followed by 4 random numbers.
- **Form Validation:** The "Save & Send" action requires all form fields to be filled, whereas "Save as Draft" allows for blank fields.
- **Payment Due Date:** The due date is calculated based on the invoice creation date plus the payment terms.
- **Total Calculation:** Invoice totals are calculated as the sum of all items on the invoice.
- **Status Updates:** Invoices can be marked as paid, updating their status accordingly.

### Features

- Hover states for interactive elements
- Draft and pending status for invoices
- Dynamic due dates based on payment terms
- Summation of item totals for invoice total



### Bonus (Not Implemented)

- Adherence to TypeScript best practices
- Functional completeness and correctness
- Clean, maintainable code structure
- Adequate testing of the system

### Notes

- The designs provided in the /designs folder serve as a guideline. This project focuses on functionality.
- The application uses data from a local data.json file for initial content population.

### Contribution

Feel free to fork the project and submit pull requests for any improvements or bug fixes. Ensure to maintain the code structure.

