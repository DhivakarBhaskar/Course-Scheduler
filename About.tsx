import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Target, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Student-Focused',
      description: 'Built by students, for students. We understand the challenges of course registration and created a solution that truly helps.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Our optimized algorithm processes thousands of schedule combinations in seconds to find the perfect match for you.'
    },
    {
      icon: Heart,
      title: 'Free & Accessible',
      description: 'Quality education tools should be available to everyone. CourseSync is completely free to use for all students.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About CourseSync
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to simplify course scheduling for students everywhere. No more manual conflict checking, no more spreadsheet headaches – just smart, automated schedule optimization.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container pb-20">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                  <p>
                    CourseSync was born from a simple frustration: course registration shouldn't be this complicated. Every semester, students spend hours manually checking schedules, comparing time slots, and trying to avoid conflicts.
                  </p>
                  <p>
                    We built CourseSync to solve this problem once and for all. Using intelligent algorithms and modern web technology, we've created a tool that does in seconds what used to take hours.
                  </p>
                  <p>
                    Today, CourseSync helps students create optimal schedules by considering their preferences for faculty, timing, and days off – all while automatically detecting and eliminating conflicts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                What We Believe In
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <Card key={value.title} className="border-2">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20">
          <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold">
                Join Thousands of Students
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the easiest way to plan your class schedule
              </p>
              <Link to="/scheduler">
                <Button size="lg" className="text-lg px-8 h-12">
                  Start Scheduling Now
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

export default About;
