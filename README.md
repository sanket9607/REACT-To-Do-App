# Advanced React To-Do Application

## **Overview**
This is a feature-rich To-Do application built with ReactJS that showcases advanced frontend development skills. 
The app integrates with external APIs, uses Redux for state management, and is designed with responsiveness and user experience in mind.

---

## **Features**

### **Core Functionality**
- **Add Task:** Users can add tasks via an input field.
- **View Tasks:** Tasks are displayed in a list format.
- **Delete Task:** Remove tasks from the list using a delete button.
- **Task Prioritization:** Assign priorities (High, Medium, Low) to tasks and sort them accordingly.
- **Persistent Storage:** Data is saved using `localStorage`, ensuring tasks and user authentication persist across sessions.

### **User Authentication**
- Simulated login/logout functionality.
- Protects the To-Do list, ensuring only logged-in users can access it.

### **API Integration**
- Integrated with a public weather API to display relevant data for tasks.
- Handles errors gracefully, showing user-friendly messages in case of failures.

### **Responsive Design**
- Fully responsive and optimized for mobile, tablet, and desktop devices.
- Built using CSS Grid and Flexbox with a mobile-first approach.

---

## **Tech Stack**
- **Frontend:** ReactJS, Redux, React Router
- **Styling:** Tailwind CSS (or Bootstrap/Material-UI, depending on preference)
- **State Management:** Redux Toolkit
- **Middleware:** Redux Thunk (or Redux Saga, optional)
- **API:** OpenWeatherMap API (or any similar public API)
- **Storage:** localStorage

---



### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/advanced-todo-app.git
   cd advanced-todo-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```


### **Running the Application**
- Start the development server:
  ```bash
  npm start
  ```
- Open `http://localhost:3000` in your browser.

---

## **Usage Instructions**
1. **Add Tasks:** Enter a task in the input field and click "Add Task."
2. **View Tasks:** View all added tasks in a scrollable list.
3. **Delete Tasks:** Click the "Delete" button next to a task to remove it.
4. **Weather Info:** View weather data related to tasks (if applicable).
5. **Authentication:** Login to view and manage your tasks. Logout to protect task visibility.

---

## **Future Enhancements**
- Add drag-and-drop functionality for task reordering.
- Enhance authentication with backend integration.
- Introduce filters for completed vs. pending tasks.
- Implement notifications or reminders for high-priority tasks.

---

![dashborad](https://github.com/user-attachments/assets/c451a6ff-d84b-4065-a8cd-ad00c60bd01a)


