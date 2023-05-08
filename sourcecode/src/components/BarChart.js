import {ResponsiveBar} from '@nivo/bar';

function BarChart(){
    const  data = [{
        "country": "AD",
        "hot dog": 79,
        "hot dogColor": "hsl(85, 70%, 50%)",
        "burger": 25,
        "burgerColor": "hsl(277, 70%, 50%)",
        "sandwich": 119,
        "sandwichColor": "hsl(71, 70%, 50%)",
        "kebab": 65,
        "kebabColor": "hsl(178, 70%, 50%)",
        "fries": 179,
        "friesColor": "hsl(76, 70%, 50%)",
        "donut": 132,
        "donutColor": "hsl(103, 70%, 50%)"
      },
      {
        "country": "AE",
        "hot dog": 121,
        "hot dogColor": "hsl(304, 70%, 50%)",
        "burger": 124,
        "burgerColor": "hsl(262, 70%, 50%)",
        "sandwich": 91,
        "sandwichColor": "hsl(301, 70%, 50%)",
        "kebab": 141,
        "kebabColor": "hsl(156, 70%, 50%)",
        "fries": 72,
        "friesColor": "hsl(205, 70%, 50%)",
        "donut": 13,
        "donutColor": "hsl(327, 70%, 50%)"
      },
      {
        "country": "AF",
        "hot dog": 84,
        "hot dogColor": "hsl(153, 70%, 50%)",
        "burger": 32,
        "burgerColor": "hsl(38, 70%, 50%)",
        "sandwich": 199,
        "sandwichColor": "hsl(262, 70%, 50%)",
        "kebab": 191,
        "kebabColor": "hsl(344, 70%, 50%)",
        "fries": 187,
        "friesColor": "hsl(48, 70%, 50%)",
        "donut": 197,
        "donutColor": "hsl(339, 70%, 50%)"
      },
      {
        "country": "AG",
        "hot dog": 180,
        "hot dogColor": "hsl(45, 70%, 50%)",
        "burger": 95,
        "burgerColor": "hsl(153, 70%, 50%)",
        "sandwich": 111,
        "sandwichColor": "hsl(308, 70%, 50%)",
        "kebab": 174,
        "kebabColor": "hsl(335, 70%, 50%)",
        "fries": 41,
        "friesColor": "hsl(277, 70%, 50%)",
        "donut": 105,
        "donutColor": "hsl(148, 70%, 50%)"
      },
      {
        "country": "AI",
        "hot dog": 177,
        "hot dogColor": "hsl(239, 70%, 50%)",
        "burger": 20,
        "burgerColor": "hsl(67, 70%, 50%)",
        "sandwich": 113,
        "sandwichColor": "hsl(324, 70%, 50%)",
        "kebab": 198,
        "kebabColor": "hsl(20, 70%, 50%)",
        "fries": 64,
        "friesColor": "hsl(6, 70%, 50%)",
        "donut": 197,
        "donutColor": "hsl(315, 70%, 50%)"
      },
      {
        "country": "AL",
        "hot dog": 41,
        "hot dogColor": "hsl(252, 70%, 50%)",
        "burger": 110,
        "burgerColor": "hsl(337, 70%, 50%)",
        "sandwich": 105,
        "sandwichColor": "hsl(187, 70%, 50%)",
        "kebab": 52,
        "kebabColor": "hsl(142, 70%, 50%)",
        "fries": 181,
        "friesColor": "hsl(9, 70%, 50%)",
        "donut": 88,
        "donutColor": "hsl(342, 70%, 50%)"
      },
      {
        "country": "AM",
        "hot dog": 151,
        "hot dogColor": "hsl(108, 70%, 50%)",
        "burger": 178,
        "burgerColor": "hsl(356, 70%, 50%)",
        "sandwich": 91,
        "sandwichColor": "hsl(102, 70%, 50%)",
        "kebab": 25,
        "kebabColor": "hsl(40, 70%, 50%)",
        "fries": 156,
        "friesColor": "hsl(343, 70%, 50%)",
        "donut": 143,
        "donutColor": "hsl(16, 70%, 50%)"
      }
    ]
return(
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'set2' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}

        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.4'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)
}

export default BarChart;