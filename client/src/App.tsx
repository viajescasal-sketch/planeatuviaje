import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BlogList from "./components/BlogList";
import BlogCancun from "./pages/BlogCancun";
import BlogPuertoVallarta from "./pages/BlogPuertoVallarta";
import BlogLosCabos from "./pages/BlogLosCabos";
import BlogPrimeraVez from "./pages/BlogPrimeraVez";
import BlogPaquetes from "./pages/BlogPaquetes";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={BlogList} />
      <Route path={"/blog/mejores-playas-cancun-familias"} component={BlogCancun} />
      <Route path={"/blog/que-hacer-puerto-vallarta-guia"} component={BlogPuertoVallarta} />
      <Route path={"/blog/viajar-los-cabos-poco-presupuesto"} component={BlogLosCabos} />
      <Route path={"/blog/como-planear-viaje-playa-primera-vez"} component={BlogPrimeraVez} />
      <Route path={"/blog/paquetes-todo-incluido-vs-viajar-separado"} component={BlogPaquetes} />
      <Route path={"/404"} component={NotFound} />
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
        <WouterRouter base="/planeatuviaje">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </WouterRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
