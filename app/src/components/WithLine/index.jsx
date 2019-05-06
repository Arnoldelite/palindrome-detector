import React from 'react'
import { observer } from 'mobx-react'

import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from "bizcharts"
import DataSet from "@antv/data-set"
import { store } from '../..'


@observer
class Withline extends React.Component {
  formatData = () => {
    const data = store.popularRepos.map((repo) => {
      return {
        item: repo.name,
        size: repo.size,
        watchers: repo.watchers,
      }
    })
    return data
  }

  render() {
    const { DataView } = DataSet;
    const graphData = this.formatData()
    const data = [
      {
        item: "Design",
        a: 70,
        b: 30,
      },
      {
        item: "Development",
        a: 60,
        b: 70,
      },
      {
        item: "Marketing",
        a: 50,
        b: 60,
      },
      {
        item: "Users",
        a: 40,
        b: 50,
      },
      {
        item: "Test",
        a: 60,
        b: 70,
      },
      {
        item: "Language",
        a: 70,
        b: 50,
      },
      {
        item: "Technology",
        a: 50,
        b: 40,
      },
      {
        item: "Support",
        a: 30,
        b: 40,
      },
      {
        item: "Sales",
        a: 60,
        b: 40,
      },
      {
        item: "UX",
        a: 50,
        b: 60,
      },
    ];
    const dv = new DataView().source(graphData);
    dv.transform({
      type: "fold",
      fields: ["size", "watchers"],
      // 展开字段集
      key: "user",
      // key字段
      value: "score", // value字段
    });
    const cols = {
      score: {
        min: 0,
        max: 500000,
      },
    };
    return (
      <div>
        <Chart
          // height={window.innerHeight}
          height={500}
          data={dv}
          padding={[20, 20, 40, 20]}
          scale={cols}
          forceFit
        >
          <Coord type="polar" radius={0.8} />
          <Axis
            name="item"
            line={null}
            tickLine={null}
            grid={{
              lineStyle: {
                lineDash: null,
              },
              hideFirstLine: false,
            }}
          />
          <Tooltip />
          <Axis
            name="score"
            line={null}
            tickLine={null}
            grid={{
              type: "polygon",
              lineStyle: {
                lineDash: null,
              },
              alternateColor: "rgba(0, 0, 0, 0.04)",
            }}
          />
          <Legend name="user" marker="circle" offset={30} />
          <Geom type="line" position="item*score" color="user" size={2} />
          <Geom
            type="point"
            position="item*score"
            color="user"
            shape="circle"
            size={4}
            style={{
              stroke: "#fff",
              lineWidth: 1,
              fillOpacity: 1,
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default Withline;
