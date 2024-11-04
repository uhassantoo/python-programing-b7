const API_url = 'https://cricket-live-score10.p.rapidapi.com/data?matches=live';
const API_KEY = 'd02c827db6mshaf33db73f46d633p11289ajsnbf8e802432f1'


// Function to fetch live score
async function fetchlivescores() {
    const response = await fetch(API_url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'cricket-live-score10.p.rapidapi.com'
        }
    })

    if (!response.ok){
        console.log('Network Problem')
        throw new Error("Network response was not ok");
        
    }

    return await response.json()
  
}
async function displaylivescores() {

    const scoreboard = document.getElementById('scoreboard')
    scoreboard.innerHTML = '' 

    try {
        const scores = await  fetchlivescores()

        scores.forEach(match => {
            const matchDiv = document.createElement('div')
            matchDiv.className = 'match'
            matchDiv.innerHTML = `
            <h3>${match.title}<h3>
            <p><strong>Status:</strong> ${match.status}</p>
            <p>${match.team1}: ${match.score1}</p>
            <p>${match.team2}: ${match.score2}</p>
            <p><strong>Last Wicket :</strong> ${match.lasticket}</p>
            <p>${match.update}</p>`

            scoreboard.appendChild(matchDiv)
            
        });
       
     
    } catch (error) {
        console.error('Error Fetching Live Scores',error);
        scoreboard.innerHTML = '<p> Error Fetching Live Scores .. Please try again </p>'
    }

}
document.getElementById('refresh').addEventListener('click',displaylivescores)


displaylivescores()

