function permPalindrome(phrase) {
    //TODO: could use const instead of var because the value doesn't change
    //-cleaner
    //-readability
    //-prevents bugs
    const countMap = buildCharFrequencyTable(phrase);
    return checkMaxOneOdd(countMap);
}

function checkMaxOneOdd(countMap) {
    var count = 0;
    for (i of countMap.values()) {
        // % = modulus operation, similar to division but gives a remainder 
        //if anything besides 0, it is odd => enter into this if block
        if (i % 2) {
            count += 1;
        }
        if (count >1) {
            return false;
        }
    }
    return true; //that it is a permutation
}

function buildCharFrequencyTable(phrase) {
    var mappy = new Map();
    //for each char in string
    for (c in phrase) {
        if (mappy.get(phrase[c] >= 0)) {
            mappy.set(phrase[c], mappy.get(phrase[c] + 1));
        } else {
            mappy.set(phrase[c], 1);
        }
    }
}