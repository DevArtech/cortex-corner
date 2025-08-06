import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, Eye, ExternalLink } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Introduction to Neural Networks: From Perceptron to Deep Learning",
    description: "A comprehensive introduction to neural networks, covering the basic concepts from simple perceptrons to modern deep learning architectures.",
    thumbnail: "https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg",
    youtubeId: "aircAruvnKk",
    duration: "19:13",
    views: "15M views",
    category: "Fundamentals",
    level: "Beginner",
    instructor: "3Blue1Brown",
  },
  {
    id: 2,
    title: "Transformers: Attention Is All You Need - Paper Explained",
    description: "Deep dive into the revolutionary Transformer architecture that changed the landscape of NLP and AI.",
    thumbnail: "https://img.youtube.com/vi/iDulhoQ2pro/maxresdefault.jpg", 
    youtubeId: "iDulhoQ2pro",
    duration: "34:45",
    views: "2.1M views",
    category: "Research",
    level: "Advanced",
    instructor: "Yannic Kilcher",
  },
  {
    id: 3,
    title: "Computer Vision Basics: Convolutional Neural Networks",
    description: "Learn how CNNs work and why they're so effective for image recognition and computer vision tasks.",
    thumbnail: "https://img.youtube.com/vi/YRhxdVk_sIs/maxresdefault.jpg",
    youtubeId: "YRhxdVk_sIs",
    duration: "25:30",
    views: "892K views",
    category: "Computer Vision",
    level: "Intermediate",
    instructor: "Computerphile",
  },
  {
    id: 4,
    title: "Reinforcement Learning: Q-Learning and Deep Q-Networks",
    description: "Understanding reinforcement learning algorithms and how they enable AI agents to learn through interaction.",
    thumbnail: "https://img.youtube.com/vi/nyjbcRQ-uQ8/maxresdefault.jpg",
    youtubeId: "nyjbcRQ-uQ8",
    duration: "42:15",
    views: "1.3M views",
    category: "Reinforcement Learning",
    level: "Advanced",
    instructor: "DeepMind",
  },
  {
    id: 5,
    title: "Natural Language Processing with Python and NLTK",
    description: "Practical introduction to NLP techniques using Python libraries for text processing and analysis.",
    thumbnail: "https://img.youtube.com/vi/xvqsFTUsOmc/maxresdefault.jpg",
    youtubeId: "xvqsFTUsOmc",
    duration: "1:15:22",
    views: "654K views",
    category: "NLP",
    level: "Beginner",
    instructor: "Tech With Tim",
  },
  {
    id: 6,
    title: "Machine Learning Engineering: From Model to Production",
    description: "Best practices for deploying machine learning models in production environments.",
    thumbnail: "https://img.youtube.com/vi/Ynv2Y4vBFBE/maxresdefault.jpg",
    youtubeId: "Ynv2Y4vBFBE",
    duration: "28:45",
    views: "421K views",
    category: "MLOps",
    level: "Intermediate",
    instructor: "TensorFlow",
  },
];

const categories = ["All", "Fundamentals", "Research", "Computer Vision", "NLP", "Reinforcement Learning", "MLOps"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export const Videos = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Video Library</h1>
        <p className="text-muted-foreground">Educational content curated for our AI club members</p>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-foreground mb-2">Categories</h3>
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
        <div>
          <h3 className="text-sm font-medium text-foreground mb-2">Difficulty Level</h3>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level}
                variant={level === "All Levels" ? "default" : "outline"}
                size="sm"
                className={level === "All Levels" ? "bg-tech-gradient" : ""}
              >
                {level}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg group">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <Button size="lg" className="bg-tech-gradient shadow-glow-primary">
                  <Play className="w-6 h-6 mr-2" />
                  Watch Video
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                <Clock size={10} />
                {video.duration}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{video.category}</Badge>
                <Badge 
                  variant="outline" 
                  className={
                    video.level === 'Beginner' ? 'border-green-500 text-green-500' :
                    video.level === 'Intermediate' ? 'border-yellow-500 text-yellow-500' :
                    'border-red-500 text-red-500'
                  }
                >
                  {video.level}
                </Badge>
              </div>
              <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-neural transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {video.description}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="space-y-1">
                  <div>By {video.instructor}</div>
                  <div className="flex items-center gap-1">
                    <Eye size={10} />
                    {video.views}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink size={12} />
                  YouTube
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Videos
        </Button>
      </div>
    </div>
  );
};