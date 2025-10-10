import { Platform, TextStyle } from "react-native";

export const Fonts = {
    black: "Lexend-Black",
    extraBold: "Lexend-ExtraBold",
    bold: "Lexend-Bold",
    semiBold: "Lexend-SemiBold",
    medium: "Lexend-Medium",
    regular: "Lexend-Regular",
    light: "Lexend-Light",
    thin: "Lexend-Thin",
};

/**
 * Returns proper font styling for a given weight,
 * automatically handling Android's lack of fontWeight mapping.
 */
export const getFontStyleFromWeight = (
    fontWeight: TextStyle["fontWeight"] = "400"
) => {
    const style: TextStyle = {
        fontFamily: Fonts.regular,
        fontWeight: fontWeight?.toString() as TextStyle["fontWeight"],
        includeFontPadding: false,
        textAlignVertical: "center",
    };

    if (Platform.OS === "android") {
        style.fontWeight = undefined;

        switch (fontWeight) {
            case "100":
            case "200":
            case "300":
                style.fontFamily = Fonts.thin;
                break;
            case "400":
            case undefined:
                style.fontFamily = Fonts.regular;
                break;
            case "500":
                style.fontFamily = Fonts.medium;
                break;
            case "600":
                style.fontFamily = Fonts.semiBold;
                break;
            case "700":
            case "bold":
                style.fontFamily = Fonts.bold;
                break;
            case "800":
                style.fontFamily = Fonts.extraBold;
                break;
            case "900":
                style.fontFamily = Fonts.black;
                break;
            default:
                style.fontFamily = Fonts.regular;
                break;
        }
    }

    return style;
};

export default Fonts;
