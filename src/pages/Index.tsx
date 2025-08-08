import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Overview } from "@/components/sections/Overview";
import { Articles } from "@/components/sections/Articles";
import { ArticleDetail } from "@/components/sections/ArticleDetail";
import { Videos } from "@/components/sections/Videos";
import { VideoDetail } from "@/components/sections/VideoDetail";
import { Workshops } from "@/components/sections/Workshops";
import { WorkshopDetail } from "@/components/sections/WorkshopDetail";
import { Learnings } from "@/components/sections/Learnings";
import { Research } from "@/components/sections/Research";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedItem, setSelectedItem] = useState<{ type: string; id: number } | null>(null);

  const handleItemClick = (type: string, id: number) => {
    setSelectedItem({ type, id });
  };

  const handleBackToSection = () => {
    setSelectedItem(null);
  };

  const renderSection = () => {
    // If we have a selected item, show its detail view
    if (selectedItem) {
      switch (selectedItem.type) {
        case "article":
          return <ArticleDetail articleId={selectedItem.id} onBack={handleBackToSection} />;
        case "video":
          return <VideoDetail videoId={selectedItem.id} onBack={handleBackToSection} />;
        case "workshop":
          return <WorkshopDetail workshopId={selectedItem.id} onBack={handleBackToSection} />;
        default:
          return <Overview onNavigate={setActiveSection} />;
      }
    }

    // Otherwise, show the section view
    switch (activeSection) {
      case "articles":
        return <Articles onItemClick={handleItemClick} />;
      case "videos":
        return <Videos onItemClick={handleItemClick} />;
      case "workshops":
        return <Workshops onItemClick={handleItemClick} />;
      case "learnings":
        return <Learnings />;
      case "research":
        return <Research />;
      default:
        return <Overview onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-subtle-gradient">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Navigation 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
          </div>
          <div className="lg:col-span-3">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
