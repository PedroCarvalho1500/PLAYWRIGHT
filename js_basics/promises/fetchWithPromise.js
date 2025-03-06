export async function getAllPlayersByPage(page) {
    const response = await fetch(`http://localhost:8000/get_all_players/?p=${page}`,{
        method: "GET",
        headers: {
            'Content-Type': '*/*',
            'Authorization': "Token 4d9d760c5a84d582f5d1eac499eda32bc504398e"
        }
    }
    )
    .catch((error) => {
        console.log(`ERROR ${error}`)
    });
    const response_finished = await response.json();
    const players = await response_finished.results;
    console.log(`PAGE: ${page}`)
    return players;

}

console.log("Starting fetching players By Pages");
console.time("fetch Players By Pages");
    await getAllPlayersByPage(1)
    await getAllPlayersByPage(2)
    await getAllPlayersByPage(3)
    await getAllPlayersByPage(4)
    await getAllPlayersByPage(5)
    await getAllPlayersByPage(6)
    await getAllPlayersByPage(7)
    await getAllPlayersByPage(8)
    await getAllPlayersByPage(9)
    await getAllPlayersByPage(10)
    await getAllPlayersByPage(11)
    await getAllPlayersByPage(12)
    await getAllPlayersByPage(13)
    await getAllPlayersByPage(14)
    await getAllPlayersByPage(15)
    await getAllPlayersByPage(16)
    await getAllPlayersByPage(17)
    await getAllPlayersByPage(18)
    await getAllPlayersByPage(19)
    await getAllPlayersByPage(20)
    await getAllPlayersByPage(21)
    await getAllPlayersByPage(22)
    await getAllPlayersByPage(23)
    await getAllPlayersByPage(24)
    await getAllPlayersByPage(25)
    await getAllPlayersByPage(26)
    await getAllPlayersByPage(27)
    await getAllPlayersByPage(28)
    await getAllPlayersByPage(29)
    await getAllPlayersByPage(30)
console.timeEnd('fetch Players By Pages');

// console.log("Starting fetching players By Pages");
// console.time("fetch Players By Pages");
// await Promise.all([
//     getAllPlayersByPage(1),
//     getAllPlayersByPage(2),
//     getAllPlayersByPage(3),
//     getAllPlayersByPage(4),
//     getAllPlayersByPage(5),
//     getAllPlayersByPage(6),
//     getAllPlayersByPage(7),
//     getAllPlayersByPage(8),
//     getAllPlayersByPage(9),
//     getAllPlayersByPage(10),
//     getAllPlayersByPage(11),
//     getAllPlayersByPage(12),
//     getAllPlayersByPage(13),
//     getAllPlayersByPage(14),
//     getAllPlayersByPage(15),
//     getAllPlayersByPage(16),
//     getAllPlayersByPage(17),
//     getAllPlayersByPage(18),
//     getAllPlayersByPage(19),
//     getAllPlayersByPage(20),
//     getAllPlayersByPage(21),
//     getAllPlayersByPage(22),
//     getAllPlayersByPage(23),
//     getAllPlayersByPage(24),
//     getAllPlayersByPage(25),
//     getAllPlayersByPage(26),
//     getAllPlayersByPage(27),
//     getAllPlayersByPage(28),
//     getAllPlayersByPage(29),
//     getAllPlayersByPage(30)
// ]).then((values) => {
//     console.log(values);
// })
// console.timeEnd('fetch Players By Pages');