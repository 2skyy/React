import React from "react";

class Hello extends React.Component {
  render() {
    return <div>Hello{this.props.towhat}</div>;
  }
}

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Hello towhat="World" />);

export default Hello;
