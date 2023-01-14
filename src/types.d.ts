type Question = {
    id? : number,
    position : number,
    text : string, 
    title : string, 
    possiblesAnswers : {
        id? : number,
        isCorrect : boolean,
        text : string
    }[],
    image : string,
}

export default Question;