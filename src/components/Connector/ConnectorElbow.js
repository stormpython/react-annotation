import React, { PropTypes } from "react"
import Elbow from "./type-elbow"
import Connector from "./Connector"

export default class ConnectorElbow extends Connector {
  getComponents({
    x,
    y,
    dy,
    dx,
    radius,
    radiusPadding,
    outerRadius,
    width,
    height
  }) {
    return Elbow({
      x,
      y,
      dx,
      dy,
      radius,
      radiusPadding,
      outerRadius,
      width,
      height
    })
  }
}

ConnectorElbow.defaultProps = {}

ConnectorElbow.propTypes = {}
