import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Faculty Selection',
      description: 'Choose your preferred instructors for each course and find sections that match.'
    },
    {
      icon: Clock,
      title: 'Time Preferences',
      description: 'Set your preferred time slots and let the system find schedules that fit your lifestyle.'
    },
    {
      icon: Calendar,
      title: 'Day Off Selection',
      description: 'Exclude specific days from your schedule to maintain work-life balance.'
    },
    {
      icon: CheckCircle,
      title: 'Conflict Detection',
      description: 'Automatically detects and eliminates scheduling conflicts across all courses.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Smart Course Scheduling Made Easy
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Find Your Perfect
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {' '}Class Schedule
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Say goodbye to scheduling conflicts. CourseSync intelligently matches your course selections with your preferences to create the ideal schedule.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/scheduler">
                <Button size="lg" className="text-lg px-8 h-12">
                  Start Scheduling
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-8 h-12">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Features for Seamless Scheduling
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to create the perfect class schedule
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Optimize Your Schedule?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join students who have already found their perfect class schedule
                </p>
                <Link to="/scheduler">
                  <Button size="lg" className="text-lg px-8 h-12">
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
