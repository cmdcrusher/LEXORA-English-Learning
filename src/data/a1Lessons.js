export const a1Lessons = [
    {
        id: 1,
        title: "Asking Questions",
        theory: [
            {
                type: "goal",
                goal: "К концу урока ты сможешь задавать простые вопросы:",
                items: ['What is your name?', 'Who is she?', 'Where do you live?', 'When is your birthday?']
            },

            {
                type: "text",
                content: "Представь."
            },

            {
                type: "text",
                content: "Ты познакомился с человеком."
            },

            {
                type: "text",
                content: "Ты хочешь узнать:"
            },

            {
                type: "list",
                items: ["Как тебя зовут?", "Кто это?", "Где ты живешь?", "Когда твой день рождения?"]
            },

            {
                type: "text",
                content: "Но как задавать такие вопросы на английском?"
            },

            {
                type: "text",
                content: "Для этого существуют специальные слова-вопросы."
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "Посмотри на вопросы:"
                    },

                    {
                        type: "list",
                        items: ["What is your name? — Как тебя зовут?", "Who is she? — Кто она?", "Where do you live? — Где ты живешь?", "When is your birthday? — Когда у тебя день рождения?"]
                    },

                    {
                        type: "text",
                        content: "Замечаешь?"
                    },

                    {
                        type: "text",
                        content: "Все вопросы начинаются с особого слова."
                    },
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Чтобы задавать вопросы, английский использует специальные Question Words."
                    },

                    {
                        type: "table",
                        headers: [
                            "English",
                            "Russian"
                        ],

                        rows: [
                            ["What", "Что? Какой?(про предметы)"],
                            ["Who", "Кто? (про людей)"],
                            ["Where", "Где?"],
                            ["When", "Когда?"]
                        ]
                    },

                    {
                        type: "text",
                        content: "Обычно именно с этих слов начинается вопрос."
                    },
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Не пытайся запомнить всё сразу."
                    },

                    {
                        type: "text",
                        content: "Сегодня нужно знать только 4 слова:"
                    },

                    {
                        type: "list",
                        items: ["What", "Who", "Where", "When"]
                    },

                    {
                        type: "text",
                        content: "Этого уже хватит для десятков простых вопросов."
                    },
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: 'text',
                        content: 'Новички часто путают:'
                    },

                    {
                        type: 'block',
                        content: 'Who',
                        color: ''
                    },

                    {
                        type: 'text',
                        content: 'и'
                    },

                    {
                        type: 'block',
                        content: 'What',
                        color:''
                    },

                    {
                        type: 'divider'
                    },

                    {
                        type: 'text',
                        content: 'Неправильно:'
                    },
                    
                    {
                        type: 'block',
                        content:'❌What is she?',
                    },

                    {
                        type: 'text',
                        content: 'если спрашиваем о человеке.'
                    },

                    {
                        type: 'divider'
                    },

                    {
                        type: 'text',
                        content: 'Правильно:'
                    },
                    
                    {
                        type: 'block',
                        content: 'Who is she?'
                    },

                    {
                        type: 'divider'
                    },

                    {
                        type: 'check',
                        id: 1,
                        exp: 'Какое слово подходит?',
                        question: '___ is your name?',
                        items: ['Who', 'What', 'Where']
                    },
                ]
            },

            {
                type: 'remember',
                content: [
                    {
                        type: 'list',
                        items: ['What — Что? Какой?', 'Who — Кто?', 'Where — Где?', 'When — Когда?']
                    },

                    {
                        type: 'text',
                        content: 'Это первые Question Words'
                    },

                    {
                        type: 'text',
                        content: 'Они используются практически в каждом раговоре на английском.'
                    },
                ]
            },

            {
                type: 'end',
                content: [
                    {
                        type: 'text',
                        content: 'Теперь ты уже можешь задавать простые вопросы о человеке, месте и времени.'
                    }
                ]
            },
        ],
        quiz: [
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ is your name?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'What'
            },
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ is she?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'Who'
            },
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ do you live?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'Where'
            },
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ is your birthday?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'When'
            },
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ is your teacher?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'Who'
            },
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ is this?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'What'
            },
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ are you from?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'Where'
            },
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ is your friend?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'Who'
            },
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ do we meet?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'Where'
            },
            {
                questionTitle: 'Выбери правильное Question Word',
                question: '___ is that building?',
                options: ['What', 'Who', 'Where', 'When'],
                correct: 'What'
            }
        ]
    },

    {
        id: 2,
        title: "Singular and Plural Nouns (-s, -es)",

        theory: [
            {
                type: "goal",
                goal: "К концу урока ты сможешь образовывать множественное число существительных:",
                items: [
                    "cat → cats",
                    "box → boxes",
                    "child → children",
                    "person → people"
                ]
            },

            {
                type: "text",
                content: "В английском языке существительные могут быть в единственном или множественном числе."
            },

            {
                type: "text",
                content: "Если предмет один, используется Singular (единственное число)."
            },

            {
                type: "text",
                content: "Если предметов несколько, используется Plural (множественное число)."
            },

            {
                type: "example",
                content: [
                    {
                        type: "table",
                        headers: ["Singular", "Plural"],

                        rows: [
                            ["cat", "cats"],
                            ["dog", "dogs"],
                            ["book", "books"],
                            ["apple", "apples"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Посмотри внимательно на примеры."
            },

            {
                type: "text",
                content: "Во всех словах появилась буква -s."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Большинство существительных образуют множественное число добавлением окончания:"
                    },

                    {
                        type: "block",
                        content: "-s"
                    },

                    {
                        type: "table",
                        headers: ["One", "Many"],

                        rows: [
                            ["cat", "cats"],
                            ["dog", "dogs"],
                            ["car", "cars"],
                            ["phone", "phones"],
                            ["teacher", "teachers"]
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "Еще несколько примеров:"
                    },

                    {
                        type: "list",
                        items: [
                            "one student → two students",
                            "one computer → three computers",
                            "one tree → five trees",
                            "one apple → six apples"
                        ]
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Если ты не знаешь специальное правило для слова, сначала попробуй добавить -s."
                    },

                    {
                        type: "text",
                        content: "Для большинства слов это будет правильно."
                    }
                ]
            },

            {
                type: "text",
                content: "Но не все слова используют только окончание -s."
            },

            {
                type: "text",
                content: "Иногда используется окончание -es."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Если слово заканчивается на s, ss, x, ch или sh, обычно добавляется -es."
                    },

                    {
                        type: "table",
                        headers: ["Ending", "Example"],

                        rows: [
                            ["s", "bus → buses"],
                            ["ss", "class → classes"],
                            ["x", "box → boxes"],
                            ["ch", "watch → watches"],
                            ["sh", "dish → dishes"]
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "bus → buses",
                            "box → boxes",
                            "watch → watches",
                            "dish → dishes",
                            "class → classes"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Эти слова произносить немного сложнее, поэтому появляется дополнительная буква e."
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ boxs"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ boxes"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще одна частая ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ two cat"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ two cats"
                    }
                ]
            },

            {
                type: "text",
                content: "Однако есть несколько очень важных слов, которые не подчиняются правилам -s и -es."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Некоторые существительные меняют форму полностью:"
                    },

                    {
                        type: "table",
                        headers: ["Singular", "Plural"],

                        rows: [
                            ["man", "men"],
                            ["woman", "women"],
                            ["child", "children"],
                            ["person", "people"]
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "one man → two men",
                            "one woman → three women",
                            "one child → four children",
                            "one person → many people"
                        ]
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Эти слова встречаются очень часто."
                    },

                    {
                        type: "text",
                        content: "Постарайся запомнить их уже сейчас."
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Новички часто пишут так:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ childs"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ children"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Или так:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ persons"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ people"
                    }
                ]
            },


        //ИНТЕРЕСНОЕ
            {
                type: "interesting",
                content: [
                    {
                        type: "text",
                        content: "Некоторые существительные вообще не меняются."
                    },

                    {
                        type: "table",
                        headers: ["Singular", "Plural"],

                        rows: [
                            ["fish", "fish"],
                            ["sheep", "sheep"]
                        ]
                    },

                    {
                        type: "text",
                        content: "Такие слова встречаются редко, но о них полезно знать."
                    }
                ]
            },

            //УЗНАТЬ БОЛЬШЕ
            {
                type: "explore",
                title: "Узнать больше",
                content: [
                    {
                        type: "text",
                        content: "Есть и другие способы образования множественного числа."
                    },

                    {
                        type: "text",
                        content: "Например, слова на -y часто меняются на -ies."
                    },

                    {
                        type: "table",
                        headers: ["Singular", "Plural"],

                        rows: [
                            ["city", "cities"],
                            ["baby", "babies"],
                            ["country", "countries"]
                        ]
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "Некоторые слова на -f меняют f на v."
                    },

                    {
                        type: "table",
                        headers: ["Singular", "Plural"],

                        rows: [
                            ["leaf", "leaves"],
                            ["knife", "knives"],
                            ["wife", "wives"]
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "two ___",
                items: [
                    "cat",
                    "cats",
                    "cates"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "three ___",
                items: [
                    "book",
                    "books",
                    "bookes"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "two ___",
                items: [
                    "boxs",
                    "boxes",
                    "box"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "two ___",
                items: [
                    "childs",
                    "children",
                    "childes"
                ]
            },

            {
                type: "check",
                id: 5,
                exp: "Выбери правильный вариант:",
                question: "many ___",
                items: [
                    "people",
                    "persons",
                    "personses"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "list",
                        items: [
                            "Большинство слов → +s",
                            "После s, ss, x, ch, sh → +es",
                            "man → men",
                            "woman → women",
                            "child → children",
                            "person → people"
                        ]
                    },

                    {
                        type: "text",
                        content: "Это главные правила сегодняшнего урока."
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },

                    {
                        type: "text",
                        content: "Теперь ты умеешь образовывать множественное число большинства английских существительных и знаешь несколько важных исключений."
                    }
                ]
            }
        ],
        quiz: [
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'two ___',
                options: ['cat', 'cats', 'cates', 'caties'],
                correct: 'cats'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'three ___',
                options: ['book', 'books', 'bookes', 'bookies'],
                correct: 'books'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'two ___',
                options: ['boxs', 'boxes', 'box', 'boxies'],
                correct: 'boxes'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'many ___',
                options: ['childs', 'children', 'childes', 'child'],
                correct: 'children'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'two ___',
                options: ['person', 'people', 'persons', 'peoples'],
                correct: 'people'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'one ___ → two ___',
                question: 'one man → two ___',
                options: ['mans', 'men', 'man', 'mens'],
                correct: 'men'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'one ___ → two ___',
                question: 'one woman → two ___',
                options: ['womans', 'women', 'woman', 'womens'],
                correct: 'women'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'many ___',
                question: 'one sheep → many ___',
                options: ['sheeps', 'sheep', 'ship', 'sheepses'],
                correct: 'sheep'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'two ___',
                question: 'one bus → two ___',
                options: ['buses', 'buss', 'busies', 'buseses'],
                correct: 'buses'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'two ___',
                question: 'one watch → two ___',
                options: ['watchs', 'watches', 'watchies', 'watcheses'],
                correct: 'watches'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'many ___',
                question: 'one dish → many ___',
                options: ['dishs', 'dishes', 'dishies', 'disheses'],
                correct: 'dishes'
            },
            {
                questionTitle: 'Выбери правильную форму множественного числа',
                question: 'two ___',
                question: 'one apple → two ___',
                options: ['apple', 'apples', 'appleses', 'applees'],
                correct: 'apples'
            }
        ]
    },

    {
        id: 3,
        title: "Word Order (Порядок слов в английском)",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь строить простые английские предложения:",
                items: [
                    "I like cats.",
                    "She lives in London.",
                    "They play football.",
                    "We have a car."
                ]
            },

            {
                type: "text",
                content: "В английском языке порядок слов очень важен."
            },

            {
                type: "text",
                content: "Если поменять слова местами, предложение может стать неправильным или непонятным."
            },

            {
                type: "text",
                content: "В русском языке мы можем сказать по-разному:"
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "Я люблю кошек.",
                            "Кошек люблю я.",
                            "Люблю я кошек."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "В английском так нельзя."
            },

            {
                type: "text",
                content: "Порядок слов фиксированный."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Основная схема английского предложения:"
                    },

                    {
                        type: "block",
                        content: "Subject + Verb + Object"
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "table",
                        headers: ["Part", "Question", "Meaning"],

                        rows: [
                            ["Subject", "Who?", "Кто делает действие"],
                            ["Verb", "What does he do?", "Действие"],
                            ["Object", "What?", "На что направлено действие"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь разберем по шагам."
            },

            {
                type: "text",
                content: "Сначала всегда говорим КТО делает действие."
            },

            {
                type: "text",
                content: "Потом говорим САМО ДЕЙСТВИЕ."
            },

            {
                type: "text",
                content: "И потом говорим ДОПОЛНЕНИЕ."
            },

            {
                type: "example",
                content: [
                    {
                        type: "table",
                        headers: ["Subject", "Verb", "Object"],

                        rows: [
                            ["I", "like", "cats"],
                            ["She", "plays", "football"],
                            ["They", "watch", "TV"],
                            ["We", "have", "a car"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Посмотри внимательно — порядок всегда одинаковый."
            },

            {
                type: "text",
                content: "Никогда не меняется местами."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I like cats.",
                            "She likes music.",
                            "They play football.",
                            "We have a house."
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Важно помнить:"
                    },

                    {
                        type: "list",
                        items: [
                            "Subject всегда ПЕРВЫЙ",
                            "Verb всегда ВТОРОЙ",
                            "Object часто ТРЕТИЙ"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь сравним с ошибками новичков."
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Неправильно:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ Like I cats"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "В английском Subject всегда должен быть первым."
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ I like cats"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ Cats I like"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "Так не говорят в английском языке."
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ I like cats"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "И еще одна ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ She football plays"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ She plays football"
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь добавим немного практики с уже знакомыми темами."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "This is my book.",
                            "That is my house.",
                            "These are my friends.",
                            "Those are my cars."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Ты уже знаешь эти конструкции из прошлых уроков."
            },

            {
                type: "text",
                content: "Теперь ты понимаешь, как они строятся."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Формула английского предложения:"
                    },

                    {
                        type: "block",
                        content: "Who + Action + What"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Если ты не знаешь, как построить предложение — всегда начинай с ответа на вопрос WHO?"
                    },

                    {
                        type: "text",
                        content: "Потом добавь действие."
                    },

                    {
                        type: "text",
                        content: "Потом добавь объект."
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный порядок слов:",
                question: "___ like cats",
                items: [
                    "I",
                    "Cats",
                    "Like"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильное предложение:",
                question: "He ___ football",
                items: [
                    "plays",
                    "play",
                    "playing"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "She ___ music",
                items: [
                    "likes",
                    "like",
                    "liking"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильное предложение:",
                question: "We ___ a car",
                items: [
                    "have",
                    "has",
                    "having"
                ]
            },

            {
                type: "check",
                id: 5,
                exp: "Собери правильное предложение:",
                question: "cats / I / like",
                items: [
                    "I like cats",
                    "Cats like I",
                    "Like cats I"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "block",
                        content: "Subject + Verb + Object"
                    },

                    {
                        type: "list",
                        items: [
                            "I like cats",
                            "She plays football",
                            "They watch TV",
                            "We have a house"
                        ]
                    },

                    {
                        type: "text",
                        content: "Это основа английского языка."
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },

                    {
                        type: "text",
                        content: "Теперь ты умеешь строить правильные английские предложения и понимаешь, почему порядок слов так важен."
                    }
                ]
            }
        ],
        quiz: [
            {
                questionTitle: 'Верно или неверно',
                question: 'I like cats.',
                options: ['Correct', 'Incorrect'],
                correct: 'Correct'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'Like I cats.',
                options: ['Correct', 'Incorrect'],
                correct: 'Incorrect'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'She plays football.',
                options: ['Correct', 'Incorrect'],
                correct: 'Correct'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'She football plays.',
                options: ['Correct', 'Incorrect'],
                correct: 'Incorrect'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'They watch TV.',
                options: ['Correct', 'Incorrect'],
                correct: 'Correct'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'Watch they TV.',
                options: ['Correct', 'Incorrect'],
                correct: 'Incorrect'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'We have a car.',
                options: ['Correct', 'Incorrect'],
                correct: 'Correct'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'Have we a car.',
                options: ['Correct', 'Incorrect'],
                correct: 'Incorrect'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'She likes music.',
                options: ['Correct', 'Incorrect'],
                correct: 'Correct'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'Music she likes.',
                options: ['Correct', 'Incorrect'],
                correct: 'Incorrect'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'They play football.',
                options: ['Correct', 'Incorrect'],
                correct: 'Correct'
            },
            {
                questionTitle: 'Верно или неверно',
                question: 'Play they football.',
                options: ['Correct', 'Incorrect'],
                correct: 'Incorrect'
            }
        ]
    },

    {
        id: 4,
        title: "Personal Pronouns",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь правильно заменять людей и предметы местоимениями:",
                items: [
                    "I like cats",
                    "She is my friend",
                    "They play football",
                    "We have a car"
                ]
            },

            {
                type: "text",
                content: "В английском языке мы часто не повторяем имена людей и названия предметов."
            },

            {
                type: "text",
                content: "Вместо этого используются местоимения — Personal Pronouns."
            },

            {
                type: "text",
                content: "Они заменяют существительные, чтобы речь была короче и естественнее."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Вот основные личные местоимения:"
                    },

                    {
                        type: "table",
                        headers: ["Pronoun", "Meaning"],

                        rows: [
                            ["I", "я"],
                            ["You", "ты / вы"],
                            ["He", "он"],
                            ["She", "она"],
                            ["It", "оно (предметы, животные)"],
                            ["We", "мы"],
                            ["They", "они"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь разберём каждое местоимение по отдельности."
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "I — я"
                    },

                    {
                        type: "list",
                        items: [
                            "I am a student.",
                            "I like music.",
                            "I have a dog."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "You — ты / вы"
                    },

                    {
                        type: "list",
                        items: [
                            "You are my friend.",
                            "You play football.",
                            "You are happy."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "He — он"
                    },

                    {
                        type: "list",
                        items: [
                            "He is my brother.",
                            "He likes cats.",
                            "He plays football."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "She — она"
                    },

                    {
                        type: "list",
                        items: [
                            "She is my sister.",
                            "She likes music.",
                            "She lives in London."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "It — оно"
                    },

                    {
                        type: "list",
                        items: [
                            "It is a cat.",
                            "It is my phone.",
                            "It is small."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "We — мы"
                    },

                    {
                        type: "list",
                        items: [
                            "We are friends.",
                            "We play football.",
                            "We have a house."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "They — они"
                    },

                    {
                        type: "list",
                        items: [
                            "They are students.",
                            "They like music.",
                            "They live in London."
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Главная идея:"
                    },

                    {
                        type: "list",
                        items: [
                            "I — говорю про себя",
                            "You — про собеседника",
                            "He / She — про одного человека",
                            "It — про предмет или животное",
                            "We — про группу с тобой",
                            "They — про других людей"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь важно понять связь с предыдущим уроком."
            },

            {
                type: "text",
                content: "Все эти местоимения используются в том же порядке слов:"
            },

            {
                type: "block",
                content: "Subject + Verb + Object"
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I like cats.",
                            "She plays football.",
                            "They watch TV.",
                            "We have a car."
                        ]
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ He like cats"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "С he / she / it глагол часто получает -s"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ He likes cats"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ She are my friend"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "С She используется is"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ She is my friend"
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Важно запомнить:"
                    },

                    {
                        type: "list",
                        items: [
                            "I → am",
                            "He / She / It → is",
                            "We / You / They → are"
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильное местоимение:",
                question: "___ am a student",
                items: [
                    "I",
                    "He",
                    "They"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "___ is my sister",
                items: [
                    "He",
                    "She",
                    "They"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильное местоимение:",
                question: "___ are my friends",
                items: [
                    "He",
                    "It",
                    "They"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "___ is a dog",
                items: [
                    "He",
                    "It",
                    "They"
                ]
            },

            {
                type: "check",
                id: 5,
                exp: "Выбери правильный глагол:",
                question: "She ___ music",
                items: [
                    "like",
                    "likes",
                    "liking"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "table",
                        headers: ["Pronoun", "Verb"],

                        rows: [
                            ["I", "am"],
                            ["He / She / It", "is"],
                            ["We / You / They", "are"]
                        ]
                    },

                    {
                        type: "text",
                        content: "Это основа английского предложения."
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },

                    {
                        type: "text",
                        content: "Теперь ты умеешь использовать личные местоимения и правильно строить предложения с ними."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Верно или неверно', question: 'I am a student.',        options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'He like cats.',           options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'She is my sister.',       options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'She are my friend.',      options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'They are students.',      options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'They is students.',       options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'We have a house.',        options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'We has a house.',          options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'He plays football.',        options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'He play football.',          options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'It is my phone.',              options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'It are my phone.',              options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'You are my friend.',              options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'You is my friend.',                options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
        ]
    },

    {
        id: 5,
        title: "Some and Any (неопределённые местоимения)",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь говорить о неопределённом количестве:",
                items: [
                    "I have some water.",
                    "Do you have any books?",
                    "I don’t have any money."
                ]
            },

            {
                type: "text",
                content: "Иногда мы не называем точное количество предметов."
            },

            {
                type: "text",
                content: "Мы просто говорим: немного, несколько или вообще ничего не уточняем."
            },

            {
                type: "text",
                content: "Для этого в английском используются слова some и any."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Some обычно используется в утвердительных предложениях."
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I have some friends.",
                            "I have some water.",
                            "She has some books.",
                            "We have some time."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Some = немного / несколько (в утвердительных предложениях)."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Any обычно используется в вопросах и отрицаниях."
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "Do you have any money?",
                            "Do you have any friends?",
                            "I don’t have any water.",
                            "She doesn’t have any books."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Any = используется, когда мы спрашиваем или говорим об отсутствии."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "table",
                        headers: ["Type", "Word"],

                        rows: [
                            ["Positive (утверждение)", "some"],
                            ["Question (вопрос)", "any"],
                            ["Negative (отрицание)", "any"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь сравним."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I have some apples.",
                            "Do you have any apples?",
                            "I don’t have any apples."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Обрати внимание — слово меняется в зависимости от типа предложения."
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ Do you have some water?"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "В вопросах обычно используется any"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ Do you have any water?"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ I don’t have some money"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "В отрицаниях используется any"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ I don’t have any money"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Если сомневаешься — в вопросах и отрицаниях почти всегда any."
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "I have ___ friends",
                items: [
                    "some",
                    "any"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "Do you have ___ books?",
                items: [
                    "some",
                    "any"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "I don’t have ___ money",
                items: [
                    "some",
                    "any"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "list",
                        items: [
                            "some → утвердительные предложения",
                            "any → вопросы и отрицания"
                        ]
                    },

                    {
                        type: "text",
                        content: "Это главное правило урока."
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },

                    {
                        type: "text",
                        content: "Теперь ты можешь говорить о неопределённом количестве предметов на английском."
                    }
                ]
            }
        ],

        quiz:[ 
            { questionTitle: 'Верно или неверно', question: 'I have some water.',            options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'I have any water.',              options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'Do you have any books?',          options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'Do you have some books?',          options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: "I don't have any money.",           options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: "I don't have some money.",           options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'She has some friends.',               options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'She has any friends.',                 options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'We have some time.',                    options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: "Is there some water?",                   options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'Is there any water?',                     options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: "They don't have any pets.",                 options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: "They don't have some pets.",                 options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'He has some books.',                           options: ['Correct', 'Incorrect'], correct: 'Correct' },
        ]
    },

    {
        id: 6,
        title: "Modal Verb CAN (уметь / мочь)",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь говорить о своих способностях:",
                items: [
                    "I can swim.",
                    "She can play piano.",
                    "They can speak English.",
                    "Can you help me?"
                ]
            },

            {
                type: "text",
                content: "В английском языке есть специальные глаголы — modal verbs."
            },

            {
                type: "text",
                content: "Они помогают говорить о возможностях, способностях и разрешении."
            },

            {
                type: "text",
                content: "Сегодня мы изучим самый простой из них — can."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "CAN означает: мочь / уметь."
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I can swim.",
                            "I can read English.",
                            "She can dance.",
                            "They can play football."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "После can глагол всегда используется без to."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Формула:"
                    },

                    {
                        type: "block",
                        content: "Subject + can + verb"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I can play guitar.",
                            "She can speak English.",
                            "We can help you.",
                            "They can drive a car."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь отрицание."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Чтобы сказать НЕ МОГУ, добавляем NOT:"
                    },

                    {
                        type: "block",
                        content: "cannot / can’t"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I can’t swim.",
                            "She can’t play piano.",
                            "They can’t speak French.",
                            "He cannot drive."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Can’t = cannot (сокращённая форма)."
            },

            {
                type: "text",
                content: "Теперь вопросы."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "В вопросах can ставится в начало:"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "Can you swim?",
                            "Can she play piano?",
                            "Can they speak English?",
                            "Can I help you?"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Ответы обычно короткие:"
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "Yes, I can.",
                            "No, I can’t.",
                            "Yes, she can.",
                            "No, they can’t."
                        ]
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ I can to swim"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "После can глагол БЕЗ to"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ I can swim"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ She cans play piano"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "CAN не изменяется по лицам!"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ She can play piano"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Запомни: can всегда одинаковый для всех."
                    },

                    {
                        type: "list",
                        items: [
                            "I can",
                            "You can",
                            "He can",
                            "She can",
                            "We can",
                            "They can"
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "I ___ swim",
                items: [
                    "can",
                    "cans",
                    "can to"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "She ___ play piano",
                items: [
                    "can",
                    "can to",
                    "cans"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "___ you swim?",
                items: [
                    "Can",
                    "Do",
                    "Are"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "They ___ speak English",
                items: [
                    "can",
                    "cans",
                    "can to"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "block",
                        content: "Subject + can + verb"
                    },

                    {
                        type: "list",
                        items: [
                            "I can swim",
                            "She can play piano",
                            "They can speak English"
                        ]
                    },

                    {
                        type: "text",
                        content: "CAN = уметь / мочь"
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },

                    {
                        type: "text",
                        content: "Теперь ты можешь говорить о своих способностях, задавать вопросы и делать отрицания с can."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Верно или неверно', question: 'I can swim.',                 options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'I can to swim.',               options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'She can play piano.',           options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'She cans play piano.',           options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'Can you help me?',                 options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'You can help me?',                  options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: "I can't swim.",                       options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: "I not can swim.",                      options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'They can speak English.',                options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'They can to speak English.',               options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'He cannot drive.',                           options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'He cans not drive.',                          options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'We can help you.',                              options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'We can helps you.',                              options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
        ]
    },

    {
        id: 7,
        title: "Possessive Pronouns (my, your, his, her, its, our)",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь говорить, кому принадлежит предмет:",
                items: [
                    "This is my book.",
                    "That is your car.",
                    "It is his phone.",
                    "She is her friend.",
                    "We are our team."
                ]
            },

            {
                type: "text",
                content: "В английском языке важно уметь говорить, кому принадлежит предмет."
            },

            {
                type: "text",
                content: "Для этого используются possessive pronouns — слова принадлежности."
            },

            {
                type: "text",
                content: "Они ставятся ПЕРЕД существительным."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "block",
                        content: "my / your / his / her / its / our / their"
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь разберём каждое слово отдельно."
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "MY — мой"
                    },
                    {
                        type: "list",
                        items: [
                            "This is my book.",
                            "This is my phone.",
                            "I like my car."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "YOUR — твой / ваш"
                    },
                    {
                        type: "list",
                        items: [
                            "This is your bag.",
                            "Is this your phone?",
                            "I like your house."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "HIS — его"
                    },
                    {
                        type: "list",
                        items: [
                            "This is his book.",
                            "That is his car.",
                            "He likes his job."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "HER — её"
                    },
                    {
                        type: "list",
                        items: [
                            "This is her bag.",
                            "That is her phone.",
                            "She likes her friend."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "ITS — его / её (для животных и предметов)"
                    },
                    {
                        type: "list",
                        items: [
                            "The cat likes its food.",
                            "The dog plays with its toy.",
                            "The robot moves its arm."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "OUR — наш"
                    },
                    {
                        type: "list",
                        items: [
                            "This is our house.",
                            "We like our teacher.",
                            "This is our car."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "THEIR — их"
                    },
                    {
                        type: "list",
                        items: [
                            "This is their house.",
                            "They like their teacher.",
                            "That is their car."
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Главная идея:"
                    },
                    {
                        type: "list",
                        items: [
                            "my = мой",
                            "your = твой",
                            "his = его",
                            "her = её",
                            "its = его/её (для вещей)",
                            "our = наш",
                            "their = их"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Важно: possessive pronouns всегда стоят ПЕРЕД существительным."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "my book",
                            "your phone",
                            "his car",
                            "her bag",
                            "our house",
                            "their friends"
                        ]
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ This book is my"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "В английском my НЕ стоит в конце"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ This is my book"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ She likes she friend"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "Нужно possessive, а не personal pronoun"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ She likes her friend"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Запомни простое правило:"
                    },
                    {
                        type: "text",
                        content: "личное местоимение (I, he, she) ≠ принадлежность (my, his, her)"
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "This is ___ book",
                items: [
                    "my",
                    "I",
                    "me"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "That is ___ car",
                items: [
                    "your",
                    "you",
                    "yourses"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "She likes ___ phone",
                items: [
                    "her",
                    "she",
                    "hers"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "We like ___ teacher",
                items: [
                    "our",
                    "we",
                    "us"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "block",
                        content: "my / your / his / her / its / our / their"
                    },
                    {
                        type: "text",
                        content: "Ставятся ПЕРЕД существительным"
                    },
                    {
                        type: "text",
                        content: "This is my book"
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },
                    {
                        type: "text",
                        content: "Теперь ты умеешь говорить, кому принадлежит предмет, и правильно использовать possessive pronouns."
                    }
                ]
            }
        ],

        quiz:[
            { questionTitle: 'Верно или неверно', question: 'This is my book.',              options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'This book is my.',                options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'That is your car.',                 options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'That is you car.',                    options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'She likes her friend.',                 options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'She likes she friend.',                   options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'We like our teacher.',                      options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'We like we teacher.',                          options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'He likes his job.',                              options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'He likes he job.',                                 options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'The cat likes its food.',                            options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'The cat likes it food.',                               options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'They like their teacher.',                              options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'They like them teacher.',                                options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
        ]
    },

    {
        id: 8,
        title: "Adverbs of Frequency (always, often, never)",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь говорить, как часто ты что-то делаешь:",
                items: [
                    "I always drink coffee.",
                    "She often plays games.",
                    "They never smoke.",
                    "We usually go to school."
                ]
            },

            {
                type: "text",
                content: "В английском языке есть специальные слова, которые показывают частоту действий."
            },

            {
                type: "text",
                content: "Они называются Adverbs of Frequency — наречия частоты."
            },

            {
                type: "text",
                content: "Они отвечают на вопрос: HOW OFTEN? (как часто?)"
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Самые важные наречия частоты:"
                    },

                    {
                        type: "table",
                        headers: ["Word", "Meaning"],

                        rows: [
                            ["always", "всегда"],
                            ["often", "часто"],
                            ["sometimes", "иногда"],
                            ["never", "никогда"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь представь шкалу частоты:"
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "always → 100%",
                            "often → ~70%",
                            "sometimes → ~40%",
                            "never → 0%"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь самое важное правило — где ставить эти слова."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Наречия частоты обычно стоят ПЕРЕД глаголом."
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I always drink coffee.",
                            "She often plays games.",
                            "They never smoke.",
                            "We sometimes watch TV."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Но есть важное исключение."
            },

            {
                type: "text",
                content: "С глаголом TO BE (am / is / are) наречие ставится ПОСЛЕ него."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I am always happy.",
                            "She is often late.",
                            "They are never tired."
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "table",
                        headers: ["Verb type", "Position of adverb"],

                        rows: [
                            ["Normal verb", "before verb"],
                            ["to be (am/is/are)", "after verb"]
                        ]
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ She plays often games"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "Наречие не ставится после глагола (в этом случае)"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ She often plays games"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ He is always go to school"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "После is нельзя ставить go — нужен правильный порядок"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ He always goes to school"
                    }
                ]
            },

            {
                type: "text",
                content: "Обрати внимание — в третьем лице (he / she / it) глагол получает -s."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "He always plays football.",
                            "She often studies English.",
                            "It never works."
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "I ___ drink coffee",
                items: [
                    "always",
                    "never",
                    "am always"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "She ___ plays football",
                items: [
                    "often",
                    "is often",
                    "often is"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "They ___ go to school",
                items: [
                    "never",
                    "are never",
                    "never are"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "He is ___ happy",
                items: [
                    "always",
                    "play",
                    "often plays"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "list",
                        items: [
                            "always = всегда",
                            "often = часто",
                            "sometimes = иногда",
                            "never = никогда"
                        ]
                    },

                    {
                        type: "text",
                        content: "Before verb: I always play"
                    },

                    {
                        type: "text",
                        content: "With to be: I am always happy"
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },

                    {
                        type: "text",
                        content: "Теперь ты можешь говорить, как часто ты что-то делаешь в английском языке."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Верно или неверно', question: 'I always drink coffee.',            options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'I drink always coffee.',              options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'She often plays football.',            options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'She plays often football.',              options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'I am always happy.',                       options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'I always am happy.',                          options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'They never smoke.',                             options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'They smoke never.',                               options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'He is often late.',                                 options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'He often is late.',                                   options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'He always goes to school.',                             options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'He is always go to school.',                              options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
            { questionTitle: 'Верно или неверно', question: 'We sometimes watch TV.',                                    options: ['Correct', 'Incorrect'], correct: 'Correct' },
            { questionTitle: 'Верно или неверно', question: 'We watch sometimes TV.',                                      options: ['Correct', 'Incorrect'], correct: 'Incorrect' },
        ]
    },

    {
        id: 9,
        title: "Tenses: Simple Tenses (Present, Past, Future)",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты поймёшь разницу между тремя основными временами:",
                items: [
                    "I play football (Present Simple)",
                    "I played football (Past Simple)",
                    "I will play football (Future Simple)"
                ]
            },

            {
                type: "text",
                content: "В английском языке времена показывают, когда происходит действие."
            },

            {
                type: "text",
                content: "Есть три базовых времени, которые используются чаще всего."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "1. Present Simple — настоящее время"
                    }
                ]
            },

            {
                type: "text",
                content: "Используется, когда мы говорим о привычках, фактах и регулярных действиях."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I play football.",
                            "She likes music.",
                            "They go to school."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Ты уже знаешь это время из прошлых уроков (Word Order, can, pronouns)."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "2. Past Simple — прошедшее время"
                    }
                ]
            },

            {
                type: "text",
                content: "Используется, когда действие уже произошло."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I played football yesterday.",
                            "She watched TV last night.",
                            "They visited London."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Обычно в прошлом времени глагол меняется."
            },

            {
                type: "text",
                content: "Часто добавляется окончание -ed (regular verbs)."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "play → played",
                            "watch → watched",
                            "work → worked"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Но есть неправильные глаголы (irregular verbs)."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "go → went",
                            "have → had",
                            "see → saw"
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "3. Future Simple — будущее время"
                    }
                ]
            },

            {
                type: "text",
                content: "Используется, когда мы говорим о будущем."
            },

            {
                type: "text",
                content: "Образуется с помощью will."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I will play football tomorrow.",
                            "She will go to school.",
                            "They will visit us."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "После will глагол всегда без изменений."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "block",
                        content: "will + verb (base form)"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "will play",
                            "will go",
                            "will see"
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Сравнение трёх времён:"
                    },

                    {
                        type: "table",
                        headers: ["Time", "Example"],

                        rows: [
                            ["Present", "I play football"],
                            ["Past", "I played football"],
                            ["Future", "I will play football"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Обрати внимание — меняется только форма глагола и вспомогательные слова."
            },

            {
                type: "text",
                content: "Но структура предложения остаётся той же:"
            },

            {
                type: "block",
                content: "Subject + Verb + Object"
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ I will to go"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "После will глагол без to"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ I will go"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ I goed to school"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "Неправильный глагол go → went"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ I went to school"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Думай так:"
                    },

                    {
                        type: "list",
                        items: [
                            "Present → что ты делаешь обычно",
                            "Past → что уже сделал",
                            "Future → что собираешься делать"
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильное время:",
                question: "I ___ football yesterday",
                items: [
                    "play",
                    "played",
                    "will play"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "She ___ music every day",
                items: [
                    "likes",
                    "liked",
                    "will like"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "They ___ visit us tomorrow",
                items: [
                    "will",
                    "went",
                    "go"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "He ___ saw a movie",
                items: [
                    "will",
                    "see",
                    "saw"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "table",
                        headers: ["Tense", "Marker"],

                        rows: [
                            ["Present Simple", "every day / usually"],
                            ["Past Simple", "yesterday / last week"],
                            ["Future Simple", "tomorrow / will"]
                        ]
                    },

                    {
                        type: "text",
                        content: "Все три времени используют одну структуру предложения."
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },

                    {
                        type: "text",
                        content: "Теперь ты понимаешь базовую систему английских времён: настоящее, прошедшее и будущее."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Выбери правильный вариант', question: 'I ___ football every Saturday.', options: ['play', 'played', 'will play'], correct: 'play' },
            { questionTitle: 'Выбери правильный вариант', question: 'Yesterday, she ___ a letter to her friend.', options: ['writes', 'wrote', 'will write'], correct: 'wrote' },
            { questionTitle: 'Выбери правильный вариант', question: 'Next year, they ___ to Spain.', options: ['travel', 'traveled', 'will travel'], correct: 'will travel' },
            { questionTitle: 'Выбери правильный вариант', question: 'He ___ his homework every evening.', options: ['do', 'does', 'did'], correct: 'does' },
            { questionTitle: 'Выбери правильную форму', question: "Past form of 'see':", options: ['seed', 'saw', 'seen'], correct: 'saw' },
            { questionTitle: 'Выбери правильный вариант', question: 'Tomorrow we ___ a new movie.', options: ['watch', 'watched', 'will watch'], correct: 'will watch' },
            { questionTitle: 'Выбери правильный вариант', question: 'Last summer, I ___ my grandparents.', options: ['visit', 'visited', 'will visit'], correct: 'visited' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['I will to call you.', 'I will call you.', 'I will calling you.'], correct: 'I will call you.' },
            { questionTitle: 'Выбери правильный вариант', question: 'She ___ basketball twice a week.', options: ['play', 'plays', 'played'], correct: 'plays' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['He goed to the shop.', 'He went to the shop.', 'He go to the shop.'], correct: 'He went to the shop.' },
            { questionTitle: 'Выбери правильный вариант', question: 'They ___ dinner at 7pm every day.', options: ['have', 'had', 'will have'], correct: 'have' },
            { questionTitle: 'Выбери правильный вариант', question: 'In two days, my brother ___ his exam.', options: ['takes', 'took', 'will take'], correct: 'will take' },
        ]
    },

    {
        id: 10,
        title: "Tenses: Present Continuous (действие сейчас)",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь говорить о действиях, которые происходят прямо сейчас:",
                items: [
                    "I am reading a book.",
                    "She is watching TV.",
                    "They are playing football.",
                    "We are studying English."
                ]
            },

            {
                type: "text",
                content: "В английском языке есть время, которое показывает действие прямо сейчас."
            },

            {
                type: "text",
                content: "Оно называется Present Continuous."
            },

            {
                type: "text",
                content: "Мы используем его, когда действие происходит в момент речи."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Формула Present Continuous:"
                    },

                    {
                        type: "block",
                        content: "Subject + am/is/are + verb + -ing"
                    }
                ]
            },

            {
                type: "text",
                content: "Сначала вспомним местоимения и to be:"
            },

            {
                type: "rule",
                content: [
                    {
                        type: "table",
                        headers: ["Subject", "Verb to be"],

                        rows: [
                            ["I", "am"],
                            ["He / She / It", "is"],
                            ["We / You / They", "are"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь добавляем действие с окончанием -ing."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "read → reading",
                            "play → playing",
                            "watch → watching",
                            "study → studying"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь посмотрим на примеры."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I am reading a book.",
                            "She is playing football.",
                            "They are watching TV.",
                            "We are studying English."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Важно: это НЕ привычка, а действие прямо сейчас."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "list",
                        items: [
                            "Present Simple → I play football (обычно)",
                            "Present Continuous → I am playing football (сейчас)"
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I play football (каждый день)",
                            "I am playing football (прямо сейчас)"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь отрицание."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Добавляем NOT после am/is/are:"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I am not reading.",
                            "She is not playing.",
                            "They are not working."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь вопросы."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "В вопросах am/is/are ставится в начало:"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "Am I reading?",
                            "Is she playing football?",
                            "Are they studying English?"
                        ]
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ I am play football"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "Нужно -ing форма"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ I am playing football"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ She is go to school"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "После is нужен verb + ing"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ She is going to school"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Запомни просто:"
                    },
                    {
                        type: "list",
                        items: [
                            "am/is/are + ing = сейчас",
                            "обычный глагол = обычно"
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "I ___ reading a book",
                items: [
                    "am",
                    "is",
                    "are"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "She ___ playing football",
                items: [
                    "is",
                    "am",
                    "are"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильную форму:",
                question: "They are ___ TV",
                items: [
                    "watch",
                    "watching",
                    "watched"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "We ___ studying English",
                items: [
                    "are",
                    "is",
                    "am"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "block",
                        content: "Subject + am/is/are + verb-ing"
                    },
                    {
                        type: "list",
                        items: [
                            "I am playing",
                            "She is reading",
                            "They are working"
                        ]
                    },
                    {
                        type: "text",
                        content: "Используется для действий прямо сейчас"
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },
                    {
                        type: "text",
                        content: "Теперь ты можешь говорить о том, что происходит прямо в момент речи."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Выбери правильный вариант', question: 'Look! She ___ a new dress.', options: ['wear', 'wears', 'is wearing'], correct: 'is wearing' },
            { questionTitle: 'Выбери правильный вариант', question: 'I ___ my homework right now.', options: ['am doing', 'do', 'did'], correct: 'am doing' },
            { questionTitle: 'Выбери правильную форму', question: "Present Continuous of 'run':", options: ['runing', 'runned', 'running'], correct: 'running' },
            { questionTitle: 'Выбери правильный вариант', question: 'They ___ football at the moment.', options: ['play', 'plays', 'are playing'], correct: 'are playing' },
            { questionTitle: 'Выбери правильный вариант', question: '___ you listening to me?', options: ['Is', 'Are', 'Am'], correct: 'Are' },
            { questionTitle: 'Выбери правильный вариант', question: 'He ___ TV, so please be quiet.', options: ['watch', 'watches', 'is watching'], correct: 'is watching' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['She is study English.', 'She is studying English.', 'She studying English.'], correct: 'She is studying English.' },
            { questionTitle: 'Выбери правильный вариант', question: 'We ___ not working today.', options: ['is', 'are', 'am'], correct: 'are' },
            { questionTitle: 'Выбери правильный вариант', question: '___ I doing this correctly?', options: ['Am', 'Is', 'Are'], correct: 'Am' },
            { questionTitle: 'Выбери правильную форму', question: 'Правильное отрицание:', options: ["They isn't coming.", "They aren't coming.", "They amn't coming."], correct: "They aren't coming." },
            { questionTitle: 'Выбери правильный вариант', question: 'My parents ___ dinner in the kitchen.', options: ['cook', 'cooks', 'are cooking'], correct: 'are cooking' },
            { questionTitle: 'Выбери правильную форму', question: "Present Continuous of 'write':", options: ['writeing', 'writting', 'writing'], correct: 'writing' },
        ]
    },

    {
        id: 11,
        title: "Verb 'to be' (am / is / are)",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь использовать am / is / are в простых предложениях:",
                items: [
                    "I am a student.",
                    "She is happy.",
                    "They are friends.",
                    "We are at home."
                ]
            },

            {
                type: "text",
                content: "Глагол to be — один из самых важных глаголов в английском языке."
            },

            {
                type: "text",
                content: "Он означает: быть / находиться / являться."
            },

            {
                type: "text",
                content: "В отличие от других глаголов, он изменяется в зависимости от подлежащего."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Формы глагола to be:"
                    },

                    {
                        type: "table",
                        headers: ["Subject", "Form"],

                        rows: [
                            ["I", "am"],
                            ["He / She / It", "is"],
                            ["We / You / They", "are"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь посмотрим, как это используется в предложениях."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I am a student.",
                            "She is my friend.",
                            "He is happy.",
                            "We are at school.",
                            "They are teachers."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Очень важно: to be используется без других вспомогательных глаголов."
            },

            {
                type: "text",
                content: "Он сам выражает смысл 'есть / является / находится'."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Отрицание образуется с NOT:"
                    },

                    {
                        type: "table",
                        headers: ["Positive", "Negative"],

                        rows: [
                            ["I am", "I am not"],
                            ["He is", "He is not"],
                            ["They are", "They are not"]
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I am not tired.",
                            "She is not here.",
                            "They are not students."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь вопросы."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "В вопросах to be ставится в начало:"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "Am I late?",
                            "Is she your friend?",
                            "Are they at home?"
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Короткие ответы:"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "Yes, I am. / No, I am not.",
                            "Yes, she is. / No, she isn't.",
                            "Yes, they are. / No, they aren't."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь посмотрим, как to be связан с другими темами."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "She is happy (adjectives)",
                            "They are friends (plural nouns)",
                            "I am a student (profession)",
                            "He is at home (place)"
                        ]
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ I is happy"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "После I всегда am"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ I am happy"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ He are my friend"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "С he используется is"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ He is my friend"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Запомни главное правило:"
                    },
                    {
                        type: "list",
                        items: [
                            "I → am",
                            "He / She / It → is",
                            "We / You / They → are"
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "I ___ a student",
                items: [
                    "am",
                    "is",
                    "are"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "She ___ happy",
                items: [
                    "is",
                    "am",
                    "are"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "They ___ friends",
                items: [
                    "are",
                    "is",
                    "am"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "We ___ at home",
                items: [
                    "are",
                    "is",
                    "am"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "table",
                        headers: ["Subject", "Verb to be"],

                        rows: [
                            ["I", "am"],
                            ["He / She / It", "is"],
                            ["We / You / They", "are"]
                        ]
                    },

                    {
                        type: "text",
                        content: "Это основа английского языка."
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },
                    {
                        type: "text",
                        content: "Теперь ты понимаешь и можешь использовать один из самых важных глаголов в английском языке — to be."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Выбери правильный вариант', question: '___ you a teacher?', options: ['Am', 'Is', 'Are'], correct: 'Are' },
            { questionTitle: 'Выбери правильный вариант', question: 'He ___ not at home.', options: ['am', 'is', 'are'], correct: 'is' },
            { questionTitle: 'Выбери правильный вариант', question: 'We ___ students at this school.', options: ['am', 'is', 'are'], correct: 'are' },
            { questionTitle: 'Выбери правильный короткий ответ', question: "Is she your sister? — Yes, she ___.", options: ['is', 'are', 'am'], correct: 'is' },
            { questionTitle: 'Выбери правильный вариант', question: 'I ___ not tired.', options: ['am', 'is', 'are'], correct: 'am' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['They is teachers.', 'They are teachers.', 'They am teachers.'], correct: 'They are teachers.' },
            { questionTitle: 'Выбери правильный вариант', question: '___ they at home?', options: ['Is', 'Am', 'Are'], correct: 'Are' },
            { questionTitle: 'Выбери правильный вариант', question: 'My brother ___ a doctor.', options: ['am', 'is', 'are'], correct: 'is' },
            { questionTitle: 'Выбери правильное отрицание', question: 'She ___ happy today.', options: ["isn't", "aren't", "amn't"], correct: "isn't" },
            { questionTitle: 'Выбери правильный вариант', question: 'It ___ cold outside.', options: ['am', 'is', 'are'], correct: 'is' },
            { questionTitle: 'Выбери правильный вопрос', question: 'Какой вопрос верный?', options: ['Am I late?', 'Is I late?', 'Are I late?'], correct: 'Am I late?' },
            { questionTitle: 'Выбери правильный вариант', question: 'You and your friend ___ welcome here.', options: ['is', 'am', 'are'], correct: 'are' },
        ]
    },

    {
        id: 12,
        title: "Articles: a / an / the",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь правильно использовать артикли a, an, the:",
                items: [
                    "I have a cat.",
                    "She is an engineer.",
                    "The cat is on the table."
                ]
            },

            {
                type: "text",
                content: "В английском языке перед существительными часто стоят маленькие слова — артикли."
            },

            {
                type: "text",
                content: "Они помогают понять: говорим ли мы о чём-то новом или уже известном."
            },

            {
                type: "text",
                content: "Сегодня мы изучим три артикля: a, an и the."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "A и AN используются, когда мы говорим о чём-то ВПЕРВЫЕ."
                    }
                ]
            },

            {
                type: "text",
                content: "Это значит: один любой предмет, не конкретный."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I have a dog.",
                            "She has a car.",
                            "He is a teacher."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь важное различие между a и an."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "A используется перед согласным звуком."
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "a cat",
                            "a dog",
                            "a book",
                            "a house"
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "AN используется перед гласным звуком (a, e, i, o, u)."
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "an apple",
                            "an egg",
                            "an umbrella",
                            "an idea"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Важно: учитывается ЗВУК, а не буква."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "a university (звук 'juː')",
                            "a European country",
                            "an hour (немое h)"
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "THE используется, когда мы говорим о КОНКРЕТНОМ предмете."
                    }
                ]
            },

            {
                type: "text",
                content: "Это может быть предмет, который уже известен собеседнику."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I have a cat. The cat is small.",
                            "She has a book. The book is interesting.",
                            "I see a house. The house is big."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "THE = тот самый / конкретный."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Сравнение:"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I see a dog (любой, первый раз)",
                            "The dog is black (конкретный уже известный)"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь посмотрим, как это работает в реальной речи."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "I have a phone. The phone is new.",
                            "She sees an apple. The apple is red.",
                            "He is a doctor. The doctor is kind."
                        ]
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ I have apple"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "Нужен артикль, если предмет исчисляемый и в единственном числе"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ I have an apple"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ I have a idea"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "Ошибка в звуке: idea начинается с гласного звука"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ I have an idea"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ The is a book"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "THE не используется без существительного"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ This is a book"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Очень простое правило:"
                    },
                    {
                        type: "list",
                        items: [
                            "a / an = первый раз",
                            "the = уже известно"
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "I have ___ cat",
                items: [
                    "a",
                    "an",
                    "the"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "She is ___ engineer",
                items: [
                    "a",
                    "an",
                    "the"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "I see ___ apple. ___ apple is red",
                items: [
                    "an / the",
                    "a / an",
                    "the / a"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "He has ___ idea",
                items: [
                    "an",
                    "a",
                    "the"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "list",
                        items: [
                            "a + consonant sound",
                            "an + vowel sound",
                            "the = конкретный предмет"
                        ]
                    },

                    {
                        type: "text",
                        content: "Артикли делают английскую речь естественной."
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },
                    {
                        type: "text",
                        content: "Теперь ты умеешь правильно использовать артикли a, an и the в речи."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Выбери правильный вариант', question: 'I saw ___ elephant at the zoo.', options: ['a', 'an', 'the'], correct: 'an' },
            { questionTitle: 'Выбери правильную пару', question: 'She has ___ car. ___ car is red.', options: ['a / The', 'an / A', 'the / An'], correct: 'a / The' },
            { questionTitle: 'Выбери правильный вариант', question: 'He is ___ honest man.', options: ['a', 'an', 'the'], correct: 'an' },
            { questionTitle: 'Выбери правильный вариант', question: "I need ___ umbrella, it's raining.", options: ['a', 'an', 'the'], correct: 'an' },
            { questionTitle: 'Выбери правильный вариант', question: '___ sun rises in the east.', options: ['A', 'An', 'The'], correct: 'The' },
            { questionTitle: 'Выбери правильный вариант', question: 'She wants to become ___ nurse.', options: ['a', 'an', 'the'], correct: 'a' },
            { questionTitle: 'Выбери правильный вариант', question: 'This is ___ university near my house.', options: ['a', 'an', 'the'], correct: 'a' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['I have idea.', 'I have an idea.', 'I have a idea.'], correct: 'I have an idea.' },
            { questionTitle: 'Выбери правильный вариант', question: 'We waited for ___ hour.', options: ['a', 'an', 'the'], correct: 'an' },
            { questionTitle: 'Выбери правильный вариант', question: 'I bought a book yesterday. ___ book is on my desk now.', options: ['A', 'An', 'The'], correct: 'The' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['The is a cat.', 'This is a cat.', 'A is cat.'], correct: 'This is a cat.' },
            { questionTitle: 'Выбери правильный вариант', question: 'He works as ___ engineer.', options: ['a', 'an', 'the'], correct: 'an' },
        ]
    },

    {
        id: 13,
        title: "This, That, These, Those",

        theory: [
            {
                type: "goal",
                goal: "К концу урока ты сможешь показывать на предметы рядом и далеко:",
                items: [
                    "This is a book.",
                    "That is a car.",
                    "These are books.",
                    "Those are cars."
                ]
            },

            {
                type: "text",
                content: "Представь, что рядом с тобой лежит книга."
            },

            {
                type: "text",
                content: "Ты можешь показать на неё и сказать:"
            },

            {
                type: "block",
                content: "This is a book."
            },

            {
                type: "text",
                content: "А теперь представь, что книга находится далеко."
            },

            {
                type: "block",
                content: "That is a book."
            },

            {
                type: "text",
                content: "В английском языке используются разные слова для близких и далеких предметов."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "This is my phone.",
                            "That is my car.",
                            "This is my dog.",
                            "That is my house."
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Для одного предмета используются два слова:"
                    },

                    {
                        type: "table",
                        headers: ["Word", "Meaning"],

                        rows: [
                            ["This", "Этот / эта / это (рядом)"],
                            ["That", "Тот / та / то (далеко)"]
                        ]
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Можно представить, что this используется, когда ты можешь легко дотронуться до предмета рукой."
                    },

                    {
                        type: "text",
                        content: "That используется для чего-то дальше от тебя."
                    }
                ]
            },

            {
                type: "text",
                content: "Но что делать, если предметов несколько?"
            },

            {
                type: "text",
                content: "Тогда используются другие слова."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "table",
                        headers: ["One", "Many"],

                        rows: [
                            ["This", "These"],
                            ["That", "Those"]
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "This book → These books",
                            "That car → Those cars",
                            "This apple → These apples",
                            "That dog → Those dogs"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Обрати внимание."
            },

            {
                type: "text",
                content: "Мы изучали множественное число в прошлом уроке."
            },

            {
                type: "text",
                content: "Когда предметов становится несколько, меняется не только существительное."
            },

            {
                type: "text",
                content: "Меняется и указательное слово."
            },

            {
                type: "example",
                content: [
                    {
                        type: "table",
                        headers: ["One", "Many"],

                        rows: [
                            ["This cat", "These cats"],
                            ["This book", "These books"],
                            ["That dog", "Those dogs"],
                            ["That apple", "Those apples"]
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Запомни главную таблицу урока:"
                    },

                    {
                        type: "table",
                        headers: ["Distance", "One", "Many"],

                        rows: [
                            ["Near", "This", "These"],
                            ["Far", "That", "Those"]
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "Рядом:"
                    },

                    {
                        type: "list",
                        items: [
                            "This is my phone.",
                            "These are my books."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "text",
                        content: "Далеко:"
                    },

                    {
                        type: "list",
                        items: [
                            "That is my house.",
                            "Those are my friends."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Обрати внимание ещё на одну важную деталь."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "table",
                        headers: ["Word", "Verb"],

                        rows: [
                            ["This", "is"],
                            ["That", "is"],
                            ["These", "are"],
                            ["Those", "are"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "This и That используются с is."
            },

            {
                type: "text",
                content: "These и Those используются с are."
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Очень частая ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ These is my books."
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ These are my books."
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще одна ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ This are my books."
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ These are my books."
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Если предмет один, нельзя использовать These."
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ These is my phone."
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ This is my phone."
                    }
                ]
            },

            {
                type: "interesting",
                content: [
                    {
                        type: "text",
                        content: "Иногда люди используют this и that не для расстояния."
                    },

                    {
                        type: "list",
                        items: [
                            "This is my friend Alex.",
                            "That was a great movie."
                        ]
                    },

                    {
                        type: "text",
                        content: "Такие случаи мы подробно изучим позже."
                    }
                ]
            },

            {
                type: "explore",
                title: "Узнать больше",
                content: [
                    {
                        type: "text",
                        content: "This и These часто используются при представлении людей."
                    },

                    {
                        type: "list",
                        items: [
                            "This is my brother.",
                            "These are my parents."
                        ]
                    },

                    {
                        type: "text",
                        content: "That и Those могут использоваться, когда мы говорим о чем-то, что уже обсуждали раньше."
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильное слово:",
                question: "___ is my phone.",
                items: [
                    "This",
                    "These",
                    "Those"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильное слово:",
                question: "___ are my books.",
                items: [
                    "This",
                    "These",
                    "That"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильное слово:",
                question: "___ is my house.",
                items: [
                    "That",
                    "These",
                    "Those"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильное слово:",
                question: "___ are my friends.",
                items: [
                    "This",
                    "That",
                    "Those"
                ]
            },

            {
                type: "check",
                id: 5,
                exp: "Выбери правильную связку:",
                question: "These ___ my books.",
                items: [
                    "is",
                    "are",
                    "am"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "table",
                        headers: ["Near", "Far"],

                        rows: [
                            ["This", "That"],
                            ["These", "Those"]
                        ]
                    },

                    {
                        type: "text",
                        content: "This / That — один предмет."
                    },

                    {
                        type: "text",
                        content: "These / Those — несколько предметов."
                    },

                    {
                        type: "text",
                        content: "This, That → is."
                    },

                    {
                        type: "text",
                        content: "These, Those → are."
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },

                    {
                        type: "text",
                        content: "Теперь ты можешь показывать на предметы рядом и далеко, а также правильно использовать this, that, these и those."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Выбери правильное слово', question: '___ is my phone. (в руке)', options: ['This', 'These', 'Those'], correct: 'This' },
            { questionTitle: 'Выбери правильное слово', question: '___ are my friends. (далеко, много)', options: ['This', 'That', 'Those'], correct: 'Those' },
            { questionTitle: 'Выбери правильное слово', question: '___ books are interesting. (рядом, много)', options: ['This', 'These', 'That'], correct: 'These' },
            { questionTitle: 'Выбери правильное слово', question: '___ car over there is expensive.', options: ['This', 'That', 'These'], correct: 'That' },
            { questionTitle: 'Выбери правильную связку', question: 'These ___ my shoes.', options: ['is', 'are', 'am'], correct: 'are' },
            { questionTitle: 'Выбери правильную связку', question: 'That ___ my house.', options: ['is', 'are', 'am'], correct: 'is' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['This are my pens.', 'These are my pens.', 'This is my pens.'], correct: 'These are my pens.' },
            { questionTitle: 'Выбери правильное слово', question: 'Can you pass me ___ apple? (рядом)', options: ['this', 'these', 'those'], correct: 'this' },
            { questionTitle: 'Выбери правильное слово', question: 'Look at ___ mountains in the distance.', options: ['this', 'that', 'those'], correct: 'those' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['Those is my keys.', 'Those are my keys.', 'That are my keys.'], correct: 'Those are my keys.' },
            { questionTitle: 'Выбери правильное слово', question: '___ is a great idea!', options: ['This', 'These', 'Those'], correct: 'This' },
            { questionTitle: 'Выбери правильное слово', question: "I don't like ___ shoes over there.", options: ['this', 'that', 'those'], correct: 'those' },
        ]
    },

    {
        id: 14,
        title: "Grammar constructions I: There is / There are",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь описывать, что есть в месте:",
                items: [
                    "There is a book on the table.",
                    "There are two chairs in the room.",
                    "Is there a problem?",
                    "There are no apples."
                ]
            },

            {
                type: "text",
                content: "В английском языке есть специальная конструкция, чтобы говорить о том, что что-то существует или находится где-то."
            },

            {
                type: "text",
                content: "Она называется There is / There are."
            },

            {
                type: "text",
                content: "Мы не говорим 'is a book on the table', как в некоторых языках."
            },

            {
                type: "text",
                content: "Мы начинаем предложение с There."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Формула:"
                    },
                    {
                        type: "block",
                        content: "There is + singular"
                    },
                    {
                        type: "block",
                        content: "There are + plural"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "There is a cat.",
                            "There is a book on the table.",
                            "There is a problem."
                        ]
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "There are two cats.",
                            "There are books on the table.",
                            "There are students in the class."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Важно: после there is / are мы просто описываем существование чего-то."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Отрицание:"
                    },
                    {
                        type: "block",
                        content: "There is not / There isn’t"
                    },
                    {
                        type: "block",
                        content: "There are not / There aren’t"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "There isn’t a cat.",
                            "There isn’t a problem.",
                            "There aren’t any apples.",
                            "There aren’t chairs in the room."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь вопросы."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Вопросы строятся так:"
                    },
                    {
                        type: "block",
                        content: "Is there...?"
                    },
                    {
                        type: "block",
                        content: "Are there...?"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "Is there a problem?",
                            "Is there a book on the table?",
                            "Are there any chairs?",
                            "Are there students in the room?"
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Короткие ответы:"
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "Yes, there is. / No, there isn’t.",
                            "Yes, there are. / No, there aren’t."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Теперь важно понять смысл."
            },

            {
                type: "text",
                content: "Эта конструкция НЕ переводится дословно как «там есть»."
            },

            {
                type: "text",
                content: "Она просто сообщает, что что-то существует или находится где-то."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "There is a car in the street → В улице есть машина",
                            "There are people in the park → В парке есть люди"
                        ]
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Частая ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ Is a book on the table"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "В английском нельзя пропускать there"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ There is a book on the table"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "❌ There is two books"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "text",
                        content: "С множественным числом используется are"
                    },
                    {
                        type: "divider"
                    },
                    {
                        type: "block",
                        content: "✅ There are two books"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Запомни просто:"
                    },
                    {
                        type: "list",
                        items: [
                            "1 предмет → there is",
                            "2+ предмета → there are",
                            "вопрос → is there / are there"
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "___ a book on the table",
                items: [
                    "There is",
                    "There are",
                    "Is there"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "___ two cats in the room",
                items: [
                    "There are",
                    "There is",
                    "Are there"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "___ a problem?",
                items: [
                    "Is there",
                    "Are there",
                    "There are"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "There ___ no apples",
                items: [
                    "are",
                    "is",
                    "be"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "block",
                        content: "There is + singular"
                    },
                    {
                        type: "block",
                        content: "There are + plural"
                    },
                    {
                        type: "text",
                        content: "Используется для описания существования предметов"
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },
                    {
                        type: "text",
                        content: "Теперь ты можешь описывать, что есть вокруг тебя на английском языке."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Выбери правильный вариант', question: '___ a book on the table.', options: ['There is', 'There are', 'Is there'], correct: 'There is' },
            { questionTitle: 'Выбери правильный вариант', question: '___ three chairs in the room.', options: ['There is', 'There are', 'Are there'], correct: 'There are' },
            { questionTitle: 'Выбери правильный вариант', question: '___ any milk in the fridge?', options: ['Is there', 'Are there', 'There is'], correct: 'Is there' },
            { questionTitle: 'Выбери правильный вариант', question: '___ many people at the concert.', options: ['There is', 'There are', 'Is there'], correct: 'There are' },
            { questionTitle: 'Выбери правильное отрицание', question: '___ no apples left.', options: ["There isn't", "There aren't", "There don't"], correct: "There aren't" },
            { questionTitle: 'Выбери правильный вариант', question: '___ a problem with the car.', options: ['There is', 'There are', 'Are there'], correct: 'There is' },
            { questionTitle: 'Выбери правильный вопрос', question: 'Какой вопрос верный?', options: ['Are there a park nearby?', 'Is there a park nearby?', 'There is a park nearby?'], correct: 'Is there a park nearby?' },
            { questionTitle: 'Выбери правильный короткий ответ', question: 'Are there any tickets left? — No, ___.', options: ["there isn't", "there aren't", "there don't"], correct: "there aren't" },
            { questionTitle: 'Выбери правильный вариант', question: '___ two cats sleeping on the sofa.', options: ['There is', 'There are', 'Is there'], correct: 'There are' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['Is a book on the table.', 'There a book on the table.', 'There is a book on the table.'], correct: 'There is a book on the table.' },
            { questionTitle: 'Выбери правильный вариант', question: '___ some students waiting outside.', options: ['There is', 'There are', 'Is there'], correct: 'There are' },
            { questionTitle: 'Выбери правильный вариант', question: '___ enough time to finish this?', options: ['Is there', 'Are there', 'There is'], correct: 'Is there' },
        ]
    },

    {
        id: 15,
        title: "Possessive Pronouns II (mine, yours, his, hers, ours, theirs)",

        theory: [

            {
                type: "goal",
                goal: "К концу урока ты сможешь использовать самостоятельные притяжательные местоимения:",
                items: [
                    "This book is mine.",
                    "That phone is yours.",
                    "The house is ours.",
                    "The decision is theirs."
                ]
            },

            {
                type: "text",
                content: "В прошлом уроке мы изучили my, your, his, her, its, our и their."
            },

            {
                type: "text",
                content: "Они всегда стоят перед существительным."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "my book",
                            "your phone",
                            "his car",
                            "our house"
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Но в английском есть ещё одна группа притяжательных местоимений."
            },

            {
                type: "text",
                content: "Они заменяют всё словосочетание целиком."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Основные формы:"
                    },

                    {
                        type: "table",
                        headers: [
                            "Before noun",
                            "Without noun"
                        ],

                        rows: [
                            ["my", "mine"],
                            ["your", "yours"],
                            ["his", "his"],
                            ["her", "hers"],
                            ["our", "ours"],
                            ["their", "theirs"]
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Обрати внимание: mine, yours, hers, ours и theirs используются без существительного."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "This is my book.",
                            "This book is mine."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Оба предложения означают одно и то же."
            },

            {
                type: "text",
                content: "Разница только в построении предложения."
            },

            {
                type: "rule",
                content: [
                    {
                        type: "block",
                        content: "This is my book."
                    },

                    {
                        type: "block",
                        content: "This book is mine."
                    }
                ]
            },

            {
                type: "text",
                content: "Во втором предложении слово book уже названо, поэтому его не нужно повторять."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "That phone is yours.",
                            "This bag is hers.",
                            "The car is ours.",
                            "The tickets are theirs."
                        ]
                    }
                ]
            },

            {
                type: "rule",
                content: [
                    {
                        type: "text",
                        content: "Часто такие местоимения используются для сравнения владельцев."
                    }
                ]
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "My room is bigger than yours.",
                            "Our house is newer than theirs.",
                            "His score is higher than hers."
                        ]
                    }
                ]
            },

            {
                type: "text",
                content: "Это помогает избежать повторения слов."
            },

            {
                type: "example",
                content: [
                    {
                        type: "list",
                        items: [
                            "This is my pen and that is yours.",
                            "These are our books and those are theirs."
                        ]
                    }
                ]
            },

            {
                type: "interesting",
                content: [
                    {
                        type: "text",
                        content: "Интересно:"
                    },

                    {
                        type: "text",
                        content: "У слова his форма не меняется."
                    },

                    {
                        type: "list",
                        items: [
                            "his car",
                            "The car is his."
                        ]
                    }
                ]
            },

            {
                type: "interesting",
                content: [
                    {
                        type: "text",
                        content: "Также существует форма its."
                    },

                    {
                        type: "text",
                        content: "Но самостоятельное местоимение its почти не используется в современном английском."
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Очень частая ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ This book is my"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "После my обязательно нужно существительное."
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ This book is mine"
                    }
                ]
            },

            {
                type: "mistake",
                content: [
                    {
                        type: "text",
                        content: "Еще ошибка:"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "❌ This is mine book"
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "text",
                        content: "Mine не используется перед существительным."
                    },

                    {
                        type: "divider"
                    },

                    {
                        type: "block",
                        content: "✅ This is my book"
                    }
                ]
            },

            {
                type: "tip",
                content: [
                    {
                        type: "text",
                        content: "Простое правило:"
                    },

                    {
                        type: "list",
                        items: [
                            "my book → mine",
                            "your phone → yours",
                            "her bag → hers",
                            "our house → ours",
                            "their car → theirs"
                        ]
                    }
                ]
            },

            {
                type: "check",
                id: 1,
                exp: "Выбери правильный вариант:",
                question: "This book is ___",
                items: [
                    "mine",
                    "my",
                    "me"
                ]
            },

            {
                type: "check",
                id: 2,
                exp: "Выбери правильный вариант:",
                question: "That phone is ___",
                items: [
                    "yours",
                    "your",
                    "you"
                ]
            },

            {
                type: "check",
                id: 3,
                exp: "Выбери правильный вариант:",
                question: "The house is ___",
                items: [
                    "ours",
                    "our",
                    "us"
                ]
            },

            {
                type: "check",
                id: 4,
                exp: "Выбери правильный вариант:",
                question: "Those tickets are ___",
                items: [
                    "theirs",
                    "their",
                    "them"
                ]
            },

            {
                type: "remember",
                content: [
                    {
                        type: "table",
                        headers: [
                            "Before noun",
                            "Without noun"
                        ],

                        rows: [
                            ["my", "mine"],
                            ["your", "yours"],
                            ["his", "his"],
                            ["her", "hers"],
                            ["our", "ours"],
                            ["their", "theirs"]
                        ]
                    },

                    {
                        type: "text",
                        content: "Mine, yours, hers, ours и theirs используются без существительного."
                    }
                ]
            },

            {
                type: "end",
                content: [
                    {
                        type: "text",
                        content: "Отлично!"
                    },

                    {
                        type: "text",
                        content: "Теперь ты умеешь использовать самостоятельные притяжательные местоимения и понимаешь разницу между my и mine, your и yours, our и ours."
                    }
                ]
            }
        ],

        quiz: [
            { questionTitle: 'Выбери правильный вариант', question: 'This pen is ___.', options: ['my', 'mine', 'me'], correct: 'mine' },
            { questionTitle: 'Выбери правильный вариант', question: 'Is this bag ___?', options: ['your', 'yours', 'you'], correct: 'yours' },
            { questionTitle: 'Выбери правильный вариант', question: 'The red car is ___. (принадлежит ему)', options: ['his', 'him', "he's"], correct: 'his' },
            { questionTitle: 'Выбери правильный вариант', question: 'These books are ___. (принадлежат ей)', options: ['her', 'hers', "she's"], correct: 'hers' },
            { questionTitle: 'Выбери правильный вариант', question: 'The house on the corner is ___. (наш)', options: ['our', 'ours', 'us'], correct: 'ours' },
            { questionTitle: 'Выбери правильный вариант', question: 'Those tickets are ___. (их)', options: ['their', 'theirs', 'them'], correct: 'theirs' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['This book is my.', 'This book is mine.', 'This is mine book.'], correct: 'This book is mine.' },
            { questionTitle: 'Выбери правильный вариант', question: 'My score is higher than ___. (его счёт)', options: ['he', 'his', 'him'], correct: 'his' },
            { questionTitle: 'Выбери правильное предложение', question: 'Какое предложение верное?', options: ['That phone is your.', 'That phone is yours.', 'That is yours phone.'], correct: 'That phone is yours.' },
            { questionTitle: 'Выбери правильный вариант', question: 'Our team is better than ___. (их команда)', options: ['they', 'their', 'theirs'], correct: 'theirs' },
            { questionTitle: 'Выбери правильный вариант', question: "This is not my pen, it's ___. (принадлежит ей)", options: ['her', 'hers', 'she'], correct: 'hers' },
            { questionTitle: 'Выбери правильную пару', question: 'That is ___ car. The car is ___.', options: ['his / his', 'him / his', 'his / him'], correct: 'his / his' },
        ]
    },
]