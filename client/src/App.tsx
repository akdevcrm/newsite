import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Home from "@/pages/Home";
import Resources from "@/pages/Resources";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import { Footerdemo } from "@/components/ui/footer-section";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <section id="home" className="min-h-screen pt-20">
            <Home />
          </section>
          <section id="resources" className="min-h-screen pt-20">
            <Resources />
          </section>
          <section id="pricing" className="min-h-screen pt-20">
            <Pricing />
          </section>
          <section id="blog" className="min-h-screen pt-20">
            <Blog />
          </section>
        </main>
        <Footerdemo />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
