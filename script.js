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
      { dp: 2000000, rates: { 11: 2117000, 17: 1500000, 23: 1199000, 29: 1032000, 35: 927000, 41: 850000, 47: 795000, 53: 753000, 59: 722000 } },
      { dp: 2500000, rates: { 11: 2065000, 17: 1463000, 23: 1169000, 29: 1006000, 35: 905000, 41: 829000, 47: 775000, 53: 735000, 59: 704000 } },
      { dp: 3000000, rates: { 11: 2003000, 17: 1420000, 23: 1132000, 29: 976000, 35: 880000, 41: 806000, 47: 753000, 53: 714000, 59: 684000 } },
      { dp: 4000000, rates: { 11: 1898000, 17: 1345000, 23: 1074000, 29: 924000, 35: 834000, 41: 764000, 47: 714000, 53: 677000, 59: 648000 } }
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
    otr_price: 20775000.0,
    images: [
      "BEAT CBS ISS - Infinite Glossy Red Blue.jpg",
      "BEAT CBS ISS - Infinite Matte Black.jpg"
    ],
    installments: [
      { dp: 2100000, rates: { 11: 2224000, 17: 1575000, 23: 1259000, 29: 1083000, 35: 973000, 41: 892000, 47: 834000, 53: 790000, 59: 757000 } },
      { dp: 2600000, rates: { 11: 2171000, 17: 1538000, 23: 1229000, 29: 1057000, 35: 951000, 41: 871000, 47: 814000, 53: 772000, 59: 740000 } },
      { dp: 3200000, rates: { 11: 2098000, 17: 1487000, 23: 1187000, 29: 1022000, 35: 922000, 41: 845000, 47: 790000, 53: 749000, 59: 717000 } },
      { dp: 4200000, rates: { 11: 1994000, 17: 1413000, 23: 1127000, 29: 971000, 35: 875000, 41: 802000, 47: 749000, 53: 710000, 59: 680000 } }
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
      { dp: 2200000, rates: { 11: 2278000, 17: 1613000, 23: 1289000, 29: 1109000, 35: 997000, 41: 914000, 47: 855000, 53: 810000, 59: 776000 } },
      { dp: 2700000, rates: { 11: 2224000, 17: 1576000, 23: 1259000, 29: 1083000, 35: 975000, 41: 894000, 47: 835000, 53: 792000, 59: 759000 } },
      { dp: 3300000, rates: { 11: 2150000, 17: 1525000, 23: 1216000, 29: 1046000, 35: 945000, 41: 866000, 47: 809000, 53: 767000, 59: 735000 } },
      { dp: 4300000, rates: { 11: 2046000, 17: 1450000, 23: 1156000, 29: 995000, 35: 899000, 41: 824000, 47: 770000, 53: 730000, 59: 699000 } }
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
      { dp: 2100000, rates: { 11: 2239000, 17: 1585000, 23: 1267000, 29: 1090000, 35: 980000, 41: 898000, 47: 840000, 53: 796000, 59: 763000 } },
      { dp: 2700000, rates: { 11: 2174000, 17: 1540000, 23: 1230000, 29: 1059000, 35: 953000, 41: 873000, 47: 816000, 53: 774000, 59: 742000 } },
      { dp: 3200000, rates: { 11: 2111000, 17: 1497000, 23: 1194000, 29: 1027000, 35: 927000, 41: 850000, 47: 794000, 53: 753000, 59: 721000 } },
      { dp: 4200000, rates: { 11: 2006000, 17: 1423000, 23: 1134000, 29: 976000, 35: 882000, 41: 808000, 47: 755000, 53: 716000, 59: 686000 } }
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
      "GENIO CBS - Vibrant Black.jpg"
    ],
    installments: [
      { dp: 2200000, rates: { 11: 2260000, 17: 1601000, 23: 1280000, 29: 1102000, 35: 978000, 41: 895000, 47: 835000, 53: 791000, 59: 757000 } },
      { dp: 2700000, rates: { 11: 2200000, 17: 1559000, 23: 1243000, 29: 1070000, 35: 954000, 41: 873000, 47: 815000, 53: 771000, 59: 738000 } },
      { dp: 3200000, rates: { 11: 2146000, 17: 1520000, 23: 1213000, 29: 1046000, 35: 931000, 41: 852000, 47: 795000, 53: 752000, 59: 720000 } },
      { dp: 4300000, rates: { 11: 2029000, 17: 1436000, 23: 1146000, 29: 988000, 35: 880000, 41: 806000, 47: 752000, 53: 711000, 59: 681000 } }
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
      "GENIO CBS ISS - Fabulous Matte Black.jpg",
      "GENIO CBS ISS - Fabulous Matte Brown.jpg",
      "GENIO CBS ISS - Fabulous Matte Green.jpg"
    ],
    installments: [
      { dp: 2200000, rates: { 11: 2308000, 17: 1635000, 23: 1307000, 29: 1125000, 35: 998000, 41: 913000, 47: 852000, 53: 807000, 59: 772000 } },
      { dp: 2800000, rates: { 11: 2235000, 17: 1584000, 23: 1264000, 29: 1088000, 35: 971000, 41: 889000, 47: 829000, 53: 785000, 59: 751000 } },
      { dp: 3300000, rates: { 11: 2182000, 17: 1547000, 23: 1235000, 29: 1063000, 35: 947000, 41: 867000, 47: 809000, 53: 766000, 59: 733000 } },
      { dp: 4400000, rates: { 11: 2066000, 17: 1461000, 23: 1165000, 29: 1006000, 35: 896000, 41: 820000, 47: 765000, 53: 724000, 59: 693000 } }
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
    otr_price: 24825000.0,
    images: [
      "SCOOPY PRESTIGE - Prestige Black.jpg",
      "SCOOPY PRESTIGE - Prestige Red.jpg",
      "SCOOPY PRESTIGE - Prestige White.jpg"
    ],
    installments: [
      { dp: 2500000, rates: { 11: 2624000, 17: 1852000, 23: 1481000, 29: 1265000, 35: 1133000, 41: 1037000, 47: 967000, 53: 915000, 59: 875000 } },
      { dp: 3200000, rates: { 11: 2549000, 17: 1800000, 23: 1438000, 29: 1229000, 35: 1102000, 41: 1008000, 47: 940000, 53: 890000, 59: 851000 } },
      { dp: 3800000, rates: { 11: 2485000, 17: 1755000, 23: 1402000, 29: 1199000, 35: 1075000, 41: 983000, 47: 917000, 53: 868000, 59: 830000 } },
      { dp: 5000000, rates: { 11: 2358000, 17: 1665000, 23: 1331000, 29: 1138000, 35: 1019000, 41: 933000, 47: 870000, 53: 823000, 59: 787000 } }
    ],
    variants: [
      { name: "Prestige Black", color: "#1f2937" },
      { name: "Prestige Red", color: "#991b1b" },
      { name: "Prestige White", color: "#f5f5f5" }
    ]
  },
  {
    id: "scoopy-stylish",
    name: "Scoopy Stylish",
    folder: "SCOOPY STYLISH",
    category: "Scoopy Series",
    otr_price: 24825000.0,
    images: [
      "SCOOPY STYLISH - Stylish Bege.jpg",
      "SCOOPY STYLISH - Stylish Green.jpg",
      "SCOOPY STYLISH - Stylish Grey.jpg"
    ],
    installments: [
      { dp: 2500000, rates: { 11: 2624000, 17: 1852000, 23: 1481000, 29: 1265000, 35: 1133000, 41: 1037000, 47: 967000, 53: 915000, 59: 875000 } },
      { dp: 3200000, rates: { 11: 2549000, 17: 1800000, 23: 1438000, 29: 1229000, 35: 1102000, 41: 1008000, 47: 940000, 53: 890000, 59: 851000 } },
      { dp: 3800000, rates: { 11: 2485000, 17: 1755000, 23: 1402000, 29: 1199000, 35: 1075000, 41: 983000, 47: 917000, 53: 868000, 59: 830000 } },
      { dp: 5000000, rates: { 11: 2358000, 17: 1665000, 23: 1331000, 29: 1138000, 35: 1019000, 41: 933000, 47: 870000, 53: 823000, 59: 787000 } }
    ],
    variants: [
      { name: "Stylish Bege", color: "#d4a574" },
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
      { dp: 2600000, rates: { 11: 2678000, 17: 1893000, 23: 1520000, 29: 1299000, 35: 1150000, 41: 1053000, 47: 982000, 53: 930000, 59: 890000 } },
      { dp: 3200000, rates: { 11: 2614000, 17: 1848000, 23: 1482000, 29: 1267000, 35: 1122000, 41: 1027000, 47: 958000, 53: 907000, 59: 868000 } },
      { dp: 3800000, rates: { 11: 2551000, 17: 1801000, 23: 1446000, 29: 1235000, 35: 1096000, 41: 1003000, 47: 936000, 53: 886000, 59: 847000 } },
      { dp: 5100000, rates: { 11: 2410000, 17: 1702000, 23: 1367000, 29: 1169000, 35: 1036000, 41: 948000, 47: 884000, 53: 837000, 59: 801000 } }
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
      { dp: 2800000, rates: { 11: 2873000, 17: 2030000, 23: 1628000, 29: 1393000, 35: 1233000, 41: 1129000, 47: 1053000, 53: 997000, 59: 954000 } },
      { dp: 3400000, rates: { 11: 2806000, 17: 1985000, 23: 1592000, 29: 1361000, 35: 1203000, 41: 1101000, 47: 1028000, 53: 973000, 59: 931000 } },
      { dp: 4100000, rates: { 11: 2732000, 17: 1933000, 23: 1549000, 29: 1324000, 35: 1173000, 41: 1074000, 47: 1002000, 53: 949000, 59: 908000 } },
      { dp: 5500000, rates: { 11: 2580000, 17: 1824000, 23: 1463000, 29: 1252000, 35: 1108000, 41: 1014000, 47: 947000, 53: 896000, 59: 857000 } }
    ],
    variants: [
      { name: "Advance Blue", color: "#1e40af" },
      { name: "Advance Matte Black", color: "#1f2937" },
      { name: "Advance Matte Red", color: "#dc2626" }
    ]
  },
  {
    id: "vario-160",
    name: "Vario 160 CBS",
    folder: "VARIO EVO 160 CBS",
    category: "Vario Series",
    otr_price: 28650000.0,
    images: [
      "VARIO EVO 160 CBS - Glossy Blue Lime.jpg",
      "VARIO EVO 160 CBS - Glossy White Red.jpg"
    ],
    installments: [
      { dp: 2900000, rates: { 11: 3044000, 17: 2153000, 23: 1726000, 29: 1475000, 35: 1323000, 41: 1213000, 47: 1134000, 53: 1075000, 59: 1031000 } },
      { dp: 3600000, rates: { 11: 2969000, 17: 2100000, 23: 1684000, 29: 1439000, 35: 1291000, 41: 1184000, 47: 1107000, 53: 1050000, 59: 1006000 } },
      { dp: 4300000, rates: { 11: 2893000, 17: 2043000, 23: 1641000, 29: 1403000, 35: 1257000, 41: 1152000, 47: 1077000, 53: 1021000, 59: 978000 } },
      { dp: 5800000, rates: { 11: 2731000, 17: 1933000, 23: 1551000, 29: 1324000, 35: 1186000, 41: 1088000, 47: 1017000, 53: 964000, 59: 923000 } }
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
      "STYLO 160 CBS - CBS Glam Bege.jpg",
      "STYLO 160 CBS - CBS Glam Black.jpg",
      "STYLO 160 CBS - CBS Glam White.jpg"
    ],
    installments: [
      { dp: 3100000, rates: { 11: 3186000, 17: 2252000, 23: 1806000, 29: 1544000, 35: 1368000, 41: 1252000, 47: 1169000, 53: 1107000, 59: 1059000 } },
      { dp: 3800000, rates: { 11: 3111000, 17: 2200000, 23: 1764000, 29: 1508000, 35: 1336000, 41: 1223000, 47: 1142000, 53: 1081000, 59: 1035000 } },
      { dp: 4600000, rates: { 11: 3024000, 17: 2135000, 23: 1715000, 29: 1467000, 35: 1297000, 41: 1188000, 47: 1109000, 53: 1050000, 59: 1004000 } },
      { dp: 6100000, rates: { 11: 2862000, 17: 2025000, 23: 1625000, 29: 1387000, 35: 1228000, 41: 1124000, 47: 1049000, 53: 993000, 59: 950000 } }
    ],
    variants: [
      { name: "CBS Glam Bege", color: "#d4a574" },
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
      "STYLO 160 ABS - ABS Royal Brown.jpg",
      "STYLO 160 ABS - ABS Royal Matte Blue.jpg",
      "STYLO 160 ABS - ABS Royal Matte Green.jpg"
    ],
    installments: [
      { dp: 3400000, rates: { 11: 3488000, 17: 2466000, 23: 1977000, 29: 1690000, 35: 1497000, 41: 1371000, 47: 1280000, 53: 1212000, 59: 1160000 } },
      { dp: 4200000, rates: { 11: 3402000, 17: 2406000, 23: 1929000, 29: 1649000, 35: 1461000, 41: 1338000, 47: 1249000, 53: 1183000, 59: 1132000 } },
      { dp: 5000000, rates: { 11: 3315000, 17: 2341000, 23: 1880000, 29: 1608000, 35: 1422000, 41: 1302000, 47: 1215000, 53: 1150000, 59: 1101000 } },
      { dp: 6700000, rates: { 11: 3131000, 17: 2216000, 23: 1778000, 29: 1518000, 35: 1343000, 41: 1230000, 47: 1148000, 53: 1087000, 59: 1040000 } }
    ],
    variants: [
      { name: "ABS Royal Brown", color: "#92400e" },
      { name: "ABS Royal Matte Blue", color: "#1e40af" },
      { name: "ABS Royal Matte Green", color: "#166534" }
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
      { dp: 3500000, rates: { 11: 3676000, 17: 2599000, 23: 2084000, 29: 1781000, 35: 1578000, 41: 1445000, 47: 1349000, 53: 1277000, 59: 1222000 } },
      { dp: 4400000, rates: { 11: 3580000, 17: 2532000, 23: 2030000, 29: 1735000, 35: 1537000, 41: 1408000, 47: 1314000, 53: 1244000, 59: 1191000 } },
      { dp: 5300000, rates: { 11: 3482000, 17: 2459000, 23: 1975000, 29: 1689000, 35: 1494000, 41: 1367000, 47: 1276000, 53: 1208000, 59: 1156000 } },
      { dp: 7000000, rates: { 11: 3298000, 17: 2334000, 23: 1873000, 29: 1599000, 35: 1415000, 41: 1295000, 47: 1209000, 53: 1144000, 59: 1095000 } }
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
      { dp: 3500000, rates: { 11: 3567000, 17: 2519000, 23: 2015000, 29: 1723000, 35: 1542000, 41: 1410000, 47: 1315000, 53: 1243000, 59: 1189000 } },
      { dp: 4400000, rates: { 11: 3470000, 17: 2452000, 23: 1961000, 29: 1678000, 35: 1502000, 41: 1374000, 47: 1281000, 53: 1212000, 59: 1158000 } },
      { dp: 5200000, rates: { 11: 3385000, 17: 2391000, 23: 1913000, 29: 1637000, 35: 1466000, 41: 1340000, 47: 1250000, 53: 1182000, 59: 1130000 } },
      { dp: 6900000, rates: { 11: 3206000, 17: 2264000, 23: 1813000, 29: 1550000, 35: 1389000, 41: 1270000, 47: 1184000, 53: 1120000, 59: 1071000 } }
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
      "PCX 160 ABS - Phenomenal Blue.jpg",
      "PCX 160 ABS - Phenomenal Green.jpg",
      "PCX 160 ABS - Phenomenal Matte Black.jpg",
      "PCX 160 ABS - Phenomenal White.jpg"
    ],
    installments: [
      { dp: 3800000, rates: { 11: 3915000, 17: 2765000, 23: 2213000, 29: 1894000, 35: 1694000, 41: 1549000, 47: 1444000, 53: 1365000, 59: 1305000 } },
      { dp: 4800000, rates: { 11: 3809000, 17: 2691000, 23: 2154000, 29: 1843000, 35: 1650000, 41: 1508000, 47: 1406000, 53: 1330000, 59: 1271000 } },
      { dp: 5700000, rates: { 11: 3713000, 17: 2623000, 23: 2100000, 29: 1797000, 35: 1609000, 41: 1471000, 47: 1371000, 53: 1296000, 59: 1239000 } },
      { dp: 7600000, rates: { 11: 3514000, 17: 2483000, 23: 1988000, 29: 1701000, 35: 1522000, 41: 1392000, 47: 1297000, 53: 1227000, 59: 1173000 } }
    ],
    variants: [
      { name: "Phenomenal Blue", color: "#1e40af" },
      { name: "Phenomenal Green", color: "#166534" },
      { name: "Phenomenal Matte Black", color: "#1f2937" },
      { name: "Phenomenal White", color: "#f5f5f5" }
    ]
  },
  {
    id: "adv-160-cbs",
    name: "ADV 160 CBS",
    folder: "ADV 160 CBS",
    category: "ADV Series",
    otr_price: 37500000.0,
    images: [
      "ADV 160 CBS - Solid  Matte Red.jpg",
      "ADV 160 CBS - Solid Black.jpg",
      "ADV 160 CBS - Solid White.jpg"
    ],
    installments: [
      { dp: 3800000, rates: { 11: 3861000, 17: 2727000, 23: 2183000, 29: 1867000, 35: 1651000, 41: 1506000, 47: 1402000, 53: 1324000, 59: 1264000 } },
      { dp: 4700000, rates: { 11: 3766000, 17: 2660000, 23: 2129000, 29: 1821000, 35: 1611000, 41: 1471000, 47: 1369000, 53: 1293000, 59: 1234000 } },
      { dp: 5700000, rates: { 11: 3660000, 17: 2586000, 23: 2070000, 29: 1771000, 35: 1567000, 41: 1430000, 47: 1331000, 53: 1257000, 59: 1200000 } },
      { dp: 7500000, rates: { 11: 3471000, 17: 2452000, 23: 1963000, 29: 1679000, 35: 1486000, 41: 1356000, 47: 1262000, 53: 1192000, 59: 1138000 } }
    ],
    variants: [
      { name: "Solid  Matte Red", color: "#888888" },
      { name: "Solid Black", color: "#1f2937" },
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
      { dp: 4100000, rates: { 11: 4161000, 17: 2940000, 23: 2351000, 29: 2013000, 35: 1780000, 41: 1624000, 47: 1512000, 53: 1427000, 59: 1363000 } },
      { dp: 5100000, rates: { 11: 4055000, 17: 2865000, 23: 2292000, 29: 1963000, 35: 1736000, 41: 1584000, 47: 1475000, 53: 1393000, 59: 1329000 } },
      { dp: 6100000, rates: { 11: 3950000, 17: 2791000, 23: 2233000, 29: 1912000, 35: 1691000, 41: 1544000, 47: 1437000, 53: 1357000, 59: 1295000 } },
      { dp: 8200000, rates: { 11: 3729000, 17: 2635000, 23: 2109000, 29: 1806000, 35: 1597000, 41: 1458000, 47: 1357000, 53: 1281000, 59: 1223000 } }
    ],
    variants: [
      { name: "Tough Matte Black", color: "#1f2937" },
      { name: "Tough Matte Brown", color: "#92400e" },
      { name: "Tough Matte Green", color: "#166534" }
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
      { dp: 2600000, rates: { 11: 2657000, 17: 1875000, 23: 1497000, 29: 1279000, 35: 1131000, 41: 1032000, 47: 961000, 53: 907000, 59: 866000 } },
      { dp: 3200000, rates: { 11: 2593000, 17: 1829000, 23: 1462000, 29: 1249000, 35: 1103000, 41: 1007000, 47: 937000, 53: 885000, 59: 845000 } },
      { dp: 3800000, rates: { 11: 2529000, 17: 1784000, 23: 1425000, 29: 1218000, 35: 1078000, 41: 984000, 47: 916000, 53: 865000, 59: 826000 } },
      { dp: 5100000, rates: { 11: 2392000, 17: 1688000, 23: 1349000, 29: 1152000, 35: 1019000, 41: 930000, 47: 866000, 53: 818000, 59: 781000 } }
    ],
    variants: [
      { name: "Bold Red", color: "#dc2626" },
      { name: "Macho Matte Black", color: "#1f2937" }
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
      { dp: 3500000, rates: { 11: 3627000, 17: 2549000, 23: 2020000, 29: 1730000, 35: 1493000, 41: 1359000, 47: 1263000, 53: 1190000, 59: 1134000 } },
      { dp: 4300000, rates: { 11: 3541000, 17: 2489000, 23: 1973000, 29: 1689000, 35: 1457000, 41: 1327000, 47: 1232000, 53: 1161000, 59: 1107000 } },
      { dp: 5200000, rates: { 11: 3445000, 17: 2422000, 23: 1919000, 29: 1643000, 35: 1418000, 41: 1291000, 47: 1199000, 53: 1130000, 59: 1077000 } },
      { dp: 6900000, rates: { 11: 3264000, 17: 2294000, 23: 1818000, 29: 1556000, 35: 1343000, 41: 1223000, 47: 1135000, 53: 1070000, 59: 1020000 } }
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
      "CRF 150L - Extreme White.jpg"
    ],
    installments: [
      { dp: 3900000, rates: { 11: 3962000, 17: 2797000, 23: 2237000, 29: 1912000, 35: 1690000, 41: 1541000, 47: 1434000, 53: 1353000, 59: 1292000 } },
      { dp: 4900000, rates: { 11: 3857000, 17: 2723000, 23: 2178000, 29: 1861000, 35: 1645000, 41: 1500000, 47: 1396000, 53: 1317000, 59: 1257000 } },
      { dp: 5800000, rates: { 11: 3762000, 17: 2655000, 23: 2124000, 29: 1816000, 35: 1605000, 41: 1464000, 47: 1362000, 53: 1285000, 59: 1227000 } },
      { dp: 7800000, rates: { 11: 3552000, 17: 2507000, 23: 2007000, 29: 1716000, 35: 1516000, 41: 1383000, 47: 1286000, 53: 1214000, 59: 1158000 } }
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
    otr_price: 42925000.0,
    images: [
      "CBR 150 R ABS - Honda Tricker (ABS).jpg",
      "CBR 150 R ABS - Victory Matte Black (ABS).jpg"
    ],
    installments: [
      { dp: 4300000, rates: { 11: 4475000, 17: 3139000, 23: 2512000, 29: 2149000, 35: 1891000, 41: 1727000, 47: 1609000, 53: 1520000, 59: 1451000 } },
      { dp: 5400000, rates: { 11: 4359000, 17: 3058000, 23: 2443000, 29: 2090000, 35: 1842000, 41: 1682000, 47: 1566000, 53: 1479000, 59: 1413000 } },
      { dp: 6500000, rates: { 11: 4241000, 17: 2975000, 23: 2379000, 29: 2034000, 35: 1791000, 41: 1636000, 47: 1523000, 53: 1439000, 59: 1374000 } },
      { dp: 8600000, rates: { 11: 4017000, 17: 2817000, 23: 2254000, 29: 1930000, 35: 1698000, 41: 1550000, 47: 1444000, 53: 1364000, 59: 1303000 } }
    ],
    variants: [
      { name: "Honda Tricker (ABS)", color: "#2563eb" },
      { name: "Victory Matte Black (ABS)", color: "#1f2937" }
    ]
  },
  {
    id: "supra-x",
    name: "Supra X 125 CW",
    folder: "SUPRA X CW TYPE",
    category: "Bebek Series",
    otr_price: 22650000.0,
    images: [
      "SUPRA X CW TYPE - New Energetic Red.jpg",
      "SUPRA X CW TYPE - New Golden Matte Black.jpg"
    ],
    installments: [
      { dp: 2300000, rates: { 11: 2402000, 17: 1693000, 23: 1353000, 29: 1156000, 35: 1021000, 41: 932000, 47: 868000, 53: 819000, 59: 782000 } },
      { dp: 2900000, rates: { 11: 2339000, 17: 1649000, 23: 1318000, 29: 1126000, 35: 994000, 41: 908000, 47: 845000, 53: 798000, 59: 762000 } },
      { dp: 3400000, rates: { 11: 2286000, 17: 1612000, 23: 1287000, 29: 1100000, 35: 972000, 41: 887000, 47: 826000, 53: 780000, 59: 745000 } },
      { dp: 4600000, rates: { 11: 2158000, 17: 1522000, 23: 1217000, 29: 1041000, 35: 919000, 41: 839000, 47: 781000, 53: 738000, 59: 704000 } }
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
    otr_price: 18300000.0,
    images: [
      "REVO FIT - Galaxy Blue.jpg",
      "REVO FIT - Raving Red.jpg"
    ],
    installments: [
      { dp: 1900000, rates: { 11: 1974000, 17: 1391000, 23: 1111000, 29: 948000, 35: 837000, 41: 765000, 47: 712000, 53: 673000, 59: 643000 } },
      { dp: 2300000, rates: { 11: 1931000, 17: 1360000, 23: 1088000, 29: 928000, 35: 820000, 41: 748000, 47: 697000, 53: 659000, 59: 629000 } },
      { dp: 2800000, rates: { 11: 1878000, 17: 1323000, 23: 1057000, 29: 902000, 35: 797000, 41: 727000, 47: 677000, 53: 640000, 59: 611000 } },
      { dp: 3700000, rates: { 11: 1782000, 17: 1255000, 23: 1003000, 29: 856000, 35: 756000, 41: 691000, 47: 643000, 53: 608000, 59: 580000 } }
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
      "FORZA - Candy Rossy Red.jpg",
      "FORZA - Pearl Jublee White.jpg",
      "FORZA - Pearl Shinning Black.jpg",
      "FORZA - Pearl Smoky Gray.jpg"
    ],
    installments: [
      { dp: 9800000, rates: { 11: 9863000, 17: 6832000, 23: 5396000, 29: 4610000, 35: 4075000, 41: 3704000, 47: 3435000, 53: 3232000, 59: 3076000 } },
      { dp: 10800000, rates: { 11: 9758000, 17: 6759000, 23: 5339000, 29: 4561000, 35: 4032000, 41: 3665000, 47: 3398000, 53: 3198000, 59: 3043000 } },
      { dp: 11800000, rates: { 11: 9654000, 17: 6687000, 23: 5282000, 29: 4512000, 35: 3988000, 41: 3626000, 47: 3362000, 53: 3164000, 59: 3011000 } },
      { dp: 12800000, rates: { 11: 9549000, 17: 6614000, 23: 5224000, 29: 4464000, 35: 3945000, 41: 3586000, 47: 3326000, 53: 3129000, 59: 2978000 } }
    ],
    variants: [
      { name: "Candy Rossy Red", color: "#dc2626" },
      { name: "Pearl Jublee White", color: "#f5f5f5" },
      { name: "Pearl Shinning Black", color: "#1f2937" },
      { name: "Pearl Smoky Gray", color: "#6b7280" }
    ]
  },
  {
    id: "adv-160-rs",
    name: "ADV 160 Roadsync",
    folder: "ADV 160 ROADSYNC",
    category: "ADV Series",
    otr_price: 42150000.0,
    images: [
      "ADV 160 ROADSYNC - SUV Brown.jpg"
    ],
    installments: [
      { dp: 4300000, rates: { 11: 4316000, 17: 3049000, 23: 2439000, 29: 2088000, 35: 1846000, 41: 1685000, 47: 1568000, 53: 1481000, 59: 1413000 } },
      { dp: 5300000, rates: { 11: 4210000, 17: 2974000, 23: 2380000, 29: 2038000, 35: 1802000, 41: 1645000, 47: 1531000, 53: 1446000, 59: 1380000 } },
      { dp: 6400000, rates: { 11: 4094000, 17: 2893000, 23: 2314000, 29: 1982000, 35: 1753000, 41: 1600000, 47: 1489000, 53: 1406000, 59: 1343000 } },
      { dp: 8500000, rates: { 11: 3874000, 17: 2737000, 23: 2191000, 29: 1876000, 35: 1659000, 41: 1514000, 47: 1409000, 53: 1331000, 59: 1271000 } }
    ],
    variants: [
      { name: "SUV Brown", color: "#92400e" }
    ]
  },
  {
    id: "cb150r-se",
    name: "All New CB150R Streetfire SE",
    folder: "CB 150 R SPECIAL EDITION",
    category: "Sport Series",
    otr_price: 35400000.0,
    images: [
      "CB 150 R SPECIAL EDITION - New Armored Matte Grey.jpg",
      "CB 150 R SPECIAL EDITION - New Fury Matte Red.jpg",
      "CB 150 R SPECIAL EDITION - New Raptor Matte Black.jpg"
    ],
    installments: [
      { dp: 3600000, rates: { 11: 3689000, 17: 2586000, 23: 2055000, 29: 1749000, 35: 1535000, 41: 1398000, 47: 1299000, 53: 1224000, 59: 1167000 } },
      { dp: 4500000, rates: { 11: 3594000, 17: 2522000, 23: 2001000, 29: 1706000, 35: 1495000, 41: 1362000, 47: 1265000, 53: 1192000, 59: 1136000 } },
      { dp: 5400000, rates: { 11: 3498000, 17: 2453000, 23: 1949000, 29: 1661000, 35: 1454000, 41: 1324000, 47: 1229000, 53: 1158000, 59: 1104000 } },
      { dp: 7100000, rates: { 11: 3318000, 17: 2327000, 23: 1848000, 29: 1576000, 35: 1380000, 41: 1256000, 47: 1167000, 53: 1099000, 59: 1048000 } }
    ],
    variants: [
      { name: "New Armored Matte Grey", color: "#6b7280" },
      { name: "New Fury Matte Red", color: "#dc2626" },
      { name: "New Raptor Matte Black", color: "#1f2937" }
    ]
  },
  {
    id: "cb150x",
    name: "CB150X",
    folder: "CB 150 X",
    category: "Sport Series",
    otr_price: 34825000.0,
    images: [
      "CB 150 X - Amazon Matte Green.jpg",
      "CB 150 X - Mandala Red.jpg",
      "CB 150 X - Sahara Matte Brown.jpg",
      "CB 150 X - Volcano Matte Black.jpg"
    ],
    installments: [
      { dp: 3500000, rates: { 11: 3677000, 17: 2584000, 23: 2048000, 29: 1754000, 35: 1513000, 41: 1378000, 47: 1280000, 53: 1207000, 59: 1150000 } },
      { dp: 4400000, rates: { 11: 3581000, 17: 2517000, 23: 1995000, 29: 1708000, 35: 1473000, 41: 1341000, 47: 1246000, 53: 1174000, 59: 1119000 } },
      { dp: 5300000, rates: { 11: 3485000, 17: 2450000, 23: 1941000, 29: 1662000, 35: 1434000, 41: 1306000, 47: 1213000, 53: 1143000, 59: 1090000 } },
      { dp: 7000000, rates: { 11: 3304000, 17: 2322000, 23: 1840000, 29: 1576000, 35: 1359000, 41: 1237000, 47: 1149000, 53: 1083000, 59: 1032000 } }
    ],
    variants: [
      { name: "Amazon Matte Green", color: "#166534" },
      { name: "Mandala Red", color: "#dc2626" },
      { name: "Sahara Matte Brown", color: "#92400e" },
      { name: "Volcano Matte Black", color: "#1f2937" }
    ]
  },
  {
    id: "cb150-verza-sw",
    name: "CB150 Verza SW",
    folder: "CB 150 VERZA SPOKE WHEEL",
    category: "Sport Series",
    otr_price: 24625000.0,
    images: [
      "CB 150 VERZA SPOKE WHEEL - Masculine Black.jpg"
    ],
    installments: [
      { dp: 2500000, rates: { 11: 2598000, 17: 1832000, 23: 1463000, 29: 1250000, 35: 1104000, 41: 1008000, 47: 938000, 53: 886000, 59: 846000 } },
      { dp: 3100000, rates: { 11: 2533000, 17: 1787000, 23: 1428000, 29: 1220000, 35: 1078000, 41: 984000, 47: 916000, 53: 865000, 59: 826000 } },
      { dp: 3700000, rates: { 11: 2469000, 17: 1742000, 23: 1391000, 29: 1189000, 35: 1051000, 41: 959000, 47: 893000, 53: 843000, 59: 805000 } },
      { dp: 5000000, rates: { 11: 2332000, 17: 1645000, 23: 1315000, 29: 1123000, 35: 994000, 41: 907000, 47: 845000, 53: 798000, 59: 762000 } }
    ],
    variants: [
      { name: "Masculine Black", color: "#1f2937" }
    ]
  },
  {
    id: "cbr150r-nonabs",
    name: "CBR150R Non ABS",
    folder: "CBR 150 R NON ABS",
    category: "Sport Series",
    otr_price: 38800000.0,
    images: [
      "CBR 150 R NON ABS - Honda Racing Red (STD).jpg",
      "CBR 150 R NON ABS - Honda Tricolor (STD).jpg",
      "CBR 150 R NON ABS - Victory Matte Black (STD).jpg"
    ],
    installments: [
      { dp: 3900000, rates: { 11: 4051000, 17: 2843000, 23: 2272000, 29: 1944000, 35: 1712000, 41: 1563000, 47: 1455000, 53: 1375000, 59: 1313000 } },
      { dp: 4900000, rates: { 11: 3944000, 17: 2767000, 23: 2213000, 29: 1894000, 35: 1667000, 41: 1522000, 47: 1417000, 53: 1338000, 59: 1278000 } },
      { dp: 5900000, rates: { 11: 3838000, 17: 2691000, 23: 2154000, 29: 1843000, 35: 1622000, 41: 1481000, 47: 1379000, 53: 1302000, 59: 1244000 } },
      { dp: 7800000, rates: { 11: 3635000, 17: 2550000, 23: 2041000, 29: 1747000, 35: 1537000, 41: 1403000, 47: 1306000, 53: 1234000, 59: 1178000 } }
    ],
    variants: [
      { name: "Honda Racing Red (STD)", color: "#dc2626" },
      { name: "Honda Tricolor (STD)", color: "#2563eb" },
      { name: "Victory Matte Black (STD)", color: "#1f2937" }
    ]
  },
  {
    id: "cbr250rr",
    name: "CBR250RR",
    folder: "CBR 250RR",
    category: "Sport Series",
    otr_price: 74125000.0,
    images: [
      "CBR 250RR - Black Freedom.jpg",
      "CBR 250RR - Bravery Red Black.jpg",
      "CBR 250RR - Honda Racing Red.jpg",
      "CBR 250RR - Honda Tricolor.jpg",
      "CBR 250RR - Mat Gunpowder Black Metalic.jpg",
      "CBR 250RR - Mystique Blue.jpg"
    ],
    installments: [
      { dp: 7500000, rates: { 11: 7532000, 17: 5217000, 23: 4121000, 29: 3521000, 35: 3112000, 41: 2829000, 47: 2623000, 53: 2469000, 59: 2349000 } },
      { dp: 8500000, rates: { 11: 7428000, 17: 5145000, 23: 4064000, 29: 3472000, 35: 3069000, 41: 2790000, 47: 2587000, 53: 2434000, 59: 2317000 } },
      { dp: 9500000, rates: { 11: 7323000, 17: 5072000, 23: 4006000, 29: 3423000, 35: 3026000, 41: 2750000, 47: 2550000, 53: 2400000, 59: 2284000 } },
      { dp: 10500000, rates: { 11: 7218000, 17: 5000000, 23: 3949000, 29: 3374000, 35: 2982000, 41: 2711000, 47: 2514000, 53: 2366000, 59: 2251000 } }
    ],
    variants: [
      { name: "Black Freedom", color: "#1f2937" },
      { name: "Bravery Red Black", color: "#dc2626" },
      { name: "Honda Racing Red", color: "#dc2626" },
      { name: "Honda Tricolor", color: "#2563eb" },
      { name: "Mat Gunpowder Black Metalic", color: "#374151" },
      { name: "Mystique Blue", color: "#1e40af" }
    ]
  },
  {
    id: "crf250l",
    name: "CRF250L",
    folder: "CRF 250 L",
    category: "Sport Series",
    otr_price: 91000000.0,
    images: [
      "CRF 150L - Extreme Blue Red.jpg",
      "CRF 250 L - Extreme Red.jpg"
    ],
    installments: [
      { dp: 9100000, rates: { 11: 9227000, 17: 6391000, 23: 5048000, 29: 4313000, 35: 3812000, 41: 3466000, 47: 3214000, 53: 3024000, 59: 2878000 } },
      { dp: 10100000, rates: { 11: 9122000, 17: 6319000, 23: 4991000, 29: 4264000, 35: 3769000, 41: 3426000, 47: 3177000, 53: 2990000, 59: 2845000 } },
      { dp: 11100000, rates: { 11: 9018000, 17: 6246000, 23: 4934000, 29: 4215000, 35: 3726000, 41: 3387000, 47: 3141000, 53: 2955000, 59: 2812000 } },
      { dp: 12100000, rates: { 11: 8913000, 17: 6174000, 23: 4876000, 29: 4166000, 35: 3683000, 41: 3348000, 47: 3104000, 53: 2921000, 59: 2780000 } }
    ],
    variants: [
      { name: "CRF 150L - Extreme Blue Red", color: "#dc2626" },
      { name: "Extreme Red", color: "#dc2626" }
    ]
  },
  {
    id: "revo-x",
    name: "Revo X",
    folder: "REVO X",
    category: "Bebek Series",
    otr_price: 20025000.0,
    images: [
      "REVO X - Attractive Red.jpg",
      "REVO X - Quantum Black.jpg"
    ],
    installments: [
      { dp: 2100000, rates: { 11: 2140000, 17: 1508000, 23: 1205000, 29: 1029000, 35: 908000, 41: 829000, 47: 772000, 53: 729000, 59: 696000 } },
      { dp: 2600000, rates: { 11: 2086000, 17: 1470000, 23: 1175000, 29: 1003000, 35: 885000, 41: 808000, 47: 753000, 53: 711000, 59: 679000 } },
      { dp: 3100000, rates: { 11: 2033000, 17: 1433000, 23: 1145000, 29: 978000, 35: 863000, 41: 788000, 47: 734000, 53: 693000, 59: 662000 } },
      { dp: 4100000, rates: { 11: 1927000, 17: 1358000, 23: 1086000, 29: 927000, 35: 819000, 41: 747000, 47: 696000, 53: 657000, 59: 628000 } }
    ],
    variants: [
      { name: "Attractive Red", color: "#dc2626" },
      { name: "Quantum Black", color: "#1f2937" }
    ]
  },
  {
    id: "sonic-150r",
    name: "Sonic 150R",
    folder: "SONIC 150R",
    category: "Bebek Series",
    otr_price: 28425000.0,
    images: [
      "SONIC 150R - Activo Black.jpg",
      "SONIC 150R - Agresso Matte Black.jpg",
      "SONIC 150R - Energetic Red.jpg",
      "SONIC 150R - Honda Racing Red.jpg"
    ],
    installments: [
      { dp: 2900000, rates: { 11: 2968000, 17: 2094000, 23: 1673000, 29: 1429000, 35: 1262000, 41: 1152000, 47: 1072000, 53: 1012000, 59: 966000 } },
      { dp: 3600000, rates: { 11: 2894000, 17: 2041000, 23: 1631000, 29: 1394000, 35: 1232000, 41: 1124000, 47: 1046000, 53: 987000, 59: 942000 } },
      { dp: 4300000, rates: { 11: 2819000, 17: 1990000, 23: 1590000, 29: 1358000, 35: 1201000, 41: 1096000, 47: 1020000, 53: 963000, 59: 919000 } },
      { dp: 5700000, rates: { 11: 2672000, 17: 1885000, 23: 1507000, 29: 1287000, 35: 1137000, 41: 1038000, 47: 966000, 53: 912000, 59: 870000 } }
    ],
    variants: [
      { name: "Activo Black", color: "#1f2937" },
      { name: "Agresso Matte Black", color: "#374151" },
      { name: "Energetic Red", color: "#dc2626" },
      { name: "Honda Racing Red", color: "#dc2626" }
    ]
  },
  {
    id: "super-cub-c125",
    name: "Super Cub C125",
    folder: "SUPER CUB C125",
    category: "Premium Series",
    otr_price: 78425000.0,
    images: [
      "SUPER CUB C125 - Matte Axis Grey Metalic.jpg",
      "SUPER CUB C125 - Pearl Cadet Gray.jpg",
      "SUPER CUB C125 - Pearl Nebula Red.jpg"
    ],
    installments: [
      { dp: 7900000, rates: { 11: 7965000, 17: 5517000, 23: 4358000, 29: 3723000, 35: 3291000, 41: 2991000, 47: 2774000, 53: 2610000, 59: 2484000 } },
      { dp: 8900000, rates: { 11: 7860000, 17: 5445000, 23: 4300000, 29: 3674000, 35: 3248000, 41: 2952000, 47: 2738000, 53: 2576000, 59: 2452000 } },
      { dp: 9900000, rates: { 11: 7756000, 17: 5372000, 23: 4243000, 29: 3625000, 35: 3204000, 41: 2913000, 47: 2701000, 53: 2542000, 59: 2419000 } },
      { dp: 10900000, rates: { 11: 7651000, 17: 5300000, 23: 4186000, 29: 3576000, 35: 3161000, 41: 2874000, 47: 2665000, 53: 2507000, 59: 2386000 } }
    ],
    variants: [
      { name: "Matte Axis Grey Metalic", color: "#6b7280" },
      { name: "Pearl Cadet Gray", color: "#9ca3af" },
      { name: "Pearl Nebula Red", color: "#dc2626" }
    ]
  },
  {
    id: "supra-gtr-excl",
    name: "Supra GTR 150 Exclusive",
    folder: "SUPRA GTR 150 EXCLUSIVE",
    category: "Bebek Series",
    otr_price: 27700000.0,
    images: [
      "SUPRA GTR 150 EXCLUSIVE - Exclusive Matte Red.jpg",
      "SUPRA GTR 150 EXCLUSIVE - Exclusive Matte Silver.jpg"
    ],
    installments: [
      { dp: 2800000, rates: { 11: 2897000, 17: 2045000, 23: 1634000, 29: 1396000, 35: 1232000, 41: 1124000, 47: 1046000, 53: 988000, 59: 943000 } },
      { dp: 3500000, rates: { 11: 2823000, 17: 1992000, 23: 1592000, 29: 1361000, 35: 1201000, 41: 1096000, 47: 1020000, 53: 963000, 59: 919000 } },
      { dp: 4200000, rates: { 11: 2749000, 17: 1940000, 23: 1550000, 29: 1325000, 35: 1170000, 41: 1068000, 47: 993000, 53: 938000, 59: 895000 } },
      { dp: 5600000, rates: { 11: 2602000, 17: 1836000, 23: 1468000, 29: 1254000, 35: 1108000, 41: 1011000, 47: 941000, 53: 888000, 59: 848000 } }
    ],
    variants: [
      { name: "Exclusive Matte Red", color: "#dc2626" },
      { name: "Exclusive Matte Silver", color: "#9ca3af" }
    ]
  },
  {
    id: "supra-gtr-sporty",
    name: "Supra GTR 150 Sporty",
    folder: "SUPRA GTR 150 SPORTY",
    category: "Bebek Series",
    otr_price: 27575000.0,
    images: [
      "SUPRA GTR 150 SPORTY - Sporty Gun Black.jpg",
      "SUPRA GTR 150 SPORTY - Sporty Spartan Red.jpg"
    ],
    installments: [
      { dp: 2800000, rates: { 11: 2885000, 17: 2035000, 23: 1626000, 29: 1389000, 35: 1227000, 41: 1120000, 47: 1042000, 53: 984000, 59: 939000 } },
      { dp: 3500000, rates: { 11: 2810000, 17: 1983000, 23: 1584000, 29: 1354000, 35: 1196000, 41: 1092000, 47: 1016000, 53: 959000, 59: 916000 } },
      { dp: 4200000, rates: { 11: 2736000, 17: 1931000, 23: 1544000, 29: 1318000, 35: 1165000, 41: 1063000, 47: 990000, 53: 934000, 59: 892000 } },
      { dp: 5600000, rates: { 11: 2589000, 17: 1827000, 23: 1460000, 29: 1248000, 35: 1102000, 41: 1006000, 47: 936000, 53: 884000, 59: 843000 } }
    ],
    variants: [
      { name: "Sporty Gun Black", color: "#374151" },
      { name: "Sporty Spartan Red", color: "#dc2626" }
    ]
  },
  {
    id: "supra-x-sw",
    name: "Supra X 125 SW",
    folder: "SUPRA X SW TYPE",
    category: "Bebek Series",
    otr_price: 21550000.0,
    images: [
      "SUPRA X SW TYPE - New Quantum Black.jpg"
    ],
    installments: [
      { dp: 2200000, rates: { 11: 2296000, 17: 1617000, 23: 1291000, 29: 1104000, 35: 975000, 41: 890000, 47: 828000, 53: 782000, 59: 747000 } },
      { dp: 2700000, rates: { 11: 2242000, 17: 1580000, 23: 1262000, 29: 1079000, 35: 952000, 41: 869000, 47: 809000, 53: 765000, 59: 730000 } },
      { dp: 3300000, rates: { 11: 2178000, 17: 1536000, 23: 1226000, 29: 1048000, 35: 926000, 41: 845000, 47: 787000, 53: 743000, 59: 710000 } },
      { dp: 4400000, rates: { 11: 2062000, 17: 1453000, 23: 1161000, 29: 993000, 35: 877000, 41: 801000, 47: 746000, 53: 704000, 59: 673000 } }
    ],
    variants: [
      { name: "New Quantum Black", color: "#1f2937" }
    ]
  },
  {
    id: "vario-125-street",
    name: "Vario 125 Street",
    folder: "VARIO 125 STREET",
    category: "Vario Series",
    otr_price: 27500000.0,
    images: [
      "VARIO 125 STREET - Street Black Coral.jpg",
      "VARIO 125 STREET - Street Black Purple.jpg",
      "VARIO 125 STREET - Street Black White.jpg"
    ],
    installments: [
      { dp: 2800000, rates: { 11: 2920000, 17: 2063000, 23: 1655000, 29: 1416000, 35: 1253000, 41: 1147000, 47: 1071000, 53: 1014000, 59: 970000 } },
      { dp: 3500000, rates: { 11: 2843000, 17: 2011000, 23: 1613000, 29: 1379000, 35: 1219000, 41: 1116000, 47: 1041000, 53: 985000, 59: 943000 } },
      { dp: 4200000, rates: { 11: 2769000, 17: 1959000, 23: 1570000, 29: 1342000, 35: 1189000, 41: 1088000, 47: 1016000, 53: 962000, 59: 920000 } },
      { dp: 5500000, rates: { 11: 2628000, 17: 1857000, 23: 1490000, 29: 1275000, 35: 1129000, 41: 1033000, 47: 964000, 53: 913000, 59: 873000 } }
    ],
    variants: [
      { name: "Street Black Coral", color: "#e81c24" },
      { name: "Street Black Purple", color: "#7c3aed" },
      { name: "Street Black White", color: "#f5f5f5" }
    ]
  },
  {
    id: "vario-160-abs",
    name: "Vario 160 ABS",
    folder: "VARIO EVO 160 ABS",
    category: "Vario Series",
    otr_price: 31675000.0,
    images: [
      "VARIO EVO 160 ABS - Ultimate Glossy Purple.jpg",
      "VARIO EVO 160 ABS - Ultimate Matte Black.jpg",
      "VARIO EVO 160 ABS - Ultimate Matte Red.jpg",
      "VARIO EVO 160 ABS - Ultimate Matte White.jpg"
    ],
    installments: [
      { dp: 3200000, rates: { 11: 3352000, 17: 2370000, 23: 1900000, 29: 1624000, 35: 1457000, 41: 1336000, 47: 1249000, 53: 1184000, 59: 1135000 } },
      { dp: 4000000, rates: { 11: 3266000, 17: 2310000, 23: 1852000, 29: 1583000, 35: 1420000, 41: 1302000, 47: 1217000, 53: 1154000, 59: 1106000 } },
      { dp: 4800000, rates: { 11: 3179000, 17: 2245000, 23: 1803000, 29: 1542000, 35: 1381000, 41: 1266000, 47: 1183000, 53: 1122000, 59: 1075000 } },
      { dp: 6400000, rates: { 11: 3006000, 17: 2127000, 23: 1707000, 29: 1457000, 35: 1306000, 41: 1197000, 47: 1119000, 53: 1061000, 59: 1016000 } }
    ],
    variants: [
      { name: "Ultimate Glossy Purple", color: "#7c3aed" },
      { name: "Ultimate Matte Black", color: "#1f2937" },
      { name: "Ultimate Matte Red", color: "#dc2626" },
      { name: "Ultimate Matte White", color: "#f5f5f5" }
    ]
  },
  {
    id: "vario-160-nitro",
    name: "Vario 160 CBS Nitro",
    folder: "VARIO EVO 160 CBS NITRO",
    category: "Vario Series",
    otr_price: 29100000.0,
    images: [
      "VARIO EVO 160 CBS NITRO - Nitro Glossy Grey Lime.jpg",
      "VARIO EVO 160 CBS NITRO - Nitro Matte Black Red.jpg"
    ],
    installments: [
      { dp: 3000000, rates: { 11: 3084000, 17: 2181000, 23: 1749000, 29: 1495000, 35: 1340000, 41: 1229000, 47: 1149000, 53: 1090000, 59: 1044000 } },
      { dp: 3700000, rates: { 11: 3009000, 17: 2128000, 23: 1706000, 29: 1459000, 35: 1308000, 41: 1200000, 47: 1122000, 53: 1064000, 59: 1019000 } },
      { dp: 4400000, rates: { 11: 2933000, 17: 2071000, 23: 1664000, 29: 1423000, 35: 1274000, 41: 1168000, 47: 1092000, 53: 1035000, 59: 992000 } },
      { dp: 5900000, rates: { 11: 2771000, 17: 1961000, 23: 1574000, 29: 1343000, 35: 1204000, 41: 1103000, 47: 1031000, 53: 978000, 59: 937000 } }
    ],
    variants: [
      { name: "Nitro Glossy Grey Lime", color: "#84cc16" },
      { name: "Nitro Matte Black Red", color: "#dc2626" }
    ]
  },
  {
    id: "pcx-160-abs-rs",
    name: "PCX 160 ABS Roadsync",
    folder: "PCX 160 ROADSYNC",
    category: "PCX Series",
    otr_price: 41300000.0,
    images: [
      "PCX 160 ROADSYNC - Signature Brown.jpg",
      "PCX 160 ROADSYNC - Signature Burgundy.jpg"
    ],
    installments: [
      { dp: 4200000, rates: { 11: 4239000, 17: 2994000, 23: 2396000, 29: 2050000, 35: 1834000, 41: 1677000, 47: 1563000, 53: 1478000, 59: 1413000 } },
      { dp: 5200000, rates: { 11: 4133000, 17: 2919000, 23: 2337000, 29: 1999000, 35: 1790000, 41: 1637000, 47: 1526000, 53: 1443000, 59: 1379000 } },
      { dp: 6200000, rates: { 11: 4026000, 17: 2844000, 23: 2277000, 29: 1948000, 35: 1744000, 41: 1594000, 47: 1486000, 53: 1406000, 59: 1344000 } },
      { dp: 8300000, rates: { 11: 3806000, 17: 2689000, 23: 2153000, 29: 1842000, 35: 1649000, 41: 1507000, 47: 1405000, 53: 1329000, 59: 1270000 } }
    ],
    variants: [
      { name: "Signature Brown", color: "#92400e" },
      { name: "Signature Burgundy", color: "#7f1d1d" }
    ]
  }
];;;


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
    var dpHtml = "";
    if (product.installments && product.installments.length > 0) {
      var sorted = product.installments.slice().sort(function (a, b) { return a.dp - b.dp; });
      sorted.forEach(function (inst) {
        dpHtml += '<option value="' + inst.dp + '">' + formatCurrency(inst.dp) + '</option>';
      });
    }
    dpSelect.innerHTML = dpHtml;
    dpSelect.onchange = function () { renderTenor(product, parseInt(dpSelect.value)); };
    if (product.installments && product.installments.length > 0) {
      renderTenor(product, product.installments[0].dp);
    }
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
// RENDER TENOR GRID (DATA LANGSUNG - TANPA INTERPOLASI)
// ============================================================
function renderTenor(product, dpValue) {
  var installments = product.installments;
  if (!installments || installments.length === 0) return;

  var tenorGrid = document.getElementById("js-tenor-grid");
  var rateDisplay = document.getElementById("js-modal-installment-rate");
  var summaryDisplay = document.getElementById("js-modal-installment-summary");

  // Cari data installments yang DP-nya cocok
  var matchedInst = null;
  for (var i = 0; i < installments.length; i++) {
    if (installments[i].dp === dpValue) {
      matchedInst = installments[i];
      break;
    }
  }
  // Jika tidak cocok tepat, cari yang paling dekat
  if (!matchedInst) {
    var bestDiff = Infinity;
    for (var j = 0; j < installments.length; j++) {
      var diff = Math.abs(installments[j].dp - dpValue);
      if (diff < bestDiff) {
        bestDiff = diff;
        matchedInst = installments[j];
      }
    }
  }
  if (!matchedInst) return;

  // Kumpulkan semua tenor yang tersedia dari data rates
  var tenors = [];
  var allTenors = [11, 17, 23, 29, 35, 41, 47, 53, 59];
  allTenors.forEach(function (t) {
    if (matchedInst.rates[t] !== undefined && matchedInst.rates[t] > 0) {
      tenors.push(t);
    }
  });

  if (tenorGrid) {
    var html = "";
    tenors.forEach(function (t, idx) {
      var rate = matchedInst.rates[t] || 0;
      html += '<button class="tenor-btn' + (idx === tenors.length - 1 ? ' active' : '') + '" data-tenor="' + t + '" data-rate="' + rate + '" onclick="selectTenor(this, ' + dpValue + ')">';
      html += '  <div>' + t + 'x</div>';
      html += '  <div style="font-size:10px;font-weight:400;margin-top:2px;color:var(--text-muted);">' + formatCurrency(rate) + '</div>';
      html += '</button>';
    });
    tenorGrid.innerHTML = html;

    if (tenors.length > 0) {
      var lastTenor = tenors[tenors.length - 1];
      var lastRate = matchedInst.rates[lastTenor] || 0;
      if (rateDisplay) rateDisplay.textContent = formatCurrency(lastRate);
      if (summaryDisplay) summaryDisplay.textContent = "Tenor " + lastTenor + " Bulan | Uang Muka " + formatCurrency(dpValue);
    }
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
