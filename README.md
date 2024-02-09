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

```

### Tasks and Expected Behaviour

- **CRUD Operations:** Users can create, read, update, and delete invoices. Invoices can be saved as drafts or as pending.
- **Invoice ID Generation:** Each new invoice gets a unique ID consisting of 2 random uppercase letters followed by 4 random numbers.
- **Form Validation:** The "Save & Send" action requires all form fields to be filled, whereas "Save as Draft" allows for blank fields.
- **Payment Due Date:** The due date is calculated based on the invoice creation date plus the payment terms.
- **Total Calculation:** Invoice totals are calculated as the sum of all items on the invoice.
- **Status Updates:** Invoices can be marked as paid, updating their status accordingly.

- Implement assignment using:
  - Language: **TypeScript**
  - Framework: **React**

Your users should be able to:

- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices

### Expected Behaviour

- Creating an invoice
  - When creating a new invoice, an ID needs to be created. Each ID should be 2 random uppercased letters followed by 4 random numbers.
  - Invoices can be created either as drafts or as pending. Clicking "Save as Draft" should allow the user to leave any form field blank but should create an ID if one doesn't exist and set the status to "draft". Clicking "Save & Send" should require all forms fields to be filled in, and should set the status to "pending".
  - Changing the Payments Terms field should set the `paymentDue` property based on the `createdAt` date plus the numbers of days set for the payment terms.
  - The `total` should be the sum of all items on the invoice.
- Editing an invoice
  - When saving changes to an invoice, all fields are required when the "Save Changes" button is clicked. If the user clicks "Cancel", any unsaved changes should be reset.
  - If the invoice being edited is a "draft", the status needs to be updated to "pending" when the "Save Changes" button is clicked. All fields are required at this stage.
- Users should be able to mark invoices as paid by clicking the "Mark as Paid" button. This should change the invoice's status to "paid".
- **Bonus**: Users should receive a confirmation modal when trying to delete invoices.
- Feel free not to add custom styling for the date and dropdown form fields. The designs for those fields are optional extras and are mostly for illustration purposes.

### Evaluation Criteria

- **TypeScript** best practices
- Show us your work through your commit history
- We're looking for you to produce working code with enough room to demonstrate how to structure components in a small program
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Testing: is the system adequately tested?

### CodeSubmit

Please organize, design, test, and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

**Have fun building!** 🚀

The Desert media group Team
