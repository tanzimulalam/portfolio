import React, { Component } from "react";
import "./CustomCursor.css";

class CustomCursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      isHovering: false,
    };
    this.cursor = React.createRef();
    this.cursorDot = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.updateCursor);
    document.addEventListener("mouseenter", this.handleMouseEnter);
    document.addEventListener("mouseleave", this.handleMouseLeave);

    // Use event delegation for hover detection on interactive elements
    document.addEventListener("mouseover", this.handleMouseOver);
    document.addEventListener("mouseout", this.handleMouseOut);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.updateCursor);
    document.removeEventListener("mouseenter", this.handleMouseEnter);
    document.removeEventListener("mouseleave", this.handleMouseLeave);
    document.removeEventListener("mouseover", this.handleMouseOver);
    document.removeEventListener("mouseout", this.handleMouseOut);
  }

  handleMouseOver = (e) => {
    const target = e.target;
    // Check if target or any parent is an interactive element
    const interactiveElement = target.closest(
      "a, button, .experience-card, .achievement-card, .repo-card, .project-card, .publication-card, input, textarea, select, [role='button'], .nav-link, .menu-item"
    );

    if (interactiveElement && !target.closest(".cursor, .cursor-dot")) {
      this.handleElementEnter();
    }
  };

  handleMouseOut = (e) => {
    const target = e.target;
    const relatedTarget = e.relatedTarget;

    // Check if we're leaving an interactive element
    const leavingInteractive = target.closest(
      "a, button, .experience-card, .achievement-card, .repo-card, .project-card, .publication-card, input, textarea, select, [role='button'], .nav-link, .menu-item"
    );

    // Check if we're entering another interactive element
    const enteringInteractive = relatedTarget?.closest(
      "a, button, .experience-card, .achievement-card, .repo-card, .project-card, .publication-card, input, textarea, select, [role='button'], .nav-link, .menu-item"
    );

    if (leavingInteractive && !enteringInteractive) {
      this.handleElementLeave();
    }
  };

  updateCursor = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  handleMouseEnter = () => {
    if (this.cursor.current) {
      this.cursor.current.style.opacity = "1";
    }
    if (this.cursorDot.current) {
      this.cursorDot.current.style.opacity = "1";
    }
  };

  handleMouseLeave = () => {
    if (this.cursor.current) {
      this.cursor.current.style.opacity = "0";
    }
    if (this.cursorDot.current) {
      this.cursorDot.current.style.opacity = "0";
    }
  };

  handleElementEnter = () => {
    this.setState({ isHovering: true });
    if (this.cursor.current) {
      this.cursor.current.classList.add("hover");
    }
    if (this.cursorDot.current) {
      this.cursorDot.current.classList.add("hover");
    }
  };

  handleElementLeave = () => {
    this.setState({ isHovering: false });
    if (this.cursor.current) {
      this.cursor.current.classList.remove("hover");
    }
    if (this.cursorDot.current) {
      this.cursorDot.current.classList.remove("hover");
    }
  };

  render() {
    const { x, y } = this.state;
    return (
      <>
        <div
          ref={this.cursor}
          className="cursor"
          style={{
            transform: `translate(${x - 10}px, ${y - 10}px)`,
          }}
        />
        <div
          ref={this.cursorDot}
          className="cursor-dot"
          style={{
            transform: `translate(${x - 3}px, ${y - 3}px)`,
          }}
        />
      </>
    );
  }
}

export default CustomCursor;
