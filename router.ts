import HomeContainer from "./src/ts/containers/home/Home.container";
import LandingContainer from "./src/ts/containers/landing/Landing.container";
import headerLayout from "./src/ts/ui/layout/header/header.layout";
import homePage from "./src/ts/ui/pages/home/home.page";
import landingPage from "./src/ts/ui/pages/landing/landing.page";
import notFoundPage from "./src/ts/ui/pages/not-found/not-found.page";

declare global {
  interface Window {
    onNavigate: (h: string) => void;
  }
}

window.onNavigate = router;


const layout = {
  header: {
    ui: headerLayout
  }
}

const routes = {
  landing: {
    path: "",
    business: LandingContainer,
    ui: landingPage,
  },
  home: {
    path: "#home",
    business: HomeContainer,
    ui: homePage
  },
  notfound: {
    ui: notFoundPage
  }
};

//hoisting

function router(h: string): void {
  window.history.pushState("", "", window.location.pathname + h);
  const rootDiv = document.getElementById("root") as HTMLElement;

  switch (h) {
    case routes.landing.path:
      rootDiv.innerHTML += layout.header.ui() + routes.landing.ui();
      new routes.landing.business(window.onNavigate)
      break;
    case routes.home.path:
      rootDiv.innerHTML += layout.header.ui() + routes.home.ui();
      new routes.home.business(window.onNavigate)
      break;
    default:
      rootDiv.innerHTML = layout.header.ui() + routes.notfound.ui();
      break;
  }
}

export { router };
