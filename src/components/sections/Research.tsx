import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { FlaskConical, Users, Calendar, ExternalLink, Github, FileText, Star } from "lucide-react";

const researchProjects = [
  {
    id: 1,
    title: "Computer Vision for Medical Imaging: Automated Diagnosis of Diabetic Retinopathy",
    description: "Developing a deep learning model to automatically detect and classify diabetic retinopathy from retinal photographs, potentially enabling early intervention in underserved communities.",
    status: "Active",
    progress: 75,
    team: [
      { name: "Dr. Sarah Johnson", initials: "SJ", role: "Faculty Advisor" },
      { name: "Alex Chen", initials: "AC", role: "PhD Student" },
      { name: "Maya Patel", initials: "MP", role: "MS Student" },
      { name: "Jordan Kim", initials: "JK", role: "Undergrad" },
    ],
    field: "Computer Vision",
    startDate: "2023-09-01",
    endDate: "2024-06-30",
    technologies: ["PyTorch", "OpenCV", "MONAI", "Weights & Biases"],
    publications: 1,
    githubUrl: "https://github.com/aiclub/diabetic-retinopathy",
    paperUrl: "https://arxiv.org/abs/2310.12345",
    featured: true,
  },
  {
    id: 2,
    title: "Natural Language Processing for Legal Document Analysis",
    description: "Building an NLP system to automatically extract key information from legal contracts and documents, helping lawyers and legal professionals streamline their workflow.",
    status: "Active",
    progress: 60,
    team: [
      { name: "Prof. Michael Brown", initials: "MB", role: "Faculty Advisor" },
      { name: "Samantha Wu", initials: "SW", role: "PhD Student" },
      { name: "David Rodriguez", initials: "DR", role: "MS Student" },
    ],
    field: "Natural Language Processing",
    startDate: "2023-10-15",
    endDate: "2024-08-15",
    technologies: ["Transformers", "Hugging Face", "spaCy", "FastAPI"],
    publications: 0,
    githubUrl: "https://github.com/aiclub/legal-nlp",
    paperUrl: null,
    featured: false,
  },
  {
    id: 3,
    title: "Reinforcement Learning for Autonomous Drone Navigation",
    description: "Training autonomous drones to navigate complex environments using deep reinforcement learning, with applications in search and rescue operations.",
    status: "Completed",
    progress: 100,
    team: [
      { name: "Dr. Lisa Park", initials: "LP", role: "Faculty Advisor" },
      { name: "Emma Thompson", initials: "ET", role: "PhD Student" },
      { name: "Ryan Zhang", initials: "RZ", role: "MS Student" },
    ],
    field: "Reinforcement Learning",
    startDate: "2023-01-15",
    endDate: "2023-12-15",
    technologies: ["PyTorch", "Gym", "AirSim", "ROS"],
    publications: 2,
    githubUrl: "https://github.com/aiclub/drone-rl",
    paperUrl: "https://arxiv.org/abs/2312.54321",
    featured: true,
  },
  {
    id: 4,
    title: "Federated Learning for Privacy-Preserving Healthcare AI",
    description: "Developing federated learning frameworks that enable multiple hospitals to collaboratively train AI models without sharing sensitive patient data.",
    status: "Planning",
    progress: 15,
    team: [
      { name: "Dr. Kevin Lee", initials: "KL", role: "Faculty Advisor" },
      { name: "Nicole Wang", initials: "NW", role: "PhD Student" },
      { name: "Tom Anderson", initials: "TA", role: "MS Student" },
    ],
    field: "Federated Learning",
    startDate: "2024-02-01",
    endDate: "2025-01-31",
    technologies: ["PySyft", "TensorFlow", "Docker", "Kubernetes"],
    publications: 0,
    githubUrl: "https://github.com/aiclub/federated-healthcare",
    paperUrl: null,
    featured: false,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'border-neural text-neural';
    case 'Completed':
      return 'border-green-500 text-green-500';
    case 'Planning':
      return 'border-yellow-500 text-yellow-500';
    default:
      return 'border-muted-foreground text-muted-foreground';
  }
};

const getFieldColor = (field: string) => {
  const colors = {
    'Computer Vision': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    'Natural Language Processing': 'bg-green-500/10 text-green-500 border-green-500/20',
    'Reinforcement Learning': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    'Federated Learning': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  };
  return colors[field as keyof typeof colors] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
};

export const Research = () => {
  const activeProjects = researchProjects.filter(p => p.status === 'Active');
  const completedProjects = researchProjects.filter(p => p.status === 'Completed');
  const totalPublications = researchProjects.reduce((sum, p) => sum + p.publications, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Research Projects</h1>
        <p className="text-muted-foreground">Current research initiatives from our AI club members</p>
      </div>

      {/* Research Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neural">{researchProjects.length}</div>
          <div className="text-sm text-muted-foreground">Total Projects</div>
        </Card>
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neural-secondary">{activeProjects.length}</div>
          <div className="text-sm text-muted-foreground">Active Projects</div>
        </Card>
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-accent">{totalPublications}</div>
          <div className="text-sm text-muted-foreground">Publications</div>
        </Card>
        <Card className="p-4 text-center bg-card/50 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neural">
            {researchProjects.reduce((sum, p) => sum + p.team.length, 0)}
          </div>
          <div className="text-sm text-muted-foreground">Researchers</div>
        </Card>
      </div>

      {/* Featured Projects */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-neural" />
          <h2 className="text-xl font-semibold text-foreground">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {researchProjects.filter(p => p.featured).map((project) => (
            <Card key={project.id} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className={getFieldColor(project.field)}>
                    {project.field}
                  </Badge>
                  <Badge variant="outline" className="border-neural text-neural">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 4).map((member) => (
                      <Avatar key={member.name} className="w-8 h-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-secondary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {project.team.length > 4 && (
                      <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                        +{project.team.length - 4}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    {project.paperUrl && (
                      <Button variant="ghost" size="sm">
                        <FileText className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All Projects */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">All Research Projects</h2>
        <div className="space-y-4">
          {researchProjects.map((project) => (
            <Card key={project.id} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className={getFieldColor(project.field)}>
                        {project.field}
                      </Badge>
                      {project.featured && (
                        <Badge variant="outline" className="border-neural text-neural">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div className="text-sm text-muted-foreground">
                      {project.progress}% Complete
                    </div>
                    <Progress value={project.progress} className="h-2 w-24" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users size={12} />
                      {project.team.length} members
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText size={12} />
                      {project.publications} publications
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {project.paperUrl && (
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ExternalLink className="w-4 h-4" />
                        Paper
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Team:</span>
                  <div className="flex items-center gap-2">
                    {project.team.slice(0, 3).map((member) => (
                      <div key={member.name} className="flex items-center gap-1">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs bg-secondary">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{member.name}</span>
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{project.team.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Join Research */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 border-dashed">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-tech-gradient">
              <FlaskConical className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground">Join Our Research Efforts</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in conducting AI research? We welcome students at all levels to join our projects 
            or propose new research directions. Get hands-on experience with cutting-edge AI techniques.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-tech-gradient">
              Join a Project
            </Button>
            <Button variant="outline">
              Propose Research
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};