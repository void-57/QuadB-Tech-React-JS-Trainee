# Advanced React To-Do App with Weather Integration

A feature-rich task management application built with React, Redux, and Material-UI that integrates with weather APIs.

## Features

✅ Task management (Create, Read Delete)  
✅ Priority system (High/Medium/Low)  
✅ Weather integration for location-based tasks  
✅ Responsive design (mobile, tablet, desktop)  
✅ User authentication (login/logout)  
✅ Local storage persistence  
✅ Modern UI with Material-UI components  

## Screenshots

| Login Screen | Task List | Mobile View |
|--------------|-----------|-------------|
| ![Login](./screenshots/login.png) | ![Tasks](./screenshots/tasks.png) | ![Mobile](./screenshots/mobile.png) |

## Technologies Used

- React 
- Redux Toolkit
- Material-UI (MUI)
- Vite
- Axios (API calls)
- date-fns (date formatting)
- React Router 

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- OpenWeatherMap API key (free tier)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env
```

4. Run the development server:
```bash
npm run dev
```

### Deployment
1. Build for production:
```bash
npm run build
```

2. Deploy to Netlify/Vercel:
- Drag-and-drop the `dist` folder to Netlify
- Or connect your GitHub repository

## Project Structure

```
src/
├── features/
│   ├── auth/          # Authentication logic
│   └── tasks/         # Task management logic
├── components/        # Reusable UI components
├── pages/             # Page components
├── services/          # API services
├── styles/            # Global styles
└── utils/             # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Demo Credentials

Username: `demo`  
Password: `password123`

## License

MIT License - see [LICENSE](./LICENSE) for details.