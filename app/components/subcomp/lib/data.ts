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