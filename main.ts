import { router } from "./router";
import "./styles.scss";
import "./config/sentry/connect"




window.onpopstate = () => router(window.location.hash);


export default function init() {

  const hash = window.location.hash;
  router(hash);
}

init();
