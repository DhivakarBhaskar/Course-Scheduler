# Course Schedule Optimizer

An intelligent course scheduling tool designed to help university students find their perfect conflict-free schedule with faculty preferences, timing options, and day exclusions.
##  Features
- **Smart Scheduling Algorithm**: Automatically generates conflict-free course schedules
- **Faculty Preferences**: Select preferred instructors for your courses
- **Timing Flexibility**: Choose morning, afternoon, or evening class preferences
- **Day Exclusions**: Exclude specific days from your schedule (e.g., no Friday classes)
- **Multiple Schedule Options**: View and compare different valid schedule combinations
- **Visual Schedule Display**: Easy-to-read weekly schedule grid
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

##  Live Demo

Visit the live application to see the Course Schedule Optimizer in action.

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Form Handling**: React Hook Form
- **State Management**: TanStack Query
- **Icons**: Lucide React

##  Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Setup

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`



##  How to Use

1. **Navigate to the Scheduler**: Click "Try Course Scheduler" from the home page or navigate to `/scheduler`

2. **Add Courses**: Enter your course information including:
   - Course name
   - Course code
   - Available sections with times and instructors

3. **Set Preferences**:
   - Select preferred faculty members
   - Choose preferred time slots (morning/afternoon/evening)
   - Exclude specific days if needed

4. **Generate Schedules**: Click "Find Schedules" to see all valid combinations

5. **Review Options**: Browse through different schedule options and select the one that works best for you

##  Deployment

### Build for Production

Build the project for production deployment:

```bash
npm run build
```

### Self-Hosting

You can also deploy to any static hosting service:

```bash
npm run build
```

The build output will be in the `dist/` directory. Deploy this to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

##  Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

##  License

This project is open source and available under the MIT License.

##  Bug Reports

If you encounter any issues, please report them in the project's issue tracker.

##  Support

For questions or support, please visit the project repository or contact the development team.

---

Built for students who want to optimize their course schedules
