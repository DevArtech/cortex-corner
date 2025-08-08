import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Clock, Eye, ThumbsUp, Share2, Download } from "lucide-react";

interface VideoDetailProps {
  videoId: number;
  onBack: () => void;
}

const videoDetails = {
  1: {
    title: "Introduction to Neural Networks: From Perceptron to Deep Learning",
    instructor: "3Blue1Brown",
    duration: "19:13",
    views: "15M views",
    category: "Fundamentals",
    level: "Beginner",
    description: "A comprehensive introduction to neural networks, covering the basic concepts from simple perceptrons to modern deep learning architectures.",
    embedId: "aircAruvnKk",
    transcript: `
      0:00 - Introduction to Neural Networks
      0:45 - What is a neuron?
      2:30 - The perceptron model
      5:15 - Activation functions
      8:45 - Multiple layers and depth
      12:30 - Backpropagation basics
      16:20 - Modern deep learning
      18:45 - Conclusion and next steps
    `,
    resources: [
      "Linear Algebra Review",
      "Python Neural Network Implementation",
      "Mathematical Foundations PDF",
      "Practice Exercises"
    ]
  },
  // Add more videos as needed
};

export const VideoDetail = ({ videoId, onBack }: VideoDetailProps) => {
  const video = videoDetails[videoId as keyof typeof videoDetails];
  
  if (!video) {
    return (
      <div className="space-y-6">
        <Button onClick={onBack} variant="ghost" className="gap-2">
          <ArrowLeft size={16} />
          Back to Videos
        </Button>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-foreground">Video not found</h1>
          <p className="text-muted-foreground mt-2">The video you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="ghost" className="gap-2">
        <ArrowLeft size={16} />
        Back to Videos
      </Button>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
            <div className="aspect-video bg-black relative">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </Card>
          
          {/* Video Info */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="space-y-4">
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
              
              <h1 className="text-2xl font-bold text-foreground">
                {video.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>{video.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{video.duration}</span>
                </div>
                <div>By {video.instructor}</div>
              </div>
              
              <p className="text-muted-foreground">
                {video.description}
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <Button className="bg-tech-gradient gap-2">
                  <Play size={16} />
                  Watch on YouTube
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ThumbsUp size={14} />
                  Like
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 size={14} />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download size={14} />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          {/* Transcript */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">Video Transcript</h3>
            <div className="space-y-2 text-sm">
              {video.transcript.split('\n').filter(line => line.trim()).map((line, index) => (
                <div key={index} className="flex gap-3 hover:bg-accent/50 p-2 rounded cursor-pointer">
                  <span className="text-neural font-mono text-xs">{line.split(' - ')[0]}</span>
                  <span className="text-muted-foreground">{line.split(' - ')[1]}</span>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Resources */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">Additional Resources</h3>
            <div className="space-y-2">
              {video.resources.map((resource, index) => (
                <Button key={index} variant="ghost" className="w-full justify-start gap-2">
                  <Download size={14} />
                  {resource}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};