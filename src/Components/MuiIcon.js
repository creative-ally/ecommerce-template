import * as icons from '@material-ui/icons'
import stringSimilarity from 'string-similarity'

const MuiIcon = (word) => {
    const iconsNames = Object.keys(icons)

    var matches = stringSimilarity.findBestMatch(word, iconsNames)
    const bestMathch = matches.bestMatch.target
    const Icon = icons[bestMathch]
    return Icon
};

export default MuiIcon;