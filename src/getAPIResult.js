
export default function(){
 
    // "http://localhost:8080/Quizz"
    return fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=CNDJO9WP98PVJP38&symbol=VG').then(function(response){
       return response.json()
    })

    .then(function(data){
    
        return(
            data = [
                {
                    "questionId": 1,
                    "CorrectAnswers": [
                        {
                            "answerId": 1.1,
                            "answer": "7.85 cm",
                            "score": 1
                        }
                    ],
                    "UsersAnswers": [
                        {
                            "answerId": 1.1,
                            "answer": "7.85 cm"
                        }
                    ]
                },
                
                {
                    "questionId": 2,
                    "CorrectAnswers": [
                        {
                            "answerId": 2.2,
                            "answer": "5",
                            "score": 0.5
                        },
                        {
                            "answerId": 2.3,
                            "answer": "2",
                            "score": 0.5
                        }
                    ],
                    "UsersAnswers": [
                        {
                            "answerId": 2.2,
                            "answer": "5"
                        },
                        {
                            "answerId": 2.4,
                            "answer": "7"
                        }
                    ]
                },
                
                {
                    "questionId": 3,
                    "CorrectAnswers": [
                        {
                            "answerId": 3.1,
                            "answer": "Đúng",
                            "score": 1
                        }
                    ],
                    "UsersAnswers": [
                        {
                            "answerId": 3.1,
                            "answer": "Đúng"
                        }
                    ]
                }
            ]
        )
        
    })
    .catch((err)=>{
        console.log("network err"+err);
    })
}