const lyrics = require('../resources/lyrics.json')
interface ITaylorIpsumGenerator {
    generate(paragraphs: number, length: number) : string
}

class TaylorIpsumGenerator implements ITaylorIpsumGenerator {
    generate(paragraphs: number = 3, length: number = 1): string {
        let lengthObj = {} as any
        console.log(paragraphs)
        console.log(length)
        switch (Number(length)) {
            case 0:
                lengthObj = ParagraphLength.Short
                break;
            case 2: 
                lengthObj = ParagraphLength.Long
                break;
            default:
                lengthObj = ParagraphLength.Normal
                break;
        }
        console.log(lengthObj)
        console.log(`Generating ${paragraphs} Queen Taylor paragraphs`)
        let string = ''
        for (var i = 0; i < paragraphs; i++) {
            const sentenceCount = getRandomInt(lengthObj.MinSentences, lengthObj.MaxSentences)
            const sentenceLength = getRandomInt(2,5);
            console.log(`Generating paragraph ${i+1} with ${sentenceCount} sentences`)
            
            let isStartOfSentence = true;
            for (let i = 0; i < sentenceCount; i++) {
                let song = randomProperty(lyrics)
                let sentenceIndex = getRandomInt(0, song.length)

                let lyric = song[sentenceIndex];
                if (!isStartOfSentence) {
                    lyric = lowerCaseFirstLetter(lyric)
                }
                string += lyric 

                if (sentenceLength % i == 0) {
                    string += '. ';
                    isStartOfSentence = true;
                }
                else {
                    string += ' '
                    isStartOfSentence = false;
                }
            }

            string += "\n\n"
        }
        return string
    }

}

export class ParagraphLength {
    static Short ={
        MinSentences: 6,
        MaxSentences: 10,
    }
    static Normal = {
        MinSentences: 11,
        MaxSentences: 15,
    }
    static Long = {
        MinSentences: 16,
        MaxSentences: 22
    }
}

var randomProperty = function (obj: any) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  module.exports = {
    TaylorIpsumGenerator
  }

function lowerCaseFirstLetter(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}