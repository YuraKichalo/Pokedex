import { colors } from "../../styles/colors";

export const getBtnColor = type => {
    switch (type) {
        case 'poison':
            return colors.violet;
        case 'grass':
            return colors.green;
        case 'fire':
            return colors.orange;
        case 'flying':
            return colors.teal;
        case 'water':
            return colors.blue;
        case 'bug':
            return colors.olive;
        case 'electric':
            return colors.yellow;
        case 'normal':
            return colors.black;
        case 'fighting':
            return colors.red;
        case 'ground':
            return colors.brown;
        case 'rock':
            return colors.grey;
        case 'ghost':
            return colors.black;
        case 'steel':
            return colors.grey;
        case 'psychic':
            return colors.brown;
        case 'ice':
            return colors.blue;
        case 'dragon':
            return colors.red;
        case 'dark':
            return colors.black;
        case 'fairy':
            return colors.olive;
        case 'unknown':
            return colors.black;
        case 'shadow':
            return colors.grey;
        default:
            return colors.grey;
    }
};