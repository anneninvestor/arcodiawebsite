import LandingPage from "views/LandingPage/LandingPage.jsx";
import AboutUs from "views/AboutUs/AboutUs.jsx";
import Nodes from "views/Services/Nodes.jsx";
import Dreams from "views/Services/Dreams.jsx";
import Cloud from "views/Services/Cloud.jsx";
import OurJourney from "views/Blog/OurJourney.jsx";
import Contact from "views/Contact/Contact.jsx";

var indexRoutes = [
  { path: "/aboutUs", name: "AboutUs", component: AboutUs },
  { path: "/ourJourney", name: "Blog", component: OurJourney },
  { path: "/nodes", name: "Node", component: Nodes },
  { path: "/dreams", name: "Dreams", component: Dreams },
  { path: "/cloud", name: "Cloud", component: Cloud },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/", name: "Home", component: LandingPage }
];

export default indexRoutes;
