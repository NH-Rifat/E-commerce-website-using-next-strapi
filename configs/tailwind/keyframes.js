module.exports = {
  cart: {
    '0%': { left: "-10%" },
    '40%, 60%': { left: "50%" },
    '100%': { left: "110%" },
  },
  box: {
    "0%, 40%": { top: "-20%" },
    "60%": { top: "40%", left: "52%" },
    "100%": { top: "40%", left: "112%" },
  },
  txt1: {
    "0%": {
      opacity: 1
    },
    "20%, 100%": {
      opacity: 0
    }
  },
  txt2: {
    "0%, 80%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  },
  animateCircle: {
    "40%": {
      transform: "scale(10)",
      opacity: 1,
      fill: "#dd4688"
    },
    "55%": {
      transform: "scale(11)",
      opacity: 1,
      fill: "#d46abf"
    },
    "65%": {
      transform: "scale(12)",
      opacity: 1,
      fill: "#cc8ef5"
    },
    "75%": {
      transform: "scale(13)",
      opacity: 1,
      fill: "transparent",
      stroke: "#cc8ef5",
      "stroke-width": "0.5"
    },
    "85%": {
      transform: "scale(17)",
      opacity: 1,
      fill: "transparent",
      stroke: "#cc8ef5",
      "stroke-width": "0.2"
    },
    "95%": {
      transform: "scale(18)",
      opacity: 1,
      fill: "transparent",
      stroke: "#cc8ef5",
      "stroke-width": "0.1"
    },
    "100%": {
      transform: "scale(19)",
      opacity: 1,
      fill: "transparent",
      stroke: "#cc8ef5",
      "stroke-width": 0
    }
  },
  animateHeart: {
    "0%": {
      transform: "scale(0.2)"
    },
    "40%": {
      transform: "scale(1.2)"
    },
    "100%": {
      transform: "scale(1)"
    }
  },
  animateHeartOut: {
    "0%": {
      transform: "scale(1.4)"
    },
    "100%": {
      transform: "scale(1)"
    }
  },
  ripple: {
    "from": {
      transform: "scale(0)"
    },
    "to": {
      transform: "scale(6)",
      opacity: 0
    }
  },

};
