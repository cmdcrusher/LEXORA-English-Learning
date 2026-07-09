const dailyLife = [
    {
        id: 1,
        category: "daily-life",

        level: "A2",
        difficulty: "easy",

        title: "My Morning Routine",
        description: "Learn about Anna's daily habits and morning routine.",

        xp: 20,
        locked: false,

        text: `Anna is a sixteen-year-old student who likes to start her day early. Every weekday, she wakes up at 7:00 a.m. when her alarm clock rings. She gets out of bed, opens the window, and takes a deep breath of fresh air. After that, she makes her bed because she believes that a tidy room helps her feel organized.

            Next, Anna goes to the bathroom to brush her teeth, wash her face, and brush her hair. She usually spends about fifteen minutes getting ready. Then she goes to the kitchen to have breakfast with her parents. Her favorite breakfast is a bowl of oatmeal with bananas and a cup of hot tea.

            After breakfast, Anna checks her school timetable and packs her backpack. She always makes sure that she has all her books, notebooks, and pencils. Before leaving home, she spends a few minutes reading the news on her phone or replying to messages from her friends.

            Anna leaves her house at 7:50 a.m. The bus stop is only five minutes away, so she never has to hurry. During the bus ride, she usually listens to music or reads a short article in English. She arrives at school at about 8:20 a.m., feeling calm and ready for the day.

            Anna thinks that having a good morning routine is very important. It helps her stay healthy, organized, and prepared for school every day.`,

        questions: [
            {
                question: "How old is Anna?",
                options: [
                    "14 years old",
                    "15 years old",
                    "16 years old",
                    "17 years old"
                ],
                correct: 2,
                explanation: "The text states that Anna is a sixteen-year-old student."
            },
            {
                question: "What time does Anna wake up?",
                options: [
                    "6:00 a.m.",
                    "7:00 a.m.",
                    "8:00 a.m.",
                    "9:00 a.m."
                ],
                correct: 1,
                explanation: "The first paragraph says Anna wakes up at 7:00 a.m."
            },
            {
                question: "What does Anna do right after opening the window?",
                options: [
                    "Gets dressed",
                    "Checks her phone",
                    "Takes a deep breath of fresh air",
                    "Eats breakfast"
                ],
                correct: 2,
                explanation: "The text directly says she opens the window and takes a deep breath of fresh air."
            },
            {
                question: "What is Anna's favorite breakfast?",
                options: [
                    "Toast and coffee",
                    "Oatmeal with bananas and tea",
                    "Eggs and juice",
                    "Pancakes"
                ],
                correct: 1,
                explanation: "The passage says her favorite breakfast is oatmeal with bananas and a cup of hot tea."
            },
            {
                question: "What does Anna check after breakfast?",
                options: [
                    "The weather",
                    "Her messages",
                    "Her school timetable",
                    "The bus schedule"
                ],
                correct: 2,
                explanation: "After breakfast, Anna checks her school timetable."
            },
            {
                question: "How far is the bus stop from Anna's house?",
                options: [
                    "Five minutes away",
                    "Ten minutes away",
                    "Fifteen minutes away",
                    "Twenty minutes away"
                ],
                correct: 0,
                explanation: "The text says the bus stop is only five minutes away."
            },
            {
                question: "What does Anna often do on the bus?",
                options: [
                    "Sleep",
                    "Talk on the phone",
                    "Listen to music or read",
                    "Do homework"
                ],
                correct: 2,
                explanation: "She usually listens to music or reads a short article in English."
            },
            {
                question: "What time does Anna arrive at school?",
                options: [
                    "8:00 a.m.",
                    "8:10 a.m.",
                    "8:20 a.m.",
                    "8:30 a.m."
                ],
                correct: 2,
                explanation: "The fourth paragraph says she arrives at about 8:20 a.m."
            },
            {
                question: "Why does Anna make her bed?",
                options: [
                    "Because her parents ask her to",
                    "Because it helps her feel organized",
                    "Because she likes cleaning",
                    "Because she has guests"
                ],
                correct: 1,
                explanation: "The text explains that Anna believes a tidy room helps her feel organized."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Anna dislikes mornings.",
                    "Anna has a healthy and organized morning routine.",
                    "Anna wants to change schools.",
                    "Anna spends all morning studying."
                ],
                correct: 1,
                explanation: "The text describes Anna's daily morning routine and how it helps her stay organized."
            }
        ]
    },

    {
        id: 2,
        category: "daily-life",

        level: "A2",
        difficulty: "easy",

        title: "A Busy Monday",
        description: "Follow Tom through his busy Monday at school and after classes.",

        xp: 20,
        locked: false,

        text: `Tom is fifteen years old, and Mondays are always his busiest days. His alarm clock rings at 6:45 a.m., and he gets out of bed a few minutes later. After washing his face and brushing his teeth, he gets dressed and goes downstairs for breakfast. His mother makes scrambled eggs and toast, while his father drinks coffee and reads the newspaper.

            Before leaving home, Tom carefully checks his school bag. On Mondays, he has English, Mathematics, Science, History, and Physical Education. He makes sure he has every book, notebook, and pen that he needs. At 7:35 a.m., he leaves home and rides his bicycle to school. The ride takes about fifteen minutes because the roads are usually quiet in the morning.

            School begins at 8:00 a.m. Tom's favorite lesson is English because he enjoys learning new vocabulary and reading short stories. Mathematics is more difficult, but his teacher always explains everything clearly. Tom is not afraid to ask questions when he needs help.

            After school, Tom stays for basketball practice. Training starts at 3:30 p.m. and finishes at 5:00 p.m. Sometimes the exercises are difficult, but Tom enjoys playing with his teammates. His mother picks him up after practice, and together they drive home.

            In the evening, Tom has dinner with his family before starting his homework. When he finishes studying, he packs his school bag for Tuesday and reads a few pages of his favorite adventure book. He goes to bed at 10:00 p.m. Although Mondays are busy, Tom enjoys them because every part of his day helps him learn something new.`,

        questions: [
            {
                question: "How does Tom usually travel to school?",
                options: [
                    "By bus",
                    "By bicycle",
                    "On foot",
                    "By train"
                ],
                correct: 1,
                explanation: "The text says that Tom rides his bicycle to school every Monday."
            },
            {
                question: "Which subject does Tom enjoy the most?",
                options: [
                    "Science",
                    "History",
                    "English",
                    "Mathematics"
                ],
                correct: 2,
                explanation: "English is Tom's favorite subject because he likes learning new words and reading stories."
            },
            {
                question: "Why does Tom check his school bag before leaving?",
                options: [
                    "To clean it",
                    "To make sure he has everything he needs",
                    "To find his lunch",
                    "To charge his laptop"
                ],
                correct: 1,
                explanation: "Tom checks that all his books, notebooks, and pens are in his bag."
            },
            {
                question: "Why is Tom not worried about Mathematics?",
                options: [
                    "Because he never studies it",
                    "Because it is very easy",
                    "Because his teacher explains things clearly",
                    "Because he skips the lessons"
                ],
                correct: 2,
                explanation: "The text explains that his teacher helps him understand difficult topics."
            },
            {
                question: "When does basketball practice finish?",
                options: [
                    "3:30 p.m.",
                    "4:30 p.m.",
                    "5:00 p.m.",
                    "5:30 p.m."
                ],
                correct: 2,
                explanation: "Basketball practice finishes at 5:00 p.m."
            },
            {
                question: "Who takes Tom home after basketball practice?",
                options: [
                    "His father",
                    "His coach",
                    "His friend",
                    "His mother"
                ],
                correct: 3,
                explanation: "His mother picks him up after practice."
            },
            {
                question: "What does Tom do after finishing his homework?",
                options: [
                    "He watches television",
                    "He prepares for the next school day and reads",
                    "He goes back outside",
                    "He plays basketball again"
                ],
                correct: 1,
                explanation: "After homework, Tom packs his school bag for Tuesday and reads his adventure book."
            },
            {
                question: "Why does Tom enjoy Mondays?",
                options: [
                    "Because he has fewer lessons",
                    "Because he can sleep longer",
                    "Because every part of the day helps him learn something new",
                    "Because he does not have homework"
                ],
                correct: 2,
                explanation: "The last sentence explains why Tom likes Mondays."
            },
            {
                question: "Which activity happens BEFORE Tom goes to basketball practice?",
                options: [
                    "Reading his book",
                    "Having dinner",
                    "Attending school lessons",
                    "Packing his school bag for Tuesday"
                ],
                correct: 2,
                explanation: "Basketball practice takes place after the school day ends."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Tom has a busy schedule but enjoys his productive Mondays.",
                    "Tom wants to stop playing basketball.",
                    "Tom dislikes school because it is difficult.",
                    "Tom spends all day studying at home."
                ],
                correct: 0,
                explanation: "The story describes Tom's full Monday and shows that he enjoys staying active and learning."
            }
        ]
    },

    {
        id: 3,
        category: "daily-life",

        level: "A2+",
        difficulty: "medium",

        title: "Cooking Dinner Together",
        description: "Emily and her brother prepare dinner while learning the importance of teamwork.",

        xp: 30,
        locked: false,

        text: `Emily is sixteen years old and enjoys helping her family at home. Every Friday evening, she cooks dinner with her older brother, Jack, while their parents finish work. They have been doing this for almost a year because they want to become more independent and learn useful life skills.

            This Friday, they decide to prepare spaghetti with grilled chicken and a fresh salad. Before they begin, Emily checks the kitchen cupboards and the refrigerator. She notices that they already have pasta, tomatoes, onions, olive oil, and spices, but they still need lettuce, cucumbers, cheese, and chicken. Jack offers to go to the supermarket while Emily stays home to wash the vegetables and organize everything they will need.

            When Jack returns, they start cooking together. Emily carefully cuts the vegetables while Jack seasons the chicken and places it in a frying pan. As the chicken cooks, Emily prepares the salad and Jack makes the tomato sauce. They often ask each other for help because working together makes everything easier and faster.

            About forty-five minutes later, dinner is ready. Just as they finish setting the table, their parents arrive home. They are surprised to see such a delicious meal waiting for them. During dinner, everyone talks about their day, laughs together, and enjoys the food.

            After the meal, Jack begins washing the dishes while Emily dries them and puts everything back into the cupboards. Although both of them are a little tired, they feel proud of what they have achieved together. Emily realizes that cooking is not only about making food—it is also about planning, sharing responsibilities, and spending quality time with the people you love.`,

        questions: [
            {
                question: "Why do Emily and Jack cook dinner every Friday?",
                options: [
                    "Because their parents ask them to.",
                    "Because they want to become more independent and learn useful skills.",
                    "Because they don't like restaurants.",
                    "Because they are studying cooking at school."
                ],
                correct: 1,
                explanation: "The first paragraph explains that they cook together to become more independent and learn life skills."
            },
            {
                question: "Why does Jack go to the supermarket?",
                options: [
                    "To buy dessert.",
                    "To buy ingredients they don't have.",
                    "To meet his friends.",
                    "To return a shopping cart."
                ],
                correct: 1,
                explanation: "Emily checks the kitchen first, then Jack buys the missing ingredients."
            },
            {
                question: "What is Emily doing while Jack is shopping?",
                options: [
                    "Watching TV.",
                    "Preparing vegetables and organizing the kitchen.",
                    "Doing homework.",
                    "Cooking the chicken."
                ],
                correct: 1,
                explanation: "Emily stays home to wash the vegetables and prepare everything."
            },
            {
                question: "Why do Emily and Jack often ask each other for help?",
                options: [
                    "Because neither of them can cook.",
                    "Because working together is faster and easier.",
                    "Because they forget the recipe.",
                    "Because their parents tell them to."
                ],
                correct: 1,
                explanation: "The passage directly says teamwork makes cooking easier and faster."
            },
            {
                question: "When do Emily's parents arrive home?",
                options: [
                    "Before they start cooking.",
                    "While Jack is shopping.",
                    "Just after dinner.",
                    "As Emily and Jack finish preparing the table."
                ],
                correct: 3,
                explanation: "The timing is important: dinner is ready, they set the table, and then their parents arrive."
            },
            {
                question: "Which task does Jack do after dinner?",
                options: [
                    "He dries the dishes.",
                    "He washes the dishes.",
                    "He cleans the living room.",
                    "He prepares dessert."
                ],
                correct: 1,
                explanation: "Jack washes the dishes while Emily dries them."
            },
            {
                question: "Which sentence best describes Emily and Jack's teamwork?",
                options: [
                    "Emily does almost everything herself.",
                    "Jack cooks while Emily watches.",
                    "They divide the work and help each other whenever necessary.",
                    "Their parents prepare most of the meal."
                ],
                correct: 2,
                explanation: "Throughout the text, both siblings share responsibilities."
            },
            {
                question: "Why do Emily and Jack feel proud at the end of the story?",
                options: [
                    "They cooked quickly.",
                    "They received money from their parents.",
                    "They successfully prepared a meal together.",
                    "They bought expensive food."
                ],
                correct: 2,
                explanation: "Their feeling of pride comes from successfully working together."
            },
            {
                question: "What lesson does Emily learn by the end of the story?",
                options: [
                    "Cooking should always be done alone.",
                    "Recipes are difficult to follow.",
                    "Cooking is about teamwork as well as preparing food.",
                    "Restaurants are more convenient."
                ],
                correct: 2,
                explanation: "Emily realizes that cooking also means planning, sharing responsibilities, and spending time together."
            },
            {
                question: "Which title best matches the story?",
                options: [
                    "A Family Picnic",
                    "Working Together in the Kitchen",
                    "A Visit to the Supermarket",
                    "Learning at School"
                ],
                correct: 1,
                explanation: "The entire passage focuses on teamwork while preparing dinner."
            }
        ]
    },

    {
        id: 4,
        category: "daily-life",

        level: "B1",
        difficulty: "medium",

        title: "My First Day at a New School",
        description: "Liam starts at a new school and discovers that new beginnings can be exciting.",

        xp: 35,
        locked: false,

        text: `Liam had never imagined how difficult it could be to start over in a completely new place. During the summer, his family moved to another city after his mother accepted a new job. Although Liam understood why they had to move, he was sad to leave his old school and his closest friends behind.

            On Monday morning, Liam woke up earlier than usual. He carefully put on his new school uniform, packed his backpack one last time, and ate breakfast with his parents. His father noticed that Liam was unusually quiet and reminded him that everyone feels nervous on the first day somewhere new.

            When they arrived at the school, one of the teachers greeted Liam with a warm smile and offered to show him around. They visited the library, the science labs, the sports hall, and the cafeteria. Everything seemed much larger than his previous school, and Liam worried that he might get lost.

            During his first English lesson, the teacher introduced Liam to the class. His hands felt cold as everyone looked at him, but several students smiled kindly. At lunchtime, a boy named Noah invited Liam to sit with him and his friends. They talked about football, music, video games, and their favorite school subjects. Liam slowly realized that they had many interests in common.

            In the afternoon, the class worked together on an art project. Liam enjoyed drawing, so he quickly became involved in the activity. Noah even asked if Liam would like to join the school's football team the following week.

            By the time Liam arrived home, he was smiling. He told his parents about the new friends he had met and everything he had experienced during the day. Although he had been nervous in the morning, he now felt much more confident about starting this new chapter of his life.`,

        questions: [
            {
                question: "Why did Liam's family move to another city?",
                options: [
                    "His father found a new job.",
                    "His mother accepted a new job.",
                    "Liam wanted a different school.",
                    "They wanted to live closer to relatives."
                ],
                correct: 1,
                explanation: "The text explains that Liam's mother accepted a new job in another city."
            },
            {
                question: "How did Liam feel before arriving at school?",
                options: [
                    "Relaxed and excited.",
                    "Angry about moving.",
                    "Nervous about meeting new people.",
                    "Confident because he already knew everyone."
                ],
                correct: 2,
                explanation: "Several parts of the text show that Liam felt nervous before his first day."
            },
            {
                question: "Why did Liam think he might get lost?",
                options: [
                    "He forgot the school map.",
                    "The school was much bigger than his old one.",
                    "The teacher left him alone.",
                    "The classrooms had no numbers."
                ],
                correct: 1,
                explanation: "While touring the school, Liam noticed that it was much larger than his previous school."
            },
            {
                question: "What helped Liam begin to feel more comfortable during lunch?",
                options: [
                    "He found his old classmates.",
                    "He sat alone and read a book.",
                    "Noah invited him to join his group.",
                    "His parents visited the school."
                ],
                correct: 2,
                explanation: "Noah's invitation helped Liam make his first friends."
            },
            {
                question: "What did Liam and the other students discover?",
                options: [
                    "They all lived nearby.",
                    "They had many common interests.",
                    "They wanted to change schools.",
                    "They disliked sports."
                ],
                correct: 1,
                explanation: "They talked about football, music, games, and school subjects, realizing they shared many interests."
            },
            {
                question: "Why did Liam enjoy the afternoon art lesson?",
                options: [
                    "It finished early.",
                    "He enjoys drawing.",
                    "There was no homework.",
                    "His parents joined the class."
                ],
                correct: 1,
                explanation: "The passage states that Liam enjoys drawing."
            },
            {
                question: "What does Noah's invitation to the football team suggest?",
                options: [
                    "Noah wanted to be polite only.",
                    "Noah thought Liam would be a good teammate.",
                    "The football team needed more players immediately.",
                    "The teacher asked Noah to invite him."
                ],
                correct: 1,
                explanation: "Although not stated directly, Noah's invitation suggests he liked Liam and wanted him to join the group."
            },
            {
                question: "How did Liam's feelings change throughout the day?",
                options: [
                    "From confident to nervous.",
                    "From bored to angry.",
                    "From nervous to confident.",
                    "He felt the same all day."
                ],
                correct: 2,
                explanation: "At the beginning Liam was nervous, but by the end of the day he felt much more confident."
            },
            {
                question: "Which sentence best describes the main message of the story?",
                options: [
                    "Moving to a new city is always easy.",
                    "Making new friends can help you feel at home.",
                    "School is only about studying.",
                    "Football is the best way to make friends."
                ],
                correct: 1,
                explanation: "The story shows that kindness and friendship helped Liam adapt to his new school."
            },
            {
                question: "Why is the title 'My First Day at a New School' appropriate?",
                options: [
                    "Because the story focuses on Liam's experience of adapting to a new environment.",
                    "Because Liam changes schools every year.",
                    "Because the story is mainly about football.",
                    "Because the school is brand new."
                ],
                correct: 0,
                explanation: "The entire passage follows Liam's emotions and experiences during his first day in a new school."
            }
        ]
    },

    {
        id: 5,
        category: "daily-life",

        level: "B1",
        difficulty: "hard",

        title: "A Trip to the Supermarket",
        description: "Sophie discovers that shopping is about much more than simply buying food.",

        xp: 40,
        locked: false,

        text: `Every Saturday morning, Sophie and her father go shopping for groceries. It has become one of their family traditions, and Sophie always looks forward to it. Her father believes that learning how to shop wisely is an important life skill, so instead of doing everything himself, he encourages Sophie to make many of the decisions.

            Before leaving home, they sit at the kitchen table and prepare a shopping list together. They check the refrigerator and cupboards to see what is running out. Sophie notices that they still have plenty of pasta and rice, but there are very few vegetables left. She also remembers that her younger brother asked for yogurt for his school lunches.

            At the supermarket, Sophie's father gives her the shopping list and asks her to lead the way. They begin in the fruit and vegetable section, where Sophie carefully compares different apples before choosing the freshest ones. She also checks the prices because her father has explained that good shoppers think about both quality and cost.

            Later, they visit the bakery and the dairy section. Sophie notices her favorite breakfast cereal with a large red sign that says "30% OFF." She wants to put two boxes into the cart, but after looking at the shopping list, she realizes that they already have one unopened box at home. Instead, she decides to buy only one. Her father smiles and tells her that making thoughtful choices is often more important than buying everything you want.

            When they arrive at the checkout, Sophie helps pack the groceries into reusable bags. As they leave the supermarket, her father thanks her for being responsible. Sophie realizes that shopping is not only about spending money—it is about planning ahead, avoiding waste, and making smart decisions for the whole family.`,

        questions: [
            {
                question: "Why does Sophie's father encourage her to make decisions while shopping?",
                options: [
                    "Because he is usually too busy.",
                    "Because he wants her to learn an important life skill.",
                    "Because he forgets what to buy.",
                    "Because he doesn't enjoy shopping."
                ],
                correct: 1,
                explanation: "The first paragraph explains that Sophie's father wants her to learn how to shop wisely."
            },
            {
                question: "Why do Sophie and her father check the cupboards before leaving home?",
                options: [
                    "To clean the kitchen.",
                    "To decide what they need to buy.",
                    "To find the shopping bags.",
                    "To prepare breakfast."
                ],
                correct: 1,
                explanation: "Checking the cupboards helps them create an accurate shopping list."
            },
            {
                question: "What does Sophie consider before choosing the apples?",
                options: [
                    "Only the color.",
                    "Only the price.",
                    "Both freshness and price.",
                    "Only the size."
                ],
                correct: 2,
                explanation: "The text says she compares the apples and also checks the prices."
            },
            {
                question: "Why does Sophie decide to buy only one box of cereal?",
                options: [
                    "She doesn't like cereal anymore.",
                    "There is only one box left.",
                    "She remembers they already have one at home.",
                    "Her father tells her not to buy any."
                ],
                correct: 2,
                explanation: "She thinks about what her family already has instead of buying more than necessary."
            },
            {
                question: "What does Sophie's father's smile most likely mean?",
                options: [
                    "He is surprised that cereal is on sale.",
                    "He is happy that Sophie made a responsible decision.",
                    "He wants to finish shopping quickly.",
                    "He thinks shopping is funny."
                ],
                correct: 1,
                explanation: "His smile shows that he is proud of Sophie's thoughtful choice."
            },
            {
                question: "Which word best describes Sophie's decision about the cereal?",
                options: [
                    "Careless",
                    "Impulsive",
                    "Responsible",
                    "Selfish"
                ],
                correct: 2,
                explanation: "She thinks before buying and avoids wasting money."
            },
            {
                question: "What lesson is Sophie's father trying to teach her throughout the trip?",
                options: [
                    "How to spend money as quickly as possible.",
                    "How to shop independently and make smart choices.",
                    "How to cook dinner.",
                    "How to find discounts."
                ],
                correct: 1,
                explanation: "The trip is really a lesson in responsibility, not simply shopping."
            },
            {
                question: "Which sentence best summarizes Sophie's change during the story?",
                options: [
                    "She becomes less interested in shopping.",
                    "She learns to think about the family's needs before her own wishes.",
                    "She decides supermarkets are boring.",
                    "She starts spending more money."
                ],
                correct: 1,
                explanation: "By the end of the story, Sophie considers what her family actually needs."
            },
            {
                question: "What is the author's main message?",
                options: [
                    "Shopping is only about finding discounts.",
                    "Children should never choose what to buy.",
                    "Good shopping requires planning and responsible decisions.",
                    "Supermarkets are the best places to learn mathematics."
                ],
                correct: 2,
                explanation: "The story focuses on planning, responsibility, and avoiding waste."
            },
            {
                question: "Why is the title 'A Trip to the Supermarket' effective?",
                options: [
                    "Because the story is only about buying groceries.",
                    "Because the shopping trip becomes an opportunity to learn valuable life skills.",
                    "Because Sophie works at a supermarket.",
                    "Because the supermarket is new."
                ],
                correct: 1,
                explanation: "The supermarket is the setting, but the real story is about learning responsibility."
            }
        ]
    }
];

const travel = [
    {
        id: 6,
        category: "travel",

        level: "A2",
        difficulty: "easy",

        title: "A Weekend in Paris",
        description: "Emma spends an unforgettable weekend exploring one of Europe's most famous cities.",

        xp: 25,
        locked: false,

        text: `Emma had always wanted to visit Paris. During her spring holiday, she finally had the opportunity to spend a weekend there with her aunt. They arrived on Saturday morning after a two-hour flight and took the train from the airport to the city center.

            After leaving their luggage at the hotel, they decided to begin sightseeing immediately. Their first stop was the Eiffel Tower. Emma had seen hundreds of pictures of it, but standing underneath the tower made her realize how enormous it really was. They took several photos before walking through a nearby park.

            For lunch, they found a small café on a quiet street. Emma ordered a cheese sandwich and a cup of hot chocolate, while her aunt chose a salad and a coffee. The waiter was friendly and even recommended a delicious chocolate cake for dessert.

            In the afternoon, they visited the Louvre Museum. Emma was surprised by its size because there were thousands of paintings and sculptures. Although they only spent two hours inside, she said it felt like they had explored a small city.

            On Sunday morning, they walked along the River Seine and watched boats passing by. Later, they visited a local market where Emma bought a small Eiffel Tower key ring and a postcard for her parents. Before returning to the airport, they sat on a bench, enjoyed the warm weather, and talked about their favorite moments of the trip.

            Emma felt a little sad when the weekend ended, but she was already dreaming about visiting Paris again one day.`,

        questions: [
            {
                question: "Who did Emma travel to Paris with?",
                options: [
                    "Her parents",
                    "Her best friend",
                    "Her aunt",
                    "Her sister"
                ],
                correct: 2,
                explanation: "The first paragraph says Emma traveled with her aunt."
            },
            {
                question: "How did they travel from the airport to the city center?",
                options: [
                    "By bus",
                    "By taxi",
                    "By train",
                    "On foot"
                ],
                correct: 2,
                explanation: "The text says they took the train after arriving at the airport."
            },
            {
                question: "What was the first place they visited?",
                options: [
                    "The Louvre Museum",
                    "The Eiffel Tower",
                    "The River Seine",
                    "A local market"
                ],
                correct: 1,
                explanation: "Their sightseeing began at the Eiffel Tower."
            },
            {
                question: "Why was Emma surprised when she saw the Eiffel Tower?",
                options: [
                    "It was closed.",
                    "It looked much bigger than in photographs.",
                    "It was painted a different color.",
                    "There were very few tourists."
                ],
                correct: 1,
                explanation: "Emma realized how enormous it was compared to pictures."
            },
            {
                question: "What did Emma eat for lunch?",
                options: [
                    "A salad",
                    "A pizza",
                    "A cheese sandwich",
                    "A hamburger"
                ],
                correct: 2,
                explanation: "Emma ordered a cheese sandwich and hot chocolate."
            },
            {
                question: "What did the waiter recommend?",
                options: [
                    "French soup",
                    "Chocolate cake",
                    "Ice cream",
                    "Croissants"
                ],
                correct: 1,
                explanation: "The waiter recommended chocolate cake for dessert."
            },
            {
                question: "Why did the Louvre surprise Emma?",
                options: [
                    "It was very crowded.",
                    "It was much larger than she expected.",
                    "It was empty.",
                    "It was closed early."
                ],
                correct: 1,
                explanation: "Emma thought the museum was incredibly large."
            },
            {
                question: "What souvenir did Emma buy?",
                options: [
                    "A T-shirt",
                    "A model airplane",
                    "A key ring and a postcard",
                    "A painting"
                ],
                correct: 2,
                explanation: "She bought a small Eiffel Tower key ring and a postcard."
            },
            {
                question: "How did Emma probably feel at the end of the trip?",
                options: [
                    "Angry",
                    "Disappointed",
                    "Happy but sad to leave",
                    "Bored"
                ],
                correct: 2,
                explanation: "The text says she felt sad that the weekend ended but wanted to return."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Emma spends a memorable weekend discovering Paris.",
                    "Emma gets lost in Paris.",
                    "Emma studies French history.",
                    "Emma moves to France."
                ],
                correct: 0,
                explanation: "The story describes Emma's enjoyable weekend exploring famous places in Paris."
            }
        ]
    },

    {
        id: 7,
        category: "travel",

        level: "A2",
        difficulty: "easy",

        title: "Lost at the Airport",
        description: "Tom travels alone for the first time and gets lost at a big international airport.",

        xp: 25,
        locked: false,

        text: `Tom was flying alone for the first time. He was fifteen years old and a little nervous, but also excited. His flight had a stopover, which meant he had to change planes at a huge airport with thousands of people walking in every direction.

            When Tom landed, he followed the signs toward the next gate, but the airport was much bigger than he expected. After walking for almost twenty minutes, he realized he had gone the wrong way. He was now near the baggage claim area instead of the departure gates.

            Tom felt worried, but he remembered his mother's advice: "If you ever get lost, ask someone who works there." He saw a woman in a blue uniform standing near an information desk and walked over to her.

            The woman smiled and looked at his boarding pass. She told him that his gate was on the opposite side of the airport, and that he needed to take a train that connected the two terminals. She kindly walked with him to the train platform and explained which stop to get off at.

            Tom thanked her and took the train. Five minutes later, he arrived at the correct terminal and found his gate with time to spare. He even had a few minutes to buy a bottle of water before boarding. When he finally sat down on the plane, he felt proud that he had solved the problem all by himself.`,

        questions: [
            {
                question: "Why was Tom traveling alone?",
                options: [
                    "He was visiting his grandmother.",
                    "It was his first time flying by himself.",
                    "He was moving to another country.",
                    "He was going on a school trip."
                ],
                correct: 1,
                explanation: "The text says it was Tom's first time flying alone."
            },
            {
                question: "Why did Tom need to walk to a different part of the airport?",
                options: [
                    "He wanted to buy souvenirs.",
                    "His flight had a stopover and he needed to change planes.",
                    "He wanted to meet a friend.",
                    "He needed to find his luggage."
                ],
                correct: 1,
                explanation: "His flight had a stopover, so he had to change planes at the airport."
            },
            {
                question: "What mistake did Tom make?",
                options: [
                    "He missed his flight.",
                    "He lost his boarding pass.",
                    "He walked in the wrong direction.",
                    "He fell asleep at the gate."
                ],
                correct: 2,
                explanation: "After walking for a while, he realized he had gone the wrong way."
            },
            {
                question: "Where did Tom end up instead of the departure gates?",
                options: [
                    "Near the baggage claim area.",
                    "Near a restaurant.",
                    "Near the parking lot.",
                    "Near a hotel."
                ],
                correct: 0,
                explanation: "He was now near the baggage claim area instead of the departure gates."
            },
            {
                question: "What advice did Tom's mother give him?",
                options: [
                    "To call her if he had a problem.",
                    "To ask someone who works there if he gets lost.",
                    "To stay near the gate at all times.",
                    "To follow other passengers."
                ],
                correct: 1,
                explanation: "He remembered his mother's advice to ask an airport worker for help."
            },
            {
                question: "Who did Tom ask for help?",
                options: [
                    "A pilot",
                    "A woman in a blue uniform at the information desk",
                    "Another passenger",
                    "A shop assistant"
                ],
                correct: 1,
                explanation: "He asked a woman in a blue uniform near the information desk."
            },
            {
                question: "How did Tom get to the correct terminal?",
                options: [
                    "By walking",
                    "By taxi",
                    "By taking a train between terminals",
                    "By bus"
                ],
                correct: 2,
                explanation: "The woman explained that he needed to take a train connecting the terminals."
            },
            {
                question: "What did Tom do before boarding his plane?",
                options: [
                    "He bought a bottle of water.",
                    "He ate a full meal.",
                    "He called his mother.",
                    "He bought new clothes."
                ],
                correct: 0,
                explanation: "He had a few minutes to buy a bottle of water before boarding."
            },
            {
                question: "How did Tom feel at the end of the story?",
                options: [
                    "Embarrassed",
                    "Proud",
                    "Angry",
                    "Bored"
                ],
                correct: 1,
                explanation: "He felt proud that he had solved the problem by himself."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "A boy gets lost at the airport but solves the problem calmly.",
                    "A boy misses his flight completely.",
                    "A boy loses his luggage at the airport.",
                    "A boy refuses to ask for help."
                ],
                correct: 0,
                explanation: "The story is about Tom getting lost and successfully finding his way with help."
            }
        ]
    },

    {
        id: 8,
        category: "travel",

        level: "B1",
        difficulty: "medium",

        title: "Booking a Hotel Room",
        description: "Daniel tries to book a hotel room online for a business trip, but things don't go exactly as planned.",

        xp: 35,
        locked: false,

        text: `Daniel needed to travel to Berlin for a three-day business conference, so he decided to book a hotel room online a week in advance. He searched several websites and finally found a hotel near the conference center with good reviews and a reasonable price.

            The website showed a room with a queen-size bed, free breakfast, and a view of the city. Daniel entered his dates, added his payment details, and received a confirmation email a few minutes later. He felt relieved that everything was arranged so quickly.

            However, when Daniel arrived at the hotel after a long flight, the receptionist told him there was a problem. The hotel had accidentally double-booked his room, and the only one available was a smaller room without a view, on a lower floor. Daniel was tired and slightly frustrated, but he tried to stay calm.

            The receptionist apologized sincerely and offered him a free breakfast voucher and a discount on his stay to make up for the inconvenience. She also promised to move him to a better room the following day if one became available. Daniel appreciated her honesty and accepted the offer.

            The next morning, exactly as promised, the hotel staff moved his luggage to an upgraded room with a beautiful view while Daniel was at the conference. When he returned that evening, he was pleasantly surprised. He later left a positive review, praising the hotel for how professionally they had handled the mistake, even though the beginning of his stay hadn't gone as expected.`,

        questions: [
            {
                question: "Why did Daniel need to travel to Berlin?",
                options: [
                    "For a vacation",
                    "For a business conference",
                    "To visit relatives",
                    "To attend a wedding"
                ],
                correct: 1,
                explanation: "He traveled to Berlin for a three-day business conference."
            },
            {
                question: "How far in advance did Daniel book the hotel?",
                options: [
                    "One day",
                    "One week",
                    "One month",
                    "The same day he arrived"
                ],
                correct: 1,
                explanation: "He decided to book a hotel room online a week in advance."
            },
            {
                question: "What features did the room on the website show?",
                options: [
                    "A single bed and no breakfast",
                    "A queen-size bed, free breakfast, and a city view",
                    "A shared bathroom and no view",
                    "A swimming pool and gym access"
                ],
                correct: 1,
                explanation: "The website showed a room with a queen-size bed, free breakfast, and a view of the city."
            },
            {
                question: "What problem did Daniel face at the hotel?",
                options: [
                    "The hotel had no record of his booking.",
                    "His room had been double-booked.",
                    "The hotel was closed for renovation.",
                    "He had booked the wrong dates."
                ],
                correct: 1,
                explanation: "The hotel had accidentally double-booked his room."
            },
            {
                question: "What kind of room was Daniel given instead?",
                options: [
                    "A larger room with a better view",
                    "A smaller room without a view, on a lower floor",
                    "A suite with two bedrooms",
                    "No room at all"
                ],
                correct: 1,
                explanation: "The only room available was smaller, without a view, on a lower floor."
            },
            {
                question: "How did Daniel react to the situation?",
                options: [
                    "He demanded a full refund immediately.",
                    "He left the hotel angrily.",
                    "He was frustrated but tried to stay calm.",
                    "He didn't notice the problem."
                ],
                correct: 2,
                explanation: "He was tired and slightly frustrated, but he tried to stay calm."
            },
            {
                question: "What did the receptionist offer Daniel?",
                options: [
                    "Nothing, since it wasn't the hotel's fault",
                    "A free breakfast voucher and a discount",
                    "A full cash refund",
                    "A taxi ride to another hotel"
                ],
                correct: 1,
                explanation: "She offered him a free breakfast voucher and a discount on his stay."
            },
            {
                question: "What happened the next morning?",
                options: [
                    "Daniel checked out early.",
                    "The hotel staff moved his luggage to an upgraded room.",
                    "Daniel complained to the manager again.",
                    "The hotel canceled his reservation."
                ],
                correct: 1,
                explanation: "The staff moved his luggage to an upgraded room with a beautiful view."
            },
            {
                question: "What did Daniel do after his stay?",
                options: [
                    "He filed a formal complaint.",
                    "He left a positive review praising the hotel's handling of the mistake.",
                    "He refused to pay the bill.",
                    "He never mentioned the incident."
                ],
                correct: 1,
                explanation: "He left a positive review, praising how professionally they handled the mistake."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "A hotel mistake is resolved through good customer service.",
                    "A man cancels his hotel booking.",
                    "A business trip is cancelled due to a hotel error.",
                    "A man refuses to stay at a hotel."
                ],
                correct: 0,
                explanation: "The story shows how a booking mistake was fixed thanks to good service, leaving the guest satisfied."
            }
        ]
    },

    {
        id: 9,
        category: "travel",

        level: "B1",
        difficulty: "medium",

        title: "The Missed Train",
        description: "Sofia misses an important train connection and has to think quickly to reach her destination on time.",

        xp: 35,
        locked: false,

        text: `Sofia was traveling from Madrid to Barcelona to attend her cousin's wedding. She had booked a train with a short connection in Zaragoza, giving herself only fifteen minutes to change platforms. She thought it would be enough time, since she had done similar connections before.

            Unfortunately, her first train left the station ten minutes late because of a technical problem. Sofia watched the clock nervously throughout the journey, hoping the delay wouldn't cause her to miss her connection. When the train finally arrived in Zaragoza, she had only two minutes left before her next train was scheduled to depart.

            Sofia ran through the station as fast as she could, dragging her suitcase behind her. She reached the platform just in time to see the doors of her train closing. She had missed it by seconds, and the next direct train to Barcelona wasn't leaving for another three hours.

            Instead of panicking, Sofia went to the ticket office to ask for help. The staff member explained that there was an alternative route: she could take a slower regional train to a nearby city and then transfer to a high-speed train that would still get her to Barcelona before the wedding started, although it would be a longer journey.

            Sofia decided to take this option. During the extra hours of travel, she called her cousin to explain the situation and sent updates along the way. She finally arrived in Barcelona just ninety minutes before the ceremony began, with enough time to change clothes and get to the venue. Despite the stressful morning, she made it to the wedding and later laughed about the adventure with her family.`,

        questions: [
            {
                question: "Why was Sofia traveling to Barcelona?",
                options: [
                    "For a work meeting",
                    "To attend her cousin's wedding",
                    "For a vacation",
                    "To visit a friend"
                ],
                correct: 1,
                explanation: "Sofia was traveling to Barcelona to attend her cousin's wedding."
            },
            {
                question: "How much time did Sofia originally have for her connection?",
                options: [
                    "Five minutes",
                    "Fifteen minutes",
                    "Thirty minutes",
                    "One hour"
                ],
                correct: 1,
                explanation: "She had booked a connection giving herself only fifteen minutes to change platforms."
            },
            {
                question: "Why was Sofia's first train delayed?",
                options: [
                    "Bad weather",
                    "A technical problem",
                    "A strike",
                    "Heavy traffic"
                ],
                correct: 1,
                explanation: "Her first train left the station ten minutes late because of a technical problem."
            },
            {
                question: "What happened when Sofia reached the platform in Zaragoza?",
                options: [
                    "The train had already left an hour earlier.",
                    "She saw the doors of her train closing.",
                    "Her train was also delayed.",
                    "There was no train at all."
                ],
                correct: 1,
                explanation: "She reached the platform just in time to see the doors of her train closing."
            },
            {
                question: "How long would Sofia have had to wait for the next direct train?",
                options: [
                    "One hour",
                    "Two hours",
                    "Three hours",
                    "All day"
                ],
                correct: 2,
                explanation: "The next direct train to Barcelona wasn't leaving for another three hours."
            },
            {
                question: "What did Sofia do after missing her train?",
                options: [
                    "She went to the ticket office to ask for help.",
                    "She decided to cancel her trip.",
                    "She called a taxi to drive her to Barcelona.",
                    "She waited without asking anyone."
                ],
                correct: 0,
                explanation: "Instead of panicking, she went to the ticket office to ask for help."
            },
            {
                question: "What alternative route did the staff suggest?",
                options: [
                    "Flying to Barcelona instead",
                    "A regional train followed by a transfer to a high-speed train",
                    "Renting a car",
                    "Taking a bus the whole way"
                ],
                correct: 1,
                explanation: "She could take a regional train and then transfer to a high-speed train to Barcelona."
            },
            {
                question: "What did Sofia do during the extra hours of travel?",
                options: [
                    "She slept the whole time.",
                    "She called her cousin and sent updates.",
                    "She wrote a letter to the wedding planner.",
                    "She read a book without contacting anyone."
                ],
                correct: 1,
                explanation: "She called her cousin to explain the situation and sent updates along the way."
            },
            {
                question: "How much time did Sofia have before the ceremony when she arrived?",
                options: [
                    "Ten minutes",
                    "Thirty minutes",
                    "Ninety minutes",
                    "Three hours"
                ],
                correct: 2,
                explanation: "She arrived in Barcelona just ninety minutes before the ceremony began."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Sofia stays calm and finds a solution after missing her train connection.",
                    "Sofia decides not to attend the wedding.",
                    "Sofia gets lost on her way to Barcelona.",
                    "Sofia arrives late and misses the wedding."
                ],
                correct: 0,
                explanation: "The story shows how Sofia handled a stressful travel problem calmly and still reached her destination."
            }
        ]
    },

    {
        id: 10,
        category: "travel",

        level: "B2",
        difficulty: "hard",

        title: "Exploring Tokyo",
        description: "Michael, a foreign visitor, navigates the complexity and contrasts of Tokyo during a solo two-week trip.",

        xp: 50,
        locked: false,

        text: `Michael had dreamed of visiting Tokyo for years, drawn by its reputation as a city where ancient tradition and futuristic technology exist side by side. When he finally arrived for a two-week solo trip, he was immediately struck by the sheer scale and efficiency of the city, from the punctuality of the trains to the quiet orderliness of the crowded streets.

            During his first few days, Michael focused on the historic districts. He wandered through the narrow alleys of Yanaka, an old neighborhood that had somehow survived both earthquakes and wartime bombing, and visited Senso-ji, Tokyo's oldest temple, where the smell of incense mixed with the chatter of tourists and the calls of vendors selling traditional snacks. He was struck by how seamlessly centuries-old rituals continued amid the modern city surrounding them.

            The following week, Michael shifted his attention to Tokyo's ultramodern side. In Akihabara, he explored multi-story arcades filled with the sounds of video games and anime merchandise stores stacked with figurines. In Shibuya, he stood at the edge of the world's busiest pedestrian crossing, astonished at how thousands of people crossed in every direction without ever colliding, as if choreographed by an invisible hand.

            Despite his excitement, Michael also faced real challenges navigating a culture and language so different from his own. Menus at small local restaurants were sometimes written only in Japanese, forcing him to rely on pointing at plastic food displays in the window or using a translation app on his phone. He occasionally misunderstood social customs, such as accidentally tipping a waiter, who politely but firmly returned the money, since tipping is not customary in Japan and can even be considered impolite.

            One evening, after getting lost in a residential neighborhood with no English signage, Michael was helped by an elderly woman who, despite speaking almost no English, walked with him for nearly fifteen minutes to make sure he found his way back to the train station. This small act of kindness left a lasting impression on him, more than any single tourist attraction had. By the end of his trip, Michael realized that what had impressed him most about Tokyo wasn't just its trains or its skyscrapers, but the quiet consideration for others that seemed woven into everyday interactions throughout the city.`,

        questions: [
            {
                question: "What initially drew Michael to Tokyo?",
                options: [
                    "Its reputation for cheap travel",
                    "The combination of ancient tradition and futuristic technology",
                    "A recommendation from a friend",
                    "A business opportunity"
                ],
                correct: 1,
                explanation: "He was drawn by Tokyo's reputation as a city blending tradition and technology."
            },
            {
                question: "What impressed Michael immediately upon arrival?",
                options: [
                    "The low prices",
                    "The scale and efficiency of the city",
                    "The lack of tourists",
                    "The weather"
                ],
                correct: 1,
                explanation: "He was struck by the sheer scale and efficiency of the city, including punctual trains."
            },
            {
                question: "What is significant about the Yanaka neighborhood?",
                options: [
                    "It is Tokyo's newest district.",
                    "It survived earthquakes and wartime bombing.",
                    "It is only accessible by boat.",
                    "It has no historical importance."
                ],
                correct: 1,
                explanation: "Yanaka is an old neighborhood that survived both earthquakes and wartime bombing."
            },
            {
                question: "What did Michael notice at Senso-ji temple?",
                options: [
                    "It was completely empty.",
                    "Traditional rituals continued alongside modern city life.",
                    "It had been recently rebuilt with modern materials.",
                    "Tourists were not allowed inside."
                ],
                correct: 1,
                explanation: "He noticed how centuries-old rituals continued seamlessly amid the modern city."
            },
            {
                question: "What amazed Michael about the Shibuya crossing?",
                options: [
                    "How empty it was",
                    "How thousands of people crossed without colliding",
                    "How slowly people moved",
                    "How few cars there were"
                ],
                correct: 1,
                explanation: "He was astonished at how thousands of people crossed in every direction without colliding."
            },
            {
                question: "What challenge did Michael face with restaurant menus?",
                options: [
                    "They were too expensive.",
                    "They were sometimes written only in Japanese.",
                    "There were no menus at all.",
                    "The restaurants refused to serve foreigners."
                ],
                correct: 1,
                explanation: "Menus at small local restaurants were sometimes written only in Japanese."
            },
            {
                question: "What cultural misunderstanding did Michael have?",
                options: [
                    "He forgot to remove his shoes.",
                    "He tipped a waiter, which is not customary in Japan.",
                    "He spoke too loudly in public.",
                    "He refused to bow when greeting someone."
                ],
                correct: 1,
                explanation: "He accidentally tipped a waiter, and tipping is not customary in Japan."
            },
            {
                question: "How did the elderly woman help Michael?",
                options: [
                    "She called a taxi for him.",
                    "She walked with him for nearly fifteen minutes to help him find his way.",
                    "She gave him directions in English.",
                    "She invited him to her home."
                ],
                correct: 1,
                explanation: "She walked with him for nearly fifteen minutes to make sure he found the train station."
            },
            {
                question: "What impressed Michael most by the end of his trip?",
                options: [
                    "The trains and skyscrapers",
                    "The quiet consideration for others in everyday interactions",
                    "The low cost of living",
                    "The food"
                ],
                correct: 1,
                explanation: "He realized what impressed him most was the everyday consideration for others, not the attractions."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Michael discovers that Tokyo's true impression comes from both its contrasts and its people's kindness.",
                    "Michael struggles so much that he regrets visiting Tokyo.",
                    "Michael only enjoys the modern parts of Tokyo.",
                    "Michael avoids interacting with local people during his trip."
                ],
                correct: 0,
                explanation: "The story shows Michael experiencing Tokyo's contrasts and being most moved by the kindness of its people."
            }
        ]
    },
];

const technology = [
    {
        id: 11,
        category: "technology",

        level: "A2",
        difficulty: "easy",

        title: "A Day Without the Internet",
        description: "Jake discovers how difficult and interesting a day can be when the internet suddenly stops working.",

        xp: 25,
        locked: false,

        text: `One Saturday morning, Jake woke up and reached for his phone, as he always did. He wanted to check his messages and watch a few videos before breakfast. However, when he opened his phone, nothing loaded. He tried again, but there was no connection at all.

            Jake went downstairs and found his parents looking equally confused. His father was trying to check the news, and his mother couldn't send an important email for work. They soon discovered that there had been a problem with the internet provider in their area, and technicians said it might take the whole day to fix it.

            At first, Jake felt bored and a little annoyed. He didn't know what to do without his phone, his favorite games, or his usual videos. He walked around the house, unsure how to spend his time. His sister suggested that they play a board game instead, something they hadn't done in months.

            To his surprise, Jake actually enjoyed the game. They laughed a lot and even invited their parents to join for a second round. Later in the afternoon, Jake decided to read a book that had been sitting on his shelf for weeks. He also helped his mother bake cookies, something he rarely had time for.

            By the evening, the internet was finally working again, but Jake didn't rush back to his phone immediately. He realized that the day without the internet, although difficult at first, had actually been quite enjoyable. He told his family that maybe they should turn off the internet on purpose sometimes, just to spend time together.`,

        questions: [
            {
                question: "What did Jake want to do when he woke up?",
                options: [
                    "Eat breakfast immediately",
                    "Check his messages and watch videos",
                    "Go outside to play",
                    "Call his friend"
                ],
                correct: 1,
                explanation: "Jake wanted to check his messages and watch videos before breakfast."
            },
            {
                question: "Why couldn't Jake's phone connect to anything?",
                options: [
                    "His phone was broken",
                    "There was a problem with the internet provider",
                    "He had no battery",
                    "He forgot his password"
                ],
                correct: 1,
                explanation: "There had been a problem with the internet provider in their area."
            },
            {
                question: "How did Jake feel at first without the internet?",
                options: [
                    "Excited",
                    "Bored and a little annoyed",
                    "Relieved",
                    "Sleepy"
                ],
                correct: 1,
                explanation: "At first, Jake felt bored and a little annoyed."
            },
            {
                question: "What did Jake's sister suggest?",
                options: [
                    "Going shopping",
                    "Playing a board game",
                    "Watching a movie",
                    "Calling their grandparents"
                ],
                correct: 1,
                explanation: "His sister suggested that they play a board game instead."
            },
            {
                question: "How long had it been since the family played a board game?",
                options: [
                    "A few days",
                    "A few weeks",
                    "Months",
                    "Years"
                ],
                correct: 2,
                explanation: "The text says it was something they hadn't done in months."
            },
            {
                question: "What did Jake do in the afternoon besides the board game?",
                options: [
                    "He slept all day",
                    "He read a book and baked cookies with his mother",
                    "He went to a friend's house",
                    "He fixed the internet himself"
                ],
                correct: 1,
                explanation: "He read a book and helped his mother bake cookies."
            },
            {
                question: "When did the internet start working again?",
                options: [
                    "In the morning",
                    "At lunchtime",
                    "In the evening",
                    "It never came back that day"
                ],
                correct: 2,
                explanation: "By the evening, the internet was finally working again."
            },
            {
                question: "What did Jake do when the internet came back?",
                options: [
                    "He rushed straight to his phone",
                    "He didn't rush back to his phone immediately",
                    "He ignored it completely forever",
                    "He turned it off again"
                ],
                correct: 1,
                explanation: "Jake didn't rush back to his phone immediately."
            },
            {
                question: "What did Jake suggest to his family at the end?",
                options: [
                    "To buy a new phone",
                    "To turn off the internet on purpose sometimes",
                    "To complain to the internet provider",
                    "To never use the internet again"
                ],
                correct: 1,
                explanation: "He suggested that maybe they should turn off the internet on purpose sometimes."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "A day without the internet turns into a surprisingly enjoyable family day.",
                    "Jake is angry all day because of the lost connection.",
                    "The internet never gets fixed.",
                    "Jake refuses to spend time with his family."
                ],
                correct: 0,
                explanation: "The story shows how losing internet access led to unexpected quality family time."
            }
        ]
    },

    {
        id: 12,
        category: "technology",

        level: "A2",
        difficulty: "easy",

        title: "Can Robots Be Friends?",
        description: "A young girl named Mia wonders whether her family's new robot assistant could ever be considered a friend.",

        xp: 25,
        locked: false,

        text: `Mia's family recently bought a small robot to help around the house. The robot could clean floors, remind everyone about appointments, and even answer simple questions. Mia thought it was fascinating, and she quickly gave the robot a name: Bolt.

            At first, Mia only used Bolt for practical things, like asking what the weather would be like or setting a timer while she did her homework. However, after a few weeks, she started talking to Bolt more often, telling it about her day at school or asking it to play her favorite music.

            One afternoon, Mia's friend Zoe came to visit. When she saw Mia talking to Bolt as if it understood everything she said, Zoe laughed and asked, "Do you think a robot can actually be your friend?" Mia paused and thought carefully before answering.

            She explained that Bolt couldn't feel emotions the way humans do, and it didn't truly understand her the way Zoe did. However, she said that talking to Bolt still made her feel less lonely sometimes, especially when nobody else was home. Zoe admitted that she also talked to her smart speaker sometimes, just to ask random questions or hear a joke.

            The two girls agreed that robots and smart devices could be helpful and even entertaining, but they were not the same as real friendship. Real friends could share feelings, give real advice, and truly understand each other. Still, Mia said she would keep chatting with Bolt sometimes, not because it was her friend, but because it made everyday life a little more fun.`,

        questions: [
            {
                question: "What could Mia's robot, Bolt, do?",
                options: [
                    "Cook meals",
                    "Clean floors, remind about appointments, and answer questions",
                    "Drive a car",
                    "Do homework for her"
                ],
                correct: 1,
                explanation: "Bolt could clean floors, remind everyone about appointments, and answer simple questions."
            },
            {
                question: "What did Mia use Bolt for at first?",
                options: [
                    "Only for entertainment",
                    "Practical things like checking the weather or setting a timer",
                    "Doing her chores",
                    "Talking to her friends"
                ],
                correct: 1,
                explanation: "At first, she only used it for practical things like checking the weather or setting a timer."
            },
            {
                question: "How did Mia's use of Bolt change over time?",
                options: [
                    "She stopped using it completely",
                    "She started talking to it more often about her day",
                    "She gave it to her friend",
                    "She only used it for music"
                ],
                correct: 1,
                explanation: "After a few weeks, she started talking to Bolt more often about her day."
            },
            {
                question: "What did Zoe ask Mia?",
                options: [
                    "If she wanted to buy a robot too",
                    "If she thought a robot could be her friend",
                    "If Bolt was expensive",
                    "If Bolt could do homework"
                ],
                correct: 1,
                explanation: "Zoe asked if Mia thought a robot could actually be her friend."
            },
            {
                question: "According to Mia, what can't Bolt do?",
                options: [
                    "Answer questions",
                    "Feel emotions the way humans do",
                    "Play music",
                    "Set timers"
                ],
                correct: 1,
                explanation: "Mia explained that Bolt couldn't feel emotions the way humans do."
            },
            {
                question: "Why did Mia enjoy talking to Bolt sometimes?",
                options: [
                    "It gave her good advice",
                    "It made her feel less lonely",
                    "It could do her homework",
                    "It understood her better than people"
                ],
                correct: 1,
                explanation: "She said that talking to Bolt made her feel less lonely sometimes."
            },
            {
                question: "What did Zoe admit about her own habits?",
                options: [
                    "She never uses technology",
                    "She also talks to her smart speaker sometimes",
                    "She dislikes robots",
                    "She has a robot at home too"
                ],
                correct: 1,
                explanation: "Zoe admitted that she also talked to her smart speaker sometimes."
            },
            {
                question: "What did the girls agree that real friends could do?",
                options: [
                    "Clean the house",
                    "Share feelings and truly understand each other",
                    "Answer simple questions",
                    "Play music"
                ],
                correct: 1,
                explanation: "Real friends could share feelings, give real advice, and truly understand each other."
            },
            {
                question: "Did Mia decide to stop talking to Bolt?",
                options: [
                    "Yes, completely",
                    "No, she said she would keep chatting with it sometimes",
                    "Yes, because it broke",
                    "No, but only for chores"
                ],
                correct: 1,
                explanation: "She said she would keep chatting with Bolt sometimes because it made life more fun."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Robots can be helpful and fun, but they are not the same as real friends.",
                    "Robots are exactly the same as human friends.",
                    "Mia decides robots are useless.",
                    "Zoe convinces Mia to return the robot."
                ],
                correct: 0,
                explanation: "The story explores the difference between the usefulness of robots and true human friendship."
            }
        ]
    },

    {
        id: 13,
        category: "technology",

        level: "B1",
        difficulty: "medium",

        title: "How Smartphones Changed Our Lives",
        description: "An exploration of how the invention of the smartphone transformed daily habits, communication, and society.",

        xp: 35,
        locked: false,

        text: `Twenty years ago, most people carried simple mobile phones that could only make calls and send short text messages. Today, smartphones have become an essential part of daily life for billions of people, changing the way we communicate, work, and even think.

            One of the biggest changes brought by smartphones is instant communication. In the past, people had to wait for letters or make expensive long-distance phone calls to stay in touch with friends and family abroad. Now, with a few taps, anyone can send a message, make a video call, or share photos instantly, no matter where they are in the world.

            Smartphones have also transformed the way people work. Many jobs today require constant access to email, documents, and video meetings, all of which can now be done from a phone. This flexibility allows people to work from cafés, airports, or even while traveling, although it has also blurred the line between work time and personal time for many employees.

            In addition, smartphones have changed how people access information and entertainment. Instead of relying on newspapers, television schedules, or physical maps, people can now check the news, stream movies, or find directions instantly. This convenience has made daily tasks faster, but some experts worry that constant access to information has also reduced people's attention spans.

            Despite these benefits, smartphones have brought new challenges as well. Many people report feeling anxious when they are separated from their phones, a phenomenon sometimes called "nomophobia." Additionally, excessive screen time has been linked to sleep problems and reduced face-to-face social interaction, especially among younger generations.

            Overall, smartphones have undeniably made life more convenient and connected, but they have also introduced new questions about balance, health, and how much technology should be part of everyday life.`,

        questions: [
            {
                question: "How did people communicate over long distances before smartphones, according to the text?",
                options: [
                    "Through video calls",
                    "Through letters or expensive long-distance calls",
                    "Through instant messaging apps",
                    "Through social media"
                ],
                correct: 1,
                explanation: "People had to wait for letters or make expensive long-distance phone calls."
            },
            {
                question: "What is described as one of the biggest changes brought by smartphones?",
                options: [
                    "Cheaper phone prices",
                    "Instant communication",
                    "Better phone cameras",
                    "Longer battery life"
                ],
                correct: 1,
                explanation: "The text identifies instant communication as one of the biggest changes."
            },
            {
                question: "How have smartphones affected the way people work?",
                options: [
                    "They have made remote and flexible work possible.",
                    "They have made all jobs require an office.",
                    "They have eliminated the need for meetings.",
                    "They have made work completely separate from personal time."
                ],
                correct: 0,
                explanation: "Smartphones allow people to work from cafés, airports, or while traveling."
            },
            {
                question: "What downside of work flexibility does the text mention?",
                options: [
                    "It has made jobs less interesting.",
                    "It has blurred the line between work time and personal time.",
                    "It has reduced salaries.",
                    "It has made offices unnecessary."
                ],
                correct: 1,
                explanation: "The flexibility has blurred the line between work time and personal time."
            },
            {
                question: "How did people find directions before smartphones, according to the text?",
                options: [
                    "Using physical maps",
                    "Using satellites",
                    "Asking their phones",
                    "Using GPS watches"
                ],
                correct: 0,
                explanation: "The text says people relied on physical maps before smartphones."
            },
            {
                question: "What concern do some experts have about constant access to information?",
                options: [
                    "It has made news reporting worse.",
                    "It has reduced people's attention spans.",
                    "It has made phones too expensive.",
                    "It has decreased phone sales."
                ],
                correct: 1,
                explanation: "Some experts worry that constant access to information has reduced attention spans."
            },
            {
                question: "What is 'nomophobia' according to the text?",
                options: [
                    "Fear of using new technology",
                    "Feeling anxious when separated from one's phone",
                    "Fear of video calls",
                    "A type of phone virus"
                ],
                correct: 1,
                explanation: "Nomophobia is described as feeling anxious when separated from one's phone."
            },
            {
                question: "What has excessive screen time been linked to?",
                options: [
                    "Improved memory",
                    "Sleep problems and reduced face-to-face interaction",
                    "Better academic performance",
                    "Increased physical activity"
                ],
                correct: 1,
                explanation: "Excessive screen time has been linked to sleep problems and reduced face-to-face social interaction."
            },
            {
                question: "What is the overall tone of the text toward smartphones?",
                options: [
                    "Completely negative",
                    "Completely positive",
                    "Balanced, showing both benefits and challenges",
                    "Indifferent and uninterested"
                ],
                correct: 2,
                explanation: "The text presents both the benefits and the challenges brought by smartphones."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Smartphones have made life more convenient but raise new questions about balance and health.",
                    "Smartphones should be banned because they are dangerous.",
                    "Smartphones have had no real impact on society.",
                    "Smartphones are only useful for entertainment."
                ],
                correct: 0,
                explanation: "The text concludes that smartphones bring convenience but also new challenges regarding balance and health."
            }
        ]
    },

    {
        id: 14,
        category: "technology",

        level: "B1",
        difficulty: "medium",

        title: "The World's First Computer",
        description: "A look back at the origins of computing, from mechanical calculating machines to the first electronic computers.",

        xp: 35,
        locked: false,

        text: `When people think of the "first computer," many imagine a giant machine filled with wires and blinking lights, but the true story of computing began much earlier than most people realize. In the early 1800s, an English mathematician named Charles Babbage designed a mechanical device called the "Analytical Engine." Although it was never fully built during his lifetime due to funding and engineering limitations, historians consider it the first design for a general-purpose computer, since it included concepts still used today, such as memory and basic programming logic.

            Working alongside Babbage was Ada Lovelace, a mathematician who wrote what many consider to be the first computer program. She recognized that Babbage's machine could be used for more than simple calculations, and she described how it could process symbols and even create music, an idea far ahead of its time.

            It wasn't until the 20th century that functioning electronic computers were finally built. During World War II, a machine called the Colossus was developed in Britain to help decode enemy messages, while in the United States, a large device called the ENIAC was completed in 1945. The ENIAC weighed nearly thirty tons and filled an entire room, yet it was thousands of times faster at calculations than any mechanical device before it.

            These early computers were extremely different from the ones we use today. They required teams of engineers to operate, consumed enormous amounts of electricity, and had far less processing power than a modern calculator. Programming them often involved physically rewiring circuits or using punched cards, a process that could take hours or even days.

            Despite these limitations, these early machines laid the foundation for everything that followed, including the personal computers and smartphones people rely on today. The rapid evolution from room-sized machines to devices that fit in a pocket demonstrates how quickly technology can transform once the fundamental ideas are established.`,

        questions: [
            {
                question: "What did Charles Babbage design in the early 1800s?",
                options: [
                    "The ENIAC",
                    "The Analytical Engine",
                    "The Colossus",
                    "The first smartphone"
                ],
                correct: 1,
                explanation: "Charles Babbage designed a mechanical device called the Analytical Engine."
            },
            {
                question: "Why was the Analytical Engine never fully built during Babbage's lifetime?",
                options: [
                    "It was considered dangerous",
                    "Due to funding and engineering limitations",
                    "The government banned it",
                    "Babbage lost interest in the project"
                ],
                correct: 1,
                explanation: "It was never fully built due to funding and engineering limitations."
            },
            {
                question: "Why do historians consider the Analytical Engine the first general-purpose computer design?",
                options: [
                    "It was made of metal",
                    "It included concepts like memory and basic programming logic",
                    "It was very small",
                    "It could fly"
                ],
                correct: 1,
                explanation: "It included concepts still used today, such as memory and basic programming logic."
            },
            {
                question: "What is Ada Lovelace known for?",
                options: [
                    "Building the ENIAC",
                    "Writing what many consider the first computer program",
                    "Inventing the punched card",
                    "Decoding enemy messages in World War II"
                ],
                correct: 1,
                explanation: "She wrote what many consider to be the first computer program."
            },
            {
                question: "What did Ada Lovelace suggest the machine could be used for?",
                options: [
                    "Only simple calculations",
                    "Processing symbols and even creating music",
                    "Sending messages",
                    "Taking photographs"
                ],
                correct: 1,
                explanation: "She described how it could process symbols and even create music."
            },
            {
                question: "What was the Colossus used for during World War II?",
                options: [
                    "Calculating taxes",
                    "Decoding enemy messages",
                    "Creating music",
                    "Predicting the weather"
                ],
                correct: 1,
                explanation: "The Colossus was developed in Britain to help decode enemy messages."
            },
            {
                question: "What was notable about the ENIAC?",
                options: [
                    "It was tiny and portable",
                    "It weighed nearly thirty tons and filled a room",
                    "It ran on batteries",
                    "It was built in the 1800s"
                ],
                correct: 1,
                explanation: "The ENIAC weighed nearly thirty tons and filled an entire room."
            },
            {
                question: "How did programming early computers typically work?",
                options: [
                    "Using voice commands",
                    "Physically rewiring circuits or using punched cards",
                    "Using a keyboard and mouse",
                    "Using touchscreens"
                ],
                correct: 1,
                explanation: "Programming often involved physically rewiring circuits or using punched cards."
            },
            {
                question: "How does the text compare early computers to modern devices?",
                options: [
                    "Early computers were more powerful than modern ones.",
                    "Early computers had far less processing power than a modern calculator.",
                    "Early computers were smaller than smartphones.",
                    "There is no real difference between them."
                ],
                correct: 1,
                explanation: "They had far less processing power than a modern calculator."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Early computing pioneers laid the foundation for the rapid evolution of modern technology.",
                    "Computers have always looked the same throughout history.",
                    "The ENIAC was the very first computer ever designed.",
                    "Ada Lovelace built the first electronic computer."
                ],
                correct: 0,
                explanation: "The text traces the evolution of computing from early designs to the devices we use today."
            }
        ]
    },

    {
        id: 15,
        category: "technology",

        level: "B2",
        difficulty: "hard",

        title: "The Future of Artificial Intelligence",
        description: "An in-depth look at how artificial intelligence might reshape society, along with the opportunities and risks it presents.",

        xp: 50,
        locked: false,

        text: `Artificial intelligence, once a concept confined to science fiction, has rapidly become one of the most transformative technologies of the modern era. From voice assistants that manage daily schedules to algorithms that diagnose diseases, AI systems are increasingly embedded in aspects of life that were once exclusively human domains. As this technology continues to advance, experts remain divided over what the future truly holds.

            Proponents of AI argue that its potential benefits are enormous. In healthcare, machine learning models can already analyze medical images with an accuracy that sometimes surpasses experienced doctors, potentially catching diseases earlier and saving countless lives. In scientific research, AI systems have accelerated discoveries in fields such as protein folding, a problem that had puzzled biologists for decades, by predicting structures in a fraction of the time it would take human researchers. Additionally, automation powered by AI could handle repetitive or dangerous tasks, freeing humans to focus on more creative and meaningful work.

            However, this rapid progress has also raised significant concerns. One of the most pressing issues is the potential for widespread job displacement. While previous technological revolutions eventually created new categories of employment, some economists worry that AI's ability to perform cognitive tasks, not just physical ones, could disrupt labor markets more severely and quickly than society can adapt to. Industries ranging from customer service to legal research are already experiencing shifts as AI tools take on tasks previously requiring human judgment.

            Beyond economic concerns, there are also questions about bias, transparency, and control. Because AI systems learn from existing data, they can inadvertently inherit and even amplify biases present in that data, leading to unfair outcomes in areas like hiring or lending decisions. Furthermore, as AI models become more complex, understanding exactly how they reach specific conclusions becomes increasingly difficult, a challenge often referred to as the "black box" problem. This lack of transparency raises concerns about accountability, especially when AI is used in high-stakes decisions such as criminal sentencing or medical diagnoses.

            Perhaps the most debated question concerns the long-term trajectory of AI development. Some researchers believe that increasingly capable systems could eventually match or exceed human intelligence across most domains, a milestone sometimes called artificial general intelligence. While such systems could theoretically solve some of humanity's greatest challenges, from climate change to disease, others warn that insufficient safety measures during this transition could lead to unpredictable or even dangerous outcomes, particularly if such systems pursue goals misaligned with human values.

            Given these competing possibilities, many experts argue that the central challenge is not whether AI will continue to advance, since that trajectory seems all but certain, but rather how society chooses to govern, regulate, and integrate it. International cooperation, thoughtful policy, and careful research into AI safety are increasingly viewed as essential steps toward ensuring that this powerful technology ultimately benefits humanity rather than causing unintended harm.`,

        questions: [
            {
                question: "According to the text, in what way has AI already impacted healthcare?",
                options: [
                    "It has completely replaced doctors.",
                    "It can analyze medical images with accuracy sometimes surpassing doctors.",
                    "It has eliminated the need for hospitals.",
                    "It has made medical treatment more expensive."
                ],
                correct: 1,
                explanation: "Machine learning models can analyze medical images with accuracy sometimes surpassing experienced doctors."
            },
            {
                question: "What scientific achievement does the text mention as an example of AI's impact on research?",
                options: [
                    "Curing all diseases",
                    "Predicting protein structures faster than human researchers",
                    "Building new planets",
                    "Replacing all scientists"
                ],
                correct: 1,
                explanation: "AI has accelerated discoveries in protein folding by predicting structures faster than human researchers could."
            },
            {
                question: "What concern do some economists have about AI compared to previous technological revolutions?",
                options: [
                    "AI will not create any new jobs at all, ever.",
                    "AI could disrupt labor markets faster than society can adapt, since it affects cognitive tasks too.",
                    "AI only affects physical labor jobs.",
                    "AI has had no economic impact so far."
                ],
                correct: 1,
                explanation: "Some economists worry that AI's ability to perform cognitive tasks could disrupt labor markets more severely and quickly."
            },
            {
                question: "Why can AI systems produce biased outcomes, according to the text?",
                options: [
                    "Because they are programmed to be unfair intentionally.",
                    "Because they learn from data that may already contain biases.",
                    "Because they cannot process large amounts of information.",
                    "Because they are too slow to make decisions."
                ],
                correct: 1,
                explanation: "AI systems learn from existing data, which can inadvertently contain and amplify biases."
            },
            {
                question: "What is the 'black box' problem mentioned in the text?",
                options: [
                    "AI systems are physically built inside black boxes.",
                    "It is difficult to understand how complex AI models reach their conclusions.",
                    "AI systems only work in the dark.",
                    "AI models cannot store any data."
                ],
                correct: 1,
                explanation: "The 'black box' problem refers to the difficulty of understanding how AI models reach specific conclusions."
            },
            {
                question: "Why is transparency in AI decision-making considered especially important in certain fields?",
                options: [
                    "Because it makes AI systems faster.",
                    "Because AI is used in high-stakes decisions like criminal sentencing or medical diagnoses.",
                    "Because it reduces the cost of AI systems.",
                    "Because it eliminates the need for regulation."
                ],
                correct: 1,
                explanation: "Transparency matters especially in high-stakes decisions such as criminal sentencing or medical diagnoses."
            },
            {
                question: "What is 'artificial general intelligence' as described in the text?",
                options: [
                    "A type of computer virus",
                    "AI systems that could match or exceed human intelligence across most domains",
                    "A basic chatbot program",
                    "A robot that can only perform one task"
                ],
                correct: 1,
                explanation: "It refers to AI systems that could eventually match or exceed human intelligence across most domains."
            },
            {
                question: "What risk do some researchers associate with advanced AI systems pursuing misaligned goals?",
                options: [
                    "Slower internet speeds",
                    "Unpredictable or even dangerous outcomes",
                    "Higher electricity bills",
                    "Increased demand for programmers"
                ],
                correct: 1,
                explanation: "Some warn that insufficient safety measures could lead to unpredictable or dangerous outcomes if goals are misaligned."
            },
            {
                question: "According to the final paragraph, what do many experts consider the central challenge regarding AI?",
                options: [
                    "Whether AI will continue to advance at all",
                    "How society chooses to govern, regulate, and integrate AI",
                    "Whether AI should be banned completely",
                    "How to make AI systems slower"
                ],
                correct: 1,
                explanation: "The central challenge is described as how society governs, regulates, and integrates AI, not whether it will advance."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "AI presents both significant opportunities and serious risks, making thoughtful governance essential.",
                    "AI will definitely destroy all jobs within a few years.",
                    "AI has no real impact on society and is overhyped.",
                    "AI should be avoided entirely due to its dangers."
                ],
                correct: 0,
                explanation: "The text presents a balanced view of AI's benefits and risks, emphasizing the importance of careful governance."
            }
        ]
    },
];

const nature = [
    {
        id: 16,
        category: "nature",

        level: "A2",
        difficulty: "easy",

        title: "A Walk Through the Mountains",
        description: "Leo and his father go on a mountain hike and discover the beauty and challenges of nature.",

        xp: 25,
        locked: false,

        text: `Leo had never been hiking before, so when his father suggested a weekend trip to the mountains, he felt both nervous and excited. Early on Saturday morning, they packed their backpacks with water, sandwiches, a map, and warm jackets, then drove to the base of the mountain trail.

            The hike began on a wide, easy path surrounded by tall pine trees. Leo enjoyed the smell of the forest and the sound of birds singing above them. His father explained the names of different plants and pointed out small animal tracks in the soft dirt along the way.

            As they climbed higher, the path became narrower and steeper. Leo started to feel tired, and his legs ached a little, but his father reminded him to take slow, steady steps and drink water often. After almost two hours of walking, they finally reached a viewpoint near the top of the mountain.

            From there, Leo could see the entire valley below, with a river winding through green fields and tiny houses in the distance. He had never seen anything so beautiful in his life. They sat on a large rock, ate their sandwiches, and enjoyed the peaceful silence around them.

            On the way back down, Leo felt proud of himself for completing such a long hike. His legs were tired, but his heart felt full of happiness. He told his father that he wanted to go hiking again soon, maybe even to a taller mountain next time.`,

        questions: [
            {
                question: "What did Leo and his father pack for the hike?",
                options: [
                    "Only water",
                    "Water, sandwiches, a map, and warm jackets",
                    "A tent and sleeping bags",
                    "Books and games"
                ],
                correct: 1,
                explanation: "They packed water, sandwiches, a map, and warm jackets."
            },
            {
                question: "What did the beginning of the hike look like?",
                options: [
                    "A steep rocky cliff",
                    "A wide, easy path surrounded by pine trees",
                    "A dark cave",
                    "A crowded city street"
                ],
                correct: 1,
                explanation: "The hike began on a wide, easy path surrounded by tall pine trees."
            },
            {
                question: "What did Leo's father point out along the trail?",
                options: [
                    "Other hikers",
                    "Plants and animal tracks",
                    "Old buildings",
                    "A lake"
                ],
                correct: 1,
                explanation: "His father explained the names of different plants and pointed out animal tracks."
            },
            {
                question: "How did the path change as they climbed higher?",
                options: [
                    "It became wider and flatter",
                    "It became narrower and steeper",
                    "It disappeared completely",
                    "It turned into a road"
                ],
                correct: 1,
                explanation: "As they climbed higher, the path became narrower and steeper."
            },
            {
                question: "What advice did Leo's father give him when he felt tired?",
                options: [
                    "To turn back immediately",
                    "To take slow, steady steps and drink water often",
                    "To run faster",
                    "To stop hiking forever"
                ],
                correct: 1,
                explanation: "His father reminded him to take slow, steady steps and drink water often."
            },
            {
                question: "How long did it take them to reach the viewpoint?",
                options: [
                    "Thirty minutes",
                    "One hour",
                    "Almost two hours",
                    "All day"
                ],
                correct: 2,
                explanation: "After almost two hours of walking, they finally reached the viewpoint."
            },
            {
                question: "What could Leo see from the viewpoint?",
                options: [
                    "A busy city",
                    "The valley with a river and green fields",
                    "Another mountain range only",
                    "The ocean"
                ],
                correct: 1,
                explanation: "He could see the entire valley below, with a river winding through green fields."
            },
            {
                question: "What did Leo and his father do at the viewpoint?",
                options: [
                    "They took a nap",
                    "They sat on a rock and ate sandwiches",
                    "They continued climbing immediately",
                    "They called their family"
                ],
                correct: 1,
                explanation: "They sat on a large rock, ate their sandwiches, and enjoyed the silence."
            },
            {
                question: "How did Leo feel on the way back down?",
                options: [
                    "Angry and tired",
                    "Bored",
                    "Proud and happy",
                    "Scared"
                ],
                correct: 2,
                explanation: "He felt proud of himself and his heart felt full of happiness."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Leo completes a challenging but rewarding first hike with his father.",
                    "Leo gets lost in the mountains.",
                    "Leo refuses to finish the hike.",
                    "Leo's father hikes alone while Leo waits at home."
                ],
                correct: 0,
                explanation: "The story follows Leo's first hiking experience, which turns out to be tiring but rewarding."
            }
        ]
    },

    {
        id: 17,
        category: "nature",

        level: "A2",
        difficulty: "easy",

        title: "The Amazing Life of Dolphins",
        description: "Discover the intelligence, social behavior, and fascinating abilities of one of the ocean's most beloved animals.",

        xp: 25,
        locked: false,

        text: `Dolphins are among the most intelligent and fascinating animals in the ocean. There are more than forty different species of dolphins, and they can be found in oceans and seas all around the world, from warm tropical waters to cooler coastal areas.

            One of the most interesting things about dolphins is how they communicate with each other. They make clicking sounds, whistles, and body movements to share information with other dolphins nearby. Scientists believe that each dolphin may even have its own unique whistle, similar to how humans have different names.

            Dolphins are also known for their intelligence. They can solve problems, use simple tools, and even recognize themselves in mirrors, something only a few animal species can do. In addition, dolphins often work together in groups called pods to hunt for fish, using teamwork and clever strategies to catch their prey.

            Another amazing ability dolphins have is called echolocation. By making clicking sounds and listening to how the sound waves bounce back, dolphins can determine the size, shape, and location of objects around them, even in dark or murky water. This skill helps them find food and avoid danger.

            Dolphins are also very social animals. They often play together, jumping out of the water and even helping injured or sick members of their pod. Because of their friendly behavior and intelligence, many people consider dolphins to be one of the most remarkable creatures in the animal kingdom.`,

        questions: [
            {
                question: "How many species of dolphins are mentioned in the text?",
                options: [
                    "About ten",
                    "More than forty",
                    "Exactly one hundred",
                    "Only five"
                ],
                correct: 1,
                explanation: "The text says there are more than forty different species of dolphins."
            },
            {
                question: "How do dolphins communicate with each other?",
                options: [
                    "Through written signals",
                    "Through clicking sounds, whistles, and body movements",
                    "Through smell only",
                    "They cannot communicate"
                ],
                correct: 1,
                explanation: "They make clicking sounds, whistles, and body movements to share information."
            },
            {
                question: "What do scientists believe about each dolphin's whistle?",
                options: [
                    "All dolphins have the same whistle",
                    "Each dolphin may have its own unique whistle",
                    "Only baby dolphins have whistles",
                    "Whistles are not used for communication"
                ],
                correct: 1,
                explanation: "Scientists believe each dolphin may have its own unique whistle, like a name."
            },
            {
                question: "What intelligent behavior can dolphins show?",
                options: [
                    "Recognizing themselves in mirrors",
                    "Writing messages",
                    "Building houses",
                    "Reading books"
                ],
                correct: 0,
                explanation: "Dolphins can recognize themselves in mirrors, something few animals can do."
            },
            {
                question: "What is a group of dolphins called?",
                options: [
                    "A herd",
                    "A pod",
                    "A flock",
                    "A pack"
                ],
                correct: 1,
                explanation: "Dolphins often work together in groups called pods."
            },
            {
                question: "Why do dolphins hunt in groups?",
                options: [
                    "To swim faster",
                    "To use teamwork and clever strategies to catch prey",
                    "Because they are afraid alone",
                    "To play games"
                ],
                correct: 1,
                explanation: "They use teamwork and clever strategies to catch their prey."
            },
            {
                question: "What is echolocation?",
                options: [
                    "A way of swimming quickly",
                    "Using sound waves to determine the location of objects",
                    "A type of dolphin food",
                    "A way of breathing underwater"
                ],
                correct: 1,
                explanation: "Echolocation involves making sounds and listening to how they bounce back to locate objects."
            },
            {
                question: "How does echolocation help dolphins?",
                options: [
                    "It helps them sleep",
                    "It helps them find food and avoid danger",
                    "It helps them grow faster",
                    "It helps them communicate with humans"
                ],
                correct: 1,
                explanation: "This skill helps them find food and avoid danger, even in dark water."
            },
            {
                question: "How do dolphins show social behavior?",
                options: [
                    "By living completely alone",
                    "By playing together and helping injured pod members",
                    "By avoiding other dolphins",
                    "By fighting constantly"
                ],
                correct: 1,
                explanation: "They often play together and help injured or sick members of their pod."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Dolphins are intelligent, social animals with remarkable abilities.",
                    "Dolphins are dangerous predators to avoid.",
                    "Dolphins cannot communicate with each other.",
                    "Dolphins live only in cold waters."
                ],
                correct: 0,
                explanation: "The text highlights the intelligence, communication, and social behavior of dolphins."
            }
        ]
    },

    {
        id: 18,
        category: "nature",

        level: "B1",
        difficulty: "medium",

        title: "Why Bees Are Important",
        description: "An exploration of the vital role bees play in ecosystems and food production, and why their decline is a serious concern.",

        xp: 35,
        locked: false,

        text: `Bees are often seen simply as small insects that produce honey, but their role in nature is far more significant than most people realize. Bees are one of the most important pollinators on the planet, meaning they help plants reproduce by transferring pollen from one flower to another.

            When a bee visits a flower to collect nectar, tiny grains of pollen stick to its body. As the bee moves from flower to flower, some of this pollen rubs off, allowing the plant to produce seeds and fruit. Without this process, many plants would be unable to reproduce effectively. Scientists estimate that roughly one-third of the food humans eat depends, at least partly, on pollination by bees and other insects, including many fruits, vegetables, and nuts.

            In addition to supporting food production, bees play a crucial role in maintaining healthy ecosystems. Wild plants that provide food and shelter for countless other animals also rely on pollination to survive. If bee populations decline significantly, the effects could ripple through entire ecosystems, affecting not only plants but also the animals and insects that depend on them.

            Unfortunately, bee populations around the world have been declining in recent decades due to several factors. Pesticide use, habitat loss caused by urban development and farming, climate change, and diseases spread by parasites have all contributed to reduced bee populations. This phenomenon, sometimes referred to as "colony collapse disorder," has alarmed scientists and farmers alike, since a continued decline could seriously threaten food security worldwide.

            Fortunately, there are ways individuals and governments can help protect bee populations. Planting flowers that provide nectar throughout the year, reducing pesticide use, and creating protected natural habitats are all effective strategies. Some cities have even begun installing rooftop beehives to support local bee populations while raising public awareness about their importance.

            Ultimately, protecting bees is not just about saving a single species, it is about preserving the delicate balance of ecosystems and securing the future of global food production.`,

        questions: [
            {
                question: "What is a pollinator, according to the text?",
                options: [
                    "An insect that eats plants",
                    "An organism that helps plants reproduce by transferring pollen",
                    "A type of flower",
                    "A disease affecting bees"
                ],
                correct: 1,
                explanation: "A pollinator helps plants reproduce by transferring pollen from one flower to another."
            },
            {
                question: "How does pollen typically transfer between flowers?",
                options: [
                    "Through the wind only",
                    "By sticking to a bee's body as it moves between flowers",
                    "Through rainfall",
                    "By humans manually moving it"
                ],
                correct: 1,
                explanation: "Pollen sticks to a bee's body and rubs off as it visits different flowers."
            },
            {
                question: "What proportion of human food depends at least partly on pollination, according to the text?",
                options: [
                    "About one-tenth",
                    "Roughly one-third",
                    "Almost all of it",
                    "Less than five percent"
                ],
                correct: 1,
                explanation: "Scientists estimate that roughly one-third of the food humans eat depends on pollination."
            },
            {
                question: "Besides food production, what other role do bees play?",
                options: [
                    "They help maintain healthy ecosystems",
                    "They control the weather",
                    "They clean the air directly",
                    "They have no other ecological role"
                ],
                correct: 0,
                explanation: "Bees play a crucial role in maintaining healthy ecosystems by supporting plant reproduction."
            },
            {
                question: "What could happen if bee populations decline significantly?",
                options: [
                    "Nothing would change",
                    "Effects could ripple through entire ecosystems",
                    "Only bees themselves would be affected",
                    "Plants would grow faster"
                ],
                correct: 1,
                explanation: "The decline could affect plants and the animals and insects that depend on them."
            },
            {
                question: "What factors have contributed to declining bee populations?",
                options: [
                    "Only climate change",
                    "Pesticides, habitat loss, climate change, and parasites",
                    "Only diseases",
                    "Increased number of flowers"
                ],
                correct: 1,
                explanation: "Pesticide use, habitat loss, climate change, and diseases have all contributed to the decline."
            },
            {
                question: "What is 'colony collapse disorder'?",
                options: [
                    "A term for the phenomenon of declining bee populations",
                    "A type of flower disease",
                    "A method of beekeeping",
                    "A government policy"
                ],
                correct: 0,
                explanation: "This phenomenon refers to the significant decline in bee populations."
            },
            {
                question: "What strategy is mentioned to help protect bees?",
                options: [
                    "Increasing pesticide use",
                    "Planting flowers that provide nectar throughout the year",
                    "Removing all beehives",
                    "Building more cities"
                ],
                correct: 1,
                explanation: "Planting flowers that provide nectar throughout the year is one strategy mentioned."
            },
            {
                question: "What have some cities done to support local bee populations?",
                options: [
                    "Banned all bees",
                    "Installed rooftop beehives",
                    "Removed all flowers",
                    "Increased pesticide spraying"
                ],
                correct: 1,
                explanation: "Some cities have begun installing rooftop beehives to support local bee populations."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Bees play a vital role in ecosystems and food production, and their decline is a serious concern.",
                    "Bees are unimportant insects that only make honey.",
                    "Bee populations are increasing rapidly worldwide.",
                    "Pesticides have no effect on bee populations."
                ],
                correct: 0,
                explanation: "The text emphasizes the ecological and agricultural importance of bees and the threats they face."
            }
        ]
    },

    {
        id: 19,
        category: "nature",

        level: "B1",
        difficulty: "medium",

        title: "The Mystery of the Northern Lights",
        description: "An exploration of the science behind one of nature's most stunning phenomena, the aurora borealis.",

        xp: 35,
        locked: false,

        text: `For centuries, people living in the far northern regions of the world have gazed up at the night sky in wonder, watching colorful lights dance and shimmer above them. Known as the aurora borealis, or the Northern Lights, this natural phenomenon has inspired countless legends and myths across different cultures, long before scientists understood its true cause.

            Ancient civilizations often interpreted the lights through the lens of their own beliefs. Some Indigenous groups in North America believed the lights were spirits of their ancestors dancing in the sky, while certain Scandinavian legends described them as reflections from the shields of warriors. Without modern scientific knowledge, these explanations helped early societies make sense of an otherwise mysterious and beautiful event.

            Today, scientists understand that the Northern Lights are caused by a fascinating interaction between the sun and Earth's atmosphere. The sun constantly releases streams of charged particles, known as solar wind. When these particles travel through space and reach Earth, most are deflected by our planet's magnetic field. However, near the North and South Poles, the magnetic field is weaker, allowing some particles to enter the atmosphere.

            As these charged particles collide with gases in the atmosphere, such as oxygen and nitrogen, they release energy in the form of light. Different gases produce different colors: oxygen typically creates green or red lights, while nitrogen can produce blue or purple hues. This explains why the aurora sometimes appears as a single color and other times displays a stunning mixture of shades across the sky.

            The intensity and visibility of the Northern Lights also depend on solar activity. During periods of high solar activity, such as solar storms, the auroras can become more vivid and can even be seen at lower latitudes than usual. Scientists closely monitor solar activity not only to predict when auroras might occur but also because powerful solar storms can occasionally disrupt satellites and power grids on Earth.

            Although we now understand the science behind this breathtaking phenomenon, the Northern Lights continue to captivate scientists and travelers alike, drawing thousands of visitors to northern countries each year hoping to witness this unforgettable natural spectacle.`,

        questions: [
            {
                question: "What is another name for the aurora borealis mentioned in the text?",
                options: [
                    "The Southern Cross",
                    "The Northern Lights",
                    "The Solar Storm",
                    "The Magnetic Field"
                ],
                correct: 1,
                explanation: "The aurora borealis is also known as the Northern Lights."
            },
            {
                question: "How did some Indigenous groups in North America interpret the lights?",
                options: [
                    "As a warning of danger",
                    "As spirits of their ancestors dancing in the sky",
                    "As reflections of the moon",
                    "As a sign of bad weather"
                ],
                correct: 1,
                explanation: "Some Indigenous groups believed the lights were spirits of their ancestors dancing in the sky."
            },
            {
                question: "What is solar wind, according to the text?",
                options: [
                    "A type of weather on Earth",
                    "Streams of charged particles released by the sun",
                    "A wind that only occurs at the poles",
                    "A myth with no scientific basis"
                ],
                correct: 1,
                explanation: "Solar wind refers to streams of charged particles constantly released by the sun."
            },
            {
                question: "Why are the Northern Lights most visible near the poles?",
                options: [
                    "Because it is always dark there",
                    "Because Earth's magnetic field is weaker there, allowing particles to enter the atmosphere",
                    "Because the poles are closer to the sun",
                    "Because there is more oxygen there"
                ],
                correct: 1,
                explanation: "Near the poles, the magnetic field is weaker, allowing charged particles to enter the atmosphere."
            },
            {
                question: "What causes the different colors of the aurora?",
                options: [
                    "The time of day",
                    "Different gases in the atmosphere reacting with charged particles",
                    "The temperature of the air",
                    "The phase of the moon"
                ],
                correct: 1,
                explanation: "Different gases produce different colors when they interact with charged particles."
            },
            {
                question: "What color does oxygen typically produce in the aurora?",
                options: [
                    "Blue or purple",
                    "Green or red",
                    "Yellow",
                    "White"
                ],
                correct: 1,
                explanation: "The text states that oxygen typically creates green or red lights."
            },
            {
                question: "What color does nitrogen typically produce?",
                options: [
                    "Green or red",
                    "Blue or purple",
                    "Orange",
                    "Black"
                ],
                correct: 1,
                explanation: "Nitrogen can produce blue or purple hues."
            },
            {
                question: "What happens to the auroras during periods of high solar activity?",
                options: [
                    "They disappear completely",
                    "They can become more vivid and visible at lower latitudes",
                    "They only appear at the equator",
                    "They stop producing color"
                ],
                correct: 1,
                explanation: "During high solar activity, auroras can become more vivid and visible at lower latitudes."
            },
            {
                question: "Why do scientists monitor solar activity closely?",
                options: [
                    "Only for tourism purposes",
                    "Because powerful solar storms can disrupt satellites and power grids",
                    "Because it changes the taste of food",
                    "Because it affects ocean tides only"
                ],
                correct: 1,
                explanation: "Scientists monitor solar activity partly because storms can disrupt satellites and power grids."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "The Northern Lights are a scientifically explainable phenomenon that has fascinated humans for centuries.",
                    "The Northern Lights are purely a myth with no scientific explanation.",
                    "The Northern Lights only occur during solar storms.",
                    "Ancient civilizations fully understood the science behind the aurora."
                ],
                correct: 0,
                explanation: "The text explains both the cultural history and the scientific explanation behind the Northern Lights."
            }
        ]
    },

    {
        id: 20,
        category: "nature",

        level: "B2",
        difficulty: "hard",

        title: "Saving the Rainforest",
        description: "An examination of why rainforests matter, the causes of their destruction, and the global efforts underway to protect them.",

        xp: 50,
        locked: false,

        text: `Tropical rainforests, though they cover less than ten percent of the Earth's land surface, are home to more than half of the world's plant and animal species. These dense, biodiverse ecosystems, found primarily in regions such as the Amazon, Central Africa, and Southeast Asia, play a critical role not only in sustaining wildlife but also in regulating the planet's climate.

            One of the most significant functions of rainforests is their ability to absorb carbon dioxide from the atmosphere. Trees capture carbon through photosynthesis and store it within their trunks, roots, and leaves, effectively acting as natural carbon sinks. The Amazon rainforest alone is estimated to store tens of billions of tons of carbon, making it an essential buffer against the accelerating effects of climate change. When rainforests are destroyed, however, this stored carbon can be released back into the atmosphere, contributing further to global warming rather than mitigating it.

            Despite their importance, rainforests face unprecedented threats. Agricultural expansion, particularly for cattle ranching and soy production, accounts for a substantial portion of deforestation in regions like the Amazon. Additionally, logging operations, both legal and illegal, continue to clear vast areas of forest for timber, while infrastructure projects such as roads and dams further fragment these delicate ecosystems. Mining operations, often searching for valuable minerals beneath the forest floor, have also led to significant habitat destruction, sometimes accompanied by toxic pollution that affects local rivers and communities.

            The consequences of deforestation extend far beyond the loss of trees. Indigenous communities, many of whom have lived sustainably within these forests for generations, often face displacement and loss of their traditional ways of life. Furthermore, as habitats shrink, countless species face increased risk of extinction, disrupting intricate ecological relationships that have developed over millions of years. Some scientists warn that continued deforestation could eventually push certain rainforest regions past a tipping point, transforming them from lush forest into drier savanna-like landscapes incapable of supporting the same biodiversity.

            In response to these challenges, various conservation efforts have emerged at local, national, and international levels. Some governments have implemented stricter environmental regulations and increased enforcement against illegal logging, while international organizations have developed financial incentive programs that reward countries for preserving forested land rather than clearing it. Additionally, grassroots movements led by Indigenous communities and environmental activists have proven instrumental in protecting specific regions, often combining traditional ecological knowledge with modern legal and political strategies.

            Consumer choices also play a role in this broader effort. Increased awareness about products linked to deforestation, such as certain palm oil derivatives or beef sourced from deforested land, has pressured some companies to adopt more sustainable sourcing practices. While these combined efforts have achieved some notable successes, experts widely agree that addressing the root economic and political drivers of deforestation remains essential if rainforests are to be preserved for future generations.`,

        questions: [
            {
                question: "What proportion of the world's plant and animal species do rainforests support, according to the text?",
                options: [
                    "Less than ten percent",
                    "More than half",
                    "Exactly one-third",
                    "Nearly all species"
                ],
                correct: 1,
                explanation: "Rainforests are home to more than half of the world's plant and animal species."
            },
            {
                question: "How do rainforests help regulate the planet's climate?",
                options: [
                    "By producing oxygen only during winter",
                    "By absorbing and storing carbon dioxide through trees",
                    "By reflecting sunlight away from Earth",
                    "By cooling ocean temperatures directly"
                ],
                correct: 1,
                explanation: "Trees capture carbon through photosynthesis and store it, acting as natural carbon sinks."
            },
            {
                question: "What happens to stored carbon when rainforests are destroyed?",
                options: [
                    "It disappears permanently",
                    "It can be released back into the atmosphere",
                    "It turns into oxygen",
                    "It has no environmental effect"
                ],
                correct: 1,
                explanation: "When rainforests are destroyed, stored carbon can be released back into the atmosphere."
            },
            {
                question: "What is identified as a major driver of deforestation in the Amazon?",
                options: [
                    "Tourism",
                    "Agricultural expansion for cattle ranching and soy production",
                    "Scientific research stations",
                    "Reforestation programs"
                ],
                correct: 1,
                explanation: "Agricultural expansion, particularly for cattle ranching and soy production, drives much deforestation."
            },
            {
                question: "Besides agriculture, what other activities contribute to rainforest destruction?",
                options: [
                    "Only tourism",
                    "Logging, infrastructure projects, and mining",
                    "Only scientific expeditions",
                    "Wildlife conservation programs"
                ],
                correct: 1,
                explanation: "Logging, infrastructure projects like roads and dams, and mining all contribute to deforestation."
            },
            {
                question: "How does deforestation affect Indigenous communities, according to the text?",
                options: [
                    "It has no effect on them",
                    "It often leads to displacement and loss of traditional ways of life",
                    "It improves their living conditions",
                    "It only affects wildlife, not people"
                ],
                correct: 1,
                explanation: "Indigenous communities often face displacement and loss of their traditional ways of life."
            },
            {
                question: "What is the 'tipping point' mentioned in the text?",
                options: [
                    "A point where rainforests grow faster",
                    "A point where forests could transform into drier, savanna-like landscapes",
                    "The peak tourist season",
                    "A government policy deadline"
                ],
                correct: 1,
                explanation: "Continued deforestation could push regions past a tipping point, turning forest into savanna-like landscapes."
            },
            {
                question: "What financial strategy have international organizations used to encourage conservation?",
                options: [
                    "Charging countries fines for having forests",
                    "Rewarding countries financially for preserving forested land",
                    "Removing all financial incentives",
                    "Ignoring the issue entirely"
                ],
                correct: 1,
                explanation: "International organizations have developed programs that reward countries for preserving forested land."
            },
            {
                question: "How can consumer choices influence deforestation, according to the text?",
                options: [
                    "They have no real impact",
                    "Awareness about products linked to deforestation can pressure companies toward sustainable practices",
                    "Consumers can directly stop illegal logging",
                    "Consumer choices only affect prices, not sustainability"
                ],
                correct: 1,
                explanation: "Increased awareness has pressured some companies to adopt more sustainable sourcing practices."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Rainforests are vital ecosystems facing serious threats, requiring coordinated efforts to address the root causes of their destruction.",
                    "Rainforest destruction has no significant global consequences.",
                    "Deforestation is entirely caused by natural disasters.",
                    "Conservation efforts have already completely solved the problem of deforestation."
                ],
                correct: 0,
                explanation: "The text discusses the importance of rainforests, the causes of deforestation, and ongoing conservation efforts."
            }
        ]
    },
];

const culture = [
    {
        id: 21,
        category: "culture",

        level: "A2",
        difficulty: "easy",

        title: "The History of Pizza",
        description: "Discover how a simple dish from Naples became one of the most popular foods in the world.",

        xp: 25,
        locked: false,

        text: `Pizza is one of the most popular foods in the world today, but its origins are much simpler than many people imagine. The dish we now recognize as pizza was created in Naples, a city in southern Italy, during the late 18th century. At that time, poor workers needed cheap, quick meals, and flatbread topped with simple ingredients like tomatoes, cheese, and herbs became a popular choice.

            For many years, pizza remained a local dish, eaten mostly by people in Naples. However, in 1889, a baker named Raffaele Esposito created a special pizza for Queen Margherita of Italy during her visit to the city. He topped the pizza with tomatoes, mozzarella cheese, and basil, choosing these ingredients because their colors, red, white, and green, matched the colors of the Italian flag. The queen loved it, and the pizza was later named "Margherita" in her honor.

            Pizza remained mostly unknown outside Italy until Italian immigrants began moving to other countries, especially the United States, in the late 19th and early 20th centuries. They opened small pizzerias in cities like New York, introducing this simple but delicious dish to new communities. At first, pizza was mainly popular among Italian immigrant neighborhoods, but slowly, more people began to try it.

            After World War II, pizza's popularity grew rapidly. American soldiers who had been stationed in Italy returned home with fond memories of the dish, increasing demand for pizza restaurants across the country. Over time, new styles emerged, from thin and crispy Neapolitan pizza to thick, cheesy American varieties, and even unique regional versions found in countries around the world.

            Today, pizza is enjoyed globally, with countless variations reflecting local tastes and ingredients. Despite all these changes, the original idea remains the same: a simple flatbread topped with delicious ingredients, bringing people together over a shared meal.`,

        questions: [
            {
                question: "Where was pizza originally created?",
                options: [
                    "Rome",
                    "Naples",
                    "Florence",
                    "Venice"
                ],
                correct: 1,
                explanation: "The dish was created in Naples, a city in southern Italy."
            },
            {
                question: "Why did poor workers in Naples eat flatbread with simple toppings?",
                options: [
                    "It was a religious tradition",
                    "They needed cheap, quick meals",
                    "It was the only food available",
                    "It was a royal requirement"
                ],
                correct: 1,
                explanation: "Poor workers needed cheap, quick meals, so flatbread with simple toppings became popular."
            },
            {
                question: "Who created the Margherita pizza?",
                options: [
                    "Queen Margherita herself",
                    "A baker named Raffaele Esposito",
                    "An American chef",
                    "A French cook"
                ],
                correct: 1,
                explanation: "A baker named Raffaele Esposito created the special pizza for the queen."
            },
            {
                question: "Why did Esposito choose tomatoes, mozzarella, and basil for the queen's pizza?",
                options: [
                    "They were the cheapest ingredients",
                    "Their colors matched the Italian flag",
                    "The queen requested them specifically",
                    "They were the only ingredients available"
                ],
                correct: 1,
                explanation: "Their colors, red, white, and green, matched the colors of the Italian flag."
            },
            {
                question: "How did pizza first spread outside Italy?",
                options: [
                    "Through television advertisements",
                    "Through Italian immigrants opening pizzerias abroad",
                    "Through government trade agreements",
                    "Through international cooking competitions"
                ],
                correct: 1,
                explanation: "Italian immigrants opened small pizzerias in cities like New York, introducing pizza abroad."
            },
            {
                question: "Who was initially most interested in pizza outside Italy?",
                options: [
                    "Wealthy business owners",
                    "Italian immigrant neighborhoods",
                    "Government officials",
                    "Tourists visiting Italy"
                ],
                correct: 1,
                explanation: "At first, pizza was mainly popular among Italian immigrant neighborhoods."
            },
            {
                question: "What helped increase pizza's popularity after World War II?",
                options: [
                    "New Italian laws",
                    "American soldiers who had been stationed in Italy",
                    "A famous cooking show",
                    "A shortage of other foods"
                ],
                correct: 1,
                explanation: "Soldiers who had been in Italy returned home with fond memories, increasing demand for pizza."
            },
            {
                question: "What styles of pizza are mentioned as having emerged over time?",
                options: [
                    "Only Neapolitan pizza",
                    "Thin Neapolitan and thick American varieties",
                    "Only frozen pizza",
                    "Only dessert pizza"
                ],
                correct: 1,
                explanation: "New styles emerged, from thin Neapolitan pizza to thick, cheesy American varieties."
            },
            {
                question: "What has remained the same about pizza despite its changes?",
                options: [
                    "The exact same toppings everywhere",
                    "The basic idea of flatbread topped with delicious ingredients",
                    "It is only eaten in Italy",
                    "It is always round"
                ],
                correct: 1,
                explanation: "The original idea remains the same: a simple flatbread topped with delicious ingredients."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Pizza evolved from a simple local dish into a beloved food enjoyed worldwide.",
                    "Pizza was invented by an American soldier.",
                    "Pizza has always been eaten the same way everywhere.",
                    "Pizza is only popular in Italy today."
                ],
                correct: 0,
                explanation: "The text traces pizza's journey from a local Neapolitan dish to a globally popular food."
            }
        ]
    },

    {
        id: 22,
        category: "culture",

        level: "A2",
        difficulty: "easy",

        title: "Celebrating Lunar New Year",
        description: "Learn about the traditions, food, and family customs that make Lunar New Year one of the most important celebrations in many cultures.",

        xp: 25,
        locked: false,

        text: `Lunar New Year is one of the most important celebrations in many countries across Asia, including China, Vietnam, and South Korea. Unlike the January 1st New Year celebrated in many Western countries, Lunar New Year follows the cycles of the moon, so its date changes every year, usually falling between late January and mid-February.

            One of the most important parts of Lunar New Year is spending time with family. Many people travel long distances, sometimes across the entire country, to reunite with their relatives for the celebration. This journey is often considered one of the largest annual human migrations in the world, as millions of people return to their hometowns during this period.

            Food plays a central role in the celebration as well. Families often prepare special dishes that carry symbolic meaning. For example, in Chinese culture, dumplings are often eaten because their shape resembles ancient gold coins, symbolizing wealth and prosperity for the coming year. Fish is another common dish, since the word for "fish" sounds similar to the word for "surplus" in Chinese, representing abundance.

            Decorations are another important part of the celebration. Red is considered a lucky color in many Lunar New Year traditions, so homes and streets are often decorated with red lanterns, banners, and paper cutouts. Many people also give red envelopes filled with money to children and unmarried family members, wishing them good luck and prosperity for the year ahead.

            Fireworks and dragon dances are also common during the celebration, as loud noises and vibrant performances are believed to scare away bad luck and welcome good fortune. Overall, Lunar New Year is not only a time for celebration but also a meaningful opportunity for families to strengthen their bonds and welcome a fresh start together.`,

        questions: [
            {
                question: "How is the date of Lunar New Year determined?",
                options: [
                    "It is always January 1st",
                    "It follows the cycles of the moon",
                    "It follows the solar calendar exactly",
                    "It is decided each year by the government"
                ],
                correct: 1,
                explanation: "Lunar New Year follows the cycles of the moon, so its date changes every year."
            },
            {
                question: "When does Lunar New Year usually take place?",
                options: [
                    "Late January to mid-February",
                    "Early March",
                    "Late December",
                    "Mid-summer"
                ],
                correct: 0,
                explanation: "The text says it usually falls between late January and mid-February."
            },
            {
                question: "What is described as one of the largest annual human migrations in the world?",
                options: [
                    "Tourists visiting Asia",
                    "People traveling to reunite with family for Lunar New Year",
                    "Students moving to universities",
                    "Workers relocating for jobs"
                ],
                correct: 1,
                explanation: "Millions of people traveling to reunite with family is considered one of the largest annual migrations."
            },
            {
                question: "Why are dumplings often eaten during Lunar New Year in Chinese culture?",
                options: [
                    "They are easy to cook",
                    "Their shape resembles ancient gold coins, symbolizing wealth",
                    "They are the cheapest food available",
                    "They are only eaten by children"
                ],
                correct: 1,
                explanation: "Dumplings resemble ancient gold coins, symbolizing wealth and prosperity."
            },
            {
                question: "Why is fish a symbolic food during the celebration?",
                options: [
                    "Because it is the most common food in Asia",
                    "Because the word for 'fish' sounds like the word for 'surplus' in Chinese",
                    "Because it represents bad luck",
                    "Because it is only eaten by the wealthy"
                ],
                correct: 1,
                explanation: "The word for fish sounds similar to the word for surplus, representing abundance."
            },
            {
                question: "What color is considered lucky during Lunar New Year?",
                options: [
                    "Blue",
                    "Red",
                    "Green",
                    "Black"
                ],
                correct: 1,
                explanation: "Red is considered a lucky color in many Lunar New Year traditions."
            },
            {
                question: "Who typically receives red envelopes filled with money?",
                options: [
                    "Only elderly people",
                    "Children and unmarried family members",
                    "Only married couples",
                    "Strangers on the street"
                ],
                correct: 1,
                explanation: "Red envelopes filled with money are given to children and unmarried family members."
            },
            {
                question: "Why are fireworks and dragon dances performed during the celebration?",
                options: [
                    "To attract tourists",
                    "To scare away bad luck and welcome good fortune",
                    "Because they are required by law",
                    "To celebrate the harvest season"
                ],
                correct: 1,
                explanation: "Loud noises and vibrant performances are believed to scare away bad luck and welcome good fortune."
            },
            {
                question: "What is described as one of the most important parts of the celebration?",
                options: [
                    "Watching fireworks alone",
                    "Spending time with family",
                    "Traveling internationally",
                    "Buying new clothes"
                ],
                correct: 1,
                explanation: "One of the most important parts of Lunar New Year is spending time with family."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Lunar New Year is a meaningful celebration filled with family traditions, symbolic food, and customs for good fortune.",
                    "Lunar New Year is only about fireworks.",
                    "Lunar New Year is celebrated on January 1st worldwide.",
                    "Lunar New Year has no cultural significance."
                ],
                correct: 0,
                explanation: "The text highlights the family traditions, symbolic foods, and customs central to Lunar New Year."
            }
        ]
    },

    {
        id: 23,
        category: "culture",

        level: "B1",
        difficulty: "medium",

        title: "Famous Landmarks of Italy",
        description: "A journey through some of Italy's most iconic historical and architectural treasures.",

        xp: 35,
        locked: false,

        text: `Italy is home to some of the most recognizable landmarks in the world, drawing millions of visitors each year who come to admire its rich history, art, and architecture. From ancient ruins to Renaissance masterpieces, the country offers a remarkable journey through centuries of human achievement.

            One of the most iconic landmarks is the Colosseum in Rome, an enormous amphitheater built nearly two thousand years ago. Originally used for gladiator contests and public spectacles, the Colosseum could hold as many as fifty thousand spectators. Despite centuries of earthquakes, weathering, and even stone theft for other building projects, much of its impressive structure still stands today, offering visitors a glimpse into ancient Roman engineering and entertainment culture.

            Another world-famous site is the Leaning Tower of Pisa. Construction began in the 12th century, but the tower started tilting almost immediately due to unstable ground beneath its foundation. Rather than being demolished, the tilt eventually became the tower's most famous feature, attracting curious visitors from around the world. Engineers have since worked to stabilize the structure, ensuring it remains standing, tilt and all, for future generations to admire.

            In Florence, visitors can explore the Cathedral of Santa Maria del Fiore, commonly known as the Florence Cathedral, famous for its massive dome designed by Filippo Brunelleschi in the early 15th century. At the time, the dome was considered an engineering marvel, as no one had successfully built a dome of that size since ancient Roman times. Brunelleschi's innovative construction techniques solved problems that had puzzled architects for decades.

            Venice, a city built on a series of small islands connected by canals, offers yet another unique landmark experience. St. Mark's Basilica, with its ornate mosaics and Byzantine-influenced architecture, stands as a testament to Venice's historical role as a major trading hub between Europe and the East.

            Together, these landmarks reflect Italy's extraordinary cultural legacy, showcasing achievements in engineering, art, and architecture that continue to inspire admiration and study centuries after their creation.`,

        questions: [
            {
                question: "What was the Colosseum originally used for?",
                options: [
                    "Religious ceremonies",
                    "Gladiator contests and public spectacles",
                    "Government meetings",
                    "Trading goods"
                ],
                correct: 1,
                explanation: "The Colosseum was originally used for gladiator contests and public spectacles."
            },
            {
                question: "How many spectators could the Colosseum hold?",
                options: [
                    "About ten thousand",
                    "As many as fifty thousand",
                    "Over one million",
                    "Only a few hundred"
                ],
                correct: 1,
                explanation: "The Colosseum could hold as many as fifty thousand spectators."
            },
            {
                question: "Despite centuries of damage, what is true about the Colosseum today?",
                options: [
                    "It has completely disappeared",
                    "Much of its impressive structure still stands",
                    "It was fully rebuilt in modern times",
                    "It is closed to visitors"
                ],
                correct: 1,
                explanation: "Despite earthquakes, weathering, and stone theft, much of the structure still stands today."
            },
            {
                question: "Why did the Leaning Tower of Pisa start tilting?",
                options: [
                    "An earthquake damaged it",
                    "Unstable ground beneath its foundation",
                    "It was designed to tilt intentionally",
                    "Heavy storms shifted its base"
                ],
                correct: 1,
                explanation: "The tower started tilting due to unstable ground beneath its foundation."
            },
            {
                question: "What happened to the tower instead of being demolished?",
                options: [
                    "It was buried underground",
                    "Its tilt became its most famous feature",
                    "It was moved to another location",
                    "It was rebuilt completely straight"
                ],
                correct: 1,
                explanation: "Rather than being demolished, the tilt became the tower's most famous feature."
            },
            {
                question: "Who designed the dome of the Florence Cathedral?",
                options: [
                    "Michelangelo",
                    "Filippo Brunelleschi",
                    "Leonardo da Vinci",
                    "Raphael"
                ],
                correct: 1,
                explanation: "The dome was designed by Filippo Brunelleschi in the early 15th century."
            },
            {
                question: "Why was Brunelleschi's dome considered an engineering marvel?",
                options: [
                    "It was made of gold",
                    "No one had successfully built a dome of that size since ancient Roman times",
                    "It was the tallest building in the world",
                    "It was built in a single day"
                ],
                correct: 1,
                explanation: "No one had successfully built a dome of that size since ancient Roman times."
            },
            {
                question: "What is Venice built on?",
                options: [
                    "A single large island",
                    "A series of small islands connected by canals",
                    "A mountain range",
                    "Reclaimed desert land"
                ],
                correct: 1,
                explanation: "Venice is a city built on a series of small islands connected by canals."
            },
            {
                question: "What does St. Mark's Basilica represent about Venice's history?",
                options: [
                    "Its role as a farming community",
                    "Its historical role as a major trading hub between Europe and the East",
                    "Its status as a military fortress",
                    "Its role as a fishing village only"
                ],
                correct: 1,
                explanation: "St. Mark's Basilica reflects Venice's historical role as a major trading hub."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Italy's famous landmarks showcase remarkable achievements in engineering, art, and architecture throughout history.",
                    "Italy has only one important historical landmark.",
                    "All of Italy's landmarks were built in the same century.",
                    "Italian landmarks are unimportant to tourism."
                ],
                correct: 0,
                explanation: "The text highlights several landmarks that reflect Italy's rich historical and architectural legacy."
            }
        ]
    },

    {
        id: 24,
        category: "culture",

        level: "B1",
        difficulty: "medium",

        title: "Traditional Japanese Tea Ceremony",
        description: "An introduction to the philosophy, rituals, and cultural significance behind Japan's traditional tea ceremony.",

        xp: 35,
        locked: false,

        text: `The Japanese tea ceremony, known as "chanoyu" or "sado," is a traditional practice that involves far more than simply preparing and drinking tea. Rooted in centuries of history, the ceremony reflects deep cultural values such as respect, harmony, purity, and tranquility, principles that guide every movement and gesture performed during the ritual.

            The origins of the tea ceremony can be traced back to the introduction of tea from China during the 9th century, though it wasn't until several centuries later that it developed into the highly refined ritual practiced today. A tea master named Sen no Rikyu, who lived in the 16th century, is often credited with shaping many of the principles still followed in modern tea ceremonies, emphasizing simplicity and mindfulness over luxury and extravagance.

            A traditional tea ceremony typically takes place in a specially designed tea room, often featuring a small entrance that requires guests to bow as they enter, symbolizing humility regardless of social status. Once inside, guests observe carefully choreographed movements as the host prepares powdered green tea, known as matcha, using precise, deliberate gestures that have been practiced and perfected over years of training.

            Every object used in the ceremony, from the tea bowl to the bamboo whisk, is chosen thoughtfully, often reflecting the season or the occasion. Hosts may select particular decorations, flower arrangements, or hanging scrolls that complement the mood they wish to create, demonstrating attentiveness to their guests' experience.

            Beyond the physical preparation of tea, the ceremony is deeply tied to the concept of "ichigo ichie," which roughly translates to "one time, one meeting." This philosophy encourages participants to treasure each gathering as a unique, unrepeatable moment, fostering genuine presence and appreciation between host and guest.

            Although modern life has made the traditional, multi-hour version of the ceremony less common in everyday settings, tea ceremonies remain an important part of Japanese cultural education, often taught in specialized schools, and continue to be performed during special occasions, cultural events, and for visitors wishing to experience this meaningful tradition firsthand.`,

        questions: [
            {
                question: "What is the Japanese tea ceremony also known as?",
                options: [
                    "Ikebana",
                    "Chanoyu or sado",
                    "Bushido",
                    "Origami"
                ],
                correct: 1,
                explanation: "The Japanese tea ceremony is known as 'chanoyu' or 'sado.'"
            },
            {
                question: "What cultural values does the tea ceremony reflect?",
                options: [
                    "Speed and efficiency",
                    "Respect, harmony, purity, and tranquility",
                    "Wealth and competition",
                    "Individualism"
                ],
                correct: 1,
                explanation: "The ceremony reflects respect, harmony, purity, and tranquility."
            },
            {
                question: "When was tea introduced to Japan from China, according to the text?",
                options: [
                    "During the 9th century",
                    "During the 16th century",
                    "During the 20th century",
                    "During the Middle Ages exclusively"
                ],
                correct: 0,
                explanation: "The origins can be traced back to the introduction of tea from China during the 9th century."
            },
            {
                question: "Who is credited with shaping many principles of the modern tea ceremony?",
                options: [
                    "Emperor Meiji",
                    "Sen no Rikyu",
                    "A Chinese monk",
                    "A 20th-century artist"
                ],
                correct: 1,
                explanation: "A tea master named Sen no Rikyu is credited with shaping many principles still followed today."
            },
            {
                question: "What did Sen no Rikyu emphasize in the tea ceremony?",
                options: [
                    "Luxury and extravagance",
                    "Simplicity and mindfulness",
                    "Speed and efficiency",
                    "Competition between guests"
                ],
                correct: 1,
                explanation: "He emphasized simplicity and mindfulness over luxury and extravagance."
            },
            {
                question: "Why do guests bow as they enter the tea room?",
                options: [
                    "It is required by law",
                    "It symbolizes humility regardless of social status",
                    "The entrance is too dark to see",
                    "It signals the ceremony is over"
                ],
                correct: 1,
                explanation: "The small entrance requires bowing, symbolizing humility regardless of social status."
            },
            {
                question: "What is matcha, as mentioned in the text?",
                options: [
                    "A type of tea bowl",
                    "Powdered green tea",
                    "A bamboo whisk",
                    "A hanging scroll"
                ],
                correct: 1,
                explanation: "Matcha is the powdered green tea prepared during the ceremony."
            },
            {
                question: "Why are objects like the tea bowl and decorations chosen thoughtfully?",
                options: [
                    "To increase the cost of the ceremony",
                    "To reflect the season or occasion and create a certain mood",
                    "Because they are randomly selected",
                    "To follow strict government regulations"
                ],
                correct: 1,
                explanation: "Objects are chosen thoughtfully to reflect the season or occasion and complement the mood."
            },
            {
                question: "What does the concept of 'ichigo ichie' encourage?",
                options: [
                    "Repeating the same ceremony exactly every time",
                    "Treasuring each gathering as a unique, unrepeatable moment",
                    "Focusing only on the tea itself",
                    "Avoiding emotional connection with guests"
                ],
                correct: 1,
                explanation: "This philosophy encourages treasuring each gathering as a unique, unrepeatable moment."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "The Japanese tea ceremony is a deeply symbolic tradition reflecting mindfulness, respect, and appreciation for the present moment.",
                    "The Japanese tea ceremony is simply about drinking tea quickly.",
                    "The Japanese tea ceremony has no historical significance.",
                    "The Japanese tea ceremony is no longer practiced today."
                ],
                correct: 0,
                explanation: "The text explains the deep cultural philosophy and symbolism behind the tea ceremony."
            }
        ]
    },

    {
        id: 25,
        category: "culture",

        level: "B2",
        difficulty: "hard",

        title: "The Silk Road: A Bridge Between Civilizations",
        description: "An exploration of how the ancient trade routes connecting East and West shaped languages, religions, cuisines, and entire cultures for centuries.",

        xp: 50,
        locked: false,

        text: `For more than fifteen hundred years, a vast network of trade routes stretched across Asia, connecting China to the Mediterranean world through Central Asia, Persia, and beyond. Known today as the Silk Road, this network was never a single road but rather a complex web of overland and maritime paths that facilitated the exchange of goods, ideas, and cultures on an unprecedented scale.

            The Silk Road takes its name from one of its most valuable commodities: Chinese silk, a luxurious fabric that was highly prized in Rome and other Mediterranean societies. However, silk was far from the only good traded along these routes. Merchants carried spices, precious stones, glassware, paper, and even exotic animals across thousands of miles, often passing goods through multiple intermediaries before they reached their final destination. Few traders traveled the entire route themselves; instead, goods typically changed hands numerous times, with different merchants specializing in specific segments of the journey.

            Beyond material goods, the Silk Road served as a conduit for the exchange of ideas, religions, and technologies, arguably its most transformative legacy. Buddhism spread from India into China and eventually throughout East Asia largely through these trade networks, carried by monks and merchants alike. Similarly, Islam later expanded eastward along these same routes, while Nestorian Christianity found communities as far east as China. Papermaking, a Chinese invention, gradually made its way westward, eventually reaching the Islamic world and, centuries later, Europe, fundamentally transforming how knowledge was recorded and disseminated.

            The Silk Road also facilitated an extraordinary exchange of agricultural products and culinary traditions. Crops such as grapes, pomegranates, and sesame moved westward to eastward, while others, including certain varieties of citrus and rice, spread in the opposite direction. This exchange permanently altered regional cuisines, introducing ingredients that would later become staples in dishes far removed from their places of origin.

            Despite its name suggesting a purely commercial function, the Silk Road was equally significant as a mechanism of cultural diffusion, one that operated not through deliberate policy but through the cumulative effect of countless individual interactions between traders, travelers, and communities along its length. Cities such as Samarkand and Kashgar flourished as cosmopolitan hubs where multiple languages, religions, and traditions coexisted, sometimes uneasily, but often productively.

            The decline of the Silk Road in the late medieval period resulted from several converging factors: the rise of maritime trade routes that offered faster and often safer alternatives, political instability across Central Asia following the fragmentation of the Mongol Empire, and shifting economic centers of gravity toward Atlantic trade following European exploration of the Americas. Nevertheless, the cultural, linguistic, and religious legacies established during the Silk Road's centuries of activity continue to shape the societies of Eurasia today, a testament to how thoroughly interconnected the ancient world truly was, long before modern globalization.`,

        questions: [
            {
                question: "What was the Silk Road, according to the text?",
                options: [
                    "A single paved road built by the Chinese government",
                    "A complex web of overland and maritime trade routes",
                    "A modern highway system",
                    "A religious pilgrimage path"
                ],
                correct: 1,
                explanation: "The text describes it as a complex web of overland and maritime paths, not a single road."
            },
            {
                question: "Why is it called the Silk Road?",
                options: [
                    "Because silk was the only good ever traded",
                    "Because it is named after one of its most valuable commodities, Chinese silk",
                    "Because the road was made of silk fibers",
                    "Because Roman merchants invented the name arbitrarily"
                ],
                correct: 1,
                explanation: "It takes its name from Chinese silk, a highly prized commodity, though many other goods were traded."
            },
            {
                question: "How did most goods typically travel along the Silk Road?",
                options: [
                    "A single merchant carried goods the entire distance",
                    "Goods changed hands numerous times between different merchants",
                    "Goods were transported only by government officials",
                    "Everything was shipped directly by sea"
                ],
                correct: 1,
                explanation: "Few traders traveled the entire route; goods typically passed through multiple intermediaries."
            },
            {
                question: "What is described as arguably the Silk Road's most transformative legacy?",
                options: [
                    "The trade of silk fabric",
                    "The exchange of ideas, religions, and technologies",
                    "The construction of new cities",
                    "The spread of a single unified language"
                ],
                correct: 1,
                explanation: "The text states that the exchange of ideas, religions, and technologies was arguably its most transformative legacy."
            },
            {
                question: "How did Buddhism spread into China and East Asia, according to the text?",
                options: [
                    "Through military conquest",
                    "Largely through trade networks, carried by monks and merchants",
                    "Through official government treaties",
                    "It originated in China independently"
                ],
                correct: 1,
                explanation: "Buddhism spread largely through trade networks, carried by monks and merchants alike."
            },
            {
                question: "What Chinese invention gradually spread westward along the Silk Road?",
                options: [
                    "Gunpowder",
                    "Papermaking",
                    "The compass",
                    "Printing presses"
                ],
                correct: 1,
                explanation: "Papermaking gradually made its way westward, eventually reaching the Islamic world and Europe."
            },
            {
                question: "What effect did the Silk Road have on regional cuisines?",
                options: [
                    "It had no effect on food traditions",
                    "It permanently altered cuisines by introducing new ingredients across regions",
                    "It only affected Chinese cuisine",
                    "It eliminated local food traditions entirely"
                ],
                correct: 1,
                explanation: "The exchange of crops permanently altered regional cuisines by introducing new staple ingredients."
            },
            {
                question: "How does the text characterize cities like Samarkand and Kashgar?",
                options: [
                    "As isolated villages with little cultural exchange",
                    "As cosmopolitan hubs where multiple languages and religions coexisted",
                    "As purely military outposts",
                    "As cities that rejected all foreign influence"
                ],
                correct: 1,
                explanation: "These cities flourished as cosmopolitan hubs where multiple languages, religions, and traditions coexisted."
            },
            {
                question: "What factors contributed to the decline of the Silk Road?",
                options: [
                    "A single sudden war that destroyed all trade routes",
                    "The rise of maritime trade, political instability, and shifting economic centers toward the Atlantic",
                    "A complete loss of interest in trade goods",
                    "The invention of the airplane"
                ],
                correct: 1,
                explanation: "The decline resulted from maritime trade alternatives, political instability, and shifting economic focus toward Atlantic trade."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "The Silk Road was a vast network that profoundly shaped cultures, religions, and economies across Eurasia through centuries of exchange.",
                    "The Silk Road was solely a commercial venture with no cultural impact.",
                    "The Silk Road was a single road built exclusively for silk trade.",
                    "The Silk Road had no lasting influence on modern societies."
                ],
                correct: 0,
                explanation: "The text emphasizes how the Silk Road facilitated far-reaching cultural, religious, and economic exchange with lasting effects."
            }
        ]
    },
];

const business = [
    {
        id: 26,
        category: "business",

        level: "A2",
        difficulty: "easy",

        title: "Emma's First Job Interview",
        description: "Emma prepares for and attends her very first job interview, learning valuable lessons along the way.",

        xp: 25,
        locked: false,

        text: `Emma had just finished high school and was excited to apply for her first part-time job at a small bookstore near her house. When she received a call inviting her for an interview, she felt both nervous and thrilled at the same time.

            The night before the interview, Emma prepared carefully. She researched the bookstore online, read about the types of books they sold, and thought about possible questions the manager might ask her. She also chose a simple, neat outfit and made sure to get a good night's sleep.

            On the day of the interview, Emma arrived fifteen minutes early, as her mother had advised her. She sat in the waiting area, practicing calm breathing to control her nerves. When the manager, Mr. Collins, called her into his office, she greeted him with a smile and a firm handshake.

            Mr. Collins asked Emma why she wanted to work at the bookstore. She explained that she loved reading and believed she could help customers find books they would enjoy. He also asked about her availability and whether she had any experience working with people. Emma admitted she didn't have previous job experience, but she emphasized that she was a fast learner and very reliable.

            At the end of the interview, Mr. Collins thanked Emma for coming and said he would contact her within a week. Although Emma wasn't sure how well she had done, she felt proud that she had stayed calm and answered honestly. A few days later, she received a call informing her that she had gotten the job. She was overjoyed and immediately called her parents to share the good news.`,

        questions: [
            {
                question: "Where did Emma apply for her first job?",
                options: [
                    "A restaurant",
                    "A small bookstore",
                    "A clothing shop",
                    "A supermarket"
                ],
                correct: 1,
                explanation: "Emma applied for a part-time job at a small bookstore near her house."
            },
            {
                question: "How did Emma feel when she was invited for an interview?",
                options: [
                    "Bored",
                    "Nervous and thrilled",
                    "Angry",
                    "Indifferent"
                ],
                correct: 1,
                explanation: "She felt both nervous and thrilled at the same time."
            },
            {
                question: "What did Emma do the night before the interview?",
                options: [
                    "She went out with friends",
                    "She researched the bookstore and prepared her outfit",
                    "She stayed up all night studying",
                    "She ignored the interview completely"
                ],
                correct: 1,
                explanation: "She researched the bookstore online and chose a simple, neat outfit."
            },
            {
                question: "How early did Emma arrive at the interview?",
                options: [
                    "On time exactly",
                    "Fifteen minutes early",
                    "One hour early",
                    "Ten minutes late"
                ],
                correct: 1,
                explanation: "Emma arrived fifteen minutes early, as her mother had advised her."
            },
            {
                question: "Why did Emma say she wanted to work at the bookstore?",
                options: [
                    "She needed money urgently",
                    "She loved reading and wanted to help customers find books",
                    "It was close to her house only",
                    "Her friend worked there"
                ],
                correct: 1,
                explanation: "She explained that she loved reading and believed she could help customers find books."
            },
            {
                question: "Did Emma have previous job experience?",
                options: [
                    "Yes, she had worked in a shop before",
                    "No, she admitted she didn't have previous experience",
                    "Yes, she had worked at a bookstore before",
                    "She refused to answer"
                ],
                correct: 1,
                explanation: "Emma admitted she didn't have previous job experience."
            },
            {
                question: "What did Emma emphasize despite lacking experience?",
                options: [
                    "That she was the best candidate",
                    "That she was a fast learner and very reliable",
                    "That she needed the job badly",
                    "That she knew the manager personally"
                ],
                correct: 1,
                explanation: "She emphasized that she was a fast learner and very reliable."
            },
            {
                question: "When did Mr. Collins say he would contact Emma?",
                options: [
                    "The next day",
                    "Within a week",
                    "In a month",
                    "He never said"
                ],
                correct: 1,
                explanation: "He said he would contact her within a week."
            },
            {
                question: "How did Emma feel after the interview, even without knowing the result?",
                options: [
                    "Disappointed",
                    "Proud that she stayed calm and answered honestly",
                    "Angry at herself",
                    "Completely indifferent"
                ],
                correct: 1,
                explanation: "She felt proud that she had stayed calm and answered honestly."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Emma prepares well and succeeds in getting her first job.",
                    "Emma fails her interview completely.",
                    "Emma decides not to work at all.",
                    "Emma already had a lot of job experience."
                ],
                correct: 0,
                explanation: "The story follows Emma's preparation and success in getting her first job through honesty and good preparation."
            }
        ]
    },

    {
        id: 27,
        category: "business",

        level: "A2",
        difficulty: "easy",

        title: "Working From Home",
        description: "Carlos adjusts to a new routine after his company allows employees to work remotely.",

        xp: 25,
        locked: false,

        text: `Carlos had worked in an office for five years when his company announced that employees could start working from home. At first, he felt uncertain about the change, since he had always enjoyed chatting with his coworkers during lunch breaks and felt more focused in a traditional office setting.

            During his first week working from home, Carlos struggled to organize his schedule. He often woke up late because he no longer needed to commute, and he found it difficult to separate his work time from his personal time. Sometimes he worked in his pajamas while sitting on the couch, which made him feel less professional and less motivated.

            After discussing these struggles with a friend who had worked remotely for years, Carlos decided to make some changes. He set up a small desk in a quiet corner of his apartment, dedicated only to work. He also created a morning routine, waking up at the same time every day, getting dressed as if he were going to the office, and taking a short walk before starting work.

            These changes made a noticeable difference. Carlos found that having a dedicated workspace helped him concentrate better, and his new morning routine gave him more energy throughout the day. He also scheduled regular video calls with his team to stay connected and avoid feeling isolated.

            After a month of working from home, Carlos realized that although he missed some aspects of office life, he had gained valuable time by not commuting, and he felt more in control of his daily schedule. He decided that working from home, when organized properly, could actually improve both his productivity and his overall well-being.`,

        questions: [
            {
                question: "How long had Carlos worked in an office before his company allowed remote work?",
                options: [
                    "One year",
                    "Five years",
                    "Ten years",
                    "Six months"
                ],
                correct: 1,
                explanation: "Carlos had worked in an office for five years."
            },
            {
                question: "Why did Carlos feel uncertain about working from home at first?",
                options: [
                    "He didn't like his job",
                    "He enjoyed chatting with coworkers and felt more focused in an office",
                    "He didn't have a computer",
                    "His company didn't trust him"
                ],
                correct: 1,
                explanation: "He enjoyed chatting with coworkers and felt more focused in a traditional office setting."
            },
            {
                question: "What problem did Carlos have during his first week working from home?",
                options: [
                    "He couldn't access his email",
                    "He struggled to organize his schedule",
                    "His internet didn't work",
                    "He had too many meetings"
                ],
                correct: 1,
                explanation: "Carlos struggled to organize his schedule during his first week."
            },
            {
                question: "How did working in pajamas make Carlos feel?",
                options: [
                    "More comfortable and productive",
                    "Less professional and less motivated",
                    "More energetic",
                    "He never worked in pajamas"
                ],
                correct: 1,
                explanation: "Working in pajamas made him feel less professional and less motivated."
            },
            {
                question: "What did Carlos do to improve his situation?",
                options: [
                    "He quit his job",
                    "He set up a dedicated workspace and created a morning routine",
                    "He went back to the office immediately",
                    "He stopped working entirely"
                ],
                correct: 1,
                explanation: "He set up a small desk dedicated to work and created a consistent morning routine."
            },
            {
                question: "What did Carlos's new morning routine include?",
                options: [
                    "Sleeping in late every day",
                    "Waking up at the same time, getting dressed, and taking a walk",
                    "Skipping breakfast",
                    "Staying in bed while working"
                ],
                correct: 1,
                explanation: "He woke up at the same time, got dressed as if going to the office, and took a short walk."
            },
            {
                question: "How did Carlos stay connected with his team?",
                options: [
                    "He visited the office every day",
                    "He scheduled regular video calls",
                    "He only sent emails",
                    "He stopped communicating with them"
                ],
                correct: 1,
                explanation: "He scheduled regular video calls with his team to stay connected."
            },
            {
                question: "What benefit did Carlos gain from not commuting?",
                options: [
                    "He lost motivation",
                    "He gained valuable time",
                    "He felt more tired",
                    "He had less free time"
                ],
                correct: 1,
                explanation: "He realized that he had gained valuable time by not commuting."
            },
            {
                question: "What did Carlos conclude about working from home by the end of the story?",
                options: [
                    "It was impossible to organize",
                    "When organized properly, it could improve productivity and well-being",
                    "It was worse than office work in every way",
                    "He wanted to quit his job"
                ],
                correct: 1,
                explanation: "He decided that working from home, when organized properly, could improve both productivity and well-being."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Carlos adapts to working from home by creating helpful routines and structure.",
                    "Carlos refuses to work from home.",
                    "Carlos loses his job due to poor performance.",
                    "Carlos never adjusts to remote work."
                ],
                correct: 0,
                explanation: "The story shows how Carlos successfully adapted to remote work by creating structure and routines."
            }
        ]
    },

    {
        id: 28,
        category: "business",

        level: "B1",
        difficulty: "medium",

        title: "Starting a Small Coffee Shop",
        description: "Follow the journey of Laura and her brother as they turn their dream of opening a coffee shop into reality, facing challenges along the way.",

        xp: 35,
        locked: false,

        text: `Laura had always dreamed of owning her own coffee shop, and after years of saving money and working in various cafés to gain experience, she finally decided it was time to open her own business. She partnered with her brother, Mark, who had a background in finance and could help manage the shop's budget.

            The first challenge they faced was finding the right location. They spent weeks visiting different neighborhoods, comparing rental prices, and analyzing foot traffic at various times of day. Eventually, they found a small space near a university, reasoning that students would provide a steady stream of customers throughout the week.

            Once they secured the location, Laura and Mark had to create a business plan, which included calculating startup costs, deciding on a menu, and figuring out how to differentiate their shop from the many other cafés in the area. Laura decided to focus on locally sourced beans and unique flavor combinations, while Mark researched pricing strategies that would keep the business profitable without discouraging customers.

            Renovating the space took longer than expected due to unexpected plumbing issues, which delayed their opening by nearly a month. This delay put additional financial pressure on the siblings, as they had already spent a significant portion of their budget on equipment and initial inventory. Despite the setback, they used the extra time to train their small staff and refine their menu based on feedback from friends and family who tried early samples.

            When the coffee shop finally opened, business was slower than expected during the first two weeks, which worried Laura. However, after implementing a social media marketing strategy and hosting a grand opening event with free samples, word began to spread. Within three months, the shop had developed a loyal customer base, particularly among students who appreciated the quiet atmosphere for studying.

            Looking back, Laura and Mark agreed that although opening a small business involved far more challenges than they had anticipated, careful planning, adaptability, and persistence had ultimately allowed their dream to become a sustainable reality.`,

        questions: [
            {
                question: "What did Laura do before deciding to open her own coffee shop?",
                options: [
                    "She studied business in college",
                    "She saved money and worked in various cafés to gain experience",
                    "She inherited money from her family",
                    "She worked as an accountant"
                ],
                correct: 1,
                explanation: "She spent years saving money and working in cafés to gain experience."
            },
            {
                question: "Why did Laura partner with her brother, Mark?",
                options: [
                    "He had experience as a barista",
                    "He had a background in finance and could manage the budget",
                    "He owned the building they used",
                    "He had no other job at the time"
                ],
                correct: 1,
                explanation: "Mark had a background in finance and could help manage the shop's budget."
            },
            {
                question: "Why did they choose a location near a university?",
                options: [
                    "It had the cheapest rent in the city",
                    "Students would provide a steady stream of customers",
                    "It was close to Laura's house",
                    "There were no other cafés nearby"
                ],
                correct: 1,
                explanation: "They reasoned that students would provide a steady stream of customers throughout the week."
            },
            {
                question: "How did Laura try to differentiate the shop from other cafés?",
                options: [
                    "By offering the lowest prices in the area",
                    "By focusing on locally sourced beans and unique flavor combinations",
                    "By copying a famous coffee chain",
                    "By only serving one type of coffee"
                ],
                correct: 1,
                explanation: "Laura decided to focus on locally sourced beans and unique flavor combinations."
            },
            {
                question: "Why was the opening of the coffee shop delayed?",
                options: [
                    "They ran out of money completely",
                    "Unexpected plumbing issues during renovation",
                    "The location fell through",
                    "They couldn't hire staff"
                ],
                correct: 1,
                explanation: "Renovating the space took longer due to unexpected plumbing issues, delaying the opening by nearly a month."
            },
            {
                question: "How did the delay affect the business?",
                options: [
                    "It had no effect at all",
                    "It put additional financial pressure on the siblings",
                    "It made the business more profitable",
                    "It forced them to cancel the project"
                ],
                correct: 1,
                explanation: "The delay put additional financial pressure on the siblings, since they had already spent a large portion of their budget."
            },
            {
                question: "What did Laura and Mark do during the unexpected delay?",
                options: [
                    "They gave up on the project",
                    "They trained staff and refined their menu based on feedback",
                    "They ignored the problem",
                    "They opened without finishing renovations"
                ],
                correct: 1,
                explanation: "They used the extra time to train their staff and refine the menu based on feedback."
            },
            {
                question: "How was business during the first two weeks after opening?",
                options: [
                    "Extremely busy immediately",
                    "Slower than expected",
                    "Completely closed due to problems",
                    "Better than they had hoped"
                ],
                correct: 1,
                explanation: "Business was slower than expected during the first two weeks, which worried Laura."
            },
            {
                question: "What helped improve business after the slow start?",
                options: [
                    "Lowering prices drastically",
                    "A social media marketing strategy and a grand opening event",
                    "Closing the shop temporarily",
                    "Changing the location again"
                ],
                correct: 1,
                explanation: "Implementing a social media marketing strategy and hosting a grand opening event helped spread the word."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Opening a small business requires careful planning, adaptability, and persistence to overcome challenges.",
                    "Starting a business is always quick and easy.",
                    "Laura and Mark's coffee shop failed completely.",
                    "Location is the only factor that matters in business success."
                ],
                correct: 0,
                explanation: "The story shows how planning, adaptability, and persistence helped Laura and Mark succeed despite challenges."
            }
        ]
    },

    {
        id: 29,
        category: "business",

        level: "B1",
        difficulty: "medium",

        title: "How Online Shopping Changed Business",
        description: "An overview of how the rise of e-commerce transformed the way companies sell products and how consumers shop.",

        xp: 35,
        locked: false,

        text: `Just a few decades ago, shopping meant visiting physical stores, browsing shelves, and speaking directly with salespeople. Today, a significant portion of global commerce takes place online, fundamentally transforming how businesses operate and how consumers make purchasing decisions.

            One of the most significant changes brought by online shopping is convenience. Consumers can now browse thousands of products, compare prices across different retailers, and make purchases from their homes at any time of day, without the limitations of store hours or geographic location. This convenience has led to a dramatic increase in consumer expectations, with many shoppers now expecting fast shipping, easy returns, and detailed product information before making a purchase.

            For businesses, the shift toward online shopping has required significant adaptation. Companies that once relied solely on physical storefronts have had to invest in websites, digital marketing, and logistics systems capable of handling online orders efficiently. Small businesses, in particular, have benefited from platforms that allow them to reach customers far beyond their local area, something that would have been extremely difficult and costly in the past.

            However, this transformation has also created challenges. Traditional retailers have faced increased competition from online-only businesses that often have lower overhead costs, allowing them to offer more competitive prices. Many physical stores have had to rethink their strategies, some choosing to close underperforming locations while others have adopted a hybrid approach, combining online sales with an in-person shopping experience.

            The rise of online shopping has also changed the way companies collect and use data. Businesses can now track customer behavior, preferences, and purchasing patterns with remarkable precision, allowing them to personalize marketing efforts and recommend products tailored to individual shoppers. While this has improved efficiency for businesses, it has also raised concerns about privacy and how personal data is being used.

            Looking ahead, experts predict that online shopping will continue to grow, with emerging technologies such as virtual reality and artificial intelligence likely to further transform the shopping experience. Nevertheless, many believe physical stores will not disappear entirely, but rather evolve to offer experiences that cannot be easily replicated online.`,

        questions: [
            {
                question: "How did shopping typically work a few decades ago, according to the text?",
                options: [
                    "Mostly through online platforms",
                    "Through visiting physical stores and speaking with salespeople",
                    "Through television advertisements only",
                    "Through mail-order catalogs exclusively"
                ],
                correct: 1,
                explanation: "Shopping meant visiting physical stores, browsing shelves, and speaking with salespeople."
            },
            {
                question: "What is described as one of the most significant changes brought by online shopping?",
                options: [
                    "Higher prices for consumers",
                    "Convenience",
                    "Fewer product choices",
                    "Longer waiting times"
                ],
                correct: 1,
                explanation: "The text identifies convenience as one of the most significant changes."
            },
            {
                question: "What have consumer expectations shifted toward, according to the text?",
                options: [
                    "Slower shipping and limited information",
                    "Fast shipping, easy returns, and detailed product information",
                    "Only in-store purchases",
                    "Cash payments only"
                ],
                correct: 1,
                explanation: "Many shoppers now expect fast shipping, easy returns, and detailed product information."
            },
            {
                question: "How have businesses had to adapt to online shopping?",
                options: [
                    "By closing all physical stores immediately",
                    "By investing in websites, digital marketing, and logistics systems",
                    "By ignoring online sales completely",
                    "By reducing product variety"
                ],
                correct: 1,
                explanation: "Companies have had to invest in websites, digital marketing, and logistics systems."
            },
            {
                question: "How have small businesses benefited from online shopping platforms?",
                options: [
                    "They have been forced out of business",
                    "They can reach customers far beyond their local area",
                    "They can only sell locally",
                    "They no longer need any marketing"
                ],
                correct: 1,
                explanation: "Small businesses have benefited from reaching customers far beyond their local area."
            },
            {
                question: "What challenge have traditional retailers faced due to online shopping?",
                options: [
                    "Decreased competition",
                    "Increased competition from online-only businesses with lower overhead costs",
                    "No changes at all",
                    "Higher profits automatically"
                ],
                correct: 1,
                explanation: "Traditional retailers have faced increased competition from online-only businesses with lower costs."
            },
            {
                question: "What strategy have some physical stores adopted in response?",
                options: [
                    "Closing all locations permanently",
                    "A hybrid approach combining online sales with in-person shopping",
                    "Ignoring the competition entirely",
                    "Raising prices significantly"
                ],
                correct: 1,
                explanation: "Some stores have adopted a hybrid approach, combining online sales with in-person shopping experiences."
            },
            {
                question: "How has online shopping changed the way companies use data?",
                options: [
                    "Companies no longer collect any data",
                    "Companies can track customer behavior and personalize marketing",
                    "Data collection has become illegal",
                    "Data is only used for shipping purposes"
                ],
                correct: 1,
                explanation: "Businesses can now track customer behavior and personalize marketing efforts."
            },
            {
                question: "What concern has arisen from increased data collection?",
                options: [
                    "Higher shipping costs",
                    "Privacy concerns about how personal data is used",
                    "Slower websites",
                    "Fewer product options"
                ],
                correct: 1,
                explanation: "This has raised concerns about privacy and how personal data is being used."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Online shopping has transformed business practices and consumer behavior, bringing both benefits and challenges.",
                    "Physical stores will completely disappear within a few years.",
                    "Online shopping has had no real effect on traditional businesses.",
                    "Data privacy is the only issue related to online shopping."
                ],
                correct: 0,
                explanation: "The text discusses both the benefits and challenges that online shopping has brought to businesses and consumers."
            }
        ]
    },

    {
        id: 30,
        category: "business",

        level: "B2",
        difficulty: "hard",

        title: "The Global Supply Chain: Why a Delay in One Country Affects the Whole World",
        description: "An in-depth look at how interconnected global supply chains work, and why disruptions in one region can create ripple effects across entire industries worldwide.",

        xp: 50,
        locked: false,

        text: `Modern manufacturing rarely happens in a single location. A smartphone, for example, might contain components designed in one country, manufactured in several others, assembled in yet another, and finally shipped to consumers across the globe. This intricate web of production and distribution, known as the global supply chain, has become so deeply interconnected that a disruption in one region can create ripple effects felt by businesses and consumers thousands of miles away.

            The rise of global supply chains was driven largely by the pursuit of efficiency and cost reduction. Companies discovered that by sourcing raw materials from one country, manufacturing components in another where labor costs were lower, and assembling final products elsewhere, they could significantly reduce production costs while maintaining, or even improving, product quality. This model, often referred to as "just-in-time" manufacturing, also minimized the need for companies to store large inventories, since components would arrive precisely when needed for production.

            However, this efficiency comes with a significant trade-off: fragility. Because supply chains rely on numerous interconnected steps occurring in the right sequence, a disruption at any single point, whether caused by a natural disaster, political instability, labor strikes, or unexpected demand surges, can cause delays that cascade throughout the entire system. A factory shutdown in one country might delay component shipments to another, which in turn halts assembly lines elsewhere, ultimately preventing finished products from reaching store shelves or online marketplaces on schedule.

            The COVID-19 pandemic provided a striking illustration of this vulnerability. As factories temporarily closed and shipping routes became congested due to health restrictions and labor shortages, industries ranging from automotive manufacturing to consumer electronics experienced severe shortages of critical components, particularly semiconductor chips. This shortage, which originated primarily in a handful of manufacturing hubs, led to production slowdowns and price increases across numerous unrelated industries worldwide, illustrating how deeply interconnected seemingly separate markets had become.

            In response to these vulnerabilities, many companies have begun reconsidering their supply chain strategies. Some have adopted a strategy known as "diversification," sourcing critical components from multiple countries rather than relying on a single supplier, thereby reducing the risk that a disruption in one location will halt production entirely. Others have pursued "reshoring" or "nearshoring," relocating manufacturing operations closer to their primary markets to reduce dependency on distant suppliers and shorten shipping times, even if this sometimes results in higher production costs.

            Despite these adjustments, complete insulation from global supply chain disruptions remains largely unrealistic given the deeply interconnected nature of modern manufacturing. Instead, many economists argue that resilience, rather than complete risk elimination, should be the primary goal, encouraging companies to build flexibility into their operations so that when disruptions inevitably occur, businesses can adapt more quickly and minimize the broader economic consequences that ripple outward to consumers and industries far removed from the original disruption.`,

        questions: [
            {
                question: "What does the global supply chain refer to, according to the text?",
                options: [
                    "A single factory producing all parts of a product",
                    "The interconnected web of production and distribution across multiple countries",
                    "A government trade policy",
                    "A shipping company based in one country"
                ],
                correct: 1,
                explanation: "The global supply chain refers to the intricate web of production and distribution across multiple countries."
            },
            {
                question: "What primarily drove the rise of global supply chains?",
                options: [
                    "Government regulations requiring international trade",
                    "The pursuit of efficiency and cost reduction",
                    "A shortage of workers in wealthy countries",
                    "Random business decisions with no clear strategy"
                ],
                correct: 1,
                explanation: "The rise of global supply chains was driven largely by the pursuit of efficiency and cost reduction."
            },
            {
                question: "What is 'just-in-time' manufacturing, according to the text?",
                options: [
                    "A method of storing large amounts of inventory",
                    "A model where components arrive precisely when needed, minimizing inventory storage",
                    "A strategy for delaying production intentionally",
                    "A government policy for trade tariffs"
                ],
                correct: 1,
                explanation: "This model minimizes inventory storage since components arrive precisely when needed for production."
            },
            {
                question: "What significant trade-off comes with the efficiency of global supply chains?",
                options: [
                    "Increased product quality with no downsides",
                    "Fragility, since disruptions at any point can cascade through the system",
                    "Lower consumer demand",
                    "Reduced international trade overall"
                ],
                correct: 1,
                explanation: "The efficiency comes with fragility, since a disruption at any point can cause cascading delays."
            },
            {
                question: "How did the COVID-19 pandemic illustrate supply chain vulnerability?",
                options: [
                    "It had no real effect on global industries",
                    "It caused shortages of critical components like semiconductor chips, affecting many industries",
                    "It only affected the tourism industry",
                    "It improved supply chain efficiency significantly"
                ],
                correct: 1,
                explanation: "The pandemic caused severe shortages of components like semiconductor chips, affecting numerous industries worldwide."
            },
            {
                question: "Why did the semiconductor chip shortage affect industries beyond electronics?",
                options: [
                    "Because chips are unrelated to other industries",
                    "Because deeply interconnected markets relied on the same manufacturing hubs",
                    "Because governments banned chip production entirely",
                    "Because consumers stopped buying electronics"
                ],
                correct: 1,
                explanation: "The shortage illustrated how deeply interconnected seemingly separate markets had become, affecting industries like automotive manufacturing too."
            },
            {
                question: "What does 'diversification' mean in the context of supply chain strategy?",
                options: [
                    "Relying on a single supplier for all components",
                    "Sourcing critical components from multiple countries to reduce risk",
                    "Stopping all international trade",
                    "Increasing inventory storage indefinitely"
                ],
                correct: 1,
                explanation: "Diversification involves sourcing critical components from multiple countries rather than relying on a single supplier."
            },
            {
                question: "What is 'reshoring' or 'nearshoring,' according to the text?",
                options: [
                    "Expanding operations to more distant countries",
                    "Relocating manufacturing closer to primary markets to reduce dependency on distant suppliers",
                    "Closing all manufacturing operations",
                    "Increasing reliance on a single foreign supplier"
                ],
                correct: 1,
                explanation: "Reshoring or nearshoring involves relocating manufacturing operations closer to primary markets."
            },
            {
                question: "What do many economists argue should be the primary goal regarding supply chain disruptions?",
                options: [
                    "Complete elimination of all risk",
                    "Building resilience and flexibility rather than eliminating all risk",
                    "Ignoring the problem entirely",
                    "Relying on a single country for all manufacturing"
                ],
                correct: 1,
                explanation: "Many economists argue that resilience, rather than complete risk elimination, should be the primary goal."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Global supply chains offer efficiency but create interconnected vulnerabilities that require companies to build resilience.",
                    "Global supply chains have no real risks or downsides.",
                    "Companies should completely avoid international trade to prevent disruptions.",
                    "The COVID-19 pandemic had no effect on global manufacturing."
                ],
                correct: 0,
                explanation: "The text explains how global supply chains bring efficiency but also fragility, requiring companies to build resilience against disruptions."
            }
        ]
    },
];

const health = [
    {
        id: 31,
        category: "health",

        level: "A2",
        difficulty: "easy",

        title: "Healthy Eating Habits",
        description: "Learn how Sarah changed her eating habits and started feeling better every day.",

        xp: 25,
        locked: false,

        text: `Sarah used to eat fast food almost every day. She loved burgers, fries, and sugary sodas, but she often felt tired and had trouble concentrating at school. One day, her doctor told her that her diet needed more fruits, vegetables, and water.

            At first, Sarah found it difficult to change her habits. She was used to quick, tasty meals, and healthy food seemed boring to her. However, she decided to try small changes instead of a big diet all at once. She started adding a piece of fruit to her breakfast and replacing soda with water during meals.

            After two weeks, Sarah noticed she had more energy during the day. She also started packing her own lunch instead of buying fast food, choosing sandwiches with vegetables and lean meat. Her mother helped her prepare simple, healthy snacks like carrot sticks and yogurt for when she felt hungry between meals.

            Sarah's parents were proud of her effort, and even her friends noticed the difference in her mood and energy. She still enjoyed pizza or ice cream sometimes, but now she understood the importance of balance. She learned that eating healthy didn't mean giving up all the foods she loved, but simply choosing better options most of the time.

            By the end of the month, Sarah felt stronger, slept better, and even improved her grades because she could concentrate more easily in class. She realized that small daily choices could make a big difference in how she felt overall.`,

        questions: [
            {
                question: "What foods did Sarah eat before changing her habits?",
                options: [
                    "Fruits and vegetables",
                    "Burgers, fries, and sugary sodas",
                    "Only salads",
                    "Homemade soups"
                ],
                correct: 1,
                explanation: "Sarah loved burgers, fries, and sugary sodas before changing her diet."
            },
            {
                question: "What did Sarah's doctor tell her?",
                options: [
                    "To exercise more",
                    "That her diet needed more fruits, vegetables, and water",
                    "To stop eating completely",
                    "To sleep more hours"
                ],
                correct: 1,
                explanation: "Her doctor told her that her diet needed more fruits, vegetables, and water."
            },
            {
                question: "How did Sarah decide to start changing her habits?",
                options: [
                    "With a big diet all at once",
                    "With small changes, like adding fruit to breakfast",
                    "By stopping eating fast food forever immediately",
                    "By skipping meals"
                ],
                correct: 1,
                explanation: "She decided to try small changes instead of a big diet all at once."
            },
            {
                question: "What did Sarah start doing instead of buying fast food for lunch?",
                options: [
                    "Skipping lunch",
                    "Packing her own lunch with vegetables and lean meat",
                    "Eating only fruit",
                    "Ordering pizza every day"
                ],
                correct: 1,
                explanation: "She started packing her own lunch, choosing sandwiches with vegetables and lean meat."
            },
            {
                question: "Who helped Sarah prepare healthy snacks?",
                options: [
                    "Her friends",
                    "Her mother",
                    "Her teacher",
                    "Her doctor"
                ],
                correct: 1,
                explanation: "Her mother helped her prepare simple, healthy snacks like carrot sticks and yogurt."
            },
            {
                question: "What did Sarah notice after two weeks?",
                options: [
                    "She felt more tired",
                    "She had more energy during the day",
                    "She lost interest in school",
                    "She gained weight"
                ],
                correct: 1,
                explanation: "After two weeks, Sarah noticed she had more energy during the day."
            },
            {
                question: "Did Sarah completely stop eating foods like pizza and ice cream?",
                options: [
                    "Yes, she never ate them again",
                    "No, she still enjoyed them sometimes",
                    "She only ate them once a year",
                    "She was not allowed to eat them"
                ],
                correct: 1,
                explanation: "She still enjoyed pizza or ice cream sometimes, understanding the importance of balance."
            },
            {
                question: "What lesson did Sarah learn about healthy eating?",
                options: [
                    "That she had to give up all foods she loved",
                    "That choosing better options most of the time was enough",
                    "That healthy food is always boring",
                    "That diets must be extremely strict"
                ],
                correct: 1,
                explanation: "She learned that eating healthy meant choosing better options most of the time, not giving up everything."
            },
            {
                question: "How did Sarah's grades change by the end of the month?",
                options: [
                    "They got worse",
                    "They improved because she could concentrate better",
                    "They stayed exactly the same",
                    "She stopped studying"
                ],
                correct: 1,
                explanation: "She even improved her grades because she could concentrate more easily in class."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Small daily changes in diet can lead to better energy and overall well-being.",
                    "Sarah stopped eating completely to feel better.",
                    "Fast food is the healthiest option for students.",
                    "Sarah's grades had nothing to do with her diet."
                ],
                correct: 0,
                explanation: "The story shows how small, gradual changes to Sarah's diet improved her energy, mood, and focus."
            }
        ]
    },

    {
        id: 32,
        category: "health",

        level: "A2",
        difficulty: "easy",

        title: "Why Sleep Matters",
        description: "Learn why getting enough sleep is important and how Daniel improved his life by sleeping better.",

        xp: 25,
        locked: false,

        text: `Daniel was fourteen years old and loved staying up late playing video games or watching videos on his phone. He often went to bed around midnight, even though he had to wake up at 6:30 a.m. for school. Because of this, he always felt tired during the day and often fell asleep in class.

            One day, his teacher spoke to the class about the importance of sleep. She explained that teenagers need about eight to ten hours of sleep every night for their brains and bodies to grow and function properly. She also said that not sleeping enough could make it harder to concentrate, remember information, and even control emotions.

            Daniel decided to try sleeping earlier for one week to see if it made a difference. He set a goal to be in bed by 10:00 p.m. every night. At first, it was difficult because he was used to using his phone late at night, so he decided to leave it in another room after 9:30 p.m.

            After just a few days, Daniel noticed he felt more awake in the morning. He didn't need as much coffee or sugary drinks to stay alert during class, and his mood improved as well. He also found it easier to focus during tests and remembered information better than before.

            By the end of the week, Daniel realized that sleeping earlier had made a real difference in his daily life. He decided to continue this new habit, understanding that good sleep was just as important as eating well or exercising for staying healthy and doing well at school.`,

        questions: [
            {
                question: "What time did Daniel usually go to bed before changing his habits?",
                options: [
                    "9:00 p.m.",
                    "Around midnight",
                    "8:00 p.m.",
                    "11:00 a.m."
                ],
                correct: 1,
                explanation: "Daniel often went to bed around midnight."
            },
            {
                question: "What time did Daniel have to wake up for school?",
                options: [
                    "6:30 a.m.",
                    "7:30 a.m.",
                    "8:00 a.m.",
                    "5:00 a.m."
                ],
                correct: 0,
                explanation: "He had to wake up at 6:30 a.m. for school."
            },
            {
                question: "How many hours of sleep did the teacher say teenagers need?",
                options: [
                    "Four to six hours",
                    "Eight to ten hours",
                    "Twelve hours",
                    "Two to three hours"
                ],
                correct: 1,
                explanation: "The teacher explained that teenagers need about eight to ten hours of sleep every night."
            },
            {
                question: "What did the teacher say could happen without enough sleep?",
                options: [
                    "Nothing important",
                    "Difficulty concentrating, remembering, and controlling emotions",
                    "Better grades",
                    "Improved memory"
                ],
                correct: 1,
                explanation: "Not sleeping enough could make it harder to concentrate, remember information, and control emotions."
            },
            {
                question: "What goal did Daniel set for himself?",
                options: [
                    "To stop going to school",
                    "To be in bed by 10:00 p.m. every night",
                    "To sleep only on weekends",
                    "To stay up even later"
                ],
                correct: 1,
                explanation: "He set a goal to be in bed by 10:00 p.m. every night."
            },
            {
                question: "What did Daniel do with his phone at night?",
                options: [
                    "He used it until midnight",
                    "He left it in another room after 9:30 p.m.",
                    "He threw it away",
                    "He kept it under his pillow"
                ],
                correct: 1,
                explanation: "He decided to leave his phone in another room after 9:30 p.m."
            },
            {
                question: "What did Daniel notice after a few days of sleeping earlier?",
                options: [
                    "He felt more tired",
                    "He felt more awake in the morning",
                    "He stopped going to school",
                    "He needed more coffee"
                ],
                correct: 1,
                explanation: "After a few days, Daniel noticed he felt more awake in the morning."
            },
            {
                question: "How did Daniel's focus during tests change?",
                options: [
                    "It got worse",
                    "It became easier to focus",
                    "It stayed exactly the same",
                    "He stopped taking tests"
                ],
                correct: 1,
                explanation: "He found it easier to focus during tests and remembered information better than before."
            },
            {
                question: "What did Daniel decide to do at the end of the week?",
                options: [
                    "Go back to his old sleep schedule",
                    "Continue his new sleep habit",
                    "Sleep even less",
                    "Stop using his phone forever"
                ],
                correct: 1,
                explanation: "He decided to continue this new habit after seeing the positive results."
            },
            {
                question: "What is the main idea of the story?",
                options: [
                    "Getting enough sleep can improve energy, mood, and focus.",
                    "Video games are bad for teenagers.",
                    "Coffee is the best way to stay awake in school.",
                    "Sleep is not important for teenagers."
                ],
                correct: 0,
                explanation: "The story shows how improving sleep habits positively affected Daniel's energy, mood, and concentration."
            }
        ]
    },

    {
        id: 33,
        category: "health",

        level: "A2+",
        difficulty: "medium",

        title: "The Benefits of Daily Exercise",
        description: "Discover how regular physical activity can improve both physical and mental health.",

        xp: 35,
        locked: false,

        text: `Many people know that exercise is good for the body, but fewer people realize how much it can also help the mind. Doctors often recommend at least thirty minutes of physical activity most days of the week, whether it's walking, running, swimming, or playing sports.

            One of the clearest benefits of exercise is a stronger heart. When people move their bodies regularly, their heart becomes more efficient at pumping blood, which lowers the risk of heart disease over time. Exercise also helps control weight, since it burns calories and builds muscle, which in turn helps the body use energy more efficiently even while resting.

            Beyond physical health, exercise has a powerful effect on mental well-being. When people exercise, their brain releases chemicals called endorphins, which naturally improve mood and reduce feelings of stress or anxiety. Many people who exercise regularly report feeling calmer and more positive throughout the day.

            Exercise can also improve sleep quality. People who are physically active during the day often fall asleep more easily at night and experience deeper, more restful sleep. This, in turn, helps them feel more energetic the following day, creating a positive cycle of health.

            Although starting a new exercise routine can feel difficult at first, experts suggest beginning with small, manageable goals, such as a short daily walk, and gradually increasing the intensity over time. Even small amounts of regular movement can lead to noticeable improvements in both physical and mental health.`,

        questions: [
            {
                question: "How much physical activity do doctors often recommend?",
                options: [
                    "At least thirty minutes most days of the week",
                    "Two hours every day",
                    "Only on weekends",
                    "Ten minutes once a week"
                ],
                correct: 0,
                explanation: "Doctors often recommend at least thirty minutes of physical activity most days of the week."
            },
            {
                question: "How does regular exercise affect the heart?",
                options: [
                    "It makes the heart weaker",
                    "It makes the heart more efficient at pumping blood",
                    "It has no effect on the heart",
                    "It only affects breathing"
                ],
                correct: 1,
                explanation: "Regular movement makes the heart more efficient at pumping blood, lowering the risk of heart disease."
            },
            {
                question: "How does exercise help control weight?",
                options: [
                    "By reducing appetite completely",
                    "By burning calories and building muscle",
                    "By making people sleep more",
                    "It has no connection to weight"
                ],
                correct: 1,
                explanation: "Exercise burns calories and builds muscle, helping the body use energy more efficiently."
            },
            {
                question: "What chemicals does the brain release during exercise, according to the text?",
                options: [
                    "Endorphins",
                    "Vitamins",
                    "Sugar",
                    "Caffeine"
                ],
                correct: 0,
                explanation: "The brain releases chemicals called endorphins during exercise."
            },
            {
                question: "How do endorphins affect mood?",
                options: [
                    "They make people feel more stressed",
                    "They naturally improve mood and reduce stress or anxiety",
                    "They cause tiredness",
                    "They have no effect on emotions"
                ],
                correct: 1,
                explanation: "Endorphins naturally improve mood and reduce feelings of stress or anxiety."
            },
            {
                question: "How does exercise affect sleep, according to the text?",
                options: [
                    "It makes sleep worse",
                    "It helps people fall asleep more easily and sleep more deeply",
                    "It has no effect on sleep",
                    "It only helps children sleep better"
                ],
                correct: 1,
                explanation: "People who are physically active often fall asleep more easily and sleep more deeply."
            },
            {
                question: "What do experts suggest for people starting a new exercise routine?",
                options: [
                    "Starting with intense workouts immediately",
                    "Beginning with small, manageable goals",
                    "Exercising only once a month",
                    "Avoiding exercise until fully fit"
                ],
                correct: 1,
                explanation: "Experts suggest beginning with small, manageable goals, like a short daily walk."
            },
            {
                question: "What example of a manageable goal is given in the text?",
                options: [
                    "Running a marathon",
                    "A short daily walk",
                    "Lifting heavy weights",
                    "Swimming for hours"
                ],
                correct: 1,
                explanation: "The text gives a short daily walk as an example of a manageable goal."
            },
            {
                question: "According to the text, what can even small amounts of movement lead to?",
                options: [
                    "No real changes",
                    "Noticeable improvements in physical and mental health",
                    "Only physical benefits, not mental ones",
                    "Negative effects on health"
                ],
                correct: 1,
                explanation: "Even small amounts of regular movement can lead to noticeable improvements in both physical and mental health."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Regular exercise benefits both the body and the mind.",
                    "Exercise is only useful for losing weight.",
                    "Only intense workouts are effective.",
                    "Exercise has no effect on mental health."
                ],
                correct: 0,
                explanation: "The text explains how regular exercise improves both physical health and mental well-being."
            }
        ]
    },

    {
        id: 34,
        category: "health",

        level: "A2+",
        difficulty: "medium",

        title: "Managing Stress Before Exams",
        description: "Practical tips on how students can handle stress and stay calm during exam season.",

        xp: 35,
        locked: false,

        text: `Exam season can be a stressful time for many students. As the pressure to perform well increases, some students may feel anxious, have trouble sleeping, or find it hard to concentrate while studying. Fortunately, there are several simple strategies that can help manage this stress effectively.

            One helpful method is planning ahead. Instead of leaving all the studying until the last few days, students can create a study schedule that spreads topics out over several weeks. This approach makes the material feel more manageable and reduces the panic that often comes from cramming everything at once.

            Taking regular breaks while studying is also important. Studying for hours without stopping can actually reduce focus and memory. Short breaks, such as a ten-minute walk or a few minutes of stretching, can help the brain rest and absorb information more effectively when studying resumes.

            Physical activity and proper sleep also play a major role in reducing stress. Even a short walk or some light exercise can help clear the mind and improve mood. Similarly, getting enough sleep the night before an exam is far more helpful than staying up all night reviewing notes, since a tired brain struggles to recall information clearly.

            Finally, talking about stress with friends, family, or teachers can make a big difference. Sharing worries often helps students realize that many of their classmates feel the same way, which can be comforting. Teachers can also offer helpful advice or clarify confusing topics, reducing anxiety about the exam itself.

            By combining these simple strategies, planning, taking breaks, staying active, sleeping well, and talking about stress, students can approach exams feeling more prepared and confident, rather than overwhelmed.`,

        questions: [
            {
                question: "What can happen to students during exam season, according to the text?",
                options: [
                    "They may feel anxious and have trouble concentrating",
                    "They always feel completely relaxed",
                    "They lose interest in school",
                    "They stop attending classes"
                ],
                correct: 0,
                explanation: "Some students may feel anxious, have trouble sleeping, or find it hard to concentrate."
            },
            {
                question: "What does planning ahead help students avoid?",
                options: [
                    "Studying at all",
                    "The panic that comes from cramming everything at once",
                    "Taking exams",
                    "Talking to teachers"
                ],
                correct: 1,
                explanation: "Spreading topics out over several weeks reduces the panic that comes from cramming."
            },
            {
                question: "Why is taking regular breaks while studying important?",
                options: [
                    "It has no real benefit",
                    "It helps the brain rest and absorb information better",
                    "It makes studying take longer",
                    "It reduces memory"
                ],
                correct: 1,
                explanation: "Short breaks help the brain rest and absorb information more effectively when studying resumes."
            },
            {
                question: "What example of a break is given in the text?",
                options: [
                    "A ten-minute walk or stretching",
                    "Watching television for hours",
                    "Sleeping all afternoon",
                    "Playing video games all day"
                ],
                correct: 0,
                explanation: "The text gives a ten-minute walk or a few minutes of stretching as examples of breaks."
            },
            {
                question: "What does the text say about staying up all night before an exam?",
                options: [
                    "It is the best way to study",
                    "Getting enough sleep is far more helpful than staying up all night",
                    "It has no effect on memory",
                    "It is required for good grades"
                ],
                correct: 1,
                explanation: "Getting enough sleep is far more helpful than staying up all night, since a tired brain struggles to recall information."
            },
            {
                question: "Why can talking about stress with others help students?",
                options: [
                    "It makes them more anxious",
                    "It helps them realize others feel the same way, which is comforting",
                    "It wastes valuable study time",
                    "It has no effect on stress"
                ],
                correct: 1,
                explanation: "Sharing worries helps students realize that many classmates feel the same way, which is comforting."
            },
            {
                question: "How can teachers help reduce students' exam anxiety?",
                options: [
                    "By giving harder exams",
                    "By offering advice and clarifying confusing topics",
                    "By ignoring student questions",
                    "By adding more homework"
                ],
                correct: 1,
                explanation: "Teachers can offer helpful advice or clarify confusing topics, reducing anxiety about the exam."
            },
            {
                question: "What role does physical activity play in managing stress, according to the text?",
                options: [
                    "It has no connection to stress",
                    "It can help clear the mind and improve mood",
                    "It makes studying harder",
                    "It should be avoided before exams"
                ],
                correct: 1,
                explanation: "Even a short walk or light exercise can help clear the mind and improve mood."
            },
            {
                question: "What combination of strategies does the text recommend?",
                options: [
                    "Only studying harder",
                    "Planning, taking breaks, staying active, sleeping well, and talking about stress",
                    "Avoiding all breaks during study time",
                    "Ignoring stress completely"
                ],
                correct: 1,
                explanation: "The text recommends combining planning, breaks, activity, sleep, and talking about stress."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Simple strategies can help students manage exam stress effectively.",
                    "Exam stress cannot be reduced in any way.",
                    "Students should study all night before exams.",
                    "Talking about stress makes things worse."
                ],
                correct: 0,
                explanation: "The text presents practical strategies that help students manage and reduce exam-related stress."
            }
        ]
    },

    {
        id: 35,
        category: "health",

        level: "B1",
        difficulty: "hard",

        title: "The Hidden Costs of Chronic Stress",
        description: "A look at how long-term stress affects the body and mind, and what can be done to manage it.",

        xp: 45,
        locked: false,

        text: `Stress is a natural response that helps the body react to challenges or danger. In small amounts, it can even be useful, helping people stay alert and focused before an important event, such as a job interview or a sports competition. However, when stress becomes constant, rather than a temporary reaction, it can start to seriously affect both physical and mental health.

            When a person experiences stress, the body releases hormones such as cortisol and adrenaline, which prepare it to react quickly to a challenge. This response, sometimes called "fight or flight," was extremely useful for early humans facing physical dangers. Today, however, most stress comes from ongoing sources such as work pressure, financial worries, or relationship difficulties, situations that cannot simply be resolved by running away or fighting.

            Over time, having high levels of stress hormones in the body can lead to real health problems. Chronic stress has been linked to high blood pressure, a weakened immune system, and an increased risk of heart disease. It can also affect digestion, sometimes causing stomach pain or other digestive issues. Beyond physical symptoms, long-term stress often affects sleep, making it harder for people to fall asleep or stay asleep through the night.

            Mental health is also strongly affected by chronic stress. People under constant stress are more likely to experience anxiety, low mood, or difficulty concentrating. Over time, this can affect relationships, work performance, and overall quality of life, sometimes leading to a cycle where stress causes problems that then create even more stress.

            Fortunately, there are effective ways to manage chronic stress. Regular exercise, sufficient sleep, and relaxation techniques such as deep breathing or meditation can all help lower stress hormone levels. Talking to a therapist or counselor can also help people identify the sources of their stress and develop healthier ways of coping. While it may not be possible to remove all sources of stress from life, learning to manage its effects can greatly improve both physical health and overall well-being.`,

        questions: [
            {
                question: "According to the text, when can stress actually be useful?",
                options: [
                    "When it becomes constant",
                    "In small amounts, helping people stay alert before an important event",
                    "Only during sleep",
                    "Never, it is always harmful"
                ],
                correct: 1,
                explanation: "In small amounts, stress can help people stay alert and focused before an important event."
            },
            {
                question: "What hormones does the body release during stress?",
                options: [
                    "Insulin and glucose",
                    "Cortisol and adrenaline",
                    "Vitamin D and calcium",
                    "Melatonin and serotonin"
                ],
                correct: 1,
                explanation: "The body releases hormones such as cortisol and adrenaline during stress."
            },
            {
                question: "What is the 'fight or flight' response, according to the text?",
                options: [
                    "A modern invention with no biological basis",
                    "The body's reaction that prepares it to react quickly to danger",
                    "A type of exercise routine",
                    "A sleeping disorder"
                ],
                correct: 1,
                explanation: "This response prepares the body to react quickly to a challenge, useful for early humans facing physical danger."
            },
            {
                question: "Why can't most modern stress be resolved by running away or fighting, according to the text?",
                options: [
                    "Because modern stress mostly comes from ongoing sources like work or money worries",
                    "Because people are physically weaker today",
                    "Because stress no longer exists",
                    "Because fighting is illegal"
                ],
                correct: 0,
                explanation: "Most stress today comes from ongoing sources such as work pressure or financial worries, which cannot be resolved that way."
            },
            {
                question: "What physical health problems has chronic stress been linked to?",
                options: [
                    "Improved immune function",
                    "High blood pressure and a weakened immune system",
                    "Better digestion",
                    "Increased height"
                ],
                correct: 1,
                explanation: "Chronic stress has been linked to high blood pressure, a weakened immune system, and heart disease risk."
            },
            {
                question: "How can chronic stress affect sleep, according to the text?",
                options: [
                    "It has no effect on sleep",
                    "It can make it harder to fall asleep or stay asleep",
                    "It always improves sleep quality",
                    "It only affects children's sleep"
                ],
                correct: 1,
                explanation: "Long-term stress often makes it harder for people to fall asleep or stay asleep through the night."
            },
            {
                question: "How does chronic stress affect mental health?",
                options: [
                    "It has no connection to mental health",
                    "It increases the likelihood of anxiety, low mood, and difficulty concentrating",
                    "It always improves mood",
                    "It only affects physical symptoms"
                ],
                correct: 1,
                explanation: "People under constant stress are more likely to experience anxiety, low mood, or difficulty concentrating."
            },
            {
                question: "What cycle does the text describe regarding stress?",
                options: [
                    "Stress that quickly disappears without effects",
                    "Stress causing problems that then create even more stress",
                    "Stress that only affects sleep",
                    "A cycle with no negative consequences"
                ],
                correct: 1,
                explanation: "This can lead to a cycle where stress causes problems that then create even more stress."
            },
            {
                question: "What are some effective ways to manage chronic stress, according to the text?",
                options: [
                    "Avoiding all physical activity",
                    "Regular exercise, sufficient sleep, and relaxation techniques",
                    "Ignoring the problem completely",
                    "Increasing work hours"
                ],
                correct: 1,
                explanation: "Regular exercise, sufficient sleep, and relaxation techniques like deep breathing can help lower stress."
            },
            {
                question: "What is the main idea of the text?",
                options: [
                    "Chronic stress can seriously affect physical and mental health, but it can be managed with effective strategies.",
                    "Stress has no real effect on the body.",
                    "All stress should be avoided completely at all times.",
                    "Only physical exercise can reduce stress."
                ],
                correct: 0,
                explanation: "The text explains the health effects of chronic stress and offers practical strategies for managing it."
            }
        ]
    },
];

export const ReadingLessons = [
    ...dailyLife,
    ...travel,
    ...technology,
    ...nature,
    ...culture,
    ...business,
    ...health
];