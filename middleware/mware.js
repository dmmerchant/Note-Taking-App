const ansi = require('../helpers/consoleColors')
const mware = (req, res, next) => {
    const fgBoldUnderline = ansi.bright + ansi.underscore
    switch (req.method) {
      case 'GET': {
        console.info(`${fgBoldUnderline}${ansi.green}${req.method} request${ansi.reset} to ${ansi.cyan}${req.path}${ansi.reset}`);
        break;
      }
      case 'POST': {
        console.info(`${fgBoldUnderline}${ansi.blue}${req.method} request${ansi.reset} to ${ansi.cyan}${req.path}${ansi.reset}`);
        break;
      }
      default:
        console.info(`${fgBoldUnderline}${ansi.red}${req.method} request${ansi.reset} to ${ansi.cyan}${req.path}${ansi.reset}`);
    }
    next();
  };
  
  exports.mware = mware;