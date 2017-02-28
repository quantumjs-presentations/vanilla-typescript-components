// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  basicReactTypescript: require("../images/basic-react-typescript.png"),
  basicAngular: require("../images/basic-angular.png"),
  confusion: require("../images/confusion.png"),
  logo: require("../images/qi.png"),
  usageStats: require("../images/usage.png"),
  ts: require("../images/ts.png"),
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "white",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition}>
            <Heading size={1} lineHeight={1} textColor="tertiary">
              Vanilla-TypeScript Components
            </Heading>
            <Image src={images.ts} margin="40px auto" height="324px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <Image src={images.confusion} width={1000}/>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <BlockQuote >
              <Quote>Same as Vanilla-JavaScript Components with the benifits of strong typing</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={slideTransition}>


            <Heading size={1} lineHeight={1} textColor="secondary" >Goals</Heading>




            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                Cross framework compatible
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit>
                Minimal abstraction
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                Communication through DOM events</Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit>Lightweight component API's</Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                Flexibility of usage</Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit>Zero learning curve</Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">Future proof code (nor framework churn)</Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                <Link href="https://github.com/search?q=topic%3Avanilla-typescript&type=Repositories">Official since I
                  created the github tag</Link>
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={slideTransition}>
            <h4>Vanilla-TypeScript npm package</h4>
            <h4>Is this a framework?</h4>
            <CodePane
              lang="typescript"
              source={require("raw!../examples/vanilla-typescript/interfaces/IComponent.ts")}
              margin="20px auto"
            />
            <CodePane
              lang="typescript"
              source={require("raw!../examples/vanilla-typescript/interfaces/IAttachableComponent.ts")}
              margin="20px auto"
            />
            <p><a
              href="https://github.com/quantumjs/vanilla-typescript">https://github.com/quantumjs/vanilla-typescript</a>
            </p>
            <h4>Taming the wild west of vanilla-js since 2016</h4>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1} lineHeight={1} textColor="tertiary">
              Reusable component template
            </Heading>
            <h4>Tactics by example</h4>
            <Image src={images.ts} margin="40px auto" height="324px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <h4>Is this a framework?</h4>
            <CodePane
              lang="typescript"
              source={require("raw!../examples/vanilla-typescript/interfaces/IComponent.ts")}
              margin="20px auto"
            />
            <CodePane
              lang="typescript"
              source={require("raw!../examples/vanilla-typescript/interfaces/IAttachableComponent.ts")}
              margin="20px auto"
            />
            <p><a
              href="https://github.com/quantumjs/vanilla-typescript">https://github.com/quantumjs/vanilla-typescript</a>
            </p>
            <h4>Taming the wild west of vanilla-js since 2016</h4>
          </Slide>


          <Slide transition={slideTransition}>
            <Link href="https://www.youtube.com/channel/UC0XiDgtbFR8ohoGlstuFgGQ">
              <Heading size={4}>
                Quantum Information
              </Heading>
            </Link>
            <Image src={images.logo} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in London by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Nikos Katsikanis
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
