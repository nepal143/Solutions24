const events = [
  // coding category id=0
  [
    // shortest code
    {
      id: 0,
      title: "SHORTEST CODE",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: "1",
      descriptionUp:
        "Are you a good problem solver? Or someone who knows how to deal with things in the most optimal way?<br>SHORTEST CODE is an event where the participants are required to crack the code by sprinting against the time and get to the most optimal and tiniest code possible.<br>This event aims to test the problem-solving and aptitude of the participants and encourage them to code.<br>Remember. The smaller the code, the bigger your chances to win.",
      paragraph:
        "<b><u>RULES:</u></b><br>1. This event will be on-site in AIT.<br>2. Participants should bring their own laptop.<br>3. Points will be awarded for every accepted solutions.<br>4. The contestants needs to solve the problem and write the code in C++ only.<br>5. The code should pass all the test cases.<br>6. Contestants with most points will be selected as winners.<br>7. Individual participation.<br>8. The round will be of 2 Hours.<br>",
      descriptionDown: "",
    },
    // she code
    {
      id: 1,
      title: "SHE CODE",
      date: "04/04/2024",
      time: "4:00PM- 5:30PM",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: "1",
      descriptionUp:
        "<b>A Women only coding-challenge</b><br>AIT TECHNICAL BOARD brings an amazing opportunity for their female participants, a coding event exclusively meant for our female coders.<br>Here, the participants will be provided with a set of questions in order of their increasing difficulty and are expected to solve them as fast as possible.<br>So, Gear Up and keep coding.<br>",
      paragraph:
        "<b>GUIDELINES: </b><br>1. The round will be of 1.5 Hours.<br>2. The round will be hosted on HackerRank and all the programs would be run and compiled online.<br>3. Contest link will be provided via E-mail.",
      descriptionDown: "",
    },
    // {
    //   id: 2,
    //   title: "CODE RED",
    // date: "Revealed Soon",
    // time: "Revealed Soon",
    //   prizeWorth: "INR XXXX/-",
    //   firstposition: "INR XXXX",
    //   secondposition: "INR XXXX",
    //   thirdposition: "INR XXXX",
    //   teamsize: "2",
    //   descriptionUp:
    //     "Are you someone who finds logic in everything around you? Is your everyday language filled with proper grammar and syntax? Do you often think in terms of algorithms and flowcharts? Are you fond of solving difficult and novel problems? If you answered 'YES!' to these questions, then we believe that you have landed on the appropriate platform. CODE RED is precisely the type of event that suits you.",
    //   paragraph:
    //     "<b>GUIDELINES: </b><br><b>Round 1: </b> <br> 1.  In first round there will be 30 multiple choice questions based CS fundamentals.<br> 2. Platform : Unstop.<br> 3. This round will be proctored and no tab switiching will be allowed. <br><b> Round 2:</b>  <br> 1. The teams in the final round will be the ones who qualified the first round.<br> 2. Second round will be hosted on HackerRank and all the programs would be run and compiled online.<br> 3.  In case of any discrepancy, the final verdict will be decided by the Event Head.",
    //   descriptionDown: "",
    // },
  ],

  // robotics category id=1 $$
  [
    // MAZE RUNNER
    {
      id: 0,
      title: "MAZE RUNNER",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 10000/-",
      firstposition: "INR 5000/-",
      secondposition: "INR 3000/-",
      thirdposition: "INR 2000/-",
      teamsize: "Upto 4 Participants",
      descriptionUp:
        "Maze puzzle, a game which we used to see in our books and newspaper and solve them with our fast mind. Now it’s time for robots to do so. Here we bring you the most awaited competition named MAZE RUNNER where each team brings their smart bot which will   analyze the path in the dry run and then has to go through the maze from the start point to the end point by the shortest path in the minimum possible time. A proper venue will be allotted for the event and with guidance of event head proper rules and their implementation  will be carried out .  It would be a wonderful experience for the participants as well as for the spectators and thrilling moments will be captured for lifetime.",
      paragraph:
        "<b>GUIDELINES:</b><br><b>ARENA:</b><br>The game field consists of an arena whose dimensions will be announced later. It consists of the following: <br>1. The arena is composed of random paths made up of black stripes. All the distances are shown in the figure. <br>2.  The angle between two adjacent black lines in the path is 90°. <br>3. The width of all black stripes will be 2cm. <br>4.  A black box is present at the end zone of the arena to indicate the end position. <br><b>CHECKPOINTS:</b><br>1. The checkpoints are shown in the figure. (There would not be any blue (coloured). <br>2.  circle in the arena as shown in the figure. They are used only for reference) Each checkpoint carries 25 Points. <br>3. Number of checkpoints and their locations may vary in the actual arena. <br><b>GAMEPLAY:</b><br>The game play consists of two parts: <br>The first part is the “Dry Run.” <br>1.  In this run, the bot must start from the ‘Start’ and find its way to reach the ‘End’ (White box Indicated in the figure) of the arena. <br>2.  The bot now has an algorithm to find its path to reach ‘End’ and the bot can store the turns in its memory to explore the shortest path during the second part of the journey. <br>3.  There are no restrictions to cover all the checkpoints. <br>The second part is the 'Actual Run.' <br>1.  In this run, the bot has to restart from the ‘Start’ again and finds its way to the ‘End’ through the best possible path by owning the path that was stored in the first run. <br>2. The End Zone’ has a black box that indicates the end of the path for the bot. <br>3.  The checkpoints are shown in the figure. (There would not be any blue (colored)) <br>4.  circle in the arena as shown in the figure. They are used only for reference <br>5. Each checkpoint carries 25 Points. <br>6.  The number of checkpoints and their locations may vary in the actual arena. <br>A total of 4 minutes will be provided to complete the dry run. <br>A total of 3 minutes will be provided to complete the actual run. <br> If the bot takes more than 4 minutes to complete the dry run, then the extra time taken will be deducted from the timing of the actual run which is 3 minutes. <br><b>BOT SPECIFICATIONS:</b><br>1.  The autonomous bot must fit into the box of dimension 25cm X 25cm X 25cm (). <br>2. The Bot must be started individually by only one switch. However, a team may have an onboard switch for restart. This switch has to be shown to the organizer before the run. <br>3. The Bot must have a red LED which will glow once it reaches the end zone of the arena. <br>4.  During the run, the autonomous bot must not damage the arena in any way. It is not allowed to leave anything behind or make any marks while traversing the arena. <br>5. Any bot found damaging the arena will be immediately disqualified. The final decision is at the discretion of the organizers. <br>6. The Bot must have an ‘on board’ power supply. <br>7. When using the electric power supply, the potential difference between any two points must not exceed 24 V at any point of time during the game. <br>8. The autonomous bot should not separate or split into two or more units. <br>9. All bots/units which are touching each other or are in the starting point will be considered as • one bot. <br>10. Bot cannot be constructed using ready-made ‘Lego kits’ or any ready-made mechanism. <br>11. But they can make use of readymade gear assemblies. <br>12.  Violating this clause will lead to disqualification of the team. <br><br><b>GAME RULES:</b><br>Teams will be given 1 minute for calibration. If any team is found to alter its code after depositing its bots, then it will be immediately disqualified from the competition. <br>1. They are however allowed to make any other hardware changes. <br>2. Only one autonomous bot per team is allowed. <br>3. When the autonomous bot starts, no team member is allowed to touch the bot or enter the arena. <br>4. At the start of the task, the bot will be placed at the starting point. Only 1 team members are allowed to be near the game field while starting the bot.<br>5. Run will start only when organizers give the signal. <br>6. The starting procedure of the bot should be simple and should not involve giving bot any manual force or impulse in any direction. <br>7. A total of 5 minutes and 30 seconds will be given. <br>The bot must finish the dry run and main run in that period only. Restarts <br>1. The participants are allowed to take a maximum of 3 restarts in the entire match. <br>2. If the bot takes a restart in the first part (Dry Run) of the competition, it has to start from the checkpoint. <br>3. Once Dry Run is completed by the bot, the team won’t be given any other chance for Dry Run.<br>4. If the bot takes a restart in the second part (Actual Run) of the competition, it has to start from the start zone of the arena. <br>5. The timer will not be set back to zero and will not be paused in any case. <br>6. During a restart, a contestant must not feed information about the arena to the bot. However, contestants are allowed to adjust sensors (gain, position etc.) and make hardware changes. <br>The contestant must not alter the bot in any manner that reduces its weight (e.g. removal of a bulky sensor array or switching to lighter batteries to get better speed). The organizers reserve the right to arbitrate in such circumstances.<br><b>GENERAL RULES:</b><br>1.  Only 1 member of the team is allowed to handle the bot. <br>2. Participants are not allowed to keep anything inside the arena other than the bot. <br>3. Laptops/personal computers are not allowed near the arena. Other Wi-Fi, Bluetooth, etc. devices must be switched off. <br>4. The organizers hold the right to check for these devices and their usage and disqualify the team. <br>5.  The time measured by the organizers will be final and will be used for scoring of the teams. <br>6. Time measured by any contestant by any other means is not acceptable for scoring. <br>7.  In case of any disputes/discrepancies, the organizers' decision will be final and binding. <br>8.  The organizers reserve the rights to change any or all of the above rules as they deem fit. Change in rules, if any will be highlighted on the website and notified to the registered teams. <br>9. Only one team is allowed to be present during the run, other teams will have to stay outside the hall . No team is allowed to take photographs or record their run. <br>",
      descriptionDown: "",
    },
    // ROBO-CLENCH
    {
      id: 1,
      title: "ROBO-CLENCH",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: "Upto 4 Participants",
      descriptionUp:
        "Nature has a beautiful phenomenon of Diffusion and we need to follow this for diffusing many important things beyond our planet. But the driving force for diffusion is completely destroyed by the zombies. Now all of it depends on few robots that can restore lives by providing the driving force. But are the few robots capable enough? Can they diffuse the things through the barriers in the path? Would they be able to restore back the almighty's driving force? We put you in charge to make this happen!! .Bring  your strong armed boats which will pick the object from one point and keep it at the other in minimum possible time.",
      paragraph:
        "<b>GUIDELINES:</b><br><b>GAMEPLAY:</b><br>1. The event will be points based. <br>2. There will be a time limit to complete the course. <br>3. The bot has to begin from the START point. <br>4. The timer will be started. The bot will have to pick up square blocks, climb up the ramps and place the blocks at specified locations to complete the course. <br>5. The team will be awarded points for each task of an obstacle completed successfully. <br>6.  The team can decide to skip a task of an obstacle or the complete obstacle. No points will be awarded for the skipped tasks. If a bot performs a task incorrectly or topples over during the competition, it will have to go back to the previous checkpoint and start over from that checkpoint. The timer will not be stopped in any case. <br><br><b>ROBOT SPECIFICATIONS:</b><br>1.  The dimension of the bot should be less than or equal to 300mm X 200mm X 300mm. (l x b x h), failing which the team will be disqualified from the competition. The bot can however extend its dimension once the run starts. <br>2. An error of (+5%/-5%) is permitted. The bot must be controlled by manually. <br>3.  Teams can use both wired as well as wireless control mechanisms. <br>4. In case of wired bots, the length of wire should be minimum 2 meters so that the wire remains slack at any instant of time. <br>5.  Participants are not supposed to use any readymade Lego components or readymade  gripping mechanism. <br>6. However, the participants are allowed to use readymade gear assemblies. <br>7. Only one person will be allowed to control the bot. <br>8. Failing to meet any of the above specifications will lead to immediate disqualification. <br>9. Robot should fit in a box of dimensions 300mm * 250mm (inclusive of all the extensions of the bot). No Restrictions on Height. Team not fulfilling this criterion will be straight away disqualified. <br>10. The Robot should be controlled by a wireless remote control or the wired one throughout the race. <br>11. The weight of the robot should not exceed more than 3 kg. <br>12. If the machine is wired, then wire should remain slack under all circumstances during the race .The wires should be properly insulated. Power should not be transmitted in any physical form from the operator to the robot. <br><b>RULES AND REGULATIONS:</b><br>1. Only one team member is allowed to handle the bot. No other team member is allowed to enter the arena. <br>2. The bot will be liable for disqualification if it causes any kind of damage to the arena. <br>3.  The bot is not allowed to slide the blocks against the ground, except for fine adjustments in the Deposit Zone. <br>4. Any damage done to the blocks will lead to immediate disqualification. <br>5.   In case of any disputes/discrepancies, the organizer’s decision will be final and • binding. <br>6.  All decisions about scoring, Game Play & timing, and participation, made by the Organizing Committee is final. <br>7.  Teams should completely respect their vote and decisions. <br>",
      descriptionDown: "",
    },
    // ROBO SOCCER
    {
      id: 2,
      title: "ROBO SOCCER",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: "Upto 4 Participants",
      descriptionUp:
        "A well known and loved sport football has become famous world wide and each one of us playing the game want to became Messi and Ronaldo. We are bringing  up the event ROBO SOCCER in which pair of two teams will battle it out and prove their endurance in a nail-biting game of football using their bots as the players . A proper venue will be allotted for the event and with guidance of event head proper rules and their implementation  will be carried out .  It would be a wonderful experience for the participants as well as for the spectators and thrilling moments will be captured for lifetime.",
      paragraph:
        "<b>GUIDELINES:</b><br>1. This is a 1 on 1 type game. <br>2. The Ball will be of 3-inch size. <br>3. Robots will be placed in different half of the arena with a ball in the center of the arena. <br>4. Each team will try to score a goal by pushing the ball. <br>5. Team with greater number of goals win the match. <br>6. If the ball goes out of the arena it will be placed in the center and the match will resume. <br>7. In case a tie, 3 penalties will be given to each team. Match duration will be announced on the day of the event. <br><b>ROBOT SPECIFICATIONS:</b><br>1.  The owing size limitations apply for each robot, including whatever kick mechanisms the bot have: <br>Width – 300mm max <br>Length – 300mm max <br>Height – 250mm max <br>2. An error of (± 5%) is permitted. <br>3. The weight of the robot should not exceed more than 5 kg. <br>4. If the machine is wired then the wire should be of minimum 2 meters during the race . The wires should be properly insulated. Power should not be transmitted in any physical form from the operator to the robot. <br>5.  The machine must not be made from Lego parts, or any ready-made assembly kits <br>6. However, participants are allowed to use their own creativity for the kick mechanism. <br>7.  The robot can be powered by a source such as a battery fixed on the robot or by a stationary power source connected to the robot by a cord. <br>8. Participants should keep spare batteries, otherwise it may lead to disqualification, if the bot is not ready or stops in between the match. <br>9. The length of the wire (for wired bots) should be long enough to cover the whole arena and wire should remain slack during the complete game. <br><b>ARENA:</b><br>1. The arena is made up of wooden ply of dimensions 7 feet in length and 4 feet in width. <br>2. The arena has a 20 cm wide goal post on either side. <br>3. The arena is bounded from all sides. <br><b>RULES:</b><br>1.  Each team will have to defend the goal on its side as well as score the goal on the opposite side. <br>2. Each team can have a maximum of 4 team members. <br>3.  A team can make either one robot or at max, 2 robots (manually controlled) taking into consideration that the total weight of 1 or 2 robots, the controller and batteries should not exceed 5 kg. (This means that whatever components the participants enter on to the field should not be more than 5 kg.) <br>4. The game will start at the count of 3 given by referee followed by whistle. In case a team starts its robot before the whistle, the game will be restarted and a team making this mistake more than 3 times will be disqualified. <br>5.  The ball can be either dragged or pushed by the team. <br>6. A maximum of 2 members per team will be allowed to remain close to field for operating the robots. <br>7.  In case of a jam up of robots for more than 15 seconds the robots will have to kick-off again at the order of the referee. <br>8.  In case of any discrepancy the final decision rests in the hands of Referee. <br>9. Any act of misbehavior or misconduct will lead to immediate disqualification of the team. <br><br>Robots or participants that cause deliberate interference with other robots or damage to the arena will be disqualified.",
      descriptionDown: "",
    },
    // RUSTY WHEELS
    {
      id: 3,
      title: "RUSTY WHEELS",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 50000/-",
      firstposition: "INR 30000/-",
      secondposition: "INR 20000/-",
      thirdposition: "Goodies",
      teamsize: "Upto 4 Participants",
      descriptionUp:
        "The  event of fun where multiple teams come with their RC car which compete and has to traverse through a track full of turns and obstacles in the minimum possible time. A proper venue will be allotted for the event and with guidance of event head  proper rules and their implementation  will be carried out . It would be a wonderful experience for the participants as well as for the spectators and  thrilling moments will be captured for lifetime.",
      paragraph:
        "<b>GUIDELINES:</b><br><b>GAMEPLAY:</b><br>1. The robot will be placed at the start line. <br>2. The robot starts when the timer starts.<br>3. There are penalties for each obstacle skipped. Penalties will be added to the total time.<br>4. Scoring and penalties rules will be announced on the day of the event. <br><b>ROBOT SPECIFICATIONS:</b><br>1. The dimension of the bot should be less than or equal to 300mm X 250mm X 300mm (l x b x h), failing which the team will be disqualified from the competition. <br>2. An error of (± 5%) is permitted. <br>3. The machine must not be made from Lego parts, or any ready-made assembly kits, and it must be powered electrical by, use of IC engine is not allowed. <br>4. The robot can be powered by a power source such as a battery fixed on the robot or by a stationary power source connected to the robot by a cord. <br>5. Potential between any two points on the robot should not exceed 12 V. <br>6. Participants should keep spare batteries, otherwise it may lead to disqualification if bot is not ready or stops in between the race. <br>7. The length of the wire (for wired bots) should be long enough and the wire should remain slack during the complete race. <br><b>RACE TRACK:</b><br>1. There will be only one Start and one Finish line. <br>2. The track surface and course line may have unevenness. <br>3. There will be certain obstacles in the racetrack, which will try to slow down the robot. <br>4. The design and size of the track may vary from that shown in the pictures. <br>5. Track may consist of steep ramps, bridges, speed breakers, marble pit, slippery path, rotating disc, curve ramp down, seesaw etc. <br><b>RULES AND REGULATIONS:</b><br>1. A team can have a maximum of 3 members. <br>2. One team member is elected as the robot handler. <br>3. Only that team member is permitted to control the robot during the game. <br>4.  All other team members must remain outside the game zone. <br>5. Participants who misbehave may be asked to leave the competition area and risk being disqualified from the contest. <br>6.  Robots or participants that cause deliberate interference with other robots or damage to the arena will be disqualified. <br>7. All decisions about scoring, Game Play & timing, and participation, made by the The Organizing Committee is final. <br>",
      descriptionDown: "",
    },
    // DRONE DRAG
    {
      id: 4,
      title: "DRONE DRAG",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: " Upto 4 Participant",
      descriptionUp:
        "The  event of fun where multiple teams come with their RC car which compete and has to traverse through a track full of turns and obstacles in the minimum possible time. A proper venue will be allotted for the event and with guidance of event head  proper rules and their implementation  will be carried out . It would be a wonderful experience for the participants as well as for the spectators and  thrilling moments will be captured for lifetime.",
      paragraph:
        "The objective of the Drone Maze Challenges is to complete an obstacle course using a drone .The course is designed to simulate real - world scenarios where a drone operator must navigate obstacles to complete a mission.",
      descriptionDown: "",
    },
  ],

  // open category id=2
  [
    // PLACEMENT APTI
    {
      id: 0,
      title: "PLACEMENT APIT",
      date: "04/04/2024",
      time: "11:00AM - 11:30AM  ",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: " 1",
      descriptionUp:
        "Do you possess the confidence and skills to showcase your analytical mastery? Unleash your innate potential and exhibit your brilliance at Placement Apti, the ultimate platform to demonstrate your aptitude and reasoning skills. Join your like-minded individuals in a fierce competition to prove your mettle. Prepare yourself to tackle some amazing analytical problems that will put your intellect to the ultimate test!",
      paragraph:
        "<b>GENERAL RULES :</b><br>1. There will be one round only.<br>2. Individual Participation<br>3. Domain: Quantitative Aptitude, Reasoning, Maths.<br>4. Eligibility : Open for All<br><br>Teams will be given MCQ aptitude questions, 30 Mins will be given for Solving",
      descriptionDown: "",
    },
    {
      id: 0,
      title: "CSS BATTLE",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: " 1",
      descriptionUp:
        "Do you possess the confidence and skills to showcase your analytical mastery? Unleash your innate potential and exhibit your brilliance at Placement Apti, the ultimate platform to demonstrate your aptitude and reasoning skills. Join your like-minded individuals in a fierce competition to prove your mettle. Prepare yourself to tackle some amazing analytical problems that will put your intellect to the ultimate test!",
      paragraph:
        "<b>GENERAL RULES :</b><br>1. There will be one round only.<br>2. Individual Participation<br>3. Domain: Quantitative Aptitude, Reasoning, Maths.<br>4. Eligibility : Open for All<br><br>Teams will be given MCQ aptitude questions, 30 Mins will be given for Solving",
      descriptionDown: "",
    },
    // PHOTOGRAPHY
    {
      id: 3,
      title: "PHOTOGRAPHY",
      date: "04/04/2024",
      time: "Revealed Soon",
      prizeWorth: "INR 10000/-",
      firstposition: "INR 5000/-",
      secondposition: "INR 3000/-",
      thirdposition: "INR 2000/-",
      teamsize: " 1",
      descriptionUp:
        "This is your chance to showcase your talent and creativity behind the lens. Whether you are a beginner or a seasoned photographer, we welcome all students to participate and capture the essence of the moment. Paint your shot with an immersive story that captures the essence of the moment, and be in the running to win big and amazing prizes.",
      paragraph:
        "<b>RULES :</b><br>1. Themes are :<br>Symmetry & Abstract<br>Urban-Rural Life Photography<br>Day in the life of an Engineering Student<br>2. Register and Submit your entry on <a class='mail_link' href='mailto:technicalboard@aitpune.edu.in'>technicalboard@aitpune.edu.in</a> before 22nd April 11:50 PM<br>3. One person can give only one entry.<br>4. Every entry must have one photo in .psd or .jpg form along with a short essay (not more than 100 words) about the photo.<br>5. The minimum resolution of the pictures should be 1000 pixels on the shorter side.<br>6. Images should not exceed 16 MB in size.<br>7. The photo should not have been previously entered in any competition/exhibition.<br>8. Plagiarism should be strictly avoided and such photographs shall be immediately disqualified from the competition.<br>9. There should not be any watermarks, copyright marks on the picture.<br>10. Please limit your use of pre-edited images.<br>11.  Participant should be ready with the original image elements when asked upon by the organizers.<br>12. Judging criteria:<br>Relevance<br>Quality<br>Vista<br>Essay<br>13. Any violation of the rules will strictly lead to disqualification.",
      descriptionDown: "",
    },
    // MOVIE MAKING
    {
      id: 4,
      title: "MOVIE MAKING",
      date: "04/04/2024",
      time: "Revealed Soon",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: " 5-8 ",
      descriptionUp:
        "From concept to script, casting to directing, cinematography to editing, this event will put your ultimate cinematography skills to the test. Choose your genre and weave a captivating story that will keep everyone to stay on the edge of their seats. This is your chance to bring your creative vision to life on the big screen. So, grab your camera and get ready to create a masterpiece that leaves a lasting impression on everyone. Join us now and let your filmmaking skills shine and win some amazing prizes.",
      paragraph:
        "<b>GUIDELINES :</b><br>1. The Short Film should be original and any content from youtube or any other already available sources will lead to disqualification.<br>2. It should not have any kind of vulgar content or any content which can hurt the feelings of any community/person.<br>3. All the particpants involved in the process should be included in the credits along with their respective year and college.<br>4. Time limit is 8+6 minutes. Negative marking will be done if the time limit is exceeded or lagged (5 points deduction for every 5 seconds).<br>5. The participants have to submit their movie before 22nd April 11:50 PM to <a class='mail_link' href='mailto:ait.solutions2k23@gmail.com'>ait.solutions2k23@gmail.com</a><br>6. A copy of abstract describing the theme and story of the movie should be submitted. Failing to do so will lead to direct disqualification.<br>7. Changes in the pattern can be made with prior notice (minimum 2 days before the event) to the participants.<br>8. Themes are :<br>Gender Equity<br>Horror.<br>Lifestyle at Hostel<br>Science Fiction and Time Travel.<br>9. Recreation with some modification is allowed.",
      descriptionDown: "",
    },
    // SCHOOL MODEL MAKING
    {
      id: 5,
      title: "SCHOOL MODEL MAKING",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 10000/-",
      firstposition: "INR 5000/-",
      secondposition: "INR 3000/-",
      thirdposition: "INR 2000/-",
      teamsize: " 1",
      descriptionUp:
        "Bored of regular school projects and assignments ? Well say no more, presenting to you school model making competition. Here, you have to showcase your skills in making a working model for which points will be awarded. Compete with the best and gain astonishing ideas from the others as here everyone gains something new.",
      paragraph:
        "1. There are 2 phases:<br>Preparation Phase<br>Judging Phase<br>2. Participants will be given 2 hours for preparing their model after coming to college.<br>3. Participants will be judged by college faculty and will have to give a presentation to the judges.<br>4. Preparation phase will begin at 8:00 AM and judging phase will begin at 10:00 AM.",
      descriptionDown: "",
    },
    // HOW UNICORN
    {
      id: 6,
      title: "HOW UNICORN",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7500/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 2500/-",
      teamsize: "1-2",
      descriptionUp:
        "The “How Unicorn'' event is about how you validate your selected startup's valuation that has a huge cash burn and struggling to make profits. Participants have to analyse the fundamentals like marketing strategy, burn rate and cost of acquisition etc of the startup selected by them to find a unique solution and the steps participants will take to make it profitable and justify the current valuation.",
      paragraph:
        "<b>EVENT DETAILS:</b><br><br><b>Round 1 (Hybrid):</b><br>1. For AIT Participants, a quiz will be held in Manekshaw Hall on 21st April 2023 4 PM. <br>2. For Non-AIT participants, instructions will be shared on email. <br>3. Top 10 performers will be qualified for the second round. <br> <br> <br><b>Round 2 (Online):</b><br>1. Participants have to select a startup of their wish with a huge cash burn and struggling to make profit  <br>2. Do a complete analysis of that startup and think of unique strategies to justify the current valuation and make it profitable.<br>3. Your Presentation must include:<br>a. Problem Identified<br>b. Strategies you will implement.<br>c. How you will justify the current valuation<br>4. Second round will be held on 23 April 2023<br><br>You can select startups from below or you may select our own.<br> 1. Bharatpe<br>2. Paytm<br>3. Meesho<br>4. Udaan<br>5. Swiggy",
      descriptionDown: "",
    },
    // SOLID WORKS
    {
      id: 7,
      title: "SOLID WORKS",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 10000/-",
      firstposition: "INR 5000/-",
      secondposition: "INR 3000/-",
      thirdposition: "INR 2000/-",
      teamsize: " 1",
      descriptionUp:
        "If you are someone who loves designing or dreams to innovate some out-of-box utility one day, then this is the place for you.<br>SOLID-WORKS  aims at testing the designing and imaginative capability of the contestant. This a platform where the participant can show off all his CAD skills.<br>The participant will be required to create a 3D model of a given problem statement in the allotted time.<br>",
      paragraph:
        "<b>Description:</b><br>Time Allocated : 2 hrs<br>Round 2 will be followed by a 10 min explanation session with judges where the participants will have to explain the approach to the part/assembly modelled and will be judged accordingly.<br><br>Participants will be evaluated for following things:<br>1. Number of parts successfully modelled and assembled.<br>2.  Constraining of parts in the assembly.<br>3. Whether sub-assemblies were used and why.<br>4. Appropriateness of the constraints used for assembly.<br>5. Participants must create a word/pdf file illustrating different views of the assembly, exploded views of the assembly, dimensions and work history (Timeline) and save the files (Sldprt/Sldaslm files) with the proper name format for submission.<br><b>SUBMISSION GUIDELINES:</b><br>1. Participants are supposed to submit following files:<br>word/pdf file<br>Solid works file(Sldprt/Sldaslm)<br>2. Files should have the following name format for submission:<br>Qno_Team-name_round (i.e. Q2_alpha_round1.pdf and Q1_alpha_round2.sldprt here alpha is team name)<br>3. Participating teams have to mail their files(word/pdf and Solidworks files) in a single mail.<br>4. Finalist have to submit above mentioned file on <a class='mail_link' href='mailto:ait.solutions2k23@gmail.com'>ait.solutions2k23@gmail.com</a><br><br><b>RULES:</b><br>1. Any misbehaviour of a participant during event/rounds may lead to disqualification.<br>2. Absent participants will be automatically disqualified<br>3. All the rights are reserved with the Event Organizer committee.<br>4. In case of any disputes, final wording will remain with the organizers. Decision of the judges is final.<br>5. Only entries submitted within the specified deadline will be considered for evaluation.<br>6. Link for the meet will be provided via E-mail.",
      descriptionDown: "",
    },
  ],

  // machine learning category id=3
  [
    // PROJECT JUPYTER *
    {
      id: 0,
      title: "PROJECT JUPYTER",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 25000/-",
      firstposition: "INR 12000/-",
      secondposition: "INR 8000/-",
      thirdposition: "INR 5000/-",
      teamsize: " 1",
      descriptionUp:
        "Introducing an exciting AIML event where participants will be presented with a problem statement and tasked with building a model to solve it. This event is designed to challenge participants' knowledge and skills in Artificial Intelligence and Machine Learning. Participants will have the opportunity to apply various AI/ML techniques to build a model that can accurately solve the given problem. Get ready to showcase your AI/ML skills and compete against other talented individuals in this engaging and rewarding event!",
      paragraph:
        "Unleash the power of AIML with us as we get an stunning event for you where 'Mind meets the Machine'. The Technical Board of AIT feel amazed to present an exclusive AIML event this season for our 'constant learners'. <br><b>GENERAL GUIDELINES:</b><br>1. It's going to be an online competition with 1 track(1 problem statement)<br>2. Participants will be given a dataset and a period of 2 days will be given<br>3. The final decision lies in the hand of the organizing team<br><br><bold>Participate here, and stand a chance to win prizes worth INR 25,000+</bold>",
      descriptionDown: "",
    },
    // FLASH 500
    {
      id: 1,
      title: "FLASH 500",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: " 1",
      descriptionUp:
        "Are you a master storyteller with a knack for breaking the news? Do you have a wild imagination that could take readers on a exciting ride through a news story? Then buckle up! Pick a theme, find an AI generator, create a report.      With the help of AI text generators like ChatGPT, come up with a fictional news report on the given theme. To supplement the report, use AI text-to-image generators like Dall-E 2 and Stable Diffusion to generate a set of images.",
      paragraph:
        "<b>RULES:</b><br>1. Themes: <br>1.1 A dystopian future <br>1.2 Unexpectedly funny <br>1.3 New discoveries <br>2. One person can only submit one entry. <br>3. The report should not exceed 500 words in length. <br>4. There should be at least 2 images to accompany the report, upto a maximum of 4. <br>5. Edits on the generated images are allowed. <br>6. The entry must be a single PDF document, with all images and text inside. <br>7. The PDF document should not exceed 5 MB in size. <br>8. Entries which contain the following (in text or images) will be disqualified: <br>8.1 Realistic depiction of minors <br>8.2 Politically charged sentiments <br>8.3 Sexually suggestive and/or explicit content <br>8.4 Targeted harassment of any group <br>8.5 Debasement of real events <br>9. Judging criteria: <br>9.1 Interpretation of the theme <br>9.2 Originality of the idea <br>9.3 Quality of writing and believability of the report <br>9.4 Agreement of images with the report <br>10. Any violation of the rules will strictly lead to disqualification. <br><br>Submit your entry on <a class='mail_link' href='mailto:ait.solutions2k23@gmail.com'>ait.solutions2k23@gmail.com</a> before 22nd April 11:50 PM.",
      descriptionDown: "",
    },
  ],

  // game dev & cyber sec. category id=4
  [
    // IMAGINATE
    {
      id: 0,
      title: "IMAGINATE",
      date: "04/04/2024",
      time: "Begins-12:00AM",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: " 1",
      descriptionUp:
        "Reality can be whatever you want  if you're a 3D artist. It's time to polish your rendering skills by taking up this challenge. Participants will be provided with a prompt a day before the start of the event and will have the complete creative freedom to create a 3D scene on any platform.  An example prompt can be : Snowman eating ice cream on a beach  while it rains.<br>It's our prompt, interpreted your way. Get ingenious and flex your skills.",
      paragraph:
        "<b>PROMPT:</b><br>Being chased by an Army.<br><br><b>GUIDELINES:</b><br>1. Individual Participation <br>2. The event begins on 16th April 2023.<br>3. Prompt will be released at the start of the event.<br>4. It will be a 5-day event<br>5.  Participants are free to choose their software/platform<br>6. Participants are allowed to use online assets , textures, materials, etc. <br>7. The submission link will be provided through email.<br>8. Participants will be required to submit both project files and render.<br>9. Submissions will close on 21st April at 11:59 PM.<br><br>      <a class='mail_link' href='https://forms.gle/mP1tj9PHEZkT9G5y8'>Click here for submission</a>",
      descriptionDown: "",
    },
    // AR-CADE $$
    {
      id: 1,
      title: "AR-CADE",
      date: "04/04/2024",
      time: "Begins- 12:00 AM",
      prizeWorth: "INR 15000/-",
      firstposition: "INR 7000/-",
      secondposition: "INR 5000/-",
      thirdposition: "INR 3000/-",
      teamsize: " 1",
      descriptionUp:
        "Imagination should be used not to escape reality but to create it. GDXR Club presents to you a platform to showcase your skills by creating an AR app, filter or game that will revolve around a theme , which will be revealed at the start of the event. Participants can go crazy with their imagination and take a step forward in creating an artwork that is alive in itself.",
      paragraph:
        "<b>THEME :</b> <br>Science Fiction(SCI-FI)<br><br><b>GUIDELINES:</b><br>1. Individual Participation<br>2.  The event begins on 15th april 2023.<br>3. Theme will be released at the start of the event. <br>4. It will be a 7-day event<br>5. Participants are free to choose their software/platform<br>6. Participants are allowed to use online assets , textures, materials, etc.<br>7. The submission link will be provided through email.<br>8. Submissions will close on 22nd April at 11:50 PM.<br><br>        <a class='mail_link' href='https://forms.gle/4DRwG2znmNr5yLth6'>Click here for submission</a>",
      descriptionDown: "",
    },
  ],

  // gaming category id=5
  [
    // VALORANT **
    {
      id: 0,
      title: "VALORANT",
      date: "04/04/2024",
      time: "10:00AM-6:00PM",
      prizeWorth: "INR 20000/-",
      firstposition: "INR 9000/-",
      secondposition: "INR 6500/-",
      thirdposition: "INR 4500/-",
      teamsize: " 1",
      descriptionUp:
        "Have you been testing yourself and indulging a lot into the world of esports? Well here is a great opportunity to showcase your skills. Lead through the tournament with team efforts, coordination, precision aims and all the winning tactics that you can muster. Why wait, ready your consoles with proper accessories and a great internet connection. Compete with the best in various maps with your favourite character using flawless strategies and take home great memories along with a great prize money. Ready ? Register now !!!",
      paragraph:
        "<b>DEFINITIONs:</b><br>Participants: Players who have registered and verified by tournament’s organisers.<br>Squad: 5 Players from the same team, with one substitute on standby.<br>Game: All games will be knockout games. A knockout game has to be played between 2 teams, the one who wins will succeed further in the tournament.<br><br><b>GLOBAL RULES:</b><br><b>GENERAL</b><br>All decisions regarding the interpretation of the following rules lie exclusively with Riot, the decisions of which are final.<br><b>TOURNAMENT RULES</b><br>All participants of Valorant are required to abide by the following rules. Failure to adhere to the rules can result in warnings, fines, disqualification, or suspension from any future Solutions Valorant Tournaments, as deemed appropriate by Solutions 2k23 and/or its officials.The Tournament will consist of 5 days, registered teams will play knockout games from the beginning. The Tournament MVP will be based on his/her kill counts.<br><b><br>GENERAL RULES:</b><br>1. All players are allowed to have only one (1) account per person. <br>2. Team Leader should join this discord team voice channel 10 minutes before the game. <br>3. Every player should join the in-game custom room 15 minutes before the game. <br>4. All players must have 'Competitive mode unlocked on their accounts'.<br>5.After map selection team captains have to write that their team is ready in the lobby chat. The game should not start before that.<br><b>CODE OF CONDUCT:</b><br>All participants of Solutions 2k23 Valorant Tournament are required to abide by the following code of conduct. Failure to adhere to the code can result in warnings, fines, disqualification, or suspension from any future Solutions 2k23 Valorant Tournament, as deemed appropriate by Riot and/or its officials. (Refer to Disciplinary Action)<br><b>COMPETITIVE INTEGRITY:</b><br>All participants are always expected to play at their best within any match of Valorant in any tournaments conducted by AIT Technical Board. The following examples are a non-exhaustive list of offences:<br>1. Collusion - Participants who cooperate with others, including other competing participants to cheat or deceive and gain an unfair advantage are guilty of collusion. Acts of collusion include, but are not limited to:<br>Soft play - Any agreement among participants to not play at a reasonable or expected standard of competition in a game.<br>Receiving information and signals from outside sources during a match.<br>Deliberately losing any match for compensation.<br>Hacking - Any modification of the Riot Valorant, including using any 3rd party apps to grant in-game advantages.<br>Exploiting - Deliberate abuse of in-game bug to gain an advantage.<br>Smurfing - Using another player or participants account<br>Multi-Accounts - a participant registered using multi Valorant account.<br>Intentional disconnect without any officials approval.<br>Deception - Any attempt to deceive tournament officials or other players with false statements/information / documents.<br><b>SPORTMANSHIP AND PROPER BEHAVIOUR</b><br>1. Participants must behave with respect towards the representatives of Solutions 2k23, partners, and other players.<bbr>2. Participants may not use language that is obscene, vulgar, insulting, abusive, libellous, defamatory, or otherwise offensive or objectionable in or near match area. This includes but is not limited to in-game chat and social media<br>3.For disputes over tournament matters - e.g. mishandling of tournament, match scores, verbal abuse, participants should always approach tournament officials within 5 days from the day of the occurrence. Fixtures will be uploaded prior to the day of the match.<br>4. .Participants are expected to be cooperative with Solutions 2k23 in an investigation for any violation of these rules.<br>5. Abuse towards Solutions 2k23 officials or other participants will not be tolerated. Repeated violations, including but not limited to verbal abuse will result in infraction point penalties.<br>6. Participants and their guests (if any) must treat all individuals attending a match with respect.<br><b>DICRIMINATION AND DENIGRATION</b><br>Competitors shall not offend the dignity or integrity of a country, private person, or group of people through contemptuous or discriminatory words or actions based on race, ethnicity, national origin, social origin, gender, language, religion, political opinion, financial status, birth status, sexual orientation, or any other reason.<br>Offenders may be immediately disqualified, have up to half of their monetary winnings forfeited, or both above.<br><b>CONCLUDING THE COMPETITION</b><br>Upon initiating participation in a Competition, Teams and Competitors shall continue to participate in the Competition to its conclusion. Teams and Competitors shall not refuse to participate in the tournament for any reason including, without limitation, disagreement with a decision by Solutions 2k23 officials, an accusation of competitive integrity of the tournament, or imperfect playing conditions.<br>Offenders may have to forfeit the entirety of their monetary winnings from Solutions 2k23 events, be banned from future Solutions 2k23 events, or both above.<br><br><b>USE OF PARTICIPANTS IMAGE AND MEDIA</b><br>By joining any tournaments organised by the Solutions 2k23 team, all teams and participants will allow Solutions, 2k23 officials, to use their image (team logos, participant photos.) in promotional materials. <br><br><b>FORMAT</b><br>1. There will be a map pool of 7 maps named Ascent, Fracture, Haven, Icebox, Lotus, Pearl, Split<br>2. In the knockout matches other than Finals only 1 map game will be played and both competing teams will be asked to ban 3-3 maps each at the time of the game.<br>3. For the Finals, both competing teams will ban 2-2 maps each and then the game will be played on the rest of the 3 maps.<br>4. The banning of maps and picking the side( attacking or defensive side to start with) will be conducted on the 'banmap.gg' site to maintain the transparency.<br> Leaders of both the competing teams will be given the links by the moderator of the respective match.<br>5. The game format will be the same as the ranked games.<br>6. 2 Tactical Pause will be allowed for each team per game.<br><br><b>NETWORK</b><br>Each individual participant should use their own Wi-Fi network or mobile network.<br><b>DISCONNETIONS</b><br>Participants are not allowed to intentionally cause a disconnection during a game. Offenders will incur one infraction point.<br>If a participant is disconnected due to network issues, they are allowed to reconnect back to the game while the match is still ongoing. Participants are not allowed to request for a pause or a remake due to a disconnection.<br>However, Solutions 2k23 officials may consider a remake, at their sole discretion, under one of the following conditions:Game server failure - all players are unable to reconnect<br><b>HIGH PING</b><br>If a participant is competing using his/her own network connection, the participant is solely responsible for the quality of his/her internet connection. Participants are not allowed to request for a pause or a remake due to high ping or poor network conditions.<br>Rule Violation A Player and/or his team will be subjected to disciplinary actions for violation of the Code of Conduct and Tournament Rules. Disciplinary action can range from a warning, penalty points, fines, up to ban from Solutions 2k23 Valorant Tournaments.",
      descriptionDown: "",
    },
    // CLASH ROYAL
    {
      id: 1,
      date: "Revealed Soon",
      time: "Revealed Soon",
      time: "10:00AM to 11:00PM",
      prizeWorth: "INR 10000/-",
      firstposition: "INR 5000/-",
      secondposition: "INR 3000/-",
      thirdposition: "INR 2000/-",
      teamsize: " 1",
      descriptionUp:
        "Great in strategic play ? Then you just landed at the right spot. Get ready with your cards to play with the right use of your elixir. Planting a bomb tower there? Maybe an inferno tower will do the trick. The ultimate goal, to bombard all the towers with all the characters you can play. Simple 1 v 1 with one winner at the end. Become a maniac with your favourites and claim the win.",
      paragraph:
        "<b>RULES:</b><br>1. All the players who registered for the event will be invited to join either a WhatsApp group or a Discord server.<br>2. One hour prior to the start time of the tournament, players will be provided with the tournament id and password.<br>3. All of them should join the tournament and wait for the tournament to begin.<br>4. Failing to join the tournament will lead to disqualification.<br>5. The tournament will last for 1 hour. In this 1 hour, players should try to win a minimum number of 3 battles in which if they win they’ll be rewarded with points.<br>6. Players should be active during the tournament to ensure that they play as many matches as they want.<br>7. Players should ensure a reliable connection, dealing with any network issues is their responsibility.<br>8. If a player exited the tournament due to any reason, and he wants to join again then his previously scored points won’t be considered i.e. he should start from the beginning.<br>9. The results will be based on the final leaderboard of the tournament. In case there are players having the same position/rank, there will be a tiebreaker, most probably another tournament.<br>10. Number of rooms will be decided on the number of participants. Winners will then be decided upon number of wins and number of stars.<br><b>GAME SETTING:</b><br>1. Game mode : Normal Battle(1v1)<br>2. Level Cap : 11",
      descriptionDown: "",
    },
  ],
  [
    {
      id: 0,
      title: "ByPass CTF",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 30000/-",
      firstposition: "INR 15000/-",
      secondposition: "INR 10000/-",
      thirdposition: "INR 5000/-",
      teamsize: " Individual Participation",
      descriptionUp: "",
      paragraph:
        "<b>RULES:</b><br>1. CTF will be “Jeopardy” Style. Teams or individuals compete to solve challenges and earn points.<br>2. Challenges: There will be a variety of challenges with varying difficulty levels.<br> 3. Each challenge will have a flag with the format CTF{ }.<br>4. Time limit : CTF event duration will be 36 hours starting from 12pm ,05 April 2024 to 12 am ,07 April 2024.<br> 5. Only registered players can participate in the event.<br> 6. A maximum of 2 players per team.<br> 7. Multiple logins will lead to disqualification.<br> 8. Flag sharing or seeking outside human help will lead to disqualification.<br> 9. Posting of the CTF questions during the event on public forums is prohibited.<br> <br> <b>Judging Criteria:</b> 1. Team with the most points at the end of 36hrs event wins.<br> 2. In case of tie,<br> 3. i.TB1 : time taken to solve challenges will be taken. <br> ii.TB2: total number of first bloods.",
      descriptionDown: "",
    },
    {
      id: 1,
      title: "CRACKHUNT",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 30000/-",
      firstposition: "INR 15000/-",
      secondposition: "INR 10000/-",
      thirdposition: "INR 5000/-",
      teamsize: " Individual Participation",
      descriptionUp:
        "Crackhunt is a one of a kind Cybersecurity based Gaming event organized by the ISDF Club at AIT.",
      paragraph:
        "<b>RULES:</b><br>1.If any player is found violating any of the below rules, he/she will be disqualified:<br> 2. The duration of the event is 3 hours, from 1000 hours to 1300 hours on 5th of April. Any levels done outside this window will not be counted.<br> 3. Attacking the servers in any kind - DDoS attacks, scripting attacks etc. will lead to immediate disqualification.<br> 4. Sharing of puzzle answers is not allowed.<br> 5. Multiple logins for the same ID will lead to disqualification.<br> 6. Posting the puzzles and levels on public forums, messaging boards etc. is not allowed.<br> 7.Use of LLMs and AI tools is not allowed.<br> 8.In case of any query or doubts, please contact the organizing team.",
      descriptionDown: "",
    },
    {
      id: 2,
      title: "CYBERSECURITY QUIZ",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 30000/-",
      firstposition: "INR 15000/-",
      secondposition: "INR 10000/-",
      thirdposition: "INR 5000/-",
      teamsize: " Individual Participation",
      descriptionUp:
        "Test your knowledge in a 30-minute online quiz covering various aspects of cybersecurity. Get ready to challenge yourself and learn more about staying safe in the digital world!",
      paragraph: "",
      descriptionDown: "",
    },
  ],
  [
    {
      id: 0,
      title: "E-THON",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 30000/-",
      firstposition: "INR 15000/-",
      secondposition: "INR 10000/-",
      thirdposition: "INR 5000/-",
      teamsize: " Individual Participation",
      descriptionUp: "",
      paragraph:
        "<b>RULES:</b><br>1. Ethon is a two-round event, encompassing Ist online round and IInd offline round.<br>2. A mandatory team of 2 people is required for participation.<br>3. Participants will receive five themes (problem statements) for their PPT and must devise and implement their own solutions, condensing their ideas into a maximum of 6 slides.<br>4. In the first round, PPT submissions are to be emailed to the mail id : evclub2019@gmail.com ( by 31st March, 11:59 PM)<br>5. Qualifying teams will be invited for offline PPT presentations.<br> 6. Each presentation is limited to a maximum of 10 minutes.<br> 7. Evaluation criteria include marks for innovation, uniqueness, ease of implementation, and the quality of the presentation.",
      descriptionDown: "",
    },
    {
      id: 1,
      title: "CIRCUITCRAFT",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 30000/-",
      firstposition: "INR 15000/-",
      secondposition: "INR 10000/-",
      thirdposition: "INR 5000/-",
      teamsize: " Individual Participation",
      descriptionUp: "",
      paragraph:
        "<b>RULES:</b><br>1. This will be an offline event (Solo Participation).<br>2. Participants will be provided with an EV with all the required components.<br>3. They are required to assemble all the components correctly without damaging it.<br>4. At the end, the EV should function properly.<br>5. Participants will work under a timer.<br>6. Marks will be awarded for best timing, correct connections, extra connections like horn and headlight will provide extra marks.",
      descriptionDown: "",
    },
    {
      id: 2,
      title: "ETHON",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 30000/-",
      firstposition: "INR 15000/-",
      secondposition: "INR 10000/-",
      thirdposition: "INR 5000/-",
      teamsize: " Individual Participation",
      descriptionUp: "",
      paragraph:
        "<b>RULES:</b><br>1. This will be an offline event (Solo participation).<br>2. Total time provided: 40 minutes.<br>3. Participants will be provided with 5 circuit problems, describing its output.<br>4. You have to Design the circuit using necessary symbols on the Answer sheet.<br>5. Marks will be awarded for accuracy, clean design, correct component symbols.",
      descriptionDown: "",
    },
    {
      id: 3,
      title: "CURRENTCLASH",
      date: "Revealed Soon",
      time: "Revealed Soon",
      prizeWorth: "INR 30000/-",
      firstposition: "INR 15000/-",
      secondposition: "INR 10000/-",
      thirdposition: "INR 5000/-",
      teamsize: " Individual Participation",
      descriptionUp: "",
      paragraph:
        "<b>RULES:</b><br>1. This offline event involves teams of up to 3 people (max) and 2 people (min).<br>2. Half an hour before the event, teams will receive randomly assigned topics related to electric vehicles (EVs) and associated domains.<br>3. Two teams will take the stage simultaneously, each tackling clashing topics (e.g., Li-ion battery vs. Sodium-ion battery).<br>4. Teams have a maximum of 10 minutes to articulate their insights on the assigned topic.<br>5. After both teams present, a 5-minute debate ensues where they explain why their chosen product is superior to the other.<br>6. Judges have the opportunity to ask teams questions.<br>7. Marks will be awarded based on points covered, correctness of details mentioned, and the accuracy of replies during the debate.",
      descriptionDown: "",
    },
  ],
];
//------NO change under this
const event_links = [
  // coding category id=0
  [["SHORTEST CODE"], ["SHE CODE"], ["CSS BATTLE"]],

  // robotics category id=1
  [
    ["MAZE RUNNER"],
    ["ROBO CLENCH"],
    ["ROBO SOCCER"],
    ["RUSTY WHEELS"],
    ["DRONE DRAG"],
  ],

  // open category id=2
  [
    ["PLACEMENT APTI"],
    ["PHOTOGRAPHY"],
    ["CSS BATTLE"]["MOVIE MAKING"],
    ["SCHOOL MODEL MAKING"],
    ["HOW UNICORN"],
    ["SOLID WORKS"],
  ],

  // machine learning category id=3
  [["PROJECT JUPYTER"], ["FLASH 500"]],

  // game dev & cyber sec. category id=4
  [["IMAGINATE"], ["AR-CADE"]],

  // gaming category id=5
  [["VALORANT"], ["BGMI"]],
  // cyber security events id =  6;
  [["BYPASS CTF"], ["CRACKHUNT"], ["CYBERSCURITY QUIZ"]],

  // ev events id = 7
  [["ETHON"], ["DRIVE LINK"], ["CIRCUITCRAFT"], ["CURRENTCLASH"]],
];

export { events, event_links };
