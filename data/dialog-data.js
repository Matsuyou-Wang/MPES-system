/**
 * 对话时间戳和文本数据 - 从Excel自动生成
 * 包含F_end和M_end时间点以及对应的对话文本
 */

const DIALOG_DATA = {
    "Ses01F_script01_1.mp4": [
        {
            "time": 24.6667,
            "type": "F_end",
            "f_text": "When?",
            "m_text": "Four o clock this morning.  I heard a crack and I woke up and looked out.  He was standing right over there when it cracked."
        },
        {
            "time": 35.9971,
            "type": "M_end",
            "f_text": "When?",
            "m_text": "Four o clock this morning.  I heard a crack and I woke up and looked out.  He was standing right over there when it cracked."
        },
        {
            "time": 60.88,
            "type": "F_end",
            "f_text": "What?",
            "m_text": "Being dishonest with him, you know.  This kind of thing always pays off and it's paying off."
        },
        {
            "time": 68.25,
            "type": "M_end",
            "f_text": "What?",
            "m_text": "Being dishonest with him, you know.  This kind of thing always pays off and it's paying off."
        },
        {
            "time": 129.51,
            "type": "F_end",
            "f_text": "To you it is, to me it is, but to your father, you can talk yourself until you are blue in the face.  But there is no grave and there is no body, so where are you?",
            "m_text": "Sit down, Mom.  I want to talk to you."
        },
        {
            "time": 134.59,
            "type": "M_end",
            "f_text": "To you it is, to me it is, but to your father, you can talk yourself until you are blue in the face.  But there is no grave and there is no body, so where are you?",
            "m_text": "Sit down, Mom.  I want to talk to you."
        },
        {
            "time": 152.6736,
            "type": "F_end",
            "f_text": "Why?",
            "m_text": "You know."
        },
        {
            "time": 155.8699,
            "type": "M_end",
            "f_text": "Why?",
            "m_text": "You know."
        },
        {
            "time": 160.67,
            "type": "F_end",
            "f_text": "Well I got an idea, but what's your story?",
            "m_text": "I'm going to ask her to marry me."
        },
        {
            "time": 165.3487,
            "type": "M_end",
            "f_text": "Well I got an idea, but what's your story?",
            "m_text": "I'm going to ask her to marry me."
        },
        {
            "time": 169.559,
            "type": "F_end",
            "f_text": "Well that's only your business, Chris.",
            "m_text": "You know it's not just my business."
        },
        {
            "time": 172.18,
            "type": "M_end",
            "f_text": "Well that's only your business, Chris.",
            "m_text": "You know it's not just my business."
        },
        {
            "time": 223.82,
            "type": "F_end",
            "f_text": "Now you can go on from there if you know where to go, but I'm telling you, I don't know where to go.",
            "m_text": "I don't know why it is, but every time I reach out for something I have to pull back because I am afraid other people will suffer. My whole bloody life, time after time."
        },
        {
            "time": 236.05,
            "type": "M_end",
            "f_text": "Now you can go on from there if you know where to go, but I'm telling you, I don't know where to go.",
            "m_text": "I don't know why it is, but every time I reach out for something I have to pull back because I am afraid other people will suffer. My whole bloody life, time after time."
        },
        {
            "time": 245.1904,
            "type": "F_end",
            "f_text": "I just don't see why.  Have you asked Annie yet?",
            "m_text": "I wanted to get this settled first."
        },
        {
            "time": 247.57,
            "type": "M_end",
            "f_text": "I just don't see why.  Have you asked Annie yet?",
            "m_text": "I wanted to get this settled first."
        },
        {
            "time": 318.2648,
            "type": "F_end",
            "f_text": "...and then what's that going to do to your father?  Do you know?  I don't.",
            "m_text": "All right, then, Mom. [BREATHING]"
        },
        {
            "time": 321.98,
            "type": "M_end",
            "f_text": "...and then what's that going to do to your father?  Do you know?  I don't.",
            "m_text": "All right, then, Mom. [BREATHING]"
        }
    ],
    "Ses01F_script01_2.mp4": [
        {
            "time": 78.26,
            "type": "F_end",
            "f_text": "Because she knows what I know, that's why.  She's faithful as a rock.  In my darkest moments, I think of her waiting and I know that I'm right.",
            "m_text": "Hey look, it's a nice day, huh?  Why are we arguing?"
        },
        {
            "time": 82.65,
            "type": "M_end",
            "f_text": "Because she knows what I know, that's why.  She's faithful as a rock.  In my darkest moments, I think of her waiting and I know that I'm right.",
            "m_text": "Hey look, it's a nice day, huh?  Why are we arguing?"
        },
        {
            "time": 105.76,
            "type": "F_end",
            "f_text": "I won't stand for any nonsense.",
            "m_text": "Kate."
        },
        {
            "time": 108.1825,
            "type": "M_end",
            "f_text": "I won't stand for any nonsense.",
            "m_text": "Kate."
        },
        {
            "time": 140.69,
            "type": "F_end",
            "f_text": "I can't help it.",
            "m_text": "What have I got to hide?  What the hell is the matter with you, Kate?"
        },
        {
            "time": 147.51,
            "type": "M_end",
            "f_text": "I can't help it.",
            "m_text": "What have I got to hide?  What the hell is the matter with you, Kate?"
        }
    ],
    "Ses01F_script01_3.mp4": [
        {
            "time": 36.1344,
            "type": "F_end",
            "f_text": "I'm not sorry, no. But I'm...I can't stay.",
            "m_text": "Why not?"
        },
        {
            "time": 38.5386,
            "type": "M_end",
            "f_text": "I'm not sorry, no. But I'm...I can't stay.",
            "m_text": "Why not?"
        },
        {
            "time": 53.9831,
            "type": "F_end",
            "f_text": "Sort of embarrassed ever since I got here.",
            "m_text": "Well I was kind of planning of sneaking up on you over the course of a week or so.  They just take it for granted that we're all set."
        },
        {
            "time": 63.9,
            "type": "M_end",
            "f_text": "Sort of embarrassed ever since I got here.",
            "m_text": "Well I was kind of planning of sneaking up on you over the course of a week or so.  They just take it for granted that we're all set."
        },
        {
            "time": 65.8944,
            "type": "F_end",
            "f_text": "I knew they would.",
            "m_text": "You did?"
        },
        {
            "time": 69.8648,
            "type": "M_end",
            "f_text": "I knew they would.",
            "m_text": "You did?"
        },
        {
            "time": 75.91,
            "type": "F_end",
            "f_text": "Well sure, from your mother's point of view.  Why else would I come?",
            "m_text": "So would you want to?  I mean, I guess you have to know that's kind of why I asked you to come?"
        },
        {
            "time": 87.25,
            "type": "M_end",
            "f_text": "Well sure, from your mother's point of view.  Why else would I come?",
            "m_text": "So would you want to?  I mean, I guess you have to know that's kind of why I asked you to come?"
        },
        {
            "time": 142.2065,
            "type": "F_end",
            "f_text": "Chris, I've been ready a long, long, time.",
            "m_text": "And he's gone forever?  Are you sure?"
        },
        {
            "time": 147.379,
            "type": "M_end",
            "f_text": "Chris, I've been ready a long, long, time.",
            "m_text": "And he's gone forever?  Are you sure?"
        },
        {
            "time": 150.5845,
            "type": "F_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 153.5714,
            "type": "M_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 169.66,
            "type": "F_end",
            "f_text": "I was waiting for you, Chris.  You sure can be ambiguous, you know.  And when you did finally write me,",
            "m_text": "Give me a..."
        },
        {
            "time": 173.6,
            "type": "M_end",
            "f_text": "I was waiting for you, Chris.  You sure can be ambiguous, you know.  And when you did finally write me,",
            "m_text": "Give me a..."
        },
        {
            "time": 198.895,
            "type": "F_end",
            "f_text": "Not like that you're not.",
            "m_text": "I kissed you."
        },
        {
            "time": 201.4,
            "type": "M_end",
            "f_text": "Not like that you're not.",
            "m_text": "I kissed you."
        },
        {
            "time": 215.67,
            "type": "F_end",
            "f_text": "Chris, what is it?",
            "m_text": "Hey, let's drive some place.  Huh?  Let's get out of here."
        },
        {
            "time": 220.04,
            "type": "M_end",
            "f_text": "Chris, what is it?",
            "m_text": "Hey, let's drive some place.  Huh?  Let's get out of here."
        },
        {
            "time": 243.65,
            "type": "F_end",
            "f_text": "You've got to tell me.",
            "m_text": "I don't even know how to start."
        },
        {
            "time": 247.52,
            "type": "M_end",
            "f_text": "You've got to tell me.",
            "m_text": "I don't even know how to start."
        },
        {
            "time": 250.62,
            "type": "F_end",
            "f_text": "It wouldn't work like this.",
            "m_text": "It's just all mixed up with so many other things, you know?  You know overseas I was in command of a company?"
        },
        {
            "time": 259.73,
            "type": "M_end",
            "f_text": "It wouldn't work like this.",
            "m_text": "It's just all mixed up with so many other things, you know?  You know overseas I was in command of a company?"
        },
        {
            "time": 261.66,
            "type": "F_end",
            "f_text": "Yeah, sure.",
            "m_text": "Well I lost them."
        },
        {
            "time": 264.9617,
            "type": "M_end",
            "f_text": "Yeah, sure.",
            "m_text": "Well I lost them."
        },
        {
            "time": 268.5425,
            "type": "F_end",
            "f_text": "How many?",
            "m_text": "Pretty much all."
        },
        {
            "time": 270.7875,
            "type": "M_end",
            "f_text": "How many?",
            "m_text": "Pretty much all."
        },
        {
            "time": 345.74,
            "type": "F_end",
            "f_text": "Mmhmm.",
            "m_text": "To bring that on to the earth again, you know, is like some kind of monument and I thought I would just make a difference to them."
        },
        {
            "time": 359.22,
            "type": "M_end",
            "f_text": "Mmhmm.",
            "m_text": "To bring that on to the earth again, you know, is like some kind of monument and I thought I would just make a difference to them."
        },
        {
            "time": 450.47,
            "type": "F_end",
            "f_text": "Even me.  And your money?  Chris, there's nothing wrong in your money.  Your father put hundreds of planes into the air, you should be proud of that.  A man should be paid for that.",
            "m_text": "Annie, Annie.  I am going to make a fortune for you."
        },
        {
            "time": 460.28,
            "type": "M_end",
            "f_text": "Even me.  And your money?  Chris, there's nothing wrong in your money.  Your father put hundreds of planes into the air, you should be proud of that.  A man should be paid for that.",
            "m_text": "Annie, Annie.  I am going to make a fortune for you."
        }
    ],
    "Ses01F_script02_1.mp4": [
        {
            "time": 103.5025,
            "type": "F_end",
            "f_text": "[LAUGHTER]",
            "m_text": "I wonder if they can hear me talk or like feel the vibrations in the sand when we move around."
        },
        {
            "time": 111.23,
            "type": "M_end",
            "f_text": "[LAUGHTER]",
            "m_text": "I wonder if they can hear me talk or like feel the vibrations in the sand when we move around."
        },
        {
            "time": 323.82,
            "type": "F_end",
            "f_text": "That's the wind.",
            "m_text": "So what do you think?"
        },
        {
            "time": 327.0891,
            "type": "M_end",
            "f_text": "That's the wind.",
            "m_text": "So what do you think?"
        }
    ],
    "Ses01F_script02_2.mp4": [
        {
            "time": 49.0894,
            "type": "F_end",
            "f_text": "I'm sorry, it's just fish to me.",
            "m_text": "Carla, can I ask you something?  Now, don't take this the wrong way, but are you on your period?"
        },
        {
            "time": 56.09,
            "type": "M_end",
            "f_text": "I'm sorry, it's just fish to me.",
            "m_text": "Carla, can I ask you something?  Now, don't take this the wrong way, but are you on your period?"
        },
        {
            "time": 91.3205,
            "type": "F_end",
            "f_text": "Twice is every time we have tried; that's ever.",
            "m_text": "They'll show up this time."
        },
        {
            "time": 94.8877,
            "type": "M_end",
            "f_text": "Twice is every time we have tried; that's ever.",
            "m_text": "They'll show up this time."
        },
        {
            "time": 209.26,
            "type": "F_end",
            "f_text": "Drinking champagne from the bottle,",
            "m_text": "It's when we were driving past that Knickerbocker Liquor Locker, you said, let's get some champagne.  I said no, time's a wasting or something like that."
        },
        {
            "time": 221.895,
            "type": "M_end",
            "f_text": "Drinking champagne from the bottle,",
            "m_text": "It's when we were driving past that Knickerbocker Liquor Locker, you said, let's get some champagne.  I said no, time's a wasting or something like that."
        },
        {
            "time": 249.0832,
            "type": "F_end",
            "f_text": "No.",
            "m_text": "Do you want to take off your shoes?"
        },
        {
            "time": 250.92,
            "type": "M_end",
            "f_text": "No.",
            "m_text": "Do you want to take off your shoes?"
        },
        {
            "time": 293.38,
            "type": "F_end",
            "f_text": "[BREATHING]",
            "m_text": "No I'm just like you.  I thought it was going to be all roses and peaches and the bills would just pay themselves.  And we'll have three, fat rosy cheeked children.  Huh, baby, the joke's on us.  Because you know what you get?"
        },
        {
            "time": 309.03,
            "type": "M_end",
            "f_text": "[BREATHING]",
            "m_text": "No I'm just like you.  I thought it was going to be all roses and peaches and the bills would just pay themselves.  And we'll have three, fat rosy cheeked children.  Huh, baby, the joke's on us.  Because you know what you get?"
        },
        {
            "time": 370.8,
            "type": "F_end",
            "f_text": "I didn't say that.",
            "m_text": "I just- I know I don't make you happy."
        },
        {
            "time": 377.1344,
            "type": "M_end",
            "f_text": "I didn't say that.",
            "m_text": "I just- I know I don't make you happy."
        },
        {
            "time": 404.96,
            "type": "F_end",
            "f_text": "You're the one who probably wishes he was with somebody else.  Somebody who doesn't take things so seriously, who could enjoy herself.",
            "m_text": "You know, actually now that you mention it, no I don't."
        },
        {
            "time": 412.79,
            "type": "M_end",
            "f_text": "You're the one who probably wishes he was with somebody else.  Somebody who doesn't take things so seriously, who could enjoy herself.",
            "m_text": "You know, actually now that you mention it, no I don't."
        },
        {
            "time": 419.3655,
            "type": "F_end",
            "f_text": "So maybe we are in the wrong spot, but we are with the right person.",
            "m_text": "I don't know, it seemed like such a good spot to me."
        },
        {
            "time": 423.7152,
            "type": "M_end",
            "f_text": "So maybe we are in the wrong spot, but we are with the right person.",
            "m_text": "I don't know, it seemed like such a good spot to me."
        },
        {
            "time": 476.5559,
            "type": "F_end",
            "f_text": "Or not.",
            "m_text": "Or not."
        },
        {
            "time": 479.1565,
            "type": "M_end",
            "f_text": "Or not.",
            "m_text": "Or not."
        }
    ],
    "Ses01F_script03_1.mp4": [
        {
            "time": 32.94,
            "type": "F_end",
            "f_text": "It had to happen sooner or later.",
            "m_text": "Hello?  Hello?  I'm sorry, what's that?"
        },
        {
            "time": 39.31,
            "type": "M_end",
            "f_text": "It had to happen sooner or later.",
            "m_text": "Hello?  Hello?  I'm sorry, what's that?"
        },
        {
            "time": 178.85,
            "type": "F_end",
            "f_text": "Oh Elliott, worms don't pop.",
            "m_text": "Oh See, I don't care what you do, see.  You can paint yourself green and run naked through the Place Vendome and run off with all of the men of the world.  I shan't say a word, just as long as you love me best."
        },
        {
            "time": 195.6,
            "type": "M_end",
            "f_text": "Oh Elliott, worms don't pop.",
            "m_text": "Oh See, I don't care what you do, see.  You can paint yourself green and run naked through the Place Vendome and run off with all of the men of the world.  I shan't say a word, just as long as you love me best."
        },
        {
            "time": 204.01,
            "type": "F_end",
            "f_text": "Aw.  Thank you, darling.  The same applies to you too, except that if you so much as look at another woman I'll kill you.",
            "m_text": "Do you remember that awful scene we had in Venice?"
        },
        {
            "time": 210.7575,
            "type": "M_end",
            "f_text": "Aw.  Thank you, darling.  The same applies to you too, except that if you so much as look at another woman I'll kill you.",
            "m_text": "Do you remember that awful scene we had in Venice?"
        },
        {
            "time": 269.64,
            "type": "F_end",
            "f_text": "[LAUGHTER] And very much sillier.",
            "m_text": "However I believe the real cause of that row was Peter Burden."
        },
        {
            "time": 276.2,
            "type": "M_end",
            "f_text": "[LAUGHTER] And very much sillier.",
            "m_text": "However I believe the real cause of that row was Peter Burden."
        }
    ],
    "Ses01F_script03_2.mp4": [
        {
            "time": 119.6,
            "type": "F_end",
            "f_text": "No.  I am just making myself fascinating for you.",
            "m_text": "That reply has broken my heart."
        },
        {
            "time": 122.89,
            "type": "M_end",
            "f_text": "No.  I am just making myself fascinating for you.",
            "m_text": "That reply has broken my heart."
        },
        {
            "time": 233.08,
            "type": "F_end",
            "f_text": "There are no people upstairs; it's a photographer's studio.",
            "m_text": "Well then you'll wake up the people downstairs."
        },
        {
            "time": 235.7308,
            "type": "M_end",
            "f_text": "There are no people upstairs; it's a photographer's studio.",
            "m_text": "Well then you'll wake up the people downstairs."
        },
        {
            "time": 260.4175,
            "type": "F_end",
            "f_text": "You are far too temperamental, try to control yourself.",
            "m_text": "Turn it off."
        },
        {
            "time": 263.64,
            "type": "M_end",
            "f_text": "You are far too temperamental, try to control yourself.",
            "m_text": "Turn it off."
        },
        {
            "time": 292.72,
            "type": "F_end",
            "f_text": "This is the end.  Do you hear me?  Finally and forever.",
            "m_text": "You're not going like this."
        },
        {
            "time": 295.3,
            "type": "M_end",
            "f_text": "This is the end.  Do you hear me?  Finally and forever.",
            "m_text": "You're not going like this."
        }
    ],
    "Ses02F_script01_1.mp4": [
        {
            "time": 51.2394,
            "type": "F_end",
            "f_text": "He's dreaming about him again.  He's walking around at night.",
            "m_text": "I guess he is."
        },
        {
            "time": 53.07,
            "type": "M_end",
            "f_text": "He's dreaming about him again.  He's walking around at night.",
            "m_text": "I guess he is."
        },
        {
            "time": 58.25,
            "type": "F_end",
            "f_text": "He's getting just like after he died.  What is the meaning of that?",
            "m_text": "I don't know the meaning of it.  But, I know one thing Mom, we made a terrible mistake with Dad."
        },
        {
            "time": 64.59,
            "type": "M_end",
            "f_text": "He's getting just like after he died.  What is the meaning of that?",
            "m_text": "I don't know the meaning of it.  But, I know one thing Mom, we made a terrible mistake with Dad."
        },
        {
            "time": 65.66,
            "type": "F_end",
            "f_text": "What?",
            "m_text": "Being dishonest with him.  I mean, that sort of thing always pays off and now it's paying off."
        },
        {
            "time": 70.79,
            "type": "M_end",
            "f_text": "What?",
            "m_text": "Being dishonest with him.  I mean, that sort of thing always pays off and now it's paying off."
        },
        {
            "time": 71.85,
            "type": "F_end",
            "f_text": "What you mean dishonest?",
            "m_text": "You know that Larry's not coming back and I know it.  Why do we allow him to go on thinking that we believe with him?"
        },
        {
            "time": 78.96,
            "type": "M_end",
            "f_text": "What you mean dishonest?",
            "m_text": "You know that Larry's not coming back and I know it.  Why do we allow him to go on thinking that we believe with him?"
        },
        {
            "time": 138.67,
            "type": "F_end",
            "f_text": "I've got an idea, but what's the story?",
            "m_text": "I'm gonna ask her to marry me."
        },
        {
            "time": 141.78,
            "type": "M_end",
            "f_text": "I've got an idea, but what's the story?",
            "m_text": "I'm gonna ask her to marry me."
        },
        {
            "time": 150.78,
            "type": "F_end",
            "f_text": "What do you want me to do?  You're old enough to know your own mind.",
            "m_text": "So it's all right then?"
        },
        {
            "time": 152.16,
            "type": "M_end",
            "f_text": "What do you want me to do?  You're old enough to know your own mind.",
            "m_text": "So it's all right then?"
        },
        {
            "time": 234.0509,
            "type": "F_end",
            "f_text": "I just don't see why it has to be Annie.",
            "m_text": "Because it is."
        },
        {
            "time": 235.97,
            "type": "M_end",
            "f_text": "I just don't see why it has to be Annie.",
            "m_text": "Because it is."
        },
        {
            "time": 283.66,
            "type": "F_end",
            "f_text": "What the hell is this?",
            "m_text": "I'll get out.  I'll get married and go live some place else.  Maybe New York."
        },
        {
            "time": 289.8709,
            "type": "M_end",
            "f_text": "What the hell is this?",
            "m_text": "I'll get out.  I'll get married and go live some place else.  Maybe New York."
        },
        {
            "time": 319.83,
            "type": "F_end",
            "f_text": "Tell me, you'd leave the business?",
            "m_text": "Yes, on this I would."
        },
        {
            "time": 322.48,
            "type": "M_end",
            "f_text": "Tell me, you'd leave the business?",
            "m_text": "Yes, on this I would."
        },
        {
            "time": 349.87,
            "type": "F_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "No, you don't.  I'm a pretty tough guy."
        },
        {
            "time": 353.43,
            "type": "M_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "No, you don't.  I'm a pretty tough guy."
        }
    ],
    "Ses02F_script01_2.mp4": [
        {
            "time": 28.9,
            "type": "F_end",
            "f_text": "She's not-",
            "m_text": "How do you know he's even thinking of it?"
        },
        {
            "time": 32.51,
            "type": "M_end",
            "f_text": "She's not-",
            "m_text": "How do you know he's even thinking of it?"
        },
        {
            "time": 34.46,
            "type": "F_end",
            "f_text": "It's got that all about it.",
            "m_text": "Well, so what?"
        },
        {
            "time": 37.61,
            "type": "M_end",
            "f_text": "It's got that all about it.",
            "m_text": "Well, so what?"
        },
        {
            "time": 42.84,
            "type": "F_end",
            "f_text": "She's not his girl, Joe.  She knows she's not.",
            "m_text": "You can't read her mind."
        },
        {
            "time": 44.86,
            "type": "M_end",
            "f_text": "She's not his girl, Joe.  She knows she's not.",
            "m_text": "You can't read her mind."
        },
        {
            "time": 63.76,
            "type": "F_end",
            "f_text": "She knows what I know, that's why.  She's faithful as a rock.  In my worst moments I think of her waiting and I know again that I'm right.",
            "m_text": "Look, it's a nice day.  What are we arguing for?"
        },
        {
            "time": 66.82,
            "type": "M_end",
            "f_text": "She knows what I know, that's why.  She's faithful as a rock.  In my worst moments I think of her waiting and I know again that I'm right.",
            "m_text": "Look, it's a nice day.  What are we arguing for?"
        }
    ],
    "Ses02F_script01_3.mp4": [
        {
            "time": 18.46,
            "type": "F_end",
            "f_text": "You know, it's lovely here, the air is sweet.",
            "m_text": "You're not sorry you came?"
        },
        {
            "time": 21.03,
            "type": "M_end",
            "f_text": "You know, it's lovely here, the air is sweet.",
            "m_text": "You're not sorry you came?"
        },
        {
            "time": 26.81,
            "type": "F_end",
            "f_text": "No, not sorry.  Um, but, I'm- I'm not gonna stay.",
            "m_text": "Why?"
        },
        {
            "time": 28.52,
            "type": "M_end",
            "f_text": "No, not sorry.  Um, but, I'm- I'm not gonna stay.",
            "m_text": "Why?"
        },
        {
            "time": 40.86,
            "type": "F_end",
            "f_text": "You saw that.  I mean and then, well, you've been kind of, um--",
            "m_text": "What?"
        },
        {
            "time": 41.89,
            "type": "M_end",
            "f_text": "You saw that.  I mean and then, well, you've been kind of, um--",
            "m_text": "What?"
        },
        {
            "time": 46.29,
            "type": "F_end",
            "f_text": "Well, kind of embarrassed ever since I got here.",
            "m_text": "The trouble is, I planned on sort of sneaking up on you over a period of a week or so.  But, they take it for granted that we're all set."
        },
        {
            "time": 57.11,
            "type": "M_end",
            "f_text": "Well, kind of embarrassed ever since I got here.",
            "m_text": "The trouble is, I planned on sort of sneaking up on you over a period of a week or so.  But, they take it for granted that we're all set."
        },
        {
            "time": 64.12,
            "type": "F_end",
            "f_text": "from her point of view, why else would I come?",
            "m_text": "Oh.  Would you want to?  I guess you know, this is why I asked you to come."
        },
        {
            "time": 71.7,
            "type": "M_end",
            "f_text": "from her point of view, why else would I come?",
            "m_text": "Oh.  Would you want to?  I guess you know, this is why I asked you to come."
        },
        {
            "time": 78.04,
            "type": "F_end",
            "f_text": "I--I guess this is why I came.",
            "m_text": "Anne, I love you.  I love you a great deal.  I love you."
        },
        {
            "time": 87.67,
            "type": "M_end",
            "f_text": "I--I guess this is why I came.",
            "m_text": "Anne, I love you.  I love you a great deal.  I love you."
        },
        {
            "time": 118.542,
            "type": "F_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 120.31,
            "type": "M_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 126.7,
            "type": "F_end",
            "f_text": "Every day since.",
            "m_text": "Anne, why didn't you let me know?"
        },
        {
            "time": 129.05,
            "type": "M_end",
            "f_text": "Every day since.",
            "m_text": "Anne, why didn't you let me know?"
        },
        {
            "time": 138.1,
            "type": "F_end",
            "f_text": "Well, I was waiting for you.  I mean, till then you never wrote and when you did, I mean, what did you say?  You can sure be ambiguous sometimes.",
            "m_text": "Give me a kiss, Anne.  Give me a-"
        },
        {
            "time": 140.69,
            "type": "M_end",
            "f_text": "Well, I was waiting for you.  I mean, till then you never wrote and when you did, I mean, what did you say?  You can sure be ambiguous sometimes.",
            "m_text": "Give me a kiss, Anne.  Give me a-"
        },
        {
            "time": 166.74,
            "type": "F_end",
            "f_text": "Like Larry's brother.  Do it like you, Chris.  What is it?",
            "m_text": "Let's drive someplace.  I want to be alone with you."
        },
        {
            "time": 170.49,
            "type": "M_end",
            "f_text": "Like Larry's brother.  Do it like you, Chris.  What is it?",
            "m_text": "Let's drive someplace.  I want to be alone with you."
        },
        {
            "time": 173.32,
            "type": "F_end",
            "f_text": "No.  What is it, your mother?",
            "m_text": "No.  Nothing like that."
        },
        {
            "time": 176.7,
            "type": "M_end",
            "f_text": "No.  What is it, your mother?",
            "m_text": "No.  Nothing like that."
        },
        {
            "time": 185.92,
            "type": "F_end",
            "f_text": "Then, what's wrong?  I mean, even in your letters there was some--something ashamed.",
            "m_text": "Yeah, I suppose I have been.  But it's going from me."
        },
        {
            "time": 191.15,
            "type": "M_end",
            "f_text": "Then, what's wrong?  I mean, even in your letters there was some--something ashamed.",
            "m_text": "Yeah, I suppose I have been.  But it's going from me."
        },
        {
            "time": 193.3241,
            "type": "F_end",
            "f_text": "You've gotta tell me.",
            "m_text": "I don't know how to start."
        },
        {
            "time": 196.2,
            "type": "M_end",
            "f_text": "You've gotta tell me.",
            "m_text": "I don't know how to start."
        },
        {
            "time": 198.64,
            "type": "F_end",
            "f_text": "It wouldn't work this way.",
            "m_text": "It's all mixed up with so many other things.  You remember overseas, I was in command of a company?"
        },
        {
            "time": 207.24,
            "type": "M_end",
            "f_text": "It wouldn't work this way.",
            "m_text": "It's all mixed up with so many other things.  You remember overseas, I was in command of a company?"
        },
        {
            "time": 208.41,
            "type": "F_end",
            "f_text": "Yeah, sure.",
            "m_text": "Well, I lost them."
        },
        {
            "time": 211.38,
            "type": "M_end",
            "f_text": "Yeah, sure.",
            "m_text": "Well, I lost them."
        },
        {
            "time": 213.3,
            "type": "F_end",
            "f_text": "How many?",
            "m_text": "Just about all."
        },
        {
            "time": 215.64,
            "type": "M_end",
            "f_text": "How many?",
            "m_text": "Just about all."
        },
        {
            "time": 217.6679,
            "type": "F_end",
            "f_text": "Oh, gee.",
            "m_text": "It takes some time for a guy to toss that off.  'Cause they weren't just men."
        },
        {
            "time": 223.28,
            "type": "M_end",
            "f_text": "Oh, gee.",
            "m_text": "It takes some time for a guy to toss that off.  'Cause they weren't just men."
        },
        {
            "time": 333.69,
            "type": "F_end",
            "f_text": "You still feel that way?",
            "m_text": "I want you now Annie."
        },
        {
            "time": 336.6,
            "type": "M_end",
            "f_text": "You still feel that way?",
            "m_text": "I want you now Annie."
        },
        {
            "time": 353.22,
            "type": "F_end",
            "f_text": "I mean, and your money, there's nothing wrong with your money.  I mean, your father put hundreds of planes in the air.  A man should be paid for that.",
            "m_text": "I know Annie.  Annie, I'm gonna make a fortune for you."
        },
        {
            "time": 357.87,
            "type": "M_end",
            "f_text": "I mean, and your money, there's nothing wrong with your money.  I mean, your father put hundreds of planes in the air.  A man should be paid for that.",
            "m_text": "I know Annie.  Annie, I'm gonna make a fortune for you."
        }
    ],
    "Ses02F_script02_1.mp4": [
        {
            "time": 40.57,
            "type": "F_end",
            "f_text": "What flashlight?",
            "m_text": "You know, the flashlight, the silver one.  There's only one isn't there?"
        },
        {
            "time": 44.05,
            "type": "M_end",
            "f_text": "What flashlight?",
            "m_text": "You know, the flashlight, the silver one.  There's only one isn't there?"
        },
        {
            "time": 45.74,
            "type": "F_end",
            "f_text": "That's not your flashlight.",
            "m_text": "Who's is it?"
        },
        {
            "time": 47.2,
            "type": "M_end",
            "f_text": "That's not your flashlight.",
            "m_text": "Who's is it?"
        },
        {
            "time": 73.97,
            "type": "F_end",
            "f_text": "Yeah.",
            "m_text": "You cold?  Do you want my jacket?  Oh, we should've brought the blanket.  Our blanket."
        },
        {
            "time": 79.71,
            "type": "M_end",
            "f_text": "Yeah.",
            "m_text": "You cold?  Do you want my jacket?  Oh, we should've brought the blanket.  Our blanket."
        },
        {
            "time": 99.77,
            "type": "F_end",
            "f_text": "I'm cold.",
            "m_text": "Do you want my jacket?"
        },
        {
            "time": 102.03,
            "type": "M_end",
            "f_text": "I'm cold.",
            "m_text": "Do you want my jacket?"
        },
        {
            "time": 104.84,
            "type": "F_end",
            "f_text": "It's after eleven, let's just go home.",
            "m_text": "Are you kidding?  We'd miss it.  We just got here.  What's the point of coming down here if we just turn around and go home."
        },
        {
            "time": 111.82,
            "type": "M_end",
            "f_text": "It's after eleven, let's just go home.",
            "m_text": "Are you kidding?  We'd miss it.  We just got here.  What's the point of coming down here if we just turn around and go home."
        },
        {
            "time": 117.69,
            "type": "F_end",
            "f_text": "So, let's go.",
            "m_text": "No. No. That's not my point.  The point is there's no point in coming down if we just leave.  Don't you want to see it?"
        },
        {
            "time": 124.59,
            "type": "M_end",
            "f_text": "So, let's go.",
            "m_text": "No. No. That's not my point.  The point is there's no point in coming down if we just leave.  Don't you want to see it?"
        },
        {
            "time": 126.12,
            "type": "F_end",
            "f_text": "Not particularly.",
            "m_text": "Why not?"
        },
        {
            "time": 127.82,
            "type": "M_end",
            "f_text": "Not particularly.",
            "m_text": "Why not?"
        },
        {
            "time": 130.4,
            "type": "F_end",
            "f_text": "I just don't.  It's stupid.",
            "m_text": "Honey, this is a natural phenomenon.  I mean this only happens once a year, you know."
        },
        {
            "time": 136.86,
            "type": "M_end",
            "f_text": "I just don't.  It's stupid.",
            "m_text": "Honey, this is a natural phenomenon.  I mean this only happens once a year, you know."
        },
        {
            "time": 168.6,
            "type": "F_end",
            "f_text": "What are you so excited about?  I mean, it's not a moon landing we're talking about here.  It's fish.  It's a fish nobody even eats.",
            "m_text": "Yeah they do."
        },
        {
            "time": 170.35,
            "type": "M_end",
            "f_text": "What are you so excited about?  I mean, it's not a moon landing we're talking about here.  It's fish.  It's a fish nobody even eats.",
            "m_text": "Yeah they do."
        },
        {
            "time": 187.54,
            "type": "F_end",
            "f_text": "I'm just not.",
            "m_text": "For real?"
        },
        {
            "time": 188.7,
            "type": "M_end",
            "f_text": "I'm just not.",
            "m_text": "For real?"
        },
        {
            "time": 189.7,
            "type": "F_end",
            "f_text": "Yeah.",
            "m_text": "I don't get it.  The first time we came here, you said it was the best night of your life."
        },
        {
            "time": 194.78,
            "type": "M_end",
            "f_text": "Yeah.",
            "m_text": "I don't get it.  The first time we came here, you said it was the best night of your life."
        },
        {
            "time": 285.6,
            "type": "F_end",
            "f_text": "That's the wind.",
            "m_text": "Well, so what do you think?"
        },
        {
            "time": 287.87,
            "type": "M_end",
            "f_text": "That's the wind.",
            "m_text": "Well, so what do you think?"
        }
    ],
    "Ses02F_script02_2.mp4": [
        {
            "time": 7.72,
            "type": "F_end",
            "f_text": "About what?",
            "m_text": "What I was saying."
        },
        {
            "time": 9.07,
            "type": "M_end",
            "f_text": "About what?",
            "m_text": "What I was saying."
        },
        {
            "time": 11.26,
            "type": "F_end",
            "f_text": "It's ridiculous.",
            "m_text": "It certainly is not.  It's slightly exaggerated scientific fact."
        },
        {
            "time": 15.53,
            "type": "M_end",
            "f_text": "It's ridiculous.",
            "m_text": "It certainly is not.  It's slightly exaggerated scientific fact."
        },
        {
            "time": 302.74,
            "type": "F_end",
            "f_text": "I mean, this is just this.  It includes a lot and everything, but it isn't something else.  Do you have any idea what I'm trying to say?",
            "m_text": "I'm doing the best I can."
        },
        {
            "time": 305.06,
            "type": "M_end",
            "f_text": "I mean, this is just this.  It includes a lot and everything, but it isn't something else.  Do you have any idea what I'm trying to say?",
            "m_text": "I'm doing the best I can."
        },
        {
            "time": 324.1,
            "type": "F_end",
            "f_text": "I know that you meant this to be special and nice and the sand and the moon and all, but I just couldn't help thinking about being somewhere else.",
            "m_text": "Maybe if you were with somebody else too."
        },
        {
            "time": 327.93,
            "type": "M_end",
            "f_text": "I know that you meant this to be special and nice and the sand and the moon and all, but I just couldn't help thinking about being somewhere else.",
            "m_text": "Maybe if you were with somebody else too."
        },
        {
            "time": 337.14,
            "type": "F_end",
            "f_text": "Oh, for heaven sake, whatever I'm doing, I'd rather be doing it with you.",
            "m_text": "Yeah?"
        },
        {
            "time": 339.03,
            "type": "M_end",
            "f_text": "Oh, for heaven sake, whatever I'm doing, I'd rather be doing it with you.",
            "m_text": "Yeah?"
        },
        {
            "time": 350.2,
            "type": "F_end",
            "f_text": "You're the one who probably wishes you were with someone else.  Someone who--you'd rather enjoy yourself and didn't take everything so hard.",
            "m_text": "Well, now that you mention it.  No, I don't."
        },
        {
            "time": 355.24,
            "type": "M_end",
            "f_text": "You're the one who probably wishes you were with someone else.  Someone who--you'd rather enjoy yourself and didn't take everything so hard.",
            "m_text": "Well, now that you mention it.  No, I don't."
        },
        {
            "time": 377.73,
            "type": "F_end",
            "f_text": "Yeah, I noticed that.  Looks pretty, doesn't it?  Big ol' white moon.",
            "m_text": "Well, look what we have here."
        },
        {
            "time": 380.21,
            "type": "M_end",
            "f_text": "Yeah, I noticed that.  Looks pretty, doesn't it?  Big ol' white moon.",
            "m_text": "Well, look what we have here."
        },
        {
            "time": 387.6,
            "type": "F_end",
            "f_text": "Well, then we don't need glasses.",
            "m_text": "You still cold?  Do you wanna go home?"
        },
        {
            "time": 392.08,
            "type": "M_end",
            "f_text": "Well, then we don't need glasses.",
            "m_text": "You still cold?  Do you wanna go home?"
        },
        {
            "time": 413.92,
            "type": "F_end",
            "f_text": "Or not.",
            "m_text": "Or not."
        },
        {
            "time": 415.64,
            "type": "M_end",
            "f_text": "Or not.",
            "m_text": "Or not."
        }
    ],
    "Ses02F_script03_1.mp4": [
        {
            "time": 7.63,
            "type": "F_end",
            "f_text": "Do you think it's them?",
            "m_text": "I wonder."
        },
        {
            "time": 8.8,
            "type": "M_end",
            "f_text": "Do you think it's them?",
            "m_text": "I wonder."
        },
        {
            "time": 16.24,
            "type": "F_end",
            "f_text": "What're we gonna do?",
            "m_text": "We're all right, darling, aren't we?  Whatever happens."
        },
        {
            "time": 19.59,
            "type": "M_end",
            "f_text": "What're we gonna do?",
            "m_text": "We're all right, darling, aren't we?  Whatever happens."
        },
        {
            "time": 142.43,
            "type": "F_end",
            "f_text": "Elliott, worms don't pop.",
            "m_text": "I don't care what you do.  See, you could paint yourself green and dance naked in the Place Vendome and rush off madly with all the men in the world and I shan't say a word.  As long as you love me best."
        },
        {
            "time": 153.49,
            "type": "M_end",
            "f_text": "Elliott, worms don't pop.",
            "m_text": "I don't care what you do.  See, you could paint yourself green and dance naked in the Place Vendome and rush off madly with all the men in the world and I shan't say a word.  As long as you love me best."
        }
    ],
    "Ses02F_script03_2.mp4": [
        {
            "time": 63.13,
            "type": "F_end",
            "f_text": "Don't see why you want any.  You've already had two glasses.",
            "m_text": "No particular reason.  Anyhow they were very small ones."
        },
        {
            "time": 66.64,
            "type": "M_end",
            "f_text": "Don't see why you want any.  You've already had two glasses.",
            "m_text": "No particular reason.  Anyhow they were very small ones."
        },
        {
            "time": 127.89,
            "type": "F_end",
            "f_text": "I don't care, do you understand?  I don't care.  I don't care if they bark or roll about like hoops.",
            "m_text": "Did you see much of Peter Burden after our divorce?"
        },
        {
            "time": 132.63,
            "type": "M_end",
            "f_text": "I don't care, do you understand?  I don't care.  I don't care if they bark or roll about like hoops.",
            "m_text": "Did you see much of Peter Burden after our divorce?"
        },
        {
            "time": 192.97,
            "type": "F_end",
            "f_text": "They're away in Tunis.",
            "m_text": "This is no time of the year for Tunis."
        },
        {
            "time": 196.01,
            "type": "M_end",
            "f_text": "They're away in Tunis.",
            "m_text": "This is no time of the year for Tunis."
        }
    ],
    "Ses03F_script01_1.mp4": [
        {
            "time": 247.3694,
            "type": "F_end",
            "f_text": "There's nothing wrong with it.",
            "m_text": "I didn't ask Annie yet."
        },
        {
            "time": 255.3614,
            "type": "M_end",
            "f_text": "There's nothing wrong with it.",
            "m_text": "I didn't ask Annie yet."
        },
        {
            "time": 298.1406,
            "type": "F_end",
            "f_text": "That's a good answer, but it doesn't answer anything.",
            "m_text": "I just-"
        },
        {
            "time": 301.0418,
            "type": "M_end",
            "f_text": "That's a good answer, but it doesn't answer anything.",
            "m_text": "I just-"
        },
        {
            "time": 418.8146,
            "type": "F_end",
            "f_text": "All right, but you can't do that. You can't talk like that.",
            "m_text": "Okay. Just-"
        },
        {
            "time": 422.099,
            "type": "M_end",
            "f_text": "All right, but you can't do that. You can't talk like that.",
            "m_text": "Okay. Just-"
        }
    ],
    "Ses03F_script01_2.mp4": [
        {
            "time": 62.1235,
            "type": "F_end",
            "f_text": "She's waited.",
            "m_text": "How do you know why she's waited?"
        },
        {
            "time": 65.1005,
            "type": "M_end",
            "f_text": "She's waited.",
            "m_text": "How do you know why she's waited?"
        },
        {
            "time": 82.4175,
            "type": "F_end",
            "f_text": "I think again, that I'm-I'm right.",
            "m_text": "Look, it's a nice day. What are we arguing for?"
        },
        {
            "time": 87.62,
            "type": "M_end",
            "f_text": "I think again, that I'm-I'm right.",
            "m_text": "Look, it's a nice day. What are we arguing for?"
        }
    ],
    "Ses03F_script01_3.mp4": [
        {
            "time": 55.8252,
            "type": "F_end",
            "f_text": "Well, you've been embarrassed ever since I came.",
            "m_text": "Yes, I guess I have been. But it's going from me now."
        },
        {
            "time": 63.6197,
            "type": "M_end",
            "f_text": "Well, you've been embarrassed ever since I came.",
            "m_text": "Yes, I guess I have been. But it's going from me now."
        },
        {
            "time": 81.1677,
            "type": "F_end",
            "f_text": "Yeah.",
            "m_text": "How did you know?"
        },
        {
            "time": 87.0452,
            "type": "M_end",
            "f_text": "Yeah.",
            "m_text": "How did you know?"
        },
        {
            "time": 219.6564,
            "type": "F_end",
            "f_text": "What is it?",
            "m_text": "Let's drive somewhere. I want to be alone with you."
        },
        {
            "time": 224.0125,
            "type": "M_end",
            "f_text": "What is it?",
            "m_text": "Let's drive somewhere. I want to be alone with you."
        },
        {
            "time": 251.8454,
            "type": "F_end",
            "f_text": "But, Chris, it wouldn't work like this.",
            "m_text": "You know when I went overseas. I said I was in command of a company."
        },
        {
            "time": 259.2186,
            "type": "M_end",
            "f_text": "But, Chris, it wouldn't work like this.",
            "m_text": "You know when I went overseas. I said I was in command of a company."
        }
    ],
    "Ses03F_script02_1.mp4": [
        {
            "time": 262.5768,
            "type": "F_end",
            "f_text": "Yes, and if you also remember, I got sand in my panties. We got into an argument about nothing. You got a sore throat and we never saw the grunions.",
            "m_text": "We weren't in a good spot."
        },
        {
            "time": 266.4875,
            "type": "M_end",
            "f_text": "Yes, and if you also remember, I got sand in my panties. We got into an argument about nothing. You got a sore throat and we never saw the grunions.",
            "m_text": "We weren't in a good spot."
        }
    ],
    "Ses03F_script02_2.mp4": [
        {
            "time": 80.7886,
            "type": "F_end",
            "f_text": "It's not like that.",
            "m_text": "We're not seeing the grunions?"
        },
        {
            "time": 86.2908,
            "type": "M_end",
            "f_text": "It's not like that.",
            "m_text": "We're not seeing the grunions?"
        },
        {
            "time": 128.2485,
            "type": "F_end",
            "f_text": "Look, I did. I always do. But it's like every time I try nothing ever happens.",
            "m_text": "It's just fish. Nothing to get traumatized over."
        },
        {
            "time": 135.9565,
            "type": "M_end",
            "f_text": "Look, I did. I always do. But it's like every time I try nothing ever happens.",
            "m_text": "It's just fish. Nothing to get traumatized over."
        },
        {
            "time": 202.0805,
            "type": "F_end",
            "f_text": "I told myself finally, this is how happy I'm supposed to be.",
            "m_text": "Wait a minute. I got it."
        },
        {
            "time": 205.983,
            "type": "M_end",
            "f_text": "I told myself finally, this is how happy I'm supposed to be.",
            "m_text": "Wait a minute. I got it."
        },
        {
            "time": 401.9,
            "type": "F_end",
            "f_text": "God, big old white moon.",
            "m_text": "Look what we got here."
        },
        {
            "time": 406.6577,
            "type": "M_end",
            "f_text": "God, big old white moon.",
            "m_text": "Look what we got here."
        },
        {
            "time": 414.4869,
            "type": "F_end",
            "f_text": "At least we won't need glasses.",
            "m_text": "Are you still cold? Do you want to go home?"
        },
        {
            "time": 421.1041,
            "type": "M_end",
            "f_text": "At least we won't need glasses.",
            "m_text": "Are you still cold? Do you want to go home?"
        },
        {
            "time": 445.0523,
            "type": "F_end",
            "f_text": "Or not.",
            "m_text": "Or not."
        },
        {
            "time": 447.1014,
            "type": "M_end",
            "f_text": "Or not.",
            "m_text": "Or not."
        }
    ],
    "Ses03F_script03_1.mp4": [
        {
            "time": 16.93,
            "type": "F_end",
            "f_text": "What are we to do?",
            "m_text": "We're all right, aren't we darling? Whatever happens."
        },
        {
            "time": 21.42,
            "type": "M_end",
            "f_text": "What are we to do?",
            "m_text": "We're all right, aren't we darling? Whatever happens."
        },
        {
            "time": 67.87,
            "type": "F_end",
            "f_text": "Who's they?",
            "m_text": "All the futile moralists who try to make life unbearable. Laugh at them. Be flippant. Laugh at all the sacred shibboleths. Flippancy brings out the acid in their damn sweetness and light."
        },
        {
            "time": 81.07,
            "type": "M_end",
            "f_text": "Who's they?",
            "m_text": "All the futile moralists who try to make life unbearable. Laugh at them. Be flippant. Laugh at all the sacred shibboleths. Flippancy brings out the acid in their damn sweetness and light."
        },
        {
            "time": 167.93,
            "type": "F_end",
            "f_text": "Thank you, dear. The same applies to you. Except that if I ever so much as catch you looking at another woman I'll kill you.",
            "m_text": "Remember that awful scene we had in Venice?"
        },
        {
            "time": 174.37,
            "type": "M_end",
            "f_text": "Thank you, dear. The same applies to you. Except that if I ever so much as catch you looking at another woman I'll kill you.",
            "m_text": "Remember that awful scene we had in Venice?"
        },
        {
            "time": 230.82,
            "type": "F_end",
            "f_text": "Yeah, and very much sillier.",
            "m_text": "Oh, the real cause of that row was Peter Burden."
        },
        {
            "time": 238.26,
            "type": "M_end",
            "f_text": "Yeah, and very much sillier.",
            "m_text": "Oh, the real cause of that row was Peter Burden."
        }
    ],
    "Ses03F_script03_2.mp4": [
        {
            "time": 40.52,
            "type": "F_end",
            "f_text": "No, I didn't. You made that up all in your jealous imagination.",
            "m_text": "You must admit that he was in love with you."
        },
        {
            "time": 45.52,
            "type": "M_end",
            "f_text": "No, I didn't. You made that up all in your jealous imagination.",
            "m_text": "You must admit that he was in love with you."
        },
        {
            "time": 78.3725,
            "type": "F_end",
            "f_text": "I definitely, most definitely am.",
            "m_text": "So am I. Bored stiff. Want some brandy?"
        },
        {
            "time": 85.21,
            "type": "M_end",
            "f_text": "I definitely, most definitely am.",
            "m_text": "So am I. Bored stiff. Want some brandy?"
        },
        {
            "time": 113.62,
            "type": "F_end",
            "f_text": "What?",
            "m_text": "Nothing."
        },
        {
            "time": 115.085,
            "type": "M_end",
            "f_text": "What?",
            "m_text": "Nothing."
        },
        {
            "time": 132.95,
            "type": "F_end",
            "f_text": "It's a woman's job to allure the man. Watch me, won't you, a minute?",
            "m_text": "As a matter of fact, that's perfectly true."
        },
        {
            "time": 136.365,
            "type": "M_end",
            "f_text": "It's a woman's job to allure the man. Watch me, won't you, a minute?",
            "m_text": "As a matter of fact, that's perfectly true."
        },
        {
            "time": 142.25,
            "type": "F_end",
            "f_text": "No, it's not. I don't care.",
            "m_text": "It's a pity you didn't have more brandy. It might have made you a little less disagreeable."
        },
        {
            "time": 150.93,
            "type": "M_end",
            "f_text": "No, it's not. I don't care.",
            "m_text": "It's a pity you didn't have more brandy. It might have made you a little less disagreeable."
        },
        {
            "time": 170.02,
            "type": "F_end",
            "f_text": "I don't care. I don't care, do you understand? I don't care if they bark, if they roll over on the floor like hoops.",
            "m_text": "Uhh,"
        },
        {
            "time": 173.07,
            "type": "M_end",
            "f_text": "I don't care. I don't care, do you understand? I don't care if they bark, if they roll over on the floor like hoops.",
            "m_text": "Uhh,"
        },
        {
            "time": 237.95,
            "type": "F_end",
            "f_text": "Why?",
            "m_text": "It's very late and it will annoy the people upstairs."
        },
        {
            "time": 241.35,
            "type": "M_end",
            "f_text": "Why?",
            "m_text": "It's very late and it will annoy the people upstairs."
        },
        {
            "time": 256.8,
            "type": "F_end",
            "f_text": "Turn it on.",
            "m_text": "No."
        },
        {
            "time": 261.875,
            "type": "M_end",
            "f_text": "Turn it on.",
            "m_text": "No."
        },
        {
            "time": 268.54,
            "type": "F_end",
            "f_text": "You've always had far too temperamental for yourself. You should try to control it.",
            "m_text": "Turn it off."
        },
        {
            "time": 272.7375,
            "type": "M_end",
            "f_text": "You've always had far too temperamental for yourself. You should try to control it.",
            "m_text": "Turn it off."
        }
    ],
    "Ses04F_script01_1.mp4": [
        {
            "time": 46.26,
            "type": "F_end",
            "f_text": "He cried hard?",
            "m_text": "I could hear him right through the floor of my room."
        },
        {
            "time": 49.9924,
            "type": "M_end",
            "f_text": "He cried hard?",
            "m_text": "I could hear him right through the floor of my room."
        }
    ],
    "Ses04F_script01_3.mp4": [
        {
            "time": 188.12,
            "type": "F_end",
            "f_text": "It wouldn't work this way.",
            "m_text": "There's so many things mixed up."
        },
        {
            "time": 193.6989,
            "type": "M_end",
            "f_text": "It wouldn't work this way.",
            "m_text": "There's so many things mixed up."
        }
    ],
    "Ses04F_script02_1.mp4": [
        {
            "time": 39.636,
            "type": "F_end",
            "f_text": "What flashlight?",
            "m_text": "The flashlight, the silver one.  There's only one isn't there?"
        },
        {
            "time": 43.78,
            "type": "M_end",
            "f_text": "What flashlight?",
            "m_text": "The flashlight, the silver one.  There's only one isn't there?"
        },
        {
            "time": 71.97,
            "type": "F_end",
            "f_text": "Yes.",
            "m_text": "Are you cold?  Do you want my jacket?  We should have brought the blanket, our blanket."
        },
        {
            "time": 79.7541,
            "type": "M_end",
            "f_text": "Yes.",
            "m_text": "Are you cold?  Do you want my jacket?  We should have brought the blanket, our blanket."
        }
    ],
    "Ses04F_script02_2.mp4": [
        {
            "time": 25.72,
            "type": "F_end",
            "f_text": "It's PR.  Somebody sold you a bill of goods that this wonderful event is going to take place on the beach.",
            "m_text": "I'm not the only one.  Look at these people."
        },
        {
            "time": 29.02,
            "type": "M_end",
            "f_text": "It's PR.  Somebody sold you a bill of goods that this wonderful event is going to take place on the beach.",
            "m_text": "I'm not the only one.  Look at these people."
        },
        {
            "time": 45.89,
            "type": "F_end",
            "f_text": "Well I'm sorry but it's still just fish to me.",
            "m_text": "Carla, can I ask you something?  Don't take this the wrong way but are you having your period?"
        },
        {
            "time": 52.98,
            "type": "M_end",
            "f_text": "Well I'm sorry but it's still just fish to me.",
            "m_text": "Carla, can I ask you something?  Don't take this the wrong way but are you having your period?"
        },
        {
            "time": 78.83,
            "type": "F_end",
            "f_text": "For heaven's sake, this is not about fish.",
            "m_text": "Why not?"
        },
        {
            "time": 84.43,
            "type": "M_end",
            "f_text": "For heaven's sake, this is not about fish.",
            "m_text": "Why not?"
        },
        {
            "time": 87.95,
            "type": "F_end",
            "f_text": "We totally skipped. Right.",
            "m_text": "There's nothing to it.  We come down here.  The grunions arrive.  They do the little fish business.  We go oh, ah look at the fish.  They go home.  We go home."
        },
        {
            "time": 98.65,
            "type": "M_end",
            "f_text": "We totally skipped. Right.",
            "m_text": "There's nothing to it.  We come down here.  The grunions arrive.  They do the little fish business.  We go oh, ah look at the fish.  They go home.  We go home."
        },
        {
            "time": 401.52,
            "type": "F_end",
            "f_text": "Yeah, I noticed that.  Looks pretty on the water doesn't it, big old white moon.",
            "m_text": "Well look at what we got here."
        },
        {
            "time": 405.77,
            "type": "M_end",
            "f_text": "Yeah, I noticed that.  Looks pretty on the water doesn't it, big old white moon.",
            "m_text": "Well look at what we got here."
        }
    ],
    "Ses04F_script03_2.mp4": [
        {
            "time": 100.66,
            "type": "F_end",
            "f_text": "Oh, be quiet.",
            "m_text": "It's a pity you don't have anymore brandy.  It might have made you a little less disagreeable."
        },
        {
            "time": 107.22,
            "type": "M_end",
            "f_text": "Oh, be quiet.",
            "m_text": "It's a pity you don't have anymore brandy.  It might have made you a little less disagreeable."
        },
        {
            "time": 132.8086,
            "type": "F_end",
            "f_text": "Mind your own business.",
            "m_text": "You must have had a riotous time.  No restraint at all, very enjoyable, you never had much anyhow."
        },
        {
            "time": 142.07,
            "type": "M_end",
            "f_text": "Mind your own business.",
            "m_text": "You must have had a riotous time.  No restraint at all, very enjoyable, you never had much anyhow."
        },
        {
            "time": 168.77,
            "type": "F_end",
            "f_text": "Oh, shut up.",
            "m_text": "They'd get up a splendid little debate about that, you know.  Intemperate tots."
        },
        {
            "time": 174.14,
            "type": "M_end",
            "f_text": "Oh, shut up.",
            "m_text": "They'd get up a splendid little debate about that, you know.  Intemperate tots."
        },
        {
            "time": 231.0,
            "type": "F_end",
            "f_text": "This is the end do you understand?  The end,",
            "m_text": "You're not going like this."
        },
        {
            "time": 234.01,
            "type": "M_end",
            "f_text": "This is the end do you understand?  The end,",
            "m_text": "You're not going like this."
        }
    ],
    "Ses05F_script01_1.mp4": [
        {
            "time": 138.37,
            "type": "F_end",
            "f_text": "To you it is, and to me, but not to your father.  Now look, you can talk yourself  blue in the face, but there's no body, and there's no grave, so where are you?",
            "m_text": "Sit down, mom.  I want to talk to you."
        },
        {
            "time": 142.21,
            "type": "M_end",
            "f_text": "To you it is, and to me, but not to your father.  Now look, you can talk yourself  blue in the face, but there's no body, and there's no grave, so where are you?",
            "m_text": "Sit down, mom.  I want to talk to you."
        },
        {
            "time": 217.98,
            "type": "F_end",
            "f_text": "Now Chris you can go on from there, but I don't know what to do.  I mean do you know what to do, because I don't.",
            "m_text": "I don't know why it is.  But every time I reach out for something I want, I have to pull back because other people will suffer.  My whole bloody life, time after time, after time."
        },
        {
            "time": 228.42,
            "type": "M_end",
            "f_text": "Now Chris you can go on from there, but I don't know what to do.  I mean do you know what to do, because I don't.",
            "m_text": "I don't know why it is.  But every time I reach out for something I want, I have to pull back because other people will suffer.  My whole bloody life, time after time, after time."
        },
        {
            "time": 273.34,
            "type": "F_end",
            "f_text": "well, that's a good reason, but it doesn't answer a thing.",
            "m_text": "I can't help it.  I know her best.  I was brought up next door to here, the easiest, when I think of somebody for my wife, I think of Annie.  Do you want a diagram?"
        },
        {
            "time": 285.95,
            "type": "M_end",
            "f_text": "well, that's a good reason, but it doesn't answer a thing.",
            "m_text": "I can't help it.  I know her best.  I was brought up next door to here, the easiest, when I think of somebody for my wife, I think of Annie.  Do you want a diagram?"
        },
        {
            "time": 368.98,
            "type": "F_end",
            "f_text": "Don't- you, you can't think like that!  Don't think like that!",
            "m_text": "Then help me stay here."
        },
        {
            "time": 372.47,
            "type": "M_end",
            "f_text": "Don't- you, you can't think like that!  Don't think like that!",
            "m_text": "Then help me stay here."
        }
    ],
    "Ses05F_script01_2.mp4": [
        {
            "time": 35.01,
            "type": "F_end",
            "f_text": "It's got that about it.",
            "m_text": "Well, so what."
        },
        {
            "time": 38.31,
            "type": "M_end",
            "f_text": "It's got that about it.",
            "m_text": "Well, so what."
        },
        {
            "time": 91.18,
            "type": "F_end",
            "f_text": "I want you to pretend like he's coming back!",
            "m_text": "But, Kate..."
        },
        {
            "time": 96.29,
            "type": "M_end",
            "f_text": "I want you to pretend like he's coming back!",
            "m_text": "But, Kate..."
        },
        {
            "time": 109.07,
            "type": "F_end",
            "f_text": "Laugh.  Laugh at me, but what happens the night that she goes to sleep in his bed, and his memorial breaks in pieces?",
            "m_text": "Calm yourself."
        },
        {
            "time": 111.5,
            "type": "M_end",
            "f_text": "Laugh.  Laugh at me, but what happens the night that she goes to sleep in his bed, and his memorial breaks in pieces?",
            "m_text": "Calm yourself."
        }
    ],
    "Ses05F_script01_3.mp4": [
        {
            "time": 20.1605,
            "type": "F_end",
            "f_text": "It's so lovely here.  The air is sweet.",
            "m_text": "So you're not sorry you came?"
        },
        {
            "time": 22.3539,
            "type": "M_end",
            "f_text": "It's so lovely here.  The air is sweet.",
            "m_text": "So you're not sorry you came?"
        },
        {
            "time": 26.8707,
            "type": "F_end",
            "f_text": "No.  But I'm not going to stay.",
            "m_text": "Why?"
        },
        {
            "time": 28.6434,
            "type": "M_end",
            "f_text": "No.  But I'm not going to stay.",
            "m_text": "Why?"
        },
        {
            "time": 44.5,
            "type": "F_end",
            "f_text": "Well sort of embarrassed soon as I came.",
            "m_text": "Well the plan was to kind of sneak up on you over a period of a week or so.  But uh- they take it for granted that we're all set."
        },
        {
            "time": 55.0133,
            "type": "M_end",
            "f_text": "Well sort of embarrassed soon as I came.",
            "m_text": "Well the plan was to kind of sneak up on you over a period of a week or so.  But uh- they take it for granted that we're all set."
        },
        {
            "time": 59.41,
            "type": "F_end",
            "f_text": "I figured they would- your mother at least.",
            "m_text": "How did you know?"
        },
        {
            "time": 62.42,
            "type": "M_end",
            "f_text": "I figured they would- your mother at least.",
            "m_text": "How did you know?"
        },
        {
            "time": 66.9114,
            "type": "F_end",
            "f_text": "Well, from her point of view why else would I come?",
            "m_text": "Well, would you want to?  I guess you know this is why I asked you to come."
        },
        {
            "time": 79.4103,
            "type": "M_end",
            "f_text": "Well, from her point of view why else would I come?",
            "m_text": "Well, would you want to?  I guess you know this is why I asked you to come."
        },
        {
            "time": 84.1875,
            "type": "F_end",
            "f_text": "I guess this is why I came.",
            "m_text": "Anne, I love you.  I love you a great deal.  I love you!"
        },
        {
            "time": 94.31,
            "type": "M_end",
            "f_text": "I guess this is why I came.",
            "m_text": "Anne, I love you.  I love you a great deal.  I love you!"
        },
        {
            "time": 132.4406,
            "type": "F_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 135.4151,
            "type": "M_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 137.17,
            "type": "F_end",
            "f_text": "You started to write me.",
            "m_text": "You felt something that far back?"
        },
        {
            "time": 140.9135,
            "type": "M_end",
            "f_text": "You started to write me.",
            "m_text": "You felt something that far back?"
        },
        {
            "time": 141.47,
            "type": "F_end",
            "f_text": "Every day since.",
            "m_text": "Annie, why didn't you say something to me?"
        },
        {
            "time": 144.3186,
            "type": "M_end",
            "f_text": "Every day since.",
            "m_text": "Annie, why didn't you say something to me?"
        },
        {
            "time": 153.5827,
            "type": "F_end",
            "f_text": "Well I was waiting for you!  I mean I didn't-until then you hadn't written and when you write- when you wrote what did you say?  I mean you sure can be ambiguous Chris.",
            "m_text": "Give me a kiss, Ann. Give me a-"
        },
        {
            "time": 157.2081,
            "type": "M_end",
            "f_text": "Well I was waiting for you!  I mean I didn't-until then you hadn't written and when you write- when you wrote what did you say?  I mean you sure can be ambiguous Chris.",
            "m_text": "Give me a kiss, Ann. Give me a-"
        },
        {
            "time": 189.6,
            "type": "F_end",
            "f_text": "Not like that, you're not.",
            "m_text": "I kissed you."
        },
        {
            "time": 191.5201,
            "type": "M_end",
            "f_text": "Not like that, you're not.",
            "m_text": "I kissed you."
        },
        {
            "time": 199.0315,
            "type": "F_end",
            "f_text": "Like Larry's brother.  Do it like you, Chris.  Chris, what's the matter?",
            "m_text": "Let's Let's drive someplace.  I- I want to be alone with you."
        },
        {
            "time": 203.06,
            "type": "M_end",
            "f_text": "Like Larry's brother.  Do it like you, Chris.  Chris, what's the matter?",
            "m_text": "Let's Let's drive someplace.  I- I want to be alone with you."
        },
        {
            "time": 215.3462,
            "type": "F_end",
            "f_text": "What is it?  Even in your letters, there is something ashamed.",
            "m_text": "Yeah, I suppose I have been.  But it's going from me."
        },
        {
            "time": 222.6172,
            "type": "M_end",
            "f_text": "What is it?  Even in your letters, there is something ashamed.",
            "m_text": "Yeah, I suppose I have been.  But it's going from me."
        },
        {
            "time": 231.1802,
            "type": "F_end",
            "f_text": "It wouldn't work like this.",
            "m_text": "It's- It's mixed up with so many other things, I-"
        },
        {
            "time": 236.2579,
            "type": "M_end",
            "f_text": "It wouldn't work like this.",
            "m_text": "It's- It's mixed up with so many other things, I-"
        },
        {
            "time": 243.2685,
            "type": "F_end",
            "f_text": "yeah sure.",
            "m_text": "Yeah.  I lost them."
        },
        {
            "time": 247.1344,
            "type": "M_end",
            "f_text": "yeah sure.",
            "m_text": "Yeah.  I lost them."
        },
        {
            "time": 249.2376,
            "type": "F_end",
            "f_text": "how many?",
            "m_text": "just about all."
        },
        {
            "time": 252.0118,
            "type": "M_end",
            "f_text": "how many?",
            "m_text": "just about all."
        },
        {
            "time": 253.9647,
            "type": "F_end",
            "f_text": "Oh gee.",
            "m_text": "Takes a little time to toss something like that off you know because they weren't just men-"
        },
        {
            "time": 262.738,
            "type": "M_end",
            "f_text": "Oh gee.",
            "m_text": "Takes a little time to toss something like that off you know because they weren't just men-"
        },
        {
            "time": 406.66,
            "type": "F_end",
            "f_text": "Do you still feel like that?",
            "m_text": "I I want you now, Annie."
        },
        {
            "time": 410.7823,
            "type": "M_end",
            "f_text": "Do you still feel like that?",
            "m_text": "I I want you now, Annie."
        }
    ],
    "Ses05F_script02_1.mp4": [
        {
            "time": 79.03,
            "type": "F_end",
            "f_text": "yes.",
            "m_text": "Are you cold?  You want my jacket?  We should have bought a blanket.  Our blanket-.  This is great, isn't it?"
        },
        {
            "time": 88.736,
            "type": "M_end",
            "f_text": "yes.",
            "m_text": "Are you cold?  You want my jacket?  We should have bought a blanket.  Our blanket-.  This is great, isn't it?"
        },
        {
            "time": 139.6329,
            "type": "F_end",
            "f_text": "I just don't.",
            "m_text": "Honey, this is a natural phenomenon. I mean,  It happens like once a year.  It's a great opportunity."
        },
        {
            "time": 147.6153,
            "type": "M_end",
            "f_text": "I just don't.",
            "m_text": "Honey, this is a natural phenomenon. I mean,  It happens like once a year.  It's a great opportunity."
        },
        {
            "time": 209.54,
            "type": "F_end",
            "f_text": "Yes.",
            "m_text": "I don't get it, the first time we came out here, you said it was the best night of your life and last year I remember distinctly you were so excited that you stuff your toe pushing me out of the door and you didn't notice it until you got into the car."
        },
        {
            "time": 221.08,
            "type": "M_end",
            "f_text": "Yes.",
            "m_text": "I don't get it, the first time we came out here, you said it was the best night of your life and last year I remember distinctly you were so excited that you stuff your toe pushing me out of the door and you didn't notice it until you got into the car."
        },
        {
            "time": 310.7189,
            "type": "F_end",
            "f_text": "That's the wind.",
            "m_text": "Well, So what do you think?"
        },
        {
            "time": 315.22,
            "type": "M_end",
            "f_text": "That's the wind.",
            "m_text": "Well, So what do you think?"
        }
    ],
    "Ses05F_script02_2.mp4": [
        {
            "time": 113.8142,
            "type": "F_end",
            "f_text": "I did, I do want to see it.  I always want to see it, Augie.",
            "m_text": "It's just fish, it's nothing to get traumatize over."
        },
        {
            "time": 118.8934,
            "type": "M_end",
            "f_text": "I did, I do want to see it.  I always want to see it, Augie.",
            "m_text": "It's just fish, it's nothing to get traumatize over."
        },
        {
            "time": 332.1197,
            "type": "F_end",
            "f_text": "I mean it is just this , I mean it includes a lot and everything and you know it's the sand and it's the full moon and I just-I am sorry but I couldn't help wishing I was somewhere else.",
            "m_text": "Maybe if you are with somebody else too?"
        },
        {
            "time": 336.5306,
            "type": "M_end",
            "f_text": "I mean it is just this , I mean it includes a lot and everything and you know it's the sand and it's the full moon and I just-I am sorry but I couldn't help wishing I was somewhere else.",
            "m_text": "Maybe if you are with somebody else too?"
        },
        {
            "time": 403.8969,
            "type": "F_end",
            "f_text": "Yes, I did notice that.  It does look really beautiful on the water.  The gold white moon.",
            "m_text": "Well, look what we have got here."
        },
        {
            "time": 407.2719,
            "type": "M_end",
            "f_text": "Yes, I did notice that.  It does look really beautiful on the water.  The gold white moon.",
            "m_text": "Well, look what we have got here."
        },
        {
            "time": 412.986,
            "type": "F_end",
            "f_text": "Well than we don't need glasses.",
            "m_text": "Are you still cold?  You still want to go home?"
        },
        {
            "time": 417.47,
            "type": "M_end",
            "f_text": "Well than we don't need glasses.",
            "m_text": "Are you still cold?  You still want to go home?"
        },
        {
            "time": 424.2471,
            "type": "F_end",
            "f_text": "No, I am beginning to think that maybe this is the spot after all.",
            "m_text": "Shh, If we're very quiet, the fish might come."
        },
        {
            "time": 433.3362,
            "type": "M_end",
            "f_text": "No, I am beginning to think that maybe this is the spot after all.",
            "m_text": "Shh, If we're very quiet, the fish might come."
        },
        {
            "time": 435.9426,
            "type": "F_end",
            "f_text": "Or not.",
            "m_text": "Or not."
        },
        {
            "time": 438.382,
            "type": "M_end",
            "f_text": "Or not.",
            "m_text": "Or not."
        }
    ],
    "Ses01M_script01_1.mp4": [
        {
            "time": 39.31,
            "type": "M_end",
            "f_text": "Did you talk to him?",
            "m_text": "I don't know.  But he went back in the kitchen and he cried."
        },
        {
            "time": 42.1267,
            "type": "F_end",
            "f_text": "Did you talk to him?",
            "m_text": "I don't know.  But he went back in the kitchen and he cried."
        },
        {
            "time": 46.58,
            "type": "M_end",
            "f_text": "Cried hard?",
            "m_text": "No.  I figured I'd just let it wait."
        },
        {
            "time": 50.417,
            "type": "F_end",
            "f_text": "Cried hard?",
            "m_text": "No.  I figured I'd just let it wait."
        },
        {
            "time": 165.33,
            "type": "M_end",
            "f_text": "Why?",
            "m_text": "Yeah, okay all right, all right.  Listen, um, you know why I asked Annie here, right?"
        },
        {
            "time": 168.4175,
            "type": "F_end",
            "f_text": "Why?",
            "m_text": "Yeah, okay all right, all right.  Listen, um, you know why I asked Annie here, right?"
        },
        {
            "time": 179.29,
            "type": "M_end",
            "f_text": "Well, that's only your business, Chris.",
            "m_text": "I'm going to ask her to marry me."
        },
        {
            "time": 183.78,
            "type": "F_end",
            "f_text": "Well, that's only your business, Chris.",
            "m_text": "I'm going to ask her to marry me."
        },
        {
            "time": 245.9,
            "type": "M_end",
            "f_text": "Did you ask Annie yet?",
            "m_text": "To hell with that."
        },
        {
            "time": 251.1095,
            "type": "F_end",
            "f_text": "Did you ask Annie yet?",
            "m_text": "To hell with that."
        },
        {
            "time": 267.62,
            "type": "M_end",
            "f_text": "The trouble is you don't see enough women, you never did.",
            "m_text": "Well, if she does then that's the end of it.  However from her letters I think she's pretty much forgotten him."
        },
        {
            "time": 274.23,
            "type": "F_end",
            "f_text": "The trouble is you don't see enough women, you never did.",
            "m_text": "Well, if she does then that's the end of it.  However from her letters I think she's pretty much forgotten him."
        },
        {
            "time": 277.85,
            "type": "M_end",
            "f_text": "I don't see why it has to be Annie.",
            "m_text": "So what?  I'm just--I'm not fast with women."
        },
        {
            "time": 281.21,
            "type": "F_end",
            "f_text": "I don't see why it has to be Annie.",
            "m_text": "So what?  I'm just--I'm not fast with women."
        },
        {
            "time": 295.59,
            "type": "M_end",
            "f_text": "He thinks he's coming back, Chris.  You marry that girl you're pronouncing him dead.",
            "m_text": "I don't know, it I think of her, I grew up next to her.  She is what I think of when I think of a wife."
        },
        {
            "time": 308.35,
            "type": "F_end",
            "f_text": "He thinks he's coming back, Chris.  You marry that girl you're pronouncing him dead.",
            "m_text": "I don't know, it I think of her, I grew up next to her.  She is what I think of when I think of a wife."
        },
        {
            "time": 383.3415,
            "type": "M_end",
            "f_text": "You mean to tell me you would leave the business for this.",
            "m_text": "If that can't happen here..."
        },
        {
            "time": 389.97,
            "type": "F_end",
            "f_text": "You mean to tell me you would leave the business for this.",
            "m_text": "If that can't happen here..."
        },
        {
            "time": 397.08,
            "type": "M_end",
            "f_text": "All right but you don't think like that because what the hell is this all for.  This is all for you, what are we working for Chris? The whole shooting match is for you.",
            "m_text": "Then help me stay here mom."
        },
        {
            "time": 408.98,
            "type": "F_end",
            "f_text": "All right but you don't think like that because what the hell is this all for.  This is all for you, what are we working for Chris? The whole shooting match is for you.",
            "m_text": "Then help me stay here mom."
        },
        {
            "time": 414.78,
            "type": "M_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "I am thinking like that."
        },
        {
            "time": 418.941,
            "type": "F_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "I am thinking like that."
        }
    ],
    "Ses01M_script01_2.mp4": [
        {
            "time": 32.19,
            "type": "M_end",
            "f_text": "He's not going to marry her.",
            "m_text": "Don't look at me like that.  He didn't tell me anything he told you."
        },
        {
            "time": 35.3425,
            "type": "F_end",
            "f_text": "He's not going to marry her.",
            "m_text": "Don't look at me like that.  He didn't tell me anything he told you."
        },
        {
            "time": 157.89,
            "type": "M_end",
            "f_text": "I can't help it.",
            "m_text": "Look at you. You're shaking."
        },
        {
            "time": 161.86,
            "type": "F_end",
            "f_text": "I can't help it.",
            "m_text": "Look at you. You're shaking."
        }
    ],
    "Ses01M_script01_3.mp4": [
        {
            "time": 53.27,
            "type": "M_end",
            "f_text": "You've been kind of embarrassed ever since I got here.",
            "m_text": "What?"
        },
        {
            "time": 59.22,
            "type": "F_end",
            "f_text": "You've been kind of embarrassed ever since I got here.",
            "m_text": "What?"
        },
        {
            "time": 102.15,
            "type": "M_end",
            "f_text": "Well I guess that's why I came.",
            "m_text": "So then would you want to?  I mean I guess, you kind of have to know, maybe that's why I asked you to come."
        },
        {
            "time": 109.63,
            "type": "F_end",
            "f_text": "Well I guess that's why I came.",
            "m_text": "So then would you want to?  I mean I guess, you kind of have to know, maybe that's why I asked you to come."
        },
        {
            "time": 147.95,
            "type": "M_end",
            "f_text": "I've been ready a long, long time.",
            "m_text": "I'm sorry I'm embarrassing you, aren't I?  See, I didn't want to do it here I didn't on this porch, with this ring--I didn't want to win you away from anything."
        },
        {
            "time": 154.14,
            "type": "F_end",
            "f_text": "I've been ready a long, long time.",
            "m_text": "I'm sorry I'm embarrassing you, aren't I?  See, I didn't want to do it here I didn't on this porch, with this ring--I didn't want to win you away from anything."
        },
        {
            "time": 161.5,
            "type": "M_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "So then he's gone.  You sure?"
        },
        {
            "time": 165.3,
            "type": "F_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "So then he's gone.  You sure?"
        },
        {
            "time": 252.92,
            "type": "M_end",
            "f_text": "You got to tell me.",
            "m_text": "I don't know it's--it's complicated. But it's going from me now."
        },
        {
            "time": 256.4398,
            "type": "F_end",
            "f_text": "You got to tell me.",
            "m_text": "I don't know it's--it's complicated. But it's going from me now."
        },
        {
            "time": 263.97,
            "type": "M_end",
            "f_text": "Wouldn't work like this.",
            "m_text": "It's kind of all mixed up with all these other things."
        },
        {
            "time": 269.08,
            "type": "F_end",
            "f_text": "Wouldn't work like this.",
            "m_text": "It's kind of all mixed up with all these other things."
        },
        {
            "time": 283.91,
            "type": "M_end",
            "f_text": "How many?",
            "m_text": "Well I lost them."
        },
        {
            "time": 288.34,
            "type": "F_end",
            "f_text": "How many?",
            "m_text": "Well I lost them."
        },
        {
            "time": 463.85,
            "type": "M_end",
            "f_text": "'Cause you mustn't feel that way.  Everything you have, you have a right to...",
            "m_text": "I want you to know Annie."
        },
        {
            "time": 472.87,
            "type": "F_end",
            "f_text": "'Cause you mustn't feel that way.  Everything you have, you have a right to...",
            "m_text": "I want you to know Annie."
        }
    ],
    "Ses01M_script02_1.mp4": [
        {
            "time": 128.46,
            "type": "M_end",
            "f_text": "I'm fine.",
            "m_text": "What's wrong?  Are you okay?  Huh?  You cold?"
        },
        {
            "time": 130.3,
            "type": "F_end",
            "f_text": "I'm fine.",
            "m_text": "What's wrong?  Are you okay?  Huh?  You cold?"
        },
        {
            "time": 401.8275,
            "type": "M_end",
            "f_text": "That's the wind.",
            "m_text": "It's crazy.  Look at this, I'm giving myself goose bumps, the hairs are standing up on my arm."
        },
        {
            "time": 405.04,
            "type": "F_end",
            "f_text": "That's the wind.",
            "m_text": "It's crazy.  Look at this, I'm giving myself goose bumps, the hairs are standing up on my arm."
        }
    ],
    "Ses01M_script02_2.mp4": [
        {
            "time": 140.3043,
            "type": "M_end",
            "f_text": "You don't understand anything I'm saying.",
            "m_text": "Okay, I'm trying to work this backwards"
        },
        {
            "time": 145.1545,
            "type": "F_end",
            "f_text": "You don't understand anything I'm saying.",
            "m_text": "Okay, I'm trying to work this backwards"
        },
        {
            "time": 273.1525,
            "type": "M_end",
            "f_text": "No.",
            "m_text": "Do you want to dance?"
        },
        {
            "time": 275.4759,
            "type": "F_end",
            "f_text": "No.",
            "m_text": "Do you want to dance?"
        },
        {
            "time": 381.51,
            "type": "M_end",
            "f_text": "This is just this.  I mean it includes a lot and everything but it's--do you understand what I'm saying?",
            "m_text": "I know me neither."
        },
        {
            "time": 394.05,
            "type": "F_end",
            "f_text": "This is just this.  I mean it includes a lot and everything but it's--do you understand what I'm saying?",
            "m_text": "I know me neither."
        },
        {
            "time": 425.97,
            "type": "M_end",
            "f_text": "Are you kidding me?  For heaven sake Augie anything I'm doing I'd rather be doing it with you.",
            "m_text": "No, I know but--I know I don't make you happy."
        },
        {
            "time": 435.48,
            "type": "F_end",
            "f_text": "Are you kidding me?  For heaven sake Augie anything I'm doing I'd rather be doing it with you.",
            "m_text": "No, I know but--I know I don't make you happy."
        },
        {
            "time": 463.23,
            "type": "M_end",
            "f_text": "So maybe we're in the wrong spot.  But we're with the right person.",
            "m_text": "Actually, you know what?  Now you mentioned that--no I don't."
        },
        {
            "time": 472.4052,
            "type": "F_end",
            "f_text": "So maybe we're in the wrong spot.  But we're with the right person.",
            "m_text": "Actually, you know what?  Now you mentioned that--no I don't."
        },
        {
            "time": 535.2345,
            "type": "M_end",
            "f_text": "Or not.",
            "m_text": "If we are really quiet, the fish might come."
        },
        {
            "time": 539.3749,
            "type": "F_end",
            "f_text": "Or not.",
            "m_text": "If we are really quiet, the fish might come."
        }
    ],
    "Ses01M_script03_1.mp4": [
        {
            "time": 42.96,
            "type": "M_end",
            "f_text": "Oh, oh, that sent shivers on my spine.",
            "m_text": "No, it's a wrong number."
        },
        {
            "time": 49.63,
            "type": "F_end",
            "f_text": "Oh, oh, that sent shivers on my spine.",
            "m_text": "No, it's a wrong number."
        },
        {
            "time": 109.4,
            "type": "M_end",
            "f_text": "How long will it last, this ludicrous, overbearing love of ours?",
            "m_text": "Oh yes.  ."
        },
        {
            "time": 117.7531,
            "type": "F_end",
            "f_text": "How long will it last, this ludicrous, overbearing love of ours?",
            "m_text": "Oh yes.  ."
        },
        {
            "time": 133.26,
            "type": "M_end",
            "f_text": "If one of us dies...",
            "m_text": "Well it depends on how well we've played."
        },
        {
            "time": 137.04,
            "type": "F_end",
            "f_text": "If one of us dies...",
            "m_text": "Well it depends on how well we've played."
        },
        {
            "time": 177.9,
            "type": "M_end",
            "f_text": "Oh, Elliot.  Worms don't pop.",
            "m_text": "Come here darling, kiss me"
        },
        {
            "time": 185.41,
            "type": "F_end",
            "f_text": "Oh, Elliot.  Worms don't pop.",
            "m_text": "Come here darling, kiss me"
        },
        {
            "time": 206.15,
            "type": "M_end",
            "f_text": "The same applies to you too, except you so much as look at another women I'll kill you.",
            "m_text": "You could run off with all the men in a world. I won't say a word.  Just as long as you love me best."
        },
        {
            "time": 215.0,
            "type": "F_end",
            "f_text": "The same applies to you too, except you so much as look at another women I'll kill you.",
            "m_text": "You could run off with all the men in a world. I won't say a word.  Just as long as you love me best."
        },
        {
            "time": 262.15,
            "type": "M_end",
            "f_text": "The manager came in he found us rolling about the floor.  [LAUGHTER]",
            "m_text": "Oh that was a rouser wasn't it?"
        },
        {
            "time": 267.82,
            "type": "F_end",
            "f_text": "The manager came in he found us rolling about the floor.  [LAUGHTER]",
            "m_text": "Oh that was a rouser wasn't it?"
        }
    ],
    "Ses01M_script03_2.mp4": [
        {
            "time": 73.5745,
            "type": "M_end",
            "f_text": "I'm bored with this conversation.",
            "m_text": "That's a nice point of view I must say."
        },
        {
            "time": 77.98,
            "type": "F_end",
            "f_text": "I'm bored with this conversation.",
            "m_text": "That's a nice point of view I must say."
        },
        {
            "time": 111.61,
            "type": "M_end",
            "f_text": "I just, I just think it's becoming a habit with you.",
            "m_text": "You can hardly call three glasses of liquor in a whole evening going on and on and on."
        },
        {
            "time": 118.07,
            "type": "F_end",
            "f_text": "I just, I just think it's becoming a habit with you.",
            "m_text": "You can hardly call three glasses of liquor in a whole evening going on and on and on."
        },
        {
            "time": 271.9275,
            "type": "M_end",
            "f_text": "Turn it on again, please.",
            "m_text": "This is no time a year for Tunis."
        },
        {
            "time": 275.34,
            "type": "F_end",
            "f_text": "Turn it on again, please.",
            "m_text": "This is no time a year for Tunis."
        }
    ],
    "Ses02M_script01_1.mp4": [
        {
            "time": 24.3,
            "type": "M_end",
            "f_text": "What was he doing out here at four in the morning?",
            "m_text": "About four this morning. I heard it cracking and I woke up and looked out. He was standing right here when it cracked."
        },
        {
            "time": 28.33,
            "type": "F_end",
            "f_text": "What was he doing out here at four in the morning?",
            "m_text": "About four this morning. I heard it cracking and I woke up and looked out. He was standing right here when it cracked."
        },
        {
            "time": 54.26,
            "type": "M_end",
            "f_text": "He's getting just like after he died. What is the meaning of that?",
            "m_text": "I guess he is."
        },
        {
            "time": 59.87,
            "type": "F_end",
            "f_text": "He's getting just like after he died. What is the meaning of that?",
            "m_text": "I guess he is."
        },
        {
            "time": 143.1,
            "type": "M_end",
            "f_text": "Well that's only your business, Chris.",
            "m_text": "I'm going to ask her to marry me."
        },
        {
            "time": 146.25,
            "type": "F_end",
            "f_text": "Well that's only your business, Chris.",
            "m_text": "I'm going to ask her to marry me."
        },
        {
            "time": 201.62,
            "type": "M_end",
            "f_text": "Have you asked Annie yet?",
            "m_text": "To hell with that."
        },
        {
            "time": 204.19,
            "type": "F_end",
            "f_text": "Have you asked Annie yet?",
            "m_text": "To hell with that."
        },
        {
            "time": 223.11,
            "type": "M_end",
            "f_text": "Trouble is you don't see enough women, you never did.",
            "m_text": "I don't know, I'll find out. Then we'll trash it out with dad, right? Mom, don't avoid me."
        },
        {
            "time": 227.13,
            "type": "F_end",
            "f_text": "Trouble is you don't see enough women, you never did.",
            "m_text": "I don't know, I'll find out. Then we'll trash it out with dad, right? Mom, don't avoid me."
        },
        {
            "time": 235.76,
            "type": "M_end",
            "f_text": "That's a good answer but it doesn't answer anything. I mean you haven't seen her since you went away to war it's five years.",
            "m_text": "Because it is."
        },
        {
            "time": 242.82,
            "type": "F_end",
            "f_text": "That's a good answer but it doesn't answer anything. I mean you haven't seen her since you went away to war it's five years.",
            "m_text": "Because it is."
        },
        {
            "time": 266.43,
            "type": "M_end",
            "f_text": "Just give it some more thought.",
            "m_text": "All right. All right. Mom."
        },
        {
            "time": 269.27,
            "type": "F_end",
            "f_text": "Just give it some more thought.",
            "m_text": "All right. All right. Mom."
        },
        {
            "time": 320.7,
            "type": "M_end",
            "f_text": "Tell me, you'd leave the business?",
            "m_text": "I want a family; I want kids; I want something I can give myself to. Annie is in the middle of that. Now where do I find it?"
        },
        {
            "time": 323.57,
            "type": "F_end",
            "f_text": "Tell me, you'd leave the business?",
            "m_text": "I want a family; I want kids; I want something I can give myself to. Annie is in the middle of that. Now where do I find it?"
        },
        {
            "time": 326.52,
            "type": "M_end",
            "f_text": "Well, you don't want to think like that.",
            "m_text": "Yes, on this I would."
        },
        {
            "time": 329.41,
            "type": "F_end",
            "f_text": "Well, you don't want to think like that.",
            "m_text": "Yes, on this I would."
        },
        {
            "time": 342.14,
            "type": "M_end",
            "f_text": "Just don't go thinking that way.",
            "m_text": "I know I know mom. All right. Just help me stay here."
        },
        {
            "time": 344.78,
            "type": "F_end",
            "f_text": "Just don't go thinking that way.",
            "m_text": "I know I know mom. All right. Just help me stay here."
        },
        {
            "time": 346.97,
            "type": "M_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "Well, I am thinking that way."
        },
        {
            "time": 350.81,
            "type": "F_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "Well, I am thinking that way."
        }
    ],
    "Ses02M_script02_1.mp4": [
        {
            "time": 311.51,
            "type": "M_end",
            "f_text": "About what?",
            "m_text": "Well, so what do you think?"
        },
        {
            "time": 312.91,
            "type": "F_end",
            "f_text": "About what?",
            "m_text": "Well, so what do you think?"
        },
        {
            "time": 314.57,
            "type": "M_end",
            "f_text": "It's ridiculous.",
            "m_text": "What I was saying."
        },
        {
            "time": 316.83,
            "type": "F_end",
            "f_text": "It's ridiculous.",
            "m_text": "What I was saying."
        }
    ],
    "Ses02M_script02_2.mp4": [
        {
            "time": 100.09,
            "type": "M_end",
            "f_text": "You don't understand anything I'm saying.",
            "m_text": "I thought you wanted to see them."
        },
        {
            "time": 103.27,
            "type": "F_end",
            "f_text": "You don't understand anything I'm saying.",
            "m_text": "I thought you wanted to see them."
        },
        {
            "time": 368.35,
            "type": "M_end",
            "f_text": "Yes, I noticed that. It looks pretty on the water doesn't it? Big old white moon.",
            "m_text": "I don't know it seemed like a pretty good spot to me. Look at the moon - view the moon view I got from here."
        },
        {
            "time": 375.59,
            "type": "F_end",
            "f_text": "Yes, I noticed that. It looks pretty on the water doesn't it? Big old white moon.",
            "m_text": "I don't know it seemed like a pretty good spot to me. Look at the moon - view the moon view I got from here."
        },
        {
            "time": 391.54,
            "type": "M_end",
            "f_text": "No. No. I think you might be right. I think this may be the spot after all.",
            "m_text": "You still cold? Do you want my jacket? Do you want to go home?"
        },
        {
            "time": 400.12,
            "type": "F_end",
            "f_text": "No. No. I think you might be right. I think this may be the spot after all.",
            "m_text": "You still cold? Do you want my jacket? Do you want to go home?"
        },
        {
            "time": 409.48,
            "type": "M_end",
            "f_text": "Or not.",
            "m_text": "Shh, if we're very quiet the fish might come."
        },
        {
            "time": 412.12,
            "type": "F_end",
            "f_text": "Or not.",
            "m_text": "Shh, if we're very quiet the fish might come."
        }
    ],
    "Ses02M_script03_2.mp4": [
        {
            "time": 98.2496,
            "type": "M_end",
            "f_text": "watch me a minute, will you?",
            "m_text": "That reply has broken my heart."
        },
        {
            "time": 102.8988,
            "type": "F_end",
            "f_text": "watch me a minute, will you?",
            "m_text": "That reply has broken my heart."
        }
    ],
    "Ses03M_script01_1.mp4": [
        {
            "time": 47.2837,
            "type": "M_end",
            "f_text": "He cried hard?",
            "m_text": "No.  I figured the best thing to do was leave him alone."
        },
        {
            "time": 49.4985,
            "type": "F_end",
            "f_text": "He cried hard?",
            "m_text": "No.  I figured the best thing to do was leave him alone."
        },
        {
            "time": 51.432,
            "type": "M_end",
            "f_text": "God, what was he doing out there anyway?",
            "m_text": "I could hear it right through the floor."
        },
        {
            "time": 54.8596,
            "type": "F_end",
            "f_text": "God, what was he doing out there anyway?",
            "m_text": "I could hear it right through the floor."
        },
        {
            "time": 273.2258,
            "type": "M_end",
            "f_text": "Well that's a good answer but, it doesn't answer anything.  You haven't seen her since you left to go to the war and it's been five years.",
            "m_text": "Because it is."
        },
        {
            "time": 282.9111,
            "type": "F_end",
            "f_text": "Well that's a good answer but, it doesn't answer anything.  You haven't seen her since you left to go to the war and it's been five years.",
            "m_text": "Because it is."
        },
        {
            "time": 333.3939,
            "type": "M_end",
            "f_text": "What the hell is this?",
            "m_text": "But if I can't have that here I'll get out."
        },
        {
            "time": 336.3425,
            "type": "F_end",
            "f_text": "What the hell is this?",
            "m_text": "But if I can't have that here I'll get out."
        },
        {
            "time": 376.0898,
            "type": "M_end",
            "f_text": "Tell me something.  You can leave this business?",
            "m_text": "Now Annie is in the middle of all that.  Where do I find it?"
        },
        {
            "time": 381.0642,
            "type": "F_end",
            "f_text": "Tell me something.  You can leave this business?",
            "m_text": "Now Annie is in the middle of all that.  Where do I find it?"
        },
        {
            "time": 389.8003,
            "type": "M_end",
            "f_text": "Alright but you can't talk like that you hear?",
            "m_text": "Then help me stay here."
        },
        {
            "time": 394.1947,
            "type": "F_end",
            "f_text": "Alright but you can't talk like that you hear?",
            "m_text": "Then help me stay here."
        },
        {
            "time": 410.5946,
            "type": "M_end",
            "f_text": "I don't understand you do I?",
            "m_text": "I am thinking like that."
        },
        {
            "time": 414.7429,
            "type": "F_end",
            "f_text": "I don't understand you do I?",
            "m_text": "I am thinking like that."
        },
        {
            "time": 418.5924,
            "type": "M_end",
            "f_text": "Yeah.  I can see that.",
            "m_text": "No you don't.  I'm a pretty tough guy."
        },
        {
            "time": 422.6352,
            "type": "F_end",
            "f_text": "Yeah.  I can see that.",
            "m_text": "No you don't.  I'm a pretty tough guy."
        }
    ],
    "Ses03M_script01_2.mp4": [
        {
            "time": 42.205,
            "type": "M_end",
            "f_text": "What's going on here Joe?",
            "m_text": "Well, so what?"
        },
        {
            "time": 45.705,
            "type": "F_end",
            "f_text": "What's going on here Joe?",
            "m_text": "Well, so what?"
        },
        {
            "time": 136.2145,
            "type": "M_end",
            "f_text": "I can't do it all alone.",
            "m_text": "Okay. Calm yourself. Just calm yourself."
        },
        {
            "time": 140.7125,
            "type": "F_end",
            "f_text": "I can't do it all alone.",
            "m_text": "Okay. Calm yourself. Just calm yourself."
        },
        {
            "time": 157.9626,
            "type": "M_end",
            "f_text": "Look, just keep believing okay?",
            "m_text": "Alright, alright, calm yourself okay?  Calm yourself. Wait, wait.  What do you mean, me above all?"
        },
        {
            "time": 161.2573,
            "type": "F_end",
            "f_text": "Look, just keep believing okay?",
            "m_text": "Alright, alright, calm yourself okay?  Calm yourself. Wait, wait.  What do you mean, me above all?"
        }
    ],
    "Ses03M_script01_3.mp4": [
        {
            "time": 90.2475,
            "type": "M_end",
            "f_text": "Well,",
            "m_text": "I mean, that's the reason why I asked you here."
        },
        {
            "time": 93.4022,
            "type": "F_end",
            "f_text": "Well,",
            "m_text": "I mean, that's the reason why I asked you here."
        },
        {
            "time": 140.485,
            "type": "M_end",
            "f_text": "You started to write me.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 143.56,
            "type": "F_end",
            "f_text": "You started to write me.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 151.2361,
            "type": "M_end",
            "f_text": "I was waiting for you Chris, I mean, till then you never wrote and then when you did what did you say?",
            "m_text": "Why didn't you let me know?"
        },
        {
            "time": 158.5199,
            "type": "F_end",
            "f_text": "I was waiting for you Chris, I mean, till then you never wrote and then when you did what did you say?",
            "m_text": "Why didn't you let me know?"
        },
        {
            "time": 177.5798,
            "type": "M_end",
            "f_text": "I'll never forgive you for that.",
            "m_text": "Oh God.  Annie, I kissed Annie.  I kissed Annie."
        },
        {
            "time": 181.6575,
            "type": "M_end",
            "f_text": "I mean,  Why did you wait all these years?  There I was sitting around and wondering if I was crazy for thinking about you.",
            "m_text": "How long, how long I've been waiting to do that."
        },
        {
            "time": 183.4461,
            "type": "F_end",
            "f_text": "I'll never forgive you for that.",
            "m_text": "Oh God.  Annie, I kissed Annie.  I kissed Annie."
        },
        {
            "time": 190.0102,
            "type": "F_end",
            "f_text": "I mean,  Why did you wait all these years?  There I was sitting around and wondering if I was crazy for thinking about you.",
            "m_text": "How long, how long I've been waiting to do that."
        },
        {
            "time": 382.1793,
            "type": "M_end",
            "f_text": "And you still feel that way?",
            "m_text": "And I didn't want to take any of it and I guess that included you."
        },
        {
            "time": 385.8212,
            "type": "F_end",
            "f_text": "And you still feel that way?",
            "m_text": "And I didn't want to take any of it and I guess that included you."
        },
        {
            "time": 410.6601,
            "type": "M_end",
            "f_text": "What am I going to do with a fortune?",
            "m_text": "Annie I'm going to make a fortune for you."
        },
        {
            "time": 414.978,
            "type": "F_end",
            "f_text": "What am I going to do with a fortune?",
            "m_text": "Annie I'm going to make a fortune for you."
        }
    ],
    "Ses03M_script02_1.mp4": [
        {
            "time": 131.0047,
            "type": "M_end",
            "f_text": "Look, I'm cold.",
            "m_text": "I wonder if they can hear us talk?  Or feel the vibrations in the sand when we move around?"
        },
        {
            "time": 134.5338,
            "type": "F_end",
            "f_text": "Look, I'm cold.",
            "m_text": "I wonder if they can hear us talk?  Or feel the vibrations in the sand when we move around?"
        }
    ],
    "Ses03M_script02_2.mp4": [
        {
            "time": 11.5957,
            "type": "M_end",
            "f_text": "It's ridiculous.",
            "m_text": "About what I just said?"
        },
        {
            "time": 13.835,
            "type": "F_end",
            "f_text": "It's ridiculous.",
            "m_text": "About what I just said?"
        },
        {
            "time": 168.217,
            "type": "M_end",
            "f_text": "Look, do you remember the first time we came here?",
            "m_text": "And then I'm putting the animals out in the yard, I'm pulling the car out of the garage, putting my jacket on."
        },
        {
            "time": 173.7529,
            "type": "F_end",
            "f_text": "Look, do you remember the first time we came here?",
            "m_text": "And then I'm putting the animals out in the yard, I'm pulling the car out of the garage, putting my jacket on."
        },
        {
            "time": 207.1274,
            "type": "M_end",
            "f_text": "What?  Dancing barefoot in the sand?  Drinking out of a bottle of champagne?",
            "m_text": "Wait a minute.  I've got it."
        },
        {
            "time": 216.0121,
            "type": "F_end",
            "f_text": "What?  Dancing barefoot in the sand?  Drinking out of a bottle of champagne?",
            "m_text": "Wait a minute.  I've got it."
        },
        {
            "time": 390.9041,
            "type": "M_end",
            "f_text": "Well, I guess this is the wrong spot for the right people.",
            "m_text": "Actually, now that you mention it, no I don't."
        },
        {
            "time": 399.6521,
            "type": "F_end",
            "f_text": "Well, I guess this is the wrong spot for the right people.",
            "m_text": "Actually, now that you mention it, no I don't."
        }
    ],
    "Ses03M_script03_1.mp4": [
        {
            "time": 36.46,
            "type": "M_end",
            "f_text": "That sent shivers up my spine.",
            "m_text": "Hello?  Hello?  What?"
        },
        {
            "time": 42.6425,
            "type": "F_end",
            "f_text": "That sent shivers up my spine.",
            "m_text": "Hello?  Hello?  What?"
        },
        {
            "time": 126.29,
            "type": "M_end",
            "f_text": "What happens if one of us dies?  I mean, does the other one still laugh?",
            "m_text": "Well, it depends on how well we've played."
        },
        {
            "time": 131.1025,
            "type": "F_end",
            "f_text": "What happens if one of us dies?  I mean, does the other one still laugh?",
            "m_text": "Well, it depends on how well we've played."
        },
        {
            "time": 215.43,
            "type": "M_end",
            "f_text": "Yeah.  I know you did.  You threw it out the window and into the Grand Canal.  I don't think I'll ever forgive you for that.",
            "m_text": "Horrible little thing."
        },
        {
            "time": 223.1175,
            "type": "F_end",
            "f_text": "Yeah.  I know you did.  You threw it out the window and into the Grand Canal.  I don't think I'll ever forgive you for that.",
            "m_text": "Horrible little thing."
        },
        {
            "time": 231.48,
            "type": "M_end",
            "f_text": "I burnt a hole in my comb too and all the towels in the bathroom.",
            "m_text": "Oh, the worst one was in Cannes when you-"
        },
        {
            "time": 238.1252,
            "type": "F_end",
            "f_text": "I burnt a hole in my comb too and all the towels in the bathroom.",
            "m_text": "Oh, the worst one was in Cannes when you-"
        }
    ],
    "Ses04M_script02_1.mp4": [
        {
            "time": 177.2232,
            "type": "M_end",
            "f_text": "This isn't a moon landing we're talking about.  It's fish.  It's fish nobody even eats.",
            "m_text": "Oh, it's a big night for these guys.  Uh, life's last orgy."
        },
        {
            "time": 183.72,
            "type": "F_end",
            "f_text": "This isn't a moon landing we're talking about.  It's fish.  It's fish nobody even eats.",
            "m_text": "Oh, it's a big night for these guys.  Uh, life's last orgy."
        }
    ],
    "Ses04M_script02_2.mp4": [
        {
            "time": 141.2,
            "type": "M_end",
            "f_text": "Do you remember the first time we came to see it?",
            "m_text": "Uh,okay.  So I'm putting on my jacket; putting out the animals;"
        },
        {
            "time": 146.23,
            "type": "F_end",
            "f_text": "Do you remember the first time we came to see it?",
            "m_text": "Uh,okay.  So I'm putting on my jacket; putting out the animals;"
        }
    ],
    "Ses04M_script03_2.mp4": [
        {
            "time": 138.02,
            "type": "M_end",
            "f_text": "It's a pity you didn't- It's a pity you didn't have more brandy.",
            "m_text": "Line?"
        },
        {
            "time": 141.2266,
            "type": "F_end",
            "f_text": "It's a pity you didn't- It's a pity you didn't have more brandy.",
            "m_text": "Line?"
        }
    ],
    "Ses05M_script01_1.mp4": [
        {
            "time": 43.08,
            "type": "M_end",
            "f_text": "He cried hard?",
            "m_text": "No.  I figured it was best to leave him alone."
        },
        {
            "time": 45.3,
            "type": "F_end",
            "f_text": "He cried hard?",
            "m_text": "No.  I figured it was best to leave him alone."
        },
        {
            "time": 47.96,
            "type": "M_end",
            "f_text": "What was he doing out there at that hour?  He's getting just like after Larry died, walking around at night.  He dreams.",
            "m_text": "I could hear him right through the floor in my room."
        },
        {
            "time": 58.84,
            "type": "F_end",
            "f_text": "What was he doing out there at that hour?  He's getting just like after Larry died, walking around at night.  He dreams.",
            "m_text": "I could hear him right through the floor in my room."
        },
        {
            "time": 60.41,
            "type": "M_end",
            "f_text": "What's the meaning of that?",
            "m_text": "I guess he is."
        },
        {
            "time": 63.56,
            "type": "F_end",
            "f_text": "What's the meaning of that?",
            "m_text": "I guess he is."
        },
        {
            "time": 106.05,
            "type": "M_end",
            "f_text": "how are you gonna prove it?  Can you prove it?",
            "m_text": "We have to say it to him."
        },
        {
            "time": 108.95,
            "type": "F_end",
            "f_text": "how are you gonna prove it?  Can you prove it?",
            "m_text": "We have to say it to him."
        },
        {
            "time": 149.75,
            "type": "M_end",
            "f_text": "Well, that's your business, Chris.",
            "m_text": "I'm going to ask her to marry me."
        },
        {
            "time": 153.19,
            "type": "F_end",
            "f_text": "Well, that's your business, Chris.",
            "m_text": "I'm going to ask her to marry me."
        },
        {
            "time": 240.27,
            "type": "M_end",
            "f_text": "Well, the trouble is you never saw enough women.",
            "m_text": "Well, if that's the case, then that's the end of it.  But from her letters it sounds like she has forgotten him.  I'll find out.  And then we'll thrash it out with dad, all right?  Mom, don't avoid me."
        },
        {
            "time": 244.02,
            "type": "F_end",
            "f_text": "Well, the trouble is you never saw enough women.",
            "m_text": "Well, if that's the case, then that's the end of it.  But from her letters it sounds like she has forgotten him.  I'll find out.  And then we'll thrash it out with dad, all right?  Mom, don't avoid me."
        },
        {
            "time": 287.27,
            "type": "M_end",
            "f_text": "Just give it some more thought.",
            "m_text": "All right then, mom."
        },
        {
            "time": 289.72,
            "type": "F_end",
            "f_text": "Just give it some more thought.",
            "m_text": "All right then, mom."
        },
        {
            "time": 325.03,
            "type": "M_end",
            "f_text": "You can't think like that.",
            "m_text": "Yes.  On this, I would."
        },
        {
            "time": 327.23,
            "type": "F_end",
            "f_text": "You can't think like that.",
            "m_text": "Yes.  On this, I would."
        },
        {
            "time": 344.05,
            "type": "M_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "I am thinking that way."
        },
        {
            "time": 348.79,
            "type": "F_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "I am thinking that way."
        }
    ],
    "Ses05M_script01_1b.mp4": [
        {
            "time": 24.83,
            "type": "M_end",
            "f_text": "What was he doing out here four in the morning?",
            "m_text": "About four this morning.  I heard it crack and I looked out the window and he was standing right there when it cracked."
        },
        {
            "time": 28.87,
            "type": "F_end",
            "f_text": "What was he doing out here four in the morning?",
            "m_text": "About four this morning.  I heard it crack and I looked out the window and he was standing right there when it cracked."
        },
        {
            "time": 44.06,
            "type": "M_end",
            "f_text": "He's dreaming about him again.  He's getting just like after Larry died. What's the meaning of that?",
            "m_text": "No.  I figured it was best to leave him alone."
        },
        {
            "time": 55.02,
            "type": "F_end",
            "f_text": "He's dreaming about him again.  He's getting just like after Larry died. What's the meaning of that?",
            "m_text": "No.  I figured it was best to leave him alone."
        },
        {
            "time": 152.28,
            "type": "M_end",
            "f_text": "Well, that's your business, Chris.",
            "m_text": "I'm gonna ask her to marry me."
        },
        {
            "time": 155.11,
            "type": "F_end",
            "f_text": "Well, that's your business, Chris.",
            "m_text": "I'm gonna ask her to marry me."
        },
        {
            "time": 241.85,
            "type": "M_end",
            "f_text": "I just don't see why it has to be Annie.",
            "m_text": "So what, I'm not fast with women?"
        },
        {
            "time": 245.17,
            "type": "F_end",
            "f_text": "I just don't see why it has to be Annie.",
            "m_text": "So what, I'm not fast with women?"
        },
        {
            "time": 369.6377,
            "type": "M_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "Well, I am thinking like that."
        },
        {
            "time": 373.01,
            "type": "F_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "Well, I am thinking like that."
        }
    ],
    "Ses05M_script01_2.mp4": [
        {
            "time": 31.06,
            "type": "M_end",
            "f_text": "He's not going to marry her.",
            "m_text": "What are you talking about?  He grew up next to the girl his whole life, why wouldn't he want to see her again?  Don't look at me like that.  He hasn't told me anything he didn't told you."
        },
        {
            "time": 33.73,
            "type": "F_end",
            "f_text": "He's not going to marry her.",
            "m_text": "What are you talking about?  He grew up next to the girl his whole life, why wouldn't he want to see her again?  Don't look at me like that.  He hasn't told me anything he didn't told you."
        },
        {
            "time": 47.68,
            "type": "M_end",
            "f_text": "No.  She's not his girl, Joe.  She knows she's not.",
            "m_text": "Now listen."
        },
        {
            "time": 52.23,
            "type": "F_end",
            "f_text": "No.  She's not his girl, Joe.  She knows she's not.",
            "m_text": "Now listen."
        },
        {
            "time": 66.17,
            "type": "M_end",
            "f_text": "Because she knows what I know, that's why.  She's faithful as a rock.  In my worst moments I think of her waiting and I know again that I'm right.",
            "m_text": "How do you know why she's waited?"
        },
        {
            "time": 75.73,
            "type": "F_end",
            "f_text": "Because she knows what I know, that's why.  She's faithful as a rock.  In my worst moments I think of her waiting and I know again that I'm right.",
            "m_text": "How do you know why she's waited?"
        },
        {
            "time": 113.93,
            "type": "M_end",
            "f_text": "Believe with me, Joe.  I can't stand alone.",
            "m_text": "Calm yourself."
        },
        {
            "time": 117.53,
            "type": "F_end",
            "f_text": "Believe with me, Joe.  I can't stand alone.",
            "m_text": "Calm yourself."
        },
        {
            "time": 130.42,
            "type": "M_end",
            "f_text": "Just don't stop believing.",
            "m_text": "What do you mean, me above all?"
        },
        {
            "time": 133.18,
            "type": "F_end",
            "f_text": "Just don't stop believing.",
            "m_text": "What do you mean, me above all?"
        }
    ],
    "Ses05M_script01_3.mp4": [
        {
            "time": 38.67,
            "type": "M_end",
            "f_text": "You've been sort of embarrassed since I got here.",
            "m_text": "What?"
        },
        {
            "time": 43.17,
            "type": "F_end",
            "f_text": "You've been sort of embarrassed since I got here.",
            "m_text": "What?"
        },
        {
            "time": 53.46,
            "type": "M_end",
            "f_text": "I figured they would, your mother at least.",
            "m_text": "Well, I planned on kind of sneaking up on you in a period of a week or so, but they all take it for granted that we're set."
        },
        {
            "time": 57.13,
            "type": "F_end",
            "f_text": "I figured they would, your mother at least.",
            "m_text": "Well, I planned on kind of sneaking up on you in a period of a week or so, but they all take it for granted that we're set."
        },
        {
            "time": 78.59,
            "type": "M_end",
            "f_text": "Yes, that's why I came.",
            "m_text": "Well, so would you want to?  I mean, I guess you know that's why I asked you to come."
        },
        {
            "time": 82.18,
            "type": "F_end",
            "f_text": "Yes, that's why I came.",
            "m_text": "Well, so would you want to?  I mean, I guess you know that's why I asked you to come."
        },
        {
            "time": 131.61,
            "type": "M_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "So he's gone forever then?  You sure?"
        },
        {
            "time": 134.53,
            "type": "F_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "So he's gone forever then?  You sure?"
        },
        {
            "time": 137.07,
            "type": "M_end",
            "f_text": "You started to write me.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 139.56,
            "type": "F_end",
            "f_text": "You started to write me.",
            "m_text": "Why didn't you?"
        },
        {
            "time": 195.77,
            "type": "M_end",
            "f_text": "You have to tell me.",
            "m_text": "No, nothing like that."
        },
        {
            "time": 198.97,
            "type": "F_end",
            "f_text": "You have to tell me.",
            "m_text": "No, nothing like that."
        },
        {
            "time": 210.69,
            "type": "M_end",
            "f_text": "You have to tell me.",
            "m_text": "Yeah, I suppose I have been.  But it's going for me."
        },
        {
            "time": 213.37,
            "type": "F_end",
            "f_text": "You have to tell me.",
            "m_text": "Yeah, I suppose I have been.  But it's going for me."
        },
        {
            "time": 216.64,
            "type": "M_end",
            "f_text": "It wouldn't work like this.",
            "m_text": "I don't I don't know where to start."
        },
        {
            "time": 219.0581,
            "type": "F_end",
            "f_text": "It wouldn't work like this.",
            "m_text": "I don't I don't know where to start."
        },
        {
            "time": 233.1245,
            "type": "M_end",
            "f_text": "How many?",
            "m_text": "I lost them."
        },
        {
            "time": 235.64,
            "type": "F_end",
            "f_text": "How many?",
            "m_text": "I lost them."
        },
        {
            "time": 405.28,
            "type": "M_end",
            "f_text": "Do you still feel like that?",
            "m_text": "And I guess that included you."
        },
        {
            "time": 409.18,
            "type": "F_end",
            "f_text": "Do you still feel like that?",
            "m_text": "And I guess that included you."
        },
        {
            "time": 413.43,
            "type": "M_end",
            "f_text": "Because you can't feel like that anymore, Chris.  Because everything you have, you have a right to, me included.",
            "m_text": "I want you now, Annie."
        },
        {
            "time": 424.4,
            "type": "F_end",
            "f_text": "Because you can't feel like that anymore, Chris.  Because everything you have, you have a right to, me included.",
            "m_text": "I want you now, Annie."
        },
        {
            "time": 432.34,
            "type": "M_end",
            "f_text": "[LAUGHTER] What will I do with a fortune?",
            "m_text": "Oh, Annie,"
        },
        {
            "time": 437.72,
            "type": "F_end",
            "f_text": "[LAUGHTER] What will I do with a fortune?",
            "m_text": "Oh, Annie,"
        }
    ],
    "Ses05M_script02_1.mp4": [
        {
            "time": 146.85,
            "type": "M_end",
            "f_text": "I just don't.",
            "m_text": "Why not?"
        },
        {
            "time": 148.77,
            "type": "F_end",
            "f_text": "I just don't.",
            "m_text": "Why not?"
        },
        {
            "time": 150.67,
            "type": "M_end",
            "f_text": "it's stupid.",
            "m_text": "Oh"
        },
        {
            "time": 155.1,
            "type": "F_end",
            "f_text": "it's stupid.",
            "m_text": "Oh"
        }
    ],
    "Ses05M_script02_2.mp4": [
        {
            "time": 77.21,
            "type": "M_end",
            "f_text": "We We don't ever.  Have we ever?",
            "m_text": "Why not?"
        },
        {
            "time": 80.15,
            "type": "F_end",
            "f_text": "We We don't ever.  Have we ever?",
            "m_text": "Why not?"
        },
        {
            "time": 109.0,
            "type": "M_end",
            "f_text": "I did want to see it.  I always want to see it.  I just- I keep thinking this will be the time and it never is.",
            "m_text": "No, of course not."
        },
        {
            "time": 118.09,
            "type": "F_end",
            "f_text": "I did want to see it.  I always want to see it.  I just- I keep thinking this will be the time and it never is.",
            "m_text": "No, of course not."
        },
        {
            "time": 198.95,
            "type": "M_end",
            "f_text": "Dancing barefoot in the sand, drinking champagne out of the bottle.",
            "m_text": "Wait a minute.  I've got it."
        },
        {
            "time": 207.03,
            "type": "F_end",
            "f_text": "Dancing barefoot in the sand, drinking champagne out of the bottle.",
            "m_text": "Wait a minute.  I've got it."
        },
        {
            "time": 313.702,
            "type": "M_end",
            "f_text": "But this isn't at all what I wanted it to be.",
            "m_text": "Right."
        },
        {
            "time": 318.2969,
            "type": "F_end",
            "f_text": "But this isn't at all what I wanted it to be.",
            "m_text": "Right."
        },
        {
            "time": 321.99,
            "type": "M_end",
            "f_text": "This is just this.  I mean, it's a lot and everything.  But it's not, you know, something else.  Am I making any sense?",
            "m_text": "Now, I know.  Me either"
        },
        {
            "time": 332.19,
            "type": "F_end",
            "f_text": "This is just this.  I mean, it's a lot and everything.  But it's not, you know, something else.  Am I making any sense?",
            "m_text": "Now, I know.  Me either"
        },
        {
            "time": 370.19,
            "type": "M_end",
            "f_text": "Yes.  Don't you know that? I mean, You're probably the one you wishes you were with somebody else, somebody who didn't take everything so hard and who knew how to enjoy herself.",
            "m_text": "Really?"
        },
        {
            "time": 381.75,
            "type": "F_end",
            "f_text": "Yes.  Don't you know that? I mean, You're probably the one you wishes you were with somebody else, somebody who didn't take everything so hard and who knew how to enjoy herself.",
            "m_text": "Really?"
        },
        {
            "time": 389.38,
            "type": "M_end",
            "f_text": "Okay.  Well, we're in the wrong spot but we're with the right person.",
            "m_text": "Actually, now that you mention it, no.  I don't."
        },
        {
            "time": 394.59,
            "type": "F_end",
            "f_text": "Okay.  Well, we're in the wrong spot but we're with the right person.",
            "m_text": "Actually, now that you mention it, no.  I don't."
        },
        {
            "time": 400.7742,
            "type": "M_end",
            "f_text": "Yes, I did notice that.  It does look really beautiful over the water.  Big old white moon.",
            "m_text": "I don't know.  I think this is a pretty good spot.  I mean, look at the view of the moon from here."
        },
        {
            "time": 411.26,
            "type": "F_end",
            "f_text": "Yes, I did notice that.  It does look really beautiful over the water.  Big old white moon.",
            "m_text": "I don't know.  I think this is a pretty good spot.  I mean, look at the view of the moon from here."
        },
        {
            "time": 416.02,
            "type": "M_end",
            "f_text": "Augie, you brought refreshments.",
            "m_text": "Oh, well look what we've got here."
        },
        {
            "time": 418.43,
            "type": "F_end",
            "f_text": "Augie, you brought refreshments.",
            "m_text": "Oh, well look what we've got here."
        },
        {
            "time": 427.84,
            "type": "M_end",
            "f_text": "No.  I'm beginning to think you might be right. I think  this might be the spot after all.  Augie, I'm sorry.",
            "m_text": "Are you still cold?  Still want to go home?"
        },
        {
            "time": 441.78,
            "type": "F_end",
            "f_text": "No.  I'm beginning to think you might be right. I think  this might be the spot after all.  Augie, I'm sorry.",
            "m_text": "Are you still cold?  Still want to go home?"
        },
        {
            "time": 447.47,
            "type": "M_end",
            "f_text": "Or not.",
            "m_text": "Shh.  If we're really quiet, the fish might come."
        },
        {
            "time": 450.69,
            "type": "F_end",
            "f_text": "Or not.",
            "m_text": "Shh.  If we're really quiet, the fish might come."
        }
    ],
    "Ses05M_script03_1.mp4": [
        {
            "time": 108.52,
            "type": "M_end",
            "f_text": "Well, will we always bicker and fight?",
            "m_text": "[garbage] who knows?"
        },
        {
            "time": 112.96,
            "type": "F_end",
            "f_text": "Well, will we always bicker and fight?",
            "m_text": "[garbage] who knows?"
        },
        {
            "time": 119.61,
            "type": "M_end",
            "f_text": "What if one of us dies, does the other one laugh then?",
            "m_text": "Well, it depends on how well we played."
        },
        {
            "time": 124.42,
            "type": "F_end",
            "f_text": "What if one of us dies, does the other one laugh then?",
            "m_text": "Well, it depends on how well we played."
        },
        {
            "time": 223.83,
            "type": "M_end",
            "f_text": "And then the manager came in and saw us all rolling all over the floor, biting and scratching one another. [LAUGHTER]",
            "m_text": "Oh, I didn't hit you very hard."
        },
        {
            "time": 230.55,
            "type": "F_end",
            "f_text": "And then the manager came in and saw us all rolling all over the floor, biting and scratching one another. [LAUGHTER]",
            "m_text": "Oh, I didn't hit you very hard."
        }
    ],
    "Ses05M_script03_2.mp4": [
        {
            "time": 221.37,
            "type": "M_end",
            "f_text": "You know what, I'm sick and tire of listening to you.  You're a-- You're a total sadistic bully.",
            "m_text": "Very amusing indeed."
        },
        {
            "time": 227.95,
            "type": "F_end",
            "f_text": "You know what, I'm sick and tire of listening to you.  You're a-- You're a total sadistic bully.",
            "m_text": "Very amusing indeed."
        }
    ]
};

// 导出数据以供annotation系统使用
if (typeof window !== 'undefined') {
    window.DIALOG_DATA = DIALOG_DATA;
}
