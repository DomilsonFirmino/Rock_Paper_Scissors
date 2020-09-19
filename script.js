function computerPlay()
{    
    let choice = ["rock","paper","scissor"]
    return choice[Math.floor((Math.random() * 3))]
}
function playRound(playerSelection, computerPlay)
{
    switch(playerSelection)
    {
        case "rock":
            if(computerPlay=="rock")
            {
                return "Tie"
            }
            else if(computerPlay=="paper")
            {
                return "You Lose"
            }
            else
            {
                return "You Win"
            }
        case "paper":
            if(computerPlay=="rock")
            {
                return "You Win"
            }
            else if(computerPlay=="paper")
            {
                return "Tie"
            }
            else
            {
                return "You Lose"
            }
        case "scissor":
            if(computerPlay=="rock")
            {
                return "You Lose"
            }
            else if(computerPlay=="paper")
            {
                return "You Win"
            }
            else
            {
                return "Tie"
            }
    }

}
function game()
{
    let pp=0
    let cp=0
    let i
    for (i = 0; i < 5; i++)
    {
        const player = prompt("rock paper scissor").toLowerCase()
        const computer = computerPlay()
        const resul = playRound(player,computer)
        console.log("Computer choose "+ computer)
        console.log("You choose " + player)
        if (resul=="You Lose")
        {
            cp++
            console.log("You Lose")
        }
        else if(resul=="You Win")
        {
            pp++
            console.log("You Win")
        }
        else
        {
            console.log("tie")
        }
    }
    if (pp > cp)
    {
        console.log("You are The winner")
    }
    else if(pp < cp)
    {
        console.log("You lose this round")
    }
    else
    {
        console.log("Its Was a Tie")
    }
}