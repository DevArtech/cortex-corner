import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, Award } from "lucide-react";

interface CompetitionsProps {
  onItemClick: (type: string, id: number) => void;
}

const competitions = [
  {
    id: 1,
    title: "AI Hackathon 2024",
    description: "48-hour intensive hackathon focused on developing AI solutions for climate change",
    date: "March 15-17, 2024",
    participants: 156,
    status: "Completed",
    prize: "$5,000 Prize Pool",
    category: "Hackathon"
  },
  {
    id: 2,
    title: "Machine Learning Paper Challenge",
    description: "Competition to implement and improve upon recent ML research papers",
    date: "January 20 - February 28, 2024",
    participants: 89,
    status: "Completed", 
    prize: "Research Internships",
    category: "Research"
  },
  {
    id: 3,
    title: "AI Ethics Debate Tournament",
    description: "Structured debates on crucial AI ethics topics and future implications",
    date: "November 10-12, 2023",
    participants: 64,
    status: "Completed",
    prize: "Conference Tickets",
    category: "Debate"
  },
  {
    id: 4,
    title: "Computer Vision Challenge",
    description: "Build the most accurate image classification model using novel techniques",
    date: "September 5-15, 2023",
    participants: 112,
    status: "Completed",
    prize: "$3,000 Prize Pool",
    category: "Technical"
  }
];

export const Competitions = ({ onItemClick }: CompetitionsProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          AI Club Competitions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Showcase your participation in our prestigious competitions and earn certificates
          to demonstrate your achievements in AI and machine learning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {competitions.map((competition) => (
          <Card 
            key={competition.id} 
            className="group cursor-pointer transition-all duration-300 hover:shadow-glow-primary hover:scale-[1.02] bg-card/80 backdrop-blur-sm border-border/50"
            onClick={() => onItemClick("competition", competition.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-tech-gradient">
                    <Trophy className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {competition.title}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {competition.category}
                    </Badge>
                  </div>
                </div>
                <Badge 
                  variant={competition.status === "Completed" ? "default" : "secondary"}
                  className="bg-success/20 text-success border-success/30"
                >
                  {competition.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <CardDescription className="text-sm leading-relaxed">
                {competition.description}
              </CardDescription>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{competition.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{competition.participants} participants</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-accent">
                  <Award className="h-4 w-4" />
                  <span className="font-medium text-sm">{competition.prize}</span>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  View Certificate
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};