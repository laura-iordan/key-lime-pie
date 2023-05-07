import { ResponsiveLine } from "@nivo/line";

function LineChart(){
    const data=[
        {
          "id": "japan",
          "color": "hsl(159, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 17
            },
            {
              "x": "helicopter",
              "y": 184
            },
            {
              "x": "boat",
              "y": 67
            },
            {
              "x": "train",
              "y": 173
            },
            {
              "x": "subway",
              "y": 90
            },
            {
              "x": "bus",
              "y": 105
            },
            {
              "x": "car",
              "y": 217
            },
            {
              "x": "moto",
              "y": 291
            },
            {
              "x": "bicycle",
              "y": 16
            },
            {
              "x": "horse",
              "y": 294
            },
            {
              "x": "skateboard",
              "y": 38
            },
            {
              "x": "others",
              "y": 283
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(295, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 61
            },
            {
              "x": "helicopter",
              "y": 189
            },
            {
              "x": "boat",
              "y": 200
            },
            {
              "x": "train",
              "y": 112
            },
            {
              "x": "subway",
              "y": 36
            },
            {
              "x": "bus",
              "y": 37
            },
            {
              "x": "car",
              "y": 50
            },
            {
              "x": "moto",
              "y": 19
            },
            {
              "x": "bicycle",
              "y": 254
            },
            {
              "x": "horse",
              "y": 204
            },
            {
              "x": "skateboard",
              "y": 186
            },
            {
              "x": "others",
              "y": 184
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(168, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 40
            },
            {
              "x": "helicopter",
              "y": 242
            },
            {
              "x": "boat",
              "y": 57
            },
            {
              "x": "train",
              "y": 216
            },
            {
              "x": "subway",
              "y": 286
            },
            {
              "x": "bus",
              "y": 196
            },
            {
              "x": "car",
              "y": 24
            },
            {
              "x": "moto",
              "y": 256
            },
            {
              "x": "bicycle",
              "y": 159
            },
            {
              "x": "horse",
              "y": 25
            },
            {
              "x": "skateboard",
              "y": 257
            },
            {
              "x": "others",
              "y": 187
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(230, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 38
            },
            {
              "x": "helicopter",
              "y": 256
            },
            {
              "x": "boat",
              "y": 273
            },
            {
              "x": "train",
              "y": 129
            },
            {
              "x": "subway",
              "y": 255
            },
            {
              "x": "bus",
              "y": 209
            },
            {
              "x": "car",
              "y": 227
            },
            {
              "x": "moto",
              "y": 6
            },
            {
              "x": "bicycle",
              "y": 85
            },
            {
              "x": "horse",
              "y": 27
            },
            {
              "x": "skateboard",
              "y": 61
            },
            {
              "x": "others",
              "y": 168
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(141, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 58
            },
            {
              "x": "helicopter",
              "y": 246
            },
            {
              "x": "boat",
              "y": 66
            },
            {
              "x": "train",
              "y": 83
            },
            {
              "x": "subway",
              "y": 203
            },
            {
              "x": "bus",
              "y": 220
            },
            {
              "x": "car",
              "y": 119
            },
            {
              "x": "moto",
              "y": 167
            },
            {
              "x": "bicycle",
              "y": 285
            },
            {
              "x": "horse",
              "y": 26
            },
            {
              "x": "skateboard",
              "y": 163
            },
            {
              "x": "others",
              "y": 104
            }
          ]
        }
      ];
    return (
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickValues: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    )
}

export default LineChart;