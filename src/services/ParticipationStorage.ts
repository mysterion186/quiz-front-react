export default {

    savePlayerName(playerName: string):void{
        window.localStorage.setItem('playerName', playerName);
    },
    getPlayerName():string | null{
        return window.localStorage.getItem('playerName');
    },

    saveTotalQuestions(totalQuestions:number):void{
        window.localStorage.setItem('totalQuestions', totalQuestions.toString());
    },
    getTotalQuestions():string|null{
        return window.localStorage.getItem('totalQuestions');
    },

    saveToken(token:string):void{
        window.localStorage.setItem('token', token);
    },
    getToken():string|null{
        return window.localStorage.getItem('token');
    },

    saveQuestionTotal(total:number):void{
        window.localStorage.setItem('total',total.toString());
    },
    getTotal():string|null{
        const total = window.localStorage.getItem('total');
        return total===null ? null : total;
    },

    saveParticipationScore(score : number):void{
        window.localStorage.setItem('participationScore',score.toString()); 
    },
    getParticipationScore():string|null{
        return window.localStorage.getItem('participationScore');
    },

    saveAnswersSummaries(answersSummaries : number[]){
        window.localStorage.setItem("answersSummaries", answersSummaries.toString());
    },
    getAnswersSummaries():Array<[number, string]>|undefined{
        const rawAnswers = window.localStorage.getItem("answersSummaries");
        if (rawAnswers === null){
            return;
        }
        const temp = rawAnswers.split(',');
        var cleanAnswer: Array<[number, string]> = [];
        for (let i = 0; i < temp.length - 1; i +=2 ) {
            cleanAnswer.push([parseInt(temp[i]), temp[i + 1]]);
        }
        return cleanAnswer;
    }
}