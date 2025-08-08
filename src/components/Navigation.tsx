import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Video, Lightbulb, Users, FlaskConical, Trophy } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'articles', label: 'Articles', icon: BookOpen },
  { id: 'videos', label: 'Videos', icon: Video },
  { id: 'workshops', label: 'Workshops', icon: Lightbulb },
  { id: 'learnings', label: 'Learnings', icon: Users },
  { id: 'research', label: 'Research', icon: FlaskConical },
  { id: 'competitions', label: 'Competitions', icon: Trophy },
];

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">AI Club Library</h2>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={`w-full justify-start gap-3 transition-all duration-200 ${
                activeSection === item.id 
                  ? 'bg-tech-gradient text-primary-foreground shadow-glow-primary' 
                  : 'hover:bg-secondary/50 hover:text-foreground'
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              <Icon size={18} />
              {item.label}
            </Button>
          );
        })}
      </div>
    </Card>
  );
};