var exports = module.exports;

const PREFIX = "~";

exports.message = function(client, msg) {

    var jokes = ['Q: Did you hear about the painter who was hospitalized? A: Reports say it was due to too many strokes. ', 'Q: Why did the robber take a bath? A: Because he wanted to make a clean getaway. ', '  . Q: What happens if life gives you melons? A: You’re dyslexic ', '  . Q: What did the blanket say to the bed? A: Don’t worry, I’ve got you covered! ', '  . Q: Why should you take a pencil to bed? A: To draw the curtains! ', '  . Q: What do you call a frozen dog? A: A pupsicle. ', '  . Q. What did the tie say to the hat? A. You go on ahead and I’ll hang around ', '  . Q: What washes up on very small beaches? A: Microwaves! ', '  . Q: What goes through towns, up &amp; over hills, but doesn’t move? A: The road!', 'Q: Why did the cross-eyed teacher lose her job? A: Because she couldn’t control her pupils ', 'Q: What do you call someone who is afraid of Santa? A: A Clausterphobic ', 'Q: What three candies can you find in every school? A: Nerds, DumDums, and Smarties. ', 'Q: What stays in the corner and travels all over the world? A: A stamp. ', 'Q: What do you call a man with no body and just a nose? A: Nobody nose. ', 'Q: Why did the computer go to the doctor? A: Because it had a virus! ', 'Q: What do you call a computer that sings? A: A-Dell ', 'Q: Did you hear about the shampoo shortage in Jamaica? A: It’s dread-full. ', 'Q: How do you make a tissue dance? A: Put a little boogey in it! ', 'Q: Did you hear about the angry pancake? A: He just flipped. ', 'Q: What do prisoners use to call each other? A: Cell phones. ', 'Q: What do you call a cow with a twitch? A: Beef Jerky. ', 'Q: Why did the traffic light turn red? A: You would too if you had to change in the middle of the street! ', 'Q: What did one elevator say to the other elevator? A: I think I’m coming down with something! ', 'Q: What do you call a window that raps? A:   PANEZ ', 'Q: “How do you shoot a killer bee?” A: “With a bee-bee gun.” ', 'Q: How do you drown a Hipster? A: In the mainstream. ', 'Q: What kind of jokes do you make in the shower? A: Clean Jokes! ', 'Q: What does a nosey pepper do? A: Gets jalapeno business! ', 'Q: What do you call a fake noodle? A: An Impasta ', 'Q: What do you call an alligator in a vest? A: An Investigator ', 'Q: Why did Johnny throw the clock out of the window? A: Because he wanted to see time fly! ', 'Q: When do you stop at green and go at red? A: When you’re eating a watermelon! ', 'Q: What did the tailor think of her new job? A: It was sew-sew. ', 'Q: What is an astronaut’s favorite place on a computer? A: The Spacebar! ', 'Q: What exam do young witches have to pass? A: A spell-ing test! ', 'Q: What do you call a sheep with no head and no legs? A: A cloud! ', 'Q: Which weighs more, a ton of feathers or a ton of bricks? A: Neither, they both weigh a ton! ', 'Q: Did you hear about the blonde who gave her cat a bath? A: She still hasn’t gotten all the hair off her tongue. ', 'Q: What has one horn and gives milk A: A milk truck. ', 'Q: What concert costs      cents? A:      Cent featuring Nickleback. ', 'Q: Can February March? A: No. But April May. ', 'Q: Why did the tree go to the dentist? A: To get a root canal. ', 'Q: Why is Basketball such a messy sport? A: Because you dribble on the floor! ', 'Q: How do you communicate with a fish? A: Drop him a line!', 'Q: Where do sheep go to get haircuts? A: To the Baa Baa shop! ', 'Q: What kind of shoes do all spies wear? A: Sneakers. ', 'Q: Why did the soccer player bring string to the game? A: So he could tie the score. ', 'Q: Why is a baseball team similar to a muffin? A: They both depend on the batter. ', 'Q: How do you repair a broken tomato? A: Tomato Paste! ', 'Q: Why did the baby strawberry cry? A: Because his parents were in a jam! ', 'Q: What did the hamburger name his daughter? A: Patty! ', 'Q: Who can shave      times a day and still have a beard? A: A barber. ', 'Q: What do you call a horse that can’t lose a race? A: Sherbet ', 'Q: What do you call a dentist in the army? A: A drill sergeant ', 'Q: What do you get when you plant kisses? A: Tu-lips (two-lips) ', 'Q: What did the daddy chimney say to the baby chimney? A: You are to little to smoke! ', 'Q: What do you call a ghosts mom and dad? A: Transparents ', 'Q: What did Winnie The Pooh say to his agent? A: Show me the honey! ', 'Q: What did the man say to the wall? A: One more crack like that and I’ll plaster ya! ', 'Q: What do you get when you cross a fridge with a radio? A: Cool Music. ', 'Q: What do you get when you cross Sonic The Hedgehog and Curious George? A:    Fast    Curious ', 'Q: Did you hear about the hairdresser? A: She dyed. ', 'Q: What do you call a musician with problems? A: a trebled man. ', 'Q: What is the best day to go to the beach? A: Sunday, of course! ', 'Q: Which building is the largest? A: The library, because it has the most stories.', 'Q: What do you call an illegally parked frog? A: Toad. ', 'Q: What do you call a very religious person that sleep walks? A: A Roman Catholic ', 'Q: Did you hear about the crab that went to the seafood disco? A: He pulled a muscle ', 'Q: Did you hear about the carrot detective? A: He got to the root of every case. ', 'Q: Why don’t skeletons fight each other? A: They don’t have the guts. ', 'Q: What do you call cheese that is not yours? A: Nacho Cheese ', 'Q: What streets do ghosts haunt? A: Dead ends! ', 'Q: What’s easy to get into but hard to get out of? A: Trouble ', 'Q: Why did the dinosaur cross the road? A: Because the chicken joke wasn’t invented yet.', 'Q: What kind of lights did Noah use on the Ark? A: Flood lights! ', 'Q: Why did Goofy put a clock under his desk? A: Because he wanted to work over-time! ', 'Q: Do you know why diarrhea is hereditary? A: Because it runs through your jeans. What would you do if I stole a kiss? Call the Police ', 'Q: What do you call a South American girl who is always in a hurry? A: Urgent Tina ', 'Q: Why do birds fly south for the winter? A: Its easier than walking! ', 'Q: What kind of key opens a banana? A: A monkey!', 'Q: Did you hear about the vampire bicycle that went round biting people’s arms off? A: It was a vicious cycle. ', 'Q: What do you call leftover aliens? A: Extra Terrestrials. ', 'Q: What’s taken before you get it? A: Your picture. ', 'Q: Whats the difference between roast beef and pea soup? A: You can roast beef, but you cant pea soup! ', 'Q: What happens if you eat yeast and shoe polish? A: Every morning you’ll rise and shine! ', 'Q: “What’s the difference between a guitar and a fish?” A: “You can’t tuna fish.” ', 'Q: What do you call a baby monkey? A: A Chimp off the old block. ', 'Q: What did the femur say to the patella? A: I kneed you.', 'Q: Why did the picture go to jail? A: Because it was framed. ', 'Q: What do you call a three-footed aardvark? A: A yardvark! ', 'Q: What’s the first bet that most people make in their lives? A: The alpha bet ', 'Q. What do you get when you cross a cow and a duck? A. Milk and quackers! ', 'Q: How do you organize a space party? A: You planet! ', 'Q: Why do fish live in salt water? A: Because pepper makes them sneeze! ', 'Q: Why did the man put his money in the freezer? A: He wanted cold hard cash! ', 'Q: What do you get when you cross a snowman with a vampire? A: Frostbite. ', 'Q: What has one head, one foot and four legs? A: A Bed ', 'Q: What is the difference between a school teacher and a train? A: The teacher says spit your gum out and the train says “chew chew chew”. ', 'Q: Why did the birdie go to the hospital? A: To get a tweetment. ', ' Q: What did Delaware? A: A New Jersey ', ' Q: Why did Tony go out with a prune? A: Because he couldn’t find a date! ', ' Q: What did the little mountain say to the big mountain? A: Hi Cliff! ', ' Q: What do you call an     s synth pop band with a scoop of ice cream? A: Depeche a la Mode.', ' Q: Why do sea-gulls fly over the sea? A: Because if they flew over the bay they would be bagels! ', ' Q: What dog keeps the best time? A: A watch dog. ', ' Q: What did the penny say to the other penny? A: We make perfect cents. ', ' Q: Why did the man with one hand cross the road? A: To get to the second hand shop. ', ' Q: Why did the boy sprinkle sugar on his pillow before he went to sleep? A: So he could have sweet dreams. ', ' Q: What happens if life gives you melons? A: Your dyslexic ', ' Q: What did one raindrop say to the other? A: My plop is bigger than your plop. ', ' Q: Why did the balloon burst A: Because is saw a lolly pop ', ' Q: Which is the longest word in the dictionary? A: “Smiles”, because there is a mile between each “s”! ', ' Q: What happened to the wooden car with wooden wheels and wooden engine? A: It wooden go! ', ' Q: Which month do soldiers hate most? A: The month of March! ', ' Q: Whens the best time to go to the dentist? A: Tooth-hurty ', ' Q: What did one aspiring wig say to the other aspiring wig? A: I wanna get a head! ', ' Q: Did you hear about the paddle sale at the boat store? A: It was quite an oar deal. ', ' Q: What do you call a guy who never farts in public? A: A private tutor. ', ' Q: What do you call a bear with no socks on? A: Bare-foot. ', ' Q: What can you serve but never eat? A: A volleyball. ', ' Q: What kind of crackers do firemen like in their soup? A: Firecrackers! ', ' Q: Did you hear about the two bed bugs who met in the mattress? A: They got married in the spring. ', ' Q: Why do watermelons have fancy weddings? A: Because they cantaloupe. ', ' Q: Have you heard the joke about the butter? A: I better not tell you, it might spread.',
     ' Q: What did the judge say to the dentist? A: Do you swear to pull the tooth, the whole tooth and nothing but the tooth. ', ' Q: Why did the boy tiptoe past the medicine cabinet? A: He didn’t want to wake the sleeping pills! ', ' Q: What goes up when the rain comes down? A: An umbrella. ', ' Q: What sound do porcupines make when they kiss? A: Ouch ', ' Q: Why was the guy looking for fast food ON his friend? A: Because his friend said dinner is ON me. ', ' Q: Did you hear the joke about the roof? A: Never mind, it’s over your head! ', ' Q: What did the leopard say after eating his owner? A: Man, that hit the “spot.” ', ' Q: What do you call a sleeping bull? A: A bulldozer! ', ' Q: What do you call security guards working outside Samsung shops? A: Guardians of the Galaxy. ', ' Q: What do you call a bee that lives in America? A: USB ', ' Q: How do you make a tissue dance? A: Put a bogey in it. ', ' Q: Why didn’t the skeleton go to the dance? A: Because he had no-body to go with. ', ' Q: How do crazy people go through the forest? A: They take the psycho path. ', ' Q: What does the Lone Ranger say when he takes out the garbage? A: To the dump, to the dump, to the dump dump dump. ', ' Q: How many books can you put in an empty backpack? A: One! After that its not empty! ', ' Q: What kind of button won’t unbutton? A: A bellybutton! ', ' Q: Why does a milking stool have only    legs? A: Because the cow has the utter. ', ' Q: Did you hear about the monster with five legs? A: His trousers fit him like a glove. ', ' Q: Why don’t you see giraffes in elementary school? A: Because they’re all in High School! ', ' Q: How do baseball players stay cool? A: They sit next to their fans. ', 'Q: Why was the math book sad? A: Because it had too many problems.']

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'joke':
            var randomNum = Math.floor(Math.random()*jokes.length);
            
            var info = jokes[randomNum];
            console.log(jokes[3]);
            info = String(info).split(" A: ");
            var question = info[0], answer = info[1];

            msg.reply(question + "\n ||A: " + answer + "||");
    }
};
