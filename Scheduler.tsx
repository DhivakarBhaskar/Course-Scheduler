import CourseScheduler from "@/components/CourseScheduler";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Scheduler = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <CourseScheduler />
      </main>
      <Footer />
    </div>
  );
};

export default Scheduler;
