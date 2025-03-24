export const commandsList: { [key: string]: string } = {
    "ls": "Lists directory contents.",
    "pwd": "Displays the current working directory.",
    "cd": "Changes the current directory to the specified one.",
    "mkdir": "Creates a new directory with the specified name.",
    "rm": "Removes a file or directory (use with caution).",
    "cp": "Copies files or directories from one location to another.",
    "mv": "Moves or renames files or directories.",
    "touch": "Creates a new empty file or updates the timestamp of an existing file.",
    "cat": "Displays the contents of a specified file.",
    "echo": "Outputs the specified text to the terminal.",
    "man": "Shows the manual for a specified command.",
    "clear": "Clears the terminal screen.",
    "exit": "Terminates the current session or command line interface.",
    "help": "Displays help information for commands.",
    "git": "Version control system command for tracking changes.",
    "whoami": "Displays the current logged-in user.",
    "date": "Shows the current date and time.",
    "history": "Displays the list of previously entered commands."
};


export const commandanswers: { [key: string]: string } = {
    "ls": "You're not allowed to see what's here!",
    "pwd": "Welcome to my portfolio!",
    "cd": "Sorry, you can't go anywhere else.",
    "mkdir": "Nice try, but no new folders allowed.",
    "rm": "Don't even think about deleting anything!",
    "cp": "Nothing to copy here, move along!",
    "mv": "You can't move anything here!",
    "cat": "There's nothing to reveal.",
    "echo": "Echoing back: You're awesome!",
    "exit": "Goodbye! Come back soon!",
    "help": "You got this!",
    "git": "You're not ready for version control!",
    "whoami": "Just a curious soul visiting my portfolio.",
    "date": "It's always a great time to explore!",
    "man": "Who needs a manual when you have charm?",
    "history": "No past commands, just a bright future!",
    "touch": "No new files for you, keep exploring!"
};

export interface project { 
    bg: string,
    icon: JSX.Element,
    sometext?:string,
}
interface Quote { 
    quote: string, 
    whoSaidIt:string , 
}
export const quotes: Quote[] = [
    {
      quote: "Impossible is a word to be found only in the dictionary of fools.",
      whoSaidIt: "Napoleon Bonaparte",
    },
    {
      quote: "The battlefield is a scene of constant chaos. The winner will be the one who controls that chaos, both his own and the enemy’s.",
      whoSaidIt: "Napoleon Bonaparte",
    },
    {
      quote: "Veni, vidi, vici.",
      whoSaidIt: "Julius Caesar", // "I came, I saw, I conquered."
    },
    {
      quote: "The die is cast.",
      whoSaidIt: "Julius Caesar", // Famous quote marking the point of no return as he crossed the Rubicon.
    },
    {
      quote: "Cowards die many times before their deaths; the valiant never taste of death but once.",
      whoSaidIt: "Julius Caesar",
    },


    {
      quote: "Victory is not a gift, it is a struggle, a challenge, and an honor earned through hardship.",
      whoSaidIt: "Khalid ibn al-Walid",
    },
 
 
    {
      quote: "Silence is the only language that time speaks fluently.",
      whoSaidIt: "Malik Ben Nabi",
    },
    {
      quote: "It is difficult for a talkative people to hear the silent sound of the fleeing footsteps of time.",
      whoSaidIt: "Malik Ben Nabi",
    },


  ];
  
