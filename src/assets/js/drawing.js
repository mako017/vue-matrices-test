import SVG from "svgjs";
class drawSVG {
  static corner(id, orientation) {
    let path = [
      "0,0 25,0 0,25",
      "25,100 0,100 0,75",
      "100,75 100,100 75,100",
      "75,0 100,0 100,25",
    ];
    let svg = SVG(id);
    svg
      .polygon(path[orientation])
      .fill("#000")
      .stroke({ width: 1 });
  }
  static line(id, orientation) {
    let path = [
      "12.5,50 50,12.5",
      "12.5,50 50,87.5",
      "50,87.5 87.5,50",
      "50,12.5 87.5,50",
    ];
    let svg = SVG(id);
    svg.polygon(path[orientation]).stroke({ width: 1 });
  }
  static box(id, orientation) {
    let path = [
      "37.5,0 62.5,0 62.5,12.5 37.5,12.5",
      "0,37.5 0,62.5 12.5,62.5 12.5,37.5",
      "37.5,87.5 62.5,87.5 62.5,100 37.5,100",
      "87.5,37.5 87.5,62.5 100,62.5 100,37.5",
    ];
    let svg = SVG(id);
    svg.polygon(path[orientation]).stroke({ width: 1 });
  }
  static shape(id, orientation) {
    let svg = SVG(id);
    switch (orientation) {
      case 0:
        svg
          .rect(20, 20)
          .cx(50)
          .cy(50);
        break;
      case 1:
        svg
          .rect(20, 20)
          .cx(50)
          .cy(50)
          .fill("none")
          .stroke({ width: 1 });
        break;
      case 2:
        svg
          .circle(20)
          .cx(50)
          .cy(50);
        break;
      case 3:
        svg
          .circle(20)
          .cx(50)
          .cy(50)
          .fill("none")
          .stroke({ width: 1 });
        break;

      default:
        break;
    }
  }
  static arrow(id, orientation) {
    let path = [
      "50,12.5 37.5,25 62.5,25",
      "12.5,50 25,37.5 25,62.5",
      "50,87.5 37.5,75 62.5,75",
      "87.5,50 75,37.5 75,62.5",
    ];
    let svg = SVG(id);
    svg.polygon(path[orientation]).stroke({ width: 1 });
  }

  static clear(id) {
    let svg = SVG(id);
    svg.clear();
  }

  static select(id, el) {
    switch (el) {
      case 0:
      case 1:
      case 2:
      case 3:
        this.corner(id, el);
        break;
      case 4:
      case 5:
      case 6:
      case 7:
        this.line(id, el - 4);
        break;
      case 8:
      case 9:
      case 10:
      case 11:
        this.box(id, el - 8);
        break;
      case 12:
      case 13:
      case 14:
      case 15:
        this.shape(id, el - 12);
        break;
      case 16:
      case 17:
      case 18:
      case 19:
        this.arrow(id, el - 16);
        break;
    }
  }

  static getSvg(id) {
    let code = SVG(id).svg(false);
    code = code.substr(code.indexOf(">") + 1);
    code = code.substr(0, code.indexOf("<defs"));
    code = code.replace(/ id="([^"]*)"?/g, "");
    return code;
  }
}

export default drawSVG;
