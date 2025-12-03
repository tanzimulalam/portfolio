import React, { Component } from "react";

export default class AchievementImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          fill={theme.imageHighlight}
          opacity="0.1"
        />
        <path
          d="M200 50 L220 120 L290 120 L230 160 L250 230 L200 190 L150 230 L170 160 L110 120 L180 120 Z"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          opacity="0.3"
        />
        <path
          d="M150 200 L180 230 L250 170"
          stroke={theme.imageHighlight}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }
}
