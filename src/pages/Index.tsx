import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Overview } from "@/components/sections/Overview";
import { Articles } from "@/components/sections/Articles";
import { Videos } from "@/components/sections/Videos";
import { Workshops } from "@/components/sections/Workshops";
import { Learnings } from "@/components/sections/Learnings";
import { Research } from "@/components/sections/Research";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "articles":
        return <Articles />;
      case "videos":
        return <Videos />;
      case "workshops":
        return <Workshops />;
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
