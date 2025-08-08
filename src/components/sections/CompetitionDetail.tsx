import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Share2, Trophy, Calendar, Users, Award, ExternalLink } from "lucide-react";

interface CompetitionDetailProps {
  competitionId: number;
  onBack: () => void;
}

const competitions = [
  {
    id: 1,
    title: "AI Hackathon 2024",
    description: "48-hour intensive hackathon focused on developing AI solutions for climate change. Participants worked in teams to create innovative applications addressing environmental challenges using cutting-edge AI technologies.",
    date: "March 15-17, 2024",
    participants: 156,
    location: "University Tech Hub",
    organizers: "AI Club & Environmental Science Society",
    prize: "$5,000 Prize Pool",
    category: "Hackathon",
    certificateTemplate: "hackathon-2024",
    achievements: [
      "Completed 48-hour intensive development sprint",
      "Collaborated in cross-functional teams",
      "Developed AI solution for environmental challenges",
      "Presented to panel of industry experts"
    ]
  },
  {
    id: 2,
    title: "Machine Learning Paper Challenge",
    description: "Competition to implement and improve upon recent ML research papers. Participants selected cutting-edge papers and worked to reproduce results while proposing novel improvements.",
    date: "January 20 - February 28, 2024",
    participants: 89,
    location: "Remote/Online",
    organizers: "AI Club Research Division",
    prize: "Research Internships",
    category: "Research",
    certificateTemplate: "research-2024",
    achievements: [
      "Successfully reproduced research paper results",
      "Proposed novel algorithmic improvements",
      "Demonstrated deep understanding of ML concepts",
      "Contributed to open-source implementations"
    ]
  },
  {
    id: 3,
    title: "AI Ethics Debate Tournament",
    description: "Structured debates on crucial AI ethics topics and future implications. Participants engaged in rigorous discussions about bias, fairness, privacy, and the societal impact of AI systems.",
    date: "November 10-12, 2023",
    participants: 64,
    location: "Student Union Auditorium",
    organizers: "AI Club & Philosophy Department",
    prize: "Conference Tickets",
    category: "Debate",
    certificateTemplate: "ethics-2023",
    achievements: [
      "Participated in structured AI ethics debates",
      "Demonstrated critical thinking skills",
      "Explored complex ethical implications of AI",
      "Engaged with philosophical frameworks"
    ]
  },
  {
    id: 4,
    title: "Computer Vision Challenge",
    description: "Build the most accurate image classification model using novel techniques. Participants worked with large datasets to develop innovative computer vision solutions.",
    date: "September 5-15, 2023",
    participants: 112,
    location: "Computer Science Lab",
    organizers: "AI Club & Computer Vision Lab",
    prize: "$3,000 Prize Pool",
    category: "Technical",
    certificateTemplate: "cv-2023",
    achievements: [
      "Developed high-accuracy image classification models",
      "Implemented novel computer vision techniques",
      "Worked with large-scale datasets",
      "Optimized model performance and efficiency"
    ]
  }
];

export const CompetitionDetail = ({ competitionId, onBack }: CompetitionDetailProps) => {
  const competition = competitions.find(c => c.id === competitionId);

  if (!competition) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Competition not found</h1>
        <Button onClick={onBack} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Competitions
        </Button>
      </div>
    );
  }

  const handleDownloadCertificate = () => {
    // In a real app, this would generate and download a PDF certificate
    console.log(`Downloading certificate for ${competition.title}`);
  };

  const handleShareCertificate = () => {
    // In a real app, this would copy a shareable link to clipboard
    const shareText = `I participated in ${competition.title} organized by the AI Club! 🏆`;
    navigator.clipboard.writeText(shareText);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button onClick={onBack} variant="outline" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Competitions
        </Button>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-tech-gradient">
            <Trophy className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{competition.title}</h1>
            <Badge variant="secondary" className="mt-1">
              {competition.category}
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Certificate Preview */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Participation Certificate
              </CardTitle>
              <CardDescription>
                Download or share your certificate of participation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Mock Certificate Design */}
              <div className="bg-white dark:bg-gray-900 border-2 border-primary/20 rounded-lg p-8 text-center space-y-4 min-h-[400px] flex flex-col justify-center">
                <div className="text-primary text-6xl mb-4">🏆</div>
                <h2 className="text-2xl font-bold text-foreground">Certificate of Participation</h2>
                <p className="text-muted-foreground">This certifies that</p>
                <p className="text-xl font-semibold text-foreground">[Participant Name]</p>
                <p className="text-muted-foreground">has successfully participated in</p>
                <p className="text-lg font-bold text-primary">{competition.title}</p>
                <p className="text-sm text-muted-foreground">{competition.date}</p>
                <div className="flex justify-between items-end mt-8 pt-4 border-t">
                  <div className="text-left">
                    <div className="w-32 border-b border-foreground mb-1"></div>
                    <p className="text-xs text-muted-foreground">AI Club President</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Certificate ID: {competition.certificateTemplate}-{String(competitionId).padStart(3, '0')}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleDownloadCertificate} className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
                <Button onClick={handleShareCertificate} variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Achievement
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competition Details */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Competition Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{competition.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{competition.participants} participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span>{competition.prize}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {competition.description}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievements Unlocked</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {competition.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Verify this certificate using the ID: 
                <span className="font-mono ml-1">{competition.certificateTemplate}-{String(competitionId).padStart(3, '0')}</span>
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Verify Certificate
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};