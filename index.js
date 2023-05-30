const amount = 100;
const monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
const tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];

function convertMinutesToHours(minutes) {
    let hours = minutes / 60;
    return hours;
}

monday.forEach(function (item) {
    item[1] = convertMinutesToHours(item[1]);
});

tuesday.forEach(function (item) {
    item[1] = convertMinutesToHours(item[1]);
});

let newMonday = monday.filter(function (item) {
    return item[1] > 2;
});

let newTuesday = tuesday.filter(function (item) {
    return item[1] > 2;
});

let tasks = newMonday.concat(newTuesday);

tasks.forEach(function (item) {
    item.push(item[1] * amount);
    document.write(`
        <table style="margin-bottom: 30px;">
            <tr>
                <td >Task name: ${item[0]}</td>
                <td style="padding-left: 30px;">Taks duration: ${item[1]} hours</td>
                <td style="padding-left: 30px;">Task amount: $${item[2]}</td>
            </tr>
        </table>
    `);
});