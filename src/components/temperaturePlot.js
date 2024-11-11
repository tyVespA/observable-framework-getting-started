function temperaturePlot(data, { width } = {}) {
  return Plot.plot({
    title: "Hourly temperature forecast",
    width,
    x: { type: "utc", ticks: "day", label: null },
    y: { grid: true, inset: 10, label: "Degrees (F)" },
    marks: [
      Plot.lineY(data.properties.periods, {
        x: "startTime",
        y: "temperature",
        z: null, // varying color, not series
        stroke: "temperature",
        curve: "step-after",
      }),
    ],
  });
}

export default temperaturePlot;
