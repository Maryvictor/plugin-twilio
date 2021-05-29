import { FlexPlugin } from "flex-plugin";
import FeatherTheme from "./FeatherCorpTheme";
import QuoteComponent from './components/Quote/Quote';

const PLUGIN_NAME = "FeathercorpPlugin";

export default class FeathercorpPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    // set logo
    flex.MainHeader.defaultProps.logoUrl =
      "https://tangerine-toad-5117.twil.io/assets/feathercorp-logo-white.svg";

    // set color theme
    manager.updateConfig({ colorTheme: FeatherTheme });

    flex.NoTasksCanvas.Content.remove("first-line");
    flex.NoTasksCanvas.Content.remove("second-line");
    flex.NoTasksCanvas.Content.remove("hint");

     // add our quote component
     flex.NoTasksCanvas.Content.add(<QuoteComponent key="qotd" />, {
      sortOrder: -1
    });
  }
}
