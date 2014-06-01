var colors = [
    'red', 'blue', 'yellow', 'green', 'purple'
];

var DATA = "The Rolling Stones are an English rock band formed in London in 1962. The first settled line-up consisted of Brian Jones (guitar, harmonica), Ian Stewart (piano), Mick Jagger (lead vocals, harmonica), Keith Richards (guitar), Bill Wyman (bass) and Charlie Watts (drums). Jones left the band less than a month prior to his death in 1969, having already been replaced by Mick Taylor, who left in 1975. Since then Ronnie Wood has been on guitar in tandem with Richards. Following Wyman's departure in 1993, Darryl Jones has been the main bassist. Stewart was removed from the official line-up in 1963 but continued as occasional pianist until his death in 1985. Other notable keyboardists for the band have included Nicky Hopkins, active from 1967 to 1982; and Chuck Leavell, active since 1982. The band was first led by Jones, but after teaming as the band's songwriters, Jagger and Richards assumed de facto leadership. The Rolling Stones were in the vanguard of the British Invasion of bands that became popular in the US in 1964–65. At first noted for their longish hair as much as their music, the band are identified with the youthful and rebellious counterculture of the 1960s. They were instrumental in making blues a major part of rock and roll, and of changing the international focus of blues culture to the less sophisticated blues typified by Chess Records artists such as Muddy Waters, writer of Rollin' Stone, the song after which the band is named. After a short period of musical experimentation that culminated with the poorly received and largely psychedelic album Their Satanic Majesties Request (1967), the group returned to their bluesy roots with Beggars' Banquet (1968) which - along with its follow-ups, Let It Bleed (1969), Sticky Fingers (1971) and Exile on Main St. (1972) - is generally considered to be the band's best work, and are considered the Rolling Stones' Golden Age. Musicologist Robert Palmer attributed the remarkable endurance of the Rolling Stones to being rooted in traditional verities, in rhythm-and-blues and soul music while more ephemeral pop fashions have come and gone. The band continued to make successful records through the 1970s and selling many albums with Some Girls (1978) and Tattoo You (1981) being their two most sold albums worldwide. In the 1980s, a feud between Jagger and Richards about band's musical direction almost caused the band to split but they managed to patch their relationship and had a big comeback with Steel Wheels (1989) which was followed by a big stadium and arena tour. The band's tradition of supporting albums with big stadium tours continued through the 1990s and 2000s. The band made what were then the four highest-grossing concert tours of all time (Voodoo Lounge Tour (1994–95), Bridges to Babylon Tour (1997–99), Licks Tour (2002–03) and A Bigger Bang Tour (2005-07)). The Rolling Stones were inducted into the Rock and Roll Hall of Fame in 1989, and the UK Music Hall of Fame in 2004. Rolling Stone magazine ranked them fourth on the 100 Greatest Artists of All Time list, and their estimated album sales are above 250 million. They have released twenty-nine studio albums, eighteen live albums and numerous compilations. Let It Bleed (1969) was their first of five consecutive number one studio and Live albums in the UK. Sticky Fingers (1971) was the first of eight consecutive number one studio albums in the US. In 2008 the band ranked 10th on the Billboard Hot 100 All-Time Top Artists chart. In 2012, the band celebrated their 50th anniversary.";

var generateApplications = function(amount) {
    var data = DATA.split(' ');

    var apps = [];
    for (var i = 0; i < amount; i++) {
        var text = [];
        for (var j = 0; j < Math.floor(Math.random() * 20) + 1; j++) {
            text.push(data[Math.floor(Math.random() * data.length)]);
        }

        apps.push({
            id: i,
            text: text.join(' '),
            color: colors[Math.floor(Math.random() * colors.length)],
            smallNum: Math.floor(Math.random() * 5) + 1,
            bigNum: Math.floor(Math.random() * 1000) + 1
        });
    }

    return {items: apps};
};

module.exports = function(app) {
    app.get('/api/items/:amount', function(req, res) {
        req.params.amount = parseInt(req.params.amount);
        res.send(JSON.stringify(generateApplications(req.params.amount)));
    });

    app.get('/api/items', function(req, res) {
        res.send(JSON.stringify(generateApplications(1000)));
    });
};
