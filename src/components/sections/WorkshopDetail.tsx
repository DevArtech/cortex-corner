import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, CheckCircle, Clock, Users, Code, FileText } from "lucide-react";

interface WorkshopDetailProps {
  workshopId: number;
  onBack: () => void;
}

const workshopDetails = {
  1: {
    title: "Building Your First Neural Network",
    instructor: "Dr. Sarah Johnson",
    duration: "2 hours",
    difficulty: "Beginner",
    enrolled: "234 students",
    category: "Deep Learning",
    description: "Learn to build and train your first neural network from scratch using Python and TensorFlow. This hands-on workshop covers the fundamentals of neural networks with practical coding exercises.",
    progress: 0, // Student's progress
    modules: [
      {
        id: 1,
        title: "Introduction to Neural Networks",
        duration: "15 min",
        type: "video",
        completed: false,
        description: "Understanding the basics of neural networks and their applications"
      },
      {
        id: 2,
        title: "Setting Up Your Environment",
        duration: "10 min",
        type: "interactive",
        completed: false,
        description: "Installing Python, TensorFlow, and setting up your coding environment"
      },
      {
        id: 3,
        title: "Your First Perceptron",
        duration: "20 min",
        type: "coding",
        completed: false,
        description: "Hands-on coding exercise to implement a simple perceptron"
      },
      {
        id: 4,
        title: "Multi-layer Networks",
        duration: "25 min",
        type: "coding",
        completed: false,
        description: "Building networks with multiple hidden layers"
      },
      {
        id: 5,
        title: "Training and Optimization",
        duration: "30 min",
        type: "interactive",
        completed: false,
        description: "Understanding backpropagation and gradient descent"
      },
      {
        id: 6,
        title: "Final Project",
        duration: "20 min",
        type: "project",
        completed: false,
        description: "Build a neural network to classify handwritten digits"
      }
    ],
    prerequisites: [
      "Basic Python programming",
      "High school mathematics",
      "No prior ML experience needed"
    ],
    outcomes: [
      "Understand neural network fundamentals",
      "Implement a neural network from scratch",
      "Train models on real datasets",
      "Apply neural networks to classification problems"
    ]
  },
  // Add more workshops as needed
};

export const WorkshopDetail = ({ workshopId, onBack }: WorkshopDetailProps) => {
  const workshop = workshopDetails[workshopId as keyof typeof workshopDetails];
  
  if (!workshop) {
    return (
      <div className="space-y-6">
        <Button onClick={onBack} variant="ghost" className="gap-2">
          <ArrowLeft size={16} />
          Back to Workshops
        </Button>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-foreground">Workshop not found</h1>
          <p className="text-muted-foreground mt-2">The workshop you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const completedModules = workshop.modules.filter(m => m.completed).length;
  const progressPercentage = (completedModules / workshop.modules.length) * 100;

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play size={16} className="text-blue-500" />;
      case 'coding': return <Code size={16} className="text-green-500" />;
      case 'interactive': return <Users size={16} className="text-purple-500" />;
      case 'project': return <FileText size={16} className="text-orange-500" />;
      default: return <FileText size={16} />;
    }
  };

  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="ghost" className="gap-2">
        <ArrowLeft size={16} />
        Back to Workshops
      </Button>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Workshop Header */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{workshop.category}</Badge>
                <Badge 
                  variant="outline" 
                  className={
                    workshop.difficulty === 'Beginner' ? 'border-green-500 text-green-500' :
                    workshop.difficulty === 'Intermediate' ? 'border-yellow-500 text-yellow-500' :
                    'border-red-500 text-red-500'
                  }
                >
                  {workshop.difficulty}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold text-foreground">
                {workshop.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{workshop.enrolled}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{workshop.duration}</span>
                </div>
                <div>By {workshop.instructor}</div>
              </div>
              
              <p className="text-muted-foreground">
                {workshop.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground font-medium">{completedModules}/{workshop.modules.length} modules</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
              
              <Button className="bg-tech-gradient shadow-glow-primary">
                {progressPercentage > 0 ? 'Continue Workshop' : 'Start Workshop'}
              </Button>
            </div>
          </Card>
          
          {/* Modules */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">Workshop Modules</h3>
            <div className="space-y-3">
              {workshop.modules.map((module, index) => (
                <div key={module.id} className="border border-border/50 rounded-lg p-4 hover:border-border transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-2 mt-1">
                      {module.completed ? (
                        <CheckCircle size={20} className="text-green-500" />
                      ) : (
                        <div className="w-5 h-5 border border-border rounded-full flex items-center justify-center text-xs font-medium text-muted-foreground">
                          {index + 1}
                        </div>
                      )}
                      {getModuleIcon(module.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground">{module.title}</h4>
                        <span className="text-xs text-muted-foreground">{module.duration}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{module.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          {/* Prerequisites */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">Prerequisites</h3>
            <ul className="space-y-2">
              {workshop.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-green-500" />
                  {prereq}
                </li>
              ))}
            </ul>
          </Card>
          
          {/* Learning Outcomes */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">What You'll Learn</h3>
            <ul className="space-y-2">
              {workshop.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-blue-500 mt-0.5" />
                  {outcome}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};