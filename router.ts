import landingPage from "./src/ts/ui/pages/landing/landing.page";

declare global {
  interface Window {
    onNavigate: (h: string) => void;
  }
}

window.onNavigate = router;

const routes = {
  landing: {
    path: "",
    business: "",
    ui: landingPage,
  },
};

//hoisting

function router(h: string): void {
  window.history.pushState("", "", window.location.pathname + h);
  const rootDiv = document.getElementById("root") as HTMLElement;

  switch (h) {
    case routes.landing.path:
      rootDiv.innerHTML += routes.landing.ui();
      break;
    default:
      console.log("404");
      break;
  }
}

export { router };
