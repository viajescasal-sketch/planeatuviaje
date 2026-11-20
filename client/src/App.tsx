import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { LanguageProvider } from "./contexts/LanguageContext";

// Solo la página de inicio se descarga de entrada; el resto (blog, páginas SEO, legales) se baja al visitarlas.
const NotFound = lazy(() => import("@/pages/NotFound"));
const LegalTermsPrivacy = lazy(() => import("./pages/LegalTermsPrivacy"));
const BlogList = lazy(() => import("./components/BlogList"));
const BlogArticle = lazy(() => import("./components/BlogArticle"));
const DestinationPage = lazy(() => import("./pages/SeoPages").then((m) => ({ default: m.DestinationPage })));
const PackagesPage = lazy(() => import("./pages/SeoPages").then((m) => ({ default: m.PackagesPage })));
const QuotePage = lazy(() => import("./pages/SeoPages").then((m) => ({ default: m.QuotePage })));
const ServicesPage = lazy(() => import("./pages/SeoPages").then((m) => ({ default: m.ServicesPage })));
const ToursPage = lazy(() => import("./pages/SeoPages").then((m) => ({ default: m.ToursPage })));


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={BlogList} />
      <Route path={"/blog/:slug"} component={BlogArticle} />
      <Route path={"/en"} component={Home} />
      <Route path={"/en/blog"} component={BlogList} />
      <Route path={"/en/blog/:slug"} component={BlogArticle} />
      <Route path={"/servicios"} component={ServicesPage} />
      <Route path={"/paquetes"} component={PackagesPage} />
      <Route path={"/tours"} component={ToursPage} />
      <Route path={"/cotizar"} component={QuotePage} />
      <Route path={"/destinos/:slug"} component={DestinationPage} />
      <Route path={"/en/servicios"} component={ServicesPage} />
      <Route path={"/en/paquetes"} component={PackagesPage} />
      <Route path={"/en/tours"} component={ToursPage} />
      <Route path={"/en/cotizar"} component={QuotePage} />
      <Route path={"/en/destinos/:slug"} component={DestinationPage} />
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
              <Suspense fallback={<div style={{ minHeight: "100vh" }} aria-hidden="true" />}>
                <Router />
              </Suspense>
            </TooltipProvider>
          </LanguageProvider>
        </WouterRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
