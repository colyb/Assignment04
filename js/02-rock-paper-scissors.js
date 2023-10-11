/*
The Rock, Paper, Scissors Game (20 points)

Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
Our code will break the game into 3 phases:

User makes a choice. How will we collect the user’s choice?
Computer makes a choice. How will we collect the computer’s choice?
A conditional that determines who wins.
You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

Begin by prompting the user for their choice.
Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. 
Remember though, rather than 2 options, there will be 3 here.
Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, 
display a message within an alert box indicating who the winner is.

What if the result ends in a tie? Figure out how to handle that as well.
What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
*/
function generate_rand_num()
{
    return Math.floor((Math.random() * 10)) % 3
}

let user_choice = prompt("Please enter choose. 0 for Rock, 1 for Paper and 2 for Scissors.")
let comp_choice = generate_rand_num()

// 0 for Rock
// 1 for Paper
// 2 for Scissors
if (user_choice == "0")
{
    if (comp_choice == 0)
    {
        alert(`This is a tie! You and the computer both selected Rock!`)
    }
    else if (comp_choice == 1)
    {
        alert(`You lose! You selected Rock and the computer selected Paper!`)
    }
    else 
        alert(`You win! You selected Rock and the computer selected Scissors!`)
}
else if (user_choice == "1")
{
    if (comp_choice == 1)
    {
        alert(`This is a tie! You and the computer both selected Paper!`)
    }
    else if (comp_choice == 2)
    {
        alert(`You lose! You selected Paper and the computer selected Scissors!`)
    }
    else 
        alert(`You win! You selected Paper and the computer selected Rock!`)
}
else if (user_choice == "2")
{
    if (comp_choice == 2)
    {
        alert(`This is a tie! You and the computer both selected Scissors!`)
    }
    else if (comp_choice == 0)
    {
        alert(`You lose! You selected Scissors and the computer selected Rock!`)
    }
    else 
        alert(`You win! You selected Scissors and the computer selected Paper!`)
}
else
    alert(`Your input is invalid!`)

