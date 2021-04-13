import '../App.css';

// create a game where player fights against monster
// player and monster should both have health bars representing health left
// 100 health points each
// game goes like this: player clicks button "hit" and hits enemy
// then enemy automatically hits player back with random damage from 0 to max damage it makes
// when enemy is killed, second random enemy appear with full health bar


// player should be able to change weapon he is equipped with
// each weapon will have it's own effect on player
// (player should have 3 weapons to choose, but can hold only one while fighting)
// on every hit player gets random amount of coins - from 0 to 10
// coins are needed to buy health potions, one potion costs 50 points
// health potions fully restores player health when bought

function App() {
    let enemies = [
        {
            name: "Goblin",
            img: "https://i.imgur.com/yBh7Fn4.png",
            health: 100,
            maxDamage: 12
        },
        {
            name: "Troll",
            img: "https://i.pinimg.com/originals/8d/7f/d8/8d7fd8ae9fcd6060497c628e1c7944b4.jpg",
            health: 120,
            maxDamage: 8
        },
        {
            name: "Witch",
            img: "https://i.pinimg.com/originals/c0/da/c0/c0dac0da46b4c59534cf898b1967d523.png",
            health: 80,
            maxDamage: 15
        }
    ]

    let weapons = {
        sword: {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjeRzenAFh9nuqc0sexfw63azpjKmulkubHg&usqp=CAU",
            damage: 10,
            effect: 'gives player 25% chance to doge enemy attacks'
        },
        magicWand: {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYLtdkk7fwbEwdjNpuL0Oo1ka5A7z0PhL34Q&usqp=CAU",
            damage: 12,
            effect: 'heals player on every enemy hit from 0 to 5 hit points'
        },
        bow: {
            img: "https://preview.pixlr.com/images/800wm/100/1/1001468630.jpg",
            damage: 7,
            effect: 'has a 50% chance to hit enemy two times in a row'
        },
        potion: {
            img: "https://preview.pixlr.com/images/450nwm/100/1/1001468594.jpg",
            info: "can be bought from shop for 50 coins, recovers player health when bought",
        }
    }


    return (
        <div>


        </div>
    )

}

export default App