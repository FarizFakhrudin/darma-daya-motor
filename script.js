// ============================================================
// CONFIGURASI WHATSAPP
// ============================================================
const WHATSAPP_NUMBER = "wa.me/6282125413971";

// ============================================================
// DATABASE PRODUK DARI EXCEL (DINAMIS)
// ============================================================
const PRODUCTS_DATA = [
  {
    id: "all-beat-cbs",
    name: "BeAT Sporty CBS",
    folder: "BEAT CBS",
    category: "Beat Series",
    otr_price: 19725000.0,
    images: [
      "BEAT CBS - Jazz Glossy Black.jpg",
      "BEAT CBS - Jazz Glossy Blue Black.jpg",
      "BEAT CBS - Jazz Glossy Red Black.jpg"
    ],
    installments: [
      { dp: 2000000, rates: { 11: 2117000, 17: 1500000, 23: 1199000, 29: 1032000, 35: 927000 } },
      { dp: 2500000, rates: { 11: 2065000, 17: 1463000, 23: 1169000, 29: 1006000, 35: 905000 } },
      { dp: 3000000, rates: { 11: 2003000, 17: 1420000, 23: 1132000, 29: 976000, 35: 880000 } },
      { dp: 4000000, rates: { 11: 1898000, 17: 1345000, 23: 1074000, 29: 924000, 35: 834000 } }
    ],
    variants: [
      { name: "Jazz Glossy Black", color: "#1f2937" },
      { name: "Jazz Glossy Blue Black", color: "#1e40af" },
      { name: "Jazz Glossy Red Black", color: "#e81c24" }
    ]
  },
  {
    id: "beat-cbs-iss",
    name: "BeAT CBS ISS",
    folder: "BEAT CBS ISS",
    category: "Beat Series",
    otr_price: 20375000.0,
    images: [
      "BEAT CBS ISS - Infinite Glossy Red Blue.jpg",
      "BEAT CBS ISS - Infinite Matte Black.jpg"
    ],
    installments: [
      { dp: 2000000, rates: { 11: 2188000, 17: 1551000, 23: 1226000, 29: 1055000, 35: 935000 } },
      { dp: 2500000, rates: { 11: 2136000, 17: 1514000, 23: 1196000, 29: 1029000, 35: 913000 } },
      { dp: 3000000, rates: { 11: 2074000, 17: 1471000, 23: 1159000, 29: 999000, 35: 888000 } },
      { dp: 4000000, rates: { 11: 1969000, 17: 1396000, 23: 1101000, 29: 947000, 35: 842000 } }
    ],
    variants: [
      { name: "Infinite Glossy Red Blue", color: "#dc2626" },
      { name: "Infinite Matte Black", color: "#1f2937" }
    ]
  },
  {
    id: "all-beat-dlx",
    name: "BeAT Deluxe",
    folder: "BEAT DELUXE SMART KEY",
    category: "Beat Series",
    otr_price: 21350000.0,
    images: [
      "BEAT DELUXE SMART KEY - Deluxe Matte Black.jpg",
      "BEAT DELUXE SMART KEY - Deluxe Matte Blue.jpg",
      "BEAT DELUXE SMART KEY - Deluxe Matte Brown.jpg"
    ],
    installments: [
      { dp: 2200000, rates: { 11: 2278000, 17: 1613000, 23: 1289000, 29: 1109000, 35: 997000 } },
      { dp: 2700000, rates: { 11: 2224000, 17: 1576000, 23: 1259000, 29: 1083000, 35: 975000 } },
      { dp: 3300000, rates: { 11: 2150000, 17: 1525000, 23: 1216000, 29: 1046000, 35: 945000 } },
      { dp: 4300000, rates: { 11: 2046000, 17: 1450000, 23: 1156000, 29: 995000, 35: 899000 } }
    ],
    variants: [
      { name: "Deluxe Matte Black", color: "#1f2937" },
      { name: "Deluxe Matte Blue", color: "#1e40af" },
      { name: "Deluxe Matte Brown", color: "#92400e" }
    ]
  },
  {
    id: "beat-street",
    name: "BeAT Street",
    folder: "BEAT STREET",
    category: "Beat Series",
    otr_price: 20900000.0,
    images: [
      "BEAT STREET - Street Glossy Gray.jpg",
      "BEAT STREET - Street Matte Black.jpg",
      "BEAT STREET - Street Matte Brown.jpg"
    ],
    installments: [
      { dp: 2100000, rates: { 11: 2239000, 17: 1585000, 23: 1267000, 29: 1090000, 35: 980000 } },
      { dp: 2700000, rates: { 11: 2174000, 17: 1540000, 23: 1230000, 29: 1059000, 35: 953000 } },
      { dp: 3200000, rates: { 11: 2111000, 17: 1497000, 23: 1194000, 29: 1027000, 35: 927000 } },
      { dp: 4200000, rates: { 11: 2006000, 17: 1423000, 23: 1134000, 29: 976000, 35: 882000 } }
    ],
    variants: [
      { name: "Street Glossy Gray", color: "#9ca3af" },
      { name: "Street Matte Black", color: "#1f2937" },
      { name: "Street Matte Brown", color: "#92400e" }
    ]
  },
  {
    id: "genio-cbs",
    name: "Genio CBS",
    folder: "GENIO CBS",
    category: "Genio Series",
    otr_price: 21200000.0,
    images: [
      "GENIO CBS - VIBRANT BLACK.jpg"
    ],
    installments: [
      { dp: 2200000, rates: { 11: 2260000, 17: 1601000, 23: 1280000, 29: 1102000, 35: 978000 } },
      { dp: 2700000, rates: { 11: 2200000, 17: 1559000, 23: 1243000, 29: 1070000, 35: 954000 } },
      { dp: 3200000, rates: { 11: 2146000, 17: 1520000, 23: 1213000, 29: 1046000, 35: 931000 } },
      { dp: 4300000, rates: { 11: 2029000, 17: 1436000, 23: 1146000, 29: 988000, 35: 880000 } }
    ],
    variants: [
      { name: "Vibrant Black", color: "#1f2937" }
    ]
  },
  {
    id: "genio-iss",
    name: "Genio CBS ISS",
    folder: "GENIO CBS ISS",
    category: "Genio Series",
    otr_price: 21625000.0,
    images: [
      "GENIO CBS ISS - FABULOUS MATTE BLACK.jpg",
      "GENIO CBS ISS - FABULOUS MATTE BROWN.jpg",
      "GENIO CBS ISS - FABULOUS MATTE GREEN.jpg"
    ],
    installments: [
      { dp: 2200000, rates: { 11: 2308000, 17: 1635000, 23: 1307000, 29: 1125000, 35: 998000 } },
      { dp: 2800000, rates: { 11: 2235000, 17: 1584000, 23: 1264000, 29: 1088000, 35: 971000 } },
      { dp: 3300000, rates: { 11: 2182000, 17: 1547000, 23: 1235000, 29: 1063000, 35: 947000 } },
      { dp: 4400000, rates: { 11: 2066000, 17: 1461000, 23: 1165000, 29: 1006000, 35: 896000 } }
    ],
    variants: [
      { name: "Fabulous Matte Black", color: "#1f2937" },
      { name: "Fabulous Matte Brown", color: "#92400e" },
      { name: "Fabulous Matte Green", color: "#166534" }
    ]
  },
  {
    id: "scoopy-prestige",
    name: "Scoopy Prestige",
    folder: "SCOOPY PRESTIGE",
    category: "Scoopy Series",
    otr_price: 23250000.0,
    images: [
      "SCOOPY PRESTIGE - Prestige White.jpg",
      "SCOOPY PRESTIGE - Prestige Black.jpg",
      "SCOOPY PRESTIGE - Prestige Red.jpg"
    ],
    installments: [
      { dp: 2500000, rates: { 11: 2624000, 17: 1852000, 23: 1481000, 29: 1265000, 35: 1133000 } },
      { dp: 3200000, rates: { 11: 2549000, 17: 1800000, 23: 1438000, 29: 1229000, 35: 1102000 } },
      { dp: 3800000, rates: { 11: 2485000, 17: 1755000, 23: 1402000, 29: 1199000, 35: 1075000 } },
      { dp: 5000000, rates: { 11: 2358000, 17: 1665000, 23: 1331000, 29: 1138000, 35: 1019000 } }
    ],
    variants: [
      { name: "Prestige White", color: "#d4a574" },
      { name: "Prestige Black", color: "#1f2937" },
      { name: "Prestige Red", color: "#991b1b" }
    ]
  },
  {
    id: "scoopy-stylish",
    name: "Scoopy Stylish",
    folder: "SCOOPY STYLISH",
    category: "Scoopy Series",
    otr_price: 23250000.0,
    images: [
      "SCOOPY STYLISH - Stylish Beige.jpg",
      "SCOOPY STYLISH - Stylish Green.jpg",
      "SCOOPY STYLISH - Stylish Grey.jpg"
    ],
    installments: [
      { dp: 2500000, rates: { 11: 2624000, 17: 1852000, 23: 1481000, 29: 1265000, 35: 1133000 } },
      { dp: 3200000, rates: { 11: 2549000, 17: 1800000, 23: 1438000, 29: 1229000, 35: 1102000 } },
      { dp: 3800000, rates: { 11: 2485000, 17: 1755000, 23: 1402000, 29: 1199000, 35: 1075000 } },
      { dp: 5000000, rates: { 11: 2358000, 17: 1665000, 23: 1331000, 29: 1138000, 35: 1019000 } }
    ],
    variants: [
      { name: "Stylish Beige", color: "#d4a574" },
      { name: "Stylish Green", color: "#166534" },
      { name: "Stylish Grey", color: "#6b7280" }
    ]
  },
  {
    id: "vario-125-cbs",
    name: "Vario 125 CBS",
    folder: "VARIO 125 CBS",
    category: "Vario Series",
    otr_price: 25200000.0,
    images: [
      "VARIO 125 CBS - Sporty Black.jpg",
      "VARIO 125 CBS - Sporty Mint.jpg",
      "VARIO 125 CBS - Sporty Red.jpg"
    ],
    installments: [
      { dp: 2600000, rates: { 11: 2678000, 17: 1893000, 23: 1520000, 29: 1299000, 35: 1150000 } },
      { dp: 3200000, rates: { 11: 2614000, 17: 1848000, 23: 1482000, 29: 1267000, 35: 1122000 } },
      { dp: 3800000, rates: { 11: 2551000, 17: 1801000, 23: 1446000, 29: 1235000, 35: 1096000 } },
      { dp: 5100000, rates: { 11: 2410000, 17: 1702000, 23: 1367000, 29: 1169000, 35: 1036000 } }
    ],
    variants: [
      { name: "Sporty Black", color: "#1f2937" },
      { name: "Sporty Mint", color: "#6ee7b7" },
      { name: "Sporty Red", color: "#dc2626" }
    ]
  },
  {
    id: "vario-125-css",
    name: "Vario 125 CBS ISS",
    folder: "VARIO 125 CBS ISS",
    category: "Vario Series",
    otr_price: 27075000.0,
    images: [
      "VARIO 125 CBS ISS - Advance Blue.jpg",
      "VARIO 125 CBS ISS - Advance Matte Black.jpg",
      "VARIO 125 CBS ISS - Advance Matte Red.jpg"
    ],
    installments: [
      { dp: 2800000, rates: { 11: 2873000, 17: 2030000, 23: 1628000, 29: 1393000, 35: 1233000 } },
      { dp: 3400000, rates: { 11: 2806000, 17: 1985000, 23: 1592000, 29: 1361000, 35: 1203000 } },
      { dp: 4100000, rates: { 11: 2732000, 17: 1933000, 23: 1549000, 29: 1324000, 35: 1173000 } },
      { dp: 5500000, rates: { 11: 2580000, 17: 1824000, 23: 1463000, 29: 1252000, 35: 1108000 } }
    ],
    variants: [
      { name: "Advance Blue", color: "#1e40af" },
      { name: "Advance Matte Black", color: "#1f2937" },
      { name: "Advance Matte Red", color: "#dc2626" }
    ]
  },
  {
    id: "vario-160",
    name: "Vario 160",
    folder: "VARIO EVO 160 CBS",
    category: "Vario Series",
    otr_price: 28850000.0,
    images: [
      "VARIO EVO 160 CBS - Glossy Blue Lime.jpg",
      "VARIO EVO 160 CBS - Glossy White Red.jpg"
    ],
    installments: [
      { dp: 2900000, rates: { 11: 3067000, 17: 2168000, 23: 1739000, 29: 1486000, 35: 1333000 } },
      { dp: 3700000, rates: { 11: 2981000, 17: 2108000, 23: 1690000, 29: 1445000, 35: 1296000 } },
      { dp: 4400000, rates: { 11: 2905000, 17: 2051000, 23: 1648000, 29: 1409000, 35: 1262000 } },
      { dp: 5800000, rates: { 11: 2753000, 17: 1948000, 23: 1564000, 29: 1335000, 35: 1196000 } }
    ],
    variants: [
      { name: "Glossy Blue Lime", color: "#84cc16" },
      { name: "Glossy White Red", color: "#f5f5f5" }
    ]
  },
  {
    id: "stylo-cbs",
    name: "Stylo 160 CBS",
    folder: "STYLO 160 CBS",
    category: "Stylo Series",
    otr_price: 30100000.0,
    images: [
      "STYLO 160 CBS - CBS Glam Beige.jpg",
      "STYLO 160 CBS - CBS Glam Black.jpg",
      "STYLO 160 CBS - CBS Glam White.jpg"
    ],
    installments: [
      { dp: 3100000, rates: { 11: 3186000, 17: 2252000, 23: 1806000, 29: 1544000, 35: 1368000 } },
      { dp: 3800000, rates: { 11: 3111000, 17: 2200000, 23: 1764000, 29: 1508000, 35: 1336000 } },
      { dp: 4600000, rates: { 11: 3024000, 17: 2135000, 23: 1715000, 29: 1467000, 35: 1297000 } },
      { dp: 6100000, rates: { 11: 2862000, 17: 2025000, 23: 1625000, 29: 1387000, 35: 1228000 } }
    ],
    variants: [
      { name: "CBS Glam Beige", color: "#d4a574" },
      { name: "CBS Glam Black", color: "#1f2937" },
      { name: "CBS Glam White", color: "#f5f5f5" }
    ]
  },
  {
    id: "stylo-abs",
    name: "Stylo 160 ABS",
    folder: "STYLO 160 ABS",
    category: "Stylo Series",
    otr_price: 33075000.0,
    images: [
      "STYLO 160 ABS - ABS Royal Blue.jpg",
      "STYLO 160 ABS - ABS Royal Brown.jpg",
      "STYLO 160 ABS - ABS Royal Green.jpg"
    ],
    installments: [
      { dp: 3400000, rates: { 11: 3488000, 17: 2466000, 23: 1977000, 29: 1690000, 35: 1497000 } },
      { dp: 4200000, rates: { 11: 3402000, 17: 2406000, 23: 1929000, 29: 1649000, 35: 1461000 } },
      { dp: 5000000, rates: { 11: 3315000, 17: 2341000, 23: 1880000, 29: 1608000, 35: 1422000 } },
      { dp: 6700000, rates: { 11: 3131000, 17: 2216000, 23: 1778000, 29: 1518000, 35: 1343000 } }
    ],
    variants: [
      { name: "ABS Royal Blue", color: "#1e40af" },
      { name: "ABS Royal Brown", color: "#92400e" },
      { name: "ABS Royal Green", color: "#166534" }
    ]
  },
  {
    id: "stylo-abs-se",
    name: "Stylo 160 ABS Special Edition",
    folder: "STYLO ABS SPECIAL",
    category: "Stylo Series",
    otr_price: 34850000.0,
    images: [
      "STYLO ABS SPECIAL - ABS Special Burgundy.jpg"
    ],
    installments: [
      { dp: 3500000, rates: { 11: 3676000, 17: 2599000, 23: 2084000, 29: 1781000, 35: 1578000 } },
      { dp: 4400000, rates: { 11: 3580000, 17: 2532000, 23: 2030000, 29: 1735000, 35: 1537000 } },
      { dp: 5300000, rates: { 11: 3482000, 17: 2459000, 23: 1975000, 29: 1689000, 35: 1494000 } },
      { dp: 7000000, rates: { 11: 3298000, 17: 2334000, 23: 1873000, 29: 1599000, 35: 1415000 } }
    ],
    variants: [
      { name: "ABS Special Burgundy", color: "#7f1d1d" }
    ]
  },
  {
    id: "pcx-160-cbs",
    name: "PCX 160 CBS",
    folder: "PCX 160 CBS",
    category: "PCX Series",
    otr_price: 34450000.0,
    images: [
      "PCX 160 CBS - Exceptional Black.jpg",
      "PCX 160 CBS - Exceptional Matte Silver.jpg",
      "PCX 160 CBS - Exceptional Matte White.jpg",
      "PCX 160 CBS - Exceptional Red.jpg"
    ],
    installments: [
      { dp: 3500000, rates: { 11: 3567000, 17: 2519000, 23: 2015000, 29: 1723000, 35: 1542000 } },
      { dp: 4400000, rates: { 11: 3470000, 17: 2452000, 23: 1961000, 29: 1678000, 35: 1502000 } },
      { dp: 5200000, rates: { 11: 3385000, 17: 2391000, 23: 1913000, 29: 1637000, 35: 1466000 } },
      { dp: 6900000, rates: { 11: 3206000, 17: 2264000, 23: 1813000, 29: 1550000, 35: 1389000 } }
    ],
    variants: [
      { name: "Exceptional Black", color: "#1f2937" },
      { name: "Exceptional Matte Silver", color: "#9ca3af" },
      { name: "Exceptional Matte White", color: "#f5f5f5" },
      { name: "Exceptional Red", color: "#dc2626" }
    ]
  },
  {
    id: "pcx-160-abs",
    name: "PCX 160 ABS",
    folder: "PCX 160 ABS",
    category: "PCX Series",
    otr_price: 37975000.0,
    images: [
      "PCX 160 ABS - Phenomenal Black.jpg",
      "PCX 160 ABS - Phenomenal Blue.jpg",
      "PCX 160 ABS - Phenomenal Green.jpg",
      "PCX 160 ABS - Phenomenal Matte White.jpg"
    ],
    installments: [
      { dp: 3800000, rates: { 11: 3915000, 17: 2765000, 23: 2213000, 29: 1894000, 35: 1694000 } },
      { dp: 4800000, rates: { 11: 3809000, 17: 2691000, 23: 2154000, 29: 1843000, 35: 1650000 } },
      { dp: 5700000, rates: { 11: 3713000, 17: 2623000, 23: 2100000, 29: 1797000, 35: 1609000 } },
      { dp: 7600000, rates: { 11: 3514000, 17: 2483000, 23: 1988000, 29: 1701000, 35: 1522000 } }
    ],
    variants: [
      { name: "Phenomenal Black", color: "#1f2937" },
      { name: "Phenomenal Blue", color: "#1e40af" },
      { name: "Phenomenal Green", color: "#166534" },
      { name: "Phenomenal Matte White", color: "#f5f5f5" }
    ]
  },
  {
    id: "adv-160-cbs",
    name: "ADV 160 CBS",
    folder: "ADV 160 CBS",
    category: "ADV Series",
    otr_price: 37500000.0,
    images: [
      "ADV 160 CBS - Solid Black.jpg",
      "ADV 160 CBS - Solid Matte Red.jpg",
      "ADV 160 CBS - Solid White.jpg"
    ],
    installments: [
      { dp: 2000000, rates: { 11: 4131000, 17: 2930000, 23: 2327000, 29: 1995000, 35: 1751000 } },
      { dp: 2500000, rates: { 11: 4091000, 17: 2911000, 23: 2297000, 29: 1969000, 35: 1729000 } },
      { dp: 3000000, rates: { 11: 4035000, 17: 2871000, 23: 2285000, 29: 1963000, 35: 1706000 } },
      { dp: 3500000, rates: { 11: 3988000, 17: 2841000, 23: 2254000, 29: 1937000, 35: 1702000 } },
      { dp: 4000000, rates: { 11: 3932000, 17: 2801000, 23: 2232000, 29: 1920000, 35: 1689000 } },
      { dp: 4500000, rates: { 11: 3884000, 17: 2770000, 23: 2201000, 29: 1894000, 35: 1666000 } }
    ],
    variants: [
      { name: "Solid Black", color: "#1f2937" },
      { name: "Solid Matte Red", color: "#dc2626" },
      { name: "Solid White", color: "#f5f5f5" }
    ]
  },
  {
    id: "adv-160-abs",
    name: "ADV 160 ABS",
    folder: "ADV 160 ABS",
    category: "ADV Series",
    otr_price: 40550000.0,
    images: [
      "ADV 160 ABS - Tough Matte Black.jpg",
      "ADV 160 ABS - Tough Matte Brown.jpg",
      "ADV 160 ABS - Tough Matte Green.jpg"
    ],
    installments: [
      { dp: 4100000, rates: { 11: 4161000, 17: 2940000, 23: 2351000, 29: 2013000, 35: 1780000 } },
      { dp: 5100000, rates: { 11: 4055000, 17: 2865000, 23: 2292000, 29: 1963000, 35: 1736000 } },
      { dp: 6100000, rates: { 11: 3950000, 17: 2791000, 23: 2233000, 29: 1912000, 35: 1691000 } },
      { dp: 8200000, rates: { 11: 3729000, 17: 2635000, 23: 2109000, 29: 1806000, 35: 1597000 } }
    ],
    variants: [
      { name: "Tough Matte Black", color: "#1f2937" },
      { name: "Tough Matte Green", color: "#166534" },
      { name: "Tough Matte Brown", color: "#92400e" }
    ]
  },
  {
    id: "cb150-verza",
    name: "CB150 Verza CW",
    folder: "CB 150 R VERZA CAST WHEEL",
    category: "Sport Series",
    otr_price: 25275000.0,
    images: [
      "CB 150 R VERZA CAST WHEEL - Bold Red.jpg",
      "CB 150 R VERZA CAST WHEEL - Macho Matte Black.jpg"
    ],
    installments: [
      { dp: 2600000, rates: { 11: 2657000, 17: 1875000, 23: 1497000, 29: 1279000, 35: 1131000 } },
      { dp: 3200000, rates: { 11: 2593000, 17: 1829000, 23: 1462000, 29: 1249000, 35: 1103000 } },
      { dp: 3800000, rates: { 11: 2529000, 17: 1784000, 23: 1425000, 29: 1218000, 35: 1078000 } },
      { dp: 5100000, rates: { 11: 2392000, 17: 1688000, 23: 1349000, 29: 1152000, 35: 1019000 } }
    ],
    variants: [
      { name: "Black", color: "#1f2937" },
      { name: "Red", color: "#dc2626" }
    ]
  },
  {
    id: "cb150r-st",
    name: "All New CB150R Streetfire STD",
    folder: "CB 150 R STANDARD",
    category: "Sport Series",
    otr_price: 34375000.0,
    images: [
      "CB 150 R STANDARD - New Macho Black.jpg",
      "CB 150 R STANDARD - New Stinger Red Black.jpg"
    ],
    installments: [
      { dp: 3500000, rates: { 11: 3627000, 17: 2549000, 23: 2020000, 29: 1730000, 35: 1493000 } },
      { dp: 4300000, rates: { 11: 3541000, 17: 2489000, 23: 1973000, 29: 1689000, 35: 1457000 } },
      { dp: 5200000, rates: { 11: 3445000, 17: 2422000, 23: 1919000, 29: 1643000, 35: 1418000 } },
      { dp: 6900000, rates: { 11: 3264000, 17: 2294000, 23: 1818000, 29: 1556000, 35: 1343000 } }
    ],
    variants: [
      { name: "New Macho Black", color: "#1f2937" },
      { name: "New Stinger Red Black", color: "#dc2626" }
    ]
  },
  {
    id: "crf150l",
    name: "CRF150L",
    folder: "CRF 150L",
    category: "Sport Series",
    otr_price: 38575000.0,
    images: [
      "CRF 150L - Extreme Black.jpg",
      "CRF 150L - Extreme Green.jpg",
      "CRF 150L - Extreme Red.jpg",
      "CRF 150L - Extreme Red 2.jpg",
      "CRF 150L - Extreme White.jpg"
    ],
    installments: [
      { dp: 3900000, rates: { 11: 3962000, 17: 2797000, 23: 2237000, 29: 1912000, 35: 1690000 } },
      { dp: 4900000, rates: { 11: 3857000, 17: 2723000, 23: 2178000, 29: 1861000, 35: 1645000 } },
      { dp: 5800000, rates: { 11: 3762000, 17: 2655000, 23: 2124000, 29: 1816000, 35: 1605000 } },
      { dp: 7800000, rates: { 11: 3552000, 17: 2507000, 23: 2007000, 29: 1716000, 35: 1516000 } }
    ],
    variants: [
      { name: "Extreme Black", color: "#1f2937" },
      { name: "Extreme Green", color: "#166534" },
      { name: "Extreme Red", color: "#dc2626" },
      { name: "Extreme White", color: "#f5f5f5" }
    ]
  },
  {
    id: "cbr150r",
    name: "CBR150R",
    folder: "CBR 150 R ABS",
    category: "Sport Series",
    otr_price: 39525000.0,
    images: [
      "CBR 150 R ABS - Honda Tricolor ABS.jpg",
      "CBR 150 R ABS - Victory Matte Black ABS.jpg"
    ],
    installments: [
      { dp: 3800000, rates: { 11: 3915000, 17: 2765000, 23: 2213000, 29: 1894000, 35: 1694000 } },
      { dp: 4800000, rates: { 11: 3809000, 17: 2691000, 23: 2154000, 29: 1843000, 35: 1650000 } },
      { dp: 5700000, rates: { 11: 3713000, 17: 2623000, 23: 2100000, 29: 1797000, 35: 1609000 } },
      { dp: 7600000, rates: { 11: 3514000, 17: 2483000, 23: 1988000, 29: 1701000, 35: 1522000 } }
    ],
    variants: [
      { name: "Honda Tricolor ABS", color: "#2563eb" },
      { name: "Victory Matte Black ABS", color: "#1f2937" }
    ]
  },
  {
    id: "supra-x",
    name: "Supra X 125 CW",
    folder: "SUPRA X CW TYPE",
    category: "Bebek Series",
    otr_price: 20425000.0,
    images: [
      "SUPRA X CW TYPE - New Energetic Red.jpg",
      "SUPRA X CW TYPE - New Golden Matte Black.jpg"
    ],
    installments: [
      { dp: 2000000, rates: { 11: 2181000, 17: 1542000, 23: 1224000, 29: 1046000, 35: 919000 } },
      { dp: 2500000, rates: { 11: 2140000, 17: 1523000, 23: 1193000, 29: 1020000, 35: 897000 } },
      { dp: 3000000, rates: { 11: 2084000, 17: 1482000, 23: 1181000, 29: 1014000, 35: 874000 } },
      { dp: 3500000, rates: { 11: 2037000, 17: 1452000, 23: 1150000, 29: 988000, 35: 870000 } },
      { dp: 4000000, rates: { 11: 1981000, 17: 1412000, 23: 1128000, 29: 971000, 35: 857000 } },
      { dp: 4500000, rates: { 11: 1933000, 17: 1381000, 23: 1097000, 29: 945000, 35: 834000 } }
    ],
    variants: [
      { name: "New Energetic Red", color: "#dc2626" },
      { name: "New Golden Matte Black", color: "#1f2937" }
    ]
  },
  {
    id: "revo-fit",
    name: "Revo Fit",
    folder: "REVO FIT",
    category: "Bebek Series",
    otr_price: 16275000.0,
    images: [
      "REVO FIT - Galaxy Blue.jpg",
      "REVO FIT - Raving Red.jpg"
    ],
    installments: [
      { dp: 2000000, rates: { 11: 1734000, 17: 1230000, 23: 978000, 29: 840000, 35: 738000 } },
      { dp: 2500000, rates: { 11: 1694000, 17: 1211000, 23: 948000, 29: 814000, 35: 716000 } },
      { dp: 3000000, rates: { 11: 1638000, 17: 1171000, 23: 936000, 29: 808000, 35: 693000 } },
      { dp: 3500000, rates: { 11: 1591000, 17: 1141000, 23: 905000, 29: 782000, 35: 689000 } },
      { dp: 4000000, rates: { 11: 1535000, 17: 1101000, 23: 883000, 29: 765000, 35: 676000 } },
      { dp: 4500000, rates: { 11: 1487000, 17: 1070000, 23: 852000, 29: 739000, 35: 653000 } }
    ],
    variants: [
      { name: "Galaxy Blue", color: "#2563eb" },
      { name: "Raving Red", color: "#dc2626" }
    ]
  },
  {
    id: "forza",
    name: "Forza 250",
    folder: "FORZA",
    category: "Premium Series",
    otr_price: 97425000.0,
    images: [
      "FORZA - Candy Rosy Red.jpg",
      "FORZA - Pearl Jubilee White.jpg",
      "FORZA - Pearl Shining Black.jpg",
      "FORZA - Pearl Smoky Gray.jpg"
    ],
    installments: [
      { dp: 9800000, rates: { 11: 9863000, 17: 6832000, 23: 5396000, 29: 4610000, 35: 4075000 } },
      { dp: 10800000, rates: { 11: 9758000, 17: 6759000, 23: 5339000, 29: 4561000, 35: 4032000 } },
      { dp: 11800000, rates: { 11: 9654000, 17: 6687000, 23: 5282000, 29: 4512000, 35: 3988000 } },
      { dp: 12800000, rates: { 11: 9549000, 17: 6614000, 23: 5224000, 29: 4464000, 35: 3945000 } }
    ],
    variants: [
      { name: "Candy Rosy Red", color: "#dc2626" },
      { name: "Pearl Jubilee White", color: "#f5f5f5" },
      { name: "Pearl Shining Black", color: "#1f2937" },
      { name: "Pearl Smoky Gray", color: "#6b7280" }
    ]
  },
  // ============================================================
  // PRODUK BARU - ADV 160 ROADSYNC
  // ============================================================
  {
    id: "adv-160-rs",
    name: "ADV 160 Roadsync",
    folder: "ADV 160 ROADSYNC",
    category: "ADV Series",
    otr_price: 40900000.0,
    images: [
      "ADV 160 ROADSYNC - SUV Brown.jpg"
    ],
    installments: [
      { dp: 4100000, rates: { 11: 4366000, 17: 3107000, 23: 2471000, 29: 2121000, 35: 1864000 } },
      { dp: 5100000, rates: { 11: 4261000, 17: 3033000, 23: 2412000, 29: 2071000, 35: 1820000 } },
      { dp: 6100000, rates: { 11: 4156000, 17: 2959000, 23: 2353000, 29: 2021000, 35: 1776000 } },
      { dp: 8200000, rates: { 11: 3934000, 17: 2803000, 23: 2228000, 29: 1914000, 35: 1683000 } }
    ],
    variants: [
      { name: "SUV Brown", color: "#92400e" }
    ]
  },
  // ============================================================
  // PRODUK BARU - CB 150 R SPECIAL EDITION
  // ============================================================
  {
    id: "cb150r-se",
    name: "All New CB150R Streetfire SE",
    folder: "CB 150 R SPECIAL EDITION",
    category: "Sport Series",
    otr_price: 36375000.0,
    images: [
      "CB 150 R SPECIAL EDITION - New Armored Matte Grey.jpg",
      "CB 150 R SPECIAL EDITION - New Fury Matte Red.jpg",
      "CB 150 R SPECIAL EDITION - New Raptor Matte Black.jpg"
    ],
    installments: [
      { dp: 3700000, rates: { 11: 3835000, 17: 2724000, 23: 2163000, 29: 1854000, 35: 1623000 } },
      { dp: 4500000, rates: { 11: 3749000, 17: 2663000, 23: 2117000, 29: 1814000, 35: 1588000 } },
      { dp: 5400000, rates: { 11: 3654000, 17: 2597000, 23: 2065000, 29: 1770000, 35: 1549000 } },
      { dp: 7200000, rates: { 11: 3463000, 17: 2461000, 23: 1957000, 29: 1678000, 35: 1469000 } }
    ],
    variants: [
      { name: "New Armored Matte Grey", color: "#6b7280" },
      { name: "New Fury Matte Red", color: "#dc2626" },
      { name: "New Raptor Matte Black", color: "#1f2937" }
    ]
  },
  // ============================================================
  // PRODUK BARU - CB 150 X
  // ============================================================
  {
    id: "cb150x",
    name: "CB150X",
    folder: "CB 150 X",
    category: "Sport Series",
    otr_price: 33500000.0,
    images: [
      "CB 150 X - Amazon Matte Green.jpg",
      "CB 150 X - Mandala Red.jpg",
      "CB 150 X - Sahara Matte Brown.jpg",
      "CB 150 X - Volcano Matte Black.jpg"
    ],
    installments: [
      { dp: 3400000, rates: { 11: 3568000, 17: 2536000, 23: 2013000, 29: 1727000, 35: 1512000 } },
      { dp: 4200000, rates: { 11: 3482000, 17: 2476000, 23: 1967000, 29: 1687000, 35: 1477000 } },
      { dp: 5100000, rates: { 11: 3387000, 17: 2410000, 23: 1915000, 29: 1643000, 35: 1438000 } },
      { dp: 6800000, rates: { 11: 3206000, 17: 2281000, 23: 1813000, 29: 1556000, 35: 1363000 } }
    ],
    variants: [
      { name: "Amazon Matte Green", color: "#166534" },
      { name: "Mandala Red", color: "#dc2626" },
      { name: "Sahara Matte Brown", color: "#92400e" },
      { name: "Volcano Matte Black", color: "#1f2937" }
    ]
  },
  // ============================================================
  // PRODUK BARU - CB 150 VERZA SPOKE WHEEL
  // ============================================================
  {
    id: "cb150-verza-sw",
    name: "CB150 Verza SW",
    folder: "CB 150 VERZA SPOKE WHEEL",
    category: "Sport Series",
    otr_price: 24500000.0,
    images: [
      "CB 150 VERZA SPOKE WHEEL - Masculine Black.jpg"
    ],
    installments: [
      { dp: 2500000, rates: { 11: 2610000, 17: 1853000, 23: 1474000, 29: 1262000, 35: 1103000 } },
      { dp: 3000000, rates: { 11: 2554000, 17: 1813000, 23: 1442000, 29: 1236000, 35: 1080000 } },
      { dp: 3500000, rates: { 11: 2507000, 17: 1781000, 23: 1412000, 29: 1210000, 35: 1056000 } },
      { dp: 5000000, rates: { 11: 2355000, 17: 1673000, 23: 1327000, 29: 1138000, 35: 992000 } }
    ],
    variants: [
      { name: "Masculine Black", color: "#1f2937" }
    ]
  },
  // ============================================================
  // PRODUK BARU - CBR 150 R NON ABS
  // ============================================================
  {
    id: "cbr150r-nonabs",
    name: "CBR150R Non ABS",
    folder: "CBR 150 R NON ABS",
    category: "Sport Series",
    otr_price: 36800000.0,
    images: [
      "CBR 150 R NON ABS - Honda Racing Red STD.jpg",
      "CBR 150 R NON ABS - Honda Tricolor STD.jpg",
      "CBR 150 R NON ABS - Victory Matte Black STD.jpg"
    ],
    installments: [
      { dp: 3700000, rates: { 11: 3877000, 17: 2754000, 23: 2187000, 29: 1874000, 35: 1641000 } },
      { dp: 4600000, rates: { 11: 3781000, 17: 2687000, 23: 2135000, 29: 1830000, 35: 1602000 } },
      { dp: 5500000, rates: { 11: 3686000, 17: 2620000, 23: 2083000, 29: 1785000, 35: 1563000 } },
      { dp: 7300000, rates: { 11: 3495000, 17: 2484000, 23: 1975000, 29: 1693000, 35: 1483000 } }
    ],
    variants: [
      { name: "Honda Racing Red STD", color: "#dc2626" },
      { name: "Honda Tricolor STD", color: "#2563eb" },
      { name: "Victory Matte Black STD", color: "#1f2937" }
    ]
  },
  // ============================================================
  // PRODUK BARU - CBR 250RR
  // ============================================================
  {
    id: "cbr250rr",
    name: "CBR250RR",
    folder: "CBR 250RR",
    category: "Sport Series",
    otr_price: 62625000.0,
    images: [
      "CBR 250RR - Black Freedom.jpg",
      "CBR 250RR - Bravery Red Black.jpg",
      "CBR 250RR - Honda Racing Red.jpg",
      "CBR 250RR - Honda Tricolor.jpg",
      "CBR 250RR - Mat Gunpowder Black Metallic.jpg",
      "CBR 250RR - Mystique Blue.jpg"
    ],
    installments: [
      { dp: 6300000, rates: { 11: 6504000, 17: 4618000, 23: 3660000, 29: 3140000, 35: 2750000 } },
      { dp: 7500000, rates: { 11: 6376000, 17: 4527000, 23: 3589000, 29: 3079000, 35: 2696000 } },
      { dp: 8800000, rates: { 11: 6237000, 17: 4429000, 23: 3511000, 29: 3013000, 35: 2638000 } },
      { dp: 11700000, rates: { 11: 5929000, 17: 4211000, 23: 3339000, 29: 2866000, 35: 2509000 } }
    ],
    variants: [
      { name: "Black Freedom", color: "#1f2937" },
      { name: "Bravery Red Black", color: "#dc2626" },
      { name: "Honda Racing Red", color: "#e81c24" },
      { name: "Honda Tricolor", color: "#2563eb" },
      { name: "Mat Gunpowder Black Metallic", color: "#374151" },
      { name: "Mystique Blue", color: "#1e40af" }
    ]
  },
  // ============================================================
  // PRODUK BARU - CRF 250 L
  // ============================================================
  {
    id: "crf250l",
    name: "CRF250L",
    folder: "CRF 250 L",
    category: "Sport Series",
    otr_price: 54825000.0,
    images: [
      "CRF 250 L - Extreme Red.jpg"
    ],
    installments: [
      { dp: 5500000, rates: { 11: 5741000, 17: 4078000, 23: 3235000, 29: 2776000, 35: 2430000 } },
      { dp: 6800000, rates: { 11: 5603000, 17: 3981000, 23: 3158000, 29: 2710000, 35: 2372000 } },
      { dp: 8000000, rates: { 11: 5476000, 17: 3891000, 23: 3088000, 29: 2650000, 35: 2319000 } },
      { dp: 10700000, rates: { 11: 5197000, 17: 3693000, 23: 2932000, 29: 2517000, 35: 2202000 } }
    ],
    variants: [
      { name: "Extreme Red", color: "#dc2626" }
    ]
  },
  // ============================================================
  // PRODUK BARU - REVO X
  // ============================================================
  {
    id: "revo-x",
    name: "Revo X",
    folder: "REVO X",
    category: "Bebek Series",
    otr_price: 16700000.0,
    images: [
      "REVO X - Attractive Red.jpg",
      "REVO X - Quantum Black.jpg"
    ],
    installments: [
      { dp: 2000000, rates: { 11: 1780000, 17: 1263000, 23: 1004000, 29: 863000, 35: 758000 } },
      { dp: 2500000, rates: { 11: 1727000, 17: 1226000, 23: 975000, 29: 839000, 35: 737000 } },
      { dp: 3000000, rates: { 11: 1675000, 17: 1189000, 23: 946000, 29: 814000, 35: 716000 } },
      { dp: 4000000, rates: { 11: 1570000, 17: 1114000, 23: 888000, 29: 765000, 35: 673000 } }
    ],
    variants: [
      { name: "Attractive Red", color: "#dc2626" },
      { name: "Quantum Black", color: "#1f2937" }
    ]
  },
  // ============================================================
  // PRODUK BARU - SONIC 150R
  // ============================================================
  {
    id: "sonic-150r",
    name: "Sonic 150R",
    folder: "SONIC 150R",
    category: "Bebek Series",
    otr_price: 21800000.0,
    images: [
      "SONIC 150R - Activo Black.jpg",
      "SONIC 150R - Aggresso Matte Black.jpg",
      "SONIC 150R - Energetic Red.jpg",
      "SONIC 150R - Honda Racing Red.jpg"
    ],
    installments: [
      { dp: 2200000, rates: { 11: 2323000, 17: 1651000, 23: 1309000, 29: 1122000, 35: 982000 } },
      { dp: 2700000, rates: { 11: 2271000, 17: 1614000, 23: 1280000, 29: 1098000, 35: 960000 } },
      { dp: 3200000, rates: { 11: 2219000, 17: 1577000, 23: 1251000, 29: 1073000, 35: 939000 } },
      { dp: 4400000, rates: { 11: 2095000, 17: 1490000, 23: 1182000, 29: 1014000, 35: 887000 } }
    ],
    variants: [
      { name: "Activo Black", color: "#1f2937" },
      { name: "Aggresso Matte Black", color: "#374151" },
      { name: "Energetic Red", color: "#dc2626" },
      { name: "Honda Racing Red", color: "#e81c24" }
    ]
  },
  // ============================================================
  // PRODUK BARU - SUPER CUB C125
  // ============================================================
  {
    id: "super-cub-c125",
    name: "Super Cub C125",
    folder: "SUPER CUB C125",
    category: "Premium Series",
    otr_price: 73700000.0,
    images: [
      "SUPER CUB C125 - Matte Axis Grey Metallic.jpg",
      "SUPER CUB C125 - Pearl Cadet Gray.jpg",
      "SUPER CUB C125 - Pearl Nebula Red.jpg"
    ],
    installments: [
      { dp: 7400000, rates: { 11: 7646000, 17: 5428000, 23: 4306000, 29: 3692000, 35: 3233000 } },
      { dp: 8800000, rates: { 11: 7497000, 17: 5324000, 23: 4224000, 29: 3622000, 35: 3172000 } },
      { dp: 10200000, rates: { 11: 7349000, 17: 5220000, 23: 4142000, 29: 3552000, 35: 3110000 } },
      { dp: 13600000, rates: { 11: 7054000, 17: 5011000, 23: 3978000, 29: 3412000, 35: 2986000 } }
    ],
    variants: [
      { name: "Matte Axis Grey Metallic", color: "#6b7280" },
      { name: "Pearl Cadet Gray", color: "#9ca3af" },
      { name: "Pearl Nebula Red", color: "#dc2626" }
    ]
  },
  // ============================================================
  // PRODUK BARU - SUPRA GTR 150 EXCLUSIVE
  // ============================================================
  {
    id: "supra-gtr-excl",
    name: "Supra GTR 150 Exclusive",
    folder: "SUPRA GTR 150 EXCLUSIVE",
    category: "Bebek Series",
    otr_price: 24500000.0,
    images: [
      "SUPRA GTR 150 EXCLUSIVE - Exclusive Matte Red.jpg",
      "SUPRA GTR 150 EXCLUSIVE - Exclusive Matte Silver.jpg"
    ],
    installments: [
      { dp: 2500000, rates: { 11: 2610000, 17: 1853000, 23: 1474000, 29: 1262000, 35: 1103000 } },
      { dp: 3000000, rates: { 11: 2558000, 17: 1816000, 23: 1445000, 29: 1238000, 35: 1082000 } },
      { dp: 3500000, rates: { 11: 2506000, 17: 1779000, 23: 1417000, 29: 1214000, 35: 1061000 } },
      { dp: 5100000, rates: { 11: 2337000, 17: 1658000, 23: 1322000, 29: 1134000, 35: 989000 } }
    ],
    variants: [
      { name: "Exclusive Matte Red", color: "#dc2626" },
      { name: "Exclusive Matte Silver", color: "#9ca3af" }
    ]
  },
  // ============================================================
  // PRODUK BARU - SUPRA GTR 150 SPORTY
  // ============================================================
  {
    id: "supra-gtr-sporty",
    name: "Supra GTR 150 Sporty",
    folder: "SUPRA GTR 150 SPORTY",
    category: "Bebek Series",
    otr_price: 23500000.0,
    images: [
      "SUPRA GTR 150 SPORTY - Sporty Gun Black.jpg",
      "SUPRA GTR 150 SPORTY - Sporty Spartan Red.jpg"
    ],
    installments: [
      { dp: 2400000, rates: { 11: 2505000, 17: 1778000, 23: 1414000, 29: 1211000, 35: 1058000 } },
      { dp: 2900000, rates: { 11: 2453000, 17: 1741000, 23: 1385000, 29: 1187000, 35: 1037000 } },
      { dp: 3400000, rates: { 11: 2401000, 17: 1704000, 23: 1356000, 29: 1162000, 35: 1016000 } },
      { dp: 4700000, rates: { 11: 2263000, 17: 1606000, 23: 1279000, 29: 1097000, 35: 959000 } }
    ],
    variants: [
      { name: "Sporty Gun Black", color: "#374151" },
      { name: "Sporty Spartan Red", color: "#dc2626" }
    ]
  },
  // ============================================================
  // PRODUK BARU - SUPRA X SW TYPE
  // ============================================================
  {
    id: "supra-x-sw",
    name: "Supra X 125 SW",
    folder: "SUPRA X SW TYPE",
    category: "Bebek Series",
    otr_price: 19500000.0,
    images: [
      "SUPRA X SW TYPE - New Quantum Black.jpg"
    ],
    installments: [
      { dp: 2000000, rates: { 11: 2078000, 17: 1476000, 23: 1173000, 29: 1005000, 35: 880000 } },
      { dp: 2500000, rates: { 11: 2025000, 17: 1439000, 23: 1144000, 29: 981000, 35: 859000 } },
      { dp: 3000000, rates: { 11: 1973000, 17: 1402000, 23: 1115000, 29: 957000, 35: 838000 } },
      { dp: 4000000, rates: { 11: 1868000, 17: 1327000, 23: 1057000, 29: 908000, 35: 796000 } }
    ],
    variants: [
      { name: "New Quantum Black", color: "#1f2937" }
    ]
  },
  // ============================================================
  // PRODUK BARU - VARIO 125 STREET
  // ============================================================
  {
    id: "vario-125-street",
    name: "Vario 125 Street",
    folder: "VARIO 125 STREET",
    category: "Vario Series",
    otr_price: 24200000.0,
    images: [
      "VARIO 125 STREET - Street Black Coral.jpg",
      "VARIO 125 STREET - Street Black Purple.jpg",
      "VARIO 125 STREET - Street Black White.jpg"
    ],
    installments: [
      { dp: 2500000, rates: { 11: 2570000, 17: 1825000, 23: 1451000, 29: 1243000, 35: 1088000 } },
      { dp: 3000000, rates: { 11: 2518000, 17: 1788000, 23: 1422000, 29: 1219000, 35: 1066000 } },
      { dp: 3500000, rates: { 11: 2466000, 17: 1751000, 23: 1393000, 29: 1195000, 35: 1045000 } },
      { dp: 5100000, rates: { 11: 2297000, 17: 1630000, 23: 1298000, 29: 1114000, 35: 974000 } }
    ],
    variants: [
      { name: "Street Black Coral", color: "#e81c24" },
      { name: "Street Black Purple", color: "#7c3aed" },
      { name: "Street Black White", color: "#f5f5f5" }
    ]
  },
  // ============================================================
  // PRODUK BARU - VARIO EVO 160 ABS
  // ============================================================
  {
    id: "vario-160-abs",
    name: "Vario 160 ABS",
    folder: "VARIO EVO 160 ABS",
    category: "Vario Series",
    otr_price: 32000000.0,
    images: [
      "VARIO EVO 160 ABS - Ultimate Glossy Purple.jpg",
      "VARIO EVO 160 ABS - Ultimate Matte Black.jpg",
      "VARIO EVO 160 ABS - Ultimate Matte Red.jpg",
      "VARIO EVO 160 ABS - Ultimate Matte White.jpg"
    ],
    installments: [
      { dp: 3200000, rates: { 11: 3413000, 17: 2427000, 23: 1927000, 29: 1652000, 35: 1447000 } },
      { dp: 4000000, rates: { 11: 3327000, 17: 2367000, 23: 1880000, 29: 1612000, 35: 1412000 } },
      { dp: 4800000, rates: { 11: 3241000, 17: 2306000, 23: 1832000, 29: 1571000, 35: 1377000 } },
      { dp: 6400000, rates: { 11: 3072000, 17: 2186000, 23: 1737000, 29: 1490000, 35: 1306000 } }
    ],
    variants: [
      { name: "Ultimate Glossy Purple", color: "#7c3aed" },
      { name: "Ultimate Matte Black", color: "#1f2937" },
      { name: "Ultimate Matte Red", color: "#dc2626" },
      { name: "Ultimate Matte White", color: "#f5f5f5" }
    ]
  },
  // ============================================================
  // PRODUK BARU - VARIO EVO 160 CBS NITRO
  // ============================================================
  {
    id: "vario-160-nitro",
    name: "Vario 160 CBS Nitro",
    folder: "VARIO EVO 160 CBS NITRO",
    category: "Vario Series",
    otr_price: 28850000.0,
    images: [
      "VARIO EVO 160 CBS NITRO - Nitro Glossy Grey Lime.jpg",
      "VARIO EVO 160 CBS NITRO - Nitro Matte Black Red.jpg"
    ],
    installments: [
      { dp: 2900000, rates: { 11: 3067000, 17: 2168000, 23: 1739000, 29: 1486000, 35: 1333000 } },
      { dp: 3700000, rates: { 11: 2981000, 17: 2108000, 23: 1690000, 29: 1445000, 35: 1296000 } },
      { dp: 4400000, rates: { 11: 2905000, 17: 2051000, 23: 1648000, 29: 1409000, 35: 1262000 } },
      { dp: 5800000, rates: { 11: 2753000, 17: 1948000, 23: 1564000, 29: 1335000, 35: 1196000 } }
    ],
    variants: [
      { name: "Nitro Glossy Grey Lime", color: "#84cc16" },
      { name: "Nitro Matte Black Red", color: "#dc2626" }
    ]
  }
];


// ============================================================
// FORMAT CURRENCY HELPER
// ============================================================
function formatCurrency(val) {
  return "Rp " + val.toLocaleString("id-ID").replace(/,/g, ".");
}

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  var menuToggle = document.getElementById("js-menu-toggle");
  var navMenu = document.getElementById("js-nav-menu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
    navMenu.querySelectorAll(".header__nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
      });
    });
  }

  // Active nav link on scroll
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".header__nav-link");
  function onScroll() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (sec) {
      var top = sec.offsetTop;
      var height = sec.offsetHeight;
      var id = sec.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (l) {
          l.classList.remove("active");
          if (l.getAttribute("href") === "#" + id) {
            l.classList.add("active");
          }
        });
      }
    });
    if (window.scrollY < 200) {
      navLinks.forEach(function (l) { l.classList.remove("active"); });
      navLinks[0].classList.add("active");
    }
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  // Render products
  renderProducts(PRODUCTS_DATA);

  // Filter scroll arrows
  var filtersContainer = document.getElementById("js-filters-container");
  var arrowLeft = document.getElementById("js-filters-arrow-left");
  var arrowRight = document.getElementById("js-filters-arrow-right");
  if (filtersContainer && arrowLeft && arrowRight) {
    function updateFilterArrows() {
      var sl = filtersContainer.scrollLeft;
      var maxScroll = filtersContainer.scrollWidth - filtersContainer.clientWidth;
      arrowLeft.disabled = sl <= 0;
      arrowRight.disabled = sl >= maxScroll - 1;
    }
    arrowLeft.addEventListener("click", function () {
      filtersContainer.scrollBy({ left: -200, behavior: "smooth" });
    });
    arrowRight.addEventListener("click", function () {
      filtersContainer.scrollBy({ left: 200, behavior: "smooth" });
    });
    filtersContainer.addEventListener("scroll", updateFilterArrows);
    updateFilterArrows();
    window.addEventListener("resize", updateFilterArrows);
  }

  // Filter buttons
  var filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var cat = btn.getAttribute("data-category");
      var searchVal = (document.getElementById("js-search-input").value || "").toLowerCase();
      var filtered = PRODUCTS_DATA.filter(function (p) {
        var matchCat = cat === "all" || p.category === cat;
        var matchSearch = !searchVal || p.name.toLowerCase().includes(searchVal);
        return matchCat && matchSearch;
      });
      renderProducts(filtered);
    });
  });

  // Search input
  var searchInput = document.getElementById("js-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var searchVal = searchInput.value.toLowerCase();
      var activeFilter = document.querySelector(".filter-btn.active");
      var cat = activeFilter ? activeFilter.getAttribute("data-category") : "all";
      var filtered = PRODUCTS_DATA.filter(function (p) {
        var matchCat = cat === "all" || p.category === cat;
        var matchSearch = !searchVal || p.name.toLowerCase().includes(searchVal);
        return matchCat && matchSearch;
      });
      renderProducts(filtered);
    });
  }

  // WhatsApp link
  var waLink = document.getElementById("js-whatsapp-link");
  if (waLink) {
    waLink.href = "https://" + WHATSAPP_NUMBER;
  }

  // Modal close
  var modalOverlay = document.getElementById("js-modal");
  var modalClose = document.getElementById("js-modal-close");
  if (modalClose) {
    modalClose.addEventListener("click", function () {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Payment toggle
  var toggleCash = document.getElementById("js-toggle-cash");
  var toggleCredit = document.getElementById("js-toggle-credit");
  var paymentToggle = document.getElementById("js-payment-toggle-container");
  var panelCash = document.getElementById("js-panel-cash");
  var panelCredit = document.getElementById("js-panel-credit");

  if (toggleCash && toggleCredit) {
    toggleCash.addEventListener("click", function () {
      toggleCash.classList.add("active");
      toggleCredit.classList.remove("active");
      paymentToggle.classList.remove("cicilan-active");
      panelCash.classList.add("active");
      panelCredit.classList.remove("active");
    });
    toggleCredit.addEventListener("click", function () {
      toggleCredit.classList.add("active");
      toggleCash.classList.remove("active");
      paymentToggle.classList.add("cicilan-active");
      panelCredit.classList.add("active");
      panelCash.classList.remove("active");
    });
  }
});

// ============================================================
// RENDER PRODUCTS
// ============================================================
function renderProducts(products) {
  var grid = document.getElementById("js-products-grid");
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = '<div class="empty-state">Tidak ada motor yang sesuai dengan pencarian Anda.</div>';
    return;
  }

  var html = "";
  products.forEach(function (p) {
    var imgPath = "Foto Produk/" + p.folder + "/" + p.images[0];
    var lowestInstallment = "";
    if (p.installments && p.installments.length > 0) {
      var lowestDP = p.installments[0];
      var tenor35 = lowestDP.rates["35"];
      if (tenor35) {
        lowestInstallment = "Cicilan mulai " + formatCurrency(tenor35) + "/bln (35x)";
      }
    }

    html += '<div class="product-card" data-id="' + p.id + '">';
    html += '  <div class="product-card__img-container">';
    html += '    <span class="product-card__tag">' + p.category + '</span>';
    html += '    <img src="' + imgPath + '" alt="' + p.name + '" class="product-card__img" loading="lazy" onerror="this.style.display=\'none\';">';
    html += '  </div>';
    html += '  <div class="product-card__content">';
    html += '    <h3 class="product-card__title">' + p.name + '</h3>';
    html += '    <div class="product-card__price-row">';
    html += '      <span class="product-card__price-cash">Harga Cash: ' + formatCurrency(p.otr_price) + '</span>';
    if (lowestInstallment) {
      html += '      <span class="product-card__price-installment">' + lowestInstallment + '</span>';
    }
    html += '    </div>';
    html += '    <button class="btn btn--primary product-card__btn" onclick="openProductModal(\'' + p.id + '\')">Lihat Detail & Pesan</button>';
    html += '  </div>';
    html += '</div>';
  });

  grid.innerHTML = html;
}

// ============================================================
// VARIABEL GLOBAL PRODUK AKTIF
// ============================================================
var currentProduct = null;

// ============================================================
// SET GAMBAR MODAL DENGAN FALLBACK
// ============================================================
function setModalMainImage(src) {
  var mainImg = document.getElementById("js-modal-main-img");
  if (!mainImg) return;
  var candidates = [];
  if (src) candidates.push(src);
  if (currentProduct) {
    var folder = "Foto Produk/" + currentProduct.folder + "/";
    currentProduct.images.forEach(function (img) {
      var path = folder + img;
      if (candidates.indexOf(path) === -1) candidates.push(path);
    });
  }
  var attempt = 0;
  mainImg.onerror = function () {
    attempt++;
    if (attempt < candidates.length) {
      mainImg.src = candidates[attempt];
    } else {
      mainImg.onerror = null;
    }
  };
  mainImg.src = candidates[0] || src;
}

// ============================================================
// OPEN PRODUCT MODAL
// ============================================================
function openProductModal(productId) {
  var product = PRODUCTS_DATA.find(function (p) { return p.id === productId; });
  if (!product) return;

  currentProduct = product;
  var modal = document.getElementById("js-modal");
  if (!modal) return;

  var elTitle = document.getElementById("js-modal-title");
  var elCategory = document.getElementById("js-modal-category");
  var elDesc = document.getElementById("js-modal-desc");
  if (elTitle) elTitle.textContent = product.name;
  if (elCategory) elCategory.textContent = product.category;
  if (elDesc) elDesc.textContent = getDesc(product.category);

  var mainImg = document.getElementById("js-modal-main-img");
  if (mainImg) {
    mainImg.alt = product.name;
    setModalMainImage("Foto Produk/" + product.folder + "/" + product.images[0]);
  }

  var thumbContainer = document.getElementById("js-modal-thumbnails");
  if (thumbContainer) {
    var thumbHtml = "";
    product.images.forEach(function (img, idx) {
      var thumbPath = "Foto Produk/" + product.folder + "/" + img;
      thumbHtml += '<button class="thumbnail-btn' + (idx === 0 ? ' active' : '') + '" onclick="changeModalImage(this, \'' + thumbPath + '\', \'' + img.replace(/'/g, "\\'") + '\')">';
      thumbHtml += '  <img src="' + thumbPath + '" alt="' + product.name + ' - ' + (idx + 1) + '" loading="lazy" onerror="this.parentElement.style.display=\'none\';">';
      thumbHtml += '</button>';
    });
    thumbContainer.innerHTML = thumbHtml;
  }

  var swatchContainer = document.getElementById("js-modal-swatches");
  var swatchName = document.getElementById("js-modal-active-variant-name");
  if (swatchContainer) {
    var swatchHtml = "";
    var firstMatchedIdx = -1;
    product.variants.forEach(function (v, idx) {
      var variantLower = v.name.toLowerCase();
      var hasImage = false;
      for (var i = 0; i < product.images.length; i++) {
        if (product.images[i].toLowerCase().indexOf(variantLower) !== -1) {
          hasImage = true;
          break;
        }
      }
      if (hasImage) {
        if (firstMatchedIdx === -1) firstMatchedIdx = idx;
        swatchHtml += '<button class="swatch-btn' + (firstMatchedIdx === idx ? ' active' : '') + '" style="background-color: ' + v.color + ';" title="' + v.name + '" onclick="selectSwatch(this, \'' + v.name + '\')"></button>';
      }
    });
    swatchContainer.innerHTML = swatchHtml;
    if (swatchName && firstMatchedIdx >= 0) {
      swatchName.textContent = product.variants[firstMatchedIdx].name;
    } else if (swatchName) {
      swatchName.textContent = product.variants[0].name;
    }
  }

  var cashPrice = document.getElementById("js-modal-cash-price");
  if (cashPrice) cashPrice.textContent = formatCurrency(product.otr_price);

  var dpSelect = document.getElementById("js-select-dp");
  if (dpSelect) {
    // Generate DP dari Rp 2.000.000 sampai Rp 15.000.000 dengan langkah Rp 500.000
    var dpHtml = "";
    var startDP = 2000000;
    var maxDP = 15000000;
    var stepDP = 500000;
    for (var dp = startDP; dp <= maxDP; dp += stepDP) {
      dpHtml += '<option value="' + dp + '">' + formatCurrency(dp) + '</option>';
    }
    dpSelect.innerHTML = dpHtml;
    dpSelect.onchange = function () { renderTenor(product, parseInt(dpSelect.value)); };
    renderTenor(product, startDP);
  }

  var toggleCash = document.getElementById("js-toggle-cash");
  var toggleCredit = document.getElementById("js-toggle-credit");
  var paymentToggle = document.getElementById("js-payment-toggle-container");
  var panelCash = document.getElementById("js-panel-cash");
  var panelCredit = document.getElementById("js-panel-credit");
  if (toggleCash) toggleCash.classList.add("active");
  if (toggleCredit) toggleCredit.classList.remove("active");
  if (paymentToggle) paymentToggle.classList.remove("cicilan-active");
  if (panelCash) panelCash.classList.add("active");
  if (panelCredit) panelCredit.classList.remove("active");

  var orderBtn = document.getElementById("js-order-btn");
  if (orderBtn) {
    var msg = encodeURIComponent(
      "Halo Darma Daya Motor, saya tertarik dengan *" + product.name + "* (Harga Cash: " + formatCurrency(product.otr_price) + "). Mohon info lebih lanjut. Terima kasih."
    );
    orderBtn.onclick = function () {
      window.open("https://" + WHATSAPP_NUMBER + "?text=" + msg, "_blank");
    };
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ============================================================
// CHANGE MODAL IMAGE
// ============================================================
function changeModalImage(btn, src, imgName) {
  var mainImg = document.getElementById("js-modal-main-img");
  if (mainImg) mainImg.src = src;
  var allThumbs = document.querySelectorAll(".thumbnail-btn");
  allThumbs.forEach(function (t) { t.classList.remove("active"); });
  btn.classList.add("active");

  // Sinkronisasi dengan swatch warna berdasarkan nama file gambar
  if (currentProduct && imgName) {
    var imgNameLower = imgName.toLowerCase();
    var matchedVariant = null;
    for (var i = 0; i < currentProduct.variants.length; i++) {
      var variantLower = currentProduct.variants[i].name.toLowerCase();
      if (imgNameLower.indexOf(variantLower) !== -1) {
        matchedVariant = currentProduct.variants[i];
        break;
      }
    }
    if (matchedVariant) {
      var allSwatches = document.querySelectorAll(".swatch-btn");
      allSwatches.forEach(function (s) {
        if (s.title === matchedVariant.name) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });
      var nameEl = document.getElementById("js-modal-active-variant-name");
      if (nameEl) nameEl.textContent = matchedVariant.name;
    }
  }
}

// ============================================================
// SELECT SWATCH
// ============================================================
function selectSwatch(btn, name) {
  var allSwatches = document.querySelectorAll(".swatch-btn");
  allSwatches.forEach(function (s) { s.classList.remove("active"); });
  btn.classList.add("active");
  var nameEl = document.getElementById("js-modal-active-variant-name");
  if (nameEl) nameEl.textContent = name;

  if (currentProduct) {
    var mainImg = document.getElementById("js-modal-main-img");
    var folder = "Foto Produk/" + currentProduct.folder + "/";
    var found = false;
    var matchedIdx = -1;
    var variantLower = name.toLowerCase();
    for (var i = 0; i < currentProduct.images.length; i++) {
      if (currentProduct.images[i].toLowerCase().indexOf(variantLower) !== -1) {
        if (mainImg) mainImg.src = folder + currentProduct.images[i];
        matchedIdx = i;
        found = true;
        break;
      }
    }
    if (!found) {
      var fileName = currentProduct.folder + " - " + name + ".jpg";
      if (mainImg) mainImg.src = folder + fileName;
    }
    // Sinkronisasi thumbnail dengan swatch
    var allThumbs = document.querySelectorAll(".thumbnail-btn");
    allThumbs.forEach(function (t, idx) { t.classList.remove("active"); });
    if (matchedIdx >= 0 && matchedIdx < allThumbs.length) {
      allThumbs[matchedIdx].classList.add("active");
    }
  }
}

// ============================================================
// RENDER TENOR GRID (DINAMIS - INTERPOLASI)
// ============================================================
function renderTenor(product, dpValue) {
  var installments = product.installments;
  if (!installments || installments.length === 0) return;

  var tenorGrid = document.getElementById("js-tenor-grid");
  var rateDisplay = document.getElementById("js-modal-installment-rate");
  var summaryDisplay = document.getElementById("js-modal-installment-summary");
  var tenors = [11, 17, 23, 29, 35];

  // Interpolasi rates berdasarkan DP yang dipilih
  function interpolateRates(selectedDP) {
    var sorted = installments.slice().sort(function (a, b) { return a.dp - b.dp; });
    // DP di bawah minimum -> pakai data terendah
    if (selectedDP <= sorted[0].dp) return sorted[0].rates;
    // DP di atas maksimum -> extrapolate dari dua data tertinggi
    if (selectedDP >= sorted[sorted.length - 1].dp) {
      var last = sorted[sorted.length - 1];
      var secondLast = sorted[sorted.length - 2];
      var result = {};
      tenors.forEach(function (t) {
        var slope = (last.rates[t] - secondLast.rates[t]) / (last.dp - secondLast.dp);
        result[t] = Math.round(last.rates[t] + slope * (selectedDP - last.dp));
      });
      return result;
    }
    // Cari dua data yang mengapit selectedDP
    for (var i = 0; i < sorted.length - 1; i++) {
      if (selectedDP >= sorted[i].dp && selectedDP <= sorted[i + 1].dp) {
        var result = {};
        var ratio = (selectedDP - sorted[i].dp) / (sorted[i + 1].dp - sorted[i].dp);
        tenors.forEach(function (t) {
          result[t] = Math.round(sorted[i].rates[t] + ratio * (sorted[i + 1].rates[t] - sorted[i].rates[t]));
        });
        return result;
      }
    }
    return sorted[0].rates;
  }

  var rates = interpolateRates(dpValue);

  if (tenorGrid) {
    var html = "";
    tenors.forEach(function (t, idx) {
      var rate = rates[t] || 0;
      html += '<button class="tenor-btn' + (idx === tenors.length - 1 ? ' active' : '') + '" data-tenor="' + t + '" data-rate="' + rate + '" onclick="selectTenor(this, ' + dpValue + ')">';
      html += '  <div>' + t + 'x</div>';
      html += '  <div style="font-size:10px;font-weight:400;margin-top:2px;color:var(--text-muted);">' + formatCurrency(rate) + '</div>';
      html += '</button>';
    });
    tenorGrid.innerHTML = html;

    var lastTenor = tenors[tenors.length - 1];
    var lastRate = rates[lastTenor] || 0;
    if (rateDisplay) rateDisplay.textContent = formatCurrency(lastRate);
    if (summaryDisplay) summaryDisplay.textContent = "Tenor " + lastTenor + " Bulan | Uang Muka " + formatCurrency(dpValue);
  }
}

// ============================================================
// SELECT TENOR
// ============================================================
function selectTenor(btn, dpValue) {
  var allBtns = document.querySelectorAll(".tenor-btn");
  allBtns.forEach(function (b) { b.classList.remove("active"); });
  btn.classList.add("active");

  var rate = parseInt(btn.getAttribute("data-rate"));
  var tenor = btn.getAttribute("data-tenor");
  var rateDisplay = document.getElementById("js-modal-installment-rate");
  var summaryDisplay = document.getElementById("js-modal-installment-summary");

  if (rateDisplay) rateDisplay.textContent = formatCurrency(rate);
  if (summaryDisplay) summaryDisplay.textContent = "Tenor " + tenor + " Bulan | Uang Muka " + formatCurrency(dpValue);
}

// ============================================================
// GET DESCRIPTION BY CATEGORY
// ============================================================
function getDesc(category) {
  var descs = {
    "Beat Series": "Sepeda motor matic handal dengan konsumsi bahan bakar yang sangat hemat, dibekali teknologi rangka eSAF terbaru untuk kenyamanan manuver yang maksimal.",
    "Genio Series": "Skutik trendi bergaya retro-modern dengan mesin eSP 110cc irit dan fitur lengkap untuk mobilitas harian yang menyenangkan.",
    "Scoopy Series": "Motor matic bergaya retro unik dengan desain body stylish, lampu LED, dan konektivitas Honda RoadSync untuk pengalaman berkendara modern.",
    "Vario Series": "Motor matic sporty bertenaga dengan mesin 125cc/160cc, fitur keselamatan lengkap, dan tampilan agresif untuk jalanan perkotaan.",
    "Stylo Series": "Skutik premium klasik-modern dengan mesin 160cc eSAF, fitur Honda RoadSync, dan desain elegan yang memikat.",
    "PCX Series": "Maxi skutik premium dengan desain mewah, ruang penyimpanan luas, mesin 160cc bertenaga, dan fitur keselamatan lengkap untuk kenyamanan maksimal.",
    "ADV Series": "Motor petualang dengan desain adventure, mesin 160cc bertenaga, suspensi yang dapat disesuaikan, dan ground clearance tinggi untuk segala medan.",
    "Sport Series": "Motor sport performa tinggi dengan mesin DOHC, rangka tralis, dan fitur racing untuk pengalaman berkendara yang ekstrem.",
    "Bebek Series": "Motor bebek irit dan bandel untuk mobilitas sehari-hari, mesin handal dengan perawatan mudah dan harga terjangkau.",
    "Premium Series": "Skutik premium berkapasitas besar dengan fitur keselamatan canggih, performa tinggi, dan kenyamanan kelas dunia."
  };
  return descs[category] || "Motor Honda berkualitas tinggi dengan teknologi terkini, harga kompetitif, dan jaminan garansi resmi dari Astra Honda Motor.";
}
