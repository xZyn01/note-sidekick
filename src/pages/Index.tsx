import { Sidebar } from "@/components/sidebar";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Note Taking App
          </h1>
          <p className="text-muted-foreground">
            Your beautiful sidebar is ready! Click on any section to navigate through your notes.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
