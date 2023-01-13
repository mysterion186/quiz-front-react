export default {

    savePlayerName(playerName: string):void{
        window.localStorage.setItem('playerName', playerName);
    },
    getPlayerName():string | null{
        return window.localStorage.getItem('playerName');
    },

    saveTotalQuestions(totalQuestions:string):void{
        window.localStorage.setItem('totalQuestions', totalQuestions);
    },
    getTotalQuestions():string|null{
        return window.localStorage.getItem('totalQuestions');
    },

    saveToken(token:string):void{
        window.localStorage.setItem('token', token);
    },
    getToken():string|null{
        return window.localStorage.getItem('token');
    }
}