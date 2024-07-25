import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-blue-800">ShadcnApp</h1>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Welcome to ShadcnApp</h2>
          <p className="text-xl text-gray-600 mb-8">The ultimate solution for your digital needs</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 text-yellow-500" />
                Lightning Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experience blazing fast performance with our optimized application.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 text-green-500" />
                Secure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your data is protected with state-of-the-art security measures.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 text-blue-500" />
                Easy to Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Intuitive interface designed for the best user experience.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us?</CardTitle>
              <CardDescription>We offer the best features in the industry</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>24/7 Customer Support</li>
                <li>99.9% Uptime Guarantee</li>
                <li>Customizable Solutions</li>
                <li>Regular Updates and Improvements</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Sign Up Now
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2023 ShadcnApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;