import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "AI Club Hackathon 2024: Innovation Unleashed",
    excerpt: "Our annual hackathon brought together 50+ participants to build AI solutions for real-world problems. Here's a recap of the amazing projects and winners.",
    author: "Sarah Chen",
    date: "2024-01-15",
    category: "Events",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Guest Speaker Series: Dr. Yann LeCun on Future of AI",
    excerpt: "We had the incredible opportunity to host Dr. Yann LeCun, Chief AI Scientist at Meta, for an insightful discussion on the future directions of artificial intelligence.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "Speakers",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Weekly Study Group: Transformers Architecture Deep Dive",
    excerpt: "This week's study group session covered the revolutionary Transformer architecture. We explored attention mechanisms and their impact on modern NLP.",
    author: "Lisa Park",
    date: "2024-01-08",
    category: "Study Groups",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "AI Ethics Workshop: Building Responsible AI Systems",
    excerpt: "Our ethics workshop addressed crucial questions about bias, fairness, and responsibility in AI development. Key takeaways and next steps.",
    author: "David Kim",
    date: "2024-01-05",
    category: "Workshops",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "New Member Orientation: Welcome to AI Club!",
    excerpt: "We welcomed 20 new members this semester! Here's what happened during orientation and what new members can expect.",
    author: "Emma Thompson",
    date: "2024-01-03",
    category: "Community",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Industry Panel: AI Careers and Opportunities",
    excerpt: "Industry professionals shared insights about AI careers, from research positions to applied ML roles in tech companies.",
    author: "Alex Johnson",
    date: "2023-12-20",
    category: "Career",
    readTime: "10 min read",
    featured: false,
  },
];

interface ArticlesProps {
  onItemClick?: (type: string, id: number) => void;
}

export const Articles = ({ onItemClick }: ArticlesProps) => {
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Event Articles</h1>
        <p className="text-muted-foreground">Stay updated with the latest from our AI club community</p>
      </div>

      {/* Featured Articles */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <Card 
              key={article.id} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg cursor-pointer group"
              onClick={() => onItemClick?.("article", article.id)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-tech-gradient text-primary-foreground">
                    {article.category}
                  </Badge>
                  <Badge variant="outline" className="text-muted-foreground">
                    Featured
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-neural transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{article.readTime}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All Articles */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">All Articles</h2>
        <div className="space-y-4">
          {regularArticles.map((article) => (
            <Card 
              key={article.id} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg cursor-pointer group"
              onClick={() => onItemClick?.("article", article.id)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-neural transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};