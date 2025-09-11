# NextStep
## Project Overview

**Next Step** is a comprehensive platform designed to assist individuals relocating to a new city in India. It provides a one-stop solution for discovering:

- Nearby healthcare facilities (hospitals, clinics, pharmacies)
- Available government policies and welfare schemes
- Local job opportunities
- Educational courses and training institutes

By leveraging the user's current location, Next Step personalizes recommendations and resources, making the transition to a new city smoother and more informed.

---

## Tech Stack

**Frontend:**

- React (with Vite)
- Tailwind CSS
- React Router DOM
- React Leaflet (for interactive maps)
- Lucide React (icons)
- Axios (API requests)

**Backend:**

- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- JWT (authentication)
- Nodemailer (email/OTP services)
- dotenv (environment variables)
- CORS

**Database:**

- MongoDB

**APIs & Libraries:**

- OpenStreetMap (map tiles)
- Custom REST APIs for user, jobs, courses, policies, institutes, hospitals, etc.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextstep.git
cd "NextStep Final project"
```

### 2. Install Dependencies

**Backend:**

```bash
cd "Frontend NextStep/backend"
npm install
```

**Frontend:**

```bash
cd "../nextstep"
npm install
```

### 3. Environment Variable Setup

Create a `.env` file in the `backend` directory with the following (example) variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

You may need to set up additional variables as required by your email or deployment provider.

### 4. Run the Project Locally

**Start the backend server:**

```bash
cd "Frontend NextStep/backend"
npm run dev
```

**Start the frontend development server:**

```bash
cd "../nextstep"
npm run dev
```

The frontend will typically run at `http://localhost:5173` and the backend at `http://localhost:5000`.

---

## Project Flow

1. **Location Permission:**  
   On first visit, the app requests permission to access the user's location for personalized recommendations.

2. **Dashboard:**  
   The user is presented with a dashboard summarizing key resources: healthcare, jobs, policies, courses, and institutes.

3. **Select Category:**  
   The user selects a category (e.g., Healthcare, Jobs, Policies, Courses, Institutes).

4. **View Resources:**

   - For healthcare, an interactive map displays nearby facilities.
   - For jobs, a list of local job openings is shown.
   - For policies, relevant government schemes are listed.
   - For courses/institutes, available educational resources are displayed.

5. **Save & Personalize:**  
   Users can save jobs, courses, policies, and institutes to their profile for quick access.

6. **Profile & Recommendations:**  
   The profile page shows saved items and personalized recommendations based on user preferences and location.

---

## Directory Structure

```
NextStep Final project/
│
├── Frontend NextStep/
│   ├── backend/                # Node.js/Express backend
│   │   ├── models/             # Mongoose models (User, Job, Hospital, etc.)
│   │   ├── routes/             # Express route handlers
│   │   ├── controllers/        # Business logic for each route
│   │   ├── config/             # Database and environment config
│   │   └── server.js           # Entry point for backend server
│   │
│   └── nextstep/               # React frontend
│       ├── src/
│       │   ├── assets/         # Static assets (e.g., city data)
│       │   ├── components/     # React components (Profile, HealthcareSearch, Recommendation, etc.)
│       │   ├── Context/        # React context providers
│       │   ├── App.jsx         # Main app component
│       │   └── main.jsx        # Entry point for React app
│       └── package.json        # Frontend dependencies
│
├── README.md                   # Project documentation
└── ...                         # Other project files
```

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear messages.
4. Open a pull request describing your changes.

Please ensure your code follows the existing style and includes relevant tests or documentation.

---

## License

This project is open-source and available under the MIT License.

---

**Next Step** — Making relocation easier, one city at a time.

