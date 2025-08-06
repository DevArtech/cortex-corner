import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share, BookOpen, TrendingUp, Lightbulb } from "lucide-react";

const learningPosts = [
  {
    id: 1,
    title: "My Journey from Zero to Landing an ML Internship",
    content: "Six months ago, I knew nothing about machine learning. Today, I'm starting my internship at a top tech company. Here's exactly what I did, the resources I used, and the mistakes I made along the way.",
    author: {
      name: "Alex Chen",
      initials: "AC",
      role: "CS Junior",
    },
    date: "2024-01-12",
    category: "Career Journey",
    tags: ["Career", "Internship", "Machine Learning"],
    likes: 127,
    comments: 23,
    readTime: "8 min read",
    trending: true,
  },
  {
    id: 2,
    title: "Building My First Transformer from Scratch: Lessons Learned",
    content: "I spent two weeks implementing the Transformer architecture from the 'Attention Is All You Need' paper. Here are the key insights, gotchas, and resources that helped me understand this revolutionary architecture.",
    author: {
      name: "Maya Patel",
      initials: "MP",
      role: "CS Senior",
    },
    date: "2024-01-10",
    category: "Technical Deep Dive",
    tags: ["Transformers", "NLP", "PyTorch"],
    likes: 89,
    comments: 15,
    readTime: "12 min read",
    trending: false,
  },
  {
    id: 3,
    title: "Debugging Neural Networks: My Trial-by-Fire Experience",
    content: "My neural network wasn't training. Loss was stuck. Gradients were exploding. Here's how I systematically debugged the issues and what I learned about training deep networks.",
    author: {
      name: "Jordan Kim",
      initials: "JK",
      role: "PhD Student",
    },
    date: "2024-01-08",
    category: "Problem Solving",
    tags: ["Debugging", "Deep Learning", "Tips"],
    likes: 156,
    comments: 31,
    readTime: "6 min read",
    trending: true,
  },
  {
    id: 4,
    title: "Computer Vision Project: From Idea to Deployment",
    content: "I built an app that identifies dog breeds from photos and deployed it to production. Here's my complete walkthrough: data collection, model training, optimization, and deployment on AWS.",
    author: {
      name: "Samantha Wu",
      initials: "SW",
      role: "CS Sophomore",
    },
    date: "2024-01-05",
    category: "Project Showcase",
    tags: ["Computer Vision", "Deployment", "AWS"],
    likes: 203,
    comments: 18,
    readTime: "15 min read",
    trending: false,
  },
  {
    id: 5,
    title: "Research Paper Reading Strategy That Actually Works",
    content: "I used to struggle with reading AI research papers. They felt impenetrable. Here's the systematic approach I developed that made papers accessible and helped me stay current with research.",
    author: {
      name: "David Rodriguez",
      initials: "DR",
      role: "MS Student",
    },
    date: "2024-01-03",
    category: "Study Methods",
    tags: ["Research", "Papers", "Study Tips"],
    likes: 174,
    comments: 27,
    readTime: "7 min read",
    trending: true,
  },
  {
    id: 6,
    title: "Math Prerequisites for ML: What You Really Need",
    content: "Everyone says you need 'strong math' for ML, but what does that actually mean? I break down the essential math concepts and provide practical resources for each area.",
    author: {
      name: "Lisa Park",
      initials: "LP",
      role: "TA",
    },
    date: "2023-12-28",
    category: "Fundamentals",
    tags: ["Mathematics", "Linear Algebra", "Statistics"],
    likes: 245,
    comments: 42,
    readTime: "10 min read",
    trending: false,
  },
];

const categories = ["All", "Career Journey", "Technical Deep Dive", "Problem Solving", "Project Showcase", "Study Methods", "Fundamentals"];

export const Learnings = () => {
  const trendingPosts = learningPosts.filter(post => post.trending);
  const allPosts = learningPosts;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Member Learnings</h1>
        <p className="text-muted-foreground">Knowledge sharing from our AI club community</p>
      </div>

      {/* Categories Filter */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-tech-gradient" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-neural" />
          <h2 className="text-xl font-semibold text-foreground">Trending This Week</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {trendingPosts.slice(0, 2).map((post) => (
            <Card key={post.id} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg cursor-pointer group">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-tech-gradient text-primary-foreground">
                    {post.category}
                  </Badge>
                  <Badge variant="outline" className="border-neural text-neural">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-neural transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-secondary">
                        {post.author.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium text-foreground">{post.author.name}</div>
                      <div className="text-xs text-muted-foreground">{post.author.role}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{post.readTime}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">All Learning Posts</h2>
        <div className="space-y-4">
          {allPosts.map((post) => (
            <Card key={post.id} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg cursor-pointer group">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.trending && (
                        <Badge variant="outline" className="border-neural text-neural">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-neural transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.content}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-secondary">
                        {post.author.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium text-foreground">{post.author.name}</div>
                      <div className="text-xs text-muted-foreground">{post.author.role} • {new Date(post.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1 text-xs">
                      <BookOpen size={12} />
                      {post.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-foreground">
                      <Heart size={14} />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-foreground">
                      <MessageCircle size={14} />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Share size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Contribute Section */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 border-dashed">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-tech-gradient">
              <Lightbulb className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground">Share Your Learning Journey</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have you learned something interesting? Solved a challenging problem? 
            Share your experience with the community and help fellow members learn from your journey.
          </p>
          <Button className="bg-tech-gradient">
            Write a Learning Post
          </Button>
        </div>
      </Card>
    </div>
  );
};