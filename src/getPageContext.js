import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';


// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff6659",
      main: "#d32f2f",
      dark: "#9a0007",
    },
    secondary: {
      light: "#ffff74",
      main: "#ffd740",
      dark: "#c8a600",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
