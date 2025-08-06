import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Lightbulb, Users, FlaskConical, ArrowRight } from "lucide-react";

interface OverviewProps {
  onNavigate: (section: string) => void;
}

const features = [
  {
    id: 'articles',
    title: 'Event Articles',
    description: 'Stay updated with the latest club events, meetups, and announcements.',
    icon: BookOpen,
    color: 'text-neural',
    count: '12 articles',
  },
  {
    id: 'videos',
    title: 'Video Library',
    description: 'Educational YouTube videos covering AI concepts, tutorials, and discussions.',
    icon: Video,
    color: 'text-neural-secondary',
    count: '8 videos',
  },
  {
    id: 'workshops',
    title: 'Interactive Workshops',
    description: 'Hands-on coding workshops you can complete right in your browser.',
    icon: Lightbulb,
    color: 'text-accent',
    count: '5 workshops',
  },
  {
    id: 'learnings',
    title: 'Member Learnings',
    description: 'Knowledge sharing from club members about their AI journey.',
    icon: Users,
    color: 'text-neural',
    count: '15 posts',
  },
  {
    id: 'research',
    title: 'Research Projects',
    description: 'Current research initiatives and projects from our club members.',
    icon: FlaskConical,
    color: 'text-neural-secondary',
    count: '4 projects',
  },
];

export const Overview = ({ onNavigate }: OverviewProps) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-tech-gradient p-8 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            AI Club Knowledge Library
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Your comprehensive resource hub for artificial intelligence learning, events, 
            and research within our community.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 to-transparent" />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neural">40+</div>
          <div className="text-sm text-muted-foreground">Total Resources</div>
        </Card>
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neural-secondary">120+</div>
          <div className="text-sm text-muted-foreground">Club Members</div>
        </Card>
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-accent">25+</div>
          <div className="text-sm text-muted-foreground">Hours Content</div>
        </Card>
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neural">4</div>
          <div className="text-sm text-muted-foreground">Active Projects</div>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={feature.id} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg cursor-pointer group"
              onClick={() => onNavigate(feature.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg bg-secondary/20 ${feature.color}`}>
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{feature.count}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
            <div className="w-2 h-2 rounded-full bg-neural"></div>
            <span className="text-sm text-foreground">New workshop: "Building Neural Networks from Scratch"</span>
            <span className="text-xs text-muted-foreground ml-auto">2 days ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
            <div className="w-2 h-2 rounded-full bg-neural-secondary"></div>
            <span className="text-sm text-foreground">Research project: "Computer Vision for Medical Imaging" updated</span>
            <span className="text-xs text-muted-foreground ml-auto">4 days ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-sm text-foreground">New article: "AI Club Hackathon 2024 Results"</span>
            <span className="text-xs text-muted-foreground ml-auto">1 week ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
};