const players = {
  0: {
    name: "Joao Felix",
    clubs: ["Benfica", "Atletico_Madrid", "Chelsea", "Barcelona"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/462250-1668165358.jpg?lm=1",
  },
  1: {
    name: "Angel Di Maria",
    clubs: [
      "Rosario_Central",
      "Benfica",
      "Real_Madrid",
      "Manchester_United",
      "PSG",
      "Juventus",
      "Benfica",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/45320-1700648952.jpg?lm=1",
  },
  2: {
    name: "Mohamed Salah",
    clubs: ["Basel", "Chelsea", "Fiorentina", "Roma", "Liverpool"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/148455-1700651360.jpg?lm=1",
  },
  3: {
    name: "Paulo Dybala",
    clubs: ["Instituto", "Palermo", "Juventus", "Roma"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/206050-1641810495.jpg?lm=1",
  },
  4: {
    name: "Nicolas Otamendi",
    clubs: [
      "Velez_Sarsfield",
      "Porto",
      "Atletico_Mineiro",
      "Valencia",
      "Manchester_City",
      "Benfica",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/54781-1669835534.jpg?lm=1",
  },
  5: {
    name: "Joao Cancelo",
    clubs: [
      "Benfica",
      "Valencia",
      "Inter_Milan",
      "Juventus",
      "Manchester_City",
      "Bayern_Munich",
      "Barcelona",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/182712-1675080937.jpg?lm=1",
  },
  6: {
    name: "Antonio Rudiger",
    clubs: ["Stuttgart", "Roma", "Chelsea", "Real_Madrid"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/86202-1684484602.jpg?lm=1",
  },
  7: {
    name: "Mike Maignan",
    clubs: ["PSG", "Lille", "AC_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/182906-1681459155.jpg?lm=1",
  },
  8: {
    name: "Thibaut Courtois",
    clubs: ["Genk", "Atletico_Madrid", "Chelsea", "Real_Madrid"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/108390-1665067957.jpg?lm=1",
  },
  9: {
    name: "Sebastien Haller",
    clubs: [
      "Auxerre",
      "Utrecht",
      "Eintracht_Frankfurt",
      "West_Ham_United",
      "Ajax",
      "Borussia_Dortmund",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/181375-1709560699.jpg?lm=1",
  },
  10: {
    name: "Rafael Santos Borre",
    clubs: [
      "Deportivo_Cali",
      "Villarreal",
      "River_Plate",
      "Eintracht_Frankfurt",
      "Werder_Bremen",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/323831-1663064975.jpg?lm=1",
  },
  11: {
    name: "Ciro Immobile",
    clubs: [
      "Juventus",
      "Siena",
      "Grosseto",
      "Pescara",
      "Genoa",
      "Torino",
      "Borussia_Dortmund",
      "Sevilla",
      "Torino",
      "Lazio",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/105521-1682689697.jpg?lm=1",
  },
  12: {
    name: "Mateo Kovacic",
    clubs: [
      "Dinamo_Zagreb",
      "Inter_Milan",
      "Real_Madrid",
      "Chelsea",
      "Manchester_City",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/51471-1682668192.jpg?lm=1",
  },
  13: {
    name: "Raul Albiol",
    clubs: ["Getafe", "Valencia", "Real_Madrid", "Napoli", "Villarreal"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/15452-1664974689.jpg?lm=1",
  },
  14: {
    name: "Youssef En-Nesyri",
    clubs: ["Malaga", "Leganes", "Sevilla"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/433049-1682087358.jpg?lm=1",
  },
  15: {
    name: "Alvaro Morata",
    clubs: [
      "Real_Madrid",
      "Juventus",
      "Real_Madrid",
      "Chelsea",
      "Atletico_Madrid",
      "Juventus",
      "Atletico_Madrid",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/128223-1694193236.jpg?lm=1",
  },
  16: {
    name: "Wissam Ben Yedder",
    clubs: ["Toulouse", "Sevilla", "Monaco"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/146854-1614089939.jpg?lm=1",
  },
  17: {
    name: "Yannick Carrasco",
    clubs: ["Monaco", "Atletico_Madrid", "Al_Shabab"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/140776-1664969500.jpg?lm=1",
  },
  18: {
    name: "Ilkay Gundogan",
    clubs: [
      "Bochum",
      "Nurnberg",
      "Borussia_Dortmund",
      "Manchester_City",
      "Barcelona",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/53622-1689683568.jpg?lm=1",
  },
  19: {
    name: "Toni Kroos",
    clubs: [
      "Bayern_Munich",
      "Bayer_Leverkusen",
      "Bayern_Munich",
      "Real_Madrid",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/31909-1700638741.jpg?lm=1",
  },
  20: {
    name: "Mario Gotze",
    clubs: [
      "Borussia_Dortmund",
      "Bayern_Munich",
      "Borussia_Dortmund",
      "PSV",
      "Eintracht_Frankfurt",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/74842-1663065102.jpg?lm=1",
  },
  21: {
    name: "Paul Pogba",
    clubs: ["Manchester_United", "Juventus", "Manchester_United", "Juventus"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/122153-1582114937.jpg?lm=1",
  },
  22: {
    name: "Mauro Icardi",
    clubs: ["Sampdoria", "Inter_Milan", "PSG", "Galatasaray"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/68863-1671105169.png?lm=1",
  },
  23: {
    name: "Alexandre Lacazette",
    clubs: ["Lyon", "Arsenal", "Lyon"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/93720-1672830448.jpg?lm=1",
  },
  24: {
    name: "Kieran Trippier",
    clubs: [
      "Barnsley",
      "Burnley",
      "Tottenham_Hotspur",
      "Atletico_Madrid",
      "Newcastle_United",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/95810-1696454076.jpg?lm=1",
  },
  25: {
    name: "Achraf Hakimi",
    clubs: ["Real_Madrid", "Borussia_Dortmund", "Inter_Milan", "PSG"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/398073-1672304327.jpg?lm=1",
  },
  26: {
    name: "Stanislav Lobotka",
    clubs: [
      "Trencin",
      "Ajax",
      "Trencin",
      "Nordsjælland",
      "Celta_Vigo",
      "Napoli",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/192735-1661509021.jpg?lm=1",
  },
  27: {
    name: "Bruno Fernandes",
    clubs: [
      "Novara",
      "Udinese",
      "Sampdoria",
      "Sporting_Lisbon",
      "Manchester_United",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/240306-1683882766.jpg?lm=1",
  },
  28: {
    name: "Hakan Calhanoglu",
    clubs: ["Bayer_Leverkusen", "AC_Milan", "Inter_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/126414-1709035146.jpg?lm=1",
  },
  29: {
    name: "Nicolo Barella",
    clubs: ["Cagliari", "Como", "Cagliari", "Inter_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/255942-1661353022.jpg?lm=1",
  },
  30: {
    name: "Bernardo Silva",
    clubs: ["Benfica", "Monaco", "Manchester_City"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/241641-1684311533.jpg?lm=1",
  },
  31: {
    name: "Rafael Leao",
    clubs: ["Sporting_Lisbon", "Lille", "AC_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/357164-1661352687.jpg?lm=1",
  },
  32: {
    name: "Khvicha Kvaratskhelia",
    clubs: [
      "Dinamo_Tbilisi",
      "Rustavi",
      "Lokomotiv_Moscow",
      "Rubin_Kazan",
      "Dinamo_Batumi",
      "Napoli",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/502670-1708553120.jpg?lm=1",
  },
  33: {
    name: "Antoine Griezmann",
    clubs: ["Real_Sociedad", "Atletico_Madrid", "Barcelona", "Atletico_Madrid"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/125781-1694505401.jpg?lm=1",
  },
  34: {
    name: "Thiago Alcantara",
    clubs: ["Barcelona", "Bayern_Munich", "Liverpool"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/60444-1694703091.jpg?lm=1",
  },
  35: {
    name: "Alisson Becker",
    clubs: ["Internacional", "Roma", "Liverpool"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/105470-1668522221.jpg?lm=1",
  },
  36: {
    name: "Theo Hernandez",
    clubs: ["Alaves", "Real_Sociedad", "Real_Madrid", "AC_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/339808-1663574533.jpg?lm=1",
  },
  37: {
    name: "Fabinho",
    clubs: ["Real_Madrid", "Monaco", "Liverpool", "Al_Ittihad"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/225693-1703282636.png?lm=1",
  },
  38: {
    name: "Nabil Fekir",
    clubs: ["Lyon", "Real_Betis"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/203496-1653041152.jpg?lm=1",
  },
  39: {
    name: "Ivan Perisic",
    clubs: [
      "Club_Brugge",
      "Borussia_Dortmund",
      "Inter_Milan",
      "Bayern_Munich",
      "Inter_Milan",
      "Tottenham_Hotspur",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/42460-1667991317.jpg?lm=1",
  },
  40: {
    name: "Diogo Jota",
    clubs: ["Pacos_Ferreira", "Porto", "Wolverhampton_Wanderers", "Liverpool"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/340950-1633340107.jpg?lm=1",
  },
  41: {
    name: "Filip Kostic",
    clubs: ["Groningen", "Stuttgart", "Eintracht_Frankfurt", "Juventus"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/161011-1662127266.jpg?lm=1",
  },
  42: {
    name: "Pablo Sarabia",
    clubs: [
      "Real_Madrid",
      "Getafe",
      "Sevilla",
      "PSG",
      "Sporting_Lisbon",
      "PSG",
      "Wolverhampton_Wanderers",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/74230-1602692460.jpg?lm=1",
  },
  43: {
    name: "Lorenzo Pellegrini",
    clubs: ["Roma", "Sassuolo", "Roma"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/286297-1692962972.jpg?lm=1",
  },
  44: {
    name: "Bruno Guimaraes",
    clubs: ["Athletico_Paranaense", "Lyon", "Newcastle_United"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/520624-1668522672.jpg?lm=1",
  },
  45: {
    name: "Tammy Abraham",
    clubs: [
      "Chelsea",
      "Bristol_City",
      "Swansea_City",
      "Aston_Villa",
      "Chelsea",
      "Roma",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/331726-1661352750.jpg?lm=1",
  },
  46: {
    name: "Sergej Milinkovic-Savic",
    clubs: ["Vojvodina", "Genk", "Lazio", "Al_Hilal"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/266302-1697051652.png?lm=1",
  },
  47: {
    name: "Lucas Paqueta",
    clubs: ["Flamengo", "AC_Milan", "Lyon", "West_Ham_United"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/444523-1695370009.jpg?lm=1",
  },
  48: {
    name: "Ousmane Dembele",
    clubs: ["Rennes", "Borussia_Dortmund", "Barcelona", "PSG"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/288230-1684148641.jpg?lm=1",
  },
  49: {
    name: "Dimitri Payet",
    clubs: [
      "Nantes",
      "Saint_Etienne",
      "Lille",
      "Marseille",
      "West_Ham_United",
      "Marseille",
      "Vasco_da_gama",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/37647-1617979644.jpg?lm=1",
  },
  50: {
    name: "Bremer",
    clubs: ["Sao_Paulo", "Atletico_Mineiro", "Torino", "Juventus"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/516716-1661269026.jpg?lm=1",
  },
  51: {
    name: "Giovanni Simeone",
    clubs: [
      "River_Plate",
      "Banfield",
      "Genoa",
      "Fiorentina",
      "Cagliari",
      "Verona",
      "Napoli",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/282388-1690294694.jpg?lm=1",
  },
  52: {
    name: "Kalidou Koulibaly",
    clubs: ["Metz", "Genk", "Napoli", "Chelsea", "Al_Hilal"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/93128-1697050549.png?lm=1",
  },
  53: {
    name: "Sadio Mane",
    clubs: [
      "Metz",
      "Salzburg",
      "Southampton",
      "Liverpool",
      "Bayern_Munich",
      "Al_Nassr",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/200512-1667830279.jpg?lm=1",
  },
  54: {
    name: "Charles De Ketelaere",
    clubs: ["Club_Brugge", "AC_Milan", "Atalanta"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/435772-1659601388.jpg?lm=1",
  },
  55: {
    name: "Cody Gakpo",
    clubs: ["PSV", "Liverpool"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/434675-1682690965.jpg?lm=1",
  },
  56: {
    name: "Folarin Balogun",
    clubs: ["Arsenal", "Middlesbrough", "Reims", "Monaco"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/503770-1672838317.jpg?lm=1",
  },
  57: {
    name: "Niclas Fullkrug",
    clubs: [
      "Werder_Bremen",
      "Greuther_Furth",
      "Nurnberg",
      "Hannover_96",
      "Werder_Bremen",
      "Borussia_Dortmund",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/75489-1709560033.jpg?lm=1",
  },
  58: {
    name: "Dominik Szoboszlai",
    clubs: ["Liefering", "Salzburg", "RB_Leipzig", "Liverpool"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/451276-1700209677.jpg?lm=1",
  },
  59: {
    name: "Joao Mario",
    clubs: [
      "Sporting_Lisbon",
      "Vitoria_Setubal",
      "Inter_Milan",
      "West_Ham_United",
      "Inter_Milan",
      "Lokomotiv_Moscow",
      "Sporting_Lisbon",
      "Benfica",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/149729-1681390479.jpg?lm=1",
  },
  60: {
    name: "Xavi Simons",
    clubs: ["PSG", "PSV", "RB_Leipzig"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/566931-1695158618.jpg?lm=1",
  },
  61: {
    name: "Takefusa Kubo",
    clubs: [
      "Tokyo",
      "Yokohama",
      "Mallorca",
      "Villarreal",
      "Getafe",
      "Mallorca",
      "Real_Sociedad",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/405398-1697110254.jpg?lm=1",
  },
  62: {
    name: "Martin Odegaard",
    clubs: [
      "Strømsgodset",
      "Real_Madrid",
      "Heerenveen",
      "Vitesse",
      "Real_Sociedad",
      "Real_Madrid",
      "Arsenal",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/316264-1678877651.jpg?lm=1",
  },
  63: {
    name: "Nahuel Molina",
    clubs: [
      "Boca_Juniors",
      "Defensa_y_Justicia",
      "Rosario_Central",
      "Udinese",
      "Atletico_Madrid",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/424042-1697037362.jpg?lm=1",
  },
  64: {
    name: "Alexis Sanchez",
    clubs: [
      "Cobreloa",
      "Colo_Colo",
      "River_Plate",
      "Udinese",
      "Barcelona",
      "Arsenal",
      "Manchester_United",
      "Inter_Milan",
      "Marseille",
      "Inter_Milan",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/40433-1660118147.jpg?lm=1",
  },
  65: {
    name: "Samuel Chukwueze",
    clubs: ["Villarreal", "AC_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/401922-1692277617.jpg?lm=1",
  },
  66: {
    name: "Randal Kolo Muani ",
    clubs: ["Nantes", "Boulogne", "Nantes", "Eintracht_Frankfurt", "PSG"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/487969-1663064953.jpg?lm=1",
  },
  67: {
    name: "William Saliba",
    clubs: ["Saint_Etienne", "Nice", "Marseille", "Arsenal"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/495666-1684160918.jpg?lm=1",
  },
  68: {
    name: "Declan Rice",
    clubs: ["West_Ham_United", "Arsenal"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/357662-1687962936.jpg?lm=1",
  },
  69: {
    name: "Josko Gvardiol",
    clubs: ["Dinamo_Zagreb", "RB_Leipzig", "Manchester_City"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/475959-1663685941.jpg?lm=1",
  },
  70: {
    name: "Federico Dimarco",
    clubs: [
      "Inter_Milan",
      "Ascoli",
      "Empoli",
      "Sion",
      "Parma",
      "Inter_Milan",
      "Verona",
      "Inter_Milan",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/198116-1661511006.jpg?lm=1",
  },
  71: {
    name: "Sofyan Amrabat",
    clubs: [
      "Utrecht",
      "Feyenoord",
      "Club_Brugge",
      "Verona",
      "Fiorentina",
      "Manchester_United",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/287579-1693604574.jpg?lm=1",
  },
  72: {
    name: "Kim Min-Jae",
    clubs: ["Beijing_Guoan", "Fenerbahce", "Napoli", "Bayern_Munich"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/503482-1700208062.jpg?lm=1",
  },
  73: {
    name: "Andre Onana",
    clubs: ["Ajax", "Inter_Milan", "Manchester_United"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/234509-1686929812.jpg?lm=1",
  },
  74: {
    name: "Casemiro",
    clubs: [
      "Sao_Paulo",
      "Real_Madrid",
      "Porto",
      "Real_Madrid",
      "Manchester_United",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/16306-1699018876.jpg?lm=1",
  },
  75: {
    name: "Luka Modric",
    clubs: ["Dinamo_Zagreb", "Tottenham_Hotspur", "Real_Madrid"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/27992-1687776160.jpg?lm=1",
  },
  76: {
    name: "Jack Grealish",
    clubs: ["Notts_County", "Aston_Villa", "Manchester_City"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/203460-1676499047.jpg?lm=1",
  },
  77: {
    name: "Erling Haaland",
    clubs: [
      "Bryne",
      "Molde",
      "Salzburg",
      "Borussia_Dortmund",
      "Manchester_City",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/418560-1709108116.png?lm=1",
  },
  78: {
    name: "Karim Benzema",
    clubs: ["Lyon", "Real_Madrid", "Al_Ittihad"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/18922-1702414196.jpg?lm=1",
  },
  79: {
    name: "Marc Andre Ter Stegen",
    clubs: ["Borussia_M'gladbach", "Barcelona"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/74857-1674465246.jpg?lm=1",
  },
  80: {
    name: "Jude Bellingham",
    clubs: ["Birmingham_City", "Borussia_Dortmund", "Real_Madrid"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/581678-1693987944.jpg?lm=1",
  },
  81: {
    name: "Robert Lewandowski",
    clubs: ["Lech_Poznan", "Borussia_Dortmund", "Bayern_Munich", "Barcelona"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/38253-1701118759.jpg?lm=1",
  },
  82: {
    name: "Rodri",
    clubs: ["Villarreal", "Atletico_Madrid", "Manchester_City"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/357565-1682587890.jpg?lm=1",
  },
  83: {
    name: "Victor Osimhen",
    clubs: ["Wolfsburg", "Sporting_Charleroi", "Lille", "Napoli"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/401923-1661352899.jpg?lm=1",
  },
  84: {
    name: "Kevin De Bruyne",
    clubs: ["Genk", "Werder_Bremen", "Chelsea", "Wolfsburg", "Manchester_City"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/88755-1684245748.jpg?lm=1",
  },
  85: {
    name: "Pedri",
    clubs: ["Las_Palmas", "Barcelona"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/683840-1620304992.jpg?lm=1",
  },
  86: {
    name: "Kai Havertz",
    clubs: ["Bayer_Leverkusen", "Chelsea", "Arsenal"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/309400-1683903902.jpg?lm=1",
  },
  87: {
    name: "Brahim Diaz",
    clubs: ["Manchester_City", "Real_Madrid", "AC_Milan", "Real_Madrid"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/314678-1632307989.jpg?lm=1",
  },
  88: {
    name: "Sandro Tonali",
    clubs: ["Brescia", "AC_Milan", "Newcastle_United"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/397033-1688389270.jpg?lm=1",
  },
  89: {
    name: "Ismael Bennacer",
    clubs: ["Arsenal", "Tours", "Empoli", "AC_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/351816-1663575089.jpg?lm=1",
  },
  90: {
    name: "Olivier Giroud",
    clubs: ["Istres", "Tours", "Montpellier", "Arsenal", "Chelsea", "AC_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/82442-1661514565.jpg?lm=1",
  },
  91: {
    name: "Jorginho",
    clubs: ["Napoli", "Chelsea", "Arsenal"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/102017-1682590896.jpg?lm=1",
  },
  92: {
    name: "Marco Verratti",
    clubs: ["Pescara", "PSG", "Al_Arabi"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/102558-1672304218.jpg?lm=1",
  },
  93: {
    name: "Gianluca Scamacca",
    clubs: [
      "Sassuolo",
      "Cremonese",
      "PEC_Zwolle",
      "Ascoli",
      "Genoa",
      "Sassuolo",
      "West_Ham_United",
      "Atalanta",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/315867-1659354755.jpg?lm=1",
  },
  94: {
    name: "David Alaba ",
    clubs: ["Bayern_Munich", "Hoffenheim", "Bayern_Munich", "Real_Madrid"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/59016-1684921582.jpeg?lm=1",
  },
  95: {
    name: "Raphael Guerreiro",
    clubs: ["Caen", "Lorient", "Borussia_Dortmund", "Bayern_Munich"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/170986-1711745629.jpg?lm=1",
  },
  96: {
    name: "Giovanni Di Lorenzo",
    clubs: ["Matera", "Empoli", "Napoli"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/169880-1661509008.jpg?lm=1",
  },
  97: {
    name: "Hirving Lozano",
    clubs: ["Pachuca", "PSV", "Napoli", "PSV"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/316889-1661508585.jpg?lm=1",
  },
  98: {
    name: "Santiago Gimenez",
    clubs: ["Cruz_Azul", "Feyenoord"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/552955-1679137361.jpg?lm=1",
  },
  99: {
    name: "Edson Alvarez",
    clubs: ["America", "Ajax", "West_Ham_United"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/401356-1698343328.jpeg?lm=1",
  },
  100: {
    name: "Frenkie De Jong",
    clubs: ["Willem_II", "Ajax", "Barcelona"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/326330-1656499973.png?lm=1",
  },
  101: {
    name: "Tijjani Reijnders",
    clubs: ["PEC_Zwolle", "AZ", "RKC_Waalwijk", "AZ", "AC_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/460939-1676466080.jpg?lm=1",
  },
  102: {
    name: "Christian Pulisic",
    clubs: ["Borussia_Dortmund", "Chelsea", "AC_Milan"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/315779-1691696699.jpg?lm=1",
  },
  103: {
    name: "Timothy Weah",
    clubs: ["PSG", "Celtic", "Lille", "Juventus"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/370846-1692277669.jpg?lm=1",
  },
  104: {
    name: "Weston McKennie",
    clubs: ["Schalke_04", "Juventus", "Leeds_United", "Juventus"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/332697-1642687384.jpg?lm=1",
  },
  105: {
    name: "Dusan Vlahovic",
    clubs: ["Partizan", "Fiorentina", "Juventus"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/357498-1683293071.jpg?lm=1",
  },
  106: {
    name: "Simon Kjaer",
    clubs: [
      "Palermo",
      "Wolfsburg",
      "Roma",
      "Wolfsburg",
      "Lille",
      "Fenerbahce",
      "Sevilla",
      "Atalanta",
      "AC_Milan",
    ],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/48859-1661514194.jpg?lm=1",
  },
  107: {
    name: "Thiago Silva",
    clubs: ["Fluminense", "AC_Milan", "PSG", "Chelsea"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/29241-1661856081.jpg?lm=1",
  },
  108: {
    name: "Gabriel Jesus",
    clubs: ["Palmeiras", "Manchester_City", "Arsenal"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/363205-1669711141.jpg?lm=1",
  },
  109: {
    name: "Federico Valverde",
    clubs: ["Peñarol", "Deportivo_la_coruña", "Real_Madrid"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/369081-1681999815.jpg?lm=1",
  },
  110: {
    name: "Federico Chiesa",
    clubs: ["Fiorentina", "Juventus"],
    image:
      "https://img.a.transfermarkt.technology/portrait/header/341092-1663576975.jpg?lm=1",
  },
};

export default players;
