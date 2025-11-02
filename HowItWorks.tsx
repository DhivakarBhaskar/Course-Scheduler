import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Calendar, Users, Clock, Filter, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Select Your Courses',
      description: 'Choose all the courses you need to take from the comprehensive course list. Select multiple courses to find the best combination.',
      icon: Calendar
    },
    {
      number: '02',
      title: 'Choose Your Preferences',
      description: 'Pick your preferred faculty members, time slots (2-hour blocks), and days you want off. The more specific, the better the match.',
      icon: Filter
    },
    {
      number: '03',
      title: 'Let AI Do the Work',
      description: 'Our intelligent algorithm analyzes thousands of possible combinations to find schedules without any time conflicts.',
      icon: Sparkles
    },
    {
      number: '04',
      title: 'Review Your Options',
      description: 'Browse through all valid schedule combinations. Each option shows your weekly timetable with course details, timings, and instructors.',
      icon: CheckCircle2
    }
  ];

  const features = [
    'Faculty preference matching',
    'Time slot filtering (2-hour blocks)',
    'Day exclusion options',
    'Automatic conflict detection',
    'Visual weekly schedule view',
    'Multiple valid combinations',
    'Course section details',
    'Department and instructor info'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Finding your perfect schedule is simple with CourseSync's intelligent matching system
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="container pb-20">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={step.number} className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex items-center gap-4">
                        <div className="text-6xl font-bold text-primary/20">
                          {step.number}
                        </div>
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground text-lg">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Powerful Features Included
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 bg-background p-4 rounded-lg border">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20">
          <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Ready to Find Your Perfect Schedule?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 text-lg">
                Start optimizing your class schedule now
              </p>
              <Link to="/scheduler">
                <Button size="lg" className="text-lg px-8 h-12">
                  Try Course Scheduler
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
