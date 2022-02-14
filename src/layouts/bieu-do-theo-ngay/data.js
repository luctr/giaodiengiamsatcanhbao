export const data = [["0h", 14], ["0h30p", 14], ["1h", 14],
    ["1h30p", 14], ["2h", 14], ["2h30p", 14], ["3h", 14],
    ["3h30p", 14], ["4h", 13], ["4h30p", 13], ["5h", 13],
    ["5h30p", 13], ["6h", 13], ["6h30p", 13], ["7h", 14],
    ["7h30p", 14], ["8h", 14], ["8h30p", 14], ["9h", 15],
    ["9h30p", 15], ["10h", 15], ["10h30p", 15], ["11h", 16],
    ["11h30p", 16], ["12h", 17], ["12h30p", 17], ["13h", 17],
    ["13h30", 17], ["14h", 17], ["14h30p", 17], ["15h", 17],
    ["15h30p", 17], ["16h", 17], ["16h30p", 17], ["17h", 17],
    ["17h30p", 17], ["18h", 16], ["18h30p", 16], ["19h", 16],
    ["19h30p", 16], ["20h", 16], ["20h30p", 16], ["21h", 16],
    ["21h30p", 15], ["22h", 15], ["22h30p", 15], ["23h", 15],
    ["23h30", 15]];

export const data1 = [["0h", 79], ["0h30p", 80], ["1h", 81],
    ["1h30p", 82], ["2h", 84], ["2h30p", 83], ["3h", 83],
    ["3h30p", 82], ["4h", 80], ["4h30p", 79], ["5h", 79],
    ["5h30p", 79], ["6h", 79], ["6h30p", 79], ["7h", 80],
    ["7h30p", 78], ["8h", 77], ["8h30p", 75], ["9h", 73],
    ["9h30p", 61], ["10h", 69], ["10h30p", 67], ["11h", 67],
    ["11h30p", 67], ["12h", 66], ["12h30p", 65], ["13h", 65],
    ["13h30", 64], ["14h", 64], ["14h30p", 64], ["15h", 65],
    ["15h30p", 67], ["16h", 68], ["16h30p", 69], ["17h", 73],
    ["17h30p", 75], ["18h", 77], ["18h30p", 79], ["19h", 81],
    ["19h30p", 81], ["20h", 82], ["20h30p", 83], ["21h", 84],
    ["21h30p", 85], ["22h", 86], ["22h30p", 87], ["23h", 88],
    ["23h30", 90]];

export const dateList = data.map(function (item) {
    return item[0];
});

export const valueList = data.map(function (item) {
    return item[1];
});

export const dateList1 = data1.map(function (item) {
    return item[0];
});

export const valueList1 = data1.map(function (item) {
    return item[1];
});

export const option = {
    // Make gradient line here
    visualMap: [
        {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        },
        {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
        }
    ],
    title: [
        {
            left: 'center',
            text: 'Nhiệt độ \n Ngày 13/02/2022'
        },
        {
            top: '55%',
            left: 'center',
            text: 'Độ ẩm \n Ngày 13/02/2022'
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [
        {
            data: dateList
        },
        {
            data: dateList1,
            gridIndex: 1
        }
    ],
    yAxis: [
        {},
        {
            gridIndex: 1
        }
    ],
    grid: [
        {
            bottom: '60%'
        },
        {
            top: '60%'
        }
    ],
    series: [
        {
            type: 'line',
            showSymbol: false,
            data: valueList
        },
        {
            type: 'line',
            showSymbol: false,
            data: valueList1,
            xAxisIndex: 1,
            yAxisIndex: 1
        }
    ]
};