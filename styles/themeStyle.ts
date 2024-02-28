import { MD3Colors } from "react-native-paper/lib/typescript/types";

export interface Theme {
  'name': string,
  'light': MD3Colors,
  'dark': MD3Colors,
}

export const listeTheme = [
    {
        name: 'Theme 1',
        light: {
          "primary": "rgb(120, 69, 172)",
          "onPrimary": "rgb(255, 255, 255)",
          "primaryContainer": "rgb(240, 219, 255)",
          "onPrimaryContainer": "rgb(44, 0, 81)",
          "secondary": "rgb(102, 90, 111)",
          "onSecondary": "rgb(255, 255, 255)",
          "secondaryContainer": "rgb(237, 221, 246)",
          "onSecondaryContainer": "rgb(33, 24, 42)",
          "tertiary": "rgb(128, 81, 88)",
          "onTertiary": "rgb(255, 255, 255)",
          "tertiaryContainer": "rgb(255, 217, 221)",
          "onTertiaryContainer": "rgb(50, 16, 23)",
          "error": "rgb(186, 26, 26)",
          "onError": "rgb(255, 255, 255)",
          "errorContainer": "rgb(255, 218, 214)",
          "onErrorContainer": "rgb(65, 0, 2)",
          "background": "rgb(255, 251, 255)",
          "onBackground": "rgb(29, 27, 30)",
          "surface": "rgb(255, 251, 255)",
          "onSurface": "rgb(29, 27, 30)",
          "surfaceVariant": "rgb(233, 223, 235)",
          "onSurfaceVariant": "rgb(74, 69, 78)",
          "outline": "rgb(124, 117, 126)",
          "outlineVariant": "rgb(204, 196, 206)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(50, 47, 51)",
          "inverseOnSurface": "rgb(245, 239, 244)",
          "inversePrimary": "rgb(220, 184, 255)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(248, 242, 251)",
            "level2": "rgb(244, 236, 248)",
            "level3": "rgb(240, 231, 246)",
            "level4": "rgb(239, 229, 245)",
            "level5": "rgb(236, 226, 243)"
          },
          "surfaceDisabled": "rgba(29, 27, 30, 0.12)",
          "onSurfaceDisabled": "rgba(29, 27, 30, 0.38)",
          "backdrop": "rgba(51, 47, 55, 0.4)"
        },
        dark: {
          "primary": "rgb(220, 184, 255)",
          "onPrimary": "rgb(71, 12, 122)",
          "primaryContainer": "rgb(95, 43, 146)",
          "onPrimaryContainer": "rgb(240, 219, 255)",
          "secondary": "rgb(208, 193, 218)",
          "onSecondary": "rgb(54, 44, 63)",
          "secondaryContainer": "rgb(77, 67, 87)",
          "onSecondaryContainer": "rgb(237, 221, 246)",
          "tertiary": "rgb(243, 183, 190)",
          "onTertiary": "rgb(75, 37, 43)",
          "tertiaryContainer": "rgb(101, 58, 65)",
          "onTertiaryContainer": "rgb(255, 217, 221)",
          "error": "rgb(255, 180, 171)",
          "onError": "rgb(105, 0, 5)",
          "errorContainer": "rgb(147, 0, 10)",
          "onErrorContainer": "rgb(255, 180, 171)",
          "background": "rgb(29, 27, 30)",
          "onBackground": "rgb(231, 225, 229)",
          "surface": "rgb(29, 27, 30)",
          "onSurface": "rgb(231, 225, 229)",
          "surfaceVariant": "rgb(74, 69, 78)",
          "onSurfaceVariant": "rgb(204, 196, 206)",
          "outline": "rgb(150, 142, 152)",
          "outlineVariant": "rgb(74, 69, 78)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(231, 225, 229)",
          "inverseOnSurface": "rgb(50, 47, 51)",
          "inversePrimary": "rgb(120, 69, 172)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(39, 35, 41)",
            "level2": "rgb(44, 40, 48)",
            "level3": "rgb(50, 44, 55)",
            "level4": "rgb(52, 46, 57)",
            "level5": "rgb(56, 49, 62)"
          },
          "surfaceDisabled": "rgba(231, 225, 229, 0.12)",
          "onSurfaceDisabled": "rgba(231, 225, 229, 0.38)",
          "backdrop": "rgba(51, 47, 55, 0.4)"
        },
    },
    {
        name: 'Theme 2',
        light: {
          "primary": "rgb(72, 69, 228)",
          "onPrimary": "rgb(255, 255, 255)",
          "primaryContainer": "rgb(226, 223, 255)",
          "onPrimaryContainer": "rgb(10, 0, 107)",
          "secondary": "rgb(85, 85, 169)",
          "onSecondary": "rgb(255, 255, 255)",
          "secondaryContainer": "rgb(226, 223, 255)",
          "onSecondaryContainer": "rgb(13, 6, 100)",
          "tertiary": "rgb(82, 86, 169)",
          "onTertiary": "rgb(255, 255, 255)",
          "tertiaryContainer": "rgb(225, 224, 255)",
          "onTertiaryContainer": "rgb(9, 7, 100)",
          "error": "rgb(186, 26, 26)",
          "onError": "rgb(255, 255, 255)",
          "errorContainer": "rgb(255, 218, 214)",
          "onErrorContainer": "rgb(65, 0, 2)",
          "background": "rgb(255, 251, 255)",
          "onBackground": "rgb(28, 27, 31)",
          "surface": "rgb(255, 251, 255)",
          "onSurface": "rgb(28, 27, 31)",
          "surfaceVariant": "rgb(228, 225, 236)",
          "onSurfaceVariant": "rgb(71, 70, 79)",
          "outline": "rgb(119, 118, 128)",
          "outlineVariant": "rgb(200, 197, 208)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(49, 48, 52)",
          "inverseOnSurface": "rgb(243, 239, 244)",
          "inversePrimary": "rgb(193, 193, 255)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(246, 242, 254)",
            "level2": "rgb(240, 236, 253)",
            "level3": "rgb(235, 231, 252)",
            "level4": "rgb(233, 229, 252)",
            "level5": "rgb(229, 226, 251)"
          },
          "surfaceDisabled": "rgba(28, 27, 31, 0.12)",
          "onSurfaceDisabled": "rgba(28, 27, 31, 0.38)",
          "backdrop": "rgba(48, 48, 56, 0.4)"
        },
        dark: {
          "primary": "rgb(193, 193, 255)",
          "onPrimary": "rgb(22, 0, 168)",
          "primaryContainer": "rgb(45, 36, 205)",
          "onPrimaryContainer": "rgb(226, 223, 255)",
          "secondary": "rgb(193, 193, 255)",
          "onSecondary": "rgb(37, 36, 119)",
          "secondaryContainer": "rgb(60, 60, 143)",
          "onSecondaryContainer": "rgb(226, 223, 255)",
          "tertiary": "rgb(192, 193, 255)",
          "onTertiary": "rgb(34, 37, 120)",
          "tertiaryContainer": "rgb(58, 61, 143)",
          "onTertiaryContainer": "rgb(225, 224, 255)",
          "error": "rgb(255, 180, 171)",
          "onError": "rgb(105, 0, 5)",
          "errorContainer": "rgb(147, 0, 10)",
          "onErrorContainer": "rgb(255, 180, 171)",
          "background": "rgb(28, 27, 31)",
          "onBackground": "rgb(229, 225, 230)",
          "surface": "rgb(28, 27, 31)",
          "onSurface": "rgb(229, 225, 230)",
          "surfaceVariant": "rgb(71, 70, 79)",
          "onSurfaceVariant": "rgb(200, 197, 208)",
          "outline": "rgb(145, 143, 154)",
          "outlineVariant": "rgb(71, 70, 79)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(229, 225, 230)",
          "inverseOnSurface": "rgb(49, 48, 52)",
          "inversePrimary": "rgb(72, 69, 228)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(36, 35, 42)",
            "level2": "rgb(41, 40, 49)",
            "level3": "rgb(46, 45, 56)",
            "level4": "rgb(48, 47, 58)",
            "level5": "rgb(51, 50, 62)"
          },
          "surfaceDisabled": "rgba(229, 225, 230, 0.12)",
          "onSurfaceDisabled": "rgba(229, 225, 230, 0.38)",
          "backdrop": "rgba(48, 48, 56, 0.4)"
        },
    },
    {
        name: 'Theme 3',
        light: {
          "primary": "rgb(0, 100, 147)",
          "onPrimary": "rgb(255, 255, 255)",
          "primaryContainer": "rgb(202, 230, 255)",
          "onPrimaryContainer": "rgb(0, 30, 48)",
          "secondary": "rgb(0, 101, 139)",
          "onSecondary": "rgb(255, 255, 255)",
          "secondaryContainer": "rgb(197, 231, 255)",
          "onSecondaryContainer": "rgb(0, 30, 45)",
          "tertiary": "rgb(0, 103, 125)",
          "onTertiary": "rgb(255, 255, 255)",
          "tertiaryContainer": "rgb(179, 235, 255)",
          "onTertiaryContainer": "rgb(0, 31, 39)",
          "error": "rgb(186, 26, 26)",
          "onError": "rgb(255, 255, 255)",
          "errorContainer": "rgb(255, 218, 214)",
          "onErrorContainer": "rgb(65, 0, 2)",
          "background": "rgb(252, 252, 255)",
          "onBackground": "rgb(26, 28, 30)",
          "surface": "rgb(252, 252, 255)",
          "onSurface": "rgb(26, 28, 30)",
          "surfaceVariant": "rgb(221, 227, 234)",
          "onSurfaceVariant": "rgb(65, 71, 77)",
          "outline": "rgb(114, 120, 126)",
          "outlineVariant": "rgb(193, 199, 206)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(46, 49, 51)",
          "inverseOnSurface": "rgb(240, 240, 243)",
          "inversePrimary": "rgb(141, 205, 255)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(239, 244, 250)",
            "level2": "rgb(232, 240, 246)",
            "level3": "rgb(224, 235, 243)",
            "level4": "rgb(222, 234, 242)",
            "level5": "rgb(217, 231, 240)"
          },
          "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
          "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
          "backdrop": "rgba(43, 49, 55, 0.4)"
        },
        dark: {
          "primary": "rgb(141, 205, 255)",
          "onPrimary": "rgb(0, 52, 79)",
          "primaryContainer": "rgb(0, 75, 112)",
          "onPrimaryContainer": "rgb(202, 230, 255)",
          "secondary": "rgb(126, 208, 255)",
          "onSecondary": "rgb(0, 52, 74)",
          "secondaryContainer": "rgb(0, 76, 106)",
          "onSecondaryContainer": "rgb(197, 231, 255)",
          "tertiary": "rgb(89, 213, 248)",
          "onTertiary": "rgb(0, 54, 66)",
          "tertiaryContainer": "rgb(0, 78, 95)",
          "onTertiaryContainer": "rgb(179, 235, 255)",
          "error": "rgb(255, 180, 171)",
          "onError": "rgb(105, 0, 5)",
          "errorContainer": "rgb(147, 0, 10)",
          "onErrorContainer": "rgb(255, 180, 171)",
          "background": "rgb(26, 28, 30)",
          "onBackground": "rgb(226, 226, 229)",
          "surface": "rgb(26, 28, 30)",
          "onSurface": "rgb(226, 226, 229)",
          "surfaceVariant": "rgb(65, 71, 77)",
          "onSurfaceVariant": "rgb(193, 199, 206)",
          "outline": "rgb(139, 145, 152)",
          "outlineVariant": "rgb(65, 71, 77)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(226, 226, 229)",
          "inverseOnSurface": "rgb(46, 49, 51)",
          "inversePrimary": "rgb(0, 100, 147)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(32, 37, 41)",
            "level2": "rgb(35, 42, 48)",
            "level3": "rgb(39, 48, 55)",
            "level4": "rgb(40, 49, 57)",
            "level5": "rgb(42, 53, 62)"
          },
          "surfaceDisabled": "rgba(226, 226, 229, 0.12)",
          "onSurfaceDisabled": "rgba(226, 226, 229, 0.38)",
          "backdrop": "rgba(43, 49, 55, 0.4)"
        },
    }

];
