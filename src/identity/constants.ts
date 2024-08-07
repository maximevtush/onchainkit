import { base, baseSepolia } from 'viem/chains';
import type { ResolverAddressesByChainIdMap } from './types';

export const RESOLVER_ADDRESSES_BY_CHAIN_ID: ResolverAddressesByChainIdMap = {
  [baseSepolia.id]: '0x6533C94869D28fAA8dF77cc63f9e2b2D6Cf77eBA',
  [base.id]: '0xC6d566A56A1aFf6508b41f6c90ff131615583BCD',
};

// Basename default profile pictures
const BASE_DEFAULT_PROFILE_PICTURES1 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72801)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2596.93 1721.27C2605.58 1648.75 2610.21 1574.9 2610.21 1500C2610.21 1425.1 2605.58 1351.4 2596.93 1278.73C2770.3 1177.28 2815.96 914.534 2631.1 772.941C2553.96 713.858 2472.05 660.593 2385.96 614.042C2339.26 528.102 2286.14 446.041 2227.06 368.904C2085.47 184.192 1822.72 229.699 1721.27 403.071C1648.75 394.417 1574.9 389.792 1500 389.792C1425.1 389.792 1351.4 394.417 1278.73 403.071C1177.28 229.699 914.534 184.043 772.941 368.904C713.858 446.041 660.593 527.953 614.042 614.042C528.102 660.742 446.041 713.858 368.904 772.941C184.192 914.534 229.699 1177.28 403.071 1278.73C394.417 1351.25 389.792 1425.1 389.792 1500C389.792 1574.9 394.417 1648.6 403.071 1721.27C229.699 1822.72 184.043 2085.47 368.904 2227.06C446.041 2286.14 527.953 2339.41 614.042 2385.96C660.742 2471.9 713.858 2553.96 772.941 2631.1C914.534 2815.81 1177.28 2770.3 1278.73 2596.93C1351.25 2605.58 1425.1 2610.21 1500 2610.21C1574.9 2610.21 1648.6 2605.58 1721.27 2596.93C1822.72 2770.3 2085.47 2815.96 2227.06 2631.1C2286.14 2553.96 2339.41 2472.05 2385.96 2385.96C2471.9 2339.26 2553.96 2286.14 2631.1 2227.06C2815.81 2085.47 2770.3 1822.72 2596.93 1721.27Z" fill="white"/><path d="M1391.06 1500C1391.06 1647.89 1358.4 1781.62 1305.74 1878.28C1253.03 1975.05 1180.69 2034 1101.53 2034C1022.36 2034 950.031 1975.05 897.314 1878.28C844.66 1781.62 812 1647.89 812 1500C812 1352.11 844.66 1218.38 897.314 1121.72C950.031 1024.95 1022.36 966 1101.53 966C1180.69 966 1253.03 1024.95 1305.74 1121.72C1358.4 1218.38 1391.06 1352.11 1391.06 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1102.57" cy="1194.93" rx="126.414" ry="231.934" fill="white"/><path d="M2187.16 1500C2187.16 1647.89 2154.5 1781.62 2101.84 1878.28C2049.13 1975.05 1976.79 2034 1897.63 2034C1818.46 2034 1746.13 1975.05 1693.41 1878.28C1640.76 1781.62 1608.1 1647.89 1608.1 1500C1608.1 1352.11 1640.76 1218.38 1693.41 1121.72C1746.13 1024.95 1818.46 966 1897.63 966C1976.79 966 2049.13 1024.95 2101.84 1121.72C2154.5 1218.38 2187.16 1352.11 2187.16 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1896.58" cy="1194.93" rx="126.414" ry="231.934" fill="white"/></g><defs><clipPath id="clip0_5569_72801"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES2 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72809)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2188.12 1131.95C2691.11 591.187 2356.8 256.94 1815.91 759.826C1767.57 804.826 1737.56 866.494 1733.32 932.403C1733.32 933.767 1733.17 934.979 1733.02 936.343C1722.56 1094.68 1853.35 1225.44 2011.72 1214.98C2013.08 1214.98 2014.29 1214.83 2015.66 1214.68C2081.58 1210.44 2143.26 1180.44 2188.27 1132.1L2188.12 1131.95Z" fill="white"/><path d="M759.879 1816.05C256.885 2356.81 591.204 2691.06 1132.08 2188.17C1180.43 2143.17 1210.44 2081.51 1214.68 2015.6C1214.68 2014.23 1214.83 2013.02 1214.98 2011.66C1225.44 1853.32 1094.65 1722.56 936.283 1733.02C934.919 1733.02 933.706 1733.17 932.342 1733.32C866.418 1737.56 804.738 1767.56 759.727 1815.9L759.879 1816.05Z" fill="white"/><path d="M1131.96 759.922C591.247 256.826 256.881 591.264 759.869 1132.09C804.865 1180.43 866.527 1210.44 932.431 1214.68C933.794 1214.68 935.006 1214.83 936.37 1214.98C1094.69 1225.44 1225.44 1094.66 1214.98 936.309C1214.98 934.946 1214.83 933.733 1214.68 932.369C1210.44 866.452 1180.44 804.777 1132.11 759.771L1131.96 759.922Z" fill="white"/><path d="M1816.05 2188.12C2356.81 2691.11 2691.06 2356.8 2188.17 1815.91C2143.17 1767.57 2081.51 1737.56 2015.6 1733.32C2014.23 1733.32 2013.02 1733.17 2011.66 1733.02C1853.32 1722.56 1722.56 1853.35 1733.02 2011.72C1733.02 2013.08 1733.17 2014.29 1733.32 2015.66C1737.56 2081.58 1767.56 2143.26 1815.9 2188.27L1816.05 2188.12Z" fill="white"/><path d="M1737.18 727.02C1710.36 -10.3398 1237.66 -10.3398 1210.84 727.02C1208.42 792.869 1230.84 857.658 1274.48 907.31C1275.39 908.37 1276.14 909.278 1277.05 910.338C1381.59 1029.62 1566.43 1029.62 1670.97 910.338C1671.88 909.278 1672.63 908.37 1673.54 907.31C1717.18 857.81 1739.45 793.02 1737.18 727.02Z" fill="white"/><path d="M727.02 1210.82C-10.3398 1237.64 -10.3398 1710.34 727.02 1737.16C792.869 1739.58 857.658 1717.16 907.31 1673.52C908.218 1672.62 909.278 1671.86 910.338 1670.95C1029.62 1566.41 1029.62 1381.57 910.338 1277.03C909.278 1276.12 908.37 1275.37 907.31 1274.46C857.81 1230.82 793.02 1208.55 727.02 1210.82Z" fill="white"/><path d="M2040.69 1274.48C2039.63 1275.39 2038.72 1276.14 2037.66 1277.05C1918.38 1381.59 1918.38 1566.43 2037.66 1670.97C2038.72 1671.88 2039.63 1672.63 2040.69 1673.54C2090.19 1717.18 2154.98 1739.45 2220.98 1737.18C2958.34 1710.36 2958.34 1237.66 2220.98 1210.84C2155.13 1208.42 2090.34 1230.84 2040.69 1274.48Z" fill="white"/><path d="M1210.82 2220.98C1237.64 2958.34 1710.34 2958.34 1737.16 2220.98C1739.58 2155.13 1717.16 2090.34 1673.52 2040.69C1672.62 2039.63 1671.86 2038.72 1670.95 2037.66C1566.41 1918.38 1381.57 1918.38 1277.03 2037.66C1276.12 2038.72 1275.37 2039.63 1274.46 2040.69C1230.82 2090.19 1208.55 2154.98 1210.82 2220.98Z" fill="white"/><circle cx="1474.5" cy="1474.5" r="886.5" fill="white"/><path d="M1391.06 1500C1391.06 1352.11 1358.4 1218.38 1305.74 1121.72C1253.03 1024.95 1180.69 966 1101.53 966C1022.36 966 950.031 1024.95 897.314 1121.72C844.66 1218.38 812 1352.11 812 1500C812 1647.89 844.66 1781.62 897.314 1878.28C950.031 1975.05 1022.36 2034 1101.53 2034C1180.69 2034 1253.03 1975.05 1305.74 1878.28C1358.4 1781.62 1391.06 1647.89 1391.06 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="126.414" cy="231.934" rx="126.414" ry="231.934" transform="matrix(1 0 0 -1 976.16 2037)" fill="white"/><path d="M2187.16 1500C2187.16 1352.11 2154.5 1218.38 2101.84 1121.72C2049.12 1024.95 1976.79 966 1897.63 966C1818.46 966 1746.13 1024.95 1693.41 1121.72C1640.76 1218.38 1608.1 1352.11 1608.1 1500C1608.1 1647.89 1640.76 1781.62 1693.41 1878.28C1746.13 1975.05 1818.46 2034 1897.63 2034C1976.79 2034 2049.12 1975.05 2101.84 1878.28C2154.5 1781.62 2187.16 1647.89 2187.16 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="126.414" cy="231.934" rx="126.414" ry="231.934" transform="matrix(1 0 0 -1 1770.17 2037)" fill="white"/></g><defs><clipPath id="clip0_5569_72809"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES3 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72826)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M587.596 2230.75C839.799 2148.27 1126.41 2048.74 1282.85 1934.35C1406.13 1849.79 1458.98 1757.13 1483.16 1651.34C1488.13 1629.73 1511.93 1629.73 1516.8 1651.34C1540.98 1757.01 1593.83 1849.67 1717.11 1934.35C1873.55 2048.74 2160.26 2148.28 2412.36 2230.75C2681.77 2308.44 2735.86 2334.34 2656.73 2207.31C2588.97 2088.63 2388.28 1817.51 2407.39 1489.82C2407.39 1489.21 2407.39 1488.59 2407.39 1487.86C2397.17 1162.25 2598.34 899.36 2662.18 786.079C2737.77 664.821 2675.65 693.54 2406.72 771.597C2154.43 854.195 1870.3 953.362 1715.2 1067.5C1593.25 1151.7 1540.79 1203.99 1516.8 1309.05C1511.83 1330.65 1488.03 1330.65 1483.16 1309.05C1459.17 1203.87 1406.71 1151.7 1284.76 1067.5C1129.66 953.362 845.533 854.195 593.234 771.597C324.307 693.54 262.284 664.821 337.782 786.079C401.621 899.36 602.791 1162.37 592.47 1488.1C592.47 1488.72 592.47 1489.33 592.47 1490.07C611.583 1817.76 410.891 2088.87 343.134 2207.55C264.004 2334.46 318.095 2308.68 587.5 2231L587.596 2230.75Z" fill="white"/><path d="M769.249 587.596C851.725 839.799 951.26 1126.41 1065.65 1282.85C1150.21 1406.13 1242.87 1458.98 1348.66 1483.16C1370.26 1488.13 1370.26 1511.93 1348.66 1516.8C1242.99 1540.98 1150.33 1593.83 1065.65 1717.11C951.26 1873.55 851.725 2160.26 769.249 2412.36C691.56 2681.77 665.664 2735.86 792.691 2656.73C911.372 2588.97 1182.49 2388.28 1510.18 2407.39C1510.79 2407.39 1511.41 2407.39 1512.14 2407.39C1837.75 2397.17 2100.64 2598.34 2213.92 2662.18C2335.18 2737.77 2306.46 2675.65 2228.4 2406.72C2145.8 2154.43 2046.64 1870.3 1932.5 1715.2C1848.3 1593.25 1796.01 1540.79 1690.95 1516.8C1669.35 1511.83 1669.35 1488.03 1690.95 1483.16C1796.13 1459.17 1848.3 1406.71 1932.5 1284.76C2046.64 1129.66 2145.8 845.533 2228.4 593.234C2306.46 324.307 2335.18 262.284 2213.92 337.782C2100.64 401.621 1837.63 602.791 1511.9 592.47C1511.28 592.47 1510.67 592.47 1509.93 592.47C1182.24 611.583 911.127 410.891 792.446 343.134C665.541 264.004 691.315 318.095 769.004 587.5L769.249 587.596Z" fill="white"/><path d="M1391.06 1500C1391.06 1352.11 1358.4 1218.38 1305.74 1121.72C1253.03 1024.95 1180.69 966 1101.53 966C1022.36 966 950.031 1024.95 897.314 1121.72C844.66 1218.38 812 1352.11 812 1500C812 1647.89 844.66 1781.62 897.314 1878.28C950.031 1975.05 1022.36 2034 1101.53 2034C1180.69 2034 1253.03 1975.05 1305.74 1878.28C1358.4 1781.62 1391.06 1647.89 1391.06 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="126.414" cy="231.934" rx="126.414" ry="231.934" transform="matrix(1 0 0 -1 976.159 2037)" fill="white"/><path d="M2187.16 1500C2187.16 1352.11 2154.5 1218.38 2101.84 1121.72C2049.12 1024.95 1976.79 966 1897.63 966C1818.46 966 1746.13 1024.95 1693.41 1121.72C1640.76 1218.38 1608.1 1352.11 1608.1 1500C1608.1 1647.89 1640.76 1781.62 1693.41 1878.28C1746.13 1975.05 1818.46 2034 1897.63 2034C1976.79 2034 2049.12 1975.05 2101.84 1878.28C2154.5 1781.62 2187.16 1647.89 2187.16 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="126.414" cy="231.934" rx="126.414" ry="231.934" transform="matrix(1 0 0 -1 1770.17 2037)" fill="white"/></g><defs><clipPath id="clip0_5569_72826"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES4 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72835)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2713.13 1500C2731.2 1680.92 2615.13 1818.15 2507.78 1924.42C2394.7 2032.13 2290.44 2108.88 2200.88 2200.61C2109.15 2290.16 2032.22 2394.61 1924.51 2507.68C1818.15 2615.04 1680.92 2731.11 1500 2713.13C1319.08 2731.2 1181.85 2615.13 1075.58 2507.78C967.866 2394.7 891.12 2290.44 799.389 2200.88C709.837 2109.15 605.39 2032.22 492.315 1924.51C384.962 1818.15 268.89 1680.92 286.873 1500C268.799 1319.08 384.871 1181.85 492.224 1075.58C605.299 967.866 709.564 891.12 799.116 799.389C890.848 709.837 967.775 605.39 1075.49 492.315C1181.85 384.871 1319.08 268.799 1500 286.873C1680.92 268.799 1818.15 384.871 1924.42 492.224C2032.13 605.299 2108.88 709.564 2200.61 799.116C2290.16 890.848 2394.61 967.775 2507.68 1075.49C2615.04 1181.85 2731.11 1319.08 2713.13 1500Z" fill="white"/><path d="M1391.06 1500C1391.06 1647.89 1358.4 1781.62 1305.74 1878.28C1253.03 1975.05 1180.69 2034 1101.53 2034C1022.36 2034 950.031 1975.05 897.314 1878.28C844.66 1781.62 812 1647.89 812 1500C812 1352.11 844.66 1218.38 897.314 1121.72C950.031 1024.95 1022.36 966 1101.53 966C1180.69 966 1253.03 1024.95 1305.74 1121.72C1358.4 1218.38 1391.06 1352.11 1391.06 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1102.57" cy="1194.93" rx="126.414" ry="231.934" fill="white"/><path d="M2187.16 1500C2187.16 1647.89 2154.5 1781.62 2101.84 1878.28C2049.12 1975.05 1976.79 2034 1897.63 2034C1818.46 2034 1746.13 1975.05 1693.41 1878.28C1640.76 1781.62 1608.1 1647.89 1608.1 1500C1608.1 1352.11 1640.76 1218.38 1693.41 1121.72C1746.13 1024.95 1818.46 966 1897.63 966C1976.79 966 2049.12 1024.95 2101.84 1121.72C2154.5 1218.38 2187.16 1352.11 2187.16 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1896.58" cy="1194.93" rx="126.414" ry="231.934" fill="white"/></g><defs><clipPath id="clip0_5569_72835"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES5 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72843)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2321.64 1500C3048.65 1727.51 2902.59 1900.1 2182.54 1787.44C2625.43 2169.27 2494.23 2265.93 1974.71 1974.53C2266.19 2493.97 2169.44 2625.34 1787.53 2182.54C1900.19 2902.68 1727.6 3048.65 1500 2321.64C1272.49 3048.65 1099.9 2902.59 1212.56 2182.54C830.733 2625.43 734.069 2494.23 1025.47 1974.71C506.03 2266.19 374.655 2169.44 817.464 1787.53C97.3173 1900.19 -48.6455 1727.6 678.356 1500C-48.6455 1272.49 97.4051 1099.9 817.464 1212.56C374.567 830.733 505.767 734.069 1025.29 1025.47C733.806 506.03 830.558 374.655 1212.47 817.464C1099.81 97.3173 1272.4 -48.6455 1500 678.356C1727.51 -48.6455 1900.1 97.4051 1787.44 817.464C2169.27 374.567 2265.93 505.767 1974.53 1025.29C2493.97 733.806 2625.34 830.558 2182.54 1212.47C2902.68 1099.81 3048.65 1272.4 2321.64 1500Z" fill="white"/><path d="M1402.29 1500.15C1402.29 1632.88 1372.98 1752.91 1325.73 1839.64C1278.42 1926.48 1213.56 1979.29 1142.65 1979.29C1071.73 1979.29 1006.87 1926.48 959.562 1839.64C912.315 1752.91 883 1632.88 883 1500.15C883 1367.41 912.315 1247.38 959.562 1160.65C1006.87 1073.81 1071.73 1021 1142.65 1021C1213.56 1021 1278.42 1073.81 1325.73 1160.65C1372.98 1247.38 1402.29 1367.41 1402.29 1500.15Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="998.466" cy="1500.14" rx="113.501" ry="208.242" fill="white"/><path d="M2117.07 1500.15C2117.07 1632.88 2087.76 1752.91 2040.51 1839.64C1993.2 1926.48 1928.34 1979.29 1857.42 1979.29C1786.51 1979.29 1721.65 1926.48 1674.34 1839.64C1627.09 1752.91 1597.78 1632.88 1597.78 1500.15C1597.78 1367.41 1627.09 1247.38 1674.34 1160.65C1721.65 1073.81 1786.51 1021 1857.42 1021C1928.34 1021 1993.2 1073.81 2040.51 1160.65C2087.76 1247.38 2117.07 1367.41 2117.07 1500.15Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1712.74" cy="1498.06" rx="113.501" ry="208.242" fill="white"/></g><defs><clipPath id="clip0_5569_72843"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES6 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72851)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2538.7 1207.34C2483.17 1184.33 2431.23 1159.94 2382.18 1133.9C2398.44 1080.86 2417.87 1026.85 2440.88 971.324C2548.89 711.06 2287.94 450.106 2027.68 558.125C1972.15 581.134 1918.14 600.699 1865.1 616.819C1839.06 567.907 1814.67 515.827 1791.66 460.302C1684.05 199.899 1314.94 199.899 1207.34 460.302C1184.33 515.827 1159.94 567.769 1133.9 616.819C1080.86 600.561 1026.85 581.134 971.324 558.125C711.06 450.106 450.106 711.06 558.125 971.324C581.134 1026.85 600.699 1080.86 616.819 1133.9C567.907 1159.94 515.827 1184.33 460.302 1207.34C199.899 1314.94 199.899 1684.05 460.302 1791.66C515.827 1814.67 567.769 1839.06 616.819 1865.1C600.561 1918.14 581.134 1972.15 558.125 2027.68C450.106 2287.94 711.06 2548.89 971.324 2440.88C1026.85 2417.87 1080.86 2398.3 1133.9 2382.18C1159.94 2431.09 1184.33 2483.17 1207.34 2538.7C1314.94 2799.1 1684.05 2799.1 1791.66 2538.7C1814.67 2483.17 1839.06 2431.23 1865.1 2382.18C1918.14 2398.44 1972.15 2417.87 2027.68 2440.88C2287.94 2548.89 2548.89 2287.94 2440.88 2027.68C2417.87 1972.15 2398.3 1918.14 2382.18 1865.1C2431.09 1839.06 2483.17 1814.67 2538.7 1791.66C2799.1 1684.05 2799.1 1314.94 2538.7 1207.34ZM1735.31 1727.87C1732.83 1730.35 1730.35 1732.83 1727.87 1735.31C1697.42 1766.58 1662.15 1790.01 1624.53 1806.13C1587.47 1820.46 1547.24 1828.17 1504.94 1827.62C1501.36 1827.62 1497.92 1827.62 1494.33 1827.62C1452.04 1828.17 1411.67 1820.32 1374.74 1806.13C1337.13 1790.01 1301.86 1766.58 1271.41 1735.31C1268.93 1732.83 1266.45 1730.35 1263.97 1727.87C1232.69 1697.42 1209.27 1662.15 1193.15 1624.53C1178.82 1587.61 1171.1 1547.24 1171.65 1504.94C1171.65 1501.36 1171.65 1497.92 1171.65 1494.33C1171.1 1452.04 1178.96 1411.67 1193.15 1374.74C1209.27 1337.13 1232.69 1301.86 1263.97 1271.41C1266.45 1268.93 1268.93 1266.45 1271.41 1263.97C1301.86 1232.69 1337.13 1209.27 1374.74 1193.15C1411.67 1178.82 1452.04 1171.1 1494.33 1171.65C1497.92 1171.65 1501.36 1171.65 1504.94 1171.65C1547.24 1171.1 1587.61 1178.96 1624.53 1193.15C1662.15 1209.27 1697.42 1232.69 1727.87 1263.97C1730.35 1266.45 1732.83 1268.93 1735.31 1271.41C1766.58 1301.86 1790.01 1337.13 1806.13 1374.74C1820.46 1411.8 1828.17 1452.04 1827.62 1494.33C1827.62 1497.92 1827.62 1501.36 1827.62 1504.94C1828.17 1547.24 1820.32 1587.61 1806.13 1624.53C1790.01 1662.15 1766.58 1697.42 1735.31 1727.87Z" fill="white"/><circle cx="1476" cy="1442" r="443" fill="white"/><path d="M1400.59 1202.5C1400.59 1334.79 1371.37 1454.31 1324.38 1540.58C1277.28 1627.04 1213.04 1679 1143.3 1679C1073.56 1679 1009.31 1627.04 962.215 1540.58C915.221 1454.31 886 1334.79 886 1202.5C886 1070.21 915.221 950.688 962.215 864.42C1009.31 777.961 1073.56 726 1143.3 726C1213.04 726 1277.28 777.961 1324.38 864.42C1371.37 950.688 1400.59 1070.21 1400.59 1202.5Z" fill="#155DFD" stroke="white" stroke-width="10"/><ellipse cx="1141.26" cy="931.03" rx="113.349" ry="207.963" fill="white"/><path d="M2114.41 1202.5C2114.41 1334.79 2085.19 1454.31 2038.19 1540.58C1991.1 1627.04 1926.85 1679 1857.11 1679C1787.37 1679 1723.13 1627.04 1676.03 1540.58C1629.04 1454.31 1599.82 1334.79 1599.82 1202.5C1599.82 1070.21 1629.04 950.688 1676.03 864.42C1723.13 777.961 1787.37 726 1857.11 726C1926.85 726 1991.1 777.961 2038.19 864.42C2085.19 950.688 2114.41 1070.21 2114.41 1202.5Z" fill="#155DFD" stroke="white" stroke-width="10"/><ellipse cx="1861.96" cy="928.963" rx="113.349" ry="207.963" fill="white"/></g><defs><clipPath id="clip0_5569_72851"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES7 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72860)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M1500.19 1499.87C1365.57 1351.79 1298.1 1205.48 1296.93 988.1C1296.16 779.052 1361.71 498.983 1502.29 274.909C1565.01 170.441 1645.1 119.866 1696.41 125.097C1750.22 129.37 1775.2 189.413 1785.5 284.511C1806.04 473.278 1775.29 803.798 1990.99 1009.07C2196.26 1224.77 2526.78 1194.09 2715.59 1214.68C2810.65 1224.78 2870.69 1249.84 2874.93 1303.61C2880.12 1354.96 2829.55 1435.05 2725.08 1497.77C2501.01 1638.35 2220.94 1703.91 2011.89 1703.13C1794.55 1702 1648.19 1634.49 1500.12 1499.87L1500.19 1499.87Z" fill="white"/><path d="M1499.98 1500.01C1634.61 1648.08 1702.07 1794.4 1703.24 2011.77C1704.02 2220.82 1638.47 2500.89 1497.89 2724.97C1435.16 2829.43 1355.07 2880.01 1303.77 2874.78C1249.96 2870.5 1224.97 2810.46 1214.68 2715.36C1194.13 2526.6 1224.89 2196.08 1009.18 1990.81C803.914 1775.1 473.394 1805.78 284.59 1785.2C189.528 1775.09 129.486 1750.03 125.249 1696.26C120.055 1644.91 170.63 1564.82 275.098 1502.1C499.172 1361.52 779.24 1295.97 988.289 1296.75C1205.63 1297.88 1351.98 1365.38 1500.06 1500.01L1499.98 1500.01Z" fill="white"/><path d="M1481.64 1518.29C1630.16 1383.18 1776.72 1315.24 1994.12 1313.37C2203.19 1311.92 2483.08 1376.57 2706.72 1516.45C2811 1578.84 2861.32 1658.78 2855.93 1710.11C2851.48 1763.93 2791.35 1789.12 2696.21 1799.72C2507.36 1820.87 2176.9 1791.18 1970.91 2007.57C1754.52 2213.55 1784.15 2544.01 1762.95 2732.9C1752.54 2828.01 1727.28 2888.14 1673.49 2892.55C1622.12 2897.91 1542.19 2847.58 1479.79 2743.31C1339.92 2519.66 1275.26 2239.77 1276.71 2030.7C1278.54 1813.33 1346.52 1666.75 1481.64 1518.22L1481.64 1518.29Z" fill="white"/><path d="M1481.81 1518.43C1333.29 1653.54 1186.74 1721.48 969.339 1723.34C760.267 1724.79 480.38 1660.13 256.734 1520.25C152.457 1457.85 102.133 1377.92 107.529 1326.59C111.975 1272.76 172.103 1247.58 267.243 1236.98C456.094 1215.83 786.549 1245.53 992.528 1029.15C1208.91 823.167 1179.28 492.713 1200.47 303.825C1210.92 208.685 1236.11 148.557 1289.93 144.111C1341.3 138.752 1421.23 189.076 1483.63 293.353C1623.51 516.999 1688.17 796.885 1686.72 1005.96C1684.9 1223.32 1616.92 1369.91 1481.81 1518.43Z" fill="white"/><path d="M1403.24 1500C1403.24 1630.77 1374.36 1749 1327.82 1834.44C1281.21 1919.99 1217.33 1972 1147.49 1972C1077.65 1972 1013.76 1919.99 967.153 1834.44C920.611 1749 891.731 1630.77 891.731 1500C891.731 1369.23 920.611 1251 967.153 1165.56C1013.76 1080.01 1077.65 1028 1147.49 1028C1217.33 1028 1281.21 1080.01 1327.82 1165.56C1374.36 1251 1403.24 1369.23 1403.24 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1148.41" cy="1230.16" rx="111.819" ry="205.156" fill="white"/><path d="M2107.42 1500C2107.42 1630.77 2078.55 1749 2032 1834.44C1985.4 1919.99 1921.51 1972 1851.67 1972C1781.83 1972 1717.94 1919.99 1671.34 1834.44C1624.79 1749 1595.92 1630.77 1595.92 1500C1595.92 1369.23 1624.79 1251 1671.34 1165.56C1717.94 1080.01 1781.83 1028 1851.67 1028C1921.51 1028 1985.4 1080.01 2032 1165.56C2078.55 1251 2107.42 1369.23 2107.42 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1850.75" cy="1230.16" rx="111.819" ry="205.156" fill="white"/></g><defs><clipPath id="clip0_5569_72860"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;

export const BASE_DEFAULT_PROFILE_PICTURES = [
  BASE_DEFAULT_PROFILE_PICTURES1,
  BASE_DEFAULT_PROFILE_PICTURES2,
  BASE_DEFAULT_PROFILE_PICTURES3,
  BASE_DEFAULT_PROFILE_PICTURES4,
  BASE_DEFAULT_PROFILE_PICTURES5,
  BASE_DEFAULT_PROFILE_PICTURES6,
  BASE_DEFAULT_PROFILE_PICTURES7,
];
