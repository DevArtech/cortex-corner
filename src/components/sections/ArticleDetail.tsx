import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from "lucide-react";

interface ArticleDetailProps {
  articleId: number;
  onBack: () => void;
}

const articleContent = {
  1: {
    title: "AI Club Hackathon 2024: Innovation Unleashed",
    author: "Sarah Chen",
    date: "2024-01-15",
    category: "Events",
    readTime: "5 min read",
    content: `
      <p>Our annual AI Club Hackathon 2024 was an incredible showcase of innovation, creativity, and technical prowess. Over the course of 48 hours, more than 50 participants from diverse backgrounds came together to tackle real-world problems using artificial intelligence.</p>
      
      <h2>The Challenge</h2>
      <p>This year's theme was "AI for Social Good," where teams were challenged to develop solutions that could make a positive impact on society. The problems ranged from healthcare accessibility to environmental sustainability, education equity, and social justice.</p>
      
      <h2>Winning Projects</h2>
      <h3>1st Place: MedAssist AI</h3>
      <p>Team Alpha developed an AI-powered diagnostic assistant that can help healthcare workers in remote areas identify common diseases using just a smartphone camera. The system achieved 94% accuracy in preliminary testing.</p>
      
      <h3>2nd Place: EcoPredict</h3>
      <p>Team Beta created a machine learning model that predicts air quality and pollution levels in urban areas, helping city planners make better decisions for public health.</p>
      
      <h3>3rd Place: EduPath</h3>
      <p>Team Gamma built an adaptive learning platform that personalizes educational content based on individual learning patterns and preferences.</p>
      
      <h2>Key Highlights</h2>
      <ul>
        <li>50+ participants from 15 different universities</li>
        <li>12 teams submitted working prototypes</li>
        <li>$10,000 in total prize money</li>
        <li>Industry mentors from Google, Microsoft, and OpenAI</li>
      </ul>
      
      <h2>What's Next?</h2>
      <p>We're already planning next year's hackathon and exploring partnerships with local startups to help winning teams continue developing their solutions. The innovation and passion displayed this weekend gives us great hope for the future of AI.</p>
    `,
  },
  // Add more articles as needed
};

export const ArticleDetail = ({ articleId, onBack }: ArticleDetailProps) => {
  const article = articleContent[articleId as keyof typeof articleContent];
  
  if (!article) {
    return (
      <div className="space-y-6">
        <Button onClick={onBack} variant="ghost" className="gap-2">
          <ArrowLeft size={16} />
          Back to Articles
        </Button>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-foreground">Article not found</h1>
          <p className="text-muted-foreground mt-2">The article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="ghost" className="gap-2">
        <ArrowLeft size={16} />
        Back to Articles
      </Button>
      
      <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
        <article className="space-y-6">
          <header className="space-y-4">
            <Badge variant="secondary" className="bg-tech-gradient text-primary-foreground">
              {article.category}
            </Badge>
            
            <h1 className="text-4xl font-bold text-foreground leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 size={14} />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Bookmark size={14} />
                Save
              </Button>
            </div>
          </header>
          
          <div 
            className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </Card>
    </div>
  );
};