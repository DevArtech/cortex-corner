import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code, Clock, Users, Play, CheckCircle } from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Building Your First Neural Network",
    description: "Learn to build a neural network from scratch using Python and NumPy. No frameworks needed - understand the fundamentals!",
    duration: "45 minutes",
    difficulty: "Beginner",
    participants: 156,
    completion: 78,
    technologies: ["Python", "NumPy", "Matplotlib"],
    status: "available",
    chapters: 6,
    completedChapters: 0,
  },
  {
    id: 2,
    title: "Computer Vision with OpenCV",
    description: "Hands-on workshop covering image processing, feature detection, and object recognition using OpenCV.",
    duration: "60 minutes",
    difficulty: "Intermediate",
    participants: 89,
    completion: 65,
    technologies: ["Python", "OpenCV", "NumPy"],
    status: "in-progress",
    chapters: 8,
    completedChapters: 3,
  },
  {
    id: 3,
    title: "Natural Language Processing Fundamentals",
    description: "Process and analyze text data using NLTK and spaCy. Build a sentiment analysis classifier step-by-step.",
    duration: "50 minutes",
    difficulty: "Beginner",
    participants: 203,
    completion: 85,
    technologies: ["Python", "NLTK", "spaCy"],
    status: "completed",
    chapters: 7,
    completedChapters: 7,
  },
  {
    id: 4,
    title: "Deep Learning with PyTorch",
    description: "Dive into deep learning with PyTorch. Build and train convolutional neural networks for image classification.",
    duration: "75 minutes",
    difficulty: "Advanced",
    participants: 67,
    completion: 42,
    technologies: ["Python", "PyTorch", "torchvision"],
    status: "available",
    chapters: 10,
    completedChapters: 0,
  },
  {
    id: 5,
    title: "Reinforcement Learning Environment",
    description: "Create and train an AI agent using reinforcement learning. Implement Q-learning in a custom environment.",
    duration: "90 minutes",
    difficulty: "Advanced",
    participants: 34,
    completion: 23,
    technologies: ["Python", "Gym", "Stable-Baselines3"],
    status: "available",
    chapters: 12,
    completedChapters: 0,
  },
];

interface WorkshopsProps {
  onItemClick?: (type: string, id: number) => void;
}

export const Workshops = ({ onItemClick }: WorkshopsProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Play className="w-4 h-4 text-neural" />;
      default:
        return <Play className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 text-green-500';
      case 'in-progress':
        return 'border-neural text-neural';
      default:
        return 'border-muted-foreground text-muted-foreground';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'border-green-500 text-green-500';
      case 'Intermediate':
        return 'border-yellow-500 text-yellow-500';
      case 'Advanced':
        return 'border-red-500 text-red-500';
      default:
        return 'border-muted-foreground text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Interactive Workshops</h1>
        <p className="text-muted-foreground">Hands-on coding workshops you can complete in your browser</p>
      </div>

      {/* Workshop Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neural">{workshops.length}</div>
          <div className="text-sm text-muted-foreground">Total Workshops</div>
        </Card>
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neural-secondary">
            {workshops.filter(w => w.status === 'completed').length}
          </div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </Card>
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-accent">
            {workshops.reduce((sum, w) => sum + w.participants, 0)}
          </div>
          <div className="text-sm text-muted-foreground">Total Participants</div>
        </Card>
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neural">
            {Math.round(workshops.reduce((sum, w) => sum + w.completion, 0) / workshops.length)}%
          </div>
          <div className="text-sm text-muted-foreground">Avg Completion</div>
        </Card>
      </div>

      {/* Workshops Grid */}
      <div className="space-y-6">
        {workshops.map((workshop) => (
          <Card 
            key={workshop.id} 
            className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg cursor-pointer group"
            onClick={() => onItemClick?.("workshop", workshop.id)}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(workshop.status)}
                    <h3 className="text-xl font-semibold text-foreground">{workshop.title}</h3>
                  </div>
                  <p className="text-muted-foreground max-w-2xl">{workshop.description}</p>
                </div>
                <Button 
                  className={
                    workshop.status === 'completed' ? 'bg-green-500 hover:bg-green-600' :
                    workshop.status === 'in-progress' ? 'bg-tech-gradient' :
                    'bg-tech-gradient'
                  }
                >
                  {workshop.status === 'completed' ? 'Review' :
                   workshop.status === 'in-progress' ? 'Continue' : 'Start Workshop'}
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock size={14} />
                  {workshop.duration}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users size={14} />
                  {workshop.participants} participants
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Code size={14} />
                  {workshop.chapters} chapters
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getDifficultyColor(workshop.difficulty)}>
                  {workshop.difficulty}
                </Badge>
                <Badge variant="outline" className={getStatusColor(workshop.status)}>
                  {workshop.status === 'in-progress' ? 'In Progress' : 
                   workshop.status === 'completed' ? 'Completed' : 'Not Started'}
                </Badge>
                {workshop.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>

              {workshop.status !== 'available' && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Progress: {workshop.completedChapters}/{workshop.chapters} chapters
                    </span>
                    <span className="text-muted-foreground">
                      {Math.round((workshop.completedChapters / workshop.chapters) * 100)}%
                    </span>
                  </div>
                  <Progress 
                    value={(workshop.completedChapters / workshop.chapters) * 100} 
                    className="h-2"
                  />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Coming Soon */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 border-dashed">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold text-foreground">More Workshops Coming Soon!</h3>
          <p className="text-muted-foreground">
            We're working on new interactive workshops covering advanced topics like Transformers, 
            GANs, and MLOps. Stay tuned!
          </p>
          <Button variant="outline">
            Request a Workshop Topic
          </Button>
        </div>
      </Card>
    </div>
  );
};