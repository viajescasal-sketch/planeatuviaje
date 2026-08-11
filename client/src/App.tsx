import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import LegalTermsPrivacy from "./pages/LegalTermsPrivacy";
import BlogList from "./components/BlogList";
import BlogArticle from "./components/BlogArticle";
import { LanguageProvider } from "./contexts/LanguageContext";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={BlogList} />
      <Route path={"/blog/:slug"} component={BlogArticle} />
      <Route path={"/en"} component={Home} />
      <Route path={"/en/blog"} component={BlogList} />
      <Route path={"/en/blog/:slug"} component={BlogArticle} />
      <Route path={"/404"} component={NotFound} />
      <Route path={"/aviso-de-privacidad"} component={LegalTermsPrivacy} />
      <Route path={"/terminos-y-condiciones"} component={LegalTermsPrivacy} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
      <WouterRouter>
              <LanguageProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </LanguageProvider>
        </WouterRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
