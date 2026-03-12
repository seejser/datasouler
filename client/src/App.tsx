import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community";
import Docs from "./pages/Docs";
import Profiles from "./pages/Profiles";
import Workshop from "./pages/Workshop";
import Market from "./pages/Market";
import Symbiosis from "./pages/Symbiosis";
import Security from "./pages/Security";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/community" component={Community} />
      <Route path="/docs" component={Docs} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/workshop" component={Workshop} />
      <Route path="/market" component={Market} />
      <Route path="/symbiosis" component={Symbiosis} />
      <Route path="/security" component={Security} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
