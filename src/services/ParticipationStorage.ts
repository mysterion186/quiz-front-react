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
    }
}